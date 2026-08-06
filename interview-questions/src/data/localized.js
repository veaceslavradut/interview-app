import { categoriesMeta, enContentMeta } from './content-manifest';

// Two-layer content access (item 9 — code splitting):
//
//   LIGHT (synchronous)  — category meta + question text, no answers. Served from
//   the generated content-manifest.js, which ships in the entry bundle. Covers
//   every consumer that doesn't render an answer body: the home grid, category
//   lists, study lists, the suggest dropdown, quiz breadcrumbs, "question of the day".
//
//   HEAVY (async)        — the answer markdown. Lazy-loaded per category from the
//   real questions/<id>.js (+ content-en/<id>.js) files via import.meta.glob, so
//   the ~1.5 MB of answers stays out of first load. Only QuestionPage,
//   ReviewSessionPage, and the search index reach for it.
//
// Russian is the source of truth; English is an override that degrades gracefully.
// Untranslated content is returned as Russian with translated: false.

// --- LIGHT layer -----------------------------------------------------------

function localizeCategory(category, lang) {
  if (lang === 'ru') {
    return {
      ...category,
      questions: category.questions.map((q) => ({ ...q, translated: true })),
    };
  }
  const override = enContentMeta[category.id] || {};
  return {
    ...category,
    title: override.title ?? category.title,
    description: override.description ?? category.description,
    intro: override.intro ?? category.intro,
    questions: category.questions.map((q) => {
      const qOverride = override.questions?.[q.id];
      return qOverride
        ? { ...q, ...qOverride, translated: true }
        : { ...q, translated: false };
    }),
  };
}

export function getCategories(lang) {
  return categoriesMeta.map((c) => localizeCategory(c, lang));
}

export function getCategory(categoryId, lang) {
  const category = categoriesMeta.find((c) => c.id === categoryId);
  return category ? localizeCategory(category, lang) : null;
}

export function getQuestion(categoryId, questionId, lang) {
  const category = getCategory(categoryId, lang);
  if (!category) return null;
  const index = category.questions.findIndex((q) => q.id === questionId);
  if (index === -1) return null;
  return {
    category,
    question: category.questions[index],
    prev: index > 0 ? category.questions[index - 1] : null,
    next: index < category.questions.length - 1 ? category.questions[index + 1] : null,
  };
}

// --- HEAVY layer (lazy answers) -------------------------------------------

// Each file exports a single `export const <camelCaseId> = {...}`, so the one
// module export is the category / override object.
const ruLoaders = import.meta.glob('./questions/*.js');
const enLoaders = import.meta.glob('./content-en/*.js');

const firstExport = (mod) => Object.values(mod)[0];
const rawCache = new Map();

function loadRaw(categoryId) {
  if (!rawCache.has(categoryId)) {
    const ruLoad = ruLoaders[`./questions/${categoryId}.js`];
    if (!ruLoad) return Promise.resolve(null);
    rawCache.set(
      categoryId,
      (async () => {
        const ruCat = firstExport(await ruLoad());
        const enLoad = enLoaders[`./content-en/${categoryId}.js`];
        const enCat = enLoad ? firstExport(await enLoad()) : null;
        return { ruCat, enCat };
      })()
    );
  }
  return rawCache.get(categoryId);
}

// The one answer for a question, localized. translated reflects whether an EN
// answer override exists (drives the "only in Russian" note and speech language).
export async function loadAnswer(categoryId, questionId, lang) {
  const raw = await loadRaw(categoryId);
  if (!raw) return null;
  const ruQuestion = raw.ruCat.questions.find((q) => q.id === questionId);
  if (!ruQuestion) return null;
  const enAnswer = lang === 'en' ? raw.enCat?.questions?.[questionId]?.answer : undefined;
  return {
    answer: enAnswer ?? ruQuestion.answer,
    translated: enAnswer != null,
  };
}

function localizeFull(ruCat, enCat, lang) {
  if (lang === 'ru' || !enCat) {
    return {
      ...ruCat,
      questions: ruCat.questions.map((q) => ({ ...q, translated: lang === 'ru' })),
    };
  }
  return {
    ...ruCat,
    title: enCat.title ?? ruCat.title,
    description: enCat.description ?? ruCat.description,
    questions: ruCat.questions.map((q) => {
      const qOverride = enCat.questions?.[q.id];
      return qOverride ? { ...q, ...qOverride, translated: true } : { ...q, translated: false };
    }),
  };
}

// One category with answers included — for the review queue (loads only the
// chunks that actually hold due cards, not the whole corpus).
export async function loadCategoryFull(categoryId, lang) {
  const raw = await loadRaw(categoryId);
  return raw ? localizeFull(raw.ruCat, raw.enCat, lang) : null;
}

// Every category with answers included — for the search index.
// Heavy: pulls all lazy chunks, so call it only when that data is actually needed.
export async function loadAllFull(lang) {
  const loaded = await Promise.all(
    categoriesMeta.map(async (meta) => {
      const raw = await loadRaw(meta.id);
      return raw ? localizeFull(raw.ruCat, raw.enCat, lang) : null;
    })
  );
  return loaded.filter(Boolean);
}

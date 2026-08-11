// Per-page <title> / description builders (item 11 — prerender + client title sync).
//
// Shared by two consumers so they never drift:
//   - scripts/prerender.mjs (Node) bakes these into a static <head> per route,
//     so crawlers and link-preview bots get real titles + OG meta on first fetch;
//   - useDocumentTitle (client) sets document.title on SPA navigation, since the
//     app has no server round-trip between routes.
//
// Titles are built from already-localized text (question / category) + the brand,
// so they read correctly in both languages; descriptions are language-aware.

const SITE = 'Java Interview Hub';

export function homeTitle(lang = 'ru') {
  return lang === 'en'
    ? 'Java Interview Hub — Java Developer interview prep'
    : 'Java Interview Hub — подготовка к собеседованию Java Developer';
}

export function homeDescription(lang = 'ru') {
  return lang === 'en'
    ? 'Java Developer interview prep: hundreds of questions with answers and quizzes on Java, Spring, concurrency, the JVM and more.'
    : 'Подготовка к собеседованию Java-разработчика: сотни вопросов с ответами и квизы по Java, Spring, многопоточности, JVM и не только.';
}

export function interviewTitle(lang = 'ru') {
  return lang === 'en'
    ? `Mock Interview — Senior Java Developer · ${SITE}`
    : `Мок-интервью — Senior Java Developer · ${SITE}`;
}

export function interviewDescription(lang = 'ru') {
  return lang === 'en'
    ? 'A cross-topic mock interview for a Senior Java Developer: a randomized set of questions across the JVM, concurrency, Spring, system design and more.'
    : 'Кросс-темное мок-интервью на позицию Senior Java Developer: случайный набор вопросов по JVM, многопоточности, Spring, System Design и не только.';
}

export function categoryTitle(cat) {
  return `${cat.title} · ${SITE}`;
}

export function categoryDescription(cat, count, lang = 'ru') {
  return lang === 'en'
    ? `${cat.description}. ${count} interview questions with answers.`
    : `${cat.description}. ${count} вопросов с ответами для подготовки к собеседованию.`;
}

export function questionTitle(q, cat) {
  return `${q.question} · ${cat.title} · ${SITE}`;
}

export function questionDescription(q, cat, lang = 'ru') {
  return lang === 'en'
    ? `${cat.title} interview question: ${q.question} Answer and explanation for Java developer interview prep.`
    : `Вопрос по теме «${cat.title}»: ${q.question} Ответ и разбор для подготовки к собеседованию Java-разработчика.`;
}

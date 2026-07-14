import { categories as ruCategories } from './questions';
import { enContent } from './content.en';

// Возвращает категорию на нужном языке.
// Для непереведённых вопросов остаётся русский текст и ставится translated: false.
function localizeCategory(category, lang) {
  if (lang === 'ru') {
    return {
      ...category,
      questions: category.questions.map((q) => ({ ...q, translated: true })),
    };
  }
  const override = enContent[category.id] || {};
  return {
    ...category,
    title: override.title ?? category.title,
    description: override.description ?? category.description,
    questions: category.questions.map((q) => {
      const qOverride = override.questions?.[q.id];
      return qOverride
        ? { ...q, ...qOverride, translated: true }
        : { ...q, translated: false };
    }),
  };
}

export function getCategories(lang) {
  return ruCategories.map((c) => localizeCategory(c, lang));
}

export function getCategory(categoryId, lang) {
  const category = ruCategories.find((c) => c.id === categoryId);
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

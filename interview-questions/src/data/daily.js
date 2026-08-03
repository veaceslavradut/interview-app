import { categories } from './questions';
import { getQuestion } from './localized';

// Плоский список всех пар категория/вопрос — для случайного выбора и «вопроса дня»
const allQuestionRefs = categories.flatMap((c) =>
  c.questions.map((q) => ({ categoryId: c.id, questionId: q.id })),
);

export function getRandomQuestionPath() {
  const pick = allQuestionRefs[Math.floor(Math.random() * allQuestionRefs.length)];
  return `/category/${pick.categoryId}/question/${pick.questionId}`;
}

// Детерминированный выбор по дате: один и тот же вопрос в течение дня
export function getQuestionOfTheDay(lang) {
  const now = new Date();
  let x = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
  x = ((x >> 16) ^ x) * 0x45d9f3b;
  x = ((x >> 16) ^ x) * 0x45d9f3b;
  x = (x >> 16) ^ x;
  const pick = allQuestionRefs[Math.abs(x) % allQuestionRefs.length];
  return getQuestion(pick.categoryId, pick.questionId, lang);
}

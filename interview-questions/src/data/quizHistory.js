// История прохождений квизов, в localStorage (без бэкенда).
// Модель: { [categoryId]: [ { ts, correct, total, wrong: [slotId] }, ... ] } — новые сверху.

const STORAGE_KEY = 'interview-hub-quiz-history';
const MAX_ATTEMPTS = 10;

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return raw && typeof raw === 'object' ? raw : {};
  } catch {
    return {};
  }
}

export function getQuizHistory(categoryId) {
  const list = load()[categoryId];
  return Array.isArray(list) ? list : [];
}

export function addQuizAttempt(categoryId, { correct, total, wrong }) {
  const all = load();
  const list = Array.isArray(all[categoryId]) ? all[categoryId] : [];
  all[categoryId] = [{ ts: Date.now(), correct, total, wrong }, ...list].slice(0, MAX_ATTEMPTS);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {
    /* private mode / quota — история просто не сохранится */
  }
}

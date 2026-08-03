import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

// Study progress, persisted per-browser in localStorage (no backend).
//
// Model:
//   status:    { "<categoryId>/<questionId>": "known" | "review" }  — mutually exclusive study status
//   bookmarks: { "<categoryId>/<questionId>": true }                 — favourites (independent flag)
//   srs:       { "<categoryId>/<questionId>": { ease, interval, due } } — spaced-repetition schedule
//
// "known" counts toward a category's progress; "review" is a separate "come back to this" bucket.
// Questions marked "review" enter the flashcard queue; ratings (SM-2 lite) schedule the next due date.

const STORAGE_KEY = 'interview-hub-progress';
const DAY_MS = 24 * 60 * 60 * 1000;

export function keyOf(categoryId, questionId) {
  return `${categoryId}/${questionId}`;
}

function loadInitial() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return {
      status: raw && typeof raw.status === 'object' && raw.status ? raw.status : {},
      bookmarks: raw && typeof raw.bookmarks === 'object' && raw.bookmarks ? raw.bookmarks : {},
      srs: raw && typeof raw.srs === 'object' && raw.srs ? raw.srs : {},
    };
  } catch {
    return { status: {}, bookmarks: {}, srs: {} };
  }
}

// SM-2 lite: rating adjusts ease and the interval in days; "again" resets to due-now.
function nextSchedule(cur, rating) {
  let ease = cur?.ease ?? 2.5;
  let interval = cur?.interval ?? 0;
  if (rating === 'again') {
    ease = Math.max(1.3, ease - 0.2);
    interval = 0;
  } else if (rating === 'hard') {
    ease = Math.max(1.3, ease - 0.15);
    interval = Math.max(1, Math.round(interval * 1.2));
  } else if (rating === 'good') {
    interval = interval ? Math.round(interval * ease) : 1;
  } else {
    // easy
    ease = ease + 0.15;
    interval = interval ? Math.round(interval * ease * 1.3) : 3;
  }
  return { ease, interval, due: Date.now() + interval * DAY_MS };
}

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [state, setState] = useState(loadInitial);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* private mode / quota — progress just won't persist between sessions */
    }
  }, [state]);

  // Set a question's study status to "known" / "review" / null (cleared).
  const setStatus = useCallback((categoryId, questionId, next) => {
    const key = keyOf(categoryId, questionId);
    setState((prev) => {
      const status = { ...prev.status };
      if (next) status[key] = next;
      else delete status[key];
      return { ...prev, status };
    });
  }, []);

  const toggleBookmark = useCallback((categoryId, questionId) => {
    const key = keyOf(categoryId, questionId);
    setState((prev) => {
      const bookmarks = { ...prev.bookmarks };
      if (bookmarks[key]) delete bookmarks[key];
      else bookmarks[key] = true;
      return { ...prev, bookmarks };
    });
  }, []);

  // Rate a flashcard: 'again' | 'hard' | 'good' | 'easy'.
  const rateQuestion = useCallback((categoryId, questionId, rating) => {
    const key = keyOf(categoryId, questionId);
    setState((prev) => ({
      ...prev,
      srs: { ...prev.srs, [key]: nextSchedule(prev.srs[key], rating) },
    }));
  }, []);

  const clearAll = useCallback(() => setState({ status: {}, bookmarks: {}, srs: {} }), []);

  const value = useMemo(
    () => ({
      status: state.status,
      bookmarks: state.bookmarks,
      srs: state.srs,
      getStatus: (categoryId, questionId) => state.status[keyOf(categoryId, questionId)] || null,
      isBookmarked: (categoryId, questionId) => Boolean(state.bookmarks[keyOf(categoryId, questionId)]),
      knownCount: (categoryId, questions) =>
        questions.reduce(
          (n, q) => (state.status[keyOf(categoryId, q.id)] === 'known' ? n + 1 : n),
          0
        ),
      // Due for review: marked "review" and either never rated or the schedule has come due.
      isDue: (categoryId, questionId) => {
        const key = keyOf(categoryId, questionId);
        if (state.status[key] !== 'review') return false;
        const card = state.srs[key];
        return !card || card.due <= Date.now();
      },
      setStatus,
      toggleBookmark,
      rateQuestion,
      clearAll,
    }),
    [state, setStatus, toggleBookmark, rateQuestion, clearAll]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  return useContext(ProgressContext);
}

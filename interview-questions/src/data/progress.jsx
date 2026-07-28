import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

// Study progress, persisted per-browser in localStorage (no backend).
//
// Model:
//   status:    { "<categoryId>/<questionId>": "known" | "review" }  — mutually exclusive study status
//   bookmarks: { "<categoryId>/<questionId>": true }                 — favourites (independent flag)
//
// "known" counts toward a category's progress; "review" is a separate "come back to this" bucket.

const STORAGE_KEY = 'interview-hub-progress';

export function keyOf(categoryId, questionId) {
  return `${categoryId}/${questionId}`;
}

function loadInitial() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return {
      status: raw && typeof raw.status === 'object' && raw.status ? raw.status : {},
      bookmarks: raw && typeof raw.bookmarks === 'object' && raw.bookmarks ? raw.bookmarks : {},
    };
  } catch {
    return { status: {}, bookmarks: {} };
  }
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

  const clearAll = useCallback(() => setState({ status: {}, bookmarks: {} }), []);

  const value = useMemo(
    () => ({
      status: state.status,
      bookmarks: state.bookmarks,
      getStatus: (categoryId, questionId) => state.status[keyOf(categoryId, questionId)] || null,
      isBookmarked: (categoryId, questionId) => Boolean(state.bookmarks[keyOf(categoryId, questionId)]),
      knownCount: (categoryId, questions) =>
        questions.reduce(
          (n, q) => (state.status[keyOf(categoryId, q.id)] === 'known' ? n + 1 : n),
          0
        ),
      setStatus,
      toggleBookmark,
      clearAll,
    }),
    [state, setStatus, toggleBookmark, clearAll]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  return useContext(ProgressContext);
}

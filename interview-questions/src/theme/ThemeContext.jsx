import { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'interview-hub-theme';
export const THEMES = ['light', 'dark'];

// Начальная тема: сохранённая в localStorage, иначе — системная (prefers-color-scheme).
function getInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (THEMES.includes(saved)) return saved;
  } catch {
    /* приватный режим / доступ запрещён — просто идём к системной теме */
  }
  if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {}, setTheme: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // Тема живёт в data-theme на <html> (CSS переключает переменные по нему),
  // и сохраняется между визитами. Инлайн-скрипт в index.html ставит её ещё до
  // старта React, чтобы не мигало — здесь просто держим в синхроне.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* запись запрещена — тема просто не сохранится между сессиями */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

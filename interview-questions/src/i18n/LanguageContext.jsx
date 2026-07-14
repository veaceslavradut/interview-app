import { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'interview-hub-lang';
export const LANGUAGES = ['ru', 'en'];

const LanguageContext = createContext({ lang: 'ru', setLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return LANGUAGES.includes(saved) ? saved : 'ru';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

import { useTheme } from '../theme/ThemeContext';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useLanguage();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={t(lang, 'themeToggle')}
      title={t(lang, 'themeToggle')}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}

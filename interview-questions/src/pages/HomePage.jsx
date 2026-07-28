import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../data/localized';
import { useSearch } from '../components/SearchProvider';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

export default function HomePage() {
  const { lang } = useLanguage();
  const { openSearch } = useSearch();
  const categories = useMemo(() => getCategories(lang), [lang]);
  const totalQuestions = categories.reduce((sum, c) => sum + c.questions.length, 0);

  return (
    <div className="page">
      <header className="hero">
        <h1 className="hero-title">{t(lang, 'heroTitle')}</h1>
        <p className="hero-subtitle">{t(lang, 'heroSubtitle')}</p>

        {/* Prominent search affordance that opens the shared command palette. */}
        <button type="button" className="search-launcher" onClick={openSearch}>
          <span className="search-launcher-icon">🔍</span>
          <span className="search-launcher-text">{t(lang, 'searchPlaceholder')}</span>
          <kbd className="search-launcher-kbd">Ctrl / ⌘ K</kbd>
        </button>

        <p className="hero-stats">
          {categories.length} {t(lang, 'topics')} · {totalQuestions} {t(lang, 'questionsCount')}
        </p>
      </header>

      <main className="category-grid">
        {categories.map((category) => (
          <Link key={category.id} to={`/category/${category.id}`} className="category-card">
            <span className="category-icon">{category.icon}</span>
            <div className="category-info">
              <h2 className="category-title">{category.title}</h2>
              <p className="category-description">{category.description}</p>
            </div>
            <span className="category-count">{category.questions.length}</span>
          </Link>
        ))}
      </main>

      <section className="suggest-banner">
        <p className="suggest-banner-text">{t(lang, 'suggestSubtitle')}</p>
        <div className="suggest-banner-actions">
          <Link to="/suggest" className="quiz-button">
            {t(lang, 'suggestCta')}
          </Link>
          <Link to="/suggestions" className="quiz-button quiz-button-secondary">
            {t(lang, 'suggestViewAll')}
          </Link>
        </div>
      </section>
    </div>
  );
}

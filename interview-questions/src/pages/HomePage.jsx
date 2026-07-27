import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../data/localized';
import { buildSearchIndex, searchQuestions } from '../data/search';
import Highlighted from '../components/Highlighted';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

const MAX_RESULTS = 50;

export default function HomePage() {
  const { lang } = useLanguage();
  const categories = useMemo(() => getCategories(lang), [lang]);
  const totalQuestions = categories.reduce((sum, c) => sum + c.questions.length, 0);

  const [query, setQuery] = useState('');
  const q = query.trim();

  const index = useMemo(() => buildSearchIndex(categories), [categories]);
  const results = useMemo(() => searchQuestions(index, query), [index, query]);

  return (
    <div className="page">
      <header className="hero">
        <h1 className="hero-title">{t(lang, 'heroTitle')}</h1>
        <p className="hero-subtitle">{t(lang, 'heroSubtitle')}</p>

        <div className="search-box">
          <input
            type="search"
            className="search-input"
            value={query}
            placeholder={t(lang, 'searchPlaceholder')}
            aria-label={t(lang, 'searchPlaceholder')}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query && (
            <button
              type="button"
              className="search-clear"
              aria-label={t(lang, 'searchClear')}
              onClick={() => setQuery('')}
            >
              ×
            </button>
          )}
        </div>

        {!q && (
          <p className="hero-stats">
            {categories.length} {t(lang, 'topics')} · {totalQuestions} {t(lang, 'questionsCount')}
          </p>
        )}
      </header>

      {q ? (
        <section>
          <p className="search-count">
            {results.length} {t(lang, 'searchResultsCount')}
          </p>

          {results.length === 0 ? (
            <div className="suggest-card suggest-empty">
              <p className="suggest-empty-text">{t(lang, 'searchNoResults')}</p>
            </div>
          ) : (
            <main className="question-list">
              {results.slice(0, MAX_RESULTS).map((item) => (
                <Link
                  key={`${item.catId}/${item.id}`}
                  to={`/category/${item.catId}/question/${item.id}`}
                  className="search-result"
                >
                  <span className="search-result-badge">
                    {item.catIcon} {item.catTitle}
                  </span>
                  <span className="search-result-question">
                    <Highlighted text={item.question} query={query} />
                  </span>
                  <span className="question-arrow">→</span>
                </Link>
              ))}
            </main>
          )}
        </section>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

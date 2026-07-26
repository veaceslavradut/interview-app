import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../data/localized';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

// Подсвечивает первое вхождение запроса в тексте вопроса.
function highlight(text, query) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="search-highlight">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

const MAX_RESULTS = 50;

export default function HomePage() {
  const { lang } = useLanguage();
  const categories = useMemo(() => getCategories(lang), [lang]);
  const totalQuestions = categories.reduce((sum, c) => sum + c.questions.length, 0);

  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();

  // плоский индекс всех вопросов для быстрого поиска (данные статичные, в памяти)
  const allQuestions = useMemo(
    () =>
      categories.flatMap((c) =>
        c.questions.map((question) => ({
          catId: c.id,
          catTitle: c.title,
          catIcon: c.icon,
          id: question.id,
          question: question.question,
          // предвычисленные строки в нижнем регистре для быстрого поиска
          questionLc: question.question.toLowerCase(),
          catTitleLc: c.title.toLowerCase(),
          answerLc: (question.answer || '').toLowerCase(),
        }))
      ),
    [categories]
  );

  // Ищем по тексту вопроса, названию темы и тексту ответа, чтобы находились и
  // термины из ответов (например, «BigDecimal»). Совпадения в заголовке вопроса
  // или названии темы показываем выше совпадений только в тексте ответа.
  const results = useMemo(() => {
    if (!q) return [];
    const primary = [];
    const secondary = [];
    for (const item of allQuestions) {
      if (item.questionLc.includes(q) || item.catTitleLc.includes(q)) primary.push(item);
      else if (item.answerLc.includes(q)) secondary.push(item);
    }
    return [...primary, ...secondary];
  }, [q, allQuestions]);

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
                    {highlight(item.question, q)}
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

import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../data/localized';
import { getQuestionOfTheDay } from '../data/daily';
import { useProgress } from '../data/progress';
import ProgressBar from '../components/ProgressBar';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

export default function HomePage() {
  const { lang } = useLanguage();
  const { status, bookmarks, knownCount } = useProgress();
  const categories = useMemo(() => getCategories(lang), [lang]);
  const qotd = useMemo(() => getQuestionOfTheDay(lang), [lang]);
  const totalQuestions = categories.reduce((sum, c) => sum + c.questions.length, 0);

  const bookmarkCount = Object.keys(bookmarks).length;
  const reviewCount = Object.values(status).filter((s) => s === 'review').length;

  return (
    <div className="page">
      <header className="hero">
        <h1 className="hero-title">{t(lang, 'heroTitle')}</h1>
        <p className="hero-subtitle">{t(lang, 'heroSubtitle')}</p>
        <p className="hero-stats">
          {categories.length} {t(lang, 'topics')} · {totalQuestions} {t(lang, 'questionsCount')}
        </p>
      </header>

      <nav className="study-nav">
        <Link to="/bookmarks" className="study-nav-link">
          ★ {t(lang, 'studyBookmarks')} <span className="study-nav-count">{bookmarkCount}</span>
        </Link>
        <Link to="/review" className="study-nav-link">
          ↻ {t(lang, 'studyReview')} <span className="study-nav-count">{reviewCount}</span>
        </Link>
        <Link to="/random" className="study-nav-link">
          🎲 {t(lang, 'randomQuestion')}
        </Link>
      </nav>

      {qotd && (
        <Link
          to={`/category/${qotd.category.id}/question/${qotd.question.id}`}
          className="qotd-card"
        >
          <span className="qotd-label">✨ {t(lang, 'qotdTitle')}</span>
          <span className="qotd-question">
            {qotd.category.icon} {qotd.question.question}
          </span>
          <span className="qotd-category">{qotd.category.title}</span>
        </Link>
      )}

      <main className="category-grid">
        {categories.map((category) => {
          const done = knownCount(category.id, category.questions);
          return (
            <Link key={category.id} to={`/category/${category.id}`} className="category-card">
              <span className="category-icon">{category.icon}</span>
              <div className="category-info">
                <h2 className="category-title">{category.title}</h2>
                <p className="category-description">{category.description}</p>
                {done > 0 && (
                  <ProgressBar done={done} total={category.questions.length} showLabel={false} />
                )}
              </div>
              <span className="category-count">{category.questions.length}</span>
            </Link>
          );
        })}
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

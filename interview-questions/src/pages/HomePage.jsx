import { Link } from 'react-router-dom';
import { getCategories } from '../data/localized';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

export default function HomePage() {
  const { lang } = useLanguage();
  const categories = getCategories(lang);
  const totalQuestions = categories.reduce((sum, c) => sum + c.questions.length, 0);

  return (
    <div className="page">
      <header className="hero">
        <h1 className="hero-title">{t(lang, 'heroTitle')}</h1>
        <p className="hero-subtitle">{t(lang, 'heroSubtitle')}</p>
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

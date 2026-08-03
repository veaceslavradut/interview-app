import { Link, useParams, Navigate } from 'react-router-dom';
import { getCategory } from '../data/localized';
import { hasQuiz } from '../data/quizzes';
import { useProgress } from '../data/progress';
import Breadcrumbs from '../components/Breadcrumbs';
import ProgressBar from '../components/ProgressBar';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const { lang } = useLanguage();
  const { getStatus, isBookmarked, knownCount } = useProgress();
  const category = getCategory(categoryId, lang);

  if (!category) {
    return <Navigate to="/" replace />;
  }

  const done = knownCount(category.id, category.questions);

  return (
    <div className="page">
      <Breadcrumbs items={[{ label: t(lang, 'home'), to: '/' }, { label: category.title }]} />

      <header className="category-header">
        <span className="category-header-icon">{category.icon}</span>
        <div className="category-header-info">
          <h1 className="category-header-title">{category.title}</h1>
          <p className="category-header-subtitle">
            {category.description} · {category.questions.length} {t(lang, 'questionsCount')}
          </p>
          <ProgressBar done={done} total={category.questions.length} />
        </div>
      </header>

      <main className="question-list">
        {category.questions.map((question, index) => {
          const status = getStatus(category.id, question.id);
          const bookmarked = isBookmarked(category.id, question.id);
          return (
            <Link
              key={question.id}
              to={`/category/${category.id}/question/${question.id}`}
              className="question-item"
            >
              <span className="question-number">{index + 1}</span>
              <span className="question-text">{question.question}</span>
              {bookmarked && <span className="question-mark mark-bookmark">★</span>}
              {status === 'known' && <span className="question-mark mark-known">✓</span>}
              {status === 'review' && <span className="question-mark mark-review">↻</span>}
              <span className="question-arrow">→</span>
            </Link>
          );
        })}
      </main>

      {hasQuiz(category.id) && (
        <Link to={`/category/${category.id}/quiz`} className="quiz-start-link">
          🎯 {t(lang, 'quizStart')}
        </Link>
      )}
    </div>
  );
}

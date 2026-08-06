import { Link, useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getCategory } from '../data/localized';
import { hasQuiz } from '../data/quizzes';
import { getQuizHistory } from '../data/quizHistory';
import { useProgress } from '../data/progress';
import Breadcrumbs from '../components/Breadcrumbs';
import ProgressBar from '../components/ProgressBar';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

// Порядок подтем на странице категории (домены экзамена по убыванию веса).
const SUBTOPIC_ORDER = [
  'General',
  'Applications & Integration',
  'Model Selection & Optimisation',
  'Agents & Workflows',
  'Prompt & Context Engineering',
  'Tools & MCPs',
  'Security & Safety',
  'Claude Code',
  'Eval, Testing & Debugging',
];

export default function CategoryPage() {
  const { categoryId } = useParams();
  const { lang } = useLanguage();
  const { getStatus, isBookmarked, knownCount } = useProgress();
  const category = getCategory(categoryId, lang);

  if (!category) {
    return <Navigate to="/" replace />;
  }

  const done = knownCount(category.id, category.questions);
  const quizHistory = getQuizHistory(category.id);

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

      {category.intro && (
        <section className="category-intro">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: (props) => <a {...props} target="_blank" rel="noopener noreferrer" />,
            }}
          >
            {category.intro}
          </ReactMarkdown>
        </section>
      )}

      {(() => {
        const renderItem = (question, number) => {
          const status = getStatus(category.id, question.id);
          const bookmarked = isBookmarked(category.id, question.id);
          return (
            <Link
              key={question.id}
              to={`/category/${category.id}/question/${question.id}`}
              className="question-item"
            >
              <span className="question-number">{number}</span>
              <span className="question-text">{question.question}</span>
              {bookmarked && <span className="question-mark mark-bookmark">★</span>}
              {status === 'known' && <span className="question-mark mark-known">✓</span>}
              {status === 'review' && <span className="question-mark mark-review">↻</span>}
              <span className="question-arrow">→</span>
            </Link>
          );
        };

        const questions = category.questions;
        // Категории без подтем рендерятся плоским списком, как раньше.
        if (!questions.some((q) => q.subtopic)) {
          return (
            <main className="question-list">
              {questions.map((q, i) => renderItem(q, i + 1))}
            </main>
          );
        }

        const groups = new Map();
        for (const q of questions) {
          const key = q.subtopic || 'General';
          if (!groups.has(key)) groups.set(key, []);
          groups.get(key).push(q);
        }
        const ordered = [
          ...SUBTOPIC_ORDER.filter((s) => groups.has(s)),
          ...[...groups.keys()].filter((s) => !SUBTOPIC_ORDER.includes(s)),
        ];
        return (
          <main>
            {ordered.map((sub) => (
              <section key={sub} className="subtopic-group">
                <h2 className="subtopic-heading">
                  {sub}
                  <span className="subtopic-count">{groups.get(sub).length}</span>
                </h2>
                <div className="question-list">
                  {groups.get(sub).map((q, i) => renderItem(q, i + 1))}
                </div>
              </section>
            ))}
          </main>
        );
      })()}

      {hasQuiz(category.id) && (
        <Link to={`/category/${category.id}/quiz`} className="quiz-start-link">
          🎯 {t(lang, 'quizStart')}
        </Link>
      )}

      {quizHistory.length > 0 && (
        <section className="quiz-history">
          <h2 className="quiz-history-title">{t(lang, 'quizHistoryTitle')}</h2>
          <ul className="quiz-history-list">
            {quizHistory.map((a) => {
              const percent = Math.round((a.correct / a.total) * 100);
              const cls =
                percent >= 80 ? 'quiz-result-good' : percent >= 50 ? 'quiz-result-ok' : 'quiz-result-bad';
              return (
                <li key={a.ts} className="quiz-history-item">
                  <span className="quiz-history-date">
                    {new Date(a.ts).toLocaleString(lang === 'ru' ? 'ru-RU' : 'en-US', {
                      dateStyle: 'medium',
                      timeStyle: 'short',
                    })}
                  </span>
                  <span className="quiz-history-score">
                    {a.correct} / {a.total}
                  </span>
                  <span className={`quiz-history-percent ${cls}`}>{percent}%</span>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}

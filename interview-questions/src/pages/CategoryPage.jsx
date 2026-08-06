import { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getCategory } from '../data/localized';
import { hasQuiz } from '../data/quizzes';
import { getQuizHistory } from '../data/quizHistory';
import { useProgress } from '../data/progress';
import { DIFFICULTIES } from '../data/taxonomy';
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

const DIFFICULTY_LABEL = { easy: 'difficultyEasy', medium: 'difficultyMedium', hard: 'difficultyHard' };

export default function CategoryPage() {
  const { categoryId } = useParams();
  const { lang } = useLanguage();
  const { getStatus, isBookmarked, knownCount } = useProgress();
  const category = getCategory(categoryId, lang);

  // Фильтры по сложности и тегам (item 14). Сбрасываем при смене категории —
  // компонент маршрута переиспользуется между категориями.
  const [difficulty, setDifficulty] = useState(null);
  const [activeTags, setActiveTags] = useState(() => new Set());
  useEffect(() => {
    setDifficulty(null);
    setActiveTags(new Set());
  }, [categoryId]);

  if (!category) {
    return <Navigate to="/" replace />;
  }

  const done = knownCount(category.id, category.questions);
  const quizHistory = getQuizHistory(category.id);

  const toggleTag = (tag) =>
    setActiveTags((prev) => {
      const next = new Set(prev);
      next.has(tag) ? next.delete(tag) : next.add(tag);
      return next;
    });
  const resetFilters = () => {
    setDifficulty(null);
    setActiveTags(new Set());
  };

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
              {question.difficulty && (
                <span className={`difficulty-badge difficulty-${question.difficulty}`}>
                  {t(lang, DIFFICULTY_LABEL[question.difficulty])}
                </span>
              )}
              {bookmarked && <span className="question-mark mark-bookmark">★</span>}
              {status === 'known' && <span className="question-mark mark-known">✓</span>}
              {status === 'review' && <span className="question-mark mark-review">↻</span>}
              <span className="question-arrow">→</span>
            </Link>
          );
        };

        const all = category.questions;
        // Доступные фасеты — только то, что реально проставлено в этой категории.
        const availableDifficulties = DIFFICULTIES.filter((d) => all.some((q) => q.difficulty === d));
        const availableTags = [...new Set(all.flatMap((q) => q.tags || []))].sort();
        const hasFacets = availableDifficulties.length > 0 || availableTags.length > 0;

        // Вопрос проходит фильтр, если совпадает по сложности и содержит ВСЕ
        // выбранные теги. Непроставленные поля просто не совпадают ни с чем.
        const filtered = all.filter(
          (q) =>
            (!difficulty || q.difficulty === difficulty) &&
            (activeTags.size === 0 || [...activeTags].every((tag) => (q.tags || []).includes(tag)))
        );

        const filterBar = hasFacets && (
          <div className="filter-bar">
            {availableDifficulties.length > 0 && (
              <div className="filter-group">
                <span className="filter-label">{t(lang, 'filterDifficulty')}</span>
                <button
                  type="button"
                  className={`filter-chip ${!difficulty ? 'is-active' : ''}`}
                  onClick={() => setDifficulty(null)}
                >
                  {t(lang, 'filterAll')}
                </button>
                {availableDifficulties.map((d) => (
                  <button
                    key={d}
                    type="button"
                    className={`filter-chip difficulty-${d} ${difficulty === d ? 'is-active' : ''}`}
                    onClick={() => setDifficulty(difficulty === d ? null : d)}
                  >
                    {t(lang, DIFFICULTY_LABEL[d])}
                  </button>
                ))}
              </div>
            )}
            {availableTags.length > 0 && (
              <div className="filter-group">
                <span className="filter-label">{t(lang, 'filterTags')}</span>
                {availableTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`filter-chip tag-chip ${activeTags.has(tag) ? 'is-active' : ''}`}
                    onClick={() => toggleTag(tag)}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            )}
            {(difficulty || activeTags.size > 0) && (
              <button type="button" className="filter-reset" onClick={resetFilters}>
                {t(lang, 'filterReset')}
              </button>
            )}
          </div>
        );

        let list;
        if (filtered.length === 0) {
          list = <p className="filter-empty">{t(lang, 'filterNoMatches')}</p>;
        } else if (!filtered.some((q) => q.subtopic)) {
          // Категории без подтем рендерятся плоским списком, как раньше.
          list = (
            <main className="question-list">
              {filtered.map((q, i) => renderItem(q, i + 1))}
            </main>
          );
        } else {
          const groups = new Map();
          for (const q of filtered) {
            const key = q.subtopic || 'General';
            if (!groups.has(key)) groups.set(key, []);
            groups.get(key).push(q);
          }
          const ordered = [
            ...SUBTOPIC_ORDER.filter((s) => groups.has(s)),
            ...[...groups.keys()].filter((s) => !SUBTOPIC_ORDER.includes(s)),
          ];
          list = (
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
        }

        return (
          <>
            {filterBar}
            {list}
          </>
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

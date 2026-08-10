import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../data/localized';
import { useProgress, keyOf } from '../data/progress';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

// One page for both study lists: mode="bookmarks" or mode="review".
export default function StudyListPage({ mode }) {
  const { lang } = useLanguage();
  const { status, bookmarks, clearAll, isDue } = useProgress();
  const categories = useMemo(() => getCategories(lang), [lang]);

  const items = useMemo(() => {
    const wanted =
      mode === 'bookmarks'
        ? new Set(Object.keys(bookmarks))
        : new Set(Object.keys(status).filter((k) => status[k] === 'review'));
    const out = [];
    for (const c of categories) {
      for (const q of c.questions) {
        if (wanted.has(keyOf(c.id, q.id))) {
          out.push({ catId: c.id, catTitle: c.title, catIcon: c.icon, id: q.id, question: q.question });
        }
      }
    }
    return out;
  }, [mode, status, bookmarks, categories]);

  const title = mode === 'bookmarks' ? t(lang, 'studyBookmarks') : t(lang, 'studyReview');
  const icon = mode === 'bookmarks' ? '★' : '↻';
  const emptyMsg = mode === 'bookmarks' ? t(lang, 'bookmarksEmpty') : t(lang, 'reviewEmpty');
  const dueCount =
    mode === 'review' ? items.filter((item) => isDue(item.catId, item.id)).length : 0;

  const onClear = () => {
    if (window.confirm(t(lang, 'clearProgressConfirm'))) clearAll();
  };

  return (
    <div className="page">
      <Breadcrumbs items={[{ label: t(lang, 'home'), to: '/' }, { label: title }]} />

      <header className="category-header">
        <span className="category-header-icon">{icon}</span>
        <div className="category-header-info">
          <h1 className="category-header-title">{title}</h1>
          <p className="category-header-subtitle">
            {items.length} {t(lang, 'questionsCount')}
          </p>
        </div>
      </header>

      {mode === 'review' && dueCount > 0 && (
        <Link to="/review/session" className="quiz-start-link review-start-link">
          ▶ {t(lang, 'reviewStartSession')} ({dueCount})
        </Link>
      )}

      {items.length === 0 ? (
        <div className="suggest-card suggest-empty">
          <p className="suggest-empty-text">{emptyMsg}</p>
        </div>
      ) : (
        <main className="question-list">
          {items.map((item) => (
            <Link
              key={`${item.catId}/${item.id}`}
              to={`/category/${item.catId}/question/${item.id}`}
              className="question-item"
            >
              <span className="search-result-badge">
                {item.catIcon} {item.catTitle}
              </span>
              <span className="search-result-question">{item.question}</span>
              <span className="question-arrow">→</span>
            </Link>
          ))}
        </main>
      )}

      <button type="button" className="clear-progress" onClick={onClear}>
        {t(lang, 'clearProgress')}
      </button>
    </div>
  );
}

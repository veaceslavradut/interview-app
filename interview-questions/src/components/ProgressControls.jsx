import { useProgress } from '../data/progress';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

// Per-question study controls: mark known / needs-review (mutually exclusive)
// and a bookmark toggle. Shown on the question page.
export default function ProgressControls({ categoryId, questionId }) {
  const { getStatus, isBookmarked, setStatus, toggleBookmark } = useProgress();
  const { lang } = useLanguage();

  const status = getStatus(categoryId, questionId);
  const bookmarked = isBookmarked(categoryId, questionId);

  // Clicking the active status clears it; otherwise switches to it.
  const toggleStatus = (value) =>
    setStatus(categoryId, questionId, status === value ? null : value);

  return (
    <div className="progress-controls">
      <button
        type="button"
        className={`progress-btn${status === 'known' ? ' is-known' : ''}`}
        aria-pressed={status === 'known'}
        onClick={() => toggleStatus('known')}
      >
        {t(lang, 'markKnown')}
      </button>
      <button
        type="button"
        className={`progress-btn${status === 'review' ? ' is-review' : ''}`}
        aria-pressed={status === 'review'}
        onClick={() => toggleStatus('review')}
      >
        {t(lang, 'markReview')}
      </button>
      <button
        type="button"
        className={`progress-btn${bookmarked ? ' is-bookmarked' : ''}`}
        aria-pressed={bookmarked}
        onClick={() => toggleBookmark(categoryId, questionId)}
      >
        {t(lang, bookmarked ? 'bookmarkRemove' : 'bookmarkAdd')}
      </button>
    </div>
  );
}

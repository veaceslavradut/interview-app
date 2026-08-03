import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

// Slim "N / total studied" progress bar. Used on category cards and headers.
export default function ProgressBar({ done, total, showLabel = true }) {
  const { lang } = useLanguage();
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="progress">
      <div
        className="progress-track"
        role="progressbar"
        aria-valuenow={done}
        aria-valuemin={0}
        aria-valuemax={total}
      >
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      {showLabel && (
        <span className="progress-label">
          {done} / {total} {t(lang, 'progressStudied')}
        </span>
      )}
    </div>
  );
}

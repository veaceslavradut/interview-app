import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../data/localized';
import { getSuggestions, deleteSuggestion } from '../data/suggestions';
import Breadcrumbs from '../components/Breadcrumbs';
import { useAuth } from '../auth/AuthContext';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

export default function SuggestionsPage() {
  const { lang } = useLanguage();
  const { isAdmin, getToken } = useAuth();

  const [suggestions, setSuggestions] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error
  const [deletingId, setDeletingId] = useState(null);
  const [deleteError, setDeleteError] = useState('');

  // грузим один раз за монтирование: список общий и от языка не зависит
  useEffect(() => {
    let cancelled = false;
    getSuggestions()
      .then((loaded) => {
        if (cancelled) return;
        setSuggestions(loaded);
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const categoriesById = useMemo(
    () => new Map(getCategories(lang).map((c) => [c.id, c])),
    [lang]
  );

  const handleDelete = async (id) => {
    if (!window.confirm(t(lang, 'suggestionDeleteConfirm'))) return;
    setDeleteError('');
    setDeletingId(id);
    try {
      const token = await getToken();
      await deleteSuggestion(id, token);
      setSuggestions((current) => current.filter((s) => s.id !== id));
    } catch {
      // истёкшая сессия или отказ Firestore — список не трогаем
      setDeleteError(t(lang, 'suggestionDeleteError'));
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="page">
      <Breadcrumbs
        items={[{ label: t(lang, 'home'), to: '/' }, { label: t(lang, 'suggestionsTitle') }]}
      />

      <header className="category-header">
        <span className="category-header-icon">💡</span>
        <div>
          <h1 className="category-header-title">{t(lang, 'suggestionsTitle')}</h1>
          {status === 'ready' && (
            <p className="category-header-subtitle">
              {suggestions.length} {t(lang, 'suggestionsCount')}
            </p>
          )}
        </div>
      </header>

      <p className="untranslated-note">{t(lang, 'suggestionsSharedNote')}</p>

      {status === 'loading' ? (
        <div className="suggest-card suggest-empty">
          <p className="suggest-empty-text">{t(lang, 'suggestionsLoading')}</p>
        </div>
      ) : status === 'error' ? (
        <div className="suggest-card suggest-empty">
          <p className="suggest-error">{t(lang, 'suggestionsLoadError')}</p>
        </div>
      ) : suggestions.length === 0 ? (
        <div className="suggest-card suggest-empty">
          <p className="suggest-empty-text">{t(lang, 'suggestionsEmpty')}</p>
          <Link to="/suggest" className="quiz-button">
            {t(lang, 'suggestionsEmptyCta')}
          </Link>
        </div>
      ) : (
        <>
          {deleteError && <p className="suggest-error">{deleteError}</p>}
          <main className="question-list">
            {suggestions.map((suggestion) => {
              // тема существующей категории берётся из data-слоя, чтобы
              // заголовок следовал выбранному языку; своя тема — как ввели
              const category = suggestion.categoryId
                ? categoriesById.get(suggestion.categoryId)
                : null;
              const label = category ? category.title : suggestion.customTopic;
              const icon = category ? category.icon : '💬';

              return (
                <article key={suggestion.id} className="suggestion-item">
                  <div className="suggestion-meta">
                    <span className="suggest-topic-badge">
                      {icon} {label}
                    </span>
                    <time className="suggestion-date" dateTime={suggestion.createdAt}>
                      {new Date(suggestion.createdAt).toLocaleDateString(lang)}
                    </time>
                  </div>
                  <p className="suggestion-question">{suggestion.question}</p>
                  {isAdmin && (
                    <button
                      type="button"
                      className="suggestion-delete"
                      disabled={deletingId === suggestion.id}
                      onClick={() => handleDelete(suggestion.id)}
                    >
                      {deletingId === suggestion.id
                        ? t(lang, 'suggestionDeleting')
                        : t(lang, 'suggestionDelete')}
                    </button>
                  )}
                </article>
              );
            })}
          </main>

          <Link to="/suggest" className="quiz-start-link">
            {t(lang, 'suggestionsAddMore')}
          </Link>
        </>
      )}
    </div>
  );
}

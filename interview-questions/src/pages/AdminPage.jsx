import { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { useAuth } from '../auth/AuthContext';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

// Скрытая страница входа для владельца — на неё нет ссылок в интерфейсе,
// заходят по прямому адресу /admin. Обычным посетителям она не нужна.
export default function AdminPage() {
  const { lang } = useLanguage();
  const { isAdmin, signIn, signOut } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setBusy(true);
    try {
      await signIn(email.trim(), password);
    } catch {
      setError(t(lang, 'adminSignInError'));
      setBusy(false);
    }
  };

  return (
    <div className="page">
      <Breadcrumbs
        items={[{ label: t(lang, 'home'), to: '/' }, { label: t(lang, 'adminTitle') }]}
      />

      <div className="suggest-card">
        {isAdmin ? (
          <>
            <h1 className="suggest-heading">{t(lang, 'adminLoggedIn')}</h1>
            <div className="quiz-actions">
              <Link to="/suggestions" className="quiz-button">
                {t(lang, 'suggestionsTitle')}
              </Link>
              <button
                type="button"
                className="quiz-button quiz-button-secondary"
                onClick={signOut}
              >
                {t(lang, 'adminSignOut')}
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="suggest-heading">{t(lang, 'adminTitle')}</h1>
            <form onSubmit={handleSubmit}>
              <label className="suggest-label" htmlFor="admin-email">
                {t(lang, 'adminEmailLabel')}
              </label>
              <input
                id="admin-email"
                className="suggest-input"
                type="email"
                autoComplete="username"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              <label className="suggest-label" htmlFor="admin-password">
                {t(lang, 'adminPasswordLabel')}
              </label>
              <input
                id="admin-password"
                className="suggest-input"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              {error && <p className="suggest-error">{error}</p>}

              <div className="quiz-actions">
                <button
                  type="submit"
                  className="quiz-button"
                  disabled={busy || !email.trim() || !password}
                >
                  {busy ? t(lang, 'adminSigningIn') : t(lang, 'adminSignIn')}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

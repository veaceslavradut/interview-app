import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

// Shows an "install app" button only when the browser fires `beforeinstallprompt`
// (Chromium desktop/Android). The event is stashed and replayed on click; the
// button hides itself once installed or when the choice has been made. Browsers
// without the event (e.g. iOS Safari) simply never render it — install there is
// the manual "Add to Home Screen" flow, which the manifest + apple-touch-icon
// already support.
export default function InstallButton() {
  const { lang } = useLanguage();
  const [promptEvent, setPromptEvent] = useState(null);

  useEffect(() => {
    const onBeforeInstall = (e) => {
      e.preventDefault();
      setPromptEvent(e);
    };
    const onInstalled = () => setPromptEvent(null);
    window.addEventListener('beforeinstallprompt', onBeforeInstall);
    window.addEventListener('appinstalled', onInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  if (!promptEvent) return null;

  const install = async () => {
    promptEvent.prompt();
    try {
      await promptEvent.userChoice;
    } finally {
      // A prompt can only be used once; drop it regardless of the user's choice.
      setPromptEvent(null);
    }
  };

  return (
    <button
      type="button"
      className="install-button"
      onClick={install}
      aria-label={t(lang, 'installApp')}
      title={t(lang, 'installApp')}
    >
      <span className="install-button-icon" aria-hidden="true">⬇</span>
      <span className="install-button-label">{t(lang, 'installApp')}</span>
    </button>
  );
}

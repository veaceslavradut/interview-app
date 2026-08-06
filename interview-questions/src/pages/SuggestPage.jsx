import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../data/localized';
import {
  addSuggestion,
  validateSuggestion,
  canSubmitNow,
  SUGGEST_LIMITS,
} from '../data/suggestions';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

const OTHER = 'other';
// последняя отправка с этого устройства — для анти-флуда (см. canSubmitNow)
const LAST_KEY = 'interview-hub-suggest-last';

export default function SuggestPage() {
  const { lang } = useLanguage();
  const categories = getCategories(lang);

  const [step, setStep] = useState('form'); // form | confirm | done
  const [topic, setTopic] = useState('');
  const [customTopic, setCustomTopic] = useState('');
  const [question, setQuestion] = useState('');
  const [honeypot, setHoneypot] = useState(''); // скрытое поле-ловушка для ботов
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  // когда открыли форму — мгновенное подтверждение выдаёт бота (см. minFillMs)
  const openedAt = useRef(Date.now());

  const isOther = topic === OTHER;
  const topicFilled = isOther ? customTopic.trim() !== '' : topic !== '';
  const canContinue = topicFilled && question.trim() !== '';

  const selectedCategory = categories.find((c) => c.id === topic);
  const topicLabel = isOther ? customTopic.trim() : selectedCategory?.title ?? '';
  const topicIcon = isOther ? '💬' : selectedCategory?.icon ?? '';

  const handleConfirm = async () => {
    setError('');

    // Ловушка сработала или форму «заполнили» мгновенно — это бот. Не пишем в
    // базу и не тратим квоту, но показываем обычный экран благодарности, чтобы
    // не подсказывать боту, что его отсекли.
    const tooFast = Date.now() - openedAt.current < SUGGEST_LIMITS.minFillMs;
    if (honeypot.trim() !== '' || tooFast) {
      setStep('done');
      return;
    }

    const invalid = validateSuggestion({ question, customTopic });
    if (invalid) {
      setError(t(lang, invalid));
      return;
    }

    let lastTs = 0;
    try {
      lastTs = Number(localStorage.getItem(LAST_KEY)) || 0;
    } catch {
      lastTs = 0;
    }
    if (!canSubmitNow(Date.now(), lastTs)) {
      setError(t(lang, 'suggestErrorCooldown'));
      return;
    }

    setSaving(true);
    try {
      await addSuggestion({
        categoryId: isOther ? null : topic,
        customTopic: isOther ? customTopic : '',
        question,
      });
      try {
        localStorage.setItem(LAST_KEY, String(Date.now()));
      } catch {
        /* приватный режим без localStorage — не критично */
      }
      setSaving(false);
      setStep('done');
    } catch {
      // сеть недоступна или правила Firestore отклонили запись — форма остаётся
      // заполненной, чтобы можно было просто нажать «Подтвердить» ещё раз
      setError(t(lang, 'suggestSaveError'));
      setSaving(false);
    }
  };

  return (
    <div className="page">
      <Breadcrumbs
        items={[{ label: t(lang, 'home'), to: '/' }, { label: t(lang, 'suggestTitle') }]}
      />

      <div className="suggest-card">
        {step === 'form' ? (
          <>
            <h1 className="suggest-heading">{t(lang, 'suggestTitle')}</h1>
            <p className="suggest-subtitle">{t(lang, 'suggestSubtitle')}</p>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (canContinue) setStep('confirm');
              }}
            >
              <label className="suggest-label" htmlFor="suggest-topic">
                {t(lang, 'suggestTopicLabel')}
              </label>
              <select
                id="suggest-topic"
                className="suggest-input"
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
              >
                <option value="">{t(lang, 'suggestTopicPlaceholder')}</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.title}
                  </option>
                ))}
                <option value={OTHER}>💬 {t(lang, 'suggestTopicOther')}</option>
              </select>

              {isOther && (
                <>
                  <label className="suggest-label" htmlFor="suggest-custom-topic">
                    {t(lang, 'suggestCustomTopicLabel')}
                  </label>
                  <input
                    id="suggest-custom-topic"
                    className="suggest-input"
                    type="text"
                    value={customTopic}
                    maxLength={SUGGEST_LIMITS.maxTopic}
                    placeholder={t(lang, 'suggestCustomTopicPlaceholder')}
                    onChange={(event) => setCustomTopic(event.target.value)}
                  />
                </>
              )}

              <label className="suggest-label" htmlFor="suggest-question">
                {t(lang, 'suggestQuestionLabel')}
              </label>
              <textarea
                id="suggest-question"
                className="suggest-input suggest-textarea"
                value={question}
                rows={4}
                maxLength={SUGGEST_LIMITS.maxQuestion}
                placeholder={t(lang, 'suggestQuestionPlaceholder')}
                onChange={(event) => setQuestion(event.target.value)}
              />

              {/* Honeypot: невидим для людей, но боты заполняют поля с такими
                  именами. Любое значение здесь помечает отправку как спам. */}
              <div className="suggest-hp" aria-hidden="true">
                <label htmlFor="suggest-website">Website</label>
                <input
                  id="suggest-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                />
              </div>

              <div className="quiz-actions">
                <button type="submit" className="quiz-button" disabled={!canContinue}>
                  {t(lang, 'suggestContinue')}
                </button>
              </div>
            </form>
          </>
        ) : step === 'confirm' ? (
          <>
            <h1 className="suggest-heading">{t(lang, 'suggestConfirmTitle')}</h1>
            <p className="suggest-subtitle">{t(lang, 'suggestConfirmHint')}</p>

            <div className="suggest-preview">
              <span className="suggest-topic-badge">
                {topicIcon} {topicLabel}
              </span>
              <p className="suggest-preview-question">{question.trim()}</p>
            </div>

            <p className="untranslated-note">{t(lang, 'suggestModerationNote')}</p>

            {error && <p className="suggest-error">{error}</p>}

            <div className="quiz-actions">
              <button
                type="button"
                className="quiz-button"
                onClick={handleConfirm}
                disabled={saving}
              >
                {saving ? t(lang, 'suggestSaving') : t(lang, 'suggestConfirm')}
              </button>
              <button
                type="button"
                className="quiz-button quiz-button-secondary"
                disabled={saving}
                onClick={() => {
                  setError('');
                  setStep('form');
                }}
              >
                {t(lang, 'suggestEdit')}
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="suggest-heading">{t(lang, 'suggestDoneTitle')}</h1>
            <p className="suggest-subtitle">{t(lang, 'suggestDoneText')}</p>
            <div className="quiz-actions">
              <Link to="/suggestions" className="quiz-button">
                {t(lang, 'suggestDoneSeeList')}
              </Link>
              <Link to="/" className="quiz-button quiz-button-secondary">
                {t(lang, 'suggestDoneHome')}
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

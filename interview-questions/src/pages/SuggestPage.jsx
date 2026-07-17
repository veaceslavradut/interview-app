import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../data/localized';
import { addSuggestion } from '../data/suggestions';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

const OTHER = 'other';

export default function SuggestPage() {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const categories = getCategories(lang);

  const [step, setStep] = useState('form'); // form | confirm
  const [topic, setTopic] = useState('');
  const [customTopic, setCustomTopic] = useState('');
  const [question, setQuestion] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const isOther = topic === OTHER;
  const topicFilled = isOther ? customTopic.trim() !== '' : topic !== '';
  const canContinue = topicFilled && question.trim() !== '';

  const selectedCategory = categories.find((c) => c.id === topic);
  const topicLabel = isOther ? customTopic.trim() : selectedCategory?.title ?? '';
  const topicIcon = isOther ? '💬' : selectedCategory?.icon ?? '';

  const handleConfirm = async () => {
    setError('');
    setSaving(true);
    try {
      await addSuggestion({
        categoryId: isOther ? null : topic,
        customTopic: isOther ? customTopic : '',
        question,
      });
      navigate('/suggestions');
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
                    maxLength={60}
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
                maxLength={500}
                placeholder={t(lang, 'suggestQuestionPlaceholder')}
                onChange={(event) => setQuestion(event.target.value)}
              />

              <div className="quiz-actions">
                <button type="submit" className="quiz-button" disabled={!canContinue}>
                  {t(lang, 'suggestContinue')}
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h1 className="suggest-heading">{t(lang, 'suggestConfirmTitle')}</h1>
            <p className="suggest-subtitle">{t(lang, 'suggestConfirmHint')}</p>

            <div className="suggest-preview">
              <span className="suggest-topic-badge">
                {topicIcon} {topicLabel}
              </span>
              <p className="suggest-preview-question">{question.trim()}</p>
            </div>

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
        )}
      </div>
    </div>
  );
}

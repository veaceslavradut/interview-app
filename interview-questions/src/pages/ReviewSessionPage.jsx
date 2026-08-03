import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { getCategories } from '../data/localized';
import { useProgress, keyOf } from '../data/progress';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

// Flashcard review session: serves questions marked "review" that are due
// (never rated, or the SM-2 schedule has come due). "Again" requeues the card.
export default function ReviewSessionPage() {
  const { lang } = useLanguage();
  const { status, srs, rateQuestion } = useProgress();

  // The queue is snapshotted once on mount so ratings don't reshuffle mid-session.
  const [queue, setQueue] = useState(() => {
    const now = Date.now();
    const cards = [];
    for (const c of getCategories(lang)) {
      for (const q of c.questions) {
        const key = keyOf(c.id, q.id);
        if (status[key] !== 'review') continue;
        const card = srs[key];
        if (!card || card.due <= now) {
          cards.push({ catId: c.id, catTitle: c.title, catIcon: c.icon, question: q });
        }
      }
    }
    return cards;
  });
  const [revealed, setRevealed] = useState(false);
  const [doneCount, setDoneCount] = useState(0);

  if (queue.length === 0) {
    return (
      <div className="page">
        <Breadcrumbs
          items={[
            { label: t(lang, 'home'), to: '/' },
            { label: t(lang, 'studyReview'), to: '/review' },
            { label: t(lang, 'reviewSessionTitle') },
          ]}
        />
        <div className="quiz-card">
          <h1 className="quiz-heading">{t(lang, 'reviewSessionTitle')}</h1>
          <p className="quiz-review-perfect">{t(lang, 'reviewDone')}</p>
          <div className="quiz-actions">
            <Link to="/review" className="quiz-button quiz-button-secondary">
              ← {t(lang, 'studyReview')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const card = queue[0];

  const handleRate = (rating) => {
    rateQuestion(card.catId, card.question.id, rating);
    setQueue((prev) => (rating === 'again' ? [...prev.slice(1), prev[0]] : prev.slice(1)));
    if (rating !== 'again') setDoneCount((n) => n + 1);
    setRevealed(false);
  };

  return (
    <div className="page">
      <Breadcrumbs
        items={[
          { label: t(lang, 'home'), to: '/' },
          { label: t(lang, 'studyReview'), to: '/review' },
          { label: t(lang, 'reviewSessionTitle') },
        ]}
      />
      <div className="quiz-card flashcard">
        <div className="quiz-progress">
          {t(lang, 'reviewSessionTitle')} · {queue.length} {t(lang, 'reviewLeft')}
          {doneCount > 0 && ` · ${doneCount} ✓`}
        </div>
        <span className="search-result-badge">
          {card.catIcon} {card.catTitle}
        </span>
        <h1 className="quiz-heading">{card.question.question}</h1>
        {revealed ? (
          <>
            <div className="answer-body flashcard-answer">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }]]}
              >
                {card.question.answer}
              </ReactMarkdown>
            </div>
            <div className="flashcard-ratings">
              <button type="button" className="flashcard-rate rate-again" onClick={() => handleRate('again')}>
                {t(lang, 'rateAgain')}
              </button>
              <button type="button" className="flashcard-rate rate-hard" onClick={() => handleRate('hard')}>
                {t(lang, 'rateHard')}
              </button>
              <button type="button" className="flashcard-rate rate-good" onClick={() => handleRate('good')}>
                {t(lang, 'rateGood')}
              </button>
              <button type="button" className="flashcard-rate rate-easy" onClick={() => handleRate('easy')}>
                {t(lang, 'rateEasy')}
              </button>
            </div>
          </>
        ) : (
          <div className="quiz-actions">
            <button type="button" className="quiz-button" onClick={() => setRevealed(true)}>
              {t(lang, 'reviewShowAnswer')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

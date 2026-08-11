import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../data/localized';
import { buildMockInterview } from '../data/quizzes';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { interviewTitle } from '../data/pageMeta';

// Мок-интервью Senior Java Developer: одна кросс-темная сессия MCQ, взвешенная на
// реально спрашиваемые senior-темы (логика набора — в buildMockInterview). Формат
// повторяет финальный тест темы (тот же движок и стили), но каждый вопрос помечен
// своей темой, а разбор ошибок ведёт в соответствующие темы.
export default function InterviewPage() {
  const { lang } = useLanguage();
  useDocumentTitle(interviewTitle(lang));

  const [attempt, setAttempt] = useState(0);
  // Новая выборка при каждом заходе (и при смене языка).
  const interview = useMemo(() => buildMockInterview(lang), [attempt, lang]);
  // Карта id темы → { title, icon } для бейджей и ссылок разбора ошибок.
  const catMeta = useMemo(() => {
    const map = {};
    for (const c of getCategories(lang)) map[c.id] = { title: c.title, icon: c.icon };
    return map;
  }, [lang]);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const total = interview.questions.length;
  const question = interview.questions[current];
  const meta = catMeta[question.categoryId];

  const handleNext = () => {
    const isCorrect = question.options[selected].isCorrect;
    const nextAnswers = [...answers, { ...question, isCorrect }];
    if (current + 1 < total) {
      setAnswers(nextAnswers);
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setAnswers(nextAnswers);
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setAttempt(attempt + 1);
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
  };

  if (finished) {
    const correctCount = answers.filter((a) => a.isCorrect).length;
    const percent = Math.round((correctCount / total) * 100);
    const resultClass =
      percent >= 80 ? 'quiz-result-good' : percent >= 50 ? 'quiz-result-ok' : 'quiz-result-bad';
    const wrong = answers.filter((a) => !a.isCorrect);

    return (
      <div className="page">
        <Breadcrumbs
          items={[{ label: t(lang, 'home'), to: '/' }, { label: t(lang, 'interviewTitle') }]}
        />
        <div className="quiz-card">
          <h1 className="quiz-heading">{t(lang, 'interviewResultTitle')}</h1>
          <div className={`quiz-percent ${resultClass}`}>{percent}%</div>
          <p className="quiz-result-detail">
            {t(lang, 'quizCorrectAnswers')}: {correctCount} / {total}
          </p>
          {wrong.length > 0 && (
            <section className="quiz-review">
              <h2 className="quiz-review-title">{t(lang, 'quizReviewWrongTitle')}</h2>
              <ul className="quiz-review-list">
                {wrong.map((q, i) => {
                  const m = catMeta[q.categoryId];
                  return (
                    <li key={`${q.categoryId}-${q.id}-${i}`}>
                      <Link
                        to={`/category/${q.categoryId}/question/${q.id}`}
                        className="quiz-review-link"
                      >
                        {m && <span className="search-result-badge">{m.icon} {m.title}</span>}{' '}
                        {q.question}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}
          {correctCount === total && (
            <p className="quiz-review-perfect">{t(lang, 'interviewPerfect')}</p>
          )}
          <div className="quiz-actions">
            <button type="button" className="quiz-button" onClick={handleRestart}>
              {t(lang, 'interviewRetry')}
            </button>
            <Link to="/" className="quiz-button quiz-button-secondary">
              ← {t(lang, 'home')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <Breadcrumbs
        items={[{ label: t(lang, 'home'), to: '/' }, { label: t(lang, 'interviewTitle') }]}
      />
      <div className="quiz-card">
        <div className="quiz-progress">
          {t(lang, 'interviewTitle')} · {t(lang, 'quizQuestion')} {current + 1} / {total}
        </div>
        <div
          className="quiz-progress-bar"
          role="progressbar"
          aria-valuenow={current + 1}
          aria-valuemin={1}
          aria-valuemax={total}
        >
          <div
            className="quiz-progress-fill"
            style={{ width: `${((current + 1) / total) * 100}%` }}
          />
        </div>
        {meta && (
          <span className="search-result-badge">
            {meta.icon} {meta.title}
          </span>
        )}
        <h1 className="quiz-heading">{question.question}</h1>
        <div className="quiz-options">
          {question.options.map((option, index) => (
            <button
              key={index}
              type="button"
              className={`quiz-option ${selected === index ? 'quiz-option-selected' : ''}`}
              onClick={() => setSelected(index)}
            >
              <span className="quiz-option-letter">{String.fromCharCode(65 + index)}</span>
              {option.text}
            </button>
          ))}
        </div>
        <div className="quiz-actions">
          <button
            type="button"
            className="quiz-button"
            disabled={selected === null}
            onClick={handleNext}
          >
            {current + 1 < total ? t(lang, 'quizNext') : t(lang, 'quizFinish')}
          </button>
        </div>
      </div>
    </div>
  );
}

import { useMemo, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getCategory } from '../data/localized';
import { buildQuiz } from '../data/quizzes';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

export default function QuizPage() {
  const { categoryId } = useParams();
  const { lang } = useLanguage();
  const category = getCategory(categoryId, lang);

  const [attempt, setAttempt] = useState(0);
  // Новый вариант теста собирается при каждой попытке
  const quiz = useMemo(() => buildQuiz(categoryId), [categoryId, attempt]);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  if (!category || !quiz) {
    return <Navigate to="/" replace />;
  }

  const total = quiz.questions.length;
  const question = quiz.questions[current];

  const handleNext = () => {
    const isCorrect = question.options[selected].isCorrect;
    const nextAnswers = [...answers, { id: question.id, isCorrect }];
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

    return (
      <div className="page">
        <Breadcrumbs
          items={[
            { label: t(lang, 'home'), to: '/' },
            { label: category.title, to: `/category/${category.id}` },
            { label: t(lang, 'quizTitle') },
          ]}
        />
        <div className="quiz-card">
          <h1 className="quiz-heading">{t(lang, 'quizResultTitle')}</h1>
          <div className={`quiz-percent ${resultClass}`}>{percent}%</div>
          <p className="quiz-result-detail">
            {t(lang, 'quizCorrectAnswers')}: {correctCount} / {total}
          </p>
          <div className="quiz-actions">
            <button type="button" className="quiz-button" onClick={handleRestart}>
              {t(lang, 'quizRetry')}
            </button>
            <Link to={`/category/${category.id}`} className="quiz-button quiz-button-secondary">
              {t(lang, 'quizBackToCategory')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <Breadcrumbs
        items={[
          { label: t(lang, 'home'), to: '/' },
          { label: category.title, to: `/category/${category.id}` },
          { label: t(lang, 'quizTitle') },
        ]}
      />
      <div className="quiz-card">
        <div className="quiz-progress">
          {t(lang, 'quizQuestion')} {current + 1} / {total}
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

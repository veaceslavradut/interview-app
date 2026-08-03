import { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { getQuestion, loadAnswer } from '../data/localized';
import Breadcrumbs from '../components/Breadcrumbs';
import SpeechPlayer from '../components/SpeechPlayer';
import ProgressControls from '../components/ProgressControls';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

export default function QuestionPage() {
  const { categoryId, questionId } = useParams();
  const { lang } = useLanguage();
  // Meta (title, prev/next) is synchronous from the manifest; the answer markdown
  // is the heavy part, lazy-loaded per category (item 9 — code splitting).
  const data = getQuestion(categoryId, questionId, lang);

  const [answer, setAnswer] = useState(null); // { answer, translated } | null while loading
  useEffect(() => {
    let cancelled = false;
    setAnswer(null);
    loadAnswer(categoryId, questionId, lang).then((loaded) => {
      if (!cancelled) setAnswer(loaded);
    });
    return () => {
      cancelled = true;
    };
  }, [categoryId, questionId, lang]);

  if (!data) {
    return <Navigate to="/" replace />;
  }

  const { category, question, prev, next } = data;
  // если ответ ещё не переведён — озвучиваем его по-русски
  const translated = answer ? answer.translated : question.translated;
  const contentLang = translated ? lang : 'ru';

  return (
    <div className="page">
      <Breadcrumbs
        items={[
          { label: t(lang, 'home'), to: '/' },
          { label: category.title, to: `/category/${category.id}` },
          { label: question.question },
        ]}
      />

      <article className="answer-card">
        <h1 className="answer-question">
          <span className="answer-category-icon">{category.icon}</span>
          {question.question}
        </h1>
        {answer ? (
          <>
            <SpeechPlayer title={question.question} text={answer.answer} contentLang={contentLang} />
            <ProgressControls categoryId={category.id} questionId={question.id} />
            {lang !== 'ru' && !answer.translated && (
              <p className="untranslated-note">{t(lang, 'untranslated')}</p>
            )}
            <div className="answer-body">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }]]}
              >
                {answer.answer}
              </ReactMarkdown>
            </div>
          </>
        ) : (
          <>
            <ProgressControls categoryId={category.id} questionId={question.id} />
            <p className="answer-loading">{t(lang, 'answerLoading')}</p>
          </>
        )}
      </article>

      <nav className="question-nav">
        {prev ? (
          <Link to={`/category/${category.id}/question/${prev.id}`} className="nav-button nav-prev">
            <span className="nav-label">{t(lang, 'prevQuestion')}</span>
            <span className="nav-question">{prev.question}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/category/${category.id}/question/${next.id}`} className="nav-button nav-next">
            <span className="nav-label">{t(lang, 'nextQuestion')}</span>
            <span className="nav-question">{next.question}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}

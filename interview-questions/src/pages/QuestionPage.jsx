import { Link, useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getQuestion } from '../data/questions';
import Breadcrumbs from '../components/Breadcrumbs';
import SpeechPlayer from '../components/SpeechPlayer';

export default function QuestionPage() {
  const { categoryId, questionId } = useParams();
  const data = getQuestion(categoryId, questionId);

  if (!data) {
    return <Navigate to="/" replace />;
  }

  const { category, question, prev, next } = data;

  return (
    <div className="page">
      <Breadcrumbs
        items={[
          { label: 'Главная', to: '/' },
          { label: category.title, to: `/category/${category.id}` },
          { label: question.question },
        ]}
      />

      <article className="answer-card">
        <h1 className="answer-question">
          <span className="answer-category-icon">{category.icon}</span>
          {question.question}
        </h1>
        <SpeechPlayer title={question.question} text={question.answer} />
        <div className="answer-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{question.answer}</ReactMarkdown>
        </div>
      </article>

      <nav className="question-nav">
        {prev ? (
          <Link to={`/category/${category.id}/question/${prev.id}`} className="nav-button nav-prev">
            <span className="nav-label">← Предыдущий</span>
            <span className="nav-question">{prev.question}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/category/${category.id}/question/${next.id}`} className="nav-button nav-next">
            <span className="nav-label">Следующий →</span>
            <span className="nav-question">{next.question}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}

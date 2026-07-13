import { Link, useParams, Navigate } from 'react-router-dom';
import { getCategory } from '../data/questions';
import Breadcrumbs from '../components/Breadcrumbs';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = getCategory(categoryId);

  if (!category) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="page">
      <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: category.title }]} />

      <header className="category-header">
        <span className="category-header-icon">{category.icon}</span>
        <div>
          <h1 className="category-header-title">{category.title}</h1>
          <p className="category-header-subtitle">
            {category.description} · {category.questions.length} вопросов
          </p>
        </div>
      </header>

      <main className="question-list">
        {category.questions.map((question, index) => (
          <Link
            key={question.id}
            to={`/category/${category.id}/question/${question.id}`}
            className="question-item"
          >
            <span className="question-number">{index + 1}</span>
            <span className="question-text">{question.question}</span>
            <span className="question-arrow">→</span>
          </Link>
        ))}
      </main>
    </div>
  );
}

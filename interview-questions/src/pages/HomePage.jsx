import { Link } from 'react-router-dom';
import { categories } from '../data/questions';

export default function HomePage() {
  const totalQuestions = categories.reduce((sum, c) => sum + c.questions.length, 0);

  return (
    <div className="page">
      <header className="hero">
        <h1 className="hero-title">Java Interview Hub</h1>
        <p className="hero-subtitle">
          Подготовка к интервью на позицию Senior Java Developer
        </p>
        <p className="hero-stats">
          {categories.length} тем · {totalQuestions} вопросов
        </p>
      </header>

      <main className="category-grid">
        {categories.map((category) => (
          <Link key={category.id} to={`/category/${category.id}`} className="category-card">
            <span className="category-icon">{category.icon}</span>
            <div className="category-info">
              <h2 className="category-title">{category.title}</h2>
              <p className="category-description">{category.description}</p>
            </div>
            <span className="category-count">{category.questions.length}</span>
          </Link>
        ))}
      </main>
    </div>
  );
}

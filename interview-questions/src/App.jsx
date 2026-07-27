import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import QuestionPage from './pages/QuestionPage';
import QuizPage from './pages/QuizPage';
import SuggestPage from './pages/SuggestPage';
import SuggestionsPage from './pages/SuggestionsPage';
import ScrollToTop from './components/ScrollToTop';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import SearchOverlay from './components/SearchOverlay';
import { LanguageProvider } from './i18n/LanguageContext';
import { ThemeProvider } from './theme/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <div className="top-controls">
            <SearchOverlay />
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/category/:categoryId/question/:questionId" element={<QuestionPage />} />
            <Route path="/category/:categoryId/quiz" element={<QuizPage />} />
            <Route path="/suggest" element={<SuggestPage />} />
            <Route path="/suggestions" element={<SuggestionsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

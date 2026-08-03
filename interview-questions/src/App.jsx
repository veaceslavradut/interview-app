import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import QuestionPage from './pages/QuestionPage';
import QuizPage from './pages/QuizPage';
import SuggestPage from './pages/SuggestPage';
import SuggestionsPage from './pages/SuggestionsPage';
import StudyListPage from './pages/StudyListPage';
import RandomPage from './pages/RandomPage';
import ScrollToTop from './components/ScrollToTop';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import SearchTrigger from './components/SearchTrigger';
import { SearchProvider } from './components/SearchProvider';
import { LanguageProvider } from './i18n/LanguageContext';
import { ThemeProvider } from './theme/ThemeContext';
import { ProgressProvider } from './data/progress';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ProgressProvider>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <SearchProvider>
              <ScrollToTop />
              <div className="top-controls">
                <SearchTrigger />
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
                <Route path="/bookmarks" element={<StudyListPage mode="bookmarks" />} />
                <Route path="/review" element={<StudyListPage mode="review" />} />
                <Route path="/random" element={<RandomPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </SearchProvider>
          </BrowserRouter>
        </ProgressProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

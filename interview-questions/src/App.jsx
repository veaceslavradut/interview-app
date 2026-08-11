import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ScrollToTop from './components/ScrollToTop';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import SearchTrigger from './components/SearchTrigger';
import InstallButton from './components/InstallButton';
import { SearchProvider } from './components/SearchProvider';
import { LanguageProvider } from './i18n/LanguageContext';
import { ThemeProvider } from './theme/ThemeContext';
import { ProgressProvider } from './data/progress';
import './App.css';

// Route components are code-split (item 9): only the landing page is eager, so the
// answer-rendering pages and their markdown/highlight libs stay out of first load.
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const QuestionPage = lazy(() => import('./pages/QuestionPage'));
const QuizPage = lazy(() => import('./pages/QuizPage'));
const SuggestPage = lazy(() => import('./pages/SuggestPage'));
const SuggestionsPage = lazy(() => import('./pages/SuggestionsPage'));
const StudyListPage = lazy(() => import('./pages/StudyListPage'));
const RandomPage = lazy(() => import('./pages/RandomPage'));
const ReviewSessionPage = lazy(() => import('./pages/ReviewSessionPage'));
const InterviewPage = lazy(() => import('./pages/InterviewPage'));

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ProgressProvider>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <SearchProvider>
              <ScrollToTop />
              <div className="top-controls">
                <InstallButton />
                <SearchTrigger />
                <ThemeSwitcher />
                <LanguageSwitcher />
              </div>
              <Suspense fallback={<div className="page" />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/category/:categoryId" element={<CategoryPage />} />
                  <Route path="/category/:categoryId/question/:questionId" element={<QuestionPage />} />
                  <Route path="/category/:categoryId/quiz" element={<QuizPage />} />
                  <Route path="/suggest" element={<SuggestPage />} />
                  <Route path="/suggestions" element={<SuggestionsPage />} />
                  <Route path="/bookmarks" element={<StudyListPage mode="bookmarks" />} />
                  <Route path="/review" element={<StudyListPage mode="review" />} />
                  <Route path="/review/session" element={<ReviewSessionPage />} />
                  <Route path="/random" element={<RandomPage />} />
                  <Route path="/interview" element={<InterviewPage />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Suspense>
            </SearchProvider>
          </BrowserRouter>
        </ProgressProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

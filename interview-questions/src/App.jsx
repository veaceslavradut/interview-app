import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import QuestionPage from './pages/QuestionPage';
import QuizPage from './pages/QuizPage';
import SuggestPage from './pages/SuggestPage';
import SuggestionsPage from './pages/SuggestionsPage';
import AdminPage from './pages/AdminPage';
import ScrollToTop from './components/ScrollToTop';
import LanguageSwitcher from './components/LanguageSwitcher';
import { LanguageProvider } from './i18n/LanguageContext';
import { AuthProvider } from './auth/AuthContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <LanguageSwitcher />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/category/:categoryId/question/:questionId" element={<QuestionPage />} />
            <Route path="/category/:categoryId/quiz" element={<QuizPage />} />
            <Route path="/suggest" element={<SuggestPage />} />
            <Route path="/suggestions" element={<SuggestionsPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;

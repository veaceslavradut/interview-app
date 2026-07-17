import { createContext, useContext, useEffect, useState } from 'react';
import {
  getIdToken,
  hasStoredSession,
  refreshSession,
  signIn as authSignIn,
  signOut as authSignOut,
} from '../data/auth';

// isAdmin — вошёл ли владелец. Это только для UI (показать кнопки удаления);
// настоящую защиту даёт правило Firestore, проверяющее токен на сервере.
const AuthContext = createContext({
  isAdmin: false,
  initializing: true,
  signIn: async () => {},
  signOut: () => {},
  getToken: async () => '',
});

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  // initializing — пока по сохранённой сессии восстанавливаем вход; до этого
  // не мигаем формой логина уже вошедшему админу
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    if (!hasStoredSession()) {
      setInitializing(false);
      return;
    }
    refreshSession()
      .then((ok) => setIsAdmin(ok))
      .catch(() => setIsAdmin(false))
      .finally(() => setInitializing(false));
  }, []);

  const signIn = async (email, password) => {
    await authSignIn(email, password);
    setIsAdmin(true);
  };

  const signOut = () => {
    authSignOut();
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, initializing, signIn, signOut, getToken: getIdToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

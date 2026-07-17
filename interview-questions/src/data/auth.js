// Вход админа через Firebase Auth по REST (Identity Toolkit) — без firebase-sdk,
// как и остальной data-слой. Нужен единственный сценарий: владелец входит по
// email/паролю, получает idToken и шлёт его при удалении предложений.
//
// idToken живёт около часа, поэтому храним долгоживущий refreshToken в
// localStorage и по нему тихо продлеваем сессию (при старте приложения и когда
// idToken протух). Сам idToken держим только в памяти модуля.

import { API_KEY } from './firebaseConfig';

const REFRESH_TOKEN_KEY = 'interview-hub-admin-refresh';
const SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
const REFRESH_URL = `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`;

// Обновляем токен чуть заранее, чтобы не поймать 401 на границе срока.
const EXPIRY_SKEW_MS = 60 * 1000;

let idToken = null;
let idTokenExpiry = 0; // epoch ms

function getRefreshToken() {
  try {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  } catch {
    return null;
  }
}

function setRefreshToken(token) {
  try {
    if (token) localStorage.setItem(REFRESH_TOKEN_KEY, token);
    else localStorage.removeItem(REFRESH_TOKEN_KEY);
  } catch {
    // приватный режим — переживём, просто сессия не сохранится между вкладками
  }
}

// Есть ли сохранённая сессия — по ней при старте пробуем восстановить вход.
export function hasStoredSession() {
  return Boolean(getRefreshToken());
}

export async function signIn(email, password) {
  const response = await fetch(SIGN_IN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, returnSecureToken: true }),
  });
  if (!response.ok) {
    // Identity Toolkit кладёт причину в error.message (EMAIL_NOT_FOUND и т.п.);
    // наружу их не показываем — вызывающий покажет один общий текст ошибки
    throw new Error('Не удалось войти');
  }
  const data = await response.json();
  idToken = data.idToken;
  idTokenExpiry = Date.now() + Number(data.expiresIn) * 1000;
  setRefreshToken(data.refreshToken);
}

// Обменять refreshToken на свежий idToken. Возвращает true, если сессия жива.
export async function refreshSession() {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return false;

  const response = await fetch(REFRESH_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=refresh_token&refresh_token=${encodeURIComponent(refreshToken)}`,
  });
  if (!response.ok) {
    // refreshToken отозван или невалиден — сессия мертва, чистим её
    setRefreshToken(null);
    idToken = null;
    idTokenExpiry = 0;
    return false;
  }
  const data = await response.json();
  idToken = data.id_token;
  idTokenExpiry = Date.now() + Number(data.expires_in) * 1000;
  setRefreshToken(data.refresh_token);
  return true;
}

// Валидный idToken для авторизованных запросов; при протухании — продлевает.
export async function getIdToken() {
  if (idToken && Date.now() < idTokenExpiry - EXPIRY_SKEW_MS) {
    return idToken;
  }
  const ok = await refreshSession();
  if (!ok) throw new Error('Сессия истекла');
  return idToken;
}

export function signOut() {
  idToken = null;
  idTokenExpiry = 0;
  setRefreshToken(null);
}

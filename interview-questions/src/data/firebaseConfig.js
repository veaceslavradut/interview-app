// Общий конфиг Firebase для data-слоя.
//
// apiKey — не секрет: у Firebase это идентификатор проекта, он и должен лежать
// в бандле. Доступ режут правила Firestore и проверка токена, а не скрытность
// ключа. Тот же ключ используется и для Firestore REST, и для входа админа
// (Identity Toolkit).
export const PROJECT_ID = 'java-interview-app';
export const API_KEY = 'AIzaSyDCw796wRGzwRcXJMHJa6ivzv0AkTEnjr0';

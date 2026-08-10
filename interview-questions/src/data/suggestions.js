// Предложенные пользователями вопросы.
//
// Хранилище — Firestore, общий на всех: любой посетитель видит весь список и
// может дописать свой вопрос. Ходим в него по REST, а не через firebase-sdk,
// намеренно: полей всего пять, а sdk весит сотни килобайт и потянул бы за
// собой ещё одну зависимость в и без того расползшийся package.json.
//
// apiKey ниже — не секрет. У Firebase это идентификатор проекта, он и должен
// лежать в бандле; доступ режут правила на стороне Firestore (см. firestore.rules:
// читать может любой, создавать — любой с валидной формой и approved:false,
// менять и удалять — никто). Именно правила — настоящая защита от спама: ключ
// публичный, поэтому клиентские проверки ниже лишь отсекают ботов, бьющих по
// форме, а не по REST-эндпоинту напрямую.
//
// Премодерация: новые записи создаются с approved:false и не показываются, пока
// модератор не переключит флаг (в консоли Firebase). Старые записи без поля
// считаем видимыми (legacy), чтобы живой список не опустел при переходе.

const PROJECT_ID = 'java-interview-app';
const API_KEY = 'AIzaSyDCw796wRGzwRcXJMHJa6ivzv0AkTEnjr0';
const BASE_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/suggestions`;

// Лимиты и эвристики анти-спама. Держим здесь, чтобы правила Firestore и клиент
// опирались на одни и те же числа (question.size 10..500 совпадает с правилами).
export const SUGGEST_LIMITS = {
  minQuestion: 10,
  maxQuestion: 500,
  maxTopic: 60,
  maxLinks: 2, // больше — почти наверняка спам-ссылки
  cooldownMs: 30_000, // не чаще одной отправки в 30 секунд с одного устройства
  minFillMs: 1500, // человек не заполняет и не подтверждает форму быстрее
};

// Сколько ссылок в тексте — грубый, но дешёвый сигнал рекламного спама.
export function countLinks(text) {
  return (String(text).match(/https?:\/\/|www\./gi) ?? []).length;
}

// Проверка содержимого перед отправкой. Возвращает ключ ошибки (для t()) либо
// null, если всё в порядке. Чистая функция — тестируется без сети.
export function validateSuggestion({ question, customTopic }) {
  const q = String(question ?? '').trim();
  if (q.length < SUGGEST_LIMITS.minQuestion) return 'suggestErrorTooShort';
  if (q.length > SUGGEST_LIMITS.maxQuestion) return 'suggestErrorTooLong';
  if (countLinks(q) > SUGGEST_LIMITS.maxLinks) return 'suggestErrorTooManyLinks';
  if (String(customTopic ?? '').trim().length > SUGGEST_LIMITS.maxTopic)
    return 'suggestErrorTopicTooLong';
  return null;
}

// Прошло ли достаточно времени с прошлой отправки (анти-флуд). Чистая функция.
export function canSubmitNow(now, lastTs) {
  return !lastTs || now - lastTs >= SUGGEST_LIMITS.cooldownMs;
}

// Видима ли запись в списке: скрываем только явно отклонённые премодерацией
// (approved === false); true и legacy-null показываем.
export function isVisibleSuggestion(s) {
  return s.approved !== false;
}

// Firestore отдаёт и принимает значения в типизированной обёртке
// ({ stringValue: 'x' }), поэтому на границе разворачиваем её в обычный объект.
function toFields({ categoryId, customTopic, question, createdAt, approved }) {
  return {
    categoryId: categoryId ? { stringValue: categoryId } : { nullValue: null },
    customTopic: { stringValue: customTopic },
    question: { stringValue: question },
    createdAt: { stringValue: createdAt },
    approved: { booleanValue: approved },
  };
}

function fromDocument(doc) {
  const fields = doc.fields ?? {};
  return {
    // doc.name — полный путь вида projects/.../documents/suggestions/<id>
    id: doc.name.split('/').pop(),
    categoryId: fields.categoryId?.stringValue ?? null,
    customTopic: fields.customTopic?.stringValue ?? '',
    question: fields.question?.stringValue ?? '',
    createdAt: fields.createdAt?.stringValue ?? '',
    // старые записи без поля — legacy; null отличаем от false в isVisibleSuggestion
    approved: fields.approved?.booleanValue ?? null,
  };
}

// Новые предложения — сверху. Сортируем на клиенте: список небольшой, а
// orderBy в Firestore потребовал бы заводить индекс. Отклонённые премодерацией
// (approved:false) в список не попадают.
export async function getSuggestions() {
  const response = await fetch(`${BASE_URL}?key=${API_KEY}&pageSize=300`);
  if (!response.ok) {
    throw new Error(`Firestore ответил ${response.status}`);
  }
  const data = await response.json();
  // пустая коллекция — это ответ без ключа documents вообще
  return (data.documents ?? [])
    .map(fromDocument)
    .filter(isVisibleSuggestion)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

// categoryId — id существующей темы, либо null, если тема своя (customTopic).
// Сам заголовок темы не сохраняем: у категорий он зависит от языка, поэтому
// его берут из data-слоя при отрисовке. approved:false — запись ждёт модерации;
// правила Firestore не дадут создать её с любым другим значением.
export async function addSuggestion({ categoryId, customTopic, question }) {
  const suggestion = {
    categoryId: categoryId || null,
    customTopic: (customTopic || '').trim(),
    question: question.trim(),
    createdAt: new Date().toISOString(),
    approved: false,
  };

  const response = await fetch(`${BASE_URL}?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields: toFields(suggestion) }),
  });
  if (!response.ok) {
    throw new Error(`Firestore ответил ${response.status}`);
  }
  return fromDocument(await response.json());
}

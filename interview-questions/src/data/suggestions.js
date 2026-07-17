// Предложенные пользователями вопросы.
//
// Хранилище — Firestore, общий на всех: любой посетитель видит весь список и
// может дописать свой вопрос. Ходим в него по REST, а не через firebase-sdk,
// намеренно: полей всего четыре, а sdk весит сотни килобайт и потянул бы за
// собой ещё одну зависимость в и без того расползшийся package.json.
//
// apiKey ниже — не секрет. У Firebase это идентификатор проекта, он и должен
// лежать в бандле; доступ режут правила на стороне Firestore (читать может
// любой, создавать — любой с валидной формой, менять и удалять — никто).
// Модерация — руками через консоль Firebase.

const PROJECT_ID = 'java-interview-app';
const API_KEY = 'AIzaSyDCw796wRGzwRcXJMHJa6ivzv0AkTEnjr0';
const BASE_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/suggestions`;

// Firestore отдаёт и принимает значения в типизированной обёртке
// ({ stringValue: 'x' }), поэтому на границе разворачиваем её в обычный объект.
function toFields({ categoryId, customTopic, question, createdAt }) {
  return {
    categoryId: categoryId ? { stringValue: categoryId } : { nullValue: null },
    customTopic: { stringValue: customTopic },
    question: { stringValue: question },
    createdAt: { stringValue: createdAt },
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
  };
}

// Новые предложения — сверху. Сортируем на клиенте: список небольшой, а
// orderBy в Firestore потребовал бы заводить индекс.
export async function getSuggestions() {
  const response = await fetch(`${BASE_URL}?key=${API_KEY}&pageSize=300`);
  if (!response.ok) {
    throw new Error(`Firestore ответил ${response.status}`);
  }
  const data = await response.json();
  // пустая коллекция — это ответ без ключа documents вообще
  return (data.documents ?? [])
    .map(fromDocument)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

// categoryId — id существующей темы, либо null, если тема своя (customTopic).
// Сам заголовок темы не сохраняем: у категорий он зависит от языка, поэтому
// его берут из data-слоя при отрисовке.
export async function addSuggestion({ categoryId, customTopic, question }) {
  const suggestion = {
    categoryId: categoryId || null,
    customTopic: (customTopic || '').trim(),
    question: question.trim(),
    createdAt: new Date().toISOString(),
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

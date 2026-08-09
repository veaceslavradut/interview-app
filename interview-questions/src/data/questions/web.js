// Категория: web
export const web = {
    id: 'web',
    title: 'Основы Web',
    icon: '🌍',
    description: 'HTTP, REST, безопасность',
    questions: [
      {
        id: 'http',
        difficulty: 'easy',
        tags: ['http'],
        related: ['rest'],
        question: 'Как работает протокол HTTP? Какие методы и коды ответов вы знаете?',
        answer: `**HTTP (HyperText Transfer Protocol)** — протокол прикладного уровня «запрос-ответ» поверх TCP (HTTP/3 — поверх QUIC/UDP). Без состояния (stateless).

**Методы:**

- **GET** — получение ресурса (безопасный, идемпотентный, кэшируемый);
- **POST** — создание ресурса / обработка данных (не идемпотентный);
- **PUT** — полная замена ресурса (идемпотентный);
- **PATCH** — частичное обновление;
- **DELETE** — удаление (идемпотентный);
- HEAD, OPTIONS, TRACE, CONNECT.

**Коды ответов:**

- **1xx** — информационные (100 Continue);
- **2xx** — успех: 200 OK, 201 Created, 204 No Content;
- **3xx** — перенаправление: 301 Moved Permanently, 302 Found, 304 Not Modified;
- **4xx** — ошибка клиента: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 429 Too Many Requests;
- **5xx** — ошибка сервера: 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout.

Версии: HTTP/1.1 (keep-alive), **HTTP/2** (мультиплексирование, бинарный, server push), **HTTP/3** (QUIC — быстрее установка соединения, нет head-of-line blocking).

**Идемпотентность** — повторный запрос даёт тот же результат: важна для retry-логики.`,
      },
      {
        id: 'rest',
        difficulty: 'medium',
        tags: ['rest'],
        related: ['http'],
        question: 'Что такое REST? Каковы принципы RESTful API?',
        answer: `**REST (Representational State Transfer)** — архитектурный стиль построения распределённых систем на основе HTTP.

**Принципы (ограничения) REST:**

- **клиент-сервер** — разделение ответственности;
- **stateless** — сервер не хранит состояние клиента между запросами;
- **кэшируемость** — ответы помечаются как кэшируемые/некэшируемые;
- **единообразный интерфейс** — ресурсы идентифицируются URI, манипуляции через представления, HATEOAS;
- **слоистость** — клиент не знает, общается он с сервером или посредником.

**Практика проектирования:**

\`\`\`
GET    /api/users          — список пользователей
GET    /api/users/42       — конкретный пользователь
POST   /api/users          — создание (201 + Location)
PUT    /api/users/42       — полное обновление
PATCH  /api/users/42       — частичное обновление
DELETE /api/users/42       — удаление (204)
GET    /api/users/42/orders — вложенные ресурсы
\`\`\`

Правила: существительные во множественном числе (не глаголы!), правильные коды ответов, версионирование (\`/api/v1/\`), фильтрация/пагинация через query-параметры (\`?page=2&size=20&sort=name\`).

Альтернативы: GraphQL (гибкие выборки), gRPC (бинарный, межсервисное взаимодействие), WebSocket (двунаправленный real-time).`,
      },
      {
        id: 'browser-render',
        difficulty: 'medium',
        tags: ['browser'],
        related: [],
        question: 'Что происходит после ввода URL в браузере?',
        answer: `Полный путь запроса:

1. **Парсинг URL** — схема, хост, порт, путь.
2. **DNS-резолвинг** — имя хоста → IP-адрес (кэш браузера → ОС → DNS-резолвер → рекурсивный поиск).
3. **TCP-соединение** — three-way handshake (SYN → SYN-ACK → ACK).
4. **TLS handshake** (для HTTPS) — согласование версии и шифров, проверка сертификата, обмен ключами.
5. **HTTP-запрос** — \`GET / HTTP/1.1\` с заголовками (Host, Cookie, Accept...).
6. **Обработка на сервере** — балансировщик → веб-сервер → приложение → БД → ответ.
7. **Получение ответа** — статус, заголовки, тело (HTML).
8. **Рендеринг страницы:**
   - парсинг HTML → **DOM-дерево**;
   - парсинг CSS → **CSSOM**;
   - DOM + CSSOM → **Render Tree**;
   - **Layout (reflow)** — вычисление размеров и позиций;
   - **Paint** — отрисовка пикселей;
   - **Composite** — сборка слоёв на GPU.
9. Параллельно загружаются ресурсы (CSS, JS, изображения); JS может блокировать парсинг (поэтому \`defer\`/\`async\`).

Оптимизации: кэширование (Cache-Control, ETag), CDN, HTTP/2, сжатие (gzip/brotli), lazy loading.`,
      },
      {
        id: 'web-security',
        difficulty: 'medium',
        tags: ['security'],
        related: [],
        question: 'Какие основные уязвимости веб-приложений вы знаете?',
        answer: `Ключевые уязвимости (по OWASP Top 10):

**SQL Injection** — внедрение SQL через пользовательский ввод. Защита: PreparedStatement/параметризованные запросы, ORM, валидация.

**XSS (Cross-Site Scripting)** — внедрение JavaScript в страницу (stored/reflected/DOM-based). Защита: экранирование вывода, Content-Security-Policy, HttpOnly cookies.

**CSRF (Cross-Site Request Forgery)** — выполнение действий от имени залогиненного пользователя с другого сайта. Защита: CSRF-токены, SameSite cookies, проверка Origin.

**Broken Authentication/Authorization** — слабые пароли, перебор, IDOR (доступ к чужим ресурсам по ID). Защита: MFA, rate limiting, проверка прав на каждый ресурс.

**Прочие**: небезопасная десериализация, XXE, SSRF, использование компонентов с известными уязвимостями (Log4Shell), утечка чувствительных данных.

**Базовая гигиена:**

- HTTPS везде (HSTS);
- заголовки безопасности: CSP, X-Content-Type-Options, X-Frame-Options;
- хеширование паролей (bcrypt/argon2), никогда не хранить в открытом виде;
- принцип минимальных привилегий;
- валидация всех входных данных на сервере;
- регулярное обновление зависимостей (dependabot, OWASP dependency-check).

**CORS** — механизм браузера, разрешающий кросс-доменные запросы через заголовки (\`Access-Control-Allow-Origin\`); это не защита сервера, а ослабление same-origin policy.`,
      },
    ],
  };

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
      {
        id: 'same-origin-policy',
        difficulty: 'medium',
        tags: ['security', 'cors'],
        related: ['cors', 'web-security'],
        question: 'Что такое Same-Origin Policy (политика одного источника)?',
        answer: `**Same-Origin Policy (SOP)** — базовое правило безопасности браузера: скрипт со страницы одного **origin** по умолчанию **не может читать** ответы запросов к другому origin.

**Origin** = связка **схема + хост + порт**. Различие хотя бы в одном из трёх — уже другой origin:

\`\`\`text
https://app.example.com          — базовый origin
http://app.example.com     → другой (схема)
https://api.example.com    → другой (хост)
https://app.example.com:8443 → другой (порт)
\`\`\`

Зачем нужна: без SOP вредоносный сайт мог бы через ваш браузер (с вашими куками) читать данные из вашей почты/банка. SOP изолирует origin друг от друга.

Что **ограничивает**: чтение ответов cross-origin через JS (\`fetch\`/XHR), доступ к DOM чужого фрейма, чтение чужих куки. Что **не** ограничивает: загрузку многих ресурсов (\`<img>\`, \`<script>\`, \`<link>\`, отправку форм) — они уходят cross-origin, но JS не прочитает их ответ.

**CORS** — контролируемый способ ослабить SOP, разрешив конкретные cross-origin обращения.`,
      },
      {
        id: 'cors',
        difficulty: 'medium',
        tags: ['security', 'cors'],
        related: ['same-origin-policy', 'cors-preflight', 'cors-credentials'],
        question: 'Что такое CORS и как он работает?',
        answer: `**CORS (Cross-Origin Resource Sharing)** — механизм, которым **сервер** разрешает браузеру отдавать странице ответы на **кросс-доменные** запросы, ослабляя Same-Origin Policy контролируемым образом.

Ключевая идея: решает **сервер** через заголовки ответа, а **применяет** ограничение **браузер**.

Основные заголовки ответа сервера:

\`\`\`http
Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 3600
\`\`\`

Как идёт запрос:

- браузер добавляет к cross-origin запросу заголовок \`Origin\`;
- **простые (simple)** запросы (GET/POST/HEAD с «безопасными» заголовками) уходят сразу; браузер проверяет \`Access-Control-Allow-Origin\` в ответе и **блокирует чтение**, если origin не разрешён;
- **сложные** запросы предваряются **preflight** (\`OPTIONS\`).

Важно: **CORS — это не защита сервера**. Запрос всё равно доходит до сервера; CORS лишь запрещает **браузеру** отдать ответ чужой странице. Инструменты вроде curl/Postman игнорируют CORS. Аутентификация/авторизация — отдельная задача.`,
      },
      {
        id: 'cors-preflight',
        difficulty: 'hard',
        tags: ['security', 'cors', 'advanced'],
        related: ['cors', 'cors-credentials'],
        question: 'Что такое preflight-запрос в CORS?',
        answer: `**Preflight** — предварительный запрос \`OPTIONS\`, который браузер **автоматически** шлёт перед «непростым» cross-origin запросом, чтобы спросить у сервера разрешение.

Запрос считается **непростым** (требует preflight), если, например:

- метод не GET/POST/HEAD (\`PUT\`, \`DELETE\`, \`PATCH\`);
- есть нестандартные заголовки (\`Authorization\`, кастомные \`X-*\`);
- \`Content-Type\` не из списка простых (например, \`application/json\`).

Обмен:

\`\`\`http
OPTIONS /api/orders            ← браузер
Origin: https://app.example.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Content-Type, Authorization

200 OK                         ← сервер
Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Methods: PUT, POST, GET
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Max-Age: 600
\`\`\`

Если сервер подтвердил метод/заголовки — браузер шлёт **основной** запрос; иначе блокирует его ещё до отправки.

Оптимизация: \`Access-Control-Max-Age\` кэширует результат preflight, чтобы не слать \`OPTIONS\` перед каждым запросом. Частая причина «CORS-ошибок» — сервер не обрабатывает \`OPTIONS\` или не возвращает нужные \`Allow-*\`.`,
      },
      {
        id: 'cors-credentials',
        difficulty: 'hard',
        tags: ['security', 'cors', 'advanced'],
        related: ['cors', 'cors-preflight'],
        question: 'Как в CORS работают запросы с учётными данными (credentials) и почему нельзя wildcard?',
        answer: `**Credentialed request** — cross-origin запрос, в который браузер прикладывает **куки, HTTP-авторизацию или клиентские TLS-сертификаты**. По умолчанию \`fetch\`/XHR их к cross-origin запросам **не добавляет**.

Чтобы включить, нужны **обе** стороны:

\`\`\`js
fetch('https://api.example.com/me', { credentials: 'include' }); // клиент
\`\`\`
\`\`\`http
Access-Control-Allow-Credentials: true                            // сервер
Access-Control-Allow-Origin: https://app.example.com              // конкретный origin!
\`\`\`

**Почему нельзя wildcard \`*\` с credentials:** при \`Allow-Credentials: true\` браузер **запрещает** \`Access-Control-Allow-Origin: *\` и требует **точный** origin. Причина — безопасность: разрешить «любому сайту слать запросы с куками пользователя и читать ответ» означало бы дыру (любой origin получил бы доступ к аутентифицированным данным жертвы). Поэтому сервер обязан **явно** назвать доверенный origin (обычно — эхом из проверенного списка) и добавить \`Vary: Origin\`.

Аналогично \`Access-Control-Allow-Headers: *\` и \`Allow-Methods: *\` не действуют вместе с credentials — нужно перечислять явно. Правило: **credentials + wildcard несовместимы**.`,
      },
    ],
  };

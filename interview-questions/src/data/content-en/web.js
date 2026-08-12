// Английские переводы: web
export const web = {
    title: 'Web Basics',
    description: 'HTTP, REST, security',
    questions: {
      http: {
        question: 'How does the HTTP protocol work? What methods and response codes do you know?',
        answer: `**HTTP (HyperText Transfer Protocol)** is an application-level request-response protocol on top of TCP (HTTP/3 — on top of QUIC/UDP). It is stateless.

**Methods:**

- **GET** — retrieve a resource (safe, idempotent, cacheable);
- **POST** — create a resource / process data (not idempotent);
- **PUT** — fully replace a resource (idempotent);
- **PATCH** — partial update;
- **DELETE** — deletion (idempotent);
- HEAD, OPTIONS, TRACE, CONNECT.

**Response codes:**

- **1xx** — informational (100 Continue);
- **2xx** — success: 200 OK, 201 Created, 204 No Content;
- **3xx** — redirection: 301 Moved Permanently, 302 Found, 304 Not Modified;
- **4xx** — client error: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 429 Too Many Requests;
- **5xx** — server error: 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout.

Versions: HTTP/1.1 (keep-alive), **HTTP/2** (multiplexing, binary, server push), **HTTP/3** (QUIC — faster connection setup, no head-of-line blocking).

**Idempotency** — a repeated request produces the same result: important for retry logic.`,
      },
      rest: {
        question: 'What is REST? What are the principles of a RESTful API?',
        answer: `**REST (Representational State Transfer)** is an architectural style for building distributed systems on top of HTTP.

**REST principles (constraints):**

- **client-server** — separation of concerns;
- **stateless** — the server does not store client state between requests;
- **cacheability** — responses are marked as cacheable/non-cacheable;
- **uniform interface** — resources are identified by URIs, manipulated through representations, HATEOAS;
- **layered system** — the client does not know whether it talks to the server or an intermediary.

**Design in practice:**

\`\`\`
GET    /api/users          — list of users
GET    /api/users/42       — a specific user
POST   /api/users          — creation (201 + Location)
PUT    /api/users/42       — full update
PATCH  /api/users/42       — partial update
DELETE /api/users/42       — deletion (204)
GET    /api/users/42/orders — nested resources
\`\`\`

Rules: plural nouns (not verbs!), correct response codes, versioning (\`/api/v1/\`), filtering/pagination via query parameters (\`?page=2&size=20&sort=name\`).

Alternatives: GraphQL (flexible queries), gRPC (binary, service-to-service communication), WebSocket (bidirectional real-time).`,
      },
      'browser-render': {
        question: 'What happens after you type a URL into the browser?',
        answer: `The full request journey:

1. **URL parsing** — scheme, host, port, path.
2. **DNS resolution** — hostname → IP address (browser cache → OS → DNS resolver → recursive lookup).
3. **TCP connection** — three-way handshake (SYN → SYN-ACK → ACK).
4. **TLS handshake** (for HTTPS) — negotiating the version and ciphers, certificate verification, key exchange.
5. **HTTP request** — \`GET / HTTP/1.1\` with headers (Host, Cookie, Accept...).
6. **Server-side processing** — load balancer → web server → application → DB → response.
7. **Receiving the response** — status, headers, body (HTML).
8. **Page rendering:**
   - parsing HTML → **DOM tree**;
   - parsing CSS → **CSSOM**;
   - DOM + CSSOM → **Render Tree**;
   - **Layout (reflow)** — computing sizes and positions;
   - **Paint** — drawing pixels;
   - **Composite** — assembling layers on the GPU.
9. Resources load in parallel (CSS, JS, images); JS can block parsing (hence \`defer\`/\`async\`).

Optimizations: caching (Cache-Control, ETag), CDN, HTTP/2, compression (gzip/brotli), lazy loading.`,
      },
      'web-security': {
        question: 'What are the main web application vulnerabilities you know?',
        answer: `Key vulnerabilities (per OWASP Top 10):

**SQL Injection** — injecting SQL through user input. Protection: PreparedStatement/parameterized queries, ORM, validation.

**XSS (Cross-Site Scripting)** — injecting JavaScript into a page (stored/reflected/DOM-based). Protection: output escaping, Content-Security-Policy, HttpOnly cookies.

**CSRF (Cross-Site Request Forgery)** — performing actions on behalf of a logged-in user from another site. Protection: CSRF tokens, SameSite cookies, Origin checks.

**Broken Authentication/Authorization** — weak passwords, brute force, IDOR (accessing others' resources by ID). Protection: MFA, rate limiting, permission checks on every resource.

**Others**: insecure deserialization, XXE, SSRF, using components with known vulnerabilities (Log4Shell), sensitive data exposure.

**Basic hygiene:**

- HTTPS everywhere (HSTS);
- security headers: CSP, X-Content-Type-Options, X-Frame-Options;
- password hashing (bcrypt/argon2), never store them in plain text;
- the principle of least privilege;
- validating all input data on the server;
- regularly updating dependencies (dependabot, OWASP dependency-check).

**CORS** — a browser mechanism that allows cross-origin requests via headers (\`Access-Control-Allow-Origin\`); it is not server protection but a relaxation of the same-origin policy.`,
      },
      'same-origin-policy': {
        question: 'What is the Same-Origin Policy?',
        answer: `The **Same-Origin Policy (SOP)** is a foundational browser security rule: a script from a page of one **origin** by default **cannot read** the responses of requests to another origin.

An **origin** = the combination of **scheme + host + port**. A difference in any one of the three already makes it a different origin:

\`\`\`text
https://app.example.com          — the base origin
http://app.example.com     → different (scheme)
https://api.example.com    → different (host)
https://app.example.com:8443 → different (port)
\`\`\`

Why it is needed: without SOP a malicious site could, through your browser (with your cookies), read data from your email/bank. SOP isolates origins from each other.

What it **restricts**: reading cross-origin responses via JS (\`fetch\`/XHR), access to the DOM of a foreign frame, reading foreign cookies. What it does **not** restrict: loading many resources (\`<img>\`, \`<script>\`, \`<link>\`, submitting forms) — they go cross-origin, but JS cannot read their response.

**CORS** is a controlled way to relax SOP by allowing specific cross-origin access.`,
      },
      'cors': {
        question: 'What is CORS and how does it work?',
        answer: `**CORS (Cross-Origin Resource Sharing)** is a mechanism by which the **server** allows the browser to hand a page the responses to **cross-origin** requests, relaxing the Same-Origin Policy in a controlled way.

The key idea: the **server** decides via response headers, while the **browser** enforces the restriction.

The main server response headers:

\`\`\`http
Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 3600
\`\`\`

How a request goes:

- the browser adds an \`Origin\` header to a cross-origin request;
- **simple** requests (GET/POST/HEAD with "safe" headers) go straight away; the browser checks \`Access-Control-Allow-Origin\` in the response and **blocks reading** if the origin is not allowed;
- **complex** requests are preceded by a **preflight** (\`OPTIONS\`).

Important: **CORS is not server protection**. The request still reaches the server; CORS only forbids the **browser** from handing the response to a foreign page. Tools like curl/Postman ignore CORS. Authentication/authorization is a separate concern.`,
      },
      'cors-preflight': {
        question: 'What is a preflight request in CORS?',
        answer: `A **preflight** is a preliminary \`OPTIONS\` request that the browser sends **automatically** before a "non-simple" cross-origin request, to ask the server for permission.

A request is considered **non-simple** (requiring preflight) if, for example:

- the method is not GET/POST/HEAD (\`PUT\`, \`DELETE\`, \`PATCH\`);
- there are non-standard headers (\`Authorization\`, custom \`X-*\`);
- the \`Content-Type\` is not in the simple list (e.g. \`application/json\`).

The exchange:

\`\`\`http
OPTIONS /api/orders            ← browser
Origin: https://app.example.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Content-Type, Authorization

200 OK                         ← server
Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Methods: PUT, POST, GET
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Max-Age: 600
\`\`\`

If the server confirmed the method/headers, the browser sends the **actual** request; otherwise it blocks it before even sending.

Optimization: \`Access-Control-Max-Age\` caches the preflight result so \`OPTIONS\` is not sent before every request. A common cause of "CORS errors" is a server that does not handle \`OPTIONS\` or does not return the needed \`Allow-*\` headers.`,
      },
      'cors-credentials': {
        question: 'How do credentialed requests work in CORS, and why is a wildcard not allowed?',
        answer: `A **credentialed request** is a cross-origin request in which the browser attaches **cookies, HTTP auth, or client TLS certificates**. By default \`fetch\`/XHR do **not** add them to cross-origin requests.

To enable them, **both** sides are needed:

\`\`\`js
fetch('https://api.example.com/me', { credentials: 'include' }); // client
\`\`\`
\`\`\`http
Access-Control-Allow-Credentials: true                            // server
Access-Control-Allow-Origin: https://app.example.com              // a specific origin!
\`\`\`

**Why a wildcard \`*\` is not allowed with credentials:** with \`Allow-Credentials: true\` the browser **forbids** \`Access-Control-Allow-Origin: *\` and requires an **exact** origin. The reason is security: allowing "any site to send requests with the user's cookies and read the response" would be a hole (any origin would gain access to the victim's authenticated data). So the server must **explicitly** name the trusted origin (usually echoed from a verified list) and add \`Vary: Origin\`.

Likewise \`Access-Control-Allow-Headers: *\` and \`Allow-Methods: *\` do not work together with credentials — they must be listed explicitly. Rule: **credentials + wildcard are incompatible**.`,
      },
    },
  };

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
    },
  };

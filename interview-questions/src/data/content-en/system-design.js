// Английские переводы: system-design
export const systemDesign = {
  title: 'System Design',
  description: 'Designing high-load distributed systems',
  questions: {
    'sd-approach': {
      question: 'How should you approach a System Design interview question?',
      answer: `The prompt is deliberately vague — the interviewer watches your **thought process**, not a single "correct" answer. Work through a structure:

1. **Clarify requirements** — functional (what the system does) and non-functional (load, latency, availability, consistency). Don't design blind.
2. **Estimate scale** — ballpark QPS, storage, and traffic on the back of an envelope. The numbers drive the architecture.
3. **API** — sketch the main endpoints (inputs/outputs). This pins down the contract.
4. **Data model** — which entities, stored where (SQL/NoSQL/blob storage).
5. **High-level design** — draw the components: clients, load balancer, services, cache, DB, queues.
6. **Deep dive** — work through 1–2 bottlenecks the interviewer cares about.
7. **Bottlenecks and trade-offs** — single points of failure, hot keys, consistency vs availability.

Golden rule: **say the trade-offs out loud**. "Here I'll pick eventual consistency for availability, because…" is worth more than silently drawing boxes.`,
    },
    'sd-requirements': {
      question: 'What is the difference between functional and non-functional requirements?',
      answer: `**Functional requirements** describe **what** the system does — concrete behaviour and features:

- "a user can shorten a link and get a short code";
- "the short code redirects to the original URL".

**Non-functional requirements (NFRs)** describe **how well** it does it — and they shape the architecture:

- **Scale/load** — requests per second, users, data volume;
- **Latency** — target p50/p99;
- **Availability** — "three nines" (99.9%), etc.;
- **Consistency** — strong or eventual;
- **Durability** — data must not be lost;
- **Security, cost, observability**.

In an interview, gather the functional requirements first (2–3 key ones), then the NFRs — they tell you whether you need a cache, sharding, replication, or queues.`,
    },
    'sd-estimation': {
      question: 'What is back-of-the-envelope estimation and why does it matter?',
      answer: `It's a **rough, order-of-magnitude estimate** of a system's scale — to justify architectural decisions with numbers rather than intuition.

What you estimate:

- **QPS** — queries per second. From "DAU × actions/day / 86,400s" you get average QPS; peak is usually taken as ×2–×5. Estimate read and write QPS separately (reads usually dominate by an order of magnitude).
- **Storage** — record size × number of records × retention. Don't forget replication (×3) and growth.
- **Bandwidth** — QPS × average response size.
- **Cache memory** — by the 80/20 rule you cache the "hot" ~20% of data.

Handy anchors: a day has ≈ **86,400 seconds** (≈ 100k); 1M DAU at 10 actions ≈ ~115 QPS on average.

The goal isn't precision to the percent — it's knowing "does this fit on one server, or do we need a cluster, cache, and sharding?" Always state your assumptions out loud.`,
    },
    'sd-scaling': {
      question: 'What is the difference between vertical and horizontal scaling?',
      answer: `**Vertical (scale up)** — increase the power of one machine (CPU, RAM, disk).

- ➕ simple, no code changes, no distributed-systems problems;
- ➖ a physical ceiling, expensive at the top end, and the machine is a single point of failure.

**Horizontal (scale out)** — add more machines and spread the load across them.

- ➕ practically unlimited, fault-tolerant (one node dies, the rest keep serving), cheaper on commodity hardware;
- ➖ harder: needs a load balancer, state distribution, data consistency, and handling of network failures.

In practice: up to a point, scaling up is simpler, but truly large systems scale **horizontally**. The key precondition for scale-out is **stateless services** (state pushed to a DB/cache), so any node can handle any request.`,
    },
    'sd-load-balancing': {
      question: 'What is a load balancer, and what algorithms/levels exist?',
      answer: `A **load balancer** distributes incoming requests across several servers so no single one is overloaded, and provides fault tolerance.

**Levels:**

- **L4 (transport)** — balances by IP/ports (TCP/UDP) without looking at the payload. Fast but "dumb".
- **L7 (application)** — understands HTTP: can route by URL, headers, cookies; can terminate TLS. More flexible but costlier.

**Algorithms:**

- **Round Robin** — in turn; simple, but ignores load;
- **Least Connections** — to the server with the fewest active connections;
- **Weighted** — accounting for a server's "weight" (capacity);
- **IP/hash-based** — consistently sends a client to the same server (needed for sessions).

Key details: **health checks** (drop dead nodes), avoiding a single point of failure (the balancer itself is made redundant), and **sticky sessions** vs externalising state (stateless is preferred).`,
    },
    'sd-caching': {
      question: 'What caching and eviction strategies are there?',
      answer: `A **cache** is fast storage for "hot" data, to offload the DB and cut latency.

**Read/write strategies:**

- **Cache-aside (lazy loading)** — the app checks the cache first; on a miss it reads the DB and populates the cache. The most common one. Downside: the first request is slow, and data can go stale.
- **Write-through** — write to cache and DB simultaneously. The cache is always fresh, but writes are slower.
- **Write-back (write-behind)** — write to the cache, and to the DB asynchronously. Fast, but risks data loss on failure.
- **Read-through** — the cache loads from the DB on a miss itself (logic in the cache layer).

**Eviction:**

- **LRU** — evict the least recently used (the most popular);
- **LFU** — evict the least frequently used;
- **FIFO/TTL** — by time.

**Key problems:** invalidation ("one of the two hard things in CS"), **cache stampede** (a flood of requests when many keys expire at once — fixed with jitter/locking), and cache/DB consistency.`,
    },
    'sd-cdn': {
      question: 'What is a CDN and when do you need one?',
      answer: `A **CDN (Content Delivery Network)** is a geographically distributed network of caching servers (edge nodes) that serves content from the location nearest to the user.

**Why:**

- cuts **latency** — data is physically closer to the user;
- offloads the **origin server** — most requests are served by the edge;
- smooths spikes and partially mitigates DDoS.

**What goes in a CDN:** static assets (images, CSS/JS, video, files). Dynamic content less often, though edge logic and cached API responses are possible too.

**How it works:** a request hits the nearest edge; if the content is there (**cache hit**) it's served immediately; if not (**miss**), the edge fetches from origin, caches, and serves it. Freshness is managed via **TTL** and \`Cache-Control\` headers, plus invalidation/versioning by filename (\`app.abc123.js\`).

You need one when there's a meaningful share of static content and/or a geographically distributed audience.`,
    },
    'sd-cap': {
      question: 'State the CAP theorem. What is PACELC?',
      answer: `**CAP theorem:** in a distributed system, during a **network partition (P)** you cannot guarantee both **Consistency (C)** and **Availability (A)** — you must sacrifice one.

- **C** — every node sees the same (most recent) data;
- **A** — every request gets a response (not an error), even if not the freshest;
- **P** — the system keeps working despite lost messages between nodes.

Since partitions are **inevitable** in a real network, P isn't a choice — it's a given. The real choice happens **during** a partition:

- **CP systems** — sacrifice availability: during a partition some nodes return errors rather than serve stale data (e.g. banking scenarios require this);
- **AP systems** — sacrifice consistency: always respond, but data may be stale (a social feed).

**PACELC** refines it: **if** there's a Partition — choose between A and C; **Else**, in normal operation — choose between **Latency (L)** and **Consistency (C)**. That is, consistency costs latency even without failures.`,
    },
    'sd-consistency-models': {
      question: 'What consistency models are there?',
      answer: `A consistency model defines **what guarantees** a reader gets about data freshness after a write.

- **Strong** — after a successful write, any later read sees the new value. Easy to reason about, but costlier in latency and worse for availability (CP).
- **Eventual** — if there are no new writes, replicas *eventually* converge to one value. A reader may briefly see stale data. Cheap and highly available (AP) — fine for likes, view counts.
- **Read-your-writes** — a user always sees **their own** latest writes (even if others don't yet). Important for UX: post a comment — see it immediately.
- **Monotonic reads** — a reader doesn't "go back in time": having seen version N, it won't later see N-1.
- **Causal** — cause-and-effect order is preserved: an answer won't appear before its question.

The choice is a trade-off: strong consistency simplifies logic but lowers availability and raises latency; eventual is the opposite. Often, different data within one system uses different models.`,
    },
    'sd-sql-vs-nosql': {
      question: 'How do you choose between SQL and NoSQL?',
      answer: `**SQL (relational)** — a strict schema, relationships, **ACID** transactions, a powerful query language, and JOINs.

- Good when integrity and complex queries matter: finance, orders, reporting.
- Scales mainly **vertically**; horizontally it's harder (sharding, read replicas).

**NoSQL** — an umbrella term for non-relational stores, usually with a flexible schema and a focus on horizontal scaling and availability (often **BASE** instead of ACID):

- **key-value** (Redis, DynamoDB) — simple, fast lookups by key;
- **document** (MongoDB) — flexible JSON documents;
- **columnar** (Cassandra) — huge write volumes, wide rows;
- **graph** (Neo4j) — relationships as a first-class entity.

**How to choose:**

- need transactions, relationships, complex queries, strong consistency → **SQL**;
- need huge scale, simple access patterns, a flexible schema, high availability → **NoSQL**;
- often you use **both** (polyglot persistence): SQL for the "source of truth", NoSQL/cache for speed and scale.

The key point in an interview: the choice is driven by **access patterns and consistency requirements**, not fashion.`,
    },
    'sd-replication': {
      question: 'What is database replication and what schemes exist?',
      answer: `**Replication** stores copies of data on several nodes for **availability**, **fault tolerance**, and scaling reads.

**Schemes:**

- **Leader–Follower (master–slave)** — writes go to the leader, which replicates to followers; reads can be spread across followers. Simple, but the leader is a write bottleneck and a point of failure (you need **failover** — promoting a follower to leader).
- **Multi-Leader** — several nodes accept writes (e.g. in different data centres). Higher write availability, but **write conflicts** appear that must be resolved.
- **Leaderless** (Dynamo-style, Cassandra) — writes/reads go to several nodes with a **quorum** (W + R > N guarantees overlap). High availability, eventual consistency.

**Synchronous vs asynchronous:** a synchronous replica confirms the write before replying to the client (safer, but slower and vulnerable to a replica failing); asynchronous is faster, but on a leader crash you can **lose the last writes** and read stale data from a follower (**replication lag**).`,
    },
    'sd-sharding': {
      question: 'What is sharding (partitioning) and what strategies exist?',
      answer: `**Sharding** is horizontally splitting data into parts (**shards**), each on its own node. Unlike replication (copies of the same data), shards hold **different** data — this scales both writes and volume.

**Strategies for picking a shard by key:**

- **Range-based** — by key ranges (A–M, N–Z). Convenient for range queries, but easily produces **hot shards** with uneven distribution.
- **Hash-based** — by the key's hash. Distributes load evenly, but range queries become expensive; and when you add a node, a plain hash function requires **rehashing almost all keys** (fixed by consistent hashing).
- **Directory-based** — a separate lookup service maps "key → shard". Flexible, but the directory is a point of failure.

**Problems:**

- **hot keys/shards** (e.g. a very popular user) — mitigated with key suffixes and replicating hot data;
- **cross-shard queries and JOINs** become expensive; distributed transactions are hard;
- **rebalancing** when adding nodes.

A good **shard key** has high cardinality and even access.`,
    },
    'sd-consistent-hashing': {
      question: 'What is consistent hashing and what problem does it solve?',
      answer: `The problem with plain \`hash(key) % N\`: when the number of nodes **N** changes, almost every key changes owner — massive rebalancing and cache misses.

**Consistent hashing** places both nodes and keys on a single **ring** of hash values (0…2³²). A key belongs to the **first node clockwise**. Then adding/removing a node only "moves" ~**1/N** of the keys (an adjacent arc of the ring), not almost all of them.

**Virtual nodes (vnodes):** each physical node is represented by many points on the ring. This evens out the distribution (otherwise the arcs are uneven) and lets you account for different node capacities (a more powerful node gets more vnodes).

**Where it's used:** distributed caches (memcached clusters), Dynamo-style stores (Cassandra, DynamoDB), sharding, and some load balancers. It's the standard answer to "how do you add/remove nodes without total rebalancing?"`,
    },
    'sd-message-queue': {
      question: 'Why do you need message queues and asynchronous processing?',
      answer: `A **message queue** (RabbitMQ, Kafka, SQS) is a broker through which services exchange messages asynchronously: a producer enqueues a message, a consumer takes it when ready.

**Why:**

- **Decoupling** — producer and consumer don't know about each other and needn't be up at the same time;
- **Buffering/backpressure** — the queue absorbs a spike, consumers drain it at their own pace, protecting the DB from overload;
- **Asynchrony** — heavy work (sending emails, processing video) is moved out of the synchronous request, speeding up the user's response;
- **Scaling** — several consumers drain the queue in parallel;
- **Reliability** — if a consumer crashes, the message isn't lost and will be processed later.

**Key details:** delivery guarantees (**at-most-once / at-least-once / exactly-once**; usually at-least-once, so handlers must be **idempotent**), message ordering (Kafka keeps order within a partition), a **dead-letter queue** for "poison" messages, and tracking consumer lag.`,
    },
    'sd-rate-limiting': {
      question: 'What is rate limiting and what algorithms exist?',
      answer: `**Rate limiting** caps the number of requests from a client per interval — protection against abuse, DDoS, "noisy neighbours", and overload. Exceeding it → a **429 Too Many Requests** response.

**Algorithms:**

- **Token Bucket** — tokens drip into a bucket of capacity \`capacity\` at a constant rate; each request spends a token, no tokens → reject. Allows short bursts. The most popular.
- **Leaky Bucket** — requests enter a queue and "leak" out at a fixed rate; smooths traffic to a steady stream, clipping bursts.
- **Fixed Window** — a counter per fixed window (e.g. 100 req/minute). Simple, but allows a **2×** burst at the window boundary.
- **Sliding Window (log/counter)** — accounts for a sliding window, removing the boundary problem; more accurate but costlier in memory.

**In practice:** keep the limit in a fast shared store (**Redis**) so it works consistently across all instances; identify the client by API key/user/IP; return \`Retry-After\` and \`X-RateLimit-*\` headers.`,
    },
    'sd-idempotency': {
      question: 'What is idempotency and why does it matter in distributed systems?',
      answer: `An **idempotent operation** produces the **same result** when repeated with the same parameters as it does when executed once, with no extra side effects.

Why it matters: in distributed systems retries are **inevitable** — timeouts, client retries, "at-least-once" delivery from queues. If "charge the card" isn't idempotent, a retry charges twice.

**How it's achieved:**

- **Idempotency key** — the client sends a unique key for the operation; the server remembers processed keys and, on a retry, returns the prior result without doing the action again;
- **Natural idempotency** — the operation is idempotent by itself: \`SET x = 5\` (unlike \`x = x + 1\`), \`PUT\` (replacing a resource wholesale).

**HTTP semantics:** \`GET\`, \`PUT\`, \`DELETE\` are considered idempotent; \`POST\` is **not** (hence payments/orders add an idempotency key). Idempotency is a mandatory companion of retries and "at-least-once" processing.`,
    },
    'sd-api-design': {
      question: 'What principles matter when designing a REST API?',
      answer: `**REST** builds an API around **resources** (nouns, not verbs) and HTTP methods.

- **Resources and methods:** \`GET /users/42\` (fetch), \`POST /users\` (create), \`PUT/PATCH /users/42\` (update), \`DELETE /users/42\`. Verbs live in the method, not the URL (\`/getUser\` is bad).
- **Status codes:** 2xx success, 4xx client error (400, 401, 403, 404, 429), 5xx server error. Use them meaningfully.
- **Pagination** — don't return huge lists whole. **Offset-based** (\`?page=3&size=20\`) is simple but "drifts" on inserts and is costly at large offsets; **cursor-based** (\`?after=<id>\`) is stable and efficient for feeds.
- **Versioning** — \`/v1/...\` or via a header; lets you change the contract without breaking clients.
- **Idempotency and method safety** — \`GET\` doesn't change state; for unsafe retries, use an idempotency key.
- **Also:** consistent naming (plural, kebab/snake), filtering/sorting via query params, a uniform error format, rate limiting, authentication/authorization, HATEOAS (rarely).

Alternatives for context: **gRPC** (fast binary RPC for internal services), **GraphQL** (the client picks the fields it needs, flexible queries).`,
    },
    'sd-microservices-monolith': {
      question: 'Microservices or a monolith — how do you choose?',
      answer: `A **monolith** — the whole application as one deployable unit.

- ➕ simpler to develop, test, and deploy early on; transactions and calls are local; no network latency between modules;
- ➖ as the codebase and team grow: slow deploys, hard to scale parts independently, and one bug can bring down everything.

**Microservices** — a set of small independent services, each with its own DB, communicating over the network (REST/gRPC/queues).

- ➕ independent deploy and scaling, technology freedom, failure isolation, alignment with team structure;
- ➖ **distributed complexity**: network failures, latency, distributed transactions (saga), data consistency, and the need for service discovery, tracing, orchestration, and DevOps maturity.

**Practical advice:** almost always start with a **(modular) monolith** and extract services when there are real reasons — scaling bottlenecks, independent releases, team size. Microservices solve **organisational and scale** problems at the cost of infrastructure complexity; premature splitting is a common mistake.`,
    },
    'sd-observability': {
      question: 'What is observability and its three pillars?',
      answer: `**Observability** is the ability to understand a system's internal state from its external signals — especially to diagnose problems you didn't anticipate.

**The three pillars:**

- **Metrics** — numeric time series: QPS, latencies (p50/p95/p99), error rate, CPU/memory usage, queue lengths. Cheap, good for dashboards and **alerts**.
- **Logs** — discrete records of events. Valuable for detailed investigation; in a distributed system **structured** logs and a shared **correlation/trace id** matter, to tie together the records of one request.
- **Traces** — the path of one request across all services with the time at each step. They show **where** exactly time is lost and which service is the bottleneck (distributed tracing, e.g. OpenTelemetry).

Additionally: **alerting** on metrics, **SLI/SLO/SLA** (what you measure, the target, the commitment), and health checks. Good observability is what turns "everything's down and it's unclear why" into a concrete cause in minutes.`,
    },
    'sd-url-shortener': {
      question: 'Design a URL shortener (e.g. bit.ly).',
      answer: `A classic end-to-end example that exercises the whole process.

**1. Requirements.** Functional: create a short code from a long URL; redirect by the short code. Non-functional: a very high **read-to-write** ratio (~100:1), low redirect latency, high availability, codes that are unique and not guessable.

**2. Estimation.** Say 100M new links/month ≈ ~40 writes/s; reads ~×100 ≈ ~4000/s. Over 5 years ~6B links → the short code must be big enough: with a base62 alphabet (a–z, A–Z, 0–9), **7 chars = 62⁷ ≈ 3.5 trillion** combinations — plenty.

**3. API.** \`POST /shorten {longUrl}\` → \`{shortUrl}\`; \`GET /{code}\` → a **301/302** redirect.

**4. Code generation.**
- **Counter + base62** — a global auto-increment encoded in base62. Unique and short; the counter is scaled by ranges (e.g. via Zookeeper/a distributed ID generator) to avoid a single point.
- Alternative — a **hash** of the URL (take the first N base62 chars) with collision resolution.

**5. Storage.** A \`code → longUrl\` table (+ metadata). Lots of data, and the access pattern is a simple key lookup → a good fit for a **key-value/NoSQL** store, **sharded by code** (with consistent hashing when adding nodes).

**6. Reads (the hot path).** The redirect must be very fast: put a **cache** (Redis) for popular codes in front of the DB (the 80/20 rule). On a miss → DB → populate the cache. In front of everything — a CDN/edge for geo-distribution.

**7. Scale and reliability.** Stateless services behind a load balancer, DB replication (read replicas for reads), rate limiting on creation, and click analytics done **asynchronously via a queue** so the redirect isn't slowed. 301 vs 302: 301 is cached by the browser (faster, but worse for analytics) — usually you pick **302**.`,
    },
  },
};

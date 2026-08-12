// Английские переводы: microservices
export const microservices = {
    title: 'Microservices & Docker',
    description: 'Architecture, containerization, patterns',
    questions: {
      'monolith-vs-microservices': {
        question: 'What is the difference between a monolith and microservices?',
        answer: `**Monolith** — the application as a single deployment: one process, one database, one release.

Pros: simplicity of development/debugging/deployment at the start, ACID transactions, no network overhead. Cons: scaling only as a whole, long releases as it grows, degrading modularity ("big ball of mud"), lock-in to a single stack.

**Microservices** — a set of small independent services, each of which:

- is responsible for its own business domain (bounded context from DDD);
- has its **own database** (database per service);
- is deployed and scaled independently;
- communicates over the network (REST, gRPC, messaging).

Pros: independent teams and releases, targeted scaling, fault tolerance (one going down ≠ all going down), freedom of technology choice. Cons: **distributed complexity** — network failures, eventual consistency instead of ACID, distributed transactions, harder debugging and testing, DevOps infrastructure (orchestration, monitoring, tracing).

**Rule of thumb**: start with a modular monolith and extract microservices when there is a real need (different rates of change, load, teams). "Microservices are not a free lunch" — the price is operational complexity.

An intermediate step is **breaking up the monolith** with the Strangler Fig pattern: gradually moving functionality out into services.`,
      },
      'microservices-communication': {
        question: 'What ways of communication between microservices exist?',
        answer: `**Synchronous communication** (request-response, the caller waits):

- **REST/HTTP + JSON** — simplicity, universality; the standard for external APIs;
- **gRPC** — binary Protobuf, HTTP/2, strict contracts, streaming; 5-10x faster than REST — the choice for service-to-service communication;
- **GraphQL** — flexible queries, usually at the BFF/API Gateway.

Downsides of synchronous: cascading failures (a service waits for a service that waits for a service...), temporal coupling (both must be available).

**Asynchronous communication** (via a message broker):

- **events** (Kafka, RabbitMQ): a service publishes "OrderCreated", subscribers react independently;
- **commands/task queues**: targeted delivery to a single consumer;
- pros: loose coupling, load buffering, resilience to consumer unavailability;
- cons: eventual consistency, harder debugging, duplicates (idempotency is required).

**Key practices:**

- **API contracts**: OpenAPI/Protobuf schemas, contract testing (Pact), backward compatibility;
- **service discovery**: Kubernetes DNS, Eureka, Consul;
- **resilience**: timeouts, retries with backoff, circuit breaker (Resilience4j);
- **observability**: distributed tracing (OpenTelemetry, correlation id).

Recommendation: events for domain integration, synchronous calls for real-time data queries.`,
      },
      'microservices-patterns': {
        question: 'What microservice architecture patterns do you know?',
        answer: `**API Gateway** — a single entry point: routing, authentication, rate limiting, response aggregation (Spring Cloud Gateway, Kong, nginx).

**Circuit Breaker** — protection against cascading failures: after N errors it "opens" and immediately returns an error/fallback, periodically checking for recovery (Closed → Open → Half-Open). Implementation: Resilience4j.

**Saga** — distributed transactions as a sequence of local transactions with **compensating actions** on failure:

- **choreography** — services react to each other's events;
- **orchestration** — a central coordinator (Camunda, Temporal).

**Transactional Outbox** — atomicity of "write to the DB + publish an event": the event is written to an outbox table in the same transaction, and a separate process publishes it to the broker (+ CDC/Debezium).

**CQRS** — separating the write model (commands) from the read model (queries); often with **Event Sourcing** (state = a sequence of events).

**Database per Service** — each service has its own database; other services' data is accessed only via APIs.

**Service Discovery**, **Config Server** — infrastructure patterns (Spring Cloud Config, Kubernetes ConfigMaps).

**Sidecar / Service Mesh** — moving network logic (mTLS, retries, tracing) into a proxy next to the service (Istio, Linkerd).

**BFF (Backend for Frontend)** — a separate API layer for each client type (web, mobile).

**Bulkhead** — resource isolation (separate thread/connection pools) so that the failure of one dependency does not exhaust the resources of the entire service.`,
      },
      kubernetes: {
        question: 'What is Kubernetes? Core objects.',
        answer: `**Kubernetes (K8s)** — a container orchestrator: it automates deployment, scaling, self-healing, and updates of containerized applications in a cluster.

**Architecture**: Control Plane (API Server, Scheduler, Controller Manager, etcd) + Worker Nodes (kubelet, containers).

**Core objects:**

- **Pod** — the minimal unit: one or more containers with shared network/storage;
- **Deployment** — declarative management of Pod replicas: rolling update, rollback, scaling;
- **Service** — a stable access point to Pods (load balancing): ClusterIP (internal), NodePort, LoadBalancer;
- **Ingress** — external HTTP routing (domains, paths, TLS);
- **ConfigMap / Secret** — configuration and sensitive data separate from the image;
- **HorizontalPodAutoscaler** — autoscaling by CPU/metrics;
- **StatefulSet** — for stateful applications (databases); **DaemonSet** — a Pod on every node; **Job/CronJob** — one-off/periodic tasks;
- **PersistentVolume / PVC** — persistent storage.

**Key mechanisms:**

- **declarativeness**: you describe the desired state (YAML), K8s maintains it (reconciliation loop);
- **self-healing**: a crashed Pod is recreated; liveness/readiness/startup **probes** control traffic and restarts;
- **rolling updates** — zero-downtime updates;
- requests/limits — resource management.

Ecosystem: Helm (packages/manifest templates), ArgoCD (GitOps), Prometheus + Grafana (monitoring). Important for Java: the JVM must respect container limits (\`-XX:MaxRAMPercentage\`, modern JDKs do this automatically).`,
      },
      'service-boundaries': {
        question: 'How do you define microservice boundaries? What are the signs of a service that is too small or too large?',
        answer: `Boundaries are drawn **by business capabilities**, not by technical layers. The main tool is **DDD**: a service corresponds to one **bounded context** — an area with a single model and language. A good service owns its data and changes for a single business reason (high cohesion inside, loose coupling outside).

**Signs of a too-large service:** it changes for many unrelated reasons, several teams edit it, a release touches a lot of unrelated functionality, and independent subdomains are clearly visible inside.

**Signs of a too-small service:** it has almost no logic of its own and constantly "chats" over the network with others (chatty), any change affects several services at once (they always deploy together), and distributed transactions appear where a local one would do. Over-splitting produces a "distributed monolith" — the downsides of microservices without their upsides.

Practice: start with larger services and split them as boundaries become clear, not the other way around.`,
      },
      'monolith-migration': {
        question: 'How do you approach migrating a monolith to microservices?',
        answer: `The key principle is **not to rewrite everything at once** (a big-bang is risky), but to migrate incrementally with the **Strangler Fig** pattern: microservices are gradually "grown" around the monolith, redirecting individual functions to them until the monolith is no longer needed.

A typical approach:

1. put a **facade/gateway** in front of the monolith to redirect traffic piece by piece;
2. extract one **bounded context** at a time — starting with the least coupled and most valuable to separate (high load, a separate release cycle);
3. split the data: the new service gets its own database; synchronization is handled via events or temporary shared access;
4. shift traffic gradually (canary is possible), watching the metrics;
5. remove the extracted code from the monolith.

It is important to decide in advance **what not to extract**: a tightly coupled core is sometimes cheaper to leave as a monolith. You migrate when there is real pain (scaling, independent releases), not for fashion.`,
      },
      'sync-vs-async': {
        question: 'When should you choose synchronous communication between services, and when asynchronous?',
        answer: `**Synchronous** (REST, gRPC) — the caller waits for a response here and now.

- Pros: simplicity, an immediate result, clear debugging.
- Cons: **temporal coupling** — if the callee is unavailable or slow, the caller suffers; chains of synchronous calls amplify failures (cascade).
- When: an immediate response is needed (fetching data for display), simple query scenarios. gRPC for fast internal calls, REST for broad compatibility.

**Asynchronous** (messages/events via Kafka, RabbitMQ) — the sender publishes a message and doesn't wait.

- Pros: **loose coupling** in time, resilience to a receiver being down (the message waits in the broker), smoothing of load spikes, natural event-driven integration.
- Cons: more complex (eventual consistency, ordering, duplicates, debugging a distributed flow).
- When: event notifications, long-running operations, decoupling services, different processing speeds.

Rule: **commands/queries with an immediate response — synchronously; facts about what happened (events) and decoupling — asynchronously.** Often both approaches are combined in one system.`,
      },
      'loose-coupling': {
        question: 'What is loose coupling between microservices and how do you achieve it?',
        answer: `**Loose coupling** means services can be changed and deployed independently because they know little about each other's internals. The opposite is a "distributed monolith," where services must be released together.

How it is achieved:

- **data hiding** — each service has its own database; you cannot access another's database directly, only through its API/events;
- **stable contracts** — communicating via versioned APIs/event schemas; changes are made backward-compatible (without breaking consumers);
- **asynchronous events** instead of chains of synchronous calls — decoupling in time;
- **avoiding shared models** — not sharing common domain libraries/entities between services (shared code increases coupling);
- **tolerance to change** — the "Tolerant Reader" principle: ignore unknown fields, don't fail on inessential changes;
- failure isolation (timeouts, circuit breaker) so a neighbor's crash doesn't drag you down.

A sign of good decoupling: a service can be deployed to production without coordinating the release with other teams.`,
      },
      'database-per-service': {
        question: 'What is "database per service" and how do you ensure data consistency?',
        answer: `**Database per service** — each microservice has its own database that only it can access. Other services get data solely through its API or events. This is the key to loose coupling and independent scaling, but it removes the possibility of a single ACID transaction and JOINs across services.

**Consistency** between services becomes **eventual** rather than immediate. Tools:

- **the Saga pattern** — a distributed business operation as a chain of local transactions with compensations (event choreography or orchestration);
- **Transactional Outbox** — to atomically save data and publish an event: the event is written to an outbox table in the same database within one transaction, and a separate process reads it and sends it to the broker (solving the "wrote to the DB but didn't send the event" problem);
- **CQRS / read replicas** — a service keeps a denormalized copy of the needed external data, updated via events, so it doesn't call synchronously for every request;
- **idempotency** of handlers — because delivery is usually at-least-once.

You design so the business tolerates temporary inconsistency; where strict atomicity is needed, that's a sign the data should perhaps live in a single service.`,
      },
      'ms-resilience': {
        question: 'How do you ensure resilience to failures when microservices interact?',
        answer: `In a distributed system failures are inevitable, so calls to neighbors are always treated as potentially unreliable. The main mechanisms:

- **Timeout** — never wait for a response indefinitely; a hung call must not hold resources (threads, connections).
- **Retry + backoff** — retry on transient errors with exponential delay and jitter; only for **idempotent** operations, otherwise it amplifies the problem.
- **Circuit Breaker** — after a series of errors it "opens" calls to the failing service (fail fast + fallback), preventing a cascade and giving the neighbor time to recover.
- **Bulkhead** — resource isolation (separate thread/connection pools per callee) so one failure doesn't eat all the application's resources.
- **Fallback / graceful degradation** — a backup response (cache, default value, reduced functionality) instead of a total failure.
- **Rate limiting / throttling** — protection against overload.

In the Spring ecosystem this is provided by **Resilience4j** (Circuit Breaker, Retry, Bulkhead, RateLimiter, TimeLimiter). The goal is that one service's failure leads to degradation, not to the whole system going down. More on the patterns themselves is in the "Design Patterns" section.`,
      },
      'ms-observability': {
        question: 'How do you set up monitoring, logging, and tracing for microservices?',
        answer: `In a distributed system, behavior can't be understood from a single service — you need the **three pillars of observability**:

- **Logs** — structured (JSON), collected centrally (e.g., **ELK/EFK**: Elasticsearch + Logstash/Fluentd + Kibana). The key is a request **correlation id** propagated through all services to assemble an end-to-end picture.
- **Metrics** — numeric indicators over time (RPS, latency p95/p99, errors, resource usage). Usually **Prometheus** (collection) + **Grafana** (dashboards, alerts); in Spring — Micrometer + Actuator.
- **Tracing (distributed tracing)** — the path of a single request through all services with the timings of each step (**Jaeger**, **Zipkin**, OpenTelemetry). It shows exactly where time is lost in the call chain.

Additionally: **health checks** (\`/actuator/health\`) for the orchestrator, alerts on anomalies, SLO/SLI. Without this, debugging in microservices turns into guesswork — which is why observability is built in from the start, not after an incident.`,
      },
      'ms-security': {
        question: 'How are authentication, authorization, and secret storage implemented in microservices?',
        answer: `**Authentication and authorization:**

- usually **stateless** via tokens: the user authenticates, gets a token (often a **JWT**) that they send on every request — services verify it without a shared session;
- for delegated access and external clients — **OAuth2 / OpenID Connect** with an authorization server (which issues tokens);
- an **API Gateway** often handles token verification at the entry point, and services additionally check permissions (roles/scopes) for their operations;
- between services — mutual authentication, often **mTLS** (typically via a service mesh), so internal traffic is also trusted (the zero-trust principle: don't trust the network by default).

**Secrets** (database passwords, keys, tokens) are not stored in code or committed to git. Secret managers are used: **HashiCorp Vault**, **AWS Secrets Manager**, Kubernetes Secrets (+ encryption). They provide centralized storage, access control, auditing, and **rotation** of secrets without rebuilding services.`,
      },
      'ms-cicd-testing': {
        question: 'How do you set up CI/CD and testing for microservices?',
        answer: `**CI/CD:** each service has an **independent pipeline** and is deployed separately — one of the main advantages of microservices. The pipeline: build → tests → package into a container (Docker) → publish the image → deploy to the orchestrator (Kubernetes). Tools: Jenkins, GitLab CI, GitHub Actions; for deploying to k8s — the GitOps approach (**ArgoCD**, Flux). Safe-rollout practices: blue-green and canary releases, automatic rollback based on metrics.

**Testing** is built as a pyramid, with an emphasis on distribution:

- **unit tests** — the service's logic in isolation (fast, the majority);
- **integration** — the service with its database/broker; it's convenient to spin up real dependencies via **Testcontainers**;
- **contract tests** — key for microservices: they verify that the API between the consumer and provider is compatible (e.g., Spring Cloud Contract, Pact) without bringing up the whole system;
- **end-to-end** — cross-service scenarios; valuable but slow and fragile, so you keep few of them.

The idea: keep expensive e2e tests to a minimum, and verify service compatibility with fast contract tests.`,
      },
      'api-gateway': {
        question: 'What is an API Gateway and why is it needed?',
        answer: `An **API Gateway** is a single entry point for external clients into a microservice system. The client talks to the gateway, which routes requests to the right services.

Why it is needed:

- **a single entry point** — the client does not need to know the addresses of dozens of services or track their changes;
- **cross-cutting concerns** in one place: authentication/authorization, rate limiting, CORS, TLS termination, logging, caching;
- **routing and composition** — direct a request to the right service; sometimes **aggregate** several calls into one response;
- **decoupling** the external API from the internal service decomposition (the internal split changes, the external contract stays stable);
- **protocol translation** — REST/GraphQL outside, gRPC inside.

\`\`\`text
Client → [API Gateway] → Auth service
                       → Orders service
                       → Catalog service
\`\`\`

The **BFF (Backend for Frontend)** pattern — a separate gateway per client type (web, mobile).

Risks: the gateway can become a **bottleneck** and a single point of failure — it is kept stateless and scaled horizontally; no business logic goes into it (only routing and cross-cutting). Examples: Spring Cloud Gateway, Kong, NGINX, AWS API Gateway.`,
      },
      'service-discovery': {
        question: 'What is Service Discovery?',
        answer: `**Service Discovery** is a mechanism that lets services **find each other's network addresses** dynamically, without hardcoding IPs/ports. In the cloud instances come and go and change addresses (autoscaling, restarts), so static configuration does not work.

Components:

- a **Service Registry** — a registry where instances **register** at startup and send heartbeats (Eureka, Consul, etcd, Zookeeper);
- **discovery** — a consumer asks the registry for current addresses and picks an instance.

Two models:

- **client-side discovery** — the client itself queries the registry and load-balances (e.g. the old Netflix Eureka + Ribbon);
- **server-side discovery** — the client goes to a load balancer/gateway that looks into the registry (e.g. a Kubernetes Service + kube-dns/kube-proxy).

In **Kubernetes** discovery is built in: a \`Service\` provides a stable DNS name and virtual IP behind the changing \`Pod\`s; so a separate Eureka is often unnecessary.

Tied to balancing: given the list of live instances, requests are spread among them (round-robin, etc.), and unhealthy ones are excluded via health checks.`,
      },
      'circuit-breaker': {
        question: 'What is a Circuit Breaker?',
        answer: `A **Circuit Breaker** is a resilience pattern that **stops sending requests to a faulty dependency**, so as not to pile up hung calls and bring the whole system down in a cascade.

The analogy is an electrical fuse. Three states:

- **Closed** — requests flow normally; failures are counted. When the failure threshold is exceeded → transition to Open;
- **Open** — requests are **rejected immediately** (fail fast), not loading the sick service; often a **fallback** is returned (cache, stub). After a timeout → Half-Open;
- **Half-Open** — a trial batch of requests is let through: success → Closed, failures again → Open.

\`\`\`text
Closed ──(many errors)──▶ Open ──(timeout)──▶ Half-Open ──(success)──▶ Closed
                                                    └──(error)──▶ Open
\`\`\`

Why: without a breaker, calls to a downed service **pile up**, exhaust the caller's threads/connections and take it down too — a **cascading failure**. The circuit breaker localizes the failure and gives the dependency time to recover.

Usually combined with **timeout**, **retry (with backoff)**, **bulkhead** (pool isolation) and a fallback. Implementations: Resilience4j (current), Netflix Hystrix (deprecated), a service mesh (Istio).`,
      },
      'saga-pattern': {
        question: 'What is the Saga pattern and how does it ensure consistency?',
        answer: `A **Saga** is a pattern for managing a **distributed business transaction** across several services (each with its own DB), where an ordinary ACID transaction and 2PC do not apply.

The idea: split the operation into a sequence of **local transactions**, each in its own service. If a step fails, **compensating transactions** run to undo the already-done steps (a semantic rollback, not a DB rollback).

\`\`\`text
Order:  create order → charge payment → reserve stock → ship
Failure at reserve → compensations: refund payment → cancel order
\`\`\`

Two coordination styles:

- **choreography** — services react to each other's events without a central conductor; simpler, but the logic is spread out and harder to trace;
- **orchestration** — a central **saga orchestrator** explicitly drives the steps and compensations; the logic is in one place, but a coordinator appears.

Notes: consistency is **eventual** (not instant); steps and compensations must be **idempotent**; compensation is not always physically possible (the email was already sent) — then it is designed semantically. Often combined with the **outbox** for reliable event publishing.`,
      },
      'cqrs': {
        question: 'What is CQRS?',
        answer: `**CQRS (Command Query Responsibility Segregation)** is the separation of the model into **commands** (change state: create/update/delete) and **queries** (read only). Instead of one "does-everything" model — separate write and read models.

\`\`\`text
Commands → Write model (normalized, invariants) → write DB
Queries  → Read model (denormalized for queries) → read DB/projections
\`\`\`

Why:

- **independent scaling** of reads and writes (reads are usually many times more frequent);
- **task-specific optimization** — the write model guards invariants (often together with DDD aggregates), the read model is denormalized for specific screens/reports and answers fast;
- combines nicely with **event sourcing** and event-driven integration.

Synchronization: the read model is updated from write events → it is **eventually consistent** (may lag slightly).

Important: CQRS is **not free complexity** (two models, synchronization, lag). Apply it selectively, in subsystems with heavy read load or complex reporting, and **not** everywhere. For simple CRUD it is overkill.`,
      },
    },
  };

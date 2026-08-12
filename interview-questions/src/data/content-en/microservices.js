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
      'modular-monolith': {
        question: 'What is a modular monolith and how is it different from a monolith with packages?',
        answer: `A **modular monolith** is a single deployable application (one process, one deployment), but **internally split into modules with explicit, enforced boundaries**. The key word is "enforced".

An ordinary monolith "with packages" is also split into packages, but the boundaries are **decorative**: any class can reach any other, and over time everything couples to everything (a "big ball of mud").

A modular monolith differs in that the boundaries are **real**:

- **explicit module boundaries** — a module = a bounded context, not a technical layer;
- **limited dependencies** — a module is visible to others only through a **public contract (API/port)**; internal classes are encapsulated;
- **clear ownership** of data — a module owns its tables, others do not reach into them directly;
- **no arbitrary cross-module access** — "pulling" a neighbor's internals is forbidden (checked with ArchUnit).

\`\`\`text
Monolith with packages:  boundaries on paper, any class → any class
Modular monolith:        boundaries enforced, module → only a neighbor's API
\`\`\`

Result: the same operational simplicity as a monolith, but with the boundary discipline of microservices — and the option to later extract a module into a service.`,
      },
      'modular-monolith-first': {
        question: 'Why is it often better to start with a modular monolith instead of microservices?',
        answer: `Starting with microservices early is a classic case of **premature complexity**. A modular monolith is usually wiser because:

- **the domain is still evolving** — context boundaries have not settled; drawing them in code (modules) is **cheap**, while between services (network, APIs, deployment) it is expensive and hard to redo;
- **stabilize boundaries first** — modules let you move boundaries by refactoring until it is clear where they are right;
- **lower operational overhead** — one deployment, one DB, no distributed failures, retries, tracing, contract versioning;
- **easier refactoring, testing and debugging** — everything in one process, no network boundaries;
- **extraction comes later, through contracts** — when a module matures and there is an operational justification, it is carved out into a service along the ready contract.

This is the **"monolith first"** approach: gain the benefits of clear boundaries (like microservices) without their operational price, and distribute the system **evolutionarily**, under specific pressure (scaling, team autonomy), rather than dogmatically from the start.`,
      },
      'modular-monolith-vs-microservices': {
        question: 'What are the trade-offs between a modular monolith and microservices?',
        answer: `It is not "good/bad" but a **trade-off**; a modular monolith is often a sensible middle ground.

**Modular monolith:**

- ✓ simple operations (one deployment), simple debugging, **low latency** (in-process calls), one transaction/DB — strong consistency is easy;
- ✓ easy refactoring of boundaries;
- ✗ **single deployment** — modules cannot be released/scaled independently;
- ✗ a shared process — a failure/leak in one module affects all; limited to one stack.

**Microservices:**

- ✓ **independent** deployment and scaling, team autonomy, failure isolation, technology freedom;
- ✗ **distributed complexity**: network failures, retries, timeouts, duplicate delivery, **eventual consistency**;
- ✗ you need observability/tracing, contract versioning, orchestration, more operational cost.

Choice rule: **modular monolith** — while the domain is young, the team small, and you want simplicity and strong consistency; **microservices** — when real pressure appears (independent scaling, team autonomy, differing release cadence). Often the path is modular monolith → extracting individual services as needed.`,
      },
      'when-extract-microservice': {
        question: 'When would you extract a module into a microservice?',
        answer: `Extraction is justified by **specific pressure**, not by the dogma "everything must be services". Real reasons:

- **independent scaling** — the module is loaded differently from the rest and is worth scaling separately;
- **separate deployment cadence** — the module changes often and you want to release it independently, without touching the rest;
- **team ownership** — a separate team owns the module and needs release autonomy;
- **clear domain autonomy** — the context boundary has settled, integration with the rest is minimal and goes through a contract;
- **operational justification** — different requirements for availability/failure isolation/security/resources.

Precondition: the module already has a **clean boundary and a contract** (in the modular monolith). Then extraction is a mechanical swap of an in-process call for REST/messaging.

Anti-signals (extracting **too early**): "it's trendy", "microservices = modern", the wish for independent deployment while **strongly** coupled to the rest (you get a distributed monolith — the worst of both worlds). No pressure — no reason to pay the distributed price.`,
      },
      'prepare-monolith-extraction': {
        question: 'How do you prepare a monolith for future extraction without over-engineering?',
        answer: `The idea is to **design for growth through boundaries, not through infrastructure**. You do not need to build Kafka and Kubernetes upfront; you need the modules to be **ready to detach**:

- **identify bounded contexts** — understand and fix the domain boundaries (see modular monolith);
- **isolate modules** — each context in its own module with encapsulated internals;
- **communicate via interfaces/contracts** — modules depend on a neighbor's API, not its implementation; this is the future swap point for REST/messaging;
- **avoid direct shared internal coupling** — no shared domain objects and no reaching into foreign tables;
- **separate domain and integration** — integration code behind a separate layer (ACL);
- **clear ownership of data and rules** — each module has its own schema/tables; cross-access only via the API (prepares "database per service").

The key — **no over-engineering**: while it is one process and one DB (just with logically separated schemas), synchronous calls go through interfaces. Distributed infrastructure is added **only at actual extraction**. Then carving out a module = replacing a local implementation of the contract with a remote one.`,
      },
      'microservices-harder': {
        question: 'What becomes harder after moving to microservices?',
        answer: `Distribution adds a whole layer of complexity that did not exist in a single process:

- **network failures** — a call may not arrive/may hang; the network is unreliable by definition;
- **retries and timeouts** — needed on every remote call (with backoff), otherwise cascading failures;
- **duplicate delivery** — delivery is usually at-least-once → **idempotency** is mandatory;
- **eventual consistency** — no single transaction across services; consistency via events (saga, outbox);
- **distributed tracing** — the request flow is spread across services; you need correlation IDs, tracing (Jaeger/Zipkin), aggregated logs;
- **contract versioning** — APIs change independently; backward compatibility and contract tests are needed;
- **operational overhead** — deploying dozens of services, service discovery, configuration, secrets, monitoring, message schemas.

Plus **debugging** is harder (no single stack trace) and **local runs** are harder (spinning up many services). That is why you distribute only when needed: you pay this complexity for autonomy and scalability.`,
      },
      'context-not-always-service': {
        question: 'Is every bounded context a separate microservice?',
        answer: `**No.** A Bounded Context is a **logical** boundary of model, language and responsibility. A microservice is a **physical** deployment decision. These are two **different** decisions that need not map one-to-one.

- one Bounded Context **may** be a separate service — but does not have to be;
- **several** contexts can live in one deployable unit (e.g. in a modular monolith — a module per context, but a single deployment);
- sometimes a context is too small to justify a separate service (extra network and operational overhead).

The right order: **first** identify the logical boundaries (bounded contexts), **then** separately decide how to deploy them — together or apart — based on scaling, team autonomy, release cadence.

The "one context = one service" formula is a common **oversimplification of DDD**, leading either to over-fine services (distributed complexity for no benefit) or to bending boundaries to fit infrastructure. Logical decomposition and physical deployment are independent axes.`,
      },
      'decompose-evolving': {
        question: 'How do you decompose a system when requirements are still evolving?',
        answer: `Under uncertainty, the main thing is **not to fix expensive boundaries too early**. The approach:

- **start from business capabilities** — split by business capability/responsibility, not by tables, CRUD entities or UI screens;
- **define boundaries and responsibility** — what the module does and, importantly, **what is out of its scope**;
- **keep contracts clean** — communication between parts via explicit interfaces, so a boundary can be moved without rewriting everyone;
- **avoid premature distribution** — while boundaries are flexible, keep them **in code** (a modular monolith), not on the network; moving modules is cheap, services are expensive;
- **evolve under pressure** — distribute/split where real pain appears (scale, autonomy, release cadence), not "just in case".

The essence: first **cheap, movable** boundaries (modules + contracts), stabilize the language and responsibilities, and only then fix them and, if needed, carve out services. Boundary design is an iterative process, not a one-off decision at the start.`,
      },
      'good-decomposition-criteria': {
        question: 'How do you know your decomposition is good?',
        answer: `A good decomposition has **verifiable criteria**, not just "I like it":

- **clear responsibility** — for each module/service you can say in one sentence what it is responsible for;
- **explicit out-of-scope** — it is clear not only what it does but also what it does **not** do;
- **different reasons to change are separated** — parts that change for independent business reasons live in different boundaries (cohesion by reason for change);
- **acceptable coupling** — few inter-module dependencies, going through contracts and in one direction, with no cycles; no "chatty" integration;
- **understandable language** — inside a boundary terms are unambiguous (the ubiquitous language does not "break");
- **evolution is easier** — a typical change touches **one** module rather than sprawling across many; a boundary can be moved/extracted without rewriting everything.

Bad counter-signs: changing one feature touches half the modules, constant synchronous hops between boundaries, shared data, "shotgun surgery". A good decomposition localizes change and keeps the system **understandable and evolvable**.`,
      },
      'decomposition-mistakes': {
        question: 'What are common mistakes when identifying domains and services?',
        answer: `Common architectural decomposition mistakes:

- **splitting by DB tables** — a service/module per table; the boundaries end up technical rather than business, and everything is tied together by joins/calls;
- **splitting by CRUD entities** — "UserService", "OrderService" as wrappers over entities instead of business capabilities; logic smears between them;
- **splitting by UI screens** — the boundary mirrors the interface, not the domain; when the UI changes, everything breaks;
- **mixing different contexts** — e.g. profile (who you are) and access (what you may do) in one; different reasons to change get glued together;
- **contexts too big** — a "god service" that is a mess inside again; or **too small** — distributed complexity for no benefit, chatty integration;
- **extracting microservices too early** — distributing before boundaries stabilize → a distributed monolith (tight coupling + network overhead, the worst of both worlds).

The common root: splitting by **technical structure** (tables/CRUD/screens) rather than by **business capabilities and language**. The right way — from capabilities, invariants and reasons to change, and decide physical deployment separately.`,
      },
      'evolve-inprocess-to-rest-kafka': {
        question: 'How would you evolve in-process module communication into REST or Kafka?',
        answer: `The evolution relies on modules already communicating **through interfaces (contracts)** — then only the call's implementation changes, not the calling code.

The order:

1. **start with interfaces** — in a modular monolith a module depends on a neighbor's port, not its implementation; this is the future swap point;
2. **separate sync and async needs** — where an immediate answer is needed (a query/check) → a synchronous call; where learning about a fact later is enough (notify, propagate a change) → asynchronous;
3. **replace the local implementation with REST** for **queries/checks** (query, "give me data", "check a permission") — a synchronous call over the contract; add timeouts, retries, a circuit breaker;
4. **use Kafka for async propagation/events** — instead of a direct call the module **publishes a domain event**, subscribers react; decoupling and resilience to unavailability;
5. **acknowledge the new trade-offs** — network failures, eventual consistency, duplicates (→ idempotency), contract versioning, tracing appear; reliable event publishing after a DB change is provided by the **outbox**.

The essence: a clean contract turns the move "in-process → REST/Kafka" from a rewrite into a **swap of implementation** — while consciously accepting the distributed price where it is justified.`,
      },
    },
  };

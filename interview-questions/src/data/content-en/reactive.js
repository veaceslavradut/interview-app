// Английские переводы: reactive
export const reactive = {
    title: 'Reactive Programming',
    description: 'Reactive Streams, Project Reactor, RxJava',
    questions: {
      'what-is-reactive': {
        question: 'What is reactive programming?',
        answer: `**Reactive programming** is a paradigm based on asynchronous data streams and the propagation of changes. The program reacts to events as they arrive.

Principles from the **Reactive Manifesto**:

- **Responsive** — the system responds quickly;
- **Resilient** — resilient to failures;
- **Elastic** — scalable under load;
- **Message Driven** — asynchronous message exchange.

Key differences from the imperative approach:

- **push instead of pull**: data is "pushed" to subscribers rather than requested;
- **non-blocking execution**: threads do not sit idle waiting for I/O;
- **backpressure**: the consumer controls the rate at which data arrives.

The Java ecosystem: Reactive Streams (the standard), Project Reactor (Spring WebFlux), RxJava, Akka Streams, Flow API (Java 9).`,
      },
      'reactive-streams': {
        question: 'What is the Reactive Streams specification?',
        answer: `**Reactive Streams** is a standard for asynchronous stream processing with non-blocking backpressure. Since Java 9 it is included in the JDK as \`java.util.concurrent.Flow\`.

Four interfaces:

\`\`\`java
interface Publisher<T> {
    void subscribe(Subscriber<? super T> s);
}

interface Subscriber<T> {
    void onSubscribe(Subscription s);
    void onNext(T t);
    void onError(Throwable t);
    void onComplete();
}

interface Subscription {
    void request(long n);  // backpressure!
    void cancel();
}

interface Processor<T, R> extends Subscriber<T>, Publisher<R> {}
\`\`\`

Protocol: \`onSubscribe onNext* (onError | onComplete)?\`

The key idea is **backpressure**: via \`request(n)\` the subscriber explicitly tells how many elements it is ready to accept, which protects it from being overwhelmed by a fast publisher.`,
      },
      'mono-flux': {
        question: 'What are Mono and Flux in Project Reactor?',
        answer: `**Project Reactor** is a reactive library, the foundation of Spring WebFlux. Two main publisher types:

**Mono<T>** — a publisher of **0 or 1** element:

\`\`\`java
Mono<User> user = userRepository.findById(id);
Mono<String> name = user.map(User::getName)
                        .defaultIfEmpty("Unknown");
\`\`\`

**Flux<T>** — a publisher of **0..N** elements:

\`\`\`java
Flux<User> users = userRepository.findAll();
users.filter(u -> u.getAge() > 18)
     .map(User::getName)
     .take(10)
     .subscribe(System.out::println);
\`\`\`

Important points:

- nothing happens until subscription (**"assembly time" vs "subscription time"**);
- operators: \`map\`, \`flatMap\`, \`filter\`, \`zip\`, \`merge\`, \`concat\`, \`retry\`, \`onErrorResume\`;
- thread control: \`subscribeOn\` (where subscription happens), \`publishOn\` (where processing happens further down the chain);
- backpressure strategies: \`onBackpressureBuffer\`, \`onBackpressureDrop\`, \`onBackpressureLatest\`.`,
      },
      'reactive-vs-async': {
        question: 'When should you use the reactive approach, and when not?',
        answer: `**The reactive approach is justified:**

- high-load I/O-bound services (thousands of simultaneous connections);
- data streaming (SSE, WebSocket), event-driven systems;
- integrating many external services with slow responses;
- the need for backpressure under uneven load;
- aggregator microservices with parallel calls.

**The reactive approach is excessive/harmful:**

- CPU-bound tasks — non-blocking code will not speed up computation;
- simple CRUD applications with moderate load;
- the team is unfamiliar with the paradigm — debugging and stack traces are very complex;
- blocking dependencies (JDBC without R2DBC) negate the benefits.

An alternative since Java 21 — **virtual threads (Project Loom)**: the scalability of the reactive approach with the familiar imperative code style. In many scenarios Loom is displacing reactive frameworks.`,
      },
      'hot-cold-publishers': {
        question: 'What is the difference between cold and hot publishers?',
        answer: `**A cold publisher** generates data **anew for each subscriber**; nothing happens without a subscription:

\`\`\`java
Flux<User> users = Flux.defer(() -> userRepository.findAll());
users.subscribe(s1); // DB query #1
users.subscribe(s2); // DB query #2 — an independent sequence from the beginning
\`\`\`

Examples: an HTTP request, reading a file, a database query. Each subscriber receives the full stream from the first element.

**A hot publisher** emits data **independently of subscribers**; a subscriber only sees what happened after subscribing:

\`\`\`java
// stock quotes, mouse clicks, Kafka messages — "live" events
Sinks.Many<Price> sink = Sinks.many().multicast().onBackpressureBuffer();
Flux<Price> prices = sink.asFlux();
// a late subscriber has missed the earlier events
\`\`\`

**Turning cold → hot:**

- \`share()\` / \`publish().refCount(n)\` — a shared subscription to the source for multiple consumers;
- \`cache(n)\` — hot + replay of the last n elements to new subscribers;
- \`replay()\` — replaying the history.

**Practical significance**: without understanding the difference, it is easy to end up with duplicated side effects (two HTTP calls instead of one with two subscriptions to a cold stream) or lost events (a late subscription to a hot stream). Analogy: cold — a movie on demand (from the beginning for everyone), hot — a live broadcast.`,
      },
      'webflux-vs-mvc': {
        question: 'What is the difference between Spring WebFlux and Spring MVC?',
        answer: `**Spring MVC** — the classic servlet stack:

- the thread-per-request model, blocking I/O;
- Tomcat/Jetty, Servlet API;
- return types: objects, \`ResponseEntity\`;
- blocking drivers: JDBC, RestTemplate.

**Spring WebFlux** — the reactive stack:

- **non-blocking I/O**, event loop (Netty by default): a small number of threads serves thousands of connections;
- return types: \`Mono<T>\`, \`Flux<T>\`;
- \`WebClient\` instead of RestTemplate, R2DBC instead of JDBC, reactive Mongo/Redis/Kafka drivers;
- Server-Sent Events and streaming support out of the box;
- two styles: annotations (\`@RestController\` + Mono/Flux) and functional routers (RouterFunction).

\`\`\`java
@GetMapping("/users/{id}")
public Mono<User> getUser(@PathVariable String id) {
    return userRepository.findById(id)
        .switchIfEmpty(Mono.error(new NotFoundException()));
}
\`\`\`

**Critically important**: a single blocking call (JDBC, heavy computation) in the event loop **stops the processing of all requests** on that thread. Blocking code is isolated: \`publishOn(Schedulers.boundedElastic())\`. Detector: BlockHound.

**The choice**: WebFlux — high concurrency of I/O-bound load, streaming, the whole dependency chain is reactive. MVC — the familiar model, blocking dependencies, easier debugging. MVC + virtual threads (Java 21) is often a sufficient alternative to WebFlux.`,
      },
      'reactor-error-backpressure': {
        question: 'How do you handle errors and backpressure in Project Reactor?',
        answer: `**Error handling** — an error is terminal: the stream ends with an \`onError\` signal, and no further elements arrive.

Main operators:

\`\`\`java
flux
    .onErrorReturn(fallbackValue)                  // default value
    .onErrorResume(e -> fallbackPublisher(e))      // fallback stream (e.g., a cache)
    .onErrorMap(e -> new BusinessException(e))     // exception transformation
    .onErrorContinue((e, item) -> log.warn(...))   // skip the element, continue (use with care!)
    .retry(3)                                      // re-subscription
    .retryWhen(Retry.backoff(3, Duration.ofSeconds(1))
        .filter(e -> e instanceof TransientException))
    .timeout(Duration.ofSeconds(5))                // TimeoutException on inactivity
    .doFinally(signal -> cleanup());               // resource release
\`\`\`

Important: \`retry\` is a **re-subscription** (for a cold source — repeating the whole operation); an exception in an operator's lambda is turned into onError.

**Backpressure** is a mechanism protecting a slow consumer from a fast producer: the subscriber requests \`request(n)\`.

When the source cannot slow down (events, UI, a message broker), choose a strategy:

- \`onBackpressureBuffer(size)\` — buffering (memory risk; can be used with a DROP_OLDEST policy);
- \`onBackpressureDrop()\` — drop the excess;
- \`onBackpressureLatest()\` — keep only the latest;
- \`onBackpressureError()\` — fail with an error;
- \`limitRate(n)\` — limiting the size of requests upstream;
- \`sample()\` / \`window()\` / \`buffer()\` — stream aggregation.

On overflow without a strategy — \`OverflowException\`. The strategy choice depends on the domain: quotes — latest, metrics — drop/sample, payments — buffer + persistence (Kafka is better).`,
      },
      'project-reactor': {
        question: 'What is Project Reactor?',
        answer: `**Project Reactor** is a reactive library for the JVM by the Spring team that fully implements the **Reactive Streams** specification. It is the foundation of **Spring WebFlux**.

The essentials:

- two publisher types: **\`Mono<T>\`** (0..1 element) and **\`Flux<T>\`** (0..N);
- a rich set of operators (\`map\`, \`flatMap\`, \`filter\`, \`zip\`, \`retry\`, \`onErrorResume\`…);
- non-blocking backpressure out of the box via \`request(n)\`;
- thread control via **Schedulers** (\`publishOn\` / \`subscribeOn\`);
- debugging tools: \`log()\`, \`checkpoint()\`, the Reactor Debug Agent, BlockHound.

Its counterpart from the RxJava world is also a Reactive Streams implementation, but Reactor is tailored for Spring and Java 8+. Nothing runs until a subscription happens (\`subscribe\`).`,
      },
      'reactive-laziness': {
        question: 'What does it mean that reactive streams are lazy?',
        answer: `A reactive pipeline **does nothing at assembly time** — it only describes *what* will happen. The actual work starts only on **subscription** (subscription time).

\`\`\`java
Mono<User> mono = webClient.get()...   // the HTTP request is NOT sent yet
mono.subscribe();                       // only now the request goes out
\`\`\`

Consequences:

- without a subscription the code in the chain **will not run** (a common beginner mistake — "forgot to subscribe");
- a **cold publisher** restarts the work for *each* subscriber (two \`subscribe\`s = two HTTP calls);
- laziness lets you assemble the pipeline declaratively, reuse it and control when it starts;
- source deferral is set via \`Mono.defer\` / \`Flux.defer\`, so a heavy operation is created at subscription time, not at assembly.

The opposite is imperative code, which runs as soon as the line is reached.`,
      },
      'backpressure': {
        question: 'What is backpressure?',
        answer: `**Backpressure** is the mechanism by which a **slow consumer controls the rate** of a fast producer, protecting itself from being overwhelmed.

In Reactive Streams it is implemented explicitly: via \`Subscription.request(n)\` the subscriber tells **how many elements** it is ready to accept; the publisher may not send more.

\`\`\`text
Subscriber ──request(n)──▶ Publisher
Publisher  ──onNext × ≤n─▶ Subscriber   // no more than requested
\`\`\`

When the source **cannot** slow down (UI events, quotes, a broker), strategies are applied: \`onBackpressureBuffer\`, \`onBackpressureDrop\`, \`onBackpressureLatest\`, \`onBackpressureError\`, as well as \`limitRate(n)\`.

Without backpressure a fast producer would overflow the buffers/memory of a slow consumer. This is the key difference between Reactive Streams and a "naive" push approach.`,
      },
      'reactor-implements-reactive-streams': {
        question: 'How does Reactor implement Reactive Streams principles?',
        answer: `Reactor is a **concrete implementation** of the Reactive Streams standard (\`Publisher/Subscriber/Subscription/Processor\`):

- **\`Mono\` and \`Flux\` are \`Publisher\`s** from the spec; any Reactive-Streams-compatible \`Subscriber\` can subscribe to them;
- **non-blocking backpressure** is implemented via \`request(n)\` in \`Subscription\` — the consumer controls the pace;
- the **signal protocol** \`onSubscribe → onNext* → (onComplete | onError)\` is honored;
- **interoperability**: Reactor is compatible with RxJava, Akka Streams and \`java.util.concurrent.Flow\` (Java 9) — the types convert, since all follow one standard;
- Reactor operators correctly **propagate backpressure and cancellation signals** upstream.

Bottom line: Reactor provides a convenient operator API on top of the low-level Reactive Streams contract while preserving all its guarantees (backpressure, protocol, cancellation).`,
      },
      'map-vs-flatmap': {
        question: 'What is the difference between map and flatMap in Reactor?',
        answer: `Both transform elements, but differently:

**\`map\`** — a **synchronous** "value → value" (1:1) transformation. The function returns a plain object.

\`\`\`java
Flux<String> names = users.map(User::getName);   // User -> String
\`\`\`

**\`flatMap\`** — an **asynchronous** "value → \`Publisher\`" transformation whose results are "unwrapped" and merged into a common stream. The function returns a \`Mono\`/\`Flux\`.

\`\`\`java
Flux<Order> orders = users.flatMap(u -> orderService.findByUser(u.id()));
\`\`\`

Key differences:

- \`flatMap\` is used when you need **another reactive call** inside (DB, HTTP);
- \`flatMap\` **does not preserve order** (results merge as they become ready, with concurrency) — if order matters, use \`concatMap\` (sequential) or \`flatMapSequential\`;
- a common mistake is \`map\` with a function returning a \`Mono\` → you get \`Flux<Mono<T>>\` instead of \`Flux<T>\`; \`flatMap\` was needed.`,
      },
      'publishon-vs-subscribeon': {
        question: 'What is the difference between publishOn and subscribeOn?',
        answer: `Both change the \`Scheduler\` (thread pool), but act differently:

**\`subscribeOn(scheduler)\`** — affects **where the subscription starts and the source runs**. It affects the **whole chain upstream** regardless of its position; effectively one \`subscribeOn\` matters in a chain.

**\`publishOn(scheduler)\`** — switches the thread for **all operators downstream**, starting from the call site. It can be placed several times, changing the context in different segments.

\`\`\`java
flux
    .subscribeOn(Schedulers.boundedElastic()) // where the source runs
    .map(this::heavyCpu)                       // ← same thread (before publishOn)
    .publishOn(Schedulers.parallel())          // a switch
    .map(this::more);                          // ← now on a parallel thread
\`\`\`

Mnemonic: **subscribeOn — "where we start" (upstream, the whole chain), publishOn — "where we switch to next" (downstream, from the call site)**. It is exactly \`publishOn(boundedElastic())\` that is used to move a blocking chunk off the event loop.`,
      },
      'reactor-schedulers': {
        question: 'What are Schedulers in Reactor?',
        answer: `A **Scheduler** is an abstraction over a source of execution threads; it defines **on which threads** Reactor runs work (together with \`publishOn\`/\`subscribeOn\`).

The main \`Schedulers\` factories:

- **\`parallel()\`** — a fixed pool (≈ number of cores) for **CPU-bound** tasks without blocking;
- **\`boundedElastic()\`** — a bounded, elastic pool for **blocking / long I/O** operations (a wrapper around legacy JDBC, files);
- **\`single()\`** — one reusable thread;
- **\`immediate()\`** — execution on the current thread (no switch);
- \`fromExecutorService(...)\` — on your own \`ExecutorService\`.

By default an operator runs on the thread where the previous signal occurred (often — the Netty event loop). You switch threads explicitly to **avoid blocking the event loop** and to separate CPU and I/O load. The key rule: blocking work only on \`boundedElastic()\`.`,
      },
      'bounded-elastic': {
        question: 'When should you use boundedElastic?',
        answer: `**\`Schedulers.boundedElastic()\`** is meant for **blocking or long** operations that must not run on the event loop:

- calls to **blocking APIs**: legacy JDBC, file I/O, blocking SDKs/clients;
- long synchronous operations wrapped into a reactive pipeline.

Why exactly this one:

- the pool is **bounded** (by default ~10× the number of cores) — it protects against uncontrolled thread growth (unlike the old \`elastic()\`);
- it queues tasks when threads are exhausted;
- the switch is done via \`subscribeOn(Schedulers.boundedElastic())\` or \`publishOn(...)\` around the blocking segment.

\`\`\`java
Mono.fromCallable(() -> jdbcDao.load(id))   // a blocking call
    .subscribeOn(Schedulers.boundedElastic());
\`\`\`

Do **not** use it for CPU-bound work (use \`parallel()\` for that) and do not turn the whole codebase blocking — boundedElastic only **isolates** an unavoidable block, it does not justify one.`,
      },
      'blocking-in-pipeline': {
        question: 'What happens if you run blocking code inside a reactive pipeline?',
        answer: `If a blocking call (JDBC, \`Thread.sleep\`, synchronous HTTP) runs **on an event-loop thread**, that thread **gets stuck** and cannot serve other tasks.

Since a non-blocking server (Netty) keeps a **small number** of event-loop threads for thousands of connections, blocking even one of them:

- **halts the processing of many requests** assigned to that thread;
- sharply drops throughput and raises latency;
- under load leads to timeouts and an effective service outage.

The right way is to **move the block** onto a suitable Scheduler:

\`\`\`java
Mono.fromCallable(() -> blockingDao.load(id))
    .subscribeOn(Schedulers.boundedElastic());   // not on the event loop
\`\`\`

Detection: **BlockHound** — an agent that detects blocking calls on non-blocking threads and throws in tests/development. The best solution is to replace the blocking dependency with a reactive one altogether (R2DBC instead of JDBC).`,
      },
      'blocking-dangerous-webflux': {
        question: 'Why is blocking dangerous in Spring WebFlux?',
        answer: `The Spring WebFlux model is fundamentally different from Spring MVC, which is exactly why blocking hurts more:

- in **MVC** the "thread per request" model: a block slows down **its own** request, but a pool of hundreds of threads serves the rest;
- in **WebFlux** (Netty) — a **small number of event-loop threads** (≈ number of cores) for **thousands** of connections. A blocked event-loop thread sits idle instead of serving many other requests.

Consequences: a few blocking calls can "eat" the entire event-loop pool and **hang the whole service**, not just one request.

Therefore, in WebFlux:

- the entire dependency chain must be **non-blocking** (WebClient, R2DBC, reactive drivers);
- an unavoidable block is isolated on \`boundedElastic()\`;
- in development/tests, enable **BlockHound**.

If the dependency stack is blocking and cannot be rewritten, WebFlux loses its point; often MVC is more sensible (if needed — with Java 21 virtual threads).`,
      },
      'when-choose-webflux': {
        question: 'When would you choose WebFlux over Spring MVC?',
        answer: `**WebFlux is justified** when:

- **high concurrency of I/O-bound** load — thousands of concurrent connections with relatively slow responses;
- **streaming**: Server-Sent Events, WebSocket, streaming of large data;
- an **aggregator** service making many parallel calls to other services;
- **backpressure** is needed across the whole chain;
- the **entire** dependency chain is already reactive (WebClient, R2DBC, reactive Mongo/Redis/Kafka).

**MVC is preferable** when:

- dependencies are **blocking** (JDBC without R2DBC, legacy clients) and cannot be rewritten;
- the load is moderate and ease of debugging with clear stack traces matters more;
- the team is not ready for the reactive paradigm.

An important alternative (Java 21): **MVC + virtual threads (Loom)** give high concurrency with the familiar imperative style, often covering the need for which WebFlux used to be chosen.`,
      },
      'jpa-with-webflux': {
        question: 'Can you use JPA with WebFlux?',
        answer: `Technically — yes, but it is an **anti-pattern**: JPA/Hibernate on top of **JDBC** is a **blocking** API, while WebFlux is designed for a non-blocking stack.

Problems:

- a blocking JPA call on the event loop **hangs** the event-loop thread (see the danger of blocking in WebFlux);
- the main advantage of WebFlux — non-blocking I/O and connection scalability — is lost.

If JPA is still needed (e.g. for existing code), the blocking calls **must** be isolated:

\`\`\`java
Mono.fromCallable(() -> jpaRepository.findById(id))
    .subscribeOn(Schedulers.boundedElastic());
\`\`\`

But this merely "patches" the problem and does not make DB access truly reactive. The correct options:

- for a fully reactive application — **R2DBC** (reactive access to a relational DB) instead of JPA;
- if JPA is unavoidable — it is often more honest to stay on **Spring MVC** (optionally with virtual threads).`,
      },
      'r2dbc-why': {
        question: 'Why is R2DBC preferred in a fully reactive application?',
        answer: `**R2DBC (Reactive Relational Database Connectivity)** is a specification for **non-blocking** access to relational databases, an alternative to blocking JDBC.

Why it is needed in a reactive stack:

- **non-blocking I/O** to the DB — queries do not occupy an event-loop thread while waiting for a response, preserving WebFlux's scalability by connection count;
- **end-to-end backpressure** — the result arrives as a \`Flux<Row>\`, the consumer controls the pace; large result sets are not loaded fully into memory;
- the chain stays **fully reactive** (WebClient + R2DBC + a reactive pipeline) without a "blocking break".

Limitations: R2DBC is **not an ORM** (no lazy associations, no first-level cache, no automatic joins as in Hibernate); Spring Data R2DBC is simpler and requires more explicit work with data.

If the application is truly reactive, JDBC/JPA become the bottleneck, and R2DBC (or reactive Mongo/Cassandra drivers) is the right choice. If reactivity is not needed, JPA on MVC is simpler.`,
      },
      'reactor-cancellation': {
        question: 'How does cancellation work in Reactor?',
        answer: `Cancellation is part of the Reactive Streams contract: a subscriber can call **\`Subscription.cancel()\`**, signaling that the data is no longer needed. The signal propagates **upstream**, and the source stops its work and releases resources.

When it happens:

- the subscriber **unsubscribed** explicitly (\`Disposable.dispose()\`);
- operators that cut the stream short: \`take(n)\`, \`next()\`, \`timeout()\` — having got what they need, they cancel upstream;
- in **WebFlux** the client **dropped the HTTP connection** → Reactor cancels the chain (e.g. stops the DB query), saving resources;
- in \`flatMap\`/\`switchMap\` inner streams are cancelled (\`switchMap\` cancels the previous one on a new element).

Reacting to cancellation:

\`\`\`java
flux.doOnCancel(() -> log.info("cancelled"))   // a cancel hook
    .doFinally(signal -> release());           // CANCEL / COMPLETE / ERROR — cleanup
\`\`\`

Proper cancellation support is critical for releasing connections and preventing leaks in long-lived/streaming flows.`,
      },
      'doon-operators': {
        question: 'What is the purpose of doOnNext, doOnError, and doFinally?',
        answer: `These are **side-effect hook** operators: they "eavesdrop" on the stream's signals **without changing** the data itself. Useful for logging, metrics, releasing resources.

- **\`doOnNext(x -> ...)\`** — fires on **each element** (\`onNext\`); typical for per-element logging/metrics;
- **\`doOnError(e -> ...)\`** — fires on an **error** (\`onError\`); logging/alerting (but does **not** handle the error — the stream still terminates; for recovery use \`onErrorResume\`/\`onErrorReturn\`);
- **\`doFinally(signal -> ...)\`** — fires **once** on termination for **any** reason: \`onComplete\`, \`onError\` **or** \`cancel\`; ideal for resource cleanup (unlike \`doOnComplete\`, which misses error/cancel).

\`\`\`java
flux.doOnNext(x -> log.debug("item {}", x))
    .doOnError(e -> log.error("failed", e))
    .doFinally(sig -> connection.release());
\`\`\`

Others in the family: \`doOnSubscribe\`, \`doOnCancel\`, \`doOnComplete\`, \`doOnRequest\`. Important: \`doOn*\` is for effects only; you cannot change the data stream with them.`,
      },
      'manual-subscribe-bad': {
        question: 'Why is calling subscribe() manually inside service code usually a bad idea?',
        answer: `In a WebFlux application the **framework should perform the subscription** (Spring subscribes to the \`Mono\`/\`Flux\` returned from the controller). A manual \`subscribe()\` inside a service is almost always a mistake.

Why it is bad:

- **breaking the chain** — you "consume" the reactive stream instead of returning it up; composition, backpressure and **cancellation** are lost (the client cancelled the request, but your \`subscribe\` keeps running);
- **loss of context** — the Reactor Context (security, tracing, transaction) is propagated along the subscription chain; with your own \`subscribe\` it is lost;
- **swallowing errors** — errors go to the default subscriber ("dropped" log) rather than up to the handler;
- **uncontrolled concurrency/leaks** — a "fire-and-forget" subscription lives on its own, hard to cancel and to await.

The right way is to **return** the \`Mono\`/\`Flux\` and **compose** with operators (\`flatMap\`, \`zip\`, \`then\`), letting the framework subscribe:

\`\`\`java
// bad:
public void handle(Cmd c) { service.process(c).subscribe(); }
// good:
public Mono<Void> handle(Cmd c) { return service.process(c); }
\`\`\`

A manual \`subscribe\` is appropriate only at the "edge" of non-Spring applications (main, tests, integration with imperative code).`,
      },
    },
  };

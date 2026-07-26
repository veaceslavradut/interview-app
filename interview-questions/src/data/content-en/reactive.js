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
    },
  };

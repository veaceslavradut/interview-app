// Английский перевод банка квиза: reactive. Порядок вариантов и опций — как в RU.
export const reactive = {
  'what-is-reactive': [
    {
      question: 'What is reactive programming?',
      options: [
        'Asynchronous processing of data streams with non-blocking execution and backpressure support',
        'Programming with the fastest possible reaction to key presses',
        'Writing code that recompiles on every change',
        'Synchronous request handling with a thread per request',
      ],
    },
    {
      question: 'Which properties of a system does the Reactive Manifesto describe?',
      options: [
        'Responsive, Resilient, Elastic, Message-driven',
        'Atomicity, Consistency, Isolation, Durability',
        'Encapsulation, inheritance, polymorphism, abstraction',
        'Speed, scalability, cheapness, simplicity',
      ],
    },
  ],
  'reactive-streams': [
    {
      question: 'Which interfaces does the Reactive Streams specification define?',
      options: [
        'Publisher, Subscriber, Subscription, Processor',
        'Stream, Collector, Optional, Spliterator',
        'Observable, Observer, Scheduler, Disposable',
        'Channel, Buffer, Selector, Pipe',
      ],
    },
    {
      question: 'How is backpressure implemented in Reactive Streams?',
      options: [
        'The subscriber requests, via Subscription.request(n), as many elements as it can handle',
        'The publisher sends data with a fixed delay',
        'Excess data is always silently dropped',
        'The publisher blocks until the subscriber is free',
      ],
    },
  ],
  'mono-flux': [
    {
      question: 'How does Mono differ from Flux in Project Reactor?',
      options: [
        'Mono emits 0 or 1 element; Flux — from 0 to N elements',
        'Mono is synchronous, Flux asynchronous',
        'Mono works with numbers, Flux with strings',
        'Mono is deprecated and replaced by Flux',
      ],
    },
    {
      question: 'Which Reactor type suits the result of finding one record by id?',
      options: [
        'Mono<T> — at most one element is expected',
        'Flux<T> — any result must be wrapped in a Flux',
        'List<T> wrapped in an Optional',
        'CompletableStream<T>',
      ],
    },
  ],
  'reactive-vs-async': [
    {
      question: 'How does the reactive approach differ from plain asynchrony (e.g. CompletableFuture)?',
      options: [
        'Reactivity adds working with streams of many elements and backpressure, not just a single deferred result',
        'Reactive code always runs in a single thread',
        'Asynchrony is impossible without reactive libraries',
        'No difference — the terms are fully interchangeable',
      ],
    },
    {
      question: 'Which of the following exists in reactive streams but is absent from CompletableFuture?',
      options: [
        'Backpressure and processing a stream of many elements over time',
        'The ability to run code asynchronously',
        'Error handling',
        'Combining several results',
      ],
    },
  ],
  'hot-cold-publishers': [
    {
      question: 'How does a cold publisher differ from a hot one?',
      options: [
        'Cold starts generating data anew for each subscriber; hot emits data independently of subscribers, and latecomers lose earlier elements',
        'A hot publisher runs faster than a cold one',
        'A cold publisher cannot have more than one subscriber',
        'A hot publisher caches all data for all future subscribers',
      ],
    },
    {
      question: 'A real-time stream of stock quotes is an example of which publisher?',
      options: [
        'Hot — data is emitted independently of when you subscribe',
        'Cold — each subscriber gets the history from the start',
        'A synchronous blocking source',
        'A terminal stream operation',
      ],
    },
  ],
  'webflux-vs-mvc': [
    {
      question: 'How does Spring WebFlux differ from Spring MVC?',
      options: [
        'WebFlux is non-blocking, runs on an event loop (Netty) with few threads; MVC is blocking, a thread per request',
        'WebFlux works only with databases, MVC only with HTTP',
        'MVC is asynchronous, WebFlux synchronous',
        'WebFlux is a new name for Spring MVC',
      ],
    },
    {
      question: 'When does WebFlux give the biggest benefit over MVC?',
      options: [
        'With many concurrent connections and IO-bound operations using non-blocking drivers',
        'With heavy CPU computations without I/O',
        'When using a blocking JDBC driver',
        'In any application — WebFlux is always faster',
      ],
    },
  ],
  'reactor-error-backpressure': [
    {
      question: 'Which Reactor operators are used for error handling?',
      options: [
        'onErrorReturn, onErrorResume, retry',
        'try, catch, finally',
        'filter, map, reduce',
        'commit, rollback, savepoint',
      ],
    },
    {
      question: 'Which backpressure strategies exist when the consumer is overwhelmed?',
      options: [
        'Buffering, dropping elements (drop), keeping the latest (latest), erroring (error)',
        'Only increasing the number of threads',
        'Only fully stopping the publisher forever',
        'Backpressure is not configurable — the strategy is always the same',
      ],
    },
  ],
  'project-reactor': [
    {
      question: 'What is Project Reactor?',
      options: [
        'A reactive library for the JVM implementing Reactive Streams and underpinning Spring WebFlux',
        'An ORM for accessing relational databases',
        'A project build tool, an alternative to Maven and Gradle',
        'A library for writing unit tests',
      ],
    },
  ],
  'reactive-laziness': [
    {
      question: 'What does it mean that reactive streams are lazy?',
      options: [
        'Nothing runs until a subscription happens (subscribe)',
        'Data is cached and never recomputed',
        'Operators run on a separate thread on a timer',
        'The stream processes only the first element and ignores the rest',
      ],
    },
  ],
  'backpressure': [
    {
      question: 'What is backpressure?',
      options: [
        'A mechanism by which a slow consumer controls the rate of a fast producer',
        'Automatic growth of the thread pool under load',
        'Compression of messages before sending them over the network',
        'Prioritization of requests by importance',
      ],
    },
  ],
  'reactor-implements-reactive-streams': [
    {
      question: 'How does Reactor relate to the Reactive Streams specification?',
      options: [
        'It is an implementation of it: Mono and Flux are Publishers, backpressure goes via request(n)',
        'Reactor and Reactive Streams are unrelated',
        'Reactor replaces Reactive Streams with its own incompatible protocol',
        'Reactive Streams is a part of Reactor invented by the Spring team',
      ],
    },
  ],
  'map-vs-flatmap': [
    {
      question: 'What is the difference between map and flatMap in Reactor?',
      options: [
        'map is a synchronous value transform; flatMap unwraps the returned Publisher (async)',
        'map is asynchronous while flatMap is synchronous',
        'They are completely identical and interchangeable',
        'flatMap only filters elements while map deletes them',
      ],
    },
  ],
  'publishon-vs-subscribeon': [
    {
      question: 'What is the difference between publishOn and subscribeOn?',
      options: [
        'subscribeOn sets the source thread for the whole chain; publishOn switches the thread for downstream operators',
        'publishOn affects the source while subscribeOn affects the subscriber',
        'Both do the same thing, there is no difference',
        'subscribeOn cancels the subscription while publishOn creates it',
      ],
    },
  ],
  'reactor-schedulers': [
    {
      question: 'What are Schedulers in Reactor?',
      options: [
        'An abstraction over thread pools that defines on which threads work runs',
        'A cron task scheduler inside the application',
        'A retry mechanism for errors',
        'A store of subscription state',
      ],
    },
  ],
  'bounded-elastic': [
    {
      question: 'What is Schedulers.boundedElastic() intended for?',
      options: [
        'Isolating blocking and long operations off the event loop with a bounded thread pool',
        'CPU-bound computation on a pool sized to the number of cores',
        'Running code strictly on the current thread with no switch',
        'Guaranteeing the processing order of elements',
      ],
    },
  ],
  'blocking-in-pipeline': [
    {
      question: 'What happens if you run blocking code on an event-loop thread?',
      options: [
        'The thread gets stuck and stops serving other requests assigned to it',
        'Nothing — Reactor moves the call to a separate thread by itself',
        'The call automatically becomes non-blocking',
        'The event-loop pool instantly doubles in size',
      ],
    },
  ],
  'blocking-dangerous-webflux': [
    {
      question: 'Why is blocking especially dangerous in Spring WebFlux specifically?',
      options: [
        'A small number of event-loop threads serve thousands of connections — a block hangs many requests',
        'WebFlux does not support multithreading at all',
        'In WebFlux each request gets its own thread, so blocks are harmless',
        'Blocking in WebFlux is no more dangerous than in MVC',
      ],
    },
  ],
  'when-choose-webflux': [
    {
      question: 'When is it justified to choose WebFlux over Spring MVC?',
      options: [
        'For high concurrency of I/O-bound load, streaming, and a fully reactive dependency chain',
        'Always, since WebFlux is strictly faster than MVC in all cases',
        'For CPU-bound computation where maximum calculation speed matters',
        'When all dependencies are blocking (JDBC, legacy clients)',
      ],
    },
  ],
  'jpa-with-webflux': [
    {
      question: 'Is it appropriate to use JPA (over JDBC) together with WebFlux?',
      options: [
        'It is an anti-pattern: JDBC is blocking; you need R2DBC or to isolate calls on boundedElastic',
        'Yes, JPA is fully non-blocking and perfect for WebFlux',
        'Yes, WebFlux automatically makes JDBC non-blocking',
        'No, JPA is technically impossible to call from WebFlux',
      ],
    },
  ],
  'r2dbc-why': [
    {
      question: 'Why is R2DBC preferred in a fully reactive application?',
      options: [
        'It gives non-blocking access to a relational DB and end-to-end backpressure, preserving scalability',
        'It is a faster ORM than Hibernate, with a cache and lazy associations',
        'It is the only driver that supports SQL',
        'It is blocking but uses less memory than JDBC',
      ],
    },
  ],
  'reactor-cancellation': [
    {
      question: 'How does cancellation work in Reactor?',
      options: [
        'The subscriber calls Subscription.cancel(); the signal goes upstream, the source stops and releases resources',
        'Cancellation is impossible: the stream always runs to the end',
        'Cancellation removes already-received elements from the subscriber\'s memory',
        'cancel() restarts the stream from the first element',
      ],
    },
  ],
  'doon-operators': [
    {
      question: 'What is the purpose of doOnNext, doOnError, and doFinally?',
      options: [
        'They are side-effect hooks (logging, cleanup) that do not change the stream data',
        'They transform stream elements, replacing map and flatMap',
        'They handle the error and recover the stream instead of onErrorResume',
        'They control the backpressure buffer size',
      ],
    },
  ],
  'manual-subscribe-bad': [
    {
      question: 'Why is calling subscribe() manually inside service code usually a bad idea?',
      options: [
        'Composition, backpressure, cancellation and context are lost, and errors are swallowed — the framework should subscribe',
        'subscribe() is too slow and always blocks the thread',
        'A manual subscribe is forbidden by the compiler',
        'It causes duplication of elements in the stream',
      ],
    },
  ],
};

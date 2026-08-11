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
};

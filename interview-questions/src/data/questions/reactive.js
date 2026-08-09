// Категория: reactive
export const reactive = {
    id: 'reactive',
    title: 'Реактивное программирование',
    icon: '⚡',
    description: 'Reactive Streams, Project Reactor, RxJava',
    questions: [
      {
        id: 'what-is-reactive',
        difficulty: 'easy',
        tags: ['basics'],
        related: ['reactive-streams', 'mono-flux'],
        question: 'Что такое реактивное программирование?',
        answer: `**Реактивное программирование** — парадигма, основанная на асинхронных потоках данных (data streams) и распространении изменений. Программа реагирует на события по мере их поступления.

Принципы из **Reactive Manifesto**:

- **Responsive** — отзывчивость: система отвечает быстро;
- **Resilient** — устойчивость к отказам;
- **Elastic** — масштабируемость под нагрузкой;
- **Message Driven** — асинхронный обмен сообщениями.

Ключевые отличия от императивного подхода:

- **push вместо pull**: данные «проталкиваются» подписчикам, а не запрашиваются;
- **неблокирующее выполнение**: потоки не простаивают в ожидании I/O;
- **backpressure**: потребитель управляет скоростью поступления данных.

Экосистема Java: Reactive Streams (стандарт), Project Reactor (Spring WebFlux), RxJava, Akka Streams, Flow API (Java 9).`,
      },
      {
        id: 'reactive-streams',
        difficulty: 'medium',
        tags: ['streams'],
        related: ['what-is-reactive'],
        question: 'Что такое спецификация Reactive Streams?',
        answer: `**Reactive Streams** — стандарт асинхронной обработки потоков данных с неблокирующим backpressure. С Java 9 включён в JDK как \`java.util.concurrent.Flow\`.

Четыре интерфейса:

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

Протокол: \`onSubscribe onNext* (onError | onComplete)?\`

Ключевая идея — **backpressure**: подписчик через \`request(n)\` явно сообщает, сколько элементов он готов принять, что защищает его от перегрузки быстрым издателем.`,
      },
      {
        id: 'mono-flux',
        difficulty: 'medium',
        tags: ['reactor'],
        related: ['what-is-reactive'],
        question: 'Что такое Mono и Flux в Project Reactor?',
        answer: `**Project Reactor** — реактивная библиотека, основа Spring WebFlux. Два основных типа издателей:

**Mono<T>** — издатель **0 или 1** элемента:

\`\`\`java
Mono<User> user = userRepository.findById(id);
Mono<String> name = user.map(User::getName)
                        .defaultIfEmpty("Unknown");
\`\`\`

**Flux<T>** — издатель **0..N** элементов:

\`\`\`java
Flux<User> users = userRepository.findAll();
users.filter(u -> u.getAge() > 18)
     .map(User::getName)
     .take(10)
     .subscribe(System.out::println);
\`\`\`

Важные моменты:

- ничего не происходит до подписки (**«assembly time» vs «subscription time»**);
- операторы: \`map\`, \`flatMap\`, \`filter\`, \`zip\`, \`merge\`, \`concat\`, \`retry\`, \`onErrorResume\`;
- управление потоками: \`subscribeOn\` (где подписка), \`publishOn\` (где обработка ниже по цепочке);
- backpressure-стратегии: \`onBackpressureBuffer\`, \`onBackpressureDrop\`, \`onBackpressureLatest\`.`,
      },
      {
        id: 'reactive-vs-async',
        difficulty: 'medium',
        tags: ['basics'],
        related: ['webflux-vs-mvc'],
        question: 'Когда стоит использовать реактивный подход, а когда нет?',
        answer: `**Реактивный подход оправдан:**

- высоконагруженные I/O-bound сервисы (тысячи одновременных соединений);
- стриминг данных (SSE, WebSocket), событийные системы;
- интеграция множества внешних сервисов с медленными ответами;
- необходимость backpressure при неравномерной нагрузке;
- микросервисы-агрегаторы с параллельными вызовами.

**Реактивный подход избыточен/вреден:**

- CPU-bound задачи — неблокирующий код не ускорит вычисления;
- простые CRUD-приложения с умеренной нагрузкой;
- команда не знакома с парадигмой — сложность отладки и стектрейсов высока;
- блокирующие зависимости (JDBC без R2DBC) сводят пользу на нет.

Альтернатива с Java 21 — **виртуальные потоки (Project Loom)**: масштабируемость реактивного подхода при привычном императивном стиле кода. Во многих сценариях Loom вытесняет реактивные фреймворки.`,
      },
      {
        id: 'hot-cold-publishers',
        difficulty: 'hard',
        tags: ['reactor', 'advanced'],
        related: ['mono-flux'],
        question: 'В чем разница между холодными (cold) и горячими (hot) издателями?',
        answer: `**Холодный (cold) издатель** — генерирует данные **заново для каждого подписчика**; без подписки ничего не происходит:

\`\`\`java
Flux<User> users = Flux.defer(() -> userRepository.findAll());
users.subscribe(s1); // запрос к БД №1
users.subscribe(s2); // запрос к БД №2 — независимая последовательность с начала
\`\`\`

Примеры: HTTP-запрос, чтение файла, запрос к БД. Каждый подписчик получает полный поток с первого элемента.

**Горячий (hot) издатель** — излучает данные **независимо от подписчиков**; подписчик видит только то, что произошло после подписки:

\`\`\`java
// котировки, клики мыши, сообщения из Kafka — «живые» события
Sinks.Many<Price> sink = Sinks.many().multicast().onBackpressureBuffer();
Flux<Price> prices = sink.asFlux();
// опоздавший подписчик пропустил ранние события
\`\`\`

**Превращение cold → hot:**

- \`share()\` / \`publish().refCount(n)\` — общая подписка на источник для нескольких потребителей;
- \`cache(n)\` — hot + повтор последних n элементов новым подписчикам;
- \`replay()\` — воспроизведение истории.

**Практическое значение**: не понимая различия, легко получить дублирование побочных эффектов (два HTTP-вызова вместо одного при двух подписках на cold-стрим) или потерю событий (поздняя подписка на hot-стрим). Аналогия: cold — фильм по запросу (с начала для каждого), hot — прямой эфир.`,
      },
      {
        id: 'webflux-vs-mvc',
        difficulty: 'medium',
        tags: ['spring'],
        related: ['reactive-vs-async'],
        question: 'В чем разница между Spring WebFlux и Spring MVC?',
        answer: `**Spring MVC** — классический сервлетный стек:

- модель «поток на запрос» (thread-per-request), блокирующий I/O;
- Tomcat/Jetty, Servlet API;
- возвращаемые типы: объекты, \`ResponseEntity\`;
- блокирующие драйверы: JDBC, RestTemplate.

**Spring WebFlux** — реактивный стек:

- **неблокирующий I/O**, event loop (по умолчанию Netty): малое число потоков обслуживает тысячи соединений;
- возвращаемые типы: \`Mono<T>\`, \`Flux<T>\`;
- \`WebClient\` вместо RestTemplate, R2DBC вместо JDBC, реактивные драйверы Mongo/Redis/Kafka;
- поддержка Server-Sent Events и стриминга из коробки;
- два стиля: аннотации (\`@RestController\` + Mono/Flux) и функциональные роутеры (RouterFunction).

\`\`\`java
@GetMapping("/users/{id}")
public Mono<User> getUser(@PathVariable String id) {
    return userRepository.findById(id)
        .switchIfEmpty(Mono.error(new NotFoundException()));
}
\`\`\`

**Критически важно**: один блокирующий вызов (JDBC, тяжёлые вычисления) в event loop **останавливает обработку всех запросов** на этом потоке. Блокирующий код изолируют: \`publishOn(Schedulers.boundedElastic())\`. Детектор: BlockHound.

**Выбор**: WebFlux — высокая конкурентность I/O-bound нагрузки, стриминг, вся цепочка зависимостей реактивная. MVC — привычная модель, блокирующие зависимости, проще отладка. MVC + виртуальные потоки (Java 21) — часто достаточная альтернатива WebFlux.`,
      },
      {
        id: 'reactor-error-backpressure',
        difficulty: 'hard',
        tags: ['reactor', 'advanced'],
        related: ['mono-flux'],
        question: 'Как обрабатывать ошибки и backpressure в Project Reactor?',
        answer: `**Обработка ошибок** — ошибка терминальна: поток завершается сигналом \`onError\`, дальнейшие элементы не поступают.

Основные операторы:

\`\`\`java
flux
    .onErrorReturn(fallbackValue)                  // значение по умолчанию
    .onErrorResume(e -> fallbackPublisher(e))      // запасной поток (например, кэш)
    .onErrorMap(e -> new BusinessException(e))     // трансформация исключения
    .onErrorContinue((e, item) -> log.warn(...))   // пропустить элемент, продолжить (осторожно!)
    .retry(3)                                      // повторная подписка
    .retryWhen(Retry.backoff(3, Duration.ofSeconds(1))
        .filter(e -> e instanceof TransientException))
    .timeout(Duration.ofSeconds(5))                // TimeoutException при простое
    .doFinally(signal -> cleanup());               // освобождение ресурсов
\`\`\`

Важно: \`retry\` — это **повторная подписка** (для cold-источника — повтор всей операции); исключение в лямбде оператора превращается в onError.

**Backpressure** — механизм защиты медленного потребителя от быстрого производителя: подписчик запрашивает \`request(n)\`.

Когда источник не умеет замедляться (события, UI, брокер), выбирают стратегию:

- \`onBackpressureBuffer(size)\` — буферизация (риск памяти; можно с политикой DROP_OLDEST);
- \`onBackpressureDrop()\` — отбрасывать лишние;
- \`onBackpressureLatest()\` — хранить только последний;
- \`onBackpressureError()\` — упасть с ошибкой;
- \`limitRate(n)\` — ограничение размера запросов вверх по цепочке;
- \`sample()\` / \`window()\` / \`buffer()\` — агрегация потока.

При переполнении без стратегии — \`OverflowException\`. Выбор стратегии зависит от домена: котировки — latest, метрики — drop/sample, платежи — buffer + персистентность (лучше Kafka).`,
      },
    ],
  };

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
      {
        id: 'project-reactor',
        difficulty: 'easy',
        tags: ['reactor', 'basics'],
        related: ['mono-flux', 'reactor-implements-reactive-streams'],
        question: 'Что такое Project Reactor?',
        answer: `**Project Reactor** — реактивная библиотека для JVM от команды Spring, полностью реализующая спецификацию **Reactive Streams**. Это фундамент **Spring WebFlux**.

Основное:

- два типа-издателя: **\`Mono<T>\`** (0..1 элемент) и **\`Flux<T>\`** (0..N);
- богатый набор операторов (\`map\`, \`flatMap\`, \`filter\`, \`zip\`, \`retry\`, \`onErrorResume\`…);
- неблокирующий backpressure «из коробки» через \`request(n)\`;
- управление потоками через **Schedulers** (\`publishOn\` / \`subscribeOn\`);
- инструменты отладки: \`log()\`, \`checkpoint()\`, Reactor Debug Agent, BlockHound.

Аналог из мира RxJava — тоже реализация Reactive Streams, но Reactor заточен под Spring и Java 8+. Ничего не выполняется, пока не произойдёт подписка (\`subscribe\`).`,
      },
      {
        id: 'reactive-laziness',
        difficulty: 'medium',
        tags: ['reactor'],
        related: ['project-reactor', 'manual-subscribe-bad'],
        question: 'Что значит, что реактивные потоки «ленивые» (lazy)?',
        answer: `Реактивный конвейер **ничего не делает при сборке** (assembly time) — он лишь описывает, *что* произойдёт. Реальная работа начинается только при **подписке** (subscription time).

\`\`\`java
Mono<User> mono = webClient.get()...   // HTTP-запрос ЕЩЁ НЕ отправлен
mono.subscribe();                       // только теперь запрос уходит
\`\`\`

Следствия:

- без подписки код в цепочке **не выполнится** (частая ошибка новичков — «забыл subscribe»);
- **cold-издатель** запускает работу заново для *каждого* подписчика (два \`subscribe\` = два HTTP-вызова);
- «ленивость» позволяет декларативно собирать конвейер, переиспользовать его и управлять моментом запуска;
- отложенность источника задают через \`Mono.defer\` / \`Flux.defer\`, чтобы тяжёлая операция создавалась в момент подписки, а не при сборке.

Противоположность — императивный код, который выполняется сразу по достижении строки.`,
      },
      {
        id: 'backpressure',
        difficulty: 'medium',
        tags: ['reactor', 'streams'],
        related: ['reactive-streams', 'reactor-error-backpressure'],
        question: 'Что такое backpressure?',
        answer: `**Backpressure** — механизм, которым **медленный потребитель управляет скоростью** быстрого производителя, защищаясь от переполнения.

В Reactive Streams это реализовано явно: подписчик через \`Subscription.request(n)\` сообщает, **сколько элементов** он готов принять; издатель не имеет права слать больше.

\`\`\`text
Subscriber ──request(n)──▶ Publisher
Publisher  ──onNext × ≤n─▶ Subscriber   // не больше запрошенного
\`\`\`

Когда источник **не умеет** замедляться (события UI, котировки, брокер), применяют стратегии: \`onBackpressureBuffer\`, \`onBackpressureDrop\`, \`onBackpressureLatest\`, \`onBackpressureError\`, а также \`limitRate(n)\`.

Без backpressure быстрый producer переполнил бы буферы/память медленного consumer. Это ключевое отличие Reactive Streams от «наивного» push-подхода.`,
      },
      {
        id: 'reactor-implements-reactive-streams',
        difficulty: 'medium',
        tags: ['reactor', 'streams'],
        related: ['reactive-streams', 'project-reactor'],
        question: 'Как Reactor реализует принципы Reactive Streams?',
        answer: `Reactor — **конкретная реализация** стандарта Reactive Streams (\`Publisher/Subscriber/Subscription/Processor\`):

- **\`Mono\` и \`Flux\` — это \`Publisher\`** из спецификации; на них может подписаться любой Reactive-Streams-совместимый \`Subscriber\`;
- **неблокирующий backpressure** реализован через \`request(n)\` в \`Subscription\` — потребитель управляет темпом;
- соблюдается **протокол сигналов** \`onSubscribe → onNext* → (onComplete | onError)\`;
- **интероперабельность**: Reactor совместим с RxJava, Akka Streams и \`java.util.concurrent.Flow\` (Java 9) — типы конвертируются, так как все следуют одному стандарту;
- операторы Reactor корректно **пробрасывают backpressure и сигналы отмены** вверх по цепочке.

Итог: Reactor даёт удобный операторный API поверх низкоуровневого контракта Reactive Streams, сохраняя все его гарантии (backpressure, протокол, отмена).`,
      },
      {
        id: 'map-vs-flatmap',
        difficulty: 'medium',
        tags: ['reactor'],
        related: ['mono-flux', 'project-reactor'],
        question: 'В чём разница между map и flatMap в Reactor?',
        answer: `Оба преобразуют элементы, но по-разному:

**\`map\`** — **синхронное** преобразование «значение → значение» (1:1). Функция возвращает обычный объект.

\`\`\`java
Flux<String> names = users.map(User::getName);   // User -> String
\`\`\`

**\`flatMap\`** — **асинхронное** преобразование «значение → \`Publisher\`», результаты которого «разворачиваются» и сливаются в общий поток. Функция возвращает \`Mono\`/\`Flux\`.

\`\`\`java
Flux<Order> orders = users.flatMap(u -> orderService.findByUser(u.id()));
\`\`\`

Ключевые отличия:

- \`flatMap\` используют, когда внутри нужен **ещё один реактивный вызов** (БД, HTTP);
- \`flatMap\` **не сохраняет порядок** (результаты сливаются по мере готовности, есть конкурентность) — если порядок важен, берут \`concatMap\` (последовательно) или \`flatMapSequential\`;
- частая ошибка — \`map\` с функцией, возвращающей \`Mono\` → получаем \`Flux<Mono<T>>\` вместо \`Flux<T>\`; нужно было \`flatMap\`.`,
      },
      {
        id: 'publishon-vs-subscribeon',
        difficulty: 'hard',
        tags: ['reactor', 'advanced'],
        related: ['reactor-schedulers', 'bounded-elastic'],
        question: 'В чём разница между publishOn и subscribeOn?',
        answer: `Оба меняют \`Scheduler\` (пул потоков), но действуют по-разному:

**\`subscribeOn(scheduler)\`** — влияет на то, **где начинается подписка и выполняется источник**. Действует на **всю цепочку вверх** независимо от позиции; по сути в цепочке важен один \`subscribeOn\`.

**\`publishOn(scheduler)\`** — переключает поток для **всех операторов ниже по цепочке** (downstream), начиная с места вызова. Можно ставить несколько раз, меняя контекст на разных участках.

\`\`\`java
flux
    .subscribeOn(Schedulers.boundedElastic()) // где выполнится источник
    .map(this::heavyCpu)                       // ← в этом же потоке (до publishOn)
    .publishOn(Schedulers.parallel())          // переключение
    .map(this::more);                          // ← уже в parallel-потоке
\`\`\`

Мнемоника: **subscribeOn — «откуда стартуем» (upstream, вся цепочка), publishOn — «куда переключаемся дальше» (downstream, с точки вызова)**. Именно \`publishOn(boundedElastic())\` используют, чтобы увести блокирующий кусок с event loop.`,
      },
      {
        id: 'reactor-schedulers',
        difficulty: 'medium',
        tags: ['reactor'],
        related: ['publishon-vs-subscribeon', 'bounded-elastic'],
        question: 'Что такое Schedulers в Reactor?',
        answer: `**Scheduler** — абстракция над источником потоков выполнения; определяет, **на каких потоках** Reactor исполняет работу (в связке с \`publishOn\`/\`subscribeOn\`).

Основные фабрики \`Schedulers\`:

- **\`parallel()\`** — фиксированный пул (≈ числу ядер) для **CPU-bound** задач без блокировок;
- **\`boundedElastic()\`** — ограниченный, эластичный пул для **блокирующих / долгих I/O** операций (обёртка вокруг legacy JDBC, файлов);
- **\`single()\`** — один переиспользуемый поток;
- **\`immediate()\`** — выполнение в текущем потоке (без переключения);
- \`fromExecutorService(...)\` — на своём \`ExecutorService\`.

По умолчанию оператор выполняется в том потоке, где произошёл предыдущий сигнал (часто — event loop Netty). Явно менять поток нужно, чтобы **не блокировать event loop** и разделять CPU- и I/O-нагрузку. Ключевое правило: блокирующее — только на \`boundedElastic()\`.`,
      },
      {
        id: 'bounded-elastic',
        difficulty: 'medium',
        tags: ['reactor'],
        related: ['reactor-schedulers', 'blocking-in-pipeline'],
        question: 'Когда следует использовать boundedElastic?',
        answer: `**\`Schedulers.boundedElastic()\`** предназначен для **блокирующих или долгих** операций, которые нельзя выполнять на event loop:

- вызовы **блокирующих API**: legacy JDBC, файловый I/O, блокирующие SDK/клиенты;
- долгие синхронные операции, оборачиваемые в реактивный конвейер.

Почему именно он:

- пул **ограничен** (по умолчанию ~10× число ядер) — защищает от неконтролируемого роста числа потоков (в отличие от старого \`elastic()\`);
- ставит задачи в очередь при исчерпании потоков;
- переключение делают через \`subscribeOn(Schedulers.boundedElastic())\` или \`publishOn(...)\` вокруг блокирующего участка.

\`\`\`java
Mono.fromCallable(() -> jdbcDao.load(id))   // блокирующий вызов
    .subscribeOn(Schedulers.boundedElastic());
\`\`\`

**Не** используйте его для CPU-bound работы (для неё — \`parallel()\`) и не превращайте весь код в блокирующий — boundedElastic лишь **изолирует** неизбежную блокировку, а не оправдывает её.`,
      },
      {
        id: 'blocking-in-pipeline',
        difficulty: 'hard',
        tags: ['reactor', 'advanced'],
        related: ['blocking-dangerous-webflux', 'bounded-elastic'],
        question: 'Что произойдёт, если выполнить блокирующий код внутри реактивного конвейера?',
        answer: `Если блокирующий вызов (JDBC, \`Thread.sleep\`, синхронный HTTP) выполняется **на потоке event loop**, этот поток **застревает** и не может обслуживать другие задачи.

Поскольку неблокирующий сервер (Netty) держит **малое число** event-loop-потоков на тысячи соединений, блокировка даже одного из них:

- **останавливает обработку многих запросов**, назначенных на этот поток;
- резко роняет пропускную способность и растит задержки;
- под нагрузкой ведёт к таймаутам и фактическому отказу сервиса.

Правильно — **увести блокировку** на подходящий Scheduler:

\`\`\`java
Mono.fromCallable(() -> blockingDao.load(id))
    .subscribeOn(Schedulers.boundedElastic());   // не на event loop
\`\`\`

Обнаружение: **BlockHound** — агент, детектирующий блокирующие вызовы на неблокирующих потоках и бросающий ошибку в тестах/разработке. Лучшее решение — вообще заменить блокирующую зависимость реактивной (R2DBC вместо JDBC).`,
      },
      {
        id: 'blocking-dangerous-webflux',
        difficulty: 'hard',
        tags: ['spring', 'advanced'],
        related: ['blocking-in-pipeline', 'webflux-vs-mvc'],
        question: 'Почему блокировки особенно опасны в Spring WebFlux?',
        answer: `Модель Spring WebFlux принципиально отличается от Spring MVC, и именно поэтому блокировки бьют больнее:

- в **MVC** модель «поток на запрос»: блокировка тормозит **свой** запрос, но пул из сотен потоков обслуживает остальные;
- в **WebFlux** (Netty) — **малое число event-loop-потоков** (≈ число ядер) на **тысячи** соединений. Заблокированный event-loop-поток простаивает вместо того, чтобы обслуживать множество других запросов.

Последствия: несколько блокирующих вызовов способны «съесть» весь пул event loop и **подвесить весь сервис**, а не один запрос.

Поэтому в WebFlux:

- вся цепочка зависимостей должна быть **неблокирующей** (WebClient, R2DBC, реактивные драйверы);
- неизбежную блокировку изолируют на \`boundedElastic()\`;
- в разработке/тестах включают **BlockHound**.

Если стек зависимостей блокирующий и переписать его нельзя — WebFlux теряет смысл; часто разумнее MVC (при необходимости — с виртуальными потоками Java 21).`,
      },
      {
        id: 'when-choose-webflux',
        difficulty: 'medium',
        tags: ['spring'],
        related: ['webflux-vs-mvc', 'blocking-dangerous-webflux'],
        question: 'Когда стоит выбирать WebFlux вместо Spring MVC?',
        answer: `**WebFlux оправдан**, когда:

- **высокая конкурентность I/O-bound** нагрузки — тысячи одновременных соединений при относительно медленных ответах;
- **стриминг**: Server-Sent Events, WebSocket, потоковая передача больших данных;
- сервис-**агрегатор**, делающий много параллельных вызовов к другим сервисам;
- нужен **backpressure** сквозь всю цепочку;
- **вся** цепочка зависимостей уже реактивная (WebClient, R2DBC, реактивные Mongo/Redis/Kafka).

**MVC предпочтительнее**, когда:

- зависимости **блокирующие** (JDBC без R2DBC, legacy-клиенты) и переписать их нельзя;
- нагрузка умеренная, а простота отладки и понятные стектрейсы важнее;
- команда не готова к реактивной парадигме.

Важная альтернатива (Java 21): **MVC + виртуальные потоки (Loom)** дают высокую конкурентность при привычном императивном стиле, часто закрывая потребность, ради которой раньше брали WebFlux.`,
      },
      {
        id: 'jpa-with-webflux',
        difficulty: 'medium',
        tags: ['spring'],
        related: ['r2dbc-why', 'blocking-dangerous-webflux'],
        question: 'Можно ли использовать JPA вместе с WebFlux?',
        answer: `Технически — да, но это **антипаттерн**: JPA/Hibernate поверх **JDBC** — **блокирующий** API, а WebFlux рассчитан на неблокирующий стек.

Проблемы:

- блокирующий вызов JPA на event loop **подвешивает** event-loop-поток (см. опасность блокировок в WebFlux);
- теряется главное преимущество WebFlux — неблокирующий I/O и масштабируемость по соединениям.

Если JPA всё же нужен (например, ради существующего кода), блокирующие вызовы **обязательно** изолируют:

\`\`\`java
Mono.fromCallable(() -> jpaRepository.findById(id))
    .subscribeOn(Schedulers.boundedElastic());
\`\`\`

Но это лишь «затыкает» проблему и не делает доступ к БД по-настоящему реактивным. Правильные варианты:

- для полностью реактивного приложения — **R2DBC** (реактивный доступ к реляционной БД) вместо JPA;
- если без JPA нельзя — часто честнее остаться на **Spring MVC** (при желании — с виртуальными потоками).`,
      },
      {
        id: 'r2dbc-why',
        difficulty: 'medium',
        tags: ['spring', 'streams'],
        related: ['jpa-with-webflux', 'webflux-vs-mvc'],
        question: 'Почему в полностью реактивном приложении предпочитают R2DBC?',
        answer: `**R2DBC (Reactive Relational Database Connectivity)** — спецификация **неблокирующего** доступа к реляционным БД, альтернатива блокирующему JDBC.

Почему он нужен в реактивном стеке:

- **неблокирующий I/O** к БД — запросы не занимают event-loop-поток в ожидании ответа, сохраняя масштабируемость WebFlux по числу соединений;
- **сквозной backpressure** — результат приходит как \`Flux<Row>\`, потребитель управляет темпом; большие выборки не грузятся целиком в память;
- цепочка остаётся **полностью реактивной** (WebClient + R2DBC + реактивный конвейер) без «блокирующего разрыва».

Ограничения: R2DBC — это **не ORM** (нет ленивых связей, кэша 1-го уровня, автоматических джойнов как в Hibernate); Spring Data R2DBC проще и требует более явной работы с данными.

Если приложение по-настоящему реактивное — JDBC/JPA становятся узким местом, и R2DBC (или реактивные драйверы Mongo/Cassandra) — правильный выбор. Если реактивность не нужна — проще JPA на MVC.`,
      },
      {
        id: 'reactor-cancellation',
        difficulty: 'hard',
        tags: ['reactor', 'advanced'],
        related: ['backpressure', 'doon-operators'],
        question: 'Как работает отмена (cancellation) в Reactor?',
        answer: `Отмена — часть контракта Reactive Streams: подписчик может вызвать **\`Subscription.cancel()\`**, сигнализируя, что данные больше не нужны. Сигнал распространяется **вверх по цепочке** (upstream), и источник прекращает работу и освобождает ресурсы.

Когда происходит:

- подписчик **отписался** явно (\`Disposable.dispose()\`);
- операторы, обрывающие поток: \`take(n)\`, \`next()\`, \`timeout()\` — получив нужное, отменяют upstream;
- в **WebFlux** клиент **разорвал HTTP-соединение** → Reactor отменяет цепочку (например, прекращает запрос к БД), экономя ресурсы;
- в \`flatMap\`/\`switchMap\` внутренние потоки отменяются (\`switchMap\` отменяет предыдущий при новом элементе).

Реакция на отмену:

\`\`\`java
flux.doOnCancel(() -> log.info("cancelled"))   // хук на отмену
    .doFinally(signal -> release());           // CANCEL / COMPLETE / ERROR — очистка
\`\`\`

Корректная поддержка отмены критична для освобождения соединений и предотвращения утечек в долгоживущих/стриминговых потоках.`,
      },
      {
        id: 'doon-operators',
        difficulty: 'medium',
        tags: ['reactor'],
        related: ['reactor-cancellation', 'reactor-error-backpressure'],
        question: 'Для чего нужны операторы doOnNext, doOnError и doFinally?',
        answer: `Это операторы **побочных эффектов (side-effect hooks)**: они «подслушивают» сигналы потока, **не изменяя** сами данные. Полезны для логирования, метрик, освобождения ресурсов.

- **\`doOnNext(x -> ...)\`** — срабатывает на **каждый элемент** (\`onNext\`); типично для логирования/метрик по элементам;
- **\`doOnError(e -> ...)\`** — срабатывает при **ошибке** (\`onError\`); логирование/алерт (но **не** обрабатывает ошибку — поток всё равно завершится; для восстановления нужны \`onErrorResume\`/\`onErrorReturn\`);
- **\`doFinally(signal -> ...)\`** — срабатывает **один раз** при завершении по **любой** причине: \`onComplete\`, \`onError\` **или** \`cancel\`; идеально для очистки ресурсов (в отличие от \`doOnComplete\`, который не ловит ошибку/отмену).

\`\`\`java
flux.doOnNext(x -> log.debug("item {}", x))
    .doOnError(e -> log.error("failed", e))
    .doFinally(sig -> connection.release());
\`\`\`

Другие из семейства: \`doOnSubscribe\`, \`doOnCancel\`, \`doOnComplete\`, \`doOnRequest\`. Важно: \`doOn*\` — только для эффектов; менять поток данных ими нельзя.`,
      },
      {
        id: 'manual-subscribe-bad',
        difficulty: 'hard',
        tags: ['reactor', 'spring', 'advanced'],
        related: ['reactive-laziness', 'reactor-cancellation'],
        question: 'Почему ручной вызов subscribe() в коде сервиса — обычно плохая идея?',
        answer: `В приложении на WebFlux **подписку должен делать фреймворк** (Spring подписывается на \`Mono\`/\`Flux\`, возвращённый из контроллера). Ручной \`subscribe()\` внутри сервиса почти всегда — ошибка.

Почему плохо:

- **разрыв цепочки** — вы «съедаете» реактивный поток вместо того, чтобы вернуть его наверх; теряются композиция, backpressure и **отмена** (клиент отменил запрос, а ваш \`subscribe\` продолжает работать);
- **потеря контекста** — Reactor Context (безопасность, трассировка, транзакция) пробрасывается по цепочке подписки; при своём \`subscribe\` он теряется;
- **проглатывание ошибок** — ошибки уходят в подписчик по умолчанию (лог «dropped»), а не наверх к обработчику;
- **неуправляемая конкурентность/утечки** — «fire-and-forget» подписка живёт сама по себе, её сложно отменить и дождаться.

Правильно — **возвращать** \`Mono\`/\`Flux\` и **компоновать** операторами (\`flatMap\`, \`zip\`, \`then\`), позволяя подписаться фреймворку:

\`\`\`java
// плохо:
public void handle(Cmd c) { service.process(c).subscribe(); }
// хорошо:
public Mono<Void> handle(Cmd c) { return service.process(c); }
\`\`\`

Ручной \`subscribe\` уместен лишь на «краю» неспринговых приложений (main, тесты, интеграция с императивным кодом).`,
      },
    ],
  };

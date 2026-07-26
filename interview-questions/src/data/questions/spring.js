// Категория: spring
export const spring = {
    id: 'spring',
    title: 'Spring Framework',
    icon: '🌱',
    description: 'IoC, DI, Spring Boot, AOP',
    questions: [
      {
        id: 'what-is-spring',
        question: 'Что такое Spring Framework? Из каких модулей он состоит?',
        answer: `**Spring Framework** — самый популярный фреймворк для разработки Java-приложений. Основа — контейнер инверсии управления (IoC), который управляет жизненным циклом объектов (бинов) и их зависимостями.

**Основные модули:**

- **Core Container** — IoC-контейнер, DI, ApplicationContext;
- **Spring AOP** — аспектно-ориентированное программирование;
- **Spring MVC / WebFlux** — веб-приложения и REST API (сервлетный и реактивный стек);
- **Spring Data** — упрощённая работа с БД (JPA, MongoDB, Redis...);
- **Spring Security** — аутентификация и авторизация;
- **Spring Transaction** — декларативное управление транзакциями;
- **Spring Test** — поддержка тестирования.

**Экосистема:**

- **Spring Boot** — быстрый старт: автоконфигурация, встроенный сервер, starters;
- **Spring Cloud** — микросервисные паттерны (Config, Gateway, Circuit Breaker);
- **Spring Batch**, **Spring Integration** и др.

Ключевые преимущества: слабая связанность через DI, декларативность (аннотации), тестируемость, огромная экосистема и сообщество.`,
      },
      {
        id: 'ioc-di',
        question: 'Что такое IoC и DI?',
        answer: `**IoC (Inversion of Control, инверсия управления)** — принцип, при котором управление созданием объектов и их жизненным циклом передаётся фреймворку (контейнеру), а не осуществляется вручную в коде.

**DI (Dependency Injection, внедрение зависимостей)** — способ реализации IoC: зависимости объекту предоставляет контейнер извне, а не объект создаёт их сам.

\`\`\`java
// без DI — жёсткая связанность
class OrderService {
    private final PaymentService payment = new PaypalPayment(); // сам создаёт
}

// с DI — зависимость приходит извне
@Service
class OrderService {
    private final PaymentService payment;

    OrderService(PaymentService payment) {  // внедряется контейнером
        this.payment = payment;
    }
}
\`\`\`

**Способы внедрения:**

- **через конструктор** — рекомендуемый: зависимости обязательны, поля final, легко тестировать;
- **через сеттер** — для необязательных зависимостей;
- **в поле** (\`@Autowired\` на поле) — не рекомендуется: скрывает зависимости, мешает тестам.

Преимущества: слабая связанность, лёгкая подмена реализаций (моки в тестах), переиспользование, читаемость. Если у бина несколько реализаций интерфейса — уточнение через \`@Qualifier\` или \`@Primary\`.`,
      },
      {
        id: 'bean-lifecycle',
        question: 'Расскажите про жизненный цикл бина Spring.',
        answer: `Этапы жизненного цикла бина в ApplicationContext:

1. **Чтение определений бинов** (BeanDefinition) из аннотаций/конфигурации;
2. **BeanFactoryPostProcessor** — модификация определений до создания (например, подстановка \${properties});
3. **Инстанцирование** — вызов конструктора;
4. **Внедрение зависимостей** (populate properties);
5. **Aware-интерфейсы** — \`BeanNameAware\`, \`ApplicationContextAware\`;
6. **BeanPostProcessor.postProcessBeforeInitialization()**;
7. **Инициализация**: \`@PostConstruct\` → \`InitializingBean.afterPropertiesSet()\` → \`initMethod\`;
8. **BeanPostProcessor.postProcessAfterInitialization()** — здесь создаются AOP-прокси (@Transactional и т.д.);
9. Бин **готов к использованию**;
10. **Уничтожение** (при закрытии контекста): \`@PreDestroy\` → \`DisposableBean.destroy()\` → \`destroyMethod\`.

\`\`\`java
@Component
class CacheService {
    @PostConstruct
    void warmUp() { /* после внедрения зависимостей */ }

    @PreDestroy
    void cleanup() { /* перед уничтожением */ }
}
\`\`\`

Важно: \`@PreDestroy\` вызывается только для singleton-бинов; prototype-бины контейнер не уничтожает.`,
      },
      {
        id: 'bean-scopes',
        question: 'Какие scope бинов существуют в Spring?',
        answer: `**Основные scope:**

- **singleton** (по умолчанию) — один экземпляр на ApplicationContext. Не путать с паттерном Singleton: один на контекст, а не на JVM;
- **prototype** — новый экземпляр при каждом запросе бина из контейнера.

**Web-scopes:**

- **request** — один экземпляр на HTTP-запрос;
- **session** — один на HTTP-сессию;
- **application** — один на ServletContext;
- **websocket** — один на WebSocket-сессию.

\`\`\`java
@Component
@Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)
class ReportBuilder { ... }

@Component
@Scope(value = WebApplicationContext.SCOPE_REQUEST,
       proxyMode = ScopedProxyMode.TARGET_CLASS)
class RequestContext { ... }
\`\`\`

**Подводные камни:**

- singleton-бины должны быть **потокобезопасными** (без изменяемого состояния);
- внедрение prototype в singleton: prototype создастся **один раз** при создании singleton. Решения: \`ObjectProvider<T>\`, \`@Lookup\`, scoped proxy;
- web-scope бин в singleton требует \`proxyMode\`.`,
      },
      {
        id: 'spring-boot',
        question: 'Что такое Spring Boot? Как работает автоконфигурация?',
        answer: `**Spring Boot** — надстройка над Spring для быстрого создания production-ready приложений с минимальной конфигурацией.

**Ключевые возможности:**

- **автоконфигурация** — автоматическая настройка на основе classpath;
- **starters** — готовые наборы зависимостей (\`spring-boot-starter-web\`, \`-data-jpa\`, \`-security\`);
- **встроенный сервер** — Tomcat/Jetty/Netty внутри jar (\`java -jar app.jar\`);
- **Actuator** — метрики, health checks, мониторинг;
- внешняя конфигурация: application.yml, переменные окружения, профили (\`@Profile\`).

**Как работает автоконфигурация:**

- \`@SpringBootApplication\` = \`@Configuration\` + \`@EnableAutoConfiguration\` + \`@ComponentScan\`;
- Spring Boot читает список автоконфигураций из \`META-INF/spring/...AutoConfiguration.imports\`;
- каждая применяется по **условиям**:

\`\`\`java
@AutoConfiguration
@ConditionalOnClass(DataSource.class)          // если класс в classpath
@ConditionalOnMissingBean(DataSource.class)    // если бин не объявлен вручную
public class DataSourceAutoConfiguration { ... }
\`\`\`

Т.е. подключили \`spring-boot-starter-data-jpa\` + драйвер — получили настроенные DataSource, EntityManager, TransactionManager. Свой бин всегда **перекрывает** автоконфигурацию. Диагностика: \`--debug\` выводит отчёт о применённых условиях.`,
      },
      {
        id: 'transactional',
        question: 'Как работает @Transactional?',
        answer: `**@Transactional** — декларативное управление транзакциями через **AOP-прокси**: Spring оборачивает бин в прокси, который открывает транзакцию до метода и делает commit/rollback после.

\`\`\`java
@Service
public class TransferService {
    @Transactional
    public void transfer(long from, long to, BigDecimal amount) {
        accountRepo.debit(from, amount);
        accountRepo.credit(to, amount);  // исключение → откат обеих операций
    }
}
\`\`\`

**Ключевые параметры:**

- \`propagation\` — поведение при существующей транзакции: REQUIRED (по умолчанию — присоединиться или создать), REQUIRES_NEW (приостановить текущую, создать новую), NESTED, SUPPORTS, MANDATORY, NEVER;
- \`isolation\` — уровень изоляции;
- \`rollbackFor\` — по умолчанию откат только на **unchecked**-исключениях; для checked нужно \`rollbackFor = Exception.class\`;
- \`readOnly = true\` — оптимизация для чтения;
- \`timeout\` — максимальное время.

**Частые ошибки (из-за прокси):**

- **самовызов**: вызов \`this.method()\` внутри бина обходит прокси — транзакция не создаётся;
- \`@Transactional\` на **private/final** методах не работает;
- проглатывание исключения внутри метода отменяет откат;
- долгие операции (HTTP-вызовы) внутри транзакции держат соединение из пула.`,
      },
      {
        id: 'spring-aop',
        question: 'Что такое AOP? Как Spring создает прокси?',
        answer: `**AOP (Aspect-Oriented Programming)** — выделение сквозной функциональности (cross-cutting concerns) — логирование, транзакции, безопасность, кэширование — из бизнес-логики в отдельные модули (аспекты).

**Терминология:**

- **Aspect** — модуль сквозной функциональности;
- **Join point** — точка выполнения (в Spring — вызов метода);
- **Pointcut** — выражение, выбирающее join points;
- **Advice** — действие: \`@Before\`, \`@After\`, \`@AfterReturning\`, \`@AfterThrowing\`, \`@Around\`;
- **Weaving** — связывание аспектов с кодом (в Spring — в runtime через прокси).

\`\`\`java
@Aspect
@Component
public class LoggingAspect {
    @Around("execution(* com.app.service.*.*(..))")
    public Object logTime(ProceedingJoinPoint pjp) throws Throwable {
        long start = System.nanoTime();
        try {
            return pjp.proceed();
        } finally {
            log.info("{} заняло {} мс", pjp.getSignature(),
                     (System.nanoTime() - start) / 1_000_000);
        }
    }
}
\`\`\`

**Механизмы прокси:**

- **JDK Dynamic Proxy** — если бин реализует интерфейс (прокси реализует тот же интерфейс);
- **CGLIB** — наследование от класса (по умолчанию в Spring Boot); не работает с final классами/методами.

На AOP-прокси построены \`@Transactional\`, \`@Cacheable\`, \`@Async\`, \`@PreAuthorize\` — отсюда общее ограничение самовызова.`,
      },
      {
        id: 'applicationcontext-vs-beanfactory',
        question: 'Чем ApplicationContext отличается от BeanFactory?',
        answer: `Оба — контейнеры IoC, управляющие бинами, но \`ApplicationContext\` — это расширение \`BeanFactory\` с корпоративной функциональностью.

**BeanFactory** — базовый контейнер, создаёт бины **лениво** (по требованию, при первом \`getBean\`). Минимален по памяти.

**ApplicationContext** добавляет поверх него:

- **eager-инициализацию** singleton-бинов при старте (ошибки конфигурации видны сразу, а не при первом обращении);
- публикацию **событий** (\`ApplicationEvent\`, \`@EventListener\`);
- интернационализацию (\`MessageSource\`);
- удобную работу с ресурсами и \`Environment\` (профили, свойства);
- автоматическое подхватывание \`BeanPostProcessor\` и \`BeanFactoryPostProcessor\`.

На практике почти всегда используют \`ApplicationContext\`. \`BeanFactory\` напрямую — редко, в средах с жёсткими ограничениями по памяти или для ленивой загрузки.`,
      },
      {
        id: 'autowired-resolution',
        question: 'Как @Autowired разрешает зависимости? Что делать при нескольких кандидатах?',
        answer: `\`@Autowired\` внедряет зависимость **по типу** (by type). Алгоритм:

1. контейнер ищет бины подходящего типа;
2. если найден ровно один — внедряет его;
3. если несколько — пытается выбрать по имени поля/параметра или по \`@Primary\`;
4. если выбрать нельзя — \`NoUniqueBeanDefinitionException\`; если кандидатов нет — \`NoSuchBeanDefinitionException\` (можно смягчить \`required = false\`).

Разрешение неоднозначности:

- **\`@Qualifier("beanName")\`** — явно указать нужный бин;
- **\`@Primary\`** — пометить бин как приоритетный по умолчанию;
- внедрение \`List<T>\` или \`Map<String, T>\` — получить сразу все бины типа.

Отличие от родственных аннотаций: \`@Resource\` (JSR-250) внедряет **по имени**, \`@Inject\` (JSR-330) — по типу, как \`@Autowired\`, но без атрибута \`required\`.`,
      },
      {
        id: 'injection-types',
        question: 'В чём разница между constructor, setter и field injection? Какой предпочтителен?',
        answer: `Три способа внедрения зависимостей:

- **Constructor injection** — зависимости приходят через конструктор. **Предпочтительный** способ: поля можно сделать \`final\` (иммутабельность), объект всегда создаётся в валидном состоянии, зависимости явны, легко тестировать (передать моки в конструктор), а циклические зависимости обнаруживаются сразу при старте.
- **Setter injection** — через сеттеры. Подходит для **опциональных** или переконфигурируемых зависимостей.
- **Field injection** (\`@Autowired\` прямо на поле) — компактно, но **не рекомендуется**: нельзя сделать поле \`final\`, зависимости скрыты, тестировать без контейнера трудно (нужен рефлексия/Spring), легко получить раздутый класс с десятком зависимостей.

Начиная со Spring 4.3, при единственном конструкторе \`@Autowired\` можно не писать. Constructor injection — рекомендация самой команды Spring.`,
      },
      {
        id: 'stereotypes',
        question: 'Чем отличаются @Component, @Service, @Repository и @Controller?',
        answer: `Все четыре — стереотипные аннотации, помечающие класс как бин, подхватываемый при component scan. Технически \`@Service\`, \`@Repository\` и \`@Controller\` — это специализации \`@Component\`. Различия — семантические и (для двух) функциональные:

- **\`@Component\`** — обобщённый бин, когда не подходит более конкретный стереотип.
- **\`@Service\`** — слой бизнес-логики. Чисто семантическая метка.
- **\`@Repository\`** — слой доступа к данным. Добавляет **трансляцию исключений**: специфичные исключения персистентности (JPA/JDBC) переводятся в единую иерархию \`DataAccessException\`.
- **\`@Controller\`** — веб-слой Spring MVC; обрабатывает HTTP-запросы. \`@RestController\` = \`@Controller\` + \`@ResponseBody\`.

Разделение улучшает читаемость, а \`@Repository\` и \`@Controller\` дают дополнительное поведение.`,
      },
      {
        id: 'bean-post-processor',
        question: 'Чем BeanPostProcessor отличается от BeanFactoryPostProcessor?',
        answer: `Оба — точки расширения контейнера, но работают на разных этапах.

**\`BeanFactoryPostProcessor\`** работает с **определениями бинов (bean definitions)** после их загрузки, но **до создания** самих бинов. Может менять метаданные конфигурации. Классический пример — \`PropertySourcesPlaceholderConfigurer\`, подставляющий значения \`\${...}\`.

**\`BeanPostProcessor\`** работает с **уже созданными экземплярами** бинов — его методы \`postProcessBeforeInitialization\` и \`postProcessAfterInitialization\` вызываются до и после init-методов. Именно через \`BeanPostProcessor\` Spring оборачивает бины в прокси (AOP, \`@Transactional\`) и обрабатывает аннотации вроде \`@Autowired\`, \`@PostConstruct\`.

Порядок: определения загружены → \`BeanFactoryPostProcessor\` правит definitions → бины создаются → \`BeanPostProcessor\` (before) → init-методы (\`@PostConstruct\`, \`afterPropertiesSet\`) → \`BeanPostProcessor\` (after).`,
      },
      {
        id: 'circular-dependency',
        question: 'Как Spring обрабатывает циклические зависимости и что такое self-invocation?',
        answer: `**Циклическая зависимость** — бин A зависит от B, а B от A.

- при **field/setter injection** Spring умеет их разрешать через промежуточный «ранний» ссылочный объект (early reference) в кэше третьего уровня;
- при **constructor injection** разрешить нельзя — бин нельзя создать без готовой зависимости, и Spring бросает \`BeanCurrentlyInCreationException\`.

Циклы — признак проблемы проектирования; лечатся выделением общей логики в третий бин, \`@Lazy\` или событиями. Со Spring Boot 2.6+ циклы по умолчанию запрещены.

**Self-invocation** — вызов одного метода бина из другого метода **того же класса** (\`this.method()\`). Проблема в том, что прокси-обёртка (для \`@Transactional\`, \`@Cacheable\`, \`@Async\`) перехватывает только **внешние** вызовы через ссылку на прокси. Внутренний \`this\`-вызов идёт мимо прокси, и аннотация **не срабатывает**. Обход: вынести метод в отдельный бин, self-injection или \`AopContext.currentProxy()\`.`,
      },
      {
        id: 'configuration-properties',
        question: 'Чем @ConfigurationProperties отличается от @Value? Что такое Spring Profiles?',
        answer: `**\`@Value("\${app.timeout}")\`** внедряет **одно** свойство в поле. Просто, но: нет типобезопасной группировки, слабая поддержка валидации и relaxed binding, неудобно для больших наборов настроек.

**\`@ConfigurationProperties(prefix = "app")\`** привязывает **целую группу** свойств к типизированному POJO. Преимущества: группировка по префиксу, **relaxed binding** (\`app.max-size\` ↔ \`APP_MAXSIZE\`), поддержка \`@Validated\` (JSR-303), вложенные объекты и списки. Рекомендуется для конфигурации приложения; \`@Value\` — для единичных значений и SpEL-выражений.

**Spring Profiles** — механизм наборов конфигурации под окружения (\`dev\`, \`test\`, \`prod\`). Бины помечают \`@Profile("dev")\`, свойства кладут в \`application-dev.yml\`. Активный профиль задают через \`spring.profiles.active\` (свойство, переменная окружения или аргумент запуска), что позволяет одному артефакту работать в разных средах.`,
      },
      {
        id: 'exception-handling',
        question: 'Как в Spring обрабатывать исключения централизованно (@ControllerAdvice)?',
        answer: `В Spring MVC исключения обрабатывают на нескольких уровнях:

- **\`@ExceptionHandler\`** на методе контроллера — ловит исключения этого контроллера;
- **\`@ControllerAdvice\` / \`@RestControllerAdvice\`** — глобальный компонент с \`@ExceptionHandler\`-методами, применяемыми ко **всем** контроллерам. Позволяет в одном месте маппить исключения в HTTP-ответы (код + тело), не дублируя обработку.

Пример: \`@ExceptionHandler(EntityNotFoundException.class)\` возвращает 404 с телом ошибки. Можно вернуть \`ResponseEntity\` с нужным статусом или использовать \`@ResponseStatus\`.

Со Spring 6 / Boot 3 для унифицированных тел ошибок есть \`ProblemDetail\` (RFC 7807). Базовый резервный механизм — \`ResponseEntityExceptionHandler\`, от которого можно наследоваться, чтобы переопределить обработку стандартных исключений Spring MVC.`,
      },
      {
        id: 'spring-data-repositories',
        question: 'Чем отличаются CrudRepository, JpaRepository и PagingAndSortingRepository? Как работают derived queries?',
        answer: `Иерархия интерфейсов Spring Data — каждый расширяет предыдущий:

- **\`CrudRepository\`** — базовые CRUD-операции (\`save\`, \`findById\`, \`delete\`, \`count\`).
- **\`PagingAndSortingRepository\`** — добавляет пагинацию и сортировку (\`findAll(Pageable)\`, \`findAll(Sort)\`).
- **\`JpaRepository\`** — добавляет JPA-специфику: \`findAll\` возвращает \`List\`, пакетные операции (\`saveAll\`, \`deleteAllInBatch\`), \`flush()\`, \`getReferenceById\`.

На практике для JPA обычно берут \`JpaRepository\`.

**Derived queries (queries по имени метода)** — Spring генерирует запрос, разбирая имя метода: \`findByLastNameAndAgeGreaterThan(String, int)\` превращается в соответствующий JPQL. Поддерживаются ключевые слова \`And\`, \`Or\`, \`Between\`, \`Like\`, \`OrderBy\`, \`Top\`/\`First\` и др. Удобно для простых запросов; для сложных имена становятся нечитаемыми — тогда переходят на \`@Query\`.`,
      },
      {
        id: 'query-and-projections',
        question: 'Когда использовать @Query и нативный SQL? Что такое проекции?',
        answer: `**\`@Query\`** задаёт запрос явно, когда derived-метод неудобен:

- по умолчанию — **JPQL** (работает с сущностями и полями, переносим между СУБД);
- \`nativeQuery = true\` — **нативный SQL**: нужен для СУБД-специфичных конструкций, сложных оконных функций, тонкой оптимизации, но теряется переносимость и проверка на уровне сущностей.

Параметры связывают позиционно (\`?1\`) или именованно (\`:name\` + \`@Param\`). Изменяющие запросы помечают \`@Modifying\`.

**Проекции** возвращают не всю сущность, а нужное подмножество полей — меньше данных и нет лишних join:

- **interface-based** — интерфейс с геттерами нужных полей (closed projection); Spring сам создаёт реализацию;
- **DTO/class-based** — конструктор класса заполняется выбранными полями;
- **dynamic** — тип проекции передаётся параметром метода (\`<T> T findBy...(..., Class<T>)\`).

Проекции — простой способ ускорить чтение и не тащить тяжёлые сущности.`,
      },
      {
        id: 'transaction-propagation',
        question: 'Какие бывают уровни распространения транзакций (propagation) в Spring?',
        answer: `**Propagation** определяет, как метод с \`@Transactional\` ведёт себя относительно уже существующей транзакции. Основные варианты:

- **REQUIRED** (по умолчанию) — присоединиться к текущей транзакции, а если её нет — создать новую.
- **REQUIRES_NEW** — всегда создать **новую** транзакцию, приостановив текущую. Внутренняя коммитится/откатывается независимо (полезно для аудита, логов, которые должны сохраниться даже при откате основной).
- **SUPPORTS** — работать в транзакции, если она есть, иначе без неё.
- **NOT_SUPPORTED** — выполнить вне транзакции, приостановив текущую.
- **MANDATORY** — требует существующую транзакцию, иначе исключение.
- **NEVER** — требует отсутствия транзакции, иначе исключение.
- **NESTED** — вложенная транзакция через savepoint: откатывается до точки сохранения, не затрагивая внешнюю.

Важный нюанс: \`REQUIRES_NEW\` и \`NESTED\` работают только через прокси (не при self-invocation) и зависят от возможностей источника данных.`,
      },
      {
        id: 'pagination',
        question: 'Как реализовать пагинацию в Spring Data? Чем Page отличается от Slice?',
        answer: `Spring Data даёт пагинацию через \`Pageable\`:

- метод принимает \`Pageable\` (\`PageRequest.of(page, size, Sort.by(...))\`) и возвращает \`Page\`, \`Slice\` или \`List\`.
- **\`Page<T>\`** — знает **общее число элементов и страниц**: для этого выполняется дополнительный \`count\`-запрос. Удобно для UI с номерами страниц, но count дорог на больших таблицах.
- **\`Slice<T>\`** — знает только, **есть ли следующая страница** (запрашивает на один элемент больше), без общего count. Дешевле, подходит для «бесконечной прокрутки».

**Offset-пагинация** (\`LIMIT ... OFFSET\`) деградирует на больших смещениях: БД всё равно перебирает все пропускаемые строки. Для больших таблиц используют **keyset pagination (seek method)** — вместо offset фильтруют по последнему увиденному значению ключа (\`WHERE id > :lastId ORDER BY id LIMIT n\`). Это стабильно быстро и не «съезжает» при вставках, но не даёт прыжка на произвольную страницу.`,
      },
      {
        id: 'spring-security-basics',
        question: 'Как устроена цепочка фильтров Spring Security? Что такое SecurityContext?',
        answer: `Spring Security встраивается в веб-приложение как **цепочка сервлет-фильтров**. Входная точка — \`DelegatingFilterProxy\`, который делегирует \`FilterChainProxy\`, а тот прогоняет запрос через \`SecurityFilterChain\` — упорядоченный набор фильтров (аутентификация, авторизация, CSRF, обработка исключений и т.д.). Каждый фильтр отвечает за свой аспект.

**SecurityContext / SecurityContextHolder:** результат аутентификации (\`Authentication\` с principal и его правами) хранится в \`SecurityContext\`, а доступ к нему даёт \`SecurityContextHolder\` — обычно через \`ThreadLocal\`, поэтому текущий пользователь доступен в любом месте обработки запроса в этом потоке.

Начиная со Spring Security 5.7 отказались от \`WebSecurityConfigurerAdapter\` в пользу **компонентного стиля**: объявляют бин \`SecurityFilterChain\` и настраивают \`HttpSecurity\` (\`authorizeHttpRequests\`, \`requestMatchers\`, \`hasRole\`/\`hasAuthority\`). Авторизацию на уровне методов включают \`@EnableMethodSecurity\` + \`@PreAuthorize\`.`,
      },
      {
        id: 'jwt-stateless',
        question: 'Как работает JWT-аутентификация и stateless-подход? Зачем refresh-токен?',
        answer: `**Stateless-аутентификация** не хранит серверную сессию: всё нужное для проверки пользователь присылает в каждом запросе. Это упрощает горизонтальное масштабирование (любой инстанс обработает запрос) в отличие от stateful-сессии в памяти/хранилище.

**JWT (JSON Web Token)** — подписанный токен из трёх частей (header, payload с claims, signature). Сервер выдаёт его при логине; клиент шлёт в заголовке \`Authorization: Bearer ...\`. Сервер проверяет подпись своим ключом и доверяет claims **без обращения к БД**. Важно: payload только закодирован (base64), не зашифрован — секреты в него не кладут.

**Access + refresh токены:** access-токен делают **короткоживущим** (минуты), чтобы утечка была не критична. Долгоживущий **refresh-токен** хранится безопаснее и служит для получения нового access-токена без повторного логина. Отзыв — через чёрный список или хранение refresh-токенов на сервере (что частично возвращает состояние).`,
      },
      {
        id: 'oauth2',
        question: 'Что такое OAuth2 и чем он отличается от JWT?',
        answer: `**OAuth2** — протокол **делегированной авторизации**: он позволяет приложению получить ограниченный доступ к ресурсам пользователя без передачи его пароля. Участники: **resource owner** (пользователь), **client** (приложение), **authorization server** (выдаёт токены), **resource server** (хранит данные). Результат потока (например, Authorization Code Flow) — **access-токен**.

Ключевое различие: **OAuth2 — это протокол/фреймворк, а JWT — это формат токена.** Они не альтернативы: OAuth2 описывает, *как* получить токен, а access-токен при этом *может* быть в формате JWT (а может быть непрозрачной строкой, проверяемой через introspection). Формулировка «OAuth2 vs JWT» некорректна по сути — они работают на разных уровнях и часто используются вместе.

Для аутентификации (не только авторизации) поверх OAuth2 существует **OpenID Connect (OIDC)**, добавляющий **id-токен**. В Spring это \`spring-security-oauth2-client\` / \`oauth2-resource-server\`.`,
      },
      {
        id: 'csrf-passwordencoder',
        question: 'Что такое CSRF и когда его отключают? Как хранить пароли (PasswordEncoder)?',
        answer: `**CSRF (Cross-Site Request Forgery)** — атака, при которой сторонний сайт заставляет браузер жертвы отправить запрос к приложению, где она аутентифицирована, используя её cookie. Защита — **CSRF-токен**: непредсказуемое значение, которое сервер ждёт в изменяющих запросах и которое чужой сайт знать не может.

CSRF-защита актуальна для **сессионной (cookie-based)** аутентификации. Для **stateless REST API с токеном в заголовке** \`Authorization\` её обычно **отключают**: браузер не подставляет заголовок автоматически, поэтому классический CSRF неприменим. Отключать при cookie-сессиях — небезопасно.

**PasswordEncoder** — пароли никогда не хранят в открытом виде и не шифруют обратимо, а **хешируют** адаптивным алгоритмом с солью:

- **BCrypt** — распространённый выбор по умолчанию (настраиваемый cost);
- **SCrypt**, **Argon2** — устойчивее к атакам на GPU/ASIC (память-затратные).

\`DelegatingPasswordEncoder\` хранит в хеше префикс алгоритма (\`{bcrypt}...\`), позволяя менять алгоритм со временем. Проверка — \`matches(raw, encoded)\`.`,
      },
      {
        id: 'spring-cloud-overview',
        question: 'Что такое Spring Cloud и какие проблемы микросервисов он решает?',
        answer: `**Spring Cloud** — набор проектов поверх Spring Boot, закрывающих типовые задачи распределённой микросервисной архитектуры готовыми решениями:

- **Service Discovery** (Eureka, Consul) — сервисы находят друг друга по имени, а не по захардкоженным адресам;
- **Централизованная конфигурация** (Spring Cloud Config) — настройки всех сервисов в одном месте (обычно git);
- **API Gateway** (Spring Cloud Gateway) — единая точка входа: маршрутизация, аутентификация, rate limiting;
- **Client-side load balancing** (Spring Cloud LoadBalancer) — распределение запросов между инстансами;
- **Отказоустойчивость** (Resilience4j) — Circuit Breaker, Retry, Bulkhead;
- **Распределённая трассировка** (Micrometer Tracing / прежде Sleuth) — сквозной id запроса через сервисы;
- **Событийная интеграция** (Spring Cloud Stream) — абстракция над брокерами (Kafka, RabbitMQ).

Идея — дать инфраструктурные паттерны микросервисов как переиспользуемые компоненты, а не изобретать их в каждом сервисе.`,
      },
      {
        id: 'service-discovery-gateway',
        question: 'Как работают Service Discovery (Eureka) и API Gateway?',
        answer: `**Service Discovery** решает проблему поиска сервисов в динамической среде, где адреса и число инстансов меняются:

- каждый сервис при старте **регистрируется** в реестре (Eureka Server), присылая своё имя и адрес, и периодически шлёт heartbeat;
- клиент запрашивает у реестра инстансы нужного сервиса по имени и вызывает их (обычно с client-side балансировкой);
- инстансы, переставшие слать heartbeat, удаляются из реестра.

Альтернативы Eureka — Consul, Zookeeper (плюс healthcheck и KV-хранилище).

**API Gateway** (Spring Cloud Gateway) — единый вход для внешних клиентов, скрывающий внутреннюю топологию. Отвечает за:

- **маршрутизацию** запросов на нужные сервисы (по пути, заголовкам);
- сквозные задачи: аутентификация/авторизация, **rate limiting**, CORS, логирование, повторы;
- интеграцию с discovery (маршруты по имени сервиса).

Вместе они дают гибкое масштабирование: инстансы добавляются/убираются, а клиенты и gateway узнают об этом через реестр.`,
      },
    ],
  };

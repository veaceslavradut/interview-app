// Английские переводы: spring
export const spring = {
    title: 'Spring Framework',
    description: 'IoC, DI, Spring Boot, AOP',
    questions: {
      'what-is-spring': {
        question: 'What is the Spring Framework? What modules does it consist of?',
        answer: `**Spring Framework** is the most popular framework for developing Java applications. Its foundation is the Inversion of Control (IoC) container, which manages the lifecycle of objects (beans) and their dependencies.

**Main modules:**

- **Core Container** — IoC container, DI, ApplicationContext;
- **Spring AOP** — aspect-oriented programming;
- **Spring MVC / WebFlux** — web applications and REST APIs (servlet and reactive stacks);
- **Spring Data** — simplified database access (JPA, MongoDB, Redis...);
- **Spring Security** — authentication and authorization;
- **Spring Transaction** — declarative transaction management;
- **Spring Test** — testing support.

**Ecosystem:**

- **Spring Boot** — quick start: auto-configuration, embedded server, starters;
- **Spring Cloud** — microservice patterns (Config, Gateway, Circuit Breaker);
- **Spring Batch**, **Spring Integration**, and others.

Key advantages: loose coupling through DI, declarative style (annotations), testability, a huge ecosystem and community.`,
      },
      'ioc-di': {
        question: 'What are IoC and DI?',
        answer: `**IoC (Inversion of Control)** — a principle where control over object creation and lifecycle is handed to the framework (container) rather than being done manually in code.

**DI (Dependency Injection)** — a way to implement IoC: dependencies are provided to an object from the outside by the container, instead of the object creating them itself.

\`\`\`java
// without DI — tight coupling
class OrderService {
    private final PaymentService payment = new PaypalPayment(); // creates it itself
}

// with DI — the dependency comes from outside
@Service
class OrderService {
    private final PaymentService payment;

    OrderService(PaymentService payment) {  // injected by the container
        this.payment = payment;
    }
}
\`\`\`

**Injection styles:**

- **constructor injection** — recommended: dependencies are mandatory, fields can be final, easy to test;
- **setter injection** — for optional dependencies;
- **field injection** (\`@Autowired\` on a field) — not recommended: hides dependencies, hinders testing.

Benefits: loose coupling, easy substitution of implementations (mocks in tests), reuse, readability. If a bean has multiple implementations of an interface — disambiguate with \`@Qualifier\` or \`@Primary\`.`,
      },
      'bean-lifecycle': {
        question: 'Describe the Spring bean lifecycle.',
        answer: `Bean lifecycle stages in the ApplicationContext:

1. **Reading bean definitions** (BeanDefinition) from annotations/configuration;
2. **BeanFactoryPostProcessor** — modifying definitions before creation (e.g., resolving \${properties});
3. **Instantiation** — constructor invocation;
4. **Dependency injection** (populate properties);
5. **Aware interfaces** — \`BeanNameAware\`, \`ApplicationContextAware\`;
6. **BeanPostProcessor.postProcessBeforeInitialization()**;
7. **Initialization**: \`@PostConstruct\` → \`InitializingBean.afterPropertiesSet()\` → \`initMethod\`;
8. **BeanPostProcessor.postProcessAfterInitialization()** — this is where AOP proxies are created (@Transactional, etc.);
9. The bean is **ready for use**;
10. **Destruction** (when the context closes): \`@PreDestroy\` → \`DisposableBean.destroy()\` → \`destroyMethod\`.

\`\`\`java
@Component
class CacheService {
    @PostConstruct
    void warmUp() { /* after dependency injection */ }

    @PreDestroy
    void cleanup() { /* before destruction */ }
}
\`\`\`

Important: \`@PreDestroy\` is called only for singleton beans; the container does not destroy prototype beans.`,
      },
      'bean-scopes': {
        question: 'What bean scopes exist in Spring?',
        answer: `**Main scopes:**

- **singleton** (default) — one instance per ApplicationContext. Not to be confused with the Singleton pattern: one per context, not per JVM;
- **prototype** — a new instance every time the bean is requested from the container.

**Web scopes:**

- **request** — one instance per HTTP request;
- **session** — one per HTTP session;
- **application** — one per ServletContext;
- **websocket** — one per WebSocket session.

\`\`\`java
@Component
@Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)
class ReportBuilder { ... }

@Component
@Scope(value = WebApplicationContext.SCOPE_REQUEST,
       proxyMode = ScopedProxyMode.TARGET_CLASS)
class RequestContext { ... }
\`\`\`

**Pitfalls:**

- singleton beans must be **thread-safe** (no mutable state);
- injecting a prototype into a singleton: the prototype is created **once**, when the singleton is created. Solutions: \`ObjectProvider<T>\`, \`@Lookup\`, scoped proxy;
- a web-scoped bean inside a singleton requires \`proxyMode\`.`,
      },
      'spring-boot': {
        question: 'What is Spring Boot? How does auto-configuration work?',
        answer: `**Spring Boot** — a layer on top of Spring for quickly building production-ready applications with minimal configuration.

**Key features:**

- **auto-configuration** — automatic setup based on the classpath;
- **starters** — ready-made dependency bundles (\`spring-boot-starter-web\`, \`-data-jpa\`, \`-security\`);
- **embedded server** — Tomcat/Jetty/Netty inside the jar (\`java -jar app.jar\`);
- **Actuator** — metrics, health checks, monitoring;
- external configuration: application.yml, environment variables, profiles (\`@Profile\`).

**How auto-configuration works:**

- \`@SpringBootApplication\` = \`@Configuration\` + \`@EnableAutoConfiguration\` + \`@ComponentScan\`;
- Spring Boot reads the list of auto-configurations from \`META-INF/spring/...AutoConfiguration.imports\`;
- each one is applied based on **conditions**:

\`\`\`java
@AutoConfiguration
@ConditionalOnClass(DataSource.class)          // if the class is on the classpath
@ConditionalOnMissingBean(DataSource.class)    // if the bean isn't declared manually
public class DataSourceAutoConfiguration { ... }
\`\`\`

So adding \`spring-boot-starter-data-jpa\` + a driver gets you a configured DataSource, EntityManager, and TransactionManager. Your own bean always **overrides** the auto-configuration. Diagnostics: \`--debug\` prints a report of the applied conditions.`,
      },
      transactional: {
        question: 'How does @Transactional work?',
        answer: `**@Transactional** — declarative transaction management via an **AOP proxy**: Spring wraps the bean in a proxy that opens a transaction before the method and commits/rolls back after it.

\`\`\`java
@Service
public class TransferService {
    @Transactional
    public void transfer(long from, long to, BigDecimal amount) {
        accountRepo.debit(from, amount);
        accountRepo.credit(to, amount);  // exception → both operations roll back
    }
}
\`\`\`

**Key parameters:**

- \`propagation\` — behavior when a transaction already exists: REQUIRED (default — join or create), REQUIRES_NEW (suspend the current one, create a new one), NESTED, SUPPORTS, MANDATORY, NEVER;
- \`isolation\` — isolation level;
- \`rollbackFor\` — by default rollback happens only on **unchecked** exceptions; for checked ones you need \`rollbackFor = Exception.class\`;
- \`readOnly = true\` — optimization for reads;
- \`timeout\` — maximum duration.

**Common mistakes (caused by the proxy):**

- **self-invocation**: calling \`this.method()\` inside the bean bypasses the proxy — no transaction is created;
- \`@Transactional\` on **private/final** methods doesn't work;
- swallowing an exception inside the method cancels the rollback;
- long operations (HTTP calls) inside a transaction hold a connection from the pool.`,
      },
      'spring-aop': {
        question: 'What is AOP? How does Spring create proxies?',
        answer: `**AOP (Aspect-Oriented Programming)** — extracting cross-cutting concerns — logging, transactions, security, caching — out of business logic into separate modules (aspects).

**Terminology:**

- **Aspect** — a module of cross-cutting functionality;
- **Join point** — an execution point (in Spring — a method invocation);
- **Pointcut** — an expression selecting join points;
- **Advice** — the action: \`@Before\`, \`@After\`, \`@AfterReturning\`, \`@AfterThrowing\`, \`@Around\`;
- **Weaving** — linking aspects to code (in Spring — at runtime via proxies).

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
            log.info("{} took {} ms", pjp.getSignature(),
                     (System.nanoTime() - start) / 1_000_000);
        }
    }
}
\`\`\`

**Proxy mechanisms:**

- **JDK Dynamic Proxy** — if the bean implements an interface (the proxy implements the same interface);
- **CGLIB** — subclassing the class (default in Spring Boot); doesn't work with final classes/methods.

\`@Transactional\`, \`@Cacheable\`, \`@Async\`, \`@PreAuthorize\` are all built on AOP proxies — hence the shared self-invocation limitation.`,
      },
      'applicationcontext-vs-beanfactory': {
        question: 'How does ApplicationContext differ from BeanFactory?',
        answer: `Both are IoC containers that manage beans, but \`ApplicationContext\` is an extension of \`BeanFactory\` with enterprise features.

**BeanFactory** is the basic container; it creates beans **lazily** (on demand, at the first \`getBean\`). Minimal memory footprint.

**ApplicationContext** adds on top of it:

- **eager initialization** of singleton beans at startup (configuration errors surface immediately, not on first access);
- **event** publication (\`ApplicationEvent\`, \`@EventListener\`);
- internationalization (\`MessageSource\`);
- convenient work with resources and \`Environment\` (profiles, properties);
- automatic detection of \`BeanPostProcessor\` and \`BeanFactoryPostProcessor\`.

In practice you almost always use \`ApplicationContext\`. \`BeanFactory\` directly — rarely, in memory-constrained environments or for lazy loading.`,
      },
      'autowired-resolution': {
        question: 'How does @Autowired resolve dependencies? What if there are several candidates?',
        answer: `\`@Autowired\` injects a dependency **by type**. The algorithm:

1. the container looks for beans of a matching type;
2. if exactly one is found — it is injected;
3. if several — it tries to pick by field/parameter name or by \`@Primary\`;
4. if it can't choose — \`NoUniqueBeanDefinitionException\`; if there are no candidates — \`NoSuchBeanDefinitionException\` (can be relaxed with \`required = false\`).

Resolving ambiguity:

- **\`@Qualifier("beanName")\`** — explicitly name the bean;
- **\`@Primary\`** — mark a bean as the default preferred one;
- injecting \`List<T>\` or \`Map<String, T>\` — get all beans of the type at once.

Difference from related annotations: \`@Resource\` (JSR-250) injects **by name**, \`@Inject\` (JSR-330) — by type, like \`@Autowired\`, but without the \`required\` attribute.`,
      },
      'injection-types': {
        question: 'What is the difference between constructor, setter, and field injection? Which is preferred?',
        answer: `Three ways to inject dependencies:

- **Constructor injection** — dependencies come through the constructor. The **preferred** way: fields can be \`final\` (immutability), the object is always created in a valid state, dependencies are explicit, it's easy to test (pass mocks to the constructor), and circular dependencies are detected immediately at startup.
- **Setter injection** — through setters. Suitable for **optional** or reconfigurable dependencies.
- **Field injection** (\`@Autowired\` directly on a field) — compact, but **not recommended**: the field can't be \`final\`, dependencies are hidden, testing without the container is hard (needs reflection/Spring), and it's easy to end up with a bloated class holding a dozen dependencies.

Since Spring 4.3, with a single constructor you can omit \`@Autowired\`. Constructor injection is the Spring team's own recommendation.`,
      },
      stereotypes: {
        question: 'What is the difference between @Component, @Service, @Repository, and @Controller?',
        answer: `All four are stereotype annotations that mark a class as a bean picked up during component scanning. Technically \`@Service\`, \`@Repository\`, and \`@Controller\` are specializations of \`@Component\`. The differences are semantic and (for two of them) functional:

- **\`@Component\`** — a generic bean, when no more specific stereotype fits.
- **\`@Service\`** — the business-logic layer. A purely semantic marker.
- **\`@Repository\`** — the data-access layer. Adds **exception translation**: persistence-specific exceptions (JPA/JDBC) are translated into the unified \`DataAccessException\` hierarchy.
- **\`@Controller\`** — the Spring MVC web layer; handles HTTP requests. \`@RestController\` = \`@Controller\` + \`@ResponseBody\`.

The separation improves readability, and \`@Repository\` and \`@Controller\` provide extra behavior.`,
      },
      'bean-post-processor': {
        question: 'How does BeanPostProcessor differ from BeanFactoryPostProcessor?',
        answer: `Both are container extension points, but they work at different stages.

**\`BeanFactoryPostProcessor\`** works with **bean definitions** after they are loaded but **before** the beans themselves are created. It can modify configuration metadata. A classic example is \`PropertySourcesPlaceholderConfigurer\`, which substitutes \`\${...}\` values.

**\`BeanPostProcessor\`** works with **already created** bean instances — its \`postProcessBeforeInitialization\` and \`postProcessAfterInitialization\` methods are called before and after init methods. It is through \`BeanPostProcessor\` that Spring wraps beans in proxies (AOP, \`@Transactional\`) and processes annotations like \`@Autowired\` and \`@PostConstruct\`.

Order: definitions loaded → \`BeanFactoryPostProcessor\` edits the definitions → beans are created → \`BeanPostProcessor\` (before) → init methods (\`@PostConstruct\`, \`afterPropertiesSet\`) → \`BeanPostProcessor\` (after).`,
      },
      'circular-dependency': {
        question: 'How does Spring handle circular dependencies, and what is self-invocation?',
        answer: `A **circular dependency** is when bean A depends on B and B depends on A.

- with **field/setter injection**, Spring can resolve them via an intermediate "early reference" in a third-level cache;
- with **constructor injection**, it cannot — a bean can't be created without a ready dependency, and Spring throws \`BeanCurrentlyInCreationException\`.

Cycles are a sign of a design problem; they are fixed by extracting shared logic into a third bean, \`@Lazy\`, or events. Since Spring Boot 2.6+, cycles are prohibited by default.

**Self-invocation** — calling one bean method from another method **of the same class** (\`this.method()\`). The problem is that the proxy wrapper (for \`@Transactional\`, \`@Cacheable\`, \`@Async\`) intercepts only **external** calls made through the proxy reference. An internal \`this\` call bypasses the proxy, so the annotation **doesn't take effect**. Workarounds: move the method into a separate bean, self-injection, or \`AopContext.currentProxy()\`.`,
      },
      'configuration-properties': {
        question: 'How does @ConfigurationProperties differ from @Value? What are Spring Profiles?',
        answer: `**\`@Value("\${app.timeout}")\`** injects a **single** property into a field. Simple, but: no type-safe grouping, weak support for validation and relaxed binding, inconvenient for large sets of settings.

**\`@ConfigurationProperties(prefix = "app")\`** binds a **whole group** of properties to a typed POJO. Advantages: grouping by prefix, **relaxed binding** (\`app.max-size\` ↔ \`APP_MAXSIZE\`), \`@Validated\` support (JSR-303), nested objects and lists. Recommended for application configuration; \`@Value\` — for single values and SpEL expressions.

**Spring Profiles** — a mechanism for sets of configuration per environment (\`dev\`, \`test\`, \`prod\`). Beans are marked \`@Profile("dev")\`, properties go into \`application-dev.yml\`. The active profile is set via \`spring.profiles.active\` (a property, environment variable, or launch argument), letting a single artifact run in different environments.`,
      },
      'exception-handling': {
        question: 'How do you handle exceptions centrally in Spring (@ControllerAdvice)?',
        answer: `In Spring MVC, exceptions are handled at several levels:

- **\`@ExceptionHandler\`** on a controller method — catches exceptions of that controller;
- **\`@ControllerAdvice\` / \`@RestControllerAdvice\`** — a global component with \`@ExceptionHandler\` methods applied to **all** controllers. It lets you map exceptions to HTTP responses (status + body) in one place without duplicating handling.

Example: \`@ExceptionHandler(EntityNotFoundException.class)\` returns a 404 with an error body. You can return a \`ResponseEntity\` with the desired status or use \`@ResponseStatus\`.

Since Spring 6 / Boot 3 there is \`ProblemDetail\` (RFC 7807) for unified error bodies. The base fallback mechanism is \`ResponseEntityExceptionHandler\`, which you can extend to override the handling of standard Spring MVC exceptions.`,
      },
      'spring-data-repositories': {
        question: 'How do CrudRepository, JpaRepository, and PagingAndSortingRepository differ? How do derived queries work?',
        answer: `The Spring Data interface hierarchy — each extends the previous one:

- **\`CrudRepository\`** — basic CRUD operations (\`save\`, \`findById\`, \`delete\`, \`count\`).
- **\`PagingAndSortingRepository\`** — adds pagination and sorting (\`findAll(Pageable)\`, \`findAll(Sort)\`).
- **\`JpaRepository\`** — adds JPA specifics: \`findAll\` returns a \`List\`, batch operations (\`saveAll\`, \`deleteAllInBatch\`), \`flush()\`, \`getReferenceById\`.

In practice, for JPA you usually take \`JpaRepository\`.

**Derived queries (query by method name)** — Spring generates the query by parsing the method name: \`findByLastNameAndAgeGreaterThan(String, int)\` becomes the corresponding JPQL. Keywords \`And\`, \`Or\`, \`Between\`, \`Like\`, \`OrderBy\`, \`Top\`/\`First\`, and others are supported. Convenient for simple queries; for complex ones the names become unreadable — then you switch to \`@Query\`.`,
      },
      'query-and-projections': {
        question: 'When should you use @Query and native SQL? What are projections?',
        answer: `**\`@Query\`** defines a query explicitly when a derived method is awkward:

- by default — **JPQL** (works with entities and fields, portable across databases);
- \`nativeQuery = true\` — **native SQL**: needed for database-specific constructs, complex window functions, fine tuning, but you lose portability and entity-level checking.

Parameters are bound positionally (\`?1\`) or by name (\`:name\` + \`@Param\`). Modifying queries are marked \`@Modifying\`.

**Projections** return not the whole entity but the needed subset of fields — less data and no extra joins:

- **interface-based** — an interface with getters for the needed fields (a closed projection); Spring creates the implementation itself;
- **DTO/class-based** — a class constructor is filled with the selected fields;
- **dynamic** — the projection type is passed as a method parameter (\`<T> T findBy...(..., Class<T>)\`).

Projections are a simple way to speed up reads and avoid pulling heavy entities.`,
      },
      'transaction-propagation': {
        question: 'What transaction propagation levels exist in Spring?',
        answer: `**Propagation** defines how a \`@Transactional\` method behaves relative to an already existing transaction. The main options:

- **REQUIRED** (default) — join the current transaction, or create a new one if there is none.
- **REQUIRES_NEW** — always create a **new** transaction, suspending the current one. The inner one commits/rolls back independently (useful for audit or logs that must persist even if the main transaction rolls back).
- **SUPPORTS** — run within a transaction if one exists, otherwise without one.
- **NOT_SUPPORTED** — run outside a transaction, suspending the current one.
- **MANDATORY** — requires an existing transaction, otherwise an exception.
- **NEVER** — requires the absence of a transaction, otherwise an exception.
- **NESTED** — a nested transaction via a savepoint: it rolls back to the savepoint without affecting the outer one.

An important nuance: \`REQUIRES_NEW\` and \`NESTED\` work only through the proxy (not on self-invocation) and depend on the data source's capabilities.`,
      },
      pagination: {
        question: 'How do you implement pagination in Spring Data? How does Page differ from Slice?',
        answer: `Spring Data provides pagination via \`Pageable\`:

- the method takes a \`Pageable\` (\`PageRequest.of(page, size, Sort.by(...))\`) and returns a \`Page\`, \`Slice\`, or \`List\`.
- **\`Page<T>\`** — knows the **total number of elements and pages**: for this an extra \`count\` query is executed. Convenient for a UI with page numbers, but the count is expensive on large tables.
- **\`Slice<T>\`** — knows only **whether there is a next page** (it fetches one extra element), without a total count. Cheaper, suitable for "infinite scroll."

**Offset pagination** (\`LIMIT ... OFFSET\`) degrades at large offsets: the database still scans all skipped rows. For large tables you use **keyset pagination (the seek method)** — instead of an offset you filter by the last seen key value (\`WHERE id > :lastId ORDER BY id LIMIT n\`). This is consistently fast and doesn't "shift" on inserts, but it doesn't allow jumping to an arbitrary page.`,
      },
      'spring-security-basics': {
        question: 'How is the Spring Security filter chain structured? What is the SecurityContext?',
        answer: `Spring Security plugs into a web application as a **chain of servlet filters**. The entry point is \`DelegatingFilterProxy\`, which delegates to \`FilterChainProxy\`, which runs the request through a \`SecurityFilterChain\` — an ordered set of filters (authentication, authorization, CSRF, exception handling, etc.). Each filter is responsible for its own aspect.

**SecurityContext / SecurityContextHolder:** the result of authentication (an \`Authentication\` with the principal and its authorities) is stored in the \`SecurityContext\`, and \`SecurityContextHolder\` provides access to it — usually via a \`ThreadLocal\`, so the current user is available anywhere during request processing on that thread.

Since Spring Security 5.7, \`WebSecurityConfigurerAdapter\` was dropped in favor of a **component style**: you declare a \`SecurityFilterChain\` bean and configure \`HttpSecurity\` (\`authorizeHttpRequests\`, \`requestMatchers\`, \`hasRole\`/\`hasAuthority\`). Method-level authorization is enabled with \`@EnableMethodSecurity\` + \`@PreAuthorize\`.`,
      },
      'jwt-stateless': {
        question: 'How does JWT authentication and the stateless approach work? Why a refresh token?',
        answer: `**Stateless authentication** keeps no server-side session: everything needed for verification is sent by the user in every request. This simplifies horizontal scaling (any instance can handle the request), unlike a stateful session in memory/storage.

**JWT (JSON Web Token)** is a signed token of three parts (header, payload with claims, signature). The server issues it at login; the client sends it in the \`Authorization: Bearer ...\` header. The server verifies the signature with its key and trusts the claims **without hitting the database**. Important: the payload is only encoded (base64), not encrypted — secrets are not put into it.

**Access + refresh tokens:** the access token is made **short-lived** (minutes) so that a leak is not critical. A long-lived **refresh token** is stored more securely and is used to obtain a new access token without logging in again. Revocation is done via a blacklist or by storing refresh tokens on the server (which partially reintroduces state).`,
      },
      oauth2: {
        question: 'What is OAuth2 and how does it differ from JWT?',
        answer: `**OAuth2** is a **delegated authorization** protocol: it lets an application obtain limited access to a user's resources without receiving their password. The participants: the **resource owner** (the user), the **client** (the application), the **authorization server** (issues tokens), and the **resource server** (holds the data). The result of a flow (for example, the Authorization Code Flow) is an **access token**.

The key distinction: **OAuth2 is a protocol/framework, while JWT is a token format.** They are not alternatives: OAuth2 describes *how* to obtain a token, and the access token *may* be in JWT format (or it may be an opaque string verified via introspection). The phrasing "OAuth2 vs JWT" is essentially incorrect — they operate at different levels and are often used together.

For authentication (not just authorization) on top of OAuth2 there is **OpenID Connect (OIDC)**, which adds an **id token**. In Spring these are \`spring-security-oauth2-client\` / \`oauth2-resource-server\`.`,
      },
      'csrf-passwordencoder': {
        question: 'What is CSRF and when is it disabled? How do you store passwords (PasswordEncoder)?',
        answer: `**CSRF (Cross-Site Request Forgery)** is an attack in which a third-party site makes the victim's browser send a request to an application where they are authenticated, using their cookie. The defense is a **CSRF token**: an unpredictable value the server expects on state-changing requests and that the foreign site cannot know.

CSRF protection is relevant for **session (cookie-based)** authentication. For a **stateless REST API with a token in the \`Authorization\` header** it is usually **disabled**: the browser does not attach the header automatically, so classic CSRF does not apply. Disabling it with cookie sessions is unsafe.

**PasswordEncoder** — passwords are never stored in plaintext or reversibly encrypted, but **hashed** with an adaptive, salted algorithm:

- **BCrypt** — a common default choice (configurable cost);
- **SCrypt**, **Argon2** — more resistant to GPU/ASIC attacks (memory-hard).

\`DelegatingPasswordEncoder\` stores the algorithm prefix in the hash (\`{bcrypt}...\`), allowing the algorithm to be changed over time. Verification — \`matches(raw, encoded)\`.`,
      },
      'spring-cloud-overview': {
        question: 'What is Spring Cloud and which microservice problems does it solve?',
        answer: `**Spring Cloud** is a set of projects on top of Spring Boot that cover common tasks of a distributed microservice architecture with ready-made solutions:

- **Service Discovery** (Eureka, Consul) — services find each other by name rather than hardcoded addresses;
- **Centralized configuration** (Spring Cloud Config) — settings for all services in one place (usually git);
- **API Gateway** (Spring Cloud Gateway) — a single entry point: routing, authentication, rate limiting;
- **Client-side load balancing** (Spring Cloud LoadBalancer) — distributing requests across instances;
- **Resilience** (Resilience4j) — Circuit Breaker, Retry, Bulkhead;
- **Distributed tracing** (Micrometer Tracing / formerly Sleuth) — an end-to-end request id across services;
- **Event-driven integration** (Spring Cloud Stream) — an abstraction over brokers (Kafka, RabbitMQ).

The idea is to provide microservice infrastructure patterns as reusable components instead of reinventing them in every service.`,
      },
      'service-discovery-gateway': {
        question: 'How do Service Discovery (Eureka) and an API Gateway work?',
        answer: `**Service Discovery** solves the problem of locating services in a dynamic environment where addresses and the number of instances change:

- each service **registers** with the registry (Eureka Server) at startup, sending its name and address, and periodically sends a heartbeat;
- a client asks the registry for instances of the needed service by name and calls them (usually with client-side load balancing);
- instances that stop sending heartbeats are removed from the registry.

Alternatives to Eureka — Consul, Zookeeper (plus health checks and a KV store).

**API Gateway** (Spring Cloud Gateway) is a single entry point for external clients that hides the internal topology. It is responsible for:

- **routing** requests to the right services (by path, headers);
- cross-cutting concerns: authentication/authorization, **rate limiting**, CORS, logging, retries;
- integration with discovery (routes by service name).

Together they enable flexible scaling: instances are added/removed, and clients and the gateway learn about it through the registry.`,
      },
    },
  };

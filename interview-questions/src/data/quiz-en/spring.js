// Английский перевод банка квиза: spring. Порядок вариантов и опций — как в RU.
export const spring = {
  'what-is-spring': [
    {
      question: 'What is at the core of the Spring Framework?',
      options: [
        'An IoC container with dependency injection (DI) and AOP support',
        'Its own virtual machine replacing the JVM',
        'A built-in database',
        'A compiler from Java code to JavaScript',
      ],
    },
    {
      question: 'What is Spring?',
      options: [
        'A framework for building Java applications with an IoC container that manages the lifecycle of objects (beans)',
        'An application server, an analogue of Tomcat',
        'A build system, an analogue of Maven',
        'A graphics library',
      ],
    },
  ],
  'ioc-di': [
    {
      question: 'What is Inversion of Control (IoC)?',
      options: [
        'Creating and wiring objects is delegated to a container instead of being done by hand in application code',
        'Reversing the execution order of methods in a class',
        'Handing control of the application to the operating system',
        'A ban on using constructors',
      ],
    },
    {
      question: 'Which way of injecting dependencies is recommended in Spring?',
      options: [
        'Via the constructor — dependencies are mandatory, immutable, and easy to test',
        'Via public static fields',
        'Via reflection by hand in the main method',
        'Via global variables',
      ],
    },
  ],
  'bean-lifecycle': [
    {
      question: 'Which method is called after all dependencies are injected into a bean?',
      options: [
        'A method annotated with @PostConstruct',
        'A method annotated with @PreDestroy',
        'The bean’s constructor',
        'The main method',
      ],
    },
    {
      question: 'In what order does a Spring bean’s lifecycle proceed?',
      options: [
        'Creation → dependency injection → BeanPostProcessor/initialization (@PostConstruct) → use → @PreDestroy',
        '@PreDestroy → use → creation → dependency injection',
        'Use → creation → initialization',
        'The order is random and depends on the garbage collector',
      ],
    },
  ],
  'bean-scopes': [
    {
      question: 'What is a Spring bean’s default scope?',
      options: [
        'singleton — one instance per container',
        'prototype — a new instance on each access',
        'request — an instance per HTTP request',
        'session — an instance per user session',
      ],
    },
    {
      question: 'What does the prototype scope mean?',
      options: [
        'The container creates a new bean instance on each request for that bean',
        'The bean exists as a single instance',
        'The bean is created once per HTTP session',
        'The bean is available only in tests',
      ],
    },
  ],
  'spring-boot': [
    {
      question: 'What does Spring Boot give over “plain” Spring?',
      options: [
        'Auto-configuration, dependency starters, and an embedded server — minimal manual setup',
        'A completely different IoC container',
        'Mandatory configuration via XML',
        'Doing away with annotations',
      ],
    },
    {
      question: 'What is a Spring Boot starter?',
      options: [
        'A ready-made set of compatible dependencies for a specific task (e.g. spring-boot-starter-web)',
        'A script to launch the application on a server',
        'A class with a main method',
        'An IDE plugin for code generation',
      ],
    },
  ],
  'transactional': [
    {
      question: 'How does the @Transactional annotation work?',
      options: [
        'Spring creates a proxy that opens a transaction before the method and commits/rolls back after',
        'The compiler inserts SQL BEGIN/COMMIT commands directly into the bytecode',
        'The method runs in a separate thread with a DB lock',
        'The annotation only documents intent and does nothing',
      ],
    },
    {
      question: 'Why doesn’t @Transactional work when a method is called from another method of the same class (self-invocation)?',
      options: [
        'The call goes directly, bypassing Spring’s proxy, which is what manages the transaction',
        'Transactions are forbidden within one class',
        'Because of a conflict with the garbage collector',
        'It does work — there are no restrictions',
      ],
    },
  ],
  'spring-aop': [
    {
      question: 'What is Spring AOP used for?',
      options: [
        'To extract cross-cutting functionality (logging, transactions, security) into aspects',
        'To speed up application startup',
        'To generate REST documentation',
        'To map objects to database tables',
      ],
    },
    {
      question: 'What is advice in AOP terminology?',
      options: [
        'Code executed at a certain point (before, after, around) relative to the target method',
        'An expression defining which methods the aspect applies to',
        'A class containing business logic',
        'An exception thrown by the aspect',
      ],
    },
  ],
  'applicationcontext-vs-beanfactory': [
    {
      question: 'How does ApplicationContext differ from BeanFactory?',
      options: [
        'It is an extension of BeanFactory with eager initialization of singletons, events, i18n, and auto-detection of post-processors',
        'It is a simplified container without DI support',
        'ApplicationContext cannot create beans, only read configuration',
        'No difference — they are synonyms',
      ],
    },
    {
      question: 'When are singleton beans created by default in an ApplicationContext?',
      options: [
        'Eagerly — at container startup',
        'Lazily — on first access',
        'Only manually via getBean',
        'At application shutdown',
      ],
    },
  ],
  'autowired-resolution': [
    {
      question: 'By what does @Autowired inject a dependency by default?',
      options: [
        'By type (by type)',
        'By bean name (by name)',
        'By declaration order in the class',
        'By the @Order annotation',
      ],
    },
    {
      question: 'How do you resolve ambiguity if there are several beans of the same type?',
      options: [
        'Use @Qualifier or mark one bean @Primary',
        'Remove all beans except one',
        'Inject only via field injection',
        'Nothing can be done — it will error forever',
      ],
    },
  ],
  'injection-types': [
    {
      question: 'Why is constructor injection considered preferable?',
      options: [
        'It lets fields be final, guarantees a valid object state, and simplifies testing',
        'It runs faster at runtime',
        'It is the only way to inject a dependency in Spring',
        'It lets you bypass the circular-dependency check',
      ],
    },
    {
      question: 'What is the drawback of field injection (@Autowired on a field)?',
      options: [
        'The field can’t be final, dependencies are hidden, and it’s hard to test without a container',
        'You can’t inject more than one dependency',
        'It is not supported in Spring Boot',
        'It requires a mandatory @Qualifier',
      ],
    },
  ],
  'stereotypes': [
    {
      question: 'What extra behaviour does @Repository provide?',
      options: [
        'Translation of persistence exceptions into the DataAccessException hierarchy',
        'Automatic caching of all methods',
        'Opening a transaction on every method',
        'Registering the bean as a REST controller',
      ],
    },
    {
      question: 'What is @Service in relation to @Component?',
      options: [
        'A specialization of @Component with business-logic-layer semantics',
        'A completely independent annotation unrelated to @Component',
        'A method-level annotation, not a class-level one',
        'An annotation for injecting dependencies',
      ],
    },
  ],
  'bean-post-processor': [
    {
      question: 'At what stage does a BeanFactoryPostProcessor operate?',
      options: [
        'On bean definitions, before the beans themselves are created',
        'On ready bean instances after initialization',
        'Only at container shutdown',
        'During project build',
      ],
    },
    {
      question: 'Through which mechanism does Spring wrap beans in proxies (AOP, @Transactional)?',
      options: ['Through a BeanPostProcessor', 'Through a BeanFactoryPostProcessor', 'Through @ComponentScan', 'Through application.yml'],
    },
  ],
  'circular-dependency': [
    {
      question: 'With which injection type can Spring NOT resolve a circular dependency?',
      options: ['Constructor injection', 'Field injection', 'Setter injection', 'It resolves any type without issues'],
    },
    {
      question: 'Why doesn’t @Transactional fire on self-invocation (this.method())?',
      options: [
        'The internal call bypasses the proxy, which intercepts only external calls',
        'Because @Transactional works only on static methods',
        'Because self-invocation is forbidden by the compiler',
        'Because transactions are not supported in Spring at all',
      ],
    },
  ],
  'configuration-properties': [
    {
      question: 'What is the advantage of @ConfigurationProperties over @Value?',
      options: [
        'Type-safe binding of a whole group of properties with relaxed binding and validation',
        'It runs faster at application startup',
        'It lets you inject only one value at a time',
        'It requires no configuration file',
      ],
    },
    {
      question: 'How do you set the active environment profile in Spring?',
      options: [
        'Via spring.profiles.active (a property, environment variable, or launch argument)',
        'Only hard-coded via the @Profile annotation',
        'By renaming the application’s main class',
        'Profiles cannot be switched after the build',
      ],
    },
  ],
  'exception-handling': [
    {
      question: 'What does @ControllerAdvice do?',
      options: [
        'It defines global exception handlers for all controllers',
        'It caches controller responses',
        'It disables exception handling in the application',
        'It replaces the DispatcherServlet',
      ],
    },
    {
      question: 'How do you handle a specific exception type locally in a controller?',
      options: [
        'With a method annotated @ExceptionHandler',
        'With @Autowired on a method',
        'By wrapping the whole controller in a class-level try-catch',
        'Via @ComponentScan',
      ],
    },
  ],
  'spring-data-repositories': [
    {
      question: 'What does JpaRepository add over CrudRepository?',
      options: [
        'JPA specifics: returning List, batch operations, flush(), getReferenceById',
        'Only the ability to connect to NoSQL',
        'Disabling transactions',
        'Nothing — they are the same',
      ],
    },
    {
      question: 'How do derived queries work in Spring Data?',
      options: [
        'Spring generates the query by parsing the method name (findByLastNameAndAge...)',
        'The query is always written by hand in native SQL',
        'Methods run only via stored procedures',
        'The method name is ignored; the entity’s first field is used',
      ],
    },
  ],
  'query-and-projections': [
    {
      question: 'How does JPQL in @Query differ from native SQL (nativeQuery = true)?',
      options: [
        'JPQL works with entities and is portable across databases; native SQL is DB-specific',
        'JPQL is always faster than native SQL',
        'Native SQL cannot be parameterised',
        'No difference',
      ],
    },
    {
      question: 'Why are projections used in Spring Data?',
      options: [
        'To return only the needed subset of fields instead of the whole entity',
        'To always load all associations EAGERly',
        'To disable the second-level cache',
        'To open a new transaction',
      ],
    },
  ],
  'transaction-propagation': [
    {
      question: 'What does propagation REQUIRES_NEW do?',
      options: [
        'Always creates a new transaction, suspending the current one',
        'Joins the current transaction, or creates one if there is none',
        'Runs the method strictly without a transaction',
        'Requires that a transaction already exist',
      ],
    },
    {
      question: 'Which propagation is used by default in @Transactional?',
      options: ['REQUIRED', 'REQUIRES_NEW', 'MANDATORY', 'NEVER'],
    },
  ],
  'pagination': [
    {
      question: 'How does Page differ from Slice in Spring Data?',
      options: [
        'Page knows the total number of elements (does a count query); Slice only whether there is a next page',
        'Slice knows the total number of pages, and Page does not',
        'Page works only with NoSQL',
        'No difference',
      ],
    },
    {
      question: 'Why is keyset pagination preferred over OFFSET for large tables?',
      options: [
        'OFFSET makes the DB scan all skipped rows, while keyset filters by the key value',
        'OFFSET is not supported in PostgreSQL',
        'Keyset lets you jump to any page instantly',
        'Keyset requires no sorting',
      ],
    },
  ],
  'spring-security-basics': [
    {
      question: 'Where does Spring Security store the current user’s authentication result?',
      options: [
        'In the SecurityContext, accessed via SecurityContextHolder (usually through a ThreadLocal)',
        'In a global static application variable',
        'In a cookie on the client in plaintext',
        'In a database table on every request',
      ],
    },
    {
      question: 'How is Spring Security configured since version 5.7 (instead of WebSecurityConfigurerAdapter)?',
      options: [
        'By declaring a SecurityFilterChain bean and configuring HttpSecurity',
        'By extending WebSecurityConfigurerAdapter — it’s back',
        'By editing web.xml directly',
        'Via the @EnableAutoConfiguration annotation',
      ],
    },
  ],
  'jwt-stateless': [
    {
      question: 'What is the advantage of stateless authentication with JWT?',
      options: [
        'No server session — any instance can handle the request, making horizontal scaling easier',
        'The token cannot be stolen in principle',
        'No token signature is needed',
        'The user’s data is encrypted in the payload and inaccessible',
      ],
    },
    {
      question: 'Why have a short-lived access token and a separate refresh token?',
      options: [
        'So an access-token leak is not critical, while the refresh token lets you get a new one without logging in again',
        'To do away with signing entirely',
        'To store the user’s password in the token',
        'A refresh token speeds up signature verification',
      ],
    },
  ],
  'oauth2': [
    {
      question: 'What is OAuth2?',
      options: [
        'A delegated-authorization protocol: access to a user’s resources without sharing their password',
        'A signed token format made of three parts',
        'A password-hashing algorithm',
        'A way to encrypt a database',
      ],
    },
    {
      question: 'Why is the comparison “OAuth2 vs JWT” incorrect?',
      options: [
        'OAuth2 is a protocol for obtaining a token, while JWT is a token format; they work at different levels and often together',
        'Because JWT fully replaced OAuth2',
        'Because OAuth2 issues no tokens at all',
        'Because they are two names for the same standard',
      ],
    },
  ],
  'csrf-passwordencoder': [
    {
      question: 'When is it acceptable to disable CSRF protection?',
      options: [
        'For a stateless REST API with a token in the Authorization header',
        'Always, CSRF protection is not needed',
        'For applications with cookie sessions',
        'Only in production under load',
      ],
    },
    {
      question: 'How should you store user passwords correctly?',
      options: [
        'Hash them with an adaptive algorithm and a salt (BCrypt, Argon2)',
        'Encrypt reversibly and store the key nearby',
        'Store in plaintext for verification speed',
        'Encode in base64',
      ],
    },
  ],
  'spring-cloud-overview': [
    {
      question: 'What is Spring Cloud?',
      options: [
        'A set of projects on top of Spring Boot for common microservice-architecture tasks (discovery, config, gateway, resilience)',
        'Cloud hosting by the Spring company',
        'A replacement for Spring Boot for monoliths',
        'A library for working only with AWS',
      ],
    },
    {
      question: 'Which Spring Cloud component is responsible for fault tolerance (Circuit Breaker, Retry)?',
      options: ['Resilience4j', 'Eureka', 'Spring Cloud Config', 'Spring Cloud Gateway'],
    },
  ],
  'service-discovery-gateway': [
    {
      question: 'What problem does Service Discovery (Eureka) solve?',
      options: [
        'Finding services by name in a dynamic environment where addresses and instance counts change',
        'Centralized password storage',
        'Compressing messages between services',
        'Automatically generating SQL queries',
      ],
    },
    {
      question: 'What is an API Gateway (Spring Cloud Gateway) responsible for?',
      options: [
        'A single entry point: routing, authentication, rate limiting, CORS',
        'Storing the session state of all services',
        'Compiling Java code at runtime',
        'Backing up the database',
      ],
    },
  ],
};

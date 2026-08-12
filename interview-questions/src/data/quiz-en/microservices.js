// Английский перевод банка квиза: microservices. Порядок вариантов и опций — как в RU.
export const microservices = {
  'monolith-vs-microservices': [
    {
      question: 'How does a microservice architecture differ from a monolith?',
      options: [
        'The application is split into independent services with their own data, deployed and scaled separately',
        'Microservices are a monolith run in several instances',
        'Microservices are always simpler to operate than a monolith',
        'In microservices all the code lives in one process',
      ],
    },
    {
      question: 'Which drawback is characteristic of microservices compared with a monolith?',
      options: [
        'Distributed-system complexity: network latency, data consistency, harder debugging and infrastructure',
        'The impossibility of deploying services independently',
        'The mandatory use of a single programming language',
        'The impossibility of horizontal scaling',
      ],
    },
  ],
  'microservices-communication': [
    {
      question: 'What ways of microservice communication exist?',
      options: [
        'Synchronous (REST, gRPC) and asynchronous (message brokers: Kafka, RabbitMQ)',
        'Only direct in-memory method calls',
        'Only a shared database',
        'Only file exchange over FTP',
      ],
    },
    {
      question: 'What advantage does asynchronous communication via a message broker give?',
      options: [
        'Loose coupling: the sender doesn’t wait for the receiver, and a service’s temporary unavailability doesn’t break the chain',
        'An instant synchronous response to the sender',
        'A guaranteed absence of duplicates with no configuration',
        'Doing away with the need to serialize messages',
      ],
    },
  ],
  'microservices-patterns': [
    {
      question: 'What does the Circuit Breaker pattern do?',
      options: [
        'On repeated failures of a called service it “opens the circuit” and quickly returns an error/fallback without waiting for timeouts',
        'It distributes requests among a service’s instances',
        'It merges several requests into one',
        'It encrypts traffic between services',
      ],
    },
    {
      question: 'What is the API Gateway pattern for?',
      options: [
        'A single entry point for clients: routing, authentication, aggregation of several services’ responses',
        'Storing all microservices’ data in one place',
        'Automatically fixing bugs in services’ code',
        'Replacing all synchronous calls with asynchronous ones',
      ],
    },
    {
      question: 'Which pattern manages a distributed transaction via a sequence of local transactions with compensations?',
      options: ['Saga', 'Singleton', 'Decorator', 'Iterator'],
    },
  ],
  'kubernetes': [
    {
      question: 'What is a Pod in Kubernetes?',
      options: [
        'The minimal deployment unit — one or more containers sharing network and storage',
        'A physical server of the cluster',
        'A cluster configuration file',
        'An image-building tool',
      ],
    },
    {
      question: 'What is the Deployment object for in Kubernetes?',
      options: [
        'It declaratively manages a set of pod replicas: scaling, rolling updates, self-healing',
        'It stores the application’s secrets',
        'It provides DNS names for pods',
        'It limits a namespace’s resource consumption',
      ],
    },
  ],
  'service-boundaries': [
    {
      question: 'By what principle are microservice boundaries drawn?',
      options: [
        'By business capabilities and bounded context (DDD)',
        'By technical layers (controllers, services, repositories)',
        'By programming languages',
        'By the number of developers on the team',
      ],
    },
    {
      question: 'What is a “distributed monolith”?',
      options: [
        'Services split too finely that always deploy together — the downsides of microservices without the upsides',
        'A monolith deployed on several servers',
        'A microservice with its own database',
        'A service that uses a distributed cache',
      ],
    },
  ],
  'monolith-migration': [
    {
      question: 'Which pattern is recommended for migrating a monolith to microservices?',
      options: [
        'Strangler Fig — incrementally extracting features',
        'A big-bang rewrite of everything at once',
        'Singleton',
        'Copying the monolith onto several servers',
      ],
    },
    {
      question: 'Where does it make sense to start extracting services from a monolith?',
      options: [
        'With the least coupled and most valuable bounded contexts to separate',
        'With the most coupled core of the system',
        'With all modules at once',
        'With deleting the monolith’s database',
      ],
    },
  ],
  'sync-vs-async': [
    {
      question: 'What is the main downside of synchronous communication (REST/gRPC) between services?',
      options: [
        'Temporal coupling: the unavailability of a called service hits the caller, and a cascade of failures is possible',
        'The impossibility of returning a result',
        'The mandatory use of a message broker',
        'A complete absence of debugging',
      ],
    },
    {
      question: 'When is asynchronous communication via events preferable?',
      options: [
        'For decoupling services, event-driven integration, and smoothing load spikes',
        'When you need an immediate response to display data',
        'When strict instant consistency matters',
        'When services must always deploy together',
      ],
    },
  ],
  'loose-coupling': [
    {
      question: 'What characterises loose coupling of microservices?',
      options: [
        'Services can be changed and deployed independently, without coordinating releases',
        'Services use one shared database',
        'Services always call each other synchronously',
        'Services share common domain entities',
      ],
    },
    {
      question: 'What increases coupling between microservices?',
      options: [
        'Direct access to another’s DB and shared domain models between services',
        'Each service having its own DB',
        'Versioned API contracts',
        'Asynchronous events',
      ],
    },
  ],
  'database-per-service': [
    {
      question: 'What does the “database per service” pattern mean?',
      options: [
        'Each service has its own DB, accessible only to it; others go through the API/events',
        'All services work with one shared DB',
        'Each service keeps a copy of all the system’s data',
        'No database is used at all',
      ],
    },
    {
      question: 'Which tool helps atomically save data and publish an event?',
      options: [
        'Transactional Outbox',
        'A two-phase commit between services',
        'A shared ACID transaction across all services',
        'A synchronous REST call',
      ],
    },
  ],
  'ms-resilience': [
    {
      question: 'What is the Bulkhead pattern for in microservices?',
      options: [
        'To isolate resources (pools) so one call’s failure doesn’t consume all the application’s resources',
        'To speed up message serialization',
        'To store the application’s secrets',
        'To automatically scale pods',
      ],
    },
    {
      question: 'Which library in the Spring ecosystem provides Circuit Breaker, Retry, and Bulkhead?',
      options: ['Resilience4j', 'Hibernate', 'Lombok', 'Jackson'],
    },
  ],
  'ms-observability': [
    {
      question: 'What lets you assemble an end-to-end picture of one request across several services in the logs?',
      options: [
        'A correlation id propagated through all services',
        'A shared password for the services',
        'A shared database',
        'One common thread of execution',
      ],
    },
    {
      question: 'Which tool is used for distributed tracing?',
      options: ['Jaeger / Zipkin / OpenTelemetry', 'Prometheus', 'Kibana', 'Grafana'],
    },
  ],
  'ms-security': [
    {
      question: 'How is authentication usually implemented in microservices without a shared session?',
      options: [
        'Stateless tokens (JWT) in each request, often on top of OAuth2/OIDC',
        'A shared in-memory session of one service',
        'Storing the user’s password in each service',
        'A complete absence of authentication',
      ],
    },
    {
      question: 'Where should you correctly store secrets (DB passwords, keys) in microservices?',
      options: [
        'In a secrets manager (Vault, AWS Secrets Manager, K8s Secrets)',
        'In the code and the git repository',
        'In the application’s logs',
        'In the user’s JWT token',
      ],
    },
  ],
  'ms-cicd-testing': [
    {
      question: 'Why is contract testing especially important for microservices?',
      options: [
        'It checks the compatibility of a consumer’s and provider’s API without spinning up the whole system',
        'It fully replaces unit tests',
        'It tests only the UI',
        'It checks database performance',
      ],
    },
    {
      question: 'Which tests should be fewest in the microservices testing pyramid?',
      options: ['End-to-end', 'Unit tests', 'Integration', 'Contract'],
    },
  ],
  'api-gateway': [
    {
      question: 'Why is an API Gateway needed in a microservice system?',
      options: [
        'A single entry point: routing to services and cross-cutting concerns (auth, rate limiting, TLS, CORS)',
        'Storing the main business logic of all services in one place',
        'Replacing the database for all microservices',
        'Compiling and building services at deploy time',
      ],
    },
  ],
  'service-discovery': [
    {
      question: 'What does Service Discovery solve?',
      options: [
        'Lets services dynamically find each other\'s addresses via a registry, without hardcoded IPs',
        'Encrypts traffic between services',
        'Automatically writes unit tests for services',
        'Limits the number of requests per second',
      ],
    },
  ],
  'circuit-breaker': [
    {
      question: 'What does the Circuit Breaker pattern do?',
      options: [
        'Stops sending requests to a faulty dependency (fail fast), preventing a cascading failure',
        'Retries the request forever until the service responds',
        'Balances load across service instances',
        'Caches all of a service\'s responses forever',
      ],
    },
  ],
  'saga-pattern': [
    {
      question: 'How does the Saga pattern ensure consistency in a distributed transaction?',
      options: [
        'A sequence of local transactions with compensating actions on failure (eventual consistency)',
        'A single ACID transaction across all services via 2PC',
        'Locking all databases until the operation completes',
        'Forbidding data changes in more than one service entirely',
      ],
    },
  ],
  'cqrs': [
    {
      question: 'What is the essence of the CQRS pattern?',
      options: [
        'Separating the model into commands (write) and queries (read) with separate optimized models',
        'Merging reads and writes into one universal model',
        'Encrypting commands sent to a service',
        'A message queue between a producer and a consumer',
      ],
    },
  ],
};

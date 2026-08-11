// Английский перевод банка квиза: patterns. Порядок вариантов и опций — как в RU.
export const patterns = {
  'pattern-groups': [
    {
      question: 'Into which three groups are the GoF patterns divided?',
      options: [
        'Creational, structural, behavioural',
        'Client, server, network',
        'Synchronous, asynchronous, reactive',
        'Simple, medium, complex',
      ],
    },
    {
      question: 'Which group does Strategy belong to?',
      options: ['Behavioural', 'Creational', 'Structural', 'GoF architectural patterns'],
    },
  ],
  'singleton': [
    {
      question: 'What does the Singleton pattern guarantee?',
      options: [
        'A single instance of a class and a global access point to it',
        'Creating a new instance on each access',
        'The impossibility of creating any instance of the class',
        'Automatic serialization of the object',
      ],
    },
    {
      question: 'Which Singleton implementation is considered the simplest and most reliable (including protection from reflection and serialization)?',
      options: [
        'An enum with a single element',
        'A public static field without final',
        'Creating an instance per thread via ThreadLocal',
        'A global variable in a utility class',
      ],
    },
    {
      question: 'Why is the field marked volatile in a double-checked-locking Singleton?',
      options: [
        'To rule out visibility of a partially constructed object due to instruction reordering',
        'To speed up access to the field',
        'So the field is not serialized',
        'volatile is not needed in this implementation',
      ],
    },
  ],
  'factory-builder': [
    {
      question: 'What is the essence of the Factory Method pattern?',
      options: [
        'It defines an interface for creating an object, letting subclasses decide which class to instantiate',
        'It builds a complex object step by step via a chain of calls',
        'It guarantees a single instance of a class',
        'It converts one class’s interface into another’s',
      ],
    },
    {
      question: 'When should you use the Builder pattern?',
      options: [
        'When an object has many parameters (including optional ones) and its creation requires step-by-step configuration',
        'When you need to hide a class’s single instance',
        'When you need to intercept calls to an object’s methods',
        'When an object is created with no parameters at all',
      ],
    },
  ],
  'patterns-in-jdk': [
    {
      question: 'Which pattern do the java.io stream wrappers implement (e.g. new BufferedInputStream(new FileInputStream(...)))?',
      options: [
        'Decorator — it dynamically adds behaviour by wrapping an object',
        'Singleton',
        'Factory Method',
        'Observer',
      ],
    },
    {
      question: 'StringBuilder with a chain of append() is an example of which pattern?',
      options: [
        'Builder — step-by-step construction of a complex object',
        'Prototype',
        'Adapter',
        'Proxy',
      ],
    },
    {
      question: 'Which pattern underlies java.util.Iterator?',
      options: [
        'Iterator — sequential access to elements without exposing the internal structure',
        'Strategy',
        'Flyweight',
        'Chain of Responsibility',
      ],
    },
  ],
  'solid': [
    {
      question: 'What does the letter S in SOLID stand for?',
      options: [
        'Single Responsibility — a class should have one reason to change',
        'Separation — mandatory splitting of the app into layers',
        'Static — all dependencies must be static',
        'Stateless — classes must not hold state',
      ],
    },
    {
      question: 'What does the Open/Closed principle state?',
      options: [
        'Entities are open for extension but closed for modification',
        'All of a class’s fields must be private',
        'A class should be open for inheritance and closed for composition',
        'A method must be either public or private, with nothing in between',
      ],
    },
    {
      question: 'What does the Dependency Inversion principle describe?',
      options: [
        'High-level modules depend on abstractions, not on concrete implementations',
        'Dependencies are always injected only via the constructor',
        'The bean initialization order must be the reverse of the declaration order',
        'Every class must depend on at least two interfaces',
      ],
    },
  ],
  'dry-kiss-yagni': [
    {
      question: 'What does the DRY principle mean?',
      options: [
        'Don’t Repeat Yourself — don’t duplicate knowledge; each piece of logic has a single representation',
        'Do Repeat Yourself — duplicate code for reliability',
        'Deploy, Run, Yield — CI/CD stages',
        'Data Redundancy Yield — a data-replication principle',
      ],
    },
    {
      question: 'What does the YAGNI principle recommend?',
      options: [
        'Don’t implement functionality “for the future” until it’s actually needed',
        'Always build the most general solution in advance',
        'Use one tool for all tasks',
        'Write code without comments',
      ],
    },
  ],
  'ddd': [
    {
      question: 'What is a bounded context in DDD?',
      options: [
        'An explicit boundary within which the model and its terms are unambiguous',
        'A limit on the maximum number of classes in a module',
        'A Spring context with a limited set of beans',
        'A database transaction boundary',
      ],
    },
    {
      question: 'How does a Value Object differ from an Entity in DDD?',
      options: [
        'A Value Object is defined by its values and has no identity, while an Entity has an id',
        'A Value Object is always mutable, and an Entity immutable',
        'An Entity cannot be saved to a database, but a Value Object can',
        'No difference',
      ],
    },
  ],
  'architecture-styles': [
    {
      question: 'What is the key idea of hexagonal architecture (ports & adapters)?',
      options: [
        'The domain is at the centre, and external systems connect through ports and adapters; the domain doesn’t depend on infrastructure',
        'The application is split into exactly six layers',
        'All logic is concentrated in the data-access layer',
        'The database is the core of the system that the rest depends on',
      ],
    },
    {
      question: 'What does the “dependency rule” state in Clean Architecture?',
      options: [
        'Dependencies point only inward, toward the domain',
        'Dependencies point only outward, toward frameworks',
        'Layers can depend on each other in any direction',
        'The domain must depend on a concrete database',
      ],
    },
  ],
  'pattern-vs-antipattern': [
    {
      question: 'What is an anti-pattern?',
      options: [
        'A common solution that seems good but leads to negative consequences',
        'A pattern officially removed from the GoF catalogue',
        'Any pattern implemented without interfaces',
        'A pattern applicable only in functional programming',
      ],
    },
    {
      question: 'Which of the examples is an anti-pattern?',
      options: [
        'God Object — a class that knows and does everything',
        'Strategy — interchangeable algorithms',
        'Repository — a data-access abstraction',
        'Builder — step-by-step object construction',
      ],
    },
  ],
  'strategy-vs-state': [
    {
      question: 'What is the main difference between Strategy and State given their nearly identical structure?',
      options: [
        'Intent: in Strategy the client chooses the algorithm, in State the object switches behaviour on a state change',
        'Strategy uses inheritance, and State composition',
        'State works only in a single-threaded environment',
        'Strategy applies only to strings, State only to numbers',
      ],
    },
    {
      question: 'What does the Strategy pattern do?',
      options: [
        'It extracts a family of interchangeable algorithms behind a common interface, letting you choose them at runtime',
        'It guarantees a single instance of a class',
        'It builds a tree structure of objects',
        'It adds new behaviour to an object via a wrapper',
      ],
    },
  ],
  'decorator-proxy-composite': [
    {
      question: 'How does Decorator differ from Proxy?',
      options: [
        'Decorator adds behaviour to an object, while Proxy controls access to it without changing behaviour',
        'Decorator changes the object’s interface, and Proxy does not',
        'Proxies can be nested, and Decorators cannot',
        'No difference',
      ],
    },
    {
      question: 'Which pattern is used in the JDK when wrapping streams (BufferedInputStream over FileInputStream)?',
      options: ['Decorator', 'Singleton', 'Composite', 'Adapter'],
    },
    {
      question: 'Which pattern organises objects into a tree “part-whole” structure?',
      options: ['Composite', 'Proxy', 'Strategy', 'Observer'],
    },
  ],
  'observer': [
    {
      question: 'What does the Observer pattern do?',
      options: [
        'A subject automatically notifies subscribed observers about a change in its state',
        'It guarantees a single instance of a class in the application',
        'It converts an incompatible interface to the expected one',
        'It splits an algorithm into overridable steps',
      ],
    },
    {
      question: 'Which relationship does Observer implement?',
      options: [
        'One-to-many with loose coupling',
        'Many-to-many with tight coupling',
        'One-to-one via inheritance',
        'Part-whole as a tree',
      ],
    },
  ],
  'template-method-vs-strategy': [
    {
      question: 'What is the Template Method pattern based on?',
      options: [
        'On inheritance: the base class defines the algorithm’s skeleton, subclasses override individual steps',
        'On composition: the algorithm is extracted into a separate swappable object',
        'On a single instance of a class',
        'On converting interfaces',
      ],
    },
    {
      question: 'How does Template Method differ from Strategy?',
      options: [
        'Template Method varies steps via inheritance, Strategy swaps the algorithm via composition at runtime',
        'Template Method works only with collections',
        'Strategy fixes the algorithm’s structure in the parent class',
        'They are completely identical',
      ],
    },
  ],
  'adapter': [
    {
      question: 'What does the Adapter pattern do?',
      options: [
        'It converts an existing class’s interface into the interface the client expects',
        'It adds new behaviour to an object while keeping the interface',
        'It restricts object creation to a single instance',
        'It notifies subscribers about changes',
      ],
    },
    {
      question: 'How does Adapter differ from Decorator?',
      options: [
        'Adapter changes the interface without adding behaviour; Decorator keeps the interface but adds behaviour',
        'Adapter adds behaviour, and Decorator changes the interface',
        'Both change the interface the same way',
        'Adapter applies only to collections',
      ],
    },
  ],
  'saga': [
    {
      question: 'What is the SAGA pattern for?',
      options: [
        'To manage a distributed transaction between microservices via local transactions and compensations',
        'To cache query results in memory',
        'To guarantee a single instance of a service',
        'To compress messages in a queue',
      ],
    },
    {
      question: 'How is an already-executed step rolled back in SAGA when the next one fails?',
      options: [
        'A compensating operation is run that undoes the step’s effect',
        'A ROLLBACK of a shared ACID transaction is performed',
        'The whole system reboots',
        'The step stays applied — a rollback is impossible',
      ],
    },
    {
      question: 'How does orchestration differ from choreography in SAGA?',
      options: [
        'Orchestration has a central step coordinator; in choreography services react to events without a coordinator',
        'Choreography has a central coordinator, orchestration does not',
        'Orchestration doesn’t support compensations',
        'They are two names for the same approach',
      ],
    },
  ],
  'cqrs-event-sourcing': [
    {
      question: 'What does the CQRS pattern separate?',
      options: [
        'The command model (changing state) and the query model (reading)',
        'The client and server parts of the application',
        'Business logic and logging',
        'Synchronous and asynchronous data flows',
      ],
    },
    {
      question: 'How is state stored with Event Sourcing?',
      options: [
        'As an ordered sequence of events from which the current state is replayed',
        'Only as the current snapshot in one table',
        'As an SQL dump updated once a day',
        'In memory without persistence',
      ],
    },
  ],
  'circuit-breaker': [
    {
      question: 'In which state does a Circuit Breaker instantly reject calls without loading the failed service?',
      options: ['Open', 'Closed', 'Half-Open', 'Idle'],
    },
    {
      question: 'Why use exponential backoff with jitter for retries?',
      options: [
        'To increase the pause between retries and stop clients from retrying in sync',
        'To retry the request as often as possible',
        'To disable retries after the first error',
        'To encrypt repeated requests',
      ],
    },
    {
      question: 'Which operations is it safe to apply automatic Retry to?',
      options: [
        'Idempotent ones',
        'Any, including creating resources via POST',
        'Only reads from a cache',
        'Only writes to a log',
      ],
    },
  ],
  'idempotency': [
    {
      question: 'What is an idempotent operation?',
      options: [
        'Repeating it with the same parameters gives the same result with no extra side effects',
        'An operation that runs exactly once and fails on retry',
        'An operation available only to an administrator',
        'An operation performed within a single transaction',
      ],
    },
    {
      question: 'How do you make a POST request idempotent?',
      options: [
        'Use an idempotency key: the server stores the result under the key and returns it on a retry',
        'Replace POST with GET',
        'Disable resubmission on the client',
        'Run the POST only at night',
      ],
    },
  ],
};

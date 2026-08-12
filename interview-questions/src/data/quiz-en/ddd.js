// Английский перевод банка квиза: ddd. Порядок вариантов и опций — как в RU.
export const ddd = {
  'what-is-ddd': [
    {
      question: 'What does Domain-Driven Design emphasize?',
      options: [
        'The domain model worked out together with domain experts',
        'The choice of framework and the structure of technical layers',
        'Optimizing SQL queries and database indexes',
        'Reaching at least 80% unit-test coverage',
      ],
    },
  ],
  'ddd-problems': [
    {
      question: 'Which problem does DDD primarily solve?',
      options: [
        'The gap between the language of the business and the code, and unmanaged domain complexity',
        'Slow project builds and long application startup',
        'A shortage of RAM for the cache',
        'The lack of automatic code formatting',
      ],
    },
  ],
  'ubiquitous-language': [
    {
      question: 'What is the Ubiquitous Language?',
      options: [
        'A shared language of domain terms spoken by business and developers and reflected in the code',
        'The programming language the whole project is written in',
        'A message format exchanged between microservices',
        'A universal DSL for describing SQL queries',
      ],
    },
  ],
  'bounded-context': [
    {
      question: 'What is a Bounded Context?',
      options: [
        'A boundary within which a model and its language are unambiguous and consistent',
        'A thread pool that caps the number of concurrent requests',
        'A database transaction with a fixed timeout',
        'A memory limit for a container in Kubernetes',
      ],
    },
  ],
  'identify-bounded-contexts': [
    {
      question: 'Which sign most strongly indicates a boundary between Bounded Contexts?',
      options: [
        'The same term means different things in different parts of the system',
        'Different modules use different versions of the same library',
        'The parts are written by different teams in the same language',
        'There is duplicated formatting and style in the code',
      ],
    },
  ],
  'same-term-different-context': [
    {
      question: 'Can the term "Customer" mean different things in the Sales and Support contexts?',
      options: [
        'Yes, that is the norm: each context has its own Customer model, linked only by an identifier',
        'No, a term must have a single meaning across the whole system',
        'Yes, but only if the contexts live in different databases',
        'No, different meanings always indicate a modeling mistake',
      ],
    },
  ],
  'entity': [
    {
      question: 'What determines the equality of two Entities?',
      options: [
        'The equality of their identifiers, not of their field values',
        'The equality of all the object\'s fields',
        'Reference equality in memory (==)',
        'Matching hash codes of the string representation',
      ],
    },
  ],
  'value-object': [
    {
      question: 'What is characteristic of a Value Object?',
      options: [
        'It has no identity; equality is by the value of all fields',
        'It has a unique ID that persists over time',
        'It is always mutable and stores a change history',
        'It exists only inside the database as a row',
      ],
    },
  ],
  'entity-vs-value-object': [
    {
      question: 'What is the key difference between an Entity and a Value Object?',
      options: [
        'An Entity has identity and is compared by ID; a Value Object is compared by value',
        'An Entity is immutable while a Value Object is mutable',
        'An Entity is stored in the cache and a Value Object in the database',
        'There is no difference; they are synonyms',
      ],
    },
  ],
  'value-object-immutable': [
    {
      question: 'Why are Value Objects usually made immutable?',
      options: [
        'So they can be shared safely and their invariants cannot be broken after creation',
        'To speed up JSON serialization',
        'To force storing them in a separate table',
        'To give them a unique identifier',
      ],
    },
  ],
  'aggregate': [
    {
      question: 'What is an Aggregate in DDD?',
      options: [
        'A cluster of objects treated as a single consistency and transaction boundary',
        'A data-aggregation function in SQL (SUM, COUNT)',
        'A database connection pool',
        'A caching layer between the service and the DB',
      ],
    },
  ],
  'aggregate-root': [
    {
      question: 'What is the role of the Aggregate Root?',
      options: [
        'The single entry point to the aggregate that guarantees its invariants',
        'The root class of the whole application inheritance hierarchy',
        'The primary node of the database cluster',
        'The first row in a table with id = 1',
      ],
    },
  ],
  'aggregate-boundaries-why': [
    {
      question: 'Why do we need aggregate boundaries?',
      options: [
        'To define what is consistent atomically in one transaction and what only eventually',
        'To cap the maximum size of a table in the DB',
        'To set an HTTP timeout for calls between services',
        'To separate the frontend from the backend',
      ],
    },
  ],
  'choose-aggregate-boundaries': [
    {
      question: 'What should guide the choice of aggregate boundaries?',
      options: [
        'Invariants and consistency requirements; aggregates should be kept small',
        'The database table structure one-to-one',
        'The layout of user-interface screens',
        'A desire to put all related objects into one large aggregate',
      ],
    },
  ],
  'invariant': [
    {
      question: 'What is an invariant in DDD?',
      options: [
        'A business rule that must be true at all times between operations',
        'A variable whose value does not change inside a loop',
        'A compile-time constant',
        'A source-code formatting rule',
      ],
    },
  ],
  'protect-invariants': [
    {
      question: 'Why are invariants protected inside an aggregate?',
      options: [
        'So they cannot be broken by bypassing the model and the checks are not smeared across services',
        'To speed up reading data from the database',
        'To reduce the size of the JAR file',
        'To auto-generate database migrations',
      ],
    },
  ],
  'reference-aggregate-root': [
    {
      question: 'Why should external objects reference only the aggregate root?',
      options: [
        'Otherwise changing inner objects directly would bypass the root\'s invariant checks',
        'Otherwise the sort order in a collection would break',
        'Otherwise the object could not be serialized',
        'Otherwise the garbage collector would use more memory',
      ],
    },
  ],
  'bounded-context-communication': [
    {
      question: 'How do Bounded Contexts usually communicate?',
      options: [
        'Through explicit Context Map relationships: REST/gRPC or events, with translation at the boundaries',
        'Through a shared mutable static object in memory',
        'Through direct references to each other\'s inner entities',
        'Only through a shared table in a single database',
      ],
    },
  ],
  'anti-corruption-layer': [
    {
      question: 'What is an Anti-Corruption Layer (ACL)?',
      options: [
        'A translation layer that converts a foreign model into your terms and shields yours from leaks',
        'An access-control list of resource permissions',
        'A mechanism for encrypting traffic between services',
        'An input-validation filter for user data',
      ],
    },
  ],
  'shared-model-danger': [
    {
      question: 'Why is a shared domain model used by several services dangerous?',
      options: [
        'It creates hidden coupling: a model change forces everyone to change and redeploy',
        'It always runs faster but uses more memory',
        'It makes using a database impossible',
        'It automatically breaks API backward compatibility for the client',
      ],
    },
  ],
  'domain-events': [
    {
      question: 'What is a Domain Event?',
      options: [
        'An immutable object recording a business-significant fact that already happened (in past tense)',
        'A command telling an aggregate to change its state',
        'An exception thrown when an invariant is violated',
        'A query to read data from the aggregate',
      ],
    },
  ],
};

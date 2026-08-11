// Английский перевод банка квиза: hibernate. Порядок вариантов и опций — как в RU.
export const hibernate = {
  'what-is-orm': [
    {
      question: 'What is ORM?',
      options: [
        'A technology for mapping a programming language’s objects to relational-database tables',
        'A database-replication protocol',
        'A format for storing binary data',
        'A DB-schema migration tool',
      ],
    },
    {
      question: 'How are JPA and Hibernate related?',
      options: [
        'JPA is a specification (standard), Hibernate is a popular implementation of it',
        'Hibernate is the specification, JPA the implementation',
        'They are competing, incompatible technologies',
        'JPA is a new version of Hibernate',
      ],
    },
  ],
  'entity-states': [
    {
      question: 'Which states can an entity have in Hibernate?',
      options: [
        'Transient (new), Persistent (managed), Detached, Removed',
        'Open, Closed, Pending, Locked',
        'Created, Compiled, Deployed, Destroyed',
        'Active, Passive, Standby',
      ],
    },
    {
      question: 'In which state is an entity loaded in an open Hibernate session?',
      options: [
        'Persistent — changes are tracked and synchronised with the DB',
        'Transient — the object is not linked to the DB',
        'Detached — the object is detached from the session',
        'Removed — the object is marked for deletion',
      ],
    },
  ],
  'lazy-eager': [
    {
      question: 'How does lazy loading (LAZY) differ from eager (EAGER)?',
      options: [
        'LAZY loads related data on first access to it; EAGER loads it immediately with the parent object',
        'EAGER loads data on access, LAZY immediately',
        'LAZY works only with primitive fields',
        'The difference is only in the annotation syntax',
      ],
    },
    {
      question: 'When does a LazyInitializationException occur?',
      options: [
        'On access to a lazily loaded association outside an open session/transaction',
        'When loading too much data',
        'On double initialization of one field',
        'When using EAGER loading',
      ],
    },
  ],
  'n-plus-one': [
    {
      question: 'What is the N+1 queries problem?',
      options: [
        'One query loads N parent records, then a separate query runs for each one’s associations — N+1 in total',
        'A query returns one row more than needed',
        'The database runs the query N+1 times because of retries',
        'The application opens N+1 connections to the DB',
      ],
    },
    {
      question: 'How do you solve the N+1 problem in Hibernate?',
      options: [
        'JOIN FETCH in JPQL, EntityGraph, or @BatchSize',
        'Increase the connection pool',
        'Switch all associations to EAGER — that always eliminates N+1',
        'Disable the first-level cache',
      ],
    },
  ],
  'hibernate-caches': [
    {
      question: 'What is the first-level cache in Hibernate?',
      options: [
        'A cache inside the session: re-reading the same entity in one session doesn’t hit the DB; always on',
        'An application-wide shared cache that requires configuration',
        'A cache of arbitrary SQL-query results',
        'A cache on the database side',
      ],
    },
    {
      question: 'How does the second-level cache differ from the first?',
      options: [
        'The 2nd-level cache is shared across all sessions (SessionFactory level) and is enabled separately; the 1st is tied to the session and always on',
        'The 2nd-level cache is faster and enabled by default',
        'The 1st-level cache is stored on disk, the 2nd in memory',
        'No difference — it’s one cache with two names',
      ],
    },
  ],
  'hibernate-vs-jdbc': [
    {
      question: 'What is Hibernate’s main advantage over plain JDBC?',
      options: [
        'Automatic mapping of objects to tables, SQL generation, and change management instead of manual code',
        'Guaranteed higher speed for any queries',
        'Doing away with SQL under the hood entirely',
        'The impossibility of writing native queries',
      ],
    },
    {
      question: 'What drawback does Hibernate have compared with JDBC?',
      options: [
        'Hidden complexity (N+1, lazy loading, auto-flush) and overhead on heavy queries',
        'No transaction support',
        'The impossibility of working with relational DBs',
        'Mandatory storage of data only in NoSQL',
      ],
    },
  ],
  'session-vs-sessionfactory': [
    {
      question: 'What is true about SessionFactory?',
      options: [
        'A heavy thread-safe object, one per application, a factory of sessions',
        'A lightweight per-request object, not thread-safe',
        'It holds the first-level Persistence Context',
        'It is recreated for each transaction',
      ],
    },
    {
      question: 'What do Session and SessionFactory correspond to in JPA terms?',
      options: [
        'EntityManager and EntityManagerFactory',
        'Repository and CrudRepository',
        'DataSource and Connection',
        'Transaction and TransactionManager',
      ],
    },
  ],
  'persist-merge-save': [
    {
      question: 'What does merge() do with a detached object?',
      options: [
        'It copies its state into a managed instance and returns the managed copy (the object itself stays detached)',
        'It makes the passed object managed and returns the same object',
        'It immediately deletes the object from the DB',
        'It does nothing if the object is detached',
      ],
    },
    {
      question: 'Which method is usually used in JPA for a new (transient) entity?',
      options: ['persist()', 'merge()', 'update()', 'refresh()'],
    },
  ],
  'flush-commit': [
    {
      question: 'What is the difference between flush() and commit()?',
      options: [
        'flush() synchronises changes with the DB within the transaction without ending it; commit() finalises the transaction',
        'flush() ends the transaction, and commit() only prepares SQL',
        'They are synonyms',
        'commit() works only in NoSQL',
      ],
    },
    {
      question: 'What is dirty checking in Hibernate?',
      options: [
        'On flush, Hibernate itself compares managed entities’ state with a snapshot and generates UPDATE for the changed ones',
        'Checking access rights to entities',
        'Validating fields before saving via annotations',
        'Clearing the second-level cache on a schedule',
      ],
    },
  ],
  'hql-vs-criteria': [
    {
      question: 'How does HQL/JPQL differ from the Criteria API?',
      options: [
        'HQL is a string SQL-like language over entities; Criteria is programmatic, type-safe query building',
        'HQL works with tables, Criteria with entities',
        'Criteria is a string language, and HQL a programmatic API',
        'No difference',
      ],
    },
    {
      question: 'Which is more convenient for dynamically built queries (the set of filters is unknown in advance)?',
      options: ['The Criteria API', 'HQL as a string', 'Named queries @NamedQuery', 'Native SQL always'],
    },
  ],
  'mappedby-joincolumn': [
    {
      question: 'Where is mappedBy placed in a bidirectional association?',
      options: [
        'On the inverse side; the side with @JoinColumn is the owner of the association',
        'On the association owner together with the foreign key',
        'On both sides at once',
        'mappedBy is unrelated to the association’s direction',
      ],
    },
    {
      question: 'Why might a change to only the inverse side of an association not be saved to the DB?',
      options: [
        'The owner (owning side) is responsible for the foreign key, so it must be updated',
        'Because the inverse side is always LAZY',
        'Because mappedBy disables saving entirely',
        'Because Hibernate doesn’t support bidirectional associations',
      ],
    },
  ],
  'manytomany-intermediate': [
    {
      question: 'When do you need a separate intermediate entity instead of @ManyToMany?',
      options: [
        'When the association has its own attributes (quantity, price, date, role)',
        'When the join table contains only two foreign keys',
        'When both entities are in the same table',
        '@ManyToMany cannot be replaced by an entity',
      ],
    },
    {
      question: 'What do you replace @ManyToMany with when there is an intermediate entity?',
      options: [
        'Two @OneToMany/@ManyToOne associations through the intermediate entity',
        'A single @OneToOne association',
        'The @ElementCollection annotation',
        'Entity inheritance',
      ],
    },
  ],
  'element-collection': [
    {
      question: 'What does @ElementCollection map?',
      options: [
        'A collection of non-entities (primitives, strings, @Embeddable) into a separate table without creating an entity',
        'A many-to-many association between two entities',
        'A second-level cache for collections',
        'A named query returning a list',
      ],
    },
    {
      question: 'What is special about @ElementCollection elements?',
      options: [
        'They have no identity of their own; their lifecycle fully depends on the owner',
        'They have their own primary key and can be referenced from outside',
        'They are always loaded EAGER and cached',
        'They are stored in the same table as the owner',
      ],
    },
  ],
};

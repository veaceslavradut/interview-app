// Английский перевод банка квиза: databases. Порядок вариантов и опций — как в RU.
export const databases = {
  'acid': [
    {
      question: 'What does the acronym ACID stand for?',
      options: [
        'Atomicity, Consistency, Isolation, Durability — transaction properties',
        'Access, Control, Identity, Data — DB access rules',
        'Aggregation, Composition, Inheritance, Dependency — kinds of relationships',
        'Availability, Capacity, Integrity, Distribution — cluster properties',
      ],
    },
    {
      question: 'What does the atomicity of a transaction guarantee?',
      options: [
        'The transaction executes fully or not at all (“all or nothing”)',
        'The transaction runs in under one second',
        'Different users’ transactions don’t see each other',
        'The transaction’s result survives a power failure',
      ],
    },
  ],
  'isolation-levels': [
    {
      question: 'Order the isolation levels from weakest to strictest:',
      options: [
        'READ UNCOMMITTED → READ COMMITTED → REPEATABLE READ → SERIALIZABLE',
        'SERIALIZABLE → REPEATABLE READ → READ COMMITTED → READ UNCOMMITTED',
        'READ COMMITTED → READ UNCOMMITTED → SERIALIZABLE → REPEATABLE READ',
        'All isolation levels are equivalent',
      ],
    },
    {
      question: 'What is a dirty read?',
      options: [
        'Reading another transaction’s changes that aren’t committed yet (and may be rolled back)',
        'Reading data from a corrupted DB file',
        'Reading rows without specifying a column list',
        'A repeated read that returned the same data',
      ],
    },
  ],
  'indexes': [
    {
      question: 'What are indexes for in a database?',
      options: [
        'They speed up searching and selecting data via an extra structure (usually a B-tree)',
        'They compress table data to save disk',
        'They guarantee foreign-key integrity',
        'They automatically back up data',
      ],
    },
    {
      question: 'What drawback do indexes have?',
      options: [
        'They slow down insert/update/delete and take extra space',
        'They make full-text search impossible',
        'They forbid transactions on indexed tables',
        'There are no drawbacks — the more indexes the better',
      ],
    },
  ],
  'normalization': [
    {
      question: 'What is database normalization?',
      options: [
        'Organizing data to eliminate redundancy and anomalies by bringing it to normal forms',
        'Compressing tables to speed up reads',
        'Converting all column names to lowercase',
        'Creating scheduled backups',
      ],
    },
    {
      question: 'When is denormalization deliberately applied?',
      options: [
        'To speed up reads by duplicating data, when JOINs become too expensive',
        'When you need to save disk space',
        'When a table has fewer than 100 rows',
        'Denormalization is always a design mistake',
      ],
    },
  ],
  'sql-nosql': [
    {
      question: 'How do SQL databases fundamentally differ from NoSQL?',
      options: [
        'SQL is relational with a strict schema and ACID; NoSQL has a flexible schema, horizontal scaling, often BASE',
        'NoSQL databases can’t store data persistently',
        'SQL databases run on one server only and don’t support replication',
        'NoSQL is just a new syntax of the SQL language',
      ],
    },
    {
      question: 'Which of the listed databases is a document NoSQL one?',
      options: ['MongoDB', 'PostgreSQL', 'MySQL', 'Oracle Database'],
    },
  ],
};

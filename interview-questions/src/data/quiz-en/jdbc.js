// Английский перевод банка квиза: jdbc. Порядок вариантов и опций — как в RU.
export const jdbc = {
  'what-is-jdbc': [
    {
      question: 'What is JDBC?',
      options: [
        'A standard Java API for connecting to databases and running SQL queries',
        'A database built into the JVM',
        'A data-storage format in Java applications',
        'A framework for object-relational mapping',
      ],
    },
    {
      question: 'Which main interfaces are part of the JDBC API?',
      options: [
        'Connection, Statement, PreparedStatement, ResultSet',
        'Session, Transaction, Query, Criteria',
        'EntityManager, Repository, DataSource, Entity',
        'Socket, Channel, Buffer, Selector',
      ],
    },
  ],
  'statement-preparedstatement': [
    {
      question: 'Why is PreparedStatement better than Statement?',
      options: [
        'It is precompiled, supports parameters, and protects against SQL injection',
        'It can run several different SQL commands in one call',
        'It needs no open DB connection',
        'It caches all query results forever automatically',
      ],
    },
    {
      question: 'How does PreparedStatement protect against SQL injection?',
      options: [
        'Parameters are passed separately from the query text and aren’t interpreted as SQL code',
        'It forbids running any queries with parameters',
        'It encrypts the query text before sending',
        'It checks parameters against a blacklist of words',
      ],
    },
  ],
  'jdbc-transactions': [
    {
      question: 'How do you manage transactions manually in JDBC?',
      options: [
        'Disable auto-commit: connection.setAutoCommit(false), then commit() or rollback()',
        'Call connection.beginTransaction()',
        'Use the synchronized keyword',
        'Transactions are impossible in JDBC',
      ],
    },
    {
      question: 'What happens by default with each SQL query in JDBC?',
      options: [
        'Auto-commit is on — each query is committed as a separate transaction',
        'All queries accumulate until an explicit commit()',
        'Queries run without transactions at all',
        'Each query is automatically rolled back',
      ],
    },
  ],
  'connection-pool': [
    {
      question: 'What is a connection pool for?',
      options: [
        'Creating a connection is expensive — a pool reuses open connections, improving performance',
        'A pool encrypts traffic between the app and the DB',
        'A pool merges several DBs into one',
        'A pool automatically optimizes SQL queries',
      ],
    },
    {
      question: 'Which library is a popular connection pool (the default in Spring Boot)?',
      options: ['HikariCP', 'Log4j', 'Jackson', 'JUnit'],
    },
  ],
};

// Английский перевод банка квиза: sql. Порядок вариантов и опций — как в RU.
export const sql = {
  'joins': [
    {
      question: 'What does a LEFT JOIN return?',
      options: [
        'All rows from the left table and matching rows from the right (non-matching → NULL)',
        'Only rows matched in both tables',
        'All rows from the right table and matching rows from the left',
        'The Cartesian product of the two tables',
      ],
    },
    {
      question: 'Which JOIN returns only rows that have matches in both tables?',
      options: ['INNER JOIN', 'LEFT JOIN', 'FULL OUTER JOIN', 'CROSS JOIN'],
    },
  ],
  'group-by-having': [
    {
      question: 'How does HAVING differ from WHERE?',
      options: [
        'WHERE filters rows before grouping; HAVING filters groups after GROUP BY (can use aggregates)',
        'HAVING filters rows before grouping, WHERE after',
        'WHERE applies only to numeric columns',
        'They are interchangeable keywords',
      ],
    },
    {
      question: 'Where can you use the aggregate function COUNT(*) in a filter condition?',
      options: [
        'In HAVING — after grouping',
        'In WHERE — before grouping',
        'In ORDER BY — when sorting',
        'Aggregates cannot be used in conditions',
      ],
    },
  ],
  'window-functions': [
    {
      question: 'What are window functions?',
      options: [
        'Functions with OVER() that compute over a set of rows without collapsing them into one (ROW_NUMBER, RANK, SUM OVER)',
        'Functions that open a new DB-connection window',
        'Functions available only in graphical DB clients',
        'A synonym for aggregate functions with GROUP BY',
      ],
    },
    {
      question: 'How does RANK() differ from ROW_NUMBER()?',
      options: [
        'RANK gives equal values the same rank and skips the next ones; ROW_NUMBER gives each row a unique number',
        'ROW_NUMBER works only with numbers',
        'RANK sorts the rows, and ROW_NUMBER does not',
        'No difference — they are synonyms',
      ],
    },
  ],
  'subqueries-cte': [
    {
      question: 'What is a CTE (Common Table Expression)?',
      options: [
        'A named temporary query result declared via WITH, improving readability and supporting recursion',
        'A permanent table created for caching',
        'An index created for the duration of a query',
        'A way to join several databases',
      ],
    },
    {
      question: 'What task does a recursive CTE solve?',
      options: [
        'Traversing hierarchical data, e.g. an employee-manager tree',
        'Speeding up full-text search',
        'Automatically creating indexes',
        'Encrypting data in a table',
      ],
    },
  ],
  'sql-sublanguages': [
    {
      question: 'Which SQL sublanguage do CREATE, ALTER, DROP belong to?',
      options: [
        'DDL (Data Definition Language)',
        'DML (Data Manipulation Language)',
        'DCL (Data Control Language)',
        'TCL (Transaction Control Language)',
      ],
    },
    {
      question: 'Which commands belong to TCL?',
      options: [
        'COMMIT, ROLLBACK, SAVEPOINT',
        'SELECT, INSERT, UPDATE',
        'GRANT, REVOKE',
        'CREATE, ALTER, DROP',
      ],
    },
  ],
  'delete-vs-truncate': [
    {
      question: 'How does TRUNCATE differ from DELETE?',
      options: [
        'It removes all rows at once, is faster, doesn’t fire DELETE triggers, and usually resets auto-increment',
        'It removes rows one by one with a WHERE condition',
        'It is always transactional in every DBMS',
        'It fires triggers per row',
      ],
    },
    {
      question: 'What do you choose to remove only some rows with the ability to roll back?',
      options: ['DELETE ... WHERE', 'TRUNCATE', 'DROP', 'ALTER TABLE'],
    },
  ],
  'self-join': [
    {
      question: 'What is a SELF JOIN?',
      options: [
        'Joining a table to itself (with different aliases)',
        'Joining two different tables by a foreign key',
        'Joining a table to a subquery',
        'Automatically joining all tables in the schema',
      ],
    },
    {
      question: 'What is a SELF JOIN typically used for?',
      options: [
        'For hierarchies within one table (e.g. employee → manager)',
        'For full-text search',
        'For encrypting columns',
        'For creating indexes',
      ],
    },
  ],
  'join-vs-subquery': [
    {
      question: 'When is a JOIN usually preferable to a subquery?',
      options: [
        'When the result needs columns from several tables',
        'When you only need to check whether a row exists',
        'When you don’t need columns from the second table',
        'When filtering by an aggregate',
      ],
    },
    {
      question: 'Why can a correlated subquery be slow?',
      options: [
        'It runs for each row of the outer query',
        'It always scans all tables in the schema',
        'It locks the whole table',
        'It never uses indexes',
      ],
    },
  ],
  'sql-indexes': [
    {
      question: 'Which index type is used by default in most DBMSs?',
      options: ['B-Tree', 'Hash', 'Bitmap', 'GIN'],
    },
    {
      question: 'What is the main cost of having indexes?',
      options: [
        'Slower write operations (INSERT/UPDATE/DELETE) and disk-space usage',
        'Slower read operations',
        'Loss of data integrity',
        'The inability to use transactions',
      ],
    },
  ],
  'composite-covering-index': [
    {
      question: 'A composite index (user_id, status) will speed up the query…',
      options: [
        'WHERE user_id = ? (and WHERE user_id = ? AND status = ?)',
        'WHERE status = ? by status alone',
        'Any query to the table',
        'Only queries with ORDER BY status',
      ],
    },
    {
      question: 'What is a covering index?',
      options: [
        'An index containing all columns the query needs — the answer comes straight from the index without touching the table',
        'An index covering all of a table’s columns',
        'An index that rebuilds automatically',
        'An index on encrypted data',
      ],
    },
  ],
  'index-pitfalls': [
    {
      question: 'Why might a DBMS choose a Seq Scan even when an index exists?',
      options: [
        'When the query returns a large fraction of the table — reading everything sequentially is cheaper',
        'The index is always ignored by the optimizer',
        'Seq Scan works only without indexes',
        'Because the index is corrupted',
      ],
    },
    {
      question: 'On which column is an index almost useless?',
      options: [
        'One with low selectivity (few unique values, e.g. “gender”)',
        'On a primary key',
        'On a unique email',
        'On a creation-date column',
      ],
    },
  ],
  'explain-plan': [
    {
      question: 'How does EXPLAIN ANALYZE differ from a plain EXPLAIN?',
      options: [
        'It actually runs the query and shows the real time and row count',
        'It only estimates the plan without running the query',
        'It creates missing indexes',
        'It optimizes the query automatically',
      ],
    },
    {
      question: 'What in an execution plan usually signals a problem on a large table?',
      options: [
        'A Seq Scan where an index was expected, and a big gap between estimated and actual rows',
        'Using the primary-key index',
        'The presence of an in-memory sort step',
        'Any JOIN between tables',
      ],
    },
  ],
  'join-algorithms': [
    {
      question: 'Which join algorithm is efficient for two large tables on equality without indexes?',
      options: ['Hash Join', 'Nested Loop Join', 'Merge Join', 'Cross Join'],
    },
    {
      question: 'When is a Nested Loop Join advantageous?',
      options: [
        'When one table is small or there is an index on the inner table',
        'When both tables are very large and without indexes',
        'When the data is already sorted by the key',
        'Always, regardless of the data',
      ],
    },
  ],
  'sql-locks': [
    {
      question: 'How is optimistic locking implemented in JPA/Hibernate?',
      options: [
        'Via a version column annotated @Version, checked on UPDATE',
        'Via SELECT ... FOR UPDATE for the whole transaction',
        'Via locking the entire table',
        'Via disabling transactions',
      ],
    },
    {
      question: 'When is optimistic locking preferable to pessimistic?',
      options: [
        'When conflicts over the same data are rare — better for scalability',
        'When there is frequent concurrent contention over the same rows',
        'When you always need to lock a row on read',
        'When transactions are not used',
      ],
    },
  ],
};

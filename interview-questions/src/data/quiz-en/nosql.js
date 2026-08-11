// Английский перевод банка квиза: nosql. Порядок вариантов и опций — как в RU.
export const nosql = {
  'what-is-nosql': [
    {
      question: 'What is NoSQL?',
      options: [
        'A family of non-relational DBs with a flexible schema and good horizontal scaling that sacrifice some ACID guarantees for performance',
        'An extension of the SQL standard for writing stored procedures',
        'A relational DBMS without transaction support',
        'A query language that replaces SQL in PostgreSQL',
      ],
    },
    {
      question: 'Which NoSQL DB type best suits a cache and session storage?',
      options: [
        'Key-value (e.g. Redis)',
        'Graph (e.g. Neo4j)',
        'Wide-column (e.g. Cassandra)',
        'Document (e.g. MongoDB)',
      ],
    },
    {
      question: 'Which NoSQL DB stores data as JSON-like documents?',
      options: [
        'Document (e.g. MongoDB)',
        'Key-value (e.g. Redis)',
        'Graph (e.g. Neo4j)',
        'Columnar (e.g. Cassandra)',
      ],
    },
  ],
  'nosql-vs-sql': [
    {
      question: 'When is SQL usually preferable to NoSQL?',
      options: [
        'When you need strict transactions, integrity, and complex JOIN queries (e.g. finance)',
        'When the data schema changes constantly and is unknown in advance',
        'When you need maximum write speed with simple key-based queries',
        'When data must be stored as nested JSON documents',
      ],
    },
    {
      question: 'Why is a document DB more convenient than SQL for a service with arbitrary user fields?',
      options: [
        'A flexible schema: a new field is just a key in the document, no ALTER TABLE needed',
        'A document DB guarantees stricter ACID transactions than SQL',
        'JOINs between collections work faster in a document DB than in SQL',
        'A document DB completely eliminates data duplication',
      ],
    },
  ],
  'scaling-horizontal-vertical': [
    {
      question: 'What is horizontal scaling (scale out)?',
      options: [
        'Adding new machines and distributing data and load across them',
        'Increasing CPU and RAM on one machine',
        'Reducing the number of replicas to save memory',
        'Moving the database to a faster disk',
      ],
    },
    {
      question: 'What is the main drawback of vertical scaling (scale up)?',
      options: [
        'It hits a hardware ceiling and leaves a single point of failure',
        'It requires mandatory data sharding',
        'It is impossible without switching to NoSQL',
        'It always leads to data inconsistency',
      ],
    },
  ],
  'cap-theorem': [
    {
      question: 'What does the CAP theorem state?',
      options: [
        'A distributed system cannot simultaneously guarantee consistency, availability, and partition tolerance',
        'Every DB must support all ACID properties',
        'Reads are always faster than writes in distributed systems',
        'The number of replicas must be odd',
      ],
    },
    {
      question: 'Between which two properties does a distributed system actually choose during a network partition?',
      options: [
        'Between consistency (C) and availability (A), since partition tolerance (P) is mandatory',
        'Between availability (A) and partition tolerance (P), since consistency (C) is mandatory',
        'Between consistency (C) and partition tolerance (P), since availability (A) is mandatory',
        'No property has to be sacrificed',
      ],
    },
    {
      question: 'How are systems that sacrifice strong consistency for availability during a partition classified?',
      options: [
        'AP (e.g. Cassandra, DynamoDB)',
        'CP (e.g. MongoDB, HBase)',
        'ACID',
        'CA without partition tolerance',
      ],
    },
  ],
  'consistency-models': [
    {
      question: 'What is characteristic of eventual consistency?',
      options: [
        'Replicas converge to one value over time; right after a write a read may return the old value',
        'Any read from any node immediately returns the latest write',
        'A write is impossible until all replicas confirm the change',
        'Data is never reconciled between replicas',
      ],
    },
    {
      question: 'Which model guarantees a user always sees their own writes?',
      options: ['Read-your-writes', 'Monotonic reads', 'Eventual consistency', 'Causal consistency'],
    },
  ],
  'network-partition': [
    {
      question: 'What is a system forced to do during a network partition?',
      options: [
        'Choose between consistency and availability — it cannot reconcile data between the separated nodes',
        'Immediately stop all nodes until the connection is restored',
        'Automatically merge all replicas into one',
        'Switch from strong consistency to ACID transactions',
      ],
    },
    {
      question: 'How can you resolve write conflicts after the connection is restored in an AP system?',
      options: [
        'Last-write-wins, vector clocks, or CRDTs',
        'Rolling the whole database back to the last backup',
        'Fully blocking writes forever',
        'Switching the DB to read-only mode',
      ],
    },
  ],
  'sharding': [
    {
      question: 'What is sharding (partitioning)?',
      options: [
        'Horizontally splitting data into parts placed on different nodes',
        'Creating a backup of the database',
        'Merging several tables into one via JOIN',
        'Caching frequent queries in memory',
      ],
    },
    {
      question: 'What is a hot partition (hot shard)?',
      options: [
        'A shard that receives disproportionately many requests due to a poor shard key',
        'A shard physically placed on the fastest disk',
        'A replica that always responds first',
        'A shard that stores only indexes',
      ],
    },
    {
      question: 'What property should a good shard key have?',
      options: [
        'Ensuring an even distribution of data and load across shards',
        'Always being monotonically increasing (e.g. the current date)',
        'Matching the primary key in all collections',
        'Being as short as possible',
      ],
    },
  ],
  'nosql-indexes': [
    {
      question: 'What happens to a query if there is no suitable index for it?',
      options: [
        'A full scan is performed — scanning the entire collection',
        'The query fails with an error',
        'An empty result is returned',
        'An index is created automatically on the fly',
      ],
    },
    {
      question: 'Which index automatically removes documents after a set time?',
      options: ['A TTL index', 'A compound index', 'A text index', 'A primary index'],
    },
    {
      question: 'Which index is efficient for a query like WHERE user_id = ? AND status = ?',
      options: [
        'A compound index over several fields',
        'A TTL index',
        'A text (full-text) index',
        'No index is needed — such a query is always fast',
      ],
    },
  ],
  'nosql-data-modeling': [
    {
      question: 'How does the approach to data modeling in NoSQL differ from SQL?',
      options: [
        'In NoSQL you model from the queries and deliberately denormalize data, while in SQL you normalize',
        'In NoSQL data is always strictly normalized, and in SQL denormalized',
        'In NoSQL relationships are assembled exclusively via JOIN',
        'The approach is completely identical in both',
      ],
    },
    {
      question: 'When is embedding preferable to referencing?',
      options: [
        'When data is related by a “contains” relationship and read together (an order and its items)',
        'When the relationship between entities is many-to-many',
        'When the embedded data is very large and changes often independently',
        'When you need to avoid any data duplication',
      ],
    },
  ],
  'nosql-transactions': [
    {
      question: 'What atomicity is usually guaranteed by default in document NoSQL DBs?',
      options: [
        'Atomicity at the level of a single document',
        'Atomicity at the level of the whole database',
        'Full distributed transactions by default',
        'No atomicity at any level',
      ],
    },
    {
      question: 'What is an upsert?',
      options: [
        'An “update if the record exists, otherwise insert” operation',
        'Full deletion of a collection',
        'Bulk insertion without duplicate checks',
        'Rolling back the last transaction',
      ],
    },
  ],
  'quorum': [
    {
      question: 'Under what condition does a quorum read/write guarantee that a read sees the latest write?',
      options: ['When W + R > N', 'When W + R < N', 'When W = 1 and R = 1', 'When N is even'],
    },
    {
      question: 'What does the W parameter mean in the quorum model (N/R/W)?',
      options: [
        'How many replicas must confirm a write for it to count as successful',
        'How many replicas are queried on a read',
        'The total number of replicas storing the data',
        'The wait time for a replica’s response',
      ],
    },
  ],
  'caching-strategies': [
    {
      question: 'How does the cache-aside (lazy loading) strategy work?',
      options: [
        'The app checks the cache; on a miss it reads the DB and puts the result in the cache',
        'A write always goes synchronously to both the cache and the DB',
        'A write goes to the cache, and to the DB asynchronously later',
        'The cache is fully disabled under high load',
      ],
    },
    {
      question: 'What is a cache stampede?',
      options: [
        'When a popular key’s TTL expires, many requests hit the DB at once',
        'Requests for non-existent keys always pass through to the DB',
        'The cache overflows and evicts all data at once',
        'Cache replicas become inconsistent with each other',
      ],
    },
    {
      question: 'How is the cache-penetration problem (requests for non-existent keys) mitigated?',
      options: [
        'By caching an “empty” response or using a Bloom filter',
        'By increasing the TTL for all keys',
        'By fully disabling the cache',
        'By switching to a write-behind strategy',
      ],
    },
  ],
};

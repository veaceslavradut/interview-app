// Английский перевод банка квиза: system-design. Порядок вариантов и опций — как в RU.
export const systemDesign = {
  'sd-quiz-cap': [
    {
      question: 'What does the CAP theorem state?',
      options: [
        'During a network partition you cannot simultaneously guarantee consistency (C) and availability (A) — you must sacrifice one',
        'A distributed system can simultaneously provide consistency, availability, and partition tolerance',
        'Consistency is always more important than availability in any system',
        'In a distributed system you can achieve neither consistency nor availability',
      ],
    },
    {
      question: 'What does an AP system choose during a network partition?',
      options: [
        'Availability at the expense of consistency — it always responds, but data may be stale',
        'Consistency at the expense of availability — it returns an error rather than serve stale data',
        'It fully stops working until the network is restored',
        'Both consistency and availability at once',
      ],
    },
  ],
  'sd-quiz-caching': [
    {
      question: 'How does the cache-aside (lazy loading) caching strategy work?',
      options: [
        'The app checks the cache; on a miss it reads from the DB and puts the value in the cache',
        'Each write goes synchronously to both the cache and the DB at once',
        'Data is written only to the cache and flushed to the DB asynchronously later',
        'The cache is fully cleared before every request',
      ],
    },
    {
      question: 'Which eviction policy removes long-unused elements from the cache?',
      options: ['LRU (Least Recently Used)', 'FIFO by insertion time', 'Round Robin', 'Write-through'],
    },
  ],
  'sd-quiz-scaling': [
    {
      question: 'How does horizontal scaling (scale out) differ from vertical (scale up)?',
      options: [
        'Scale out — adding new machines and distributing load; scale up — increasing one machine’s power',
        'Scale out — increasing one machine’s power; scale up — adding new machines',
        'They are the same, the terms are interchangeable',
        'Scale out applies only to databases, and scale up only to application servers',
      ],
    },
    {
      question: 'Which property of services is critical for horizontal scaling?',
      options: [
        'Stateless — state is pushed to a DB/cache, so any node can handle any request',
        'Storing the user session in each server’s local memory',
        'Having exactly one instance of the service',
        'Vertically binding a client to a specific server forever',
      ],
    },
  ],
  'sd-quiz-sharding-replication': [
    {
      question: 'What is the difference between sharding and replication?',
      options: [
        'Shards store DIFFERENT parts of the data (write/volume scaling); replicas store COPIES of the same data (availability/reads)',
        'Shards store copies of the same data, and replicas different parts',
        'They are synonyms for one mechanism',
        'Sharding applies only to caches, and replication only to queues',
      ],
    },
    {
      question: 'What is a hot shard?',
      options: [
        'A shard that receives disproportionately much load due to uneven key distribution',
        'A shard that physically overheated and needs cooling',
        'A backup shard enabled only when the main one fails',
        'A shard stored entirely in RAM',
      ],
    },
  ],
  'sd-quiz-consistent-hashing': [
    {
      question: 'What problem does consistent hashing solve?',
      options: [
        'When a node is added/removed, only ~1/N of keys move, not almost all as with hash(key) % N',
        'It fully eliminates hash-function collisions',
        'It encrypts keys for secure storage',
        'It guarantees strong consistency between replicas',
      ],
    },
    {
      question: 'Why are virtual nodes (vnodes) needed in consistent hashing?',
      options: [
        'To even out the distribution of keys around the ring and account for different node capacities',
        'To encrypt traffic between nodes',
        'To reduce the number of physical servers to one',
        'To provide strong write consistency',
      ],
    },
  ],
  'sd-quiz-rate-limiting': [
    {
      question: 'How does the Token Bucket algorithm work for rate limiting?',
      options: [
        'Tokens drip into a bucket at a constant rate; each request spends a token, no tokens → reject (allows short bursts)',
        'Requests are always processed at an absolutely fixed rate with no bursts',
        'Each client is issued one token per day',
        'Tokens are issued only after payment',
      ],
    },
    {
      question: 'Which HTTP code is usually returned when the request limit is exceeded?',
      options: ['429 Too Many Requests', '404 Not Found', '500 Internal Server Error', '301 Moved Permanently'],
    },
  ],
  'sd-quiz-idempotency': [
    {
      question: 'What does idempotency of an operation mean?',
      options: [
        'Repeating it with the same parameters gives the same result with no extra side effects',
        'The operation runs exactly once and physically cannot repeat',
        'The operation always fails on retry',
        'The operation encrypts its input data',
      ],
    },
    {
      question: 'Why does idempotency matter with “at-least-once” message delivery?',
      options: [
        'Because a message may be delivered again, and the handler must not apply the effect twice',
        'Because messages are then never duplicated',
        'Because it speeds up the network',
        'Because it disables retries entirely',
      ],
    },
  ],
  'sd-quiz-mq': [
    {
      question: 'What is the main benefit of a message queue between services?',
      options: [
        'Decoupling and smoothing spikes: producer and consumer are independent, a spike is buffered',
        'A guaranteed several-fold speed-up of any operation',
        'Doing away with the database entirely',
        'Automatic encryption of all the application’s data',
      ],
    },
    {
      question: 'What is a dead-letter queue (DLQ) used for?',
      options: [
        'For messages that couldn’t be processed after retries — to investigate them separately',
        'To speed up delivery of priority messages',
        'To store successfully processed messages',
        'To balance load among consumers',
      ],
    },
  ],
  'sd-quiz-sql-nosql': [
    {
      question: 'When is a relational (SQL) DB usually preferable?',
      options: [
        'When ACID transactions, relationships between entities, and complex JOIN queries matter',
        'When you need a maximally flexible schema and writing huge volumes without relationships',
        'When the data has no structure at all',
        'When data consistency doesn’t matter at all',
      ],
    },
    {
      question: 'What most often dictates the choice between SQL and NoSQL?',
      options: [
        'Data access patterns and consistency requirements',
        'The colour of the DBMS logo',
        'The database’s release year',
        'The number of lines in the application’s codebase',
      ],
    },
  ],
  'sd-quiz-lb': [
    {
      question: 'How does an L7 load balancer differ from L4?',
      options: [
        'L7 understands HTTP and can route by URL/headers/cookies; L4 balances by IP/ports without looking at the content',
        'L4 works at the application layer, and L7 at the transport layer',
        'L7 is always faster than L4 and has no drawbacks',
        'There is no difference between them',
      ],
    },
    {
      question: 'Why does a load balancer need health checks?',
      options: [
        'To take failed/unhealthy nodes out of rotation and not send traffic to them',
        'To encrypt connections between client and server',
        'To increase disk-storage capacity',
        'To generate short links',
      ],
    },
  ],
};

// Английские переводы: nosql
export const nosql = {
    title: 'NoSQL',
    description: 'Non-relational databases: types, CAP, consistency, sharding, caching',
    questions: {
      'what-is-nosql': {
        question: 'What is NoSQL and what are the main database types?',
        answer: `**NoSQL** (Not Only SQL) is a family of non-relational databases that give up the rigid table model and strict ACID guarantees in favor of a flexible schema and horizontal scalability.

Main types:

- **Key-value** (Redis, DynamoDB) — "key → value" pairs with the fastest possible lookup by key. When to choose: cache, sessions, rate limiting, fast key lookups.
- **Document** (MongoDB, Couchbase) — JSON-like documents with a nested structure and a flexible schema. When to choose: REST backends, microservices, frequently changing data structure.
- **Wide-column** (Cassandra, HBase) — data in columns grouped into families; huge write volumes and distribution. When to choose: time-series, logs, analytics.
- **Graph** (Neo4j) — nodes and the relationships between them. When to choose: when the relationships themselves matter — social networks, recommendations, dependency graphs.

Common traits: no strict schema, good horizontal scalability, giving up part of the ACID guarantees for performance.`,
      },
      'nosql-vs-sql': {
        question: 'When should you choose NoSQL, and when SQL?',
        answer: `The choice depends on the data model and integrity requirements, not on fashion.

**SQL is better when:**

- you need strict transactions and integrity (finance, payments);
- there are many relationships between entities and complex queries with JOINs and aggregations;
- the schema is stable and well known in advance.

**NoSQL is better when:**

- the schema is flexible or changes often (for example, custom user-defined fields);
- you need huge volumes and horizontal scaling;
- queries are simple (by key), data is denormalized, and write load is high.

**A real-world example:** a service accepted arbitrary user-defined fields. In SQL you would constantly run \`ALTER TABLE\` and complicate the model; in MongoDB it is a single document with a flexible schema — faster reads and no JOINs across tables.`,
      },
      'scaling-horizontal-vertical': {
        question: 'What is the difference between horizontal and vertical scaling?',
        answer: `**Vertical scaling (scale up)** — adding resources to a single machine (CPU, RAM, disk). Simple, requires no application changes, but hits a hardware ceiling and leaves a single point of failure.

**Horizontal scaling (scale out)** — adding new machines and distributing data and load across them. Practically unlimited and fault-tolerant, but it requires sharding and replication and complicates consistency.

NoSQL databases were designed for horizontal scaling from the start — this is one of their key advantages over classic relational databases.`,
      },
      'cap-theorem': {
        question: 'Explain the CAP theorem.',
        answer: `**The CAP theorem:** a distributed system cannot simultaneously guarantee all three properties:

- **Consistency (C)** — all nodes see the same data; every read returns the latest write.
- **Availability (A)** — every request gets a response (not an error), even if some nodes are unavailable.
- **Partition tolerance (P)** — the system keeps working when connectivity between nodes is lost (a network partition).

Since network partitions in a distributed system are inevitable, **P is mandatory**, and the real choice is between C and A at the moment of a partition:

- **CP** (MongoDB, HBase) — sacrifice availability: during a partition some nodes stop responding so they don't return stale data.
- **AP** (Cassandra, DynamoDB) — sacrifice strict consistency: they always respond, but data may be temporarily inconsistent.`,
      },
      'consistency-models': {
        question: 'How does strong consistency differ from eventual consistency? What other models exist?',
        answer: `**Strong consistency** — after a successful write, any subsequent read from any node returns that value. Simpler for the developer, but more expensive in latency and availability.

**Eventual consistency** — replicas converge to one value "over time"; right after a write, a read from another replica may return the old value. Provides high availability and low latency.

Between them there are intermediate guarantees:

- **Read-your-writes** — a user always sees their own writes.
- **Monotonic reads** — a value never "rolls back": once you see a newer value, you won't get an older one.
- **Causal consistency** — causally related operations are seen in the correct order.

These models let you pick the right trade-off between strictness and performance.`,
      },
      'network-partition': {
        question: 'What happens during a network partition, and how does the system decide what to sacrifice?',
        answer: `During a **network partition**, nodes lose connectivity with each other and cannot reconcile data. The system is forced to choose one of two options:

- preserve **consistency (CP)** — reject requests to nodes that cannot confirm the data is current; part of the system becomes temporarily unavailable;
- preserve **availability (AP)** — keep responding with local data, accepting the risk of divergence, and resolve conflicts after connectivity is restored (last-write-wins, vector clocks, CRDTs).

The choice is driven by business requirements: consistency matters more for payments, availability for a social feed. Once connectivity returns, nodes synchronize (anti-entropy, read repair).`,
      },
      sharding: {
        question: 'What is sharding and how do you choose a shard key?',
        answer: `**Sharding (partitioning)** is horizontally splitting data into parts (shards) placed on different nodes to scale volume and load. The **shard key** determines which shard a record lands on.

A good key:

- provides an **even** distribution of data and load across shards;
- matches frequent queries, so a query hits a single shard rather than all of them.

**Hot key / hot partition** — a situation where one key or range receives a disproportionate share of requests. A classic example is sharding by date: all fresh writes go to a single shard. It is fixed by choosing a more even key, hashing, or composite keys.`,
      },
      'nosql-indexes': {
        question: 'What kinds of indexes exist in NoSQL and why are they needed?',
        answer: `Indexes speed up reads at the cost of slower writes and extra memory. Without a suitable index, a query performs a full scan of the entire collection.

- **Primary** — on the primary key (id).
- **Secondary** — on a non-key field (for example, on \`status\`).
- **Compound** — on several fields at once; efficient for queries like \`WHERE user_id = ? AND status = ?\`. The order of fields in the index matters.
- **TTL** — automatically deletes documents after a set time (sessions, cache).
- **Text** — full-text search over string fields.`,
      },
      'nosql-data-modeling': {
        question: 'How does data modeling in NoSQL differ from normalization in SQL? Embedding or referencing?',
        answer: `In SQL, data is **normalized** — split into tables without duplication, with relationships assembled through JOINs. In NoSQL, you model **from the queries** (query-driven) and deliberately **denormalize** — duplicating data so it can be read in a single query.

**Embedding** — storing related data inside the document. Pro: a single read and atomicity per document. Con: document growth and duplication. Chosen for a "contains" relationship and data read together (an order and its line items).

**Referencing** — storing an id and loading the related data separately. Chosen for many-to-many relationships and large or independently changing data.

There are no traditional JOINs — they are replaced by denormalization, materialized views, or application-side joins.`,
      },
      'nosql-transactions': {
        question: 'How do transactions and atomicity work in NoSQL? What is an upsert?',
        answer: `Atomicity is usually guaranteed at the level of a **single document / row / key**: an operation on one document is either fully applied or not at all. This follows from denormalization — related data lives together.

**Multi-document transactions** do exist (for example, in MongoDB since 4.0), but they cost more: higher latency, coordination across shards, and some limitations — so they are avoided on hot paths.

**Upsert** — "update if the record exists, otherwise insert" (update-or-insert). Convenient, but with concurrent requests races are possible: two upserts may create duplicates or overwrite each other. Protection comes from unique indexes, atomic operators (\`$setOnInsert\`), and optimistic locking by version.`,
      },
      quorum: {
        question: 'What is a quorum (N/R/W) and how does it affect consistency?',
        answer: `In distributed systems with replication:

- **N** — the number of replicas storing the data;
- **W** — how many replicas must confirm a **write** for it to count as successful;
- **R** — how many replicas are queried on a **read**.

If **W + R > N**, the sets of written and read replicas overlap, and a read is guaranteed to see the latest write — giving strong consistency. Smaller W and R give a faster response and higher availability at the cost of possibly stale data.

Example: N=3, W=2, R=2 is a balanced quorum. W=1 gives fast writes but weak consistency.

When the primary fails, a **failover** occurs: replicas elect a new leader (leader election), and writes may be unavailable during the election.`,
      },
      'caching-strategies': {
        question: 'Redis as a cache: what caching strategies exist and what problems does a cache have?',
        answer: `**Caching strategies:**

- **Cache-aside (lazy loading)** — the application checks the cache first; on a miss it reads the database and stores the result in the cache. The most common one. Con: the first request is slow and the cache can drift out of sync with the database.
- **Write-through** — a write goes to the cache and synchronously to the database. The cache is always current, but writes are slower.
- **Write-behind (write-back)** — a write goes to the cache and to the database asynchronously later. Fast writes, but a risk of data loss on failure.

**TTL** (time-to-live) — how long an entry lives in the cache before it is evicted; protects against unbounded growth and stale data.

**Cache problems:**

- **Cache stampede** — when a popular key's TTL expires, many requests hit the database at once. Fixed with a regeneration lock and TTL jitter.
- **Cache penetration** — requests for keys that don't exist always pass through to the database. Fixed by caching the "empty" answer or using a Bloom filter.
- **Cache avalanche** — a mass simultaneous expiry of many keys overwhelms the database. Fixed with TTL jitter.`,
      },
    },
  };

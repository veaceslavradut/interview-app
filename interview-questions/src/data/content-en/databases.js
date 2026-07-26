// Английские переводы: databases
export const databases = {
    title: 'Databases',
    description: 'Database theory, transactions, indexes',
    questions: {
      acid: {
        question: 'What is ACID?',
        answer: `**ACID** — the four properties of transactions in relational databases:

- **Atomicity** — a transaction is executed entirely or not at all. On failure, all changes are rolled back.
- **Consistency** — a transaction moves the database from one consistent state to another; all constraints (constraints, foreign keys) are satisfied.
- **Isolation** — concurrent transactions do not affect each other; the result is as if they ran sequentially (the degree depends on the isolation level).
- **Durability** — after commit, changes persist even if the system crashes (ensured by WAL — write-ahead logging).

The opposite approach is **BASE** (Basically Available, Soft state, Eventually consistent) — used in distributed NoSQL systems where availability matters more.`,
      },
      'isolation-levels': {
        question: 'What transaction isolation levels do you know?',
        answer: `Isolation levels (from weakest to strictest) and the anomalies they allow:

| Level | Dirty Read | Non-Repeatable Read | Phantom Read |
|---|---|---|---|
| READ UNCOMMITTED | yes | yes | yes |
| READ COMMITTED | no | yes | yes |
| REPEATABLE READ | no | no | yes* |
| SERIALIZABLE | no | no | no |

**Anomalies:**

- **Dirty read** — reading uncommitted changes made by another transaction;
- **Non-repeatable read** — re-reading the same row yields a different result (another transaction modified and committed it);
- **Phantom read** — re-running a query with the same condition returns new rows added by another transaction.

\\* In MySQL (InnoDB), REPEATABLE READ prevents phantoms via next-key locking; in PostgreSQL — via snapshots (MVCC).

Defaults: PostgreSQL, Oracle — READ COMMITTED; MySQL — REPEATABLE READ.`,
      },
      indexes: {
        question: 'What are indexes and how do they work?',
        answer: `An **index** is a data structure that speeds up row lookups by column values at the cost of slower writes and extra storage.

**B-Tree index** (the default) — a balanced tree:

- search, insertion, deletion — O(log n);
- supports equality, ranges (\`<\`, \`>\`, \`BETWEEN\`), sorting, \`LIKE 'prefix%'\`.

Other types: **Hash** (equality only), **GIN/GiST** (full-text search, JSONB, geodata in PostgreSQL), **Bitmap**.

Key concepts:

- **composite index** (a, b, c) — works for prefixes: (a), (a,b), (a,b,c) — the "leftmost prefix rule";
- **covering index** — contains all columns the query needs, so no table access is required (index-only scan);
- **selectivity** — an index is effective for columns with many unique values.

When indexes don't work: functions applied to a column (\`WHERE UPPER(name) = ...\`), \`LIKE '%suffix'\`, low selectivity, implicit type conversion. Analysis: \`EXPLAIN (ANALYZE)\`.`,
      },
      normalization: {
        question: 'What is database normalization?',
        answer: `**Normalization** is the process of organizing data to eliminate redundancy and anomalies (insertion, update, deletion).

**Normal forms:**

- **1NF** — all attributes are atomic (no lists in cells), there is a primary key;
- **2NF** — 1NF + no partial dependencies: non-key attributes depend on the **entire** composite key;
- **3NF** — 2NF + no transitive dependencies: non-key attributes do not depend on other non-key attributes;
- **BCNF** — a stricter 3NF: every determinant is a candidate key.

In practice, 3NF is usually sufficient.

**Denormalization** — deliberately adding redundancy to speed up reads (fewer JOINs): duplicating columns, aggregated values, materialized views. Used in analytics (OLAP, star schema) and high-load read-heavy systems. The trade-off: read speed vs the complexity of maintaining consistency.`,
      },
      'sql-nosql': {
        question: 'What is the difference between SQL and NoSQL databases?',
        answer: `**SQL (relational)** — PostgreSQL, MySQL, Oracle:

- strict schema (tables, columns, types);
- ACID transactions;
- powerful query language (JOIN, aggregations);
- vertical scaling (easier), horizontal scaling is harder.

**NoSQL** — different data models:

- **document** (MongoDB) — JSON documents, flexible schema;
- **key-value** (Redis) — caches, sessions, maximum speed;
- **columnar** (Cassandra) — large volumes, high write throughput;
- **graph** (Neo4j) — relationships and graph traversals.

NoSQL characteristics: flexible schema, horizontal scaling out of the box, eventual consistency (often BASE instead of ACID).

**CAP theorem**: a distributed system can guarantee only 2 of 3 — Consistency, Availability, Partition tolerance. During a network partition, the choice is CP (consistency) or AP (availability).

Choosing: complex relationships and transactions — SQL; scale, schema flexibility, specialized models — NoSQL. Both are often used together (polyglot persistence).`,
      },
    },
  };

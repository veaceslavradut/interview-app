// Английские переводы: kafka
export const kafka = {
    title: 'Apache Kafka',
    description: 'Distributed streaming platform',
    questions: {
      'what-is-kafka': {
        question: 'What is Apache Kafka? Core concepts.',
        answer: `**Apache Kafka** is a distributed event streaming platform: a high-throughput, fault-tolerant, scalable message log.

**Core concepts:**

- **Topic** — a named stream of messages (a category);
- **Partition** — a part of a topic; an ordered, immutable log with offsets. The unit of parallelism;
- **Offset** — the sequential number of a message within a partition;
- **Producer** — sends messages to topics;
- **Consumer** — reads messages; tracks its own offset;
- **Consumer Group** — a group of consumers that share partitions among themselves (each partition goes to only one consumer in the group);
- **Broker** — a Kafka server; a cluster consists of brokers;
- **Replication** — each partition is replicated (leader + followers, ISR — in-sync replicas);
- **ZooKeeper / KRaft** — cluster coordination (KRaft replaces ZooKeeper starting with Kafka 3.x).

**Key properties**: messages are stored on disk for a configured time (retention) regardless of whether they have been read; ordering is guaranteed **only within a partition**; messages with the same key land in the same partition.

Use cases: event-driven microservice integration, data streaming, event sourcing, log and metrics collection, CDC.`,
      },
      'kafka-guarantees': {
        question: 'What delivery guarantees does Kafka support?',
        answer: `**Delivery semantics:**

- **At-most-once** — no more than once: loss is possible, no duplicates (commit the offset before processing);
- **At-least-once** — at least once: no loss, duplicates are possible (commit the offset after processing) — the most common choice;
- **Exactly-once** — exactly once: idempotent producer + Kafka transactions.

**Producer settings:**

- \`acks=0\` — don't wait for acknowledgment (fast, loss is possible);
- \`acks=1\` — acknowledgment from the partition leader;
- \`acks=all\` — acknowledgment from all ISR replicas (reliable) + \`min.insync.replicas=2\`;
- \`enable.idempotence=true\` — deduplication on retries (by sequence number);
- transactions: \`transactional.id\`, atomic writes to multiple topics.

**On the consumer side:**

- manual offset commit (\`enable.auto.commit=false\`) after successful processing → at-least-once;
- handlers must be **idempotent** (duplicates are inevitable in distributed systems);
- \`isolation.level=read_committed\` — read only committed transactional messages.

Full end-to-end exactly-once is achievable within the Kafka ecosystem (Kafka Streams); with external systems — via idempotency or the transactional outbox pattern.`,
      },
      'consumer-groups': {
        question: 'How do Consumer Groups and rebalancing work?',
        answer: `**Consumer Group** — a mechanism for horizontally scaling reads: consumers with the same \`group.id\` share a topic's partitions among themselves.

Assignment rules:

- each partition is assigned to **only one** consumer within the group;
- one consumer can read multiple partitions;
- more consumers than partitions → the extra ones stay idle;
- different groups read the topic **independently** (each has its own offsets, stored in the \`__consumer_offsets\` topic).

**Rebalancing** — redistribution of partitions when the group membership changes (a consumer joins/crashes/stops sending heartbeats, or the number of partitions changes).

Rebalancing problems:

- **stop-the-world** (eager) — all consumers stop reading;
- duplicate processing when offsets are uncommitted.

Improvements:

- **Cooperative (incremental) rebalancing** — only the affected partitions are reassigned;
- **static membership** (\`group.instance.id\`) — consumer restart without rebalancing;
- settings: \`session.timeout.ms\`, \`heartbeat.interval.ms\`, \`max.poll.interval.ms\` (long batch processing risks being kicked out of the group).

Choosing the message key matters: ordering is guaranteed within a partition, and the key determines the partition (\`hash(key) % partitions\`).`,
      },
      'kafka-vs-rabbitmq': {
        question: 'What is the difference between Kafka and traditional message brokers (RabbitMQ)?',
        answer: `**Storage model:**

- **Kafka** — a distributed **log**: messages are stored for a configured time (retention) and are not deleted after being read; the consumer manages its own position (offset) and can **re-read** history;
- **RabbitMQ** — a classic **queue**: a message is deleted after acknowledgment; smart routing (exchanges: direct, topic, fanout, headers).

**Delivery model:**

- Kafka — **pull**: the consumer requests data in batches itself;
- RabbitMQ — **push**: the broker pushes messages to subscribers.

**Performance and scale:**

- Kafka — millions of messages/sec, sequential disk writes, zero-copy, partitioning out of the box;
- RabbitMQ — tens to hundreds of thousands of messages/sec, lower latency under light load.

**When to use Kafka:**

- event streaming, event sourcing, reprocessing history;
- high throughput, integrating many consumers;
- analytics pipelines (Kafka Streams, Connect).

**When to use RabbitMQ:**

- classic queueing tasks (task queues), RPC;
- complex routing, priorities, TTL, dead letter queues;
- strict requirements for delivery order to a specific consumer with acknowledgments.

In short: Kafka is "an event journal that many read", RabbitMQ is "a smart postman for tasks".`,
      },
      'topic-partition-offset': {
        question: 'What are a topic, partition, and offset? Why is Kafka called a commit log?',
        answer: `**Topic** — a named channel (category) of messages. Producers write to a topic, consumers read from it.

**Partition** — a topic is physically split into partitions; this is the unit of parallelism and scaling. Within a partition, messages are strictly ordered and only appended to the end (append-only). Ordering is guaranteed **only within a single partition**, not across the whole topic.

**Offset** — the sequential number of a message within a partition (monotonically increasing). A consumer stores its offset and thus knows what has been read; it can re-read data by moving the offset back.

**"Commit log":** Kafka is a distributed, replicated, ordered, append-only log. Messages are not deleted after being read (unlike a queue) but live according to a retention policy, and different consumers read the same log independently, each with its own offset. The message key determines the partition (\`hash(key) % partitions\`), which gives per-key ordering.`,
      },
      'kafka-brokers-kraft': {
        question: 'What are a broker, controller, and ZooKeeper/KRaft in Kafka?',
        answer: `**Broker** — a Kafka server that stores partitions and serves producer and consumer requests. A cluster consists of several brokers; partitions and their replicas are distributed across them.

**Controller** — a special broker that coordinates the cluster: it assigns partition leaders, tracks broker state, and manages replica rebalancing on failures.

**ZooKeeper → KRaft:** historically Kafka stored cluster metadata (the list of brokers, topics, leaders) in an external **ZooKeeper**. Since Kafka 2.8 and as the standard in 3.x+, ZooKeeper is replaced by **KRaft (Kafka Raft)** — metadata is stored in Kafka itself via a built-in Raft consensus. KRaft benefits: fewer moving parts (no separate ZooKeeper cluster), faster controller recovery and failover, better scaling with the number of partitions.`,
      },
      'kafka-replication': {
        question: 'How does Kafka provide fault tolerance (replication, ISR)? What happens if a partition leader fails?',
        answer: `Each partition has a **replication factor** — the number of copies on different brokers. One replica is the **leader** (all reads and writes go through it), the rest are **followers** that copy data from the leader.

**ISR (In-Sync Replicas)** — the set of replicas that have "caught up" with the leader (not lagging beyond the allowed limit). Only a replica from the ISR can become the new leader.

**When the leader fails**, the controller elects a new leader from the ISR, and clients transparently switch to it — no data is lost if it was replicated to the ISR. The \`min.insync.replicas\` setting together with \`acks=all\` guarantees that a write is acknowledged only after being stored on the required number of replicas: if fewer live ISR members exist than \`min.insync.replicas\`, the write is rejected (sacrificing availability for durability). If \`unclean.leader.election\` is allowed, a lagging replica can become the leader — which risks data loss.`,
      },
      'producer-acks': {
        question: 'What does a producer do and how does the acks setting (0, 1, all) work?',
        answer: `A **producer** sends messages to a topic, choosing the partition itself (by key via hashing, or round-robin if there's no key), batches messages for performance, and can compress them.

**acks** determines when a write is considered successful — a trade-off between speed and durability:

- **acks=0** — the producer doesn't wait for acknowledgment at all. Maximum speed, but the message can be lost (fire-and-forget).
- **acks=1** — waits for acknowledgment only from the partition **leader**. A balance of speed and durability, but if the leader fails before replicating to followers, the message is lost.
- **acks=all (-1)** — waits for acknowledgment from the leader **and all ISR** (respecting \`min.insync.replicas\`). Maximum durability, higher latency.

For "don't lose" guarantees, use \`acks=all\` + \`min.insync.replicas >= 2\` + an enabled idempotent producer.`,
      },
      'idempotent-producer': {
        question: 'What is an idempotent producer and why is it needed?',
        answer: `On a resend (a retry after a timeout, when the acknowledgment was lost but the message actually was written), an ordinary producer can create a **duplicate** — "at-least-once" semantics.

An **idempotent producer** (\`enable.idempotence=true\`, on by default in recent versions) eliminates duplicates on retries. The mechanism: each producer is assigned a **Producer ID (PID)**, and each message a monotonic **sequence number** per partition. The broker tracks the last written sequence and discards retries with an already-seen number.

This gives **exactly-once at the level of writing to a single partition** within the producer's session, without losing performance. For exactly-once **across multiple partitions/topics and together with a consumer**, Kafka transactions are needed (see the EOS question). Idempotence automatically implies \`acks=all\`.`,
      },
      'offset-reset-lag': {
        question: 'What does auto.offset.reset (earliest/latest/none) do? What is consumer lag?',
        answer: `**\`auto.offset.reset\`** determines where to start reading when the group has **no stored offset** (a new group) or the stored offset no longer exists (aged out by retention):

- **earliest** — from the very beginning of the partition (read all available history);
- **latest** (default) — only new messages arriving after connecting;
- **none** — throw an exception if there is no valid offset (forcing the situation to be handled explicitly).

Important: the setting only applies when there is **no** valid offset — if the group has already committed an offset, reading continues from it.

**Consumer lag** — the difference between the last offset in the partition (log-end offset) and the offset the consumer has read up to. A growing lag means consumers aren't keeping up with producers. It is fixed by increasing the number of consumers in the group (up to the number of partitions), optimizing processing, or increasing the number of partitions. Lag is a key Kafka monitoring metric.`,
      },
      'kafka-retention-compaction': {
        question: 'How does the retention policy work and what is a compacted topic?',
        answer: `Kafka stores messages **regardless of whether they have been read** — how many is set by **retention**:

- **by time** (\`retention.ms\`, e.g., 7 days) — messages older than the threshold are deleted;
- **by size** (\`retention.bytes\`) — old segments are deleted when the partition exceeds the size.

This is the **delete** cleanup policy (\`cleanup.policy=delete\`): whole old log segments are removed.

A **compacted topic** (\`cleanup.policy=compact\`) works differently: Kafka keeps **at least the latest value for each key**, removing older records with the same key. The log becomes something like a "snapshot of the current state." It is used for changelogs, storing state (e.g., the latest config/profile per key), and restoring state in Kafka Streams. Deletion by key is expressed with a **tombstone** — a message with that key and a \`null\` value.`,
      },
      'kafka-exactly-once': {
        question: 'How do Kafka transactions and exactly-once semantics (EOS) work?',
        answer: `An **idempotent producer** removes duplicates when writing to a single partition, but it does not cover atomic writes to **multiple** partitions/topics or the "read → process → write" pattern.

**Kafka transactions** solve this: a producer with a \`transactional.id\` opens a transaction, writes to several partitions/topics, and **atomically commits** (or aborts) it. Consumers with \`isolation.level=read_committed\` see only committed messages.

**Exactly-Once Semantics (EOS)** in the "consume-process-produce" chain is achieved by **including the commit of the input topic's offsets in the same transaction** as the result write. Either everything (processing + offset advance + write) is committed atomically, or nothing — no duplicates and no losses.

The cost: extra latency and transaction coordination, so EOS is enabled where duplicates are unacceptable (finance, billing). Kafka Streams supports EOS out of the box (\`processing.guarantee=exactly_once_v2\`).`,
      },
      'kafka-throughput': {
        question: 'How do you increase Kafka throughput? How does the number of partitions affect performance?',
        answer: `**Throughput** is increased from several sides:

- **partitions** — the main lever of parallelism: more partitions → more consumers in a group work in parallel, higher total throughput;
- **producer** — batching (\`batch.size\`, \`linger.ms\`), compression (\`compression.type\`: lz4/zstd), enough \`buffer.memory\`;
- **consumer** — processing in batches, a sufficient \`max.poll.records\`, parallelism across partitions;
- **broker/disks** — Kafka relies on sequential disk writes and zero-copy; fast disks and sufficient network help.

**The number of partitions is a double-edged sword.** More partitions = more parallelism, but:

- overhead grows (open files, memory, load on the controller);
- rebalancing and failover on failures take longer and cost more;
- ordering is guaranteed only within a partition — more partitions dilute global ordering.

The number of partitions is easy to increase but **cannot be decreased**, and increasing it changes key distribution, so it is planned in advance for the target load.`,
      },
      'dead-letter-topic': {
        question: 'What is a dead-letter topic and why is it needed?',
        answer: `A **dead-letter topic (DLT)** is a separate topic where messages that **could not be processed** after retries are exhausted are sent (deserialization error, invalid data, a business exception).

Why: a single "poison message" should not block the whole partition. Without a DLT, a consumer either gets stuck endlessly retrying one message or loses it. A DLT allows you to:

- **not block** processing of the other messages — the problematic one is set aside;
- **preserve** failed messages for analysis, manual review, and reprocessing later;
- separate transient errors (fixed by retry) from permanent ones (sent to the DLT).

In Spring Kafka, a DLT is implemented via \`DeadLetterPublishingRecoverer\` and \`DefaultErrorHandler\` with a configured retry count and backoff; the DLT name usually gets a \`.DLT\` suffix. Retry topic(s) with a delay are often placed before the DLT.`,
      },
      'kafka-streams-connect': {
        question: 'What are Kafka Streams and Kafka Connect? What is the difference?',
        answer: `These are two separate libraries/frameworks in the Kafka ecosystem for different tasks.

**Kafka Streams** — a client library for **stream processing**: it reads from topics, transforms (map/filter/join/aggregations, windowed operations), and writes the result back to Kafka. It runs as an ordinary Java application (not a separate cluster), stores state locally (RocksDB) with a backup to compacted topics, and supports EOS. You choose it over "raw" consumers when you need **stateful processing**: aggregations, stream joins, windows — which would otherwise have to be written by hand.

**Kafka Connect** — a framework for **integrating Kafka with external systems** without writing code, via ready-made connectors:

- **source connectors** pull data from external systems into Kafka (e.g., CDC from a database via Debezium);
- **sink connectors** export from Kafka to external systems (databases, Elasticsearch, S3).

In short: **Streams processes and transforms** data inside Kafka; **Connect moves** data between Kafka and the outside world.`,
      },
    },
  };

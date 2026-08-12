// Английские переводы: event-driven
export const eventDriven = {
  title: 'Event-Driven Architecture',
  description: 'Event-driven architecture, delivery semantics, idempotency, DLQ, outbox/inbox',
  questions: {
    'eventual-consistency': {
      question: 'What is eventual consistency?',
      answer: `**Eventual consistency** is a consistency model in which, once changes stop, all replicas/services will **eventually** converge to the same state, but at **some moment** they may not have it yet (they see stale data).

It is contrasted with **strong consistency**, where any read immediately sees the latest write.

In event-driven systems this is natural: service A changes its state and publishes an event; service B processes it a bit later — between those moments the data is out of sync.

Why we accept it:

- by the **CAP theorem**, in a distributed system under a network partition you cannot have both strong consistency and availability at once — availability + eventual is often chosen;
- atomic distributed transactions (2PC) are expensive and scale poorly.

In practice: the business is designed to tolerate a brief inconsistency ("the order is accepted, the email will arrive in a second"), and consistency is reached through events, retries and idempotency.`,
    },
    'eda-benefits': {
      question: 'What are the main benefits of event-driven architecture?',
      answer: `**Event-Driven Architecture (EDA)** builds interaction around asynchronous events ("what happened") rather than direct command calls. Upsides:

- **Loose coupling** — the publisher does not know its consumers; new subscribers are added without changing the source;
- **Scalability and spike tolerance** — the broker smooths load (buffering), consumers scale independently;
- **Fault tolerance** — if a consumer is down, events wait in the broker; after recovery it catches up (no cascading failure as with a synchronous call);
- **Extensibility** — several subsystems react independently to one event (analytics, notifications, audit);
- **Audit and replay** — an event log (especially in Kafka) provides history and the ability to replay (event sourcing, rebuilding projections).

EDA fits microservices well: reacting to changes without a synchronous dependency on someone else's availability.`,
    },
    'eda-drawbacks': {
      question: 'What are the main drawbacks of event-driven architecture?',
      answer: `The decoupling comes at the cost of complexity:

- **Eventual consistency** — no instant consistency; the business and UI must account for it;
- **Debugging and tracing are harder** — the control flow is implicit, spread across subscribers; you need correlation IDs and distributed tracing;
- **Duplicates and reordering** — delivery is usually at-least-once, ordering only partially guaranteed → consumers **must** be idempotent;
- **Harder to reason about state** — the "truth" is distributed across events and projections;
- **Error handling is nontrivial** — you need retries, backoff, a **DLQ**, lag monitoring;
- **Event schemas evolve** — versioning and compatibility are required (a schema registry);
- **Risk of an "event-driven monolith"** — with poor boundaries, events couple services no less than direct calls.

Conclusion: EDA is a powerful tool, but it adds operational and cognitive complexity; apply it when needed, not by default.`,
    },
    'at-least-once': {
      question: 'What is at-least-once delivery?',
      answer: `**At-least-once** is a guarantee that a message will be delivered **at least once**, but **duplicates** are possible.

How it arises: the consumer processes a message but **crashes or loses the network before acknowledging (ack/commit offset)**. The broker did not see the acknowledgement and delivers the message again.

\`\`\`text
receive → process → (crash before commit) → redelivery → process again
\`\`\`

- **Plus**: no messages are lost — suitable for most business tasks;
- **Minus**: duplicates are possible → the consumer **must be idempotent**;
- this is the **default mode** in most brokers (Kafka with manual/periodic offset commit, RabbitMQ with ack).

At-least-once + idempotency in practice yield an "as if exactly once" effect without expensive distributed coordination.`,
    },
    'at-most-once': {
      question: 'What is at-most-once delivery?',
      answer: `**At-most-once** — a message is delivered **at most once**: no duplicates, but on failure the message may be **lost**.

How it arises: the consumer **acknowledges/commits the offset before processing** (or fire-and-forget). If it crashes after the acknowledgement but before processing, the message is already considered "read" and will not be delivered again.

\`\`\`text
receive → commit offset → (crash before process) → message lost
\`\`\`

- **Plus**: minimal overhead, no duplicates, the highest throughput;
- **Minus**: loss is possible — unacceptable where every message matters (payments, orders);
- appropriate for **non-critical streams**: metrics, telemetry, "best-effort" notifications, where losing individual points is fine.

Choosing at-most-once vs at-least-once is a "loss vs duplicates" trade-off.`,
    },
    'exactly-once': {
      question: 'What is exactly-once delivery?',
      answer: `**Exactly-once** — each message is accounted for **exactly once**: no loss, no duplicates. The strongest and most expensive guarantee.

An important nuance: **absolute** exactly-once **delivery** is impossible in a distributed system (the network can duplicate/lose). What is achieved is **exactly-once processing** — via a combination of:

- **at-least-once delivery** + consumer **idempotency** (deduplication by key/offset), or
- **transactions** that atomically tie together reading, processing and writing the result/offset.

In Kafka this is **transactions + an idempotent producer** (EOS): \`read-process-write\` within one transaction, with \`isolation.level=read_committed\` on the reader. It works as long as everything stays within Kafka; when writing to an external DB you need additional idempotency (e.g. outbox/inbox).

Rule of thumb: exactly-once is expensive; more often you choose **at-least-once + idempotency**, which yields the same observable effect more cheaply.`,
    },
    'idempotency-importance': {
      question: 'Why is idempotency important in message-driven systems?',
      answer: `**Idempotency** is a property of an operation whereby **applying it again with the same data does not change the result** compared to applying it once.

Why it is critical: real delivery is almost always **at-least-once**, so the consumer will **inevitably** receive some messages more than once (after retries, rebalances, failures). Without idempotency this leads to double debits, duplicate orders, repeated emails.

\`\`\`text
"Debit 100 from the account"   — NOT idempotent (twice debits 200)
"Set status = PAID"            — idempotent (a repeat changes nothing)
"Process payment with id=X"    — can be made idempotent via dedup by id
\`\`\`

Idempotency is **cheaper and more reliable** than trying to guarantee exactly-once delivery: it makes a repeat safe, so retries and at-least-once stop being a problem. It is the foundation of resilient message processing.`,
    },
    'idempotent-consumers': {
      question: 'How do you design idempotent consumers?',
      answer: `The goal is to make reprocessing the same message **safe**. The main techniques:

- **Deduplication by identifier** — every message has a stable \`messageId\`/business key; store processed ids and skip repeats (the **inbox pattern**):

\`\`\`sql
INSERT INTO processed_messages(message_id) VALUES (?)
ON CONFLICT DO NOTHING;   -- if it already exists, the message is already processed
\`\`\`

- **Natural idempotency of the operation** — phrase it as "set state" rather than "change by a delta" (upsert, \`status = PAID\` instead of \`balance -= 100\`);
- **Optimistic locking / versions** — apply a change only if the version matches;
- **Atomicity** of "mark processed + write result" — in one DB transaction, otherwise a gap is possible;
- **A dedup key with TTL** (Redis) for streams where storing all ids is costly.

In practice: an at-least-once broker + an idempotent consumer = an observable exactly-once effect without distributed transactions.`,
    },
    'dead-letter-queue': {
      question: 'What is a dead-letter queue?',
      answer: `A **Dead-Letter Queue (DLQ)** is a separate queue/topic where messages that **could not be processed** (after retries are exhausted) or that cannot be delivered/accepted are sent.

The idea is not to lose "poison" messages and not to let them block the main stream. A problematic message is moved aside, and processing of the rest continues.

What ends up in a DLQ:

- a business/deserialization error that retries will not fix (corrupt format, invalid data);
- the processing-attempt limit is exceeded;
- the message TTL expired or the queue overflowed (in brokers with a DLX).

From the DLQ you then run: **alerting**, root-cause analysis, manual fixing and **redrive** after correction. In RabbitMQ it is implemented via a dead-letter-exchange; in Kafka — usually a separate dead-letter topic (e.g. via Spring Kafka / Kafka Connect).`,
    },
    'dlq-when': {
      question: 'When should a message go to a DLQ?',
      answer: `A message is moved to a DLQ when further attempts to process it in the main stream are **pointless or harmful**:

- **retries are exhausted** — the maximum number of attempts is exceeded (usually with exponential backoff);
- a **non-transient (permanent) error** — the data is invalid, the schema is incompatible, deserialization fails: a repeat will not help;
- a **poison message** — it blocks the partition/queue and prevents processing the rest;
- less often — the **TTL expired** or the queue overflowed.

It is important to **distinguish error types**:

- **transient** (temporary: timeout, DB unavailable) → **retry** with backoff, do **not** send to the DLQ immediately;
- **permanent** (persistent: corrupt data, business violation) → to the DLQ immediately or after a few attempts.

Sending everything to the DLQ on temporary failures is an anti-pattern: it floods the DLQ and hides the real availability problem.`,
    },
    'retry-vs-dlq': {
      question: 'What is the difference between retry and DLQ handling?',
      answer: `These are **two stages** of an error-handling strategy, not alternatives:

**Retry** — an attempt to process the same message again, aimed at **transient** failures: the network blipped, the DB was down for a second, a rate limit fired. Usually with **exponential backoff** and jitter, and a limited number of attempts. Often the retry is done asynchronously (delay retry topics/queues) so as not to block the stream.

**DLQ** — a "terminal" for messages that **retries will not save** (the limit is exhausted or the error is permanent). They are removed from the main stream for later analysis and manual redrive.

\`\`\`text
process → fail → retry (backoff, N times) → still fail → DLQ → alert/analysis
\`\`\`

In short: **retries** fight transient failures automatically; the **DLQ** isolates what cannot be fixed automatically, preventing it from blocking the system and without losing data.`,
    },
    'exponential-backoff': {
      question: 'What is exponential backoff?',
      answer: `**Exponential backoff** is a retry strategy in which the pause between attempts **grows exponentially**: e.g. 1s, 2s, 4s, 8s… (\`base * 2^attempt\`), usually with an upper cap.

Why: under overload or a failure of a dependent service, frequent immediate retries only **worsen** the problem (a retry storm). Growing pauses give the service time to recover.

**Jitter** — a random component is added to the delay so that many clients that failed at the same time do not retry **in lockstep** (thundering herd) and hit the service in bursts.

\`\`\`text
delay = min(cap, base * 2^attempt)      // exponential with a cap
delay = random(0, delay)                // full jitter
\`\`\`

Complemented by:

- **a cap on the number of attempts** → then the DLQ;
- a **circuit breaker** — stop hammering a broken dependency for a while altogether.

Backoff + jitter + an attempt limit is the standard of resilient distributed systems.`,
    },
    'outbox-pattern': {
      question: 'What is the Outbox pattern?',
      answer: `The **Transactional Outbox** solves the **dual-write** problem: how to atomically both change the DB and publish an event when these are two different resources (DB and broker) with no shared transaction.

The idea: the event is written **to the same DB, in the same transaction** as the business data — into a dedicated \`outbox\` table:

\`\`\`sql
BEGIN;
  INSERT INTO orders(...) VALUES (...);
  INSERT INTO outbox(id, type, payload) VALUES (...);   -- the same transaction
COMMIT;
\`\`\`

A separate process (**relay**) then reads \`outbox\` and publishes the events to the broker:

- **polling publisher** — periodically selects unsent rows and sends them to Kafka/RabbitMQ, marking them sent;
- **CDC** (Change Data Capture, e.g. Debezium) — reads the WAL/binlog and streams outbox changes without polling.

This makes "the data changed" and "there is an event to send" **atomic** (one DB transaction), and publishing reliable and repeatable.`,
    },
    'outbox-why': {
      question: 'Why is the Outbox pattern useful?',
      answer: `The Outbox eliminates the **dual-write race** and its severe consequences. Without it, two inconsistency scenarios are possible:

- "the order was saved, but we crashed **before** publishing the event" → the data exists, consumers never learned of it;
- "the event was published, but the data transaction **rolled back**" → consumers react to something that is not in the DB.

What the Outbox gives:

- **atomicity** of the business change and the fact that "an event must be sent" — both writes in one DB transaction;
- **reliable at-least-once delivery** — the relay retries publishing until the broker confirms (hence the mandatory idempotency of consumers);
- **no distributed transactions (2PC)** — only a local DB transaction is used, which is cheap and scalable;
- **ordering and audit** — the outbox stores a history of outgoing events.

In essence the Outbox turns the unreliable "DB + broker" operation into a reliable "one DB + asynchronous forwarding".`,
    },
    'inbox-pattern': {
      question: 'What is the Inbox pattern?',
      answer: `The **Inbox** is the mirror image of the Outbox on the **consumer** side, providing **idempotent processing** of incoming messages and protection from duplicates (inevitable under at-least-once).

The idea: before processing, a message is registered in an \`inbox\` table by a stable \`messageId\`; the business effect is applied in the same transaction:

\`\`\`sql
BEGIN;
  INSERT INTO inbox(message_id) VALUES (?)   -- unique key
    ON CONFLICT DO NOTHING;                  -- duplicate → skip
  -- if the row was inserted (a new message) — apply the business logic
COMMIT;
\`\`\`

Properties:

- **deduplication** — a repeated message with the same id is not applied a second time;
- **atomicity** of "record the processing fact + apply the effect" — one DB transaction, no gap;
- often used **together with the Outbox**: the inbox guarantees "process once", the outbox "publish the result reliably".

The Inbox is a concrete implementation of an idempotent consumer via persistent deduplication.`,
    },
    'reliable-publishing': {
      question: 'How do you ensure reliable publishing of events after DB changes?',
      answer: `The problem: changing the DB and publishing an event to the broker is a write to **two different resources**. Without a shared transaction, any ordering risks inconsistency (data without an event, or an event without data). Possible solutions:

1. **Transactional Outbox (recommended)** — the event is written to an \`outbox\` table in the **same transaction** as the data; a separate relay/CDC reliably forwards it to the broker. Atomic and without 2PC.
2. **Change Data Capture (Debezium)** — stream the table changes themselves from the WAL/binlog; a special case is CDC over an outbox table.
3. **Event sourcing** — the event log itself is the source of truth; publishing naturally follows from appending an event.
4. **Distributed transaction (2PC)** — atomic but expensive, scales poorly and is weakly supported by brokers → avoided in practice.

What **not** to do: "save to the DB, then in a separate step call \`producer.send()\`" — the classic dual-write that loses events on a failure between the steps.

In all workable options delivery is **at-least-once**, so consumers must be **idempotent** (inbox).`,
    },
  },
};

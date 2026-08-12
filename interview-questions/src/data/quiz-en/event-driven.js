// Английский перевод банка квиза: event-driven. Порядок вариантов и опций — как в RU.
export const eventDriven = {
  'eventual-consistency': [
    {
      question: 'What is eventual consistency?',
      options: [
        'Over time all nodes converge to one state, but may temporarily see stale data',
        'Any read always instantly sees the latest write',
        'Data is never synchronized between replicas',
        'Consistency guaranteed only within a single DB transaction',
      ],
    },
  ],
  'eda-benefits': [
    {
      question: 'What benefit does event-driven architecture provide?',
      options: [
        'Loose coupling: the publisher does not know its consumers, which can be added independently',
        'Instant strong consistency between all services',
        'A complete absence of any need for error handling',
        'Effortless strict exactly-once delivery',
      ],
    },
  ],
  'eda-drawbacks': [
    {
      question: 'Which drawback is characteristic of event-driven architecture?',
      options: [
        'Eventual consistency and harder debugging due to an implicit control flow',
        'The inability to scale consumers',
        'Mandatory tight coupling of services',
        'Total message loss on any failure',
      ],
    },
  ],
  'at-least-once': [
    {
      question: 'What does at-least-once delivery guarantee?',
      options: [
        'The message will not be lost, but duplicates are possible',
        'The message arrives exactly once with no duplicates',
        'The message is delivered at most once but may be lost',
        'Messages are delivered strictly in send order across the whole topic',
      ],
    },
  ],
  'at-most-once': [
    {
      question: 'What is characteristic of at-most-once delivery?',
      options: [
        'No duplicates, but on failure the message may be lost',
        'Each message is processed exactly once',
        'The message is always delivered at least once',
        'Messages are buffered until the consumer acknowledges them all',
      ],
    },
  ],
  'exactly-once': [
    {
      question: 'How is exactly-once semantics achieved in practice?',
      options: [
        'By at-least-once delivery plus consumer idempotency (or transactions)',
        'By disabling all retries and acknowledgements',
        'By a guaranteed physical impossibility of duplicates in the network',
        'By switching to at-most-once delivery',
      ],
    },
  ],
  'idempotency-importance': [
    {
      question: 'Why is idempotency important in message-driven systems?',
      options: [
        'Delivery is usually at-least-once, so repeats are inevitable and must be safe',
        'It speeds up message serialization',
        'It lets you drop the message broker entirely',
        'It guarantees strict message ordering',
      ],
    },
  ],
  'idempotent-consumers': [
    {
      question: 'Which technique makes a consumer idempotent?',
      options: [
        'Deduplication by a stable messageId (e.g. an inbox table with a unique key)',
        'Increasing the number of worker threads',
        'Committing the offset before starting to process the message',
        'Disabling broker acknowledgements (ack)',
      ],
    },
  ],
  'dead-letter-queue': [
    {
      question: 'What is a dead-letter queue (DLQ) for?',
      options: [
        'To isolate unprocessable messages without losing them or blocking the main stream',
        'To speed up processing of priority messages',
        'To keep a backup copy of all successfully processed messages',
        'To balance load across partitions',
      ],
    },
  ],
  'dlq-when': [
    {
      question: 'When is it appropriate to send a message to a DLQ?',
      options: [
        'When retries are exhausted or the error is permanent (corrupt data) and a repeat is pointless',
        'Immediately on the very first transient error (timeout, DB unavailable)',
        'After every successfully processed message',
        'When the queue is empty and the consumer is idle',
      ],
    },
  ],
  'retry-vs-dlq': [
    {
      question: 'What is the difference between retries and a DLQ?',
      options: [
        'Retries fight transient failures; the DLQ isolates what retries cannot fix',
        'They are synonyms for the same mechanism',
        'Retries lose messages, while a DLQ guarantees exactly-once',
        'A DLQ reprocesses messages, while retries delete them',
      ],
    },
  ],
  'exponential-backoff': [
    {
      question: 'What is exponential backoff for retries?',
      options: [
        'The pause between attempts grows exponentially, usually with jitter and a cap',
        'A fixed pause of equal length between all attempts',
        'An immediate retry with no delays at all',
        'Abandoning retries entirely after the first error',
      ],
    },
  ],
  'outbox-pattern': [
    {
      question: 'How does the Outbox pattern work?',
      options: [
        'The event is written to an outbox table in the same transaction as the data; a relay forwards it to the broker',
        'The event is sent to the broker before the data transaction commits',
        'Events are kept only in application memory until they are sent',
        'The producer and the DB are joined by a distributed 2PC transaction',
      ],
    },
  ],
  'outbox-why': [
    {
      question: 'What problem does the Outbox pattern solve?',
      options: [
        'The dual-write race: atomicity of the DB change and the fact an event must be sent, without 2PC',
        'Slow deserialization of large messages',
        'A shortage of partitions in a Kafka topic',
        'The absence of indexes in the database',
      ],
    },
  ],
  'inbox-pattern': [
    {
      question: 'What does the Inbox pattern provide on the consumer side?',
      options: [
        'Idempotent processing and deduplication of incoming messages by messageId in one transaction',
        'Faster publishing of outgoing events',
        'Automatic scaling of the number of partitions',
        'Compression of messages before sending to the broker',
      ],
    },
  ],
  'reliable-publishing': [
    {
      question: 'How do you reliably publish an event after a DB change?',
      options: [
        'Via a Transactional Outbox (or CDC), not a separate producer.send() call after commit',
        'Call producer.send() before writing to the DB',
        'Rely on failures between the DB write and the send never happening',
        'Send the event and write to the DB in two independent threads with no coordination',
      ],
    },
  ],
};

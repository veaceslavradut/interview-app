// Английский перевод банка квиза: kafka. Порядок вариантов и опций — как в RU.
export const kafka = {
  'what-is-kafka': [
    {
      question: 'What is Apache Kafka?',
      options: [
        'A distributed message-streaming platform: topics, partitions, messages stored as a log',
        'A relational database for large volumes',
        'A load balancer for microservices',
        'A framework for building web UIs',
      ],
    },
    {
      question: 'What is an offset in Kafka?',
      options: [
        'A sequence number of a message within a partition, by which a consumer tracks its read position',
        'The message-delivery latency in milliseconds',
        'The message size in bytes',
        'The number of a topic’s replicas',
      ],
    },
  ],
  'kafka-guarantees': [
    {
      question: 'What message-ordering guarantee does Kafka give?',
      options: [
        'Ordering is guaranteed only within a single partition',
        'Global ordering across the whole topic regardless of partitions',
        'Ordering is guaranteed only between different topics',
        'There are no ordering guarantees even within a partition',
      ],
    },
    {
      question: 'What does at-least-once delivery semantics mean?',
      options: [
        'A message will be delivered at least once, but duplicates are possible',
        'A message is delivered at most once; loss is possible',
        'A message is delivered exactly once with no duplicates or loss',
        'A message is delivered to all consumers simultaneously',
      ],
    },
  ],
  'consumer-groups': [
    {
      question: 'How does a consumer group work in Kafka?',
      options: [
        'A topic’s partitions are distributed among the group’s consumers — each partition is read by only one consumer in the group',
        'All consumers in the group read all partitions simultaneously',
        'The group merges several topics into one',
        'A consumer group is a pool of connections to the broker',
      ],
    },
    {
      question: 'What happens if there are more consumers in a group than partitions in the topic?',
      options: [
        'The extra consumers stay idle with no assigned partitions',
        'Partitions automatically split into smaller ones',
        'Several consumers read one partition in parallel',
        'The broker rejects the extra consumers’ connections with an error',
      ],
    },
  ],
  'kafka-vs-rabbitmq': [
    {
      question: 'What is the key difference between Kafka and RabbitMQ?',
      options: [
        'Kafka stores messages in a log that can be re-read (replay); RabbitMQ is a classic queue broker that removes messages after acknowledgement',
        'RabbitMQ scales horizontally, and Kafka does not',
        'Kafka does not support multiple consumers',
        'RabbitMQ stores messages forever, Kafka deletes them immediately',
      ],
    },
    {
      question: 'For which scenario does Kafka suit better than a classic queue broker?',
      options: [
        'Streaming processing of large event volumes with re-reading of history by several consumer groups',
        'Rare tasks with priorities and complex routing at small volumes',
        'Synchronous request-response calls between two services',
        'Storing relational data with transactions',
      ],
    },
  ],
  'topic-partition-offset': [
    {
      question: 'What is an offset in Kafka?',
      options: [
        'A sequence number of a message within a partition',
        'The number of a partition’s replicas',
        'A consumer-group identifier',
        'The producer’s batch size',
      ],
    },
    {
      question: 'Within what bounds does Kafka guarantee message ordering?',
      options: [
        'Only within a single partition',
        'Within the whole topic',
        'Within the whole cluster',
        'Ordering is never guaranteed',
      ],
    },
    {
      question: 'What happens to a message in Kafka after a consumer has read it?',
      options: [
        'It stays in the log until retention expires; other consumers read it independently',
        'It is immediately deleted from the partition',
        'It is moved to a dead-letter topic',
        'It is copied to all other consumers and deleted',
      ],
    },
  ],
  'kafka-brokers-kraft': [
    {
      question: 'What replaced ZooKeeper for storing metadata in modern Kafka versions?',
      options: ['KRaft (built-in Raft consensus)', 'Redis', 'PostgreSQL', 'A separate etcd cluster'],
    },
    {
      question: 'What is the controller responsible for in a Kafka cluster?',
      options: [
        'It assigns partition leaders and coordinates the cluster’s state',
        'It stores all messages of all topics',
        'It handles consumers’ business logic',
        'It balances clients’ HTTP requests',
      ],
    },
  ],
  'kafka-replication': [
    {
      question: 'What are ISR (In-Sync Replicas)?',
      options: [
        'Replicas that have caught up with the leader; only they are eligible to become the new leader',
        'Replicas physically lagging behind the leader',
        'A list of the group’s consumers',
        'An index of offsets in the partition',
      ],
    },
    {
      question: 'What happens when a partition leader fails, if the data was in the ISR?',
      options: [
        'The controller elects a new leader from the ISR with no data loss',
        'The partition becomes unavailable forever',
        'All the partition’s data is lost',
        'Producers automatically create a new partition',
      ],
    },
  ],
  'producer-acks': [
    {
      question: 'What does acks=all (-1) mean for a Kafka producer?',
      options: [
        'Wait for acknowledgement from the leader and all ISR — maximum reliability',
        'Don’t wait for acknowledgement at all',
        'Wait for acknowledgement from the leader only',
        'Send the message to all topics at once',
      ],
    },
    {
      question: 'At which acks value can a message be lost for maximum speed?',
      options: ['acks=0', 'acks=1', 'acks=all', 'acks=-1'],
    },
  ],
  'idempotent-producer': [
    {
      question: 'What problem does an idempotent producer solve?',
      options: [
        'Duplicate messages on resend (retry)',
        'Loss of connection to ZooKeeper',
        'Slow deserialization',
        'A shortage of partitions',
      ],
    },
    {
      question: 'How does an idempotent producer discard duplicates?',
      options: [
        'A Producer ID and a monotonic sequence number per partition',
        'Encrypting each message',
        'Comparing the full text of messages',
        'An additional dead-letter topic',
      ],
    },
  ],
  'offset-reset-lag': [
    {
      question: 'What is consumer lag?',
      options: [
        'The difference between the last offset in a partition and the offset the consumer has read up to',
        'Network latency between brokers',
        'The topic’s creation time',
        'The number of replicas lagging behind the leader',
      ],
    },
    {
      question: 'When is the auto.offset.reset setting applied?',
      options: [
        'When there is no valid stored offset for the group',
        'On every message read',
        'Only at topic creation',
        'On every offset commit',
      ],
    },
  ],
  'kafka-retention-compaction': [
    {
      question: 'What does a compacted topic (cleanup.policy=compact) do?',
      options: [
        'It keeps at least the latest value for each key',
        'It deletes all messages right after they are read',
        'It compresses messages with gzip',
        'It keeps only the first message of each key',
      ],
    },
    {
      question: 'What determines how long Kafka keeps messages?',
      options: [
        'The retention policy (by time or size)',
        'Whether they have been read by all consumers',
        'The number of partitions',
        'Messages are kept forever',
      ],
    },
  ],
  'kafka-exactly-once': [
    {
      question: 'How is exactly-once achieved in a consume-process-produce chain?',
      options: [
        'The input topic’s offset commit is included in the same transaction as writing the result',
        'By disabling all retries',
        'By increasing the number of partitions',
        'By using acks=0',
      ],
    },
    {
      question: 'Which isolation.level must a consumer have to see only committed transactions?',
      options: ['read_committed', 'read_uncommitted', 'serializable', 'repeatable_read'],
    },
  ],
  'kafka-throughput': [
    {
      question: 'What is the main lever of parallelism and throughput in Kafka?',
      options: [
        'The number of partitions and consumers in a group',
        'The length of the topic name',
        'The number of ZooKeeper nodes',
        'The length of the message key',
      ],
    },
    {
      question: 'Which statement about the number of partitions is CORRECT?',
      options: [
        'Partitions are easy to increase but cannot be decreased; plan them in advance',
        'The number of partitions can be freely decreased at any time',
        'The more partitions, the stricter the global ordering',
        'The number of partitions does not affect performance',
      ],
    },
  ],
  'dead-letter-topic': [
    {
      question: 'What is a dead-letter topic (DLT) for?',
      options: [
        'So unprocessable messages don’t block the partition and are kept for investigation',
        'To speed up reading of the main topic',
        'To store a backup of all messages',
        'To encrypt messages',
      ],
    },
    {
      question: 'What is a poison message?',
      options: [
        'A message that cannot be processed and gets stuck in the partition',
        'A message with an expired TTL',
        'A message sent with acks=0',
        'A message from a compacted topic',
      ],
    },
  ],
  'kafka-streams-connect': [
    {
      question: 'What is Kafka Connect for?',
      options: [
        'For integrating Kafka with external systems via ready-made source/sink connectors',
        'For stateful processing and aggregation of streams',
        'For storing cluster metadata',
        'For balancing load across brokers',
      ],
    },
    {
      question: 'When do you choose Kafka Streams over plain consumers?',
      options: [
        'When you need stateful processing: aggregations, stream joins, windows',
        'When you just need to move data from a DB into Kafka',
        'When no processing is needed at all',
        'When you need to reduce the number of partitions',
      ],
    },
  ],
  'kafka-broker-or-streaming': [
    {
      question: 'How does Kafka differ from a classic message broker like RabbitMQ?',
      options: [
        'Kafka stores messages as an ordered log with retention and lets different groups re-read them',
        'Kafka deletes a message right after the first read, while RabbitMQ keeps it forever',
        'Kafka does not support multiple consumers of one stream',
        'Kafka does not scale and runs only on a single node',
      ],
    },
  ],
  'more-consumers-than-partitions': [
    {
      question: 'What happens when there are more consumers than partitions in a group?',
      options: [
        'The extra consumers stay idle and serve as hot standbys in case of a rebalance',
        'Each partition is read by several consumers in parallel at once',
        'Kafka automatically creates additional partitions',
        'The group stops reading the topic until the number of consumers is reduced',
      ],
    },
  ],
  'fewer-consumers-than-partitions': [
    {
      question: 'What happens when there are fewer consumers than partitions in a group?',
      options: [
        'Each consumer gets several partitions — this is a normal working mode',
        'Some partitions are not read at all',
        'Kafka merges the partitions into one',
        'Messages are lost due to the shortage of consumers',
      ],
    },
  ],
  'kafka-ordering': [
    {
      question: 'Within what scope does Kafka guarantee message ordering?',
      options: [
        'Only within a single partition; across a multi-partition topic ordering is not guaranteed',
        'Strictly across the whole topic regardless of the number of partitions',
        'Ordering is not guaranteed anywhere at all',
        'Ordering is guaranteed across partitions but not within a partition',
      ],
    },
  ],
  'partition-key': [
    {
      question: 'What does the partition key determine?',
      options: [
        'Which partition a message goes to: the same key → one partition (hash(key) % N)',
        'Which topic the message is sent to',
        'The message retention period',
        'The producer\'s acks acknowledgement level',
      ],
    },
  ],
  'choose-partition-key': [
    {
      question: 'What should a good partition key be like?',
      options: [
        'Uniform (high cardinality) and aligned with the unit of ordering/grouping',
        'With as few unique values as possible so everything goes to one partition',
        'Always null, so Kafka decides the distribution itself',
        'Built from frequently changing message fields',
      ],
    },
  ],
};

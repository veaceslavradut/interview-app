// Английский перевод банка квиза: monitoring. Порядок вариантов и опций — как в RU.
export const monitoring = {
  'what-is-monitoring': [
    {
      question: 'How does logging differ from monitoring?',
      options: [
        'Logs answer “what exactly happened” in detail; monitoring (metrics) — “how the system feels overall right now”',
        'They are the same thing',
        'Logs are used only in prod, monitoring only in development',
        'Monitoring stores stack traces, and logs numeric metrics',
      ],
    },
    {
      question: 'Which three “pillars” of observability are distinguished?',
      options: ['Metrics, logs, tracing', 'CPU, memory, disk', 'Dev, staging, prod', 'Alert, dashboard, report'],
    },
  ],
  'jvm-metrics': [
    {
      question: 'Why is it important to look at p95/p99 percentiles for latency rather than the average?',
      options: [
        'The average hides outliers — slow responses that some users experience',
        'Percentiles are faster to compute',
        'The average can’t be built for response time',
        'p99 always equals the average',
      ],
    },
    {
      question: 'Which JVM metric first hints at a memory leak?',
      options: [
        'Growth of used heap without dropping after GC',
        'The number of open sockets',
        'The JDK version',
        'The application’s startup time',
      ],
    },
  ],
  'spring-boot-metrics': [
    {
      question: 'What exposes metrics for monitoring in Spring Boot?',
      options: [
        'Actuator + Micrometer (the /actuator/prometheus endpoint)',
        'Hibernate + JPA',
        'Spring Security',
        'Lombok',
      ],
    },
    {
      question: 'What is Micrometer?',
      options: [
        'A metrics facade that exports them to different systems (Prometheus, Datadog) via pluggable registries',
        'A time-series database',
        'A dashboard-visualization tool',
        'A distributed-tracing system',
      ],
    },
  ],
  'prometheus': [
    {
      question: 'By which model does Prometheus collect metrics?',
      options: [
        'Pull — it scrapes metrics from applications’ HTTP endpoints itself',
        'Push — applications send metrics to it',
        'Through a message queue',
        'Through SQL queries to the application’s DB',
      ],
    },
    {
      question: 'What is PromQL?',
      options: [
        'Prometheus’s query language for aggregations and computations over metrics',
        'A log-storage format',
        'An alert-sending protocol',
        'A language for describing Grafana dashboards',
      ],
    },
  ],
  'grafana': [
    {
      question: 'What is Grafana’s main role?',
      options: [
        'Visualizing metrics from sources (Prometheus, etc.) in dashboards and alerting',
        'Storing metrics as a time-series DB',
        'Collecting metrics by the pull model',
        'Distributed request tracing',
      ],
    },
    {
      question: 'Does Grafana usually store the metric data itself?',
      options: [
        'No — it connects to sources (Prometheus, Loki, etc.)',
        'Yes — that is its main function',
        'Yes, but only logs',
        'Only in RAM for an hour',
      ],
    },
  ],
  'red-use-metrics': [
    {
      question: 'What does the RED method mean for monitoring services?',
      options: [
        'Rate, Errors, Duration',
        'Read, Execute, Delete',
        'Requests, Endpoints, Databases',
        'Reliability, Efficiency, Durability',
      ],
    },
    {
      question: 'What is the USE method aimed at?',
      options: [
        'Resources: Utilization, Saturation, Errors',
        'Requests to the service',
        'Business metrics',
        'Security',
      ],
    },
  ],
  'monitoring-distributed-tracing': [
    {
      question: 'What does distributed tracing show that metrics don’t?',
      options: [
        'Where exactly in the chain of service calls time is lost (one request’s path)',
        'The cluster’s overall CPU load',
        'The size of logs on disk',
        'The number of lines of code in a service',
      ],
    },
    {
      question: 'Which modern standard covers tracing, metrics, and logs?',
      options: ['OpenTelemetry (OTel)', 'JUnit', 'Maven', 'HikariCP'],
    },
  ],
  'alerting': [
    {
      question: 'What is better to set alerts on?',
      options: [
        'Symptoms the user experiences (5xx errors, high latency)',
        'Any CPU fluctuation',
        'Every log line',
        'Only successful requests',
      ],
    },
    {
      question: 'What is alert fatigue?',
      options: [
        'Too frequent/false alerts that the team starts to ignore',
        'The delay in delivering an alert',
        'A CPU-load metric',
        'The absence of alerts in the system',
      ],
    },
  ],
};

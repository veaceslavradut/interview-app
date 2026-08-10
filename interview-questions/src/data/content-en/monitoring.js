// Английские переводы: monitoring
export const monitoring = {
    title: 'Monitoring',
    description: 'Observability: metrics, Prometheus, Grafana, tracing, alerting',
    questions: {
      'what-is-monitoring': {
        question: 'What is monitoring and how does it differ from logging?',
        answer: `**Monitoring** is the continuous collection, storage, and analysis of a system's operational indicators, so you **know its state in real time**, notice problems (ideally before users do), and understand causes. It's part of the broader concept of **observability** — the ability to understand a system's internal state from its external signals.

The three pillars of observability:

- **metrics** — numeric indicators over time (latency, RPS, errors, resource usage);
- **logs** — records of events;
- **tracing** — a request's path through services.

**Logging vs monitoring** — not "which matters more," but **different, complementary** tools:

- **logs** answer **"what exactly happened"** at a specific place (event details, stack trace) — good for after-the-fact investigation, but expensive to aggregate in real time;
- **monitoring (metrics)** answers **"how does the system feel overall right now"** (trends, anomalies, thresholds) — compact, suited for alerts and dashboards, but without details.

In practice they are used together: a metric/alert signals a problem, and logs and tracing help find the cause.`,
      },
      'jvm-metrics': {
        question: 'Which metrics are important to monitor in a Java application?',
        answer: `Metrics are split into **application** (about the service's behavior) and **infrastructure/JVM** (about the runtime).

**JVM-specific:**

- **heap memory** — used/committed/max heap, generation fill; a rise without a drop hints at a leak;
- **garbage collection** — frequency and duration of GC pauses, share of time in GC; long/frequent pauses hurt latency;
- **threads** — number of live threads, states, deadlock detection; growing thread count is a warning sign;
- **classes**, Metaspace, file descriptors, process CPU.

**Application (the golden set):**

- **latency** — response time, necessarily the **p95/p99** percentiles (the average hides outliers);
- **throughput** — requests per second (RPS);
- **error rate** — the share of errors (especially 5xx);
- resource saturation (CPU, memory, DB connection pool, queue sizes).

Useful reference models: **RED** (Rate, Errors, Duration — for services) and **USE** (Utilization, Saturation, Errors — for resources), plus Google SRE's "four golden signals" (latency, traffic, errors, saturation). In Spring Boot all of this is provided by Micrometer + Actuator.`,
      },
      'spring-boot-metrics': {
        question: 'How do you enable metrics for monitoring in Spring Boot?',
        answer: `In Spring Boot, metrics are provided by **Actuator** + **Micrometer**:

- **Spring Boot Actuator** — adds operational endpoints (\`/actuator/health\`, \`/actuator/metrics\`, \`/actuator/prometheus\`, etc.);
- **Micrometer** — "SLF4J for metrics": a unified facade that emits metrics to different systems (Prometheus, Datadog, New Relic, CloudWatch) via pluggable registries.

Setup for Prometheus:

1. add the dependencies \`spring-boot-starter-actuator\` and \`micrometer-registry-prometheus\`;
2. expose the endpoint in the config:

\`\`\`properties
management.endpoints.web.exposure.include=health,info,prometheus
\`\`\`

3. Prometheus **scrapes** \`GET /actuator/prometheus\`, which emits metrics in the Prometheus text format.

Out of the box you get JVM metrics (memory, GC, threads), HTTP timers (\`http.server.requests\` with latency and statuses), the connection pool (HikariCP), and more. Custom metrics are added via Micrometer: \`Counter\`, \`Timer\`, \`Gauge\`, \`DistributionSummary\` (e.g., a business-event counter). \`@Timed\` — an annotation for timing methods. These metrics are then visualized in Grafana.`,
      },
      prometheus: {
        question: 'What is Prometheus and how does it work?',
        answer: `**Prometheus** is an open-source monitoring system and **time-series database (TSDB)**, the de facto standard for metrics.

Key features:

- **Pull model** — Prometheus itself periodically **scrapes** metrics over HTTP from application endpoints (\`/metrics\`, in Spring — \`/actuator/prometheus\`), rather than applications pushing to it. Pros: the center controls the frequency and can easily tell whether a target is alive. For short-lived jobs there is a **Pushgateway**.
- **Service discovery** — statically or dynamically (Kubernetes, Consul).
- **Data model** — a time series is identified by a metric name and a set of **labels** (\`http_requests_total{method="GET", status="200"}\`), giving flexible multidimensional querying.
- **PromQL** — a query language for aggregations and computations: \`rate(http_requests_total[5m])\`, percentiles from histograms (\`histogram_quantile\`), grouping by labels.
- **Alertmanager** — a separate component for routing and grouping alerts (from PromQL rules).

Prometheus stores metrics locally (usually not for long); for long retention/scale, Thanos, Cortex, and Mimir are used. Visualization is typically via **Grafana**.`,
      },
      grafana: {
        question: 'What is Grafana and why is it needed?',
        answer: `**Grafana** is a platform for **visualizing and analyzing** metrics (and more). It usually **doesn't store** the data itself but connects to sources — **Prometheus**, Loki (logs), Elasticsearch, InfluxDB, cloud systems — and builds **dashboards** from them.

Why it's needed:

- **dashboards** — graphs, heatmaps, tables, single-stat panels from queries (for Prometheus — in PromQL); they clearly show the system's state and trends;
- **alerting** — notification rules by thresholds/anomalies, sent to Slack, email, PagerDuty, Telegram;
- **explore** — interactive queries for investigating incidents;
- dashboard variables and templates (by service/instance/environment), ready-made community dashboards.

The typical chain: the application (**Micrometer/Actuator**) emits metrics → **Prometheus** scrapes and stores them → **Grafana** visualizes and alerts. Grafana covers the "human" part of observability — turning raw series into a clear picture and notifications.`,
      },
      'red-use-metrics': {
        question: 'What are the RED and USE methods? Which metrics are critical for microservices?',
        answer: `These are methodologies for choosing the "right" set of metrics so you don't monitor everything indiscriminately.

**RED (for services, request-scoped):**

- **Rate** — requests per second;
- **Errors** — the number/share of failed requests;
- **Duration** — the distribution of response time (percentiles).

It quickly answers "is the service healthy" from its clients' perspective. Ideal for microservices and APIs.

**USE (for resources):**

- **Utilization** — how busy a resource is (CPU, memory, disk);
- **Saturation** — how overloaded it is (queue lengths, waiting);
- **Errors** — the resource's errors.

It answers "are we hitting a resource limit." It complements RED from the infrastructure side.

A related model is Google SRE's **four golden signals**: latency, traffic, errors, saturation.

For microservices the critical ones are: each service's **latency p95/p99** and **error rate (5xx)**, RPS, pool saturation (DB connections, threads); for event-driven systems — **consumer lag** and queue sizes; and health/availability of dependencies. **Business metrics** (orders/payments per minute) are monitored too — their drop is often the first sign of an incident.`,
      },
      'monitoring-distributed-tracing': {
        question: 'What is distributed tracing and which tools are used?',
        answer: `**Distributed tracing** follows the path of **a single request** through all services, showing the call chain and the time of each step. In microservices it's indispensable: metrics show "latency went up," but not **where exactly** in a chain of a dozen services time is lost — tracing shows that.

How it works:

- each incoming request is assigned a **trace id**, shared across the whole chain;
- each unit of work (a service call, a DB query) is a **span** with its own id, start/end time, and a link to the parent span;
- the **context (trace id, span id) is propagated** between services via headers (W3C \`traceparent\`), including through brokers;
- collected spans are sent to a backend that **assembles the tree** and draws a timing "waterfall."

Tools:

- **OpenTelemetry (OTel)** — the modern standard: a unified API/SDK and format for traces, metrics, and logs, vendor-neutral;
- visualization backends — **Jaeger**, **Zipkin**, Grafana Tempo, commercial Datadog/New Relic.

In Spring — **Micrometer Tracing** (which replaced Spring Cloud Sleuth) with export to OTel/Zipkin. The key requirement is end-to-end context propagation through all services and queues.`,
      },
      alerting: {
        question: 'What is alerting and which metrics should trigger alerts?',
        answer: `**Alerting** is automatic notifications when metrics go beyond acceptable limits, so the team learns of a problem **before users do**. A rule is usually defined in a query language (PromQL) with a threshold and duration ("if the error rate > 5% for 5 minutes").

Good alert candidates are things that directly affect users and availability:

- **rising errors** — the share of \`5xx\`, a spike in exceptions;
- **high latency** — p95/p99 above the SLO;
- **unavailability** — the service doesn't respond to health checks, crashed instances;
- **resource saturation** — CPU/memory near the ceiling, connection pool exhaustion, approaching \`OutOfMemory\`;
- **growing queues / consumer lag** in Kafka/RabbitMQ;
- **business anomalies** — a sharp drop in orders/payments.

Principles of good alerting:

- **alert on symptoms, not causes** — on what the user feels (better "the site is slow" than "CPU 90%," which by itself may be normal);
- **tie to SLOs** and the error budget;
- **avoid noise (alert fatigue)** — too frequent/false alerts get ignored; tune thresholds, grouping, and the "for" duration;
- an alert should be **actionable** — it's clear what to do. Routing is via Alertmanager/PagerDuty/Slack, with on-call rotations.`,
      },
    },
  };

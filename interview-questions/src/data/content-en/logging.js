// Английские переводы: logging
export const logging = {
    title: 'Logging',
    description: 'Logging in Java applications',
    questions: {
      'logging-frameworks': {
        question: 'What logging frameworks exist in Java?',
        answer: `**Facades (APIs):**

- **SLF4J (Simple Logging Facade for Java)** — the de facto standard; code depends on the facade, and the implementation is plugged in separately;
- **JCL (Apache Commons Logging)** — a legacy facade.

**Implementations:**

- **Logback** — the "native" SLF4J implementation, default in Spring Boot;
- **Log4j2** — high performance, asynchronous loggers (LMAX Disruptor);
- **java.util.logging (JUL)** — built into the JDK, limited;
- **Log4j 1.x** — obsolete (EOL).

The correct architecture: code is written against **SLF4J**, the implementation is a deployment detail:

\`\`\`java
private static final Logger log = LoggerFactory.getLogger(MyService.class);

log.info("User {} created order {}", userId, orderId); // parameterization!
\`\`\`

Parameterized messages \`{}\` instead of concatenation: the string is not built if the level is disabled.

Remember **Log4Shell (CVE-2021-44228)** — a critical Log4j2 vulnerability (JNDI lookup); always use up-to-date versions.`,
      },
      'log-levels': {
        question: 'What logging levels exist and when should they be used?',
        answer: `Levels (from most verbose to most critical): **TRACE < DEBUG < INFO < WARN < ERROR** (+ FATAL in Log4j2).

- **TRACE** — maximally detailed tracing: method entries/exits, loop iterations. Only for deep debugging.
- **DEBUG** — debugging information: variable values, branching, SQL queries. Enabled during diagnostics.
- **INFO** — key business events: application startup, order processing, connecting to a service. The standard production level.
- **WARN** — potential problems that don't prevent operation: retries, deprecated APIs, approaching limits, fallbacks.
- **ERROR** — errors requiring attention: unhandled exceptions, external system failure, data loss.

Rules:

- setting a level filters out everything "below" it: level INFO hides DEBUG and TRACE;
- levels are configured per package: \`logging.level.org.hibernate.SQL=DEBUG\`;
- ERROR — only for things that require a response (otherwise alerts lose their value);
- don't log sensitive data (passwords, tokens, personal data).`,
      },
      mdc: {
        question: 'What are MDC and structured logging?',
        answer: `**MDC (Mapped Diagnostic Context)** — a thread-local map of contextual data automatically attached to every log entry.

\`\`\`java
MDC.put("requestId", requestId);
MDC.put("userId", userId);
try {
    log.info("Processing order");   // requestId and userId end up in the log
    orderService.process(order);
} finally {
    MDC.clear();                    // must be cleared (thread pools!)
}
\`\`\`

Output pattern: \`%d %-5level [%X{requestId}] %logger - %msg%n\`

Use case: end-to-end **request tracing** (correlation id) across all layers and services. In Spring, it's usually populated in a filter/interceptor. Beware of asynchrony: MDC is bound to a thread; when switching threads, the context must be copied.

**Structured logging** — logs in JSON format instead of plain text:

- each entry is an object with fields (timestamp, level, message, requestId...);
- easily parsed by aggregation systems: ELK (Elasticsearch + Logstash + Kibana), Loki, Splunk;
- implementation: logstash-logback-encoder.

The modern observability stack: logs + metrics (Micrometer/Prometheus) + tracing (OpenTelemetry).`,
      },
    },
  };

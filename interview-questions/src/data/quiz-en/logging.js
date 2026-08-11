// Английский перевод банка квиза: logging. Порядок вариантов и опций — как в RU.
export const logging = {
  'logging-frameworks': [
    {
      question: 'What is SLF4J?',
      options: [
        'A logging facade (abstraction) that can be backed by any implementation: Logback, Log4j2, etc.',
        'The fastest logging implementation',
        'A log-file format',
        'A protocol for sending logs to a remote server',
      ],
    },
    {
      question: 'Why use the SLF4J facade in code instead of a specific logging library?',
      options: [
        'So you can switch the logging implementation without changing the application code',
        'SLF4J logs faster than any implementation',
        'Specific libraries can’t be called directly from Java code',
        'SLF4J automatically compresses log files',
      ],
    },
  ],
  'log-levels': [
    {
      question: 'Order the logging levels from verbose to critical:',
      options: [
        'TRACE → DEBUG → INFO → WARN → ERROR',
        'ERROR → WARN → INFO → DEBUG → TRACE',
        'INFO → TRACE → ERROR → DEBUG → WARN',
        'DEBUG → TRACE → WARN → INFO → ERROR',
      ],
    },
    {
      question: 'If a logger is set to WARN level, which messages reach the log?',
      options: [
        'Only WARN and ERROR',
        'Only WARN',
        'All messages, including DEBUG and TRACE',
        'Only ERROR',
      ],
    },
  ],
  'mdc': [
    {
      question: 'What is MDC (Mapped Diagnostic Context)?',
      options: [
        'A thread-bound context (e.g. requestId, userId) automatically added to log entries',
        'A database for centralized log storage',
        'A logging level between DEBUG and INFO',
        'A log-visualization tool',
      ],
    },
    {
      question: 'What is MDC most often used for in web applications?',
      options: [
        'End-to-end tracing: adding a requestId/correlationId to all log entries of one request',
        'Compressing logs before writing',
        'Limiting the log file’s size',
        'Encrypting log messages',
      ],
    },
  ],
};

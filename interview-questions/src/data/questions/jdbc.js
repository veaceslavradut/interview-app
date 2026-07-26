// Категория: jdbc
export const jdbc = {
    id: 'jdbc',
    title: 'JDBC',
    icon: '🔌',
    description: 'Java Database Connectivity',
    questions: [
      {
        id: 'what-is-jdbc',
        question: 'Что такое JDBC? Опишите основные компоненты.',
        answer: `**JDBC (Java Database Connectivity)** — стандартный API Java для работы с реляционными БД.

Основные компоненты:

- **DriverManager / DataSource** — получение соединений (DataSource — предпочтительный способ, поддерживает пулы);
- **Connection** — соединение с БД, управление транзакциями;
- **Statement / PreparedStatement / CallableStatement** — выполнение SQL;
- **ResultSet** — результат запроса, курсор по строкам.

Типичный код:

\`\`\`java
try (Connection conn = dataSource.getConnection();
     PreparedStatement ps = conn.prepareStatement(
         "SELECT id, name FROM users WHERE age > ?")) {
    ps.setInt(1, 18);
    try (ResultSet rs = ps.executeQuery()) {
        while (rs.next()) {
            long id = rs.getLong("id");
            String name = rs.getString("name");
        }
    }
}
\`\`\`

Методы выполнения: \`executeQuery()\` — SELECT (ResultSet), \`executeUpdate()\` — INSERT/UPDATE/DELETE (число строк), \`execute()\` — универсальный.`,
      },
      {
        id: 'statement-preparedstatement',
        question: 'В чем разница между Statement и PreparedStatement?',
        answer: `**Statement** — выполнение статического SQL; параметры конкатенируются в строку:

\`\`\`java
stmt.executeQuery("SELECT * FROM users WHERE name = '" + name + "'"); // ОПАСНО!
\`\`\`

**PreparedStatement** — предкомпилированный SQL с параметрами:

\`\`\`java
PreparedStatement ps = conn.prepareStatement("SELECT * FROM users WHERE name = ?");
ps.setString(1, name);
\`\`\`

Преимущества PreparedStatement:

- **защита от SQL-инъекций** — параметры экранируются драйвером, значение не может изменить структуру запроса;
- **производительность** — запрос парсится и план выполнения кэшируется БД, повторные вызовы быстрее;
- **удобная работа с типами** — setDate, setBytes, setBigDecimal и т.д.;
- эффективные **batch-операции** (\`addBatch()\` / \`executeBatch()\`).

Правило: **всегда** используйте PreparedStatement для запросов с параметрами. Statement — только для статического DDL.

**CallableStatement** — третий вид, для вызова хранимых процедур: \`{call proc(?, ?)}\`.`,
      },
      {
        id: 'jdbc-transactions',
        question: 'Как управлять транзакциями в JDBC?',
        answer: `По умолчанию JDBC работает в режиме **auto-commit**: каждый SQL-оператор — отдельная транзакция.

Ручное управление:

\`\`\`java
Connection conn = dataSource.getConnection();
try {
    conn.setAutoCommit(false);             // начало транзакции

    debitAccount(conn, from, amount);
    creditAccount(conn, to, amount);

    conn.commit();                          // фиксация
} catch (SQLException e) {
    conn.rollback();                        // откат при ошибке
    throw e;
} finally {
    conn.setAutoCommit(true);
    conn.close();
}
\`\`\`

Дополнительные возможности:

- **уровень изоляции**: \`conn.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED)\`;
- **Savepoint** — частичный откат: \`Savepoint sp = conn.setSavepoint(); conn.rollback(sp);\`
- **read-only подсказка**: \`conn.setReadOnly(true)\`.

В реальных приложениях транзакциями обычно управляет фреймворк: Spring \`@Transactional\` берёт на себя commit/rollback и привязку соединения к потоку.`,
      },
      {
        id: 'connection-pool',
        question: 'Что такое пул соединений и зачем он нужен?',
        answer: `**Пул соединений (Connection Pool)** — кэш открытых соединений с БД, которые переиспользуются вместо создания новых.

**Зачем**: установка соединения дорога (TCP handshake, аутентификация, выделение ресурсов БД — десятки/сотни миллисекунд). Пул создаёт соединения заранее и выдаёт их приложению за микросекунды.

Как работает:

- при старте создаётся минимальный набор соединений;
- \`getConnection()\` выдаёт свободное соединение из пула;
- \`close()\` **не закрывает** соединение, а возвращает его в пул (соединение обёрнуто прокси);
- пул валидирует соединения и пересоздаёт «мёртвые».

Популярные реализации: **HikariCP** (стандарт де-факто, по умолчанию в Spring Boot), Apache DBCP, C3P0, Tomcat JDBC Pool.

Ключевые настройки HikariCP: \`maximumPoolSize\` (правило: ~= cores * 2 + диски), \`minimumIdle\`, \`connectionTimeout\`, \`maxLifetime\`, \`idleTimeout\`.

Типичная ошибка — утечка соединений: незакрытые соединения исчерпывают пул. Решение: try-with-resources, leakDetectionThreshold.`,
      },
    ],
  };

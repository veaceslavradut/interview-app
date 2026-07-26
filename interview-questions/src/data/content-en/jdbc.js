// Английские переводы: jdbc
export const jdbc = {
    title: 'JDBC',
    description: 'Java Database Connectivity',
    questions: {
      'what-is-jdbc': {
        question: 'What is JDBC? Describe its main components.',
        answer: `**JDBC (Java Database Connectivity)** is the standard Java API for working with relational databases.

Main components:

- **DriverManager / DataSource** — obtaining connections (DataSource is the preferred approach; it supports pooling);
- **Connection** — a database connection, transaction management;
- **Statement / PreparedStatement / CallableStatement** — executing SQL;
- **ResultSet** — the query result, a cursor over rows.

Typical code:

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

Execution methods: \`executeQuery()\` — SELECT (ResultSet), \`executeUpdate()\` — INSERT/UPDATE/DELETE (row count), \`execute()\` — universal.`,
      },
      'statement-preparedstatement': {
        question: 'What is the difference between Statement and PreparedStatement?',
        answer: `**Statement** — executes static SQL; parameters are concatenated into the string:

\`\`\`java
stmt.executeQuery("SELECT * FROM users WHERE name = '" + name + "'"); // DANGEROUS!
\`\`\`

**PreparedStatement** — precompiled SQL with parameters:

\`\`\`java
PreparedStatement ps = conn.prepareStatement("SELECT * FROM users WHERE name = ?");
ps.setString(1, name);
\`\`\`

PreparedStatement advantages:

- **protection against SQL injection** — parameters are escaped by the driver; a value cannot change the query structure;
- **performance** — the query is parsed and the execution plan is cached by the database, so repeated calls are faster;
- **convenient type handling** — setDate, setBytes, setBigDecimal, etc.;
- efficient **batch operations** (\`addBatch()\` / \`executeBatch()\`).

Rule: **always** use PreparedStatement for parameterized queries. Statement — only for static DDL.

**CallableStatement** — the third kind, for calling stored procedures: \`{call proc(?, ?)}\`.`,
      },
      'jdbc-transactions': {
        question: 'How do you manage transactions in JDBC?',
        answer: `By default, JDBC operates in **auto-commit** mode: each SQL statement is a separate transaction.

Manual management:

\`\`\`java
Connection conn = dataSource.getConnection();
try {
    conn.setAutoCommit(false);             // start the transaction

    debitAccount(conn, from, amount);
    creditAccount(conn, to, amount);

    conn.commit();                          // commit
} catch (SQLException e) {
    conn.rollback();                        // roll back on error
    throw e;
} finally {
    conn.setAutoCommit(true);
    conn.close();
}
\`\`\`

Additional capabilities:

- **isolation level**: \`conn.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED)\`;
- **Savepoint** — partial rollback: \`Savepoint sp = conn.setSavepoint(); conn.rollback(sp);\`
- **read-only hint**: \`conn.setReadOnly(true)\`.

In real applications, transactions are usually managed by a framework: Spring's \`@Transactional\` takes care of commit/rollback and binding the connection to the thread.`,
      },
      'connection-pool': {
        question: 'What is a connection pool and why is it needed?',
        answer: `A **connection pool** is a cache of open database connections that are reused instead of creating new ones.

**Why**: establishing a connection is expensive (TCP handshake, authentication, database resource allocation — tens/hundreds of milliseconds). The pool creates connections in advance and hands them to the application in microseconds.

How it works:

- a minimum set of connections is created at startup;
- \`getConnection()\` hands out a free connection from the pool;
- \`close()\` **does not close** the connection but returns it to the pool (the connection is wrapped in a proxy);
- the pool validates connections and recreates "dead" ones.

Popular implementations: **HikariCP** (the de facto standard, default in Spring Boot), Apache DBCP, C3P0, Tomcat JDBC Pool.

Key HikariCP settings: \`maximumPoolSize\` (rule of thumb: ~= cores * 2 + disks), \`minimumIdle\`, \`connectionTimeout\`, \`maxLifetime\`, \`idleTimeout\`.

A typical mistake is a connection leak: unclosed connections exhaust the pool. Solution: try-with-resources, leakDetectionThreshold.`,
      },
    },
  };

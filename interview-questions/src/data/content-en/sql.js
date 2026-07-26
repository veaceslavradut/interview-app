// Английские переводы: sql
export const sql = {
    title: 'SQL',
    description: 'Structured Query Language',
    questions: {
      joins: {
        question: 'What types of JOIN exist in SQL?',
        answer: `**INNER JOIN** — only rows that have a match in both tables:

\`\`\`sql
SELECT * FROM orders o
INNER JOIN users u ON o.user_id = u.id;
\`\`\`

**LEFT (OUTER) JOIN** — all rows of the left table + matches from the right (NULL otherwise):

\`\`\`sql
SELECT u.name, o.id FROM users u
LEFT JOIN orders o ON o.user_id = u.id; -- including users without orders
\`\`\`

**RIGHT (OUTER) JOIN** — the mirror of LEFT JOIN: all rows of the right table.

**FULL (OUTER) JOIN** — all rows of both tables, NULL where there is no match.

**CROSS JOIN** — Cartesian product: every row with every row.

**SELF JOIN** — joining a table with itself (e.g., employees and their managers).

Also: \`LEFT JOIN ... WHERE right.id IS NULL\` — the classic way to find rows without a match (anti-join).`,
      },
      'group-by-having': {
        question: 'What is the difference between WHERE and HAVING? How does GROUP BY work?',
        answer: `**GROUP BY** groups rows by column values, allowing aggregate functions (\`COUNT\`, \`SUM\`, \`AVG\`, \`MIN\`, \`MAX\`) to be applied to each group:

\`\`\`sql
SELECT department, COUNT(*) AS cnt, AVG(salary) AS avg_salary
FROM employees
WHERE hire_date > '2020-01-01'   -- filters ROWS (before grouping)
GROUP BY department
HAVING AVG(salary) > 50000       -- filters GROUPS (after grouping)
ORDER BY avg_salary DESC;
\`\`\`

**Difference between WHERE and HAVING:**

- **WHERE** filters individual rows **before** grouping; cannot use aggregate functions;
- **HAVING** filters groups **after** grouping; works with aggregates.

Logical query execution order: **FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT**.

Rule: with GROUP BY, the SELECT list may contain only grouped columns and aggregate functions.`,
      },
      'window-functions': {
        question: 'What are window functions?',
        answer: `**Window functions** perform calculations over a set of rows (a "window") related to the current row, **without collapsing** the rows (unlike GROUP BY).

\`\`\`sql
SELECT name, department, salary,
       ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rn,
       RANK()       OVER (ORDER BY salary DESC) AS rnk,
       AVG(salary)  OVER (PARTITION BY department) AS dept_avg,
       LAG(salary)  OVER (ORDER BY hire_date) AS prev_salary
FROM employees;
\`\`\`

Main functions:

- **ranking**: \`ROW_NUMBER()\` (unique numbers), \`RANK()\` (with gaps), \`DENSE_RANK()\` (without gaps), \`NTILE(n)\`;
- **offset**: \`LAG()\`, \`LEAD()\` — previous/next row; \`FIRST_VALUE()\`, \`LAST_VALUE()\`;
- **aggregates as window functions**: \`SUM() OVER (...)\` — running totals.

Window elements: \`PARTITION BY\` (partitioning), \`ORDER BY\` (ordering), frame (\`ROWS BETWEEN ...\`).

Classic task: "top-3 salaries in each department" — via \`ROW_NUMBER() OVER (PARTITION BY ...)\` in a subquery.`,
      },
      'subqueries-cte': {
        question: 'What are subqueries and CTEs (WITH)?',
        answer: `A **subquery** is a query inside another query:

\`\`\`sql
-- scalar
SELECT name FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);

-- IN / EXISTS
SELECT * FROM users u WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);

-- correlated (executed for each row of the outer query)
SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) FROM users u;
\`\`\`

**CTE (Common Table Expression)** — a named temporary result set via \`WITH\`:

\`\`\`sql
WITH dept_stats AS (
    SELECT department, AVG(salary) AS avg_sal
    FROM employees GROUP BY department
)
SELECT e.name, e.salary, d.avg_sal
FROM employees e JOIN dept_stats d ON e.department = d.department
WHERE e.salary > d.avg_sal;
\`\`\`

**Recursive CTEs** (\`WITH RECURSIVE\`) — traversing hierarchies (org structure, categories).

CTE benefits: readability, reuse within a single query, recursion. EXISTS is usually more efficient than IN on large sets; NOT IN is dangerous with NULL values.`,
      },
      'sql-sublanguages': {
        question: 'What are DDL, DML, DCL, and TCL? Give examples.',
        answer: `SQL is divided into sublanguages by the purpose of the commands:

- **DDL (Data Definition Language)** — defining the database structure: \`CREATE\`, \`ALTER\`, \`DROP\`, \`TRUNCATE\`. Usually triggers an implicit commit (in most databases DDL auto-commits).
- **DML (Data Manipulation Language)** — working with data: \`SELECT\`, \`INSERT\`, \`UPDATE\`, \`DELETE\`. (Sometimes \`SELECT\` is separated into its own DQL.)
- **DCL (Data Control Language)** — managing access rights: \`GRANT\`, \`REVOKE\`.
- **TCL (Transaction Control Language)** — managing transactions: \`COMMIT\`, \`ROLLBACK\`, \`SAVEPOINT\`, \`SET TRANSACTION\`.

The key practical difference: DML operations run **within a transaction** and can be rolled back (\`ROLLBACK\`), while DDL in most databases cannot be rolled back due to the implicit commit.`,
      },
      'delete-vs-truncate': {
        question: 'What is the difference between DELETE and TRUNCATE?',
        answer: `Both remove rows, but fundamentally differently:

**\`DELETE\`** (DML):

- removes rows **one by one**, can use a \`WHERE\` condition;
- logged per row, **triggers** and constraints fire;
- **transactional** — can be rolled back (\`ROLLBACK\`);
- does not reset auto-increment counters; slower on large tables.

**\`TRUNCATE\`** (DDL):

- removes **all** rows of the table at once (no \`WHERE\`);
- fast — frees data pages with minimal logging;
- usually **resets** auto-increment (identity);
- \`DELETE\` triggers do **not** fire; in most databases it's DDL with an implicit commit (in PostgreSQL, however, TRUNCATE is transactional).

In short: to remove some rows, with triggers and the ability to roll back — \`DELETE\`; to quickly clear the whole table — \`TRUNCATE\`. To remove the table itself there is \`DROP\`.`,
      },
      'self-join': {
        question: 'What is a SELF JOIN and when is it needed?',
        answer: `A **SELF JOIN** is joining a table **with itself**. Technically it's an ordinary JOIN where both sides are the same table, so it's given two different **aliases** to distinguish the "instances."

When it's needed: for **hierarchical and recursive relationships within one table**. The classic example is employees and their managers in one \`employees(id, name, manager_id)\` table:

\`\`\`sql
SELECT e.name AS employee, m.name AS manager
FROM employees e
JOIN employees m ON e.manager_id = m.id;
\`\`\`

Other cases: finding pairs of rows with a common attribute (e.g., employees from the same city), comparing a table's rows with each other (records adjacent by date). For deep hierarchies of arbitrary depth, a single self join isn't enough — use **recursive CTEs** (\`WITH RECURSIVE\`).`,
      },
      'join-vs-subquery': {
        question: 'How does a JOIN differ from a subquery? Which should you choose?',
        answer: `A **JOIN** combines rows from several tables by a condition, returning columns from all of them. A **subquery** is a query inside a query whose result is used by the outer one (in \`WHERE\`, \`FROM\`, \`SELECT\`).

Often they solve the same task, and the difference is not so much performance (modern optimizers frequently rewrite one into the other) as readability and intent:

- **JOIN** is handier when you need **columns from several tables** in the result, and is usually clearer for many-to-many relationships;
- a **subquery** is handier for existence checks (\`EXISTS\`/\`IN\`), aggregate filters ("employees earning above their department's average"), and when you don't need columns from the second table.

Nuances:

- a **correlated subquery** (referencing the outer query) runs for each row — it can be slow; often rewritten as a JOIN;
- \`EXISTS\` is usually more efficient than \`IN\` on large sets and safer with \`NULL\` than \`NOT IN\`.

Rule: need data from several tables — JOIN; need a check/filter by an aggregate — a subquery. Verify the result with \`EXPLAIN\`.`,
      },
      'sql-indexes': {
        question: 'What is an index, why is it needed, and what kinds of indexes exist?',
        answer: `An **index** is an auxiliary data structure that speeds up finding rows by a column's value(s) so the database doesn't scan the whole table (Seq/Full Scan). The analogy is a book's index. The cost: indexes **slow down writes** (\`INSERT\`/\`UPDATE\`/\`DELETE\` also update the index) and take up space.

Main kinds:

- **B-Tree** — the **default index** in most databases (PostgreSQL, MySQL/InnoDB). Versatile: equality, ranges (\`<\`, \`>\`, \`BETWEEN\`), sorting, prefix \`LIKE 'abc%'\`.
- **Hash** — equality (\`=\`) only, doesn't support ranges.
- **Bitmap** — effective for columns with few distinct values (low cardinality), in analytics.
- **GiST / GIN** (PostgreSQL) — for full-text search, JSON, geodata, arrays.
- by structure: **clustered** (defines the physical order of rows — in InnoDB this is the primary key; there is one per table) and **non-clustered** (a separate structure with references to rows).

A unique index additionally guarantees uniqueness of values.`,
      },
      'composite-covering-index': {
        question: 'What are composite and covering indexes? When should you use them?',
        answer: `A **composite index** is an index over **several columns at once**, e.g., \`(user_id, status)\`. The key rule is the **order of columns**: the index works for conditions on a **left-to-right prefix**. \`(user_id, status)\` will speed up \`WHERE user_id = ?\` and \`WHERE user_id = ? AND status = ?\`, but **not** \`WHERE status = ?\` alone. So the most selective / most frequently filtered column goes first.

When to use: when queries regularly filter/sort by several fields at once — one composite index is more efficient than several single-column ones.

A **covering index** is an index that contains **all the columns a query needs** (in the condition and in \`SELECT\`). Then the database answers **straight from the index** without touching the table itself (an index-only scan) — noticeably faster. In PostgreSQL extra non-key columns are added via \`INCLUDE (...)\`, in MySQL/InnoDB by including the needed columns in the index.

In short: composite — "filter by several columns respecting order"; covering — "the index has everything to answer, the table isn't needed."`,
      },
      'index-pitfalls': {
        question: 'When do indexes hurt performance, and why might a Seq Scan be used despite an index?',
        answer: `**Indexes hurt when:**

- the table changes often — every \`INSERT\`/\`UPDATE\`/\`DELETE\` updates all indexes, slowing writes;
- there are too many indexes or they're on "wide"/rarely used columns — size and overhead grow without benefit;
- the column has **low selectivity** (few distinct values, e.g., "gender") — the index barely narrows the result set.

**Why the database chooses a Seq Scan even when an index exists:**

- the query returns a **large fraction of the table** — reading everything sequentially is cheaper than jumping through the index and fetching many rows (random I/O);
- the table is small — a full pass is faster than using the index;
- a **function/transformation over the column** in the condition (\`WHERE LOWER(name) = ...\`, a type cast) — an ordinary index doesn't apply (a functional index is needed);
- a leading \`%\` in \`LIKE '%abc'\`, \`OR\` over non-indexed columns, stale statistics (\`ANALYZE\` helps).

The optimizer estimates cost from statistics and picks a Seq Scan when it deems it cheaper — often the **right** decision, not a mistake.`,
      },
      'explain-plan': {
        question: 'How does EXPLAIN (PLAN) work and how do you tell a query is slow?',
        answer: `**\`EXPLAIN\`** shows the query's **execution plan** built by the optimizer: which tables are read and in what order, which indexes are used, how tables are joined, and cost/row-count estimates. **\`EXPLAIN ANALYZE\`** additionally **actually runs** the query and shows the real time and row counts at each step — letting you compare the optimizer's estimate with reality.

What to look at:

- a **Seq Scan / Full Table Scan** on a large table where an index was expected — a sign of a missing or unused index;
- the **join type** (Nested Loop / Hash Join / Merge Join) — a poor choice on large volumes;
- a large **discrepancy between estimated and actual** rows — stale statistics (need \`ANALYZE\`);
- expensive steps: sorts that don't fit in memory, redundant joins.

How to tell a query is slow: measure by fact (\`EXPLAIN ANALYZE\`, timings, the slow query log), find the bottleneck — the most expensive plan step — then fix it (an index, rewrite the query, update statistics). Optimize based on profiling data, not guesses.`,
      },
      'join-algorithms': {
        question: 'What are Nested Loop, Hash Join, and Merge Join?',
        answer: `These are three physical algorithms by which the database implements a logical JOIN; the optimizer picks the right one based on data volume and available indexes.

- **Nested Loop Join** — for each row of the outer table, it iterates over the matching rows of the inner one (efficient if the inner table has an index). Good when **one table is small** or the join is highly selective. On two large tables without an index, it's quadratically slow.
- **Hash Join** — a **hash table** on the join key is built in memory from the smaller table, then the larger table's rows are probed against it. Efficient for joining **two large** tables on equality (\`=\`), doesn't need indexes, but uses memory (spilling to disk if there isn't enough).
- **Merge Join (sort-merge)** — both sides are **sorted** by the key, then merged like two sorted sequences. Advantageous when the data is already sorted (there's an index on the key) or for large sets on equality/range.

In short: Nested Loop — a small table + an index; Hash Join — large tables on equality; Merge Join — already-sorted data. Visible in the \`EXPLAIN\` output.`,
      },
      'sql-locks': {
        question: 'How do database locks work? What are optimistic and pessimistic locking and @Version?',
        answer: `**Locks** prevent concurrent transactions from corrupting data. By granularity they are row-level and table-level, by type — **shared (S, read)** and **exclusive (X, write)**. \`UPDATE\`/\`DELETE\` take an exclusive lock on rows; in PostgreSQL/InnoDB readers usually don't block writers thanks to **MVCC** (row versions). Rows can be locked explicitly with \`SELECT ... FOR UPDATE\`.

Two approaches to concurrent access:

- **Pessimistic locking** — "assume a conflict": the row is locked for the duration of the work (\`SELECT ... FOR UPDATE\`), others wait. Reliable under high contention for the same data, but reduces concurrency and risks deadlocks.
- **Optimistic locking** — "assume conflicts are rare": don't lock, but on write **check whether anyone changed the data**. Implemented via a **version column**: in JPA/Hibernate it's a field with the **\`@Version\`** annotation. On \`UPDATE\`, the condition includes the version (\`WHERE id = ? AND version = ?\`) and increments it; if the version has already changed in another transaction, the update affects no row and an \`OptimisticLockException\` is thrown — the application retries the operation.

Choice: optimistic — for **rare** conflicts (better for scalability); pessimistic — for **frequent** contention over the same rows.`,
      },
    },
  };

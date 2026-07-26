// Английские переводы: hibernate
export const hibernate = {
    title: 'Hibernate / JPA',
    description: 'ORM, entities, caching',
    questions: {
      'what-is-orm': {
        question: 'What are ORM, JPA, and Hibernate?',
        answer: `**ORM (Object-Relational Mapping)** — a technology for mapping objects to relational database tables: working with data through objects instead of hand-written SQL.

**JPA (Jakarta/Java Persistence API)** — the ORM **specification** (standard) for Java: annotations (\`@Entity\`, \`@Id\`, \`@OneToMany\`), the \`EntityManager\` interface, the JPQL query language.

**Hibernate** — the most popular JPA **implementation** (others: EclipseLink, OpenJPA). It provides extensions beyond the standard: Session, HQL, second-level cache, @Formula, and more.

\`\`\`java
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @OneToMany(mappedBy = "user")
    private List<Order> orders;
}
\`\`\`

**The relationship**: JPA is the contract, Hibernate is the engine. Write code against JPA (portability); use Hibernate-specific features deliberately.

**Spring Data JPA** — one more layer: repositories with auto-generated queries (\`findByNameAndAgeGreaterThan\`) on top of JPA/Hibernate.

ORM pros: development speed, portability, caching, dirty checking. Cons: harder to control SQL, N+1, overhead — for complex analytics native SQL is often better.`,
      },
      'entity-states': {
        question: 'What states can an entity have? What is the Persistence Context?',
        answer: `**Persistence Context** — the "first-level cache": the area where the EntityManager tracks loaded entities and their changes (dirty checking). It usually lives within a transaction.

**Entity states:**

- **Transient (new)** — a new object, not associated with the context, no id in the database:

\`\`\`java
User user = new User("John"); // transient
\`\`\`

- **Managed (persistent)** — attached to the context; **all changes are automatically synchronized** with the database on flush/commit:

\`\`\`java
em.persist(user);              // managed
user.setName("Jane");          // UPDATE runs automatically — dirty checking
\`\`\`

- **Detached** — the context is closed or the entity was detached; changes are not tracked:

\`\`\`java
em.detach(user);               // or closing the EntityManager
user.setName("Bob");           // won't reach the database
User managed = em.merge(user); // reattachment (merge returns a NEW managed object)
\`\`\`

- **Removed** — marked for deletion: \`em.remove(user)\` → DELETE at commit.

Within the same transaction, a repeated \`find()\` for the same id returns **the same object** from the context without hitting the database (repeatable read at the object level).`,
      },
      'lazy-eager': {
        question: 'What is the difference between LAZY and EAGER loading? What is LazyInitializationException?',
        answer: `**FetchType** determines when related entities are loaded:

- **EAGER** — immediately, together with the parent (JOIN or a separate query);
- **LAZY** — on first access (Hibernate substitutes a proxy).

**Defaults**: \`@ManyToOne\`, \`@OneToOne\` — EAGER; \`@OneToMany\`, \`@ManyToMany\` — LAZY.

\`\`\`java
@Entity
public class User {
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Order> orders;   // proxy collection, loaded on access
}
\`\`\`

**LazyInitializationException** — accessing a LAZY association **after** the Persistence Context has closed (outside a transaction):

\`\`\`java
User user = userService.findById(1L); // the transaction has closed
user.getOrders().size();              // LazyInitializationException!
\`\`\`

**Proper solutions:**

- **JOIN FETCH** in the query: \`SELECT u FROM User u JOIN FETCH u.orders WHERE u.id = :id\`;
- **@EntityGraph** in Spring Data: \`@EntityGraph(attributePaths = "orders")\`;
- DTO projection — select exactly the needed fields right away;
- extend the transaction to cover the whole use case.

**Bad solutions**: \`spring.jpa.open-in-view=true\` (holds a connection for the whole request; recommended to disable in new projects), EAGER everywhere (always loads unnecessary data).

Recommendation: make **everything LAZY** (including @ManyToOne), and load the needed associations explicitly for each specific scenario.`,
      },
      'n-plus-one': {
        question: 'What is the N+1 problem and how do you solve it?',
        answer: `**The N+1 problem** — instead of one query, 1 (the list of parents) + N (a query per parent's association) are executed:

\`\`\`java
List<User> users = userRepo.findAll();        // 1 query: SELECT * FROM users
for (User u : users) {
    u.getOrders().size();                     // N queries: SELECT * FROM orders WHERE user_id = ?
}
// 100 users = 101 queries!
\`\`\`

It arises from LAZY loading of associations inside a loop (and with EAGER it hides even deeper).

**Solutions:**

- **JOIN FETCH** (JPQL):

\`\`\`java
@Query("SELECT u FROM User u JOIN FETCH u.orders")
List<User> findAllWithOrders();   // 1 query with a JOIN
\`\`\`

- **@EntityGraph** (Spring Data):

\`\`\`java
@EntityGraph(attributePaths = {"orders"})
List<User> findAll();
\`\`\`

- **@BatchSize(size = 50)** (Hibernate) — loads associations in batches via IN: 1 + N/50 queries;
- \`hibernate.default_batch_fetch_size\` — globally;
- **DTO projection** — select flat data in a single query right away.

**Caveat**: JOIN FETCH on two collections at once causes \`MultipleBagFetchException\` / a Cartesian product — combine fetch + @BatchSize.

**How to detect it**: SQL logging (\`spring.jpa.show-sql\`, p6spy), Hibernate metrics, static analysis. N+1 is the most common cause of performance degradation in JPA applications.`,
      },
      'hibernate-caches': {
        question: 'What caching levels does Hibernate have?',
        answer: `**First-level cache (L1)** — the Persistence Context / Session:

- **always** enabled, cannot be disabled;
- scope — one session/transaction;
- a repeated \`find()\` for the same id doesn't hit the database;
- cleared on \`clear()\`, \`detach()\`, or session close.

**Second-level cache (L2)** — shared across all sessions (per SessionFactory):

- disabled by default, enabled explicitly;
- providers: Ehcache, Caffeine, Infinispan, Hazelcast (via JCache);
- caches entities by id:

\`\`\`java
@Entity
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Country { ... }
\`\`\`

- strategies: READ_ONLY (reference data), READ_WRITE, NONSTRICT_READ_WRITE, TRANSACTIONAL.

**Query Cache** — caches query results (lists of ids); works only together with L2; invalidated on **any** change to the affected tables — rarely useful.

**L2 pitfalls:**

- stale data when the database is modified bypassing Hibernate;
- invalidation in a cluster requires a distributed cache;
- makes sense for rarely changing data (reference data).

In practice, business data is more often cached explicitly at the service level (Spring \`@Cacheable\` + Redis/Caffeine), while L2 is used selectively.`,
      },
      'hibernate-vs-jdbc': {
        question: 'How is Hibernate better than plain JDBC? What are its downsides?',
        answer: `**JDBC** is a low-level API: the developer writes the SQL, manually maps the \`ResultSet\` to objects, manages \`Connection\`/\`Statement\`, and handles \`SQLException\`. Lots of boilerplate.

**Hibernate** is an ORM on top of JDBC that automates this:

- **mapping** objects to tables via annotations — no manual assembling of objects from rows;
- **SQL generation** for the target database (dialects) — portability;
- a **Persistence Context** with dirty checking, first-level caching, and automatic synchronization of changes;
- convenient navigation across associations, lazy loading, HQL/Criteria, second-level cache, optimistic locking.

**Downsides:**

- hidden complexity — the "magic" (lazy loading, N+1, auto-flush) requires understanding, otherwise it creates implicit performance problems;
- overhead compared to targeted hand-written SQL;
- for heavy analytical queries and bulk operations, plain SQL is often more efficient.

Bottom line: Hibernate speeds up CRUD development and simplifies working with the domain model, but for bottlenecks native SQL is sometimes needed.`,
      },
      'session-vs-sessionfactory': {
        question: 'How does Session differ from SessionFactory?',
        answer: `**\`SessionFactory\`** is a heavyweight, thread-safe object created **once** per application (per persistence unit). It holds the configuration, mappings, connection pool, and second-level cache. Creating it is expensive, so it exists as a single instance and serves as a factory of sessions.

**\`Session\`** is a lightweight, **non-thread-safe** object representing a unit of work (usually one request/transaction). It wraps a database connection, holds the first-level **Persistence Context** (the cache of managed entities), and performs operations (\`save\`, \`get\`, \`query\`). It is created from the \`SessionFactory\` for a specific operation and closed when it completes.

In JPA terms they correspond to **\`EntityManagerFactory\`** and **\`EntityManager\`**. Rule: one \`SessionFactory\` per application, many short-lived \`Session\`s — one per thread/transaction.`,
      },
      'persist-merge-save': {
        question: 'What is the difference between persist(), save(), merge(), and update()?',
        answer: `The methods for moving an object into the managed state differ in semantics:

- **\`persist()\`** (JPA) — makes a **transient** object managed. It does not guarantee an immediate \`INSERT\` (it may be deferred until flush) and returns nothing. It throws if the object is already detached.
- **\`save()\`** (Hibernate) — similar to \`persist\`, but immediately generates the identifier and returns it; Hibernate-specific.
- **\`merge()\`** (JPA) — takes a **detached** (or transient) object, **copies its state** into a managed instance from the Persistence Context (loading it if needed), and returns the **managed copy**. Important: the passed object stays detached — you must work with the returned one.
- **\`update()\`** (Hibernate) — reattaches a detached object to the session, making it managed. It throws if such an object already exists in the context (unlike \`merge\`).

Modern JPA code usually uses \`persist\` for new entities and \`merge\` for detached ones; the Hibernate-specific \`save\`/\`update\`/\`saveOrUpdate\` are considered legacy.`,
      },
      'flush-commit': {
        question: 'What is the difference between flush() and commit()? What is dirty checking?',
        answer: `**\`flush()\`** synchronizes the Persistence Context with the database — it executes the accumulated \`INSERT\`/\`UPDATE\`/\`DELETE\`, but **within the current transaction** and **without ending it**. The data is visible inside the transaction but can still be rolled back.

**\`commit()\`** ends the transaction: first it calls \`flush()\` (flushing changes), then it commits them to the database permanently. After commit, a rollback is impossible.

**Dirty checking** — on flush, Hibernate automatically compares the current state of managed entities with the snapshot taken at load time, and generates an \`UPDATE\` for the changed ones. That's why an explicit \`save\`/\`update\` isn't needed for an already-managed object: just change a field and it will be saved on flush.

**FlushMode** controls when the automatic flush happens: by default (\`AUTO\`) — before running a query that might depend on unsaved changes, and at commit. If you don't flush/commit, the changes won't reach the database. \`clear()\` empties the context, detaching all entities (managed → detached).`,
      },
      'hql-vs-criteria': {
        question: 'What is HQL and how does it differ from the Criteria API?',
        answer: `Both are ways to write queries against entities (rather than tables directly).

**HQL (Hibernate Query Language)** / its JPA standard **JPQL** — an object-oriented, SQL-like language that operates on **entity and field names**, not tables and columns: \`FROM User u WHERE u.age > :age\`. Compact and readable, but the query is a **string**, so errors show up only at runtime.

**Criteria API** — building a query programmatically through Java objects (\`CriteriaBuilder\`, \`CriteriaQuery\`, \`Root\`). More verbose, but **type-safe** (especially with the metamodel), checked by the compiler, and convenient for **dynamic** queries assembled from conditions (filters whose set is not known in advance).

Rule of thumb: **HQL/JPQL** for static, known queries (shorter and clearer); **Criteria** for dynamically built queries. For recurring queries there are **named queries** (\`@NamedQuery\`), which are parsed once at startup.`,
      },
      'mappedby-joincolumn': {
        question: 'What is the difference between mappedBy and @JoinColumn? What is the owning side?',
        answer: `In a bidirectional association there is always an **owning side** — the side whose changes Hibernate translates to the database (it is responsible for the foreign key). The other side is the **inverse** side.

- **\`@JoinColumn\`** goes on the **owning** side and defines the foreign-key column. The owner "physically" holds the association.
- **\`mappedBy = "field"\`** goes on the **inverse** side and says: "the association is already mapped by a field on the other side; I have no foreign key of my own." This makes the side read-only with respect to the association.

Example: \`@OneToMany(mappedBy = "author") List<Book> books\` in \`Author\`, and in \`Book\` — \`@ManyToOne @JoinColumn(name = "author_id") Author author\`. The owner is \`Book\`.

A common mistake: changing only the inverse side and expecting it to be saved — the change won't reach the database, because the owner is responsible for the foreign key. You must update the owning side (or both, to keep the in-memory state consistent).`,
      },
      'manytomany-intermediate': {
        question: 'When do you need a separate intermediate entity instead of @ManyToMany?',
        answer: `\`@ManyToMany\` with \`@JoinTable\` is suitable only when the join table contains **exactly two foreign keys** and no data of its own.

As soon as the relationship needs **additional attributes**, a separate entity for the join table becomes necessary. Examples of attributes: quantity and price in "order ↔ product", enrollment date and grade in "student ↔ course", role in "user ↔ project".

In that case \`@ManyToMany\` is replaced by **two \`@OneToMany\`/\`@ManyToOne\` associations** through an intermediate entity (e.g., \`OrderItem\`) that holds references to both sides plus its own fields.

Additional reasons to prefer an intermediate entity even without extra fields:

- better control over cascades and deletion;
- the option of a separate primary key and auditing;
- \`@ManyToMany\` can be finicky on updates (deleting/recreating join-table rows). In practice many avoid \`@ManyToMany\` altogether in favor of an explicit entity.`,
      },
      'element-collection': {
        question: 'What is @ElementCollection and when should you use it?',
        answer: `**\`@ElementCollection\`** maps a collection of **non-entities** — primitives, strings, or embeddable objects (\`@Embeddable\`) — into a separate table, **without creating a separate entity**. The elements belong entirely to the owner and have no identity of their own.

Example: a list of phone numbers or a set of tags on a user — \`@ElementCollection List<String> phones\`; the data goes into a separate table with a foreign key to the owner.

Characteristics:

- the elements' lifecycle depends **entirely** on the owner (no id of their own, cannot be referenced externally);
- loading is **LAZY** by default;
- updates are often implemented as **deleting all rows and re-inserting**, which is inefficient for large collections;
- for embeddable types, \`@Embeddable\` + \`@ElementCollection\` is used.

When to choose it: simple "owned" sets of values with no independent life. If the elements have identity, are reused, or are referenced, you need a full entity and \`@OneToMany\`.`,
      },
    },
  };

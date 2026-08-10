// Английские переводы: patterns
export const patterns = {
    title: 'Design Patterns',
    description: 'Principles (SOLID, DRY, KISS, DDD), GoF patterns, and architectural patterns',
    questions: {
      'pattern-groups': {
        question: 'What groups of design patterns exist?',
        answer: `The classic GoF patterns (Gang of Four, 23 patterns) are divided into three groups:

**Creational** — object creation:

- **Singleton** — a single instance;
- **Factory Method** — delegating creation to subclasses;
- **Abstract Factory** — families of related objects;
- **Builder** — step-by-step construction of complex objects;
- **Prototype** — cloning.

**Structural** — composition of classes and objects:

- **Adapter** — reconciling incompatible interfaces;
- **Decorator** — dynamically adding functionality;
- **Proxy** — a surrogate that controls access;
- **Facade** — a simplified interface to a subsystem;
- **Composite** — "part-whole" tree structures;
- Bridge, Flyweight.

**Behavioral** — object interaction:

- **Strategy** — interchangeable algorithms;
- **Observer** — subscribing to events;
- **Template Method** — the skeleton of an algorithm in a base class;
- **Iterator**, **Command**, **State**, **Chain of Responsibility**, Mediator, Memento, Visitor, Interpreter.`,
      },
      singleton: {
        question: 'Tell us about the Singleton pattern. How do you implement it correctly?',
        answer: `**Singleton** guarantees the existence of a single instance of a class and a global access point to it.

**Lazy thread-safe implementation — Double-Checked Locking:**

\`\`\`java
public class Singleton {
    private static volatile Singleton instance;
    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
\`\`\`

**Initialization-on-demand holder** (lazy and elegant, no synchronized):

\`\`\`java
public class Singleton {
    private Singleton() {}
    private static class Holder {
        static final Singleton INSTANCE = new Singleton();
    }
    public static Singleton getInstance() { return Holder.INSTANCE; }
}
\`\`\`

**Enum singleton** (Joshua Bloch's recommendation — protection against reflection and serialization):

\`\`\`java
public enum Singleton { INSTANCE; }
\`\`\`

Criticism: global state, hidden dependencies, hard to test. In modern applications the lifecycle is managed by DI containers (Spring beans are singletons within the context by default).`,
      },
      'factory-builder': {
        question: 'What is the difference between Factory Method, Abstract Factory, and Builder?',
        answer: `All three are creational patterns, but they solve different problems:

**Factory Method** — defines an interface for creating an object, letting subclasses decide which class to instantiate:

\`\`\`java
abstract class Dialog {
    abstract Button createButton();   // factory method
    void render() { createButton().onClick(); }
}
class WindowsDialog extends Dialog {
    Button createButton() { return new WindowsButton(); }
}
\`\`\`

**Abstract Factory** — creating **families** of related objects without specifying concrete classes:

\`\`\`java
interface GUIFactory {
    Button createButton();
    Checkbox createCheckbox();  // a family of consistent components
}
class MacFactory implements GUIFactory { ... }
\`\`\`

**Builder** — step-by-step construction of a complex object; separates construction from representation:

\`\`\`java
User user = User.builder()
    .name("John")
    .age(30)
    .email("john@mail.com")
    .build();
\`\`\`

In short: Factory Method — "which object to create" (one product), Abstract Factory — "which family to create", Builder — "how to assemble a complex object step by step" (solves the telescoping constructor problem).`,
      },
      'patterns-in-jdk': {
        question: 'Which patterns are used in the JDK and Spring?',
        answer: `**In the JDK:**

- **Singleton** — \`Runtime.getRuntime()\`;
- **Factory Method** — \`Integer.valueOf()\`, \`Optional.of()\`, \`List.of()\`, \`Calendar.getInstance()\`;
- **Builder** — \`StringBuilder\`, \`Stream.Builder\`, \`HttpRequest.newBuilder()\`;
- **Decorator** — I/O streams: \`new BufferedReader(new FileReader(...))\`, \`Collections.unmodifiableList()\`;
- **Adapter** — \`Arrays.asList()\`, \`InputStreamReader\` (bytes → characters);
- **Iterator** — \`Iterator\`, for-each;
- **Observer** — \`java.util.EventListener\`, \`PropertyChangeListener\`;
- **Strategy** — \`Comparator\` in \`sort()\`;
- **Template Method** — \`AbstractList\`, \`AbstractMap\`;
- **Proxy** — \`java.lang.reflect.Proxy\`;
- **Flyweight** — the \`Integer.valueOf()\` cache (-128..127), the String Pool;
- **Chain of Responsibility** — \`javax.servlet.Filter\`.

**In Spring:**

- **Singleton** — the default bean scope;
- **Factory** — \`BeanFactory\`, \`FactoryBean\`;
- **Proxy** — AOP, \`@Transactional\`, \`@Cacheable\` (JDK dynamic proxy / CGLIB);
- **Template Method** — \`JdbcTemplate\`, \`RestTemplate\`, \`TransactionTemplate\`;
- **Observer** — \`ApplicationEvent\`, \`@EventListener\`;
- **Adapter** — \`HandlerAdapter\` in Spring MVC;
- **Strategy** — \`PlatformTransactionManager\`, converters;
- **Front Controller** — \`DispatcherServlet\`.`,
      },
      solid: {
        question: 'What are the SOLID principles?',
        answer: `**SOLID** is five principles of object-oriented design (Robert Martin) that make code flexible and maintainable:

- **S — Single Responsibility**: a class should have one reason to change — one area of responsibility.
- **O — Open/Closed**: entities are open for extension but closed for modification — new behavior is added without changing existing code (via abstractions, inheritance, composition).
- **L — Liskov Substitution**: an object of a subclass must be substitutable for an object of the base class without breaking the program's correctness.
- **I — Interface Segregation**: many small, specialized interfaces are better than one "fat" interface — a client should not depend on methods it doesn't use.
- **D — Dependency Inversion**: high-level modules depend on abstractions, not concrete implementations; details depend on abstractions.

The goal is to reduce coupling, increase cohesion, and make code easier to change and test.`,
      },
      'dry-kiss-yagni': {
        question: 'What do the DRY, KISS, and YAGNI principles mean?',
        answer: `These principles complement SOLID and keep code simple:

- **DRY (Don't Repeat Yourself)** — don't duplicate knowledge: every piece of logic should have a single authoritative representation in the system. Duplication leads to drift when things change. Not to be confused with mechanically removing any similarity — what matters is unity of *knowledge*, not matching lines of text.
- **KISS (Keep It Simple, Stupid)** — choose the simplest solution that works; add complexity only when it is truly justified.
- **YAGNI (You Aren't Gonna Need It)** — don't build functionality "for the future" until it is actually needed: premature generality bloats the code and rarely guesses the real requirements.

Together they fight over-engineering, while SOLID fights poor structure.`,
      },
      ddd: {
        question: 'What is Domain-Driven Design (DDD) and a bounded context?',
        answer: `**DDD (Domain-Driven Design)** is an approach that puts the domain and its model at the center of development, rather than the technical implementation. The key idea is a shared **ubiquitous language** for developers and domain experts, reflected directly in the code.

Core building blocks:

- **Entity** — an object with identity (its id matters, not just its values).
- **Value Object** — an object without identity, defined by its values (money, address), usually immutable.
- **Aggregate** — a cluster of related objects with a root (aggregate root) through which all changes go; a consistency boundary.
- **Repository** — an abstraction for accessing aggregates.

**Bounded context** — an explicit boundary within which the model and its terms are unambiguous. In different contexts the same term ("Customer") can mean different things. Context boundaries often become microservice boundaries, and their interactions are described by a context map.`,
      },
      'architecture-styles': {
        question: 'How do layered, hexagonal, and clean architectures differ?',
        answer: `All three separate responsibilities into layers; they differ in the direction of dependencies.

- **Layered (n-tier)** — the classic layers: presentation → business → data access. Dependencies go top-down, so business logic depends on the data layer. Simple, but the domain ends up coupled to infrastructure (the database, the framework).
- **Hexagonal (ports & adapters)** — the domain is at the center, and everything external (database, UI, queues) connects through **ports** (interfaces) and **adapters**. The domain knows nothing about the details; adapters implement the ports. Easy to swap infrastructure and to test.
- **Clean Architecture** — concentric layers with the **dependency rule**: dependencies point only inward, toward the domain (entities → use cases → interface adapters → frameworks). Essentially a generalization of hexagonal.

The shared principle of the latter two is **dependency inversion**: business logic does not depend on infrastructure, but the other way around. Choice: layered for simple applications; hexagonal/clean where domain independence and testability matter.`,
      },
      'pattern-vs-antipattern': {
        question: 'How does a pattern differ from an anti-pattern? What is an architectural pattern?',
        answer: `A **design pattern** is a proven, typical solution to a commonly occurring design problem in a given context. Not ready-made code, but a description of an approach.

An **anti-pattern** is a common solution that looks good at first but leads to negative consequences. Examples: **God Object** (a class that knows and does everything), **Spaghetti code**, **Golden Hammer** (one favorite tool for every problem), **Copy-Paste programming**.

**Levels of patterns:**

- **design patterns (GoF)** — the level of classes and objects (Singleton, Strategy, Observer);
- **architectural patterns** — the structure of the whole application (MVC, layered, microservices, event-driven);
- **enterprise integration patterns** — the level of systems interacting (Saga, CQRS, Event Sourcing).

The difference is scale: from organizing a few classes to the structure of the entire system.`,
      },
      'strategy-vs-state': {
        question: 'What is the Strategy pattern and how does it differ from State?',
        answer: `**Strategy** is a behavioral pattern: a family of interchangeable algorithms is extracted into separate classes behind a common interface, and the client picks the one it needs at runtime. It lets you change the algorithm independently of the code that uses it (e.g., different sorting, payment, or discount strategies).

**State** is a behavioral pattern: an object changes its behavior when its internal state changes, as if its class changed. Each state is a separate class, and the object delegates behavior to the current state.

Structurally they are almost identical (delegation to an object behind an interface), but they differ in **intent**:

- in **Strategy**, the client deliberately chooses the algorithm, and the strategies don't know about each other;
- in **State**, transitions between states are often encapsulated within the states themselves, and the object switches automatically as it works.`,
      },
      'decorator-proxy-composite': {
        question: 'What is the difference between Decorator, Proxy, and Composite?',
        answer: `All three are structural patterns that wrap an object of the same interface, but with different goals:

- **Decorator** — dynamically **adds behavior** to an object by wrapping it and calling the wrapped object "plus something extra." Decorators can be nested. Example in the JDK: I/O stream wrappers (\`BufferedInputStream\` over \`FileInputStream\`).
- **Proxy** — provides a **surrogate / access control** to an object with the same interface, without changing its behavior: lazy initialization (virtual proxy), access control, remote calls, caching. In Spring, \`@Transactional\` and AOP are implemented via proxies.
- **Composite** — assembles objects into a **tree structure** and lets you treat the tree and an individual element uniformly (files and folders, UI components).

Key: Decorator "extends," Proxy "controls access," Composite is "part-whole."`,
      },
      observer: {
        question: 'What is the Observer pattern?',
        answer: `**Observer** is a behavioral pattern: a **subject** keeps a list of dependent **observers** and automatically notifies them when its state changes by calling their method. It implements a one-to-many relationship with loose coupling — the subject only knows the observer interface.

Uses: event subscriptions, reactive streams, UI event mechanisms, model-view bindings.

Examples and relatives:

- historically in Java — \`java.util.Observable\`/\`Observer\` (deprecated);
- event listeners (\`ActionListener\` in Swing);
- \`PropertyChangeListener\`;
- conceptually, publish-subscribe and reactive programming (RxJava, Project Reactor) are built on it.

Downside — with many observers and cascading notifications, order and performance become hard to track.`,
      },
      'template-method-vs-strategy': {
        question: 'What is Template Method and how does it differ from Strategy?',
        answer: `**Template Method** is a behavioral pattern: a base class defines the **skeleton of an algorithm** in a single method and leaves individual steps abstract/overridable so subclasses fill them in without changing the overall structure. It is based on **inheritance**.

Difference from **Strategy**:

- **Template Method** uses inheritance: the varying steps are overridden methods of a subclass; the algorithm's structure is fixed in the parent. The behavior is chosen at compile time (which subclass was created).
- **Strategy** uses composition: the whole algorithm is extracted into a separate object that can be swapped at runtime.

Rule of thumb: Template Method is "a fixed algorithm with variable steps via inheritance," Strategy is "an interchangeable algorithm via composition." Template Method examples in Spring: \`JdbcTemplate\`, \`RestTemplate\` — they define the frame while the details are passed in via callbacks.`,
      },
      adapter: {
        question: 'What is the Adapter pattern?',
        answer: `**Adapter** is a structural pattern: it converts the interface of an existing class into the interface a client expects, allowing classes with incompatible interfaces to work together. The adapter wraps the adaptee and translates the calls.

Two kinds:

- **object adapter** — via composition (the adapter holds a reference to the adaptee); preferred;
- **class adapter** — via multiple inheritance (limited in Java, since there is no multiple class inheritance).

Uses: integrating third-party/legacy libraries, adapting someone else's API to your own. JDK examples: \`Arrays.asList()\` (array → List), \`InputStreamReader\` (byte stream → character stream), listener adapter classes in Swing.

Difference from Decorator: Adapter **changes the interface** without adding behavior; Decorator keeps the interface but **adds behavior**.`,
      },
      saga: {
        question: 'What is the SAGA pattern and why is it needed?',
        answer: `**SAGA** is a pattern for managing a **distributed transaction** across microservices without a shared database or two-phase commit. Instead of one ACID transaction, the business operation is split into a sequence of local transactions in different services; for each one a **compensating operation** is defined to undo its effect on failure.

Two ways to coordinate:

- **Choreography** — services exchange events and react to them; there is no central coordinator. Simpler, but the logic is harder to trace.
- **Orchestration** — a dedicated orchestrator (saga orchestrator) invokes the steps in order and triggers compensations on error. The logic is centralized and explicit.

SAGA provides not atomicity but **eventual consistency**: the system passes through intermediate inconsistent states and converges to a correct one. Example: order → charge payment → reserve stock; if the reservation fails, a compensation runs — refund the payment.`,
      },
      'cqrs-event-sourcing': {
        question: 'What are CQRS and Event Sourcing? How are they related?',
        answer: `**CQRS (Command Query Responsibility Segregation)** — splitting the model into **commands** (change state) and **queries** (read state). The read and write models can be designed, scaled, and stored independently: for example, a normalized write model and denormalized read views. Pro — optimizing and scaling reads and writes separately; con — added complexity and model drift (usually eventual consistency).

**Event Sourcing** — state is stored not as the current snapshot but as an **ordered sequence of events** (facts of change). The current state is obtained by "replaying" the events. Pros: full history and audit, the ability to reconstruct state at any point in time, natural integration through events. Cons: complexity, event versioning, the need for snapshots for performance.

**Relationship:** they are often used together — the write model emits events (Event Sourcing), and read models (projections) are built from the event stream for CQRS. But each also works on its own.`,
      },
      'circuit-breaker': {
        question: 'What are Circuit Breaker, Retry, and Backoff?',
        answer: `These are **resilience** patterns for calling unreliable remote services.

**Circuit Breaker** — wraps a call and tracks errors. It has three states:

- **Closed** — calls pass through; errors are counted.
- **Open** — once the error threshold is exceeded, calls are rejected immediately (fail fast) without loading the failing service; the client gets a fallback.
- **Half-Open** — after a timeout, a trial call is allowed; success → Closed, failure → Open again.

It protects against cascading failures and gives the service time to recover.

**Retry** — automatically repeats a failed request: helps with transient failures. Dangerous without limits — it can amplify load on a failing service.

**Backoff** — the delay between retries, usually **exponential** (1s, 2s, 4s…) plus **jitter** (random spread) so clients don't retry in sync. Implementations: Resilience4j, Spring Retry. Retry is applied only to **idempotent** operations.`,
      },
      idempotency: {
        question: 'What is idempotency and how do you implement idempotent requests?',
        answer: `**Idempotency** is a property of an operation where executing it repeatedly with the same parameters yields the same result and produces no side effects beyond the first execution. It matters in distributed systems where, due to retries, timeouts, and "at-least-once" delivery, the same request may arrive multiple times.

In HTTP, GET, PUT, and DELETE are idempotent; **POST is not** (two POSTs create two resources).

How to make a POST idempotent — an **idempotency key**:

1. the client generates a unique key and sends it in a header;
2. on the first request the server performs the operation and stores the result under that key;
3. on a repeat with the same key the server does not perform the operation again but returns the stored result.

Additionally helpful: unique constraints in the database, deduplication by a business key, optimistic locking. Idempotency is a prerequisite for safely applying Retry and "at-least-once" semantics.`,
      },
    },
  };

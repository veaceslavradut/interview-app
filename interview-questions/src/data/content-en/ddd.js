// Английские переводы: ddd
export const ddd = {
  title: 'Domain-Driven Design',
  description: 'Ubiquitous Language, Bounded Context, Aggregate, tactical and strategic patterns',
  questions: {
    'what-is-ddd': {
      question: 'What is Domain-Driven Design (DDD)?',
      answer: `**Domain-Driven Design** is an approach to designing complex software that puts the **domain** and its model at the center, rather than technical layers. The core idea is to build code around a business model worked out together with domain experts.

DDD has two levels:

- **Strategic** — how to split a large system: **Bounded Context**, **Ubiquitous Language**, the Context Map, Anti-Corruption Layer;
- **Tactical** — how the code inside a context is structured: **Entity**, **Value Object**, **Aggregate**, Repository, Domain Service, Domain Event, Factory.

DDD pays off where the **complexity is in the domain itself** (rich rules, invariants, many terms). For simple CRUD it is overkill — an anemic model is enough.

The term was coined by Eric Evans in his book *"Domain-Driven Design"* (2003).`,
    },
    'ddd-problems': {
      question: 'What problems does DDD solve?',
      answer: `DDD fights the typical ailments of complex systems:

- **Gap between business and code** — analysts, developers and experts speak different languages; the meaning of business rules is lost in the code. DDD introduces a **Ubiquitous Language** — a shared language.
- **Smeared business logic** — rules are scattered across controllers, services and SQL (an anemic domain model). DDD gathers logic into the domain model (a rich model).
- **Big ball of mud** — a single model for the whole system where everything is coupled to everything. DDD cuts the system into **Bounded Contexts** with explicit boundaries.
- **Clashing terms** — "customer" means different things in Sales and in Support. Contexts let different models coexist.
- **Fragile consistency** — invariants break because of implicit transaction boundaries. An **Aggregate** defines the consistency boundary.

DDD is not about a framework — it is about **managing complexity** through modeling and boundaries.`,
    },
    'ubiquitous-language': {
      question: 'What is the Ubiquitous Language?',
      answer: `**Ubiquitous Language** is a shared language of domain terms spoken by **both domain experts and developers**, and reflected **directly in the code** (class, method and event names).

The point is to remove the "business → analyst → developer → code" translation, where meaning is lost at every step. If the business says *"the order is shipped"*, the code gets \`Order.ship()\` and an \`OrderShipped\` event, not \`updateStatus(3)\`.

Properties:

- it is developed **collaboratively** and continuously refined;
- it is **tied to a Bounded Context** — outside that context the same term may mean something else;
- it lives in conversations, documentation and code in sync (drift is a sign of model decay).

A good language passes this test: a domain expert reading the names in the code/tests understands what is happening.`,
    },
    'bounded-context': {
      question: 'What is a Bounded Context?',
      answer: `A **Bounded Context** is an explicit boundary within which a particular domain model and its Ubiquitous Language are **consistent and unambiguous**. Beyond the boundary a different model with its own language applies.

Example: in the *Sales* context \`Product\` is about price, discounts, availability; in the *Warehouse* context the same \`Product\` is about dimensions, weight, storage location. Merging them into one class is a mistake — these are **two different \`Product\`s** in two contexts.

Why it is needed:

- a single model for the whole system inevitably turns into a "big ball of mud";
- a context limits the area where a term has one meaning;
- often (not always) a Bounded Context maps onto the boundary of a **microservice** or a separate module.

Relationships between contexts are described by the **Context Map** (Partnership, Customer–Supplier, Conformist, Anti-Corruption Layer, Shared Kernel, etc.).`,
    },
    'identify-bounded-contexts': {
      question: 'How do you identify Bounded Contexts in a system?',
      answer: `Context boundaries are found **by the meaning of the language**, not by technical layers. Signs that you are looking at different contexts:

- **one term means different things** ("order" during checkout vs. during delivery) — the strongest signal of a boundary;
- **different groups of experts / departments** own different parts (sales, warehouse, billing);
- **different reasons to change** — parts change for independent business reasons (a system-level cousin of SRP);
- **different data models and lifecycles** of entities.

Useful techniques:

- **Event Storming** — a collaborative workshop: lay out domain events over time, and clusters of events reveal the boundaries;
- analysis of the **Ubiquitous Language** — where the language "breaks", there is a boundary;
- **Domain Storytelling**, analysis of business capabilities.

A mistake is to cut by technical entities ("User service", "Order service") instead of business capabilities.`,
    },
    'same-term-different-context': {
      question: 'Can the same business term mean different things in different contexts?',
      answer: `Yes — and this is the **norm**, not a problem. The same term in different Bounded Contexts often denotes different models.

The classic example is **Customer**:

- in the *Sales* context — purchase history, discounts, segment;
- in the *Support* context — tickets, communication channels, priority;
- in the *Billing* context — payment details, outstanding balance.

Trying to build **one universal \`Customer\` class** for all cases leads to a bloated model that drags in foreign fields and couples the unrelated. Better — **its own \`Customer\` model in each context**, linked only by a shared identifier.

That is exactly why the Ubiquitous Language is **tied to a context**: unambiguity is guaranteed only inside the boundary. Reconciling meanings across contexts is the job of the Context Map and translation (the Anti-Corruption Layer).`,
    },
    'entity': {
      question: 'What is an Entity?',
      answer: `An **Entity** is a domain object that has an **identity** which persists throughout its lifecycle, even as its attributes change.

Two Entities are equal if **their identifiers are equal**, not their field values. A user whose name and address changed is still the same user.

\`\`\`java
class Order {
    private final OrderId id;      // identity
    private OrderStatus status;    // mutable state
    // equals/hashCode — by id only
}
\`\`\`

Signs of an Entity:

- it has a unique ID (often assigned at creation);
- **mutable** state over time;
- continuity matters ("the same" object), not just the current values.

Its opposite is the **Value Object**, which is compared by value and has no identity.`,
    },
    'value-object': {
      question: 'What is a Value Object?',
      answer: `A **Value Object** is an object that has **no identity** and is fully defined by its **values**. Two Value Objects are equal if all their fields are equal.

Examples: \`Money(100, "USD")\`, \`Address\`, \`DateRange\`, \`Email\`, \`Coordinates\`. A 100-dollar note is interchangeable with any other identical one — the specific instance does not matter.

\`\`\`java
record Money(BigDecimal amount, Currency currency) {
    Money add(Money other) {
        if (!currency.equals(other.currency))
            throw new IllegalArgumentException("currency mismatch");
        return new Money(amount.add(other.amount), currency);
    }
}
\`\`\`

Properties:

- equality and hashCode — **by value** (a Java \`record\` is convenient here);
- usually **immutable**;
- they encapsulate the rules of their type (validation, operations), removing "primitive obsession" (\`String email\`, \`BigDecimal amount\`).`,
    },
    'entity-vs-value-object': {
      question: 'What is the difference between an Entity and a Value Object?',
      answer: `The difference is in the **nature of equality and identity**.

| Trait | Entity | Value Object |
|---|---|---|
| Identity | yes (ID) | none |
| Equality | by identifier | by the value of all fields |
| Mutability | usually mutable | usually immutable |
| Lifecycle | continuity over time matters | replaced wholesale |
| Example | \`Order\`, \`User\`, \`Account\` | \`Money\`, \`Address\`, \`Email\` |

A simple test: **"Does it matter that this is this specific instance, or only the values matter?"** If two objects with the same fields are "the same thing" → Value Object; if they can be distinct entities with identical attributes → Entity.

The same concept can be one or the other depending on context: a shipping address is usually a Value Object, but a "real-estate property" with a history is an Entity.`,
    },
    'value-object-immutable': {
      question: 'Why are Value Objects usually made immutable?',
      answer: `Immutability of a Value Object brings several benefits at once:

- **Safe sharing** — a single instance can be freely passed around and reused; nobody will change it from under you. Otherwise, mutating a shared \`Address\` in one place would unexpectedly affect others.
- **Integrity by construction** — validity is checked once in the constructor; afterwards the object is guaranteed correct, and invariants cannot be broken via a setter.
- **Correct equality** — since the object is used as a "value" (including as a \`Map\` key / \`Set\` element), its hashCode must not change after creation.
- **Thread safety** — immutable objects are safe in concurrent environments without synchronization.

"Changing" is modeled as **creating a new object**: \`money.add(other)\` returns a new \`Money\` rather than mutating the old one. In Java this is naturally expressed with a \`record\`.`,
    },
    'aggregate': {
      question: 'What is an Aggregate?',
      answer: `An **Aggregate** is a cluster of related Entities and Value Objects treated as a **single unit** for the purposes of changes and consistency. An aggregate has a root — the **Aggregate Root**.

Example: the \`Order\` aggregate includes the order itself (root) and its \`OrderLine\`s. Lines do not exist or change apart from the order.

Key rules:

- an aggregate is a **consistency boundary**: all invariants inside it hold after every operation;
- an aggregate is a **transaction boundary**: one transaction changes **one** aggregate ("one aggregate per transaction");
- the outside world accesses the contents **only through the root**;
- references to other aggregates are **by identifier**, not by a direct object reference.

Consistency between different aggregates is **eventual** (via domain events), not within a single transaction.`,
    },
    'aggregate-root': {
      question: 'What is an Aggregate Root?',
      answer: `The **Aggregate Root** is the single Entity of an aggregate that serves as the **entry point** to the whole aggregate. External code can obtain and change the aggregate's contents **only through the root**.

Responsibilities of the root:

- **guarantee the invariants** of the whole aggregate: any change to inner objects goes through the root's methods, which enforce the rules;
- control the lifecycle of inner entities (creating/removing an \`OrderLine\` — only via \`Order\`);
- have a **global identifier**; inner entities have only local identity (within the aggregate).

\`\`\`java
class Order {                 // Aggregate Root
    private List<OrderLine> lines;
    void addLine(Product p, int qty) {   // the only path to change
        if (status != DRAFT) throw new IllegalStateException();
        lines.add(new OrderLine(p, qty));
        recalcTotal();                    // invariant maintained
    }
}
\`\`\`

The Repository works at the **root level**: it saves/loads the aggregate as a whole.`,
    },
    'aggregate-boundaries-why': {
      question: 'Why do we need Aggregate boundaries?',
      answer: `An aggregate boundary answers the question: **what must be consistent atomically (in one transaction), and what only eventually**.

What the boundary gives you:

- **Protection of invariants** — rules that span several objects (e.g. "the sum of the lines equals the order total") can only be guaranteed inside a single consistency boundary.
- **Transaction management** — by changing one aggregate per transaction you avoid distributed locks and long transactions; the system scales better.
- **Reduced contention** — small aggregates conflict less often under optimistic locking.
- **Model clarity** — it is clear where strong consistency holds and where eventual is acceptable.

Too large an aggregate → long transactions, version conflicts, poor scalability. Too small → an invariant that cannot be guaranteed in one transaction. That is why choosing boundaries is a central design decision.`,
    },
    'choose-aggregate-boundaries': {
      question: 'How do you choose Aggregate boundaries?',
      answer: `Aggregate boundaries are determined by **invariants** and consistency requirements, not by the database or UI structure.

Practical rules:

- **Driven by invariants**: what must be true **immediately after every operation** goes into one aggregate; what may be reconciled later goes into different ones.
- **Keep aggregates small**: most should consist of the root and a few Value Objects. Small aggregates = short transactions, fewer conflicts, better scalability.
- **Reference by ID**: to other aggregates only by identifier — do not pull a foreign object graph into the boundary.
- **One-transaction rule**: if a business operation needs to change two aggregates atomically, the boundary is probably wrong (or consistency is actually eventual).
- **True invariant vs. reporting**: if a rule is really an aggregating report (e.g. "top customers"), it does not need to be protected by a transaction.

A typical mistake is dragging everything "related" into an aggregate (order + customer + products), producing a huge boundary. Association ≠ belonging to one aggregate.`,
    },
    'invariant': {
      question: 'What is an invariant?',
      answer: `An **invariant** is a business rule that must be **true at all times** (at any consistent moment, between transactions), not just sometimes.

Examples:

- "The sum of the order lines equals the order total";
- "An account balance cannot go negative";
- "A confirmed order has at least one line";
- "A booking's end date is after its start date".

Characteristics:

- an invariant often spans **several objects** inside an aggregate (which is why it is protected at the aggregate level);
- it must be restored **by the end of each operation**, not "someday";
- an invariant is not the same as input validation: it is an integrity rule of the **model**, maintained by the model's own methods.

It is precisely invariants that determine where aggregate boundaries lie: whatever must be consistent atomically for an invariant lives inside one boundary.`,
    },
    'protect-invariants': {
      question: 'Why should invariants be protected inside an Aggregate?',
      answer: `If an invariant can be broken by bypassing the model, it stops being a guarantee and becomes a "wish" that will eventually be violated.

That is why an aggregate:

- **encapsulates its internals** — it does not hand out mutable references to \`OrderLine\`s; any change goes through the root's methods, which enforce the rules;
- **has no "raw" setters** — instead of \`setStatus()\` there are meaningful operations \`confirm()\`, \`cancel()\`, which check preconditions inside;
- **keeps consistency within the transaction boundary** — after commit the aggregate is always valid.

If instead the business logic is smeared across services and inner objects can be changed directly (an anemic model), invariant checks get **duplicated and drift apart**: one path checks, another forgets. Centralizing the rules in the aggregate makes breaking an invariant **impossible by construction**, rather than "caught somewhere in a service".`,
    },
    'reference-aggregate-root': {
      question: 'Why should external objects reference only the Aggregate Root?',
      answer: `If external code holds a reference to an **inner** object of an aggregate (say, an \`OrderLine\`) and changes it directly, it bypasses the root — and thus bypasses **invariant enforcement**. The aggregate loses control over its own consistency.

Hence the rule: from the outside, only the **Aggregate Root** is visible and reachable.

- changes to inner entities happen only through the root's methods, where business rules apply;
- **other** aggregates are referenced **by identifier** (\`customerId\`), not by a direct object reference — this:
  - keeps aggregate boundaries separate (does not drag in a foreign object graph),
  - simplifies loading/saving (a Repository handles one aggregate),
  - maps naturally onto a distributed system, where there is no "direct reference" between services.

Bottom line: a single entry point = a single point of invariant enforcement and a single unit of loading/saving/transaction.`,
    },
    'bounded-context-communication': {
      question: 'How do Bounded Contexts communicate?',
      answer: `Contexts integrate through explicit, documented relationships; together they form the **Context Map**. The main relationship types:

- **Partnership** — two teams coordinate models and releases together;
- **Customer–Supplier** — the upstream context takes the downstream's needs into account;
- **Conformist** — the downstream adopts the upstream model as-is (no translation);
- **Anti-Corruption Layer (ACL)** — the downstream places a translation layer that protects its model from the foreign one;
- **Open Host Service / Published Language** — the upstream publishes a stable API/contract (e.g. REST + schema, events with a shared schema);
- **Shared Kernel** — a small shared part of the model shared by two contexts (risky, requires tight coordination);
- **Separate Ways** — no integration at all.

Technically the link is implemented **synchronously** (REST/gRPC) or **asynchronously** (domain events via a broker). At every boundary, **translation** between different Ubiquitous Languages matters.`,
    },
    'anti-corruption-layer': {
      question: 'What is an Anti-Corruption Layer (ACL)?',
      answer: `An **Anti-Corruption Layer** is a translation layer at a context boundary that **translates a foreign model into your own terms** and prevents the concepts of an external system from "leaking" into your model.

Why: if you use a foreign/legacy service's model directly, its concepts and quirks spread through your code and your Ubiquitous Language degrades. The ACL isolates that dependency.

How it is built:

- a set of adapters/facades and mappers that convert external DTOs/terms into your domain objects (and back);
- often implements the Adapter + Facade + Translator patterns;
- placed on the **downstream** context's side.

\`\`\`text
[Your domain] ← ACL (translate) ← [External / legacy service]
\`\`\`

Upside: changing the external system only affects the ACL. Downside: extra code and mapping to maintain — justified when the foreign model differs substantially or is unstable.`,
    },
    'shared-model-danger': {
      question: 'Why is a shared model between services/contexts often dangerous?',
      answer: `The temptation to extract a "shared" domain class (or a shared library of entities) into a common dependency across several services leads to serious problems:

- **Hidden coupling** — by sharing a model, services stop being independent: a change to the shared model forces everyone to change and redeploy. The main benefit of splitting into contexts/services is lost.
- **A compromise model** — one class for everyone must satisfy conflicting needs and grows extra fields (see the \`Customer\` example). It ends up serving no one well.
- **Diverging meanings** — one term means different things in different contexts; a shared model denies this and breeds bugs.
- **Organizational drag** — shared code requires constant coordination between teams.

Better — each context has **its own model**, with translation at the boundaries (ACL) and exchange via **contracts/events** (a Published Language) rather than a shared domain type. The only narrow exception is a deliberate **Shared Kernel** with tight coordination.`,
    },
    'domain-events': {
      question: 'What is a Domain Event?',
      answer: `A **Domain Event** is an object that records a **business-significant fact that has already happened** in the domain: \`OrderPlaced\`, \`PaymentReceived\`, \`OrderShipped\`.

Properties:

- **past tense** in the name — an event describes something that already occurred; it cannot be "undone", only compensated;
- **immutable** — a snapshot of a fact at a point in time (with \`occurredAt\`);
- carries the identifiers and data that subscribers need, not the whole aggregate;
- part of the **Ubiquitous Language** — domain experts recognize these events.

Why they are needed:

- **decoupling** — an aggregate publishes an event without knowing who will react to it (audit, notifications, analytics);
- **consistency between aggregates/contexts** — instead of changing two aggregates in one transaction, the first changes and publishes an event, the second reacts (eventual consistency);
- the basis of **event-driven** integration and **event sourcing**.

\`\`\`java
record OrderPlaced(OrderId orderId, CustomerId customerId, Instant occurredAt) {}
\`\`\`

A distinction is drawn between **internal** domain events (within one context, often dispatched synchronously) and **integration** events (outward, via a broker, with reliable publishing — see the outbox). Typically an event is born inside an aggregate and published after the transaction commits.`,
    },
  },
};

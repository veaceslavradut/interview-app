// Английские переводы: java-core
export const javaCore = {
    title: 'Java Core',
    description: 'Java language fundamentals',
    questions: {
      'object-methods': {
        question: 'What methods does the Object class have?',
        answer: `The \`java.lang.Object\` class is the root of the class hierarchy. Its methods:

- \`equals(Object obj)\` — checks logical equality of objects;
- \`hashCode()\` — the object's hash code;
- \`toString()\` — the string representation of the object;
- \`getClass()\` — returns the object's runtime class;
- \`clone()\` — creates a copy of the object (protected);
- \`finalize()\` — called by the GC before removal (deprecated since Java 9);
- \`wait()\`, \`wait(long)\`, \`wait(long, int)\` — waiting for a notification on the monitor;
- \`notify()\`, \`notifyAll()\` — waking up waiting threads.`,
      },
      'equals-hashcode': {
        question: 'What is the equals() and hashCode() contract?',
        answer: `**The equals() contract:**

- **reflexivity**: \`x.equals(x) == true\`;
- **symmetry**: \`x.equals(y) == y.equals(x)\`;
- **transitivity**: if \`x.equals(y)\` and \`y.equals(z)\`, then \`x.equals(z)\`;
- **consistency**: repeated calls return the same result;
- \`x.equals(null) == false\`.

**The hashCode() contract:**

- as long as the object's state does not change, \`hashCode()\` returns the same value;
- if \`x.equals(y)\`, then \`x.hashCode() == y.hashCode()\`;
- the reverse is not required: equal hash codes do not guarantee object equality (collisions).

**The main rule:** when you override \`equals()\`, always override \`hashCode()\` as well. Otherwise the object will not work correctly in \`HashMap\`/\`HashSet\`.`,
      },
      'string-immutable': {
        question: 'Why is String immutable?',
        answer: `The \`String\` class in Java is immutable: once created, the contents of a string cannot be changed. The reasons for this design:

- **String Pool**: string literals are cached and reused; mutability would break this.
- **Security**: strings are used as parameters (file paths, URLs, class names) — changing them after validation would be a vulnerability.
- **Thread safety**: immutable objects can be freely shared between threads.
- **hashCode caching**: a string's hash is computed once and cached — efficiency in \`HashMap\`.

Methods like \`concat()\`, \`replace()\`, \`substring()\` return a **new** string. For heavy string manipulation use \`StringBuilder\` (not synchronized) or \`StringBuffer\` (synchronized).`,
      },
      exceptions: {
        question: 'Describe the exception hierarchy in Java.',
        answer: `The root of the hierarchy is \`java.lang.Throwable\`, which has two descendants:

**Error** — critical JVM errors that should not be handled: \`OutOfMemoryError\`, \`StackOverflowError\`.

**Exception** — exceptions that can and should be handled:

- **Checked** — descendants of \`Exception\` (except \`RuntimeException\`). The compiler requires handling (\`try-catch\`) or declaration (\`throws\`): \`IOException\`, \`SQLException\`.
- **Unchecked** — descendants of \`RuntimeException\`. Handling is not required: \`NullPointerException\`, \`IllegalArgumentException\`, \`IndexOutOfBoundsException\`, \`ClassCastException\`.

Best practices: do not swallow exceptions, use specific types, do not use exceptions for flow control, close resources with try-with-resources.`,
      },
      'final-finally-finalize': {
        question: 'What is the difference between final, finally, and finalize?',
        answer: `Three completely different concepts:

**final** — a modifier:

- a \`final\` variable — a constant, cannot be reassigned;
- a \`final\` method — cannot be overridden in a subclass;
- a \`final\` class — cannot be extended (e.g., \`String\`).

**finally** — a block in the \`try-catch-finally\` construct that **always** executes (whether or not an exception occurred). Used for releasing resources.

**finalize()** — a method of the \`Object\` class called by the GC before an object is removed. **Deprecated since Java 9**: unpredictable and can slow down the GC. Use try-with-resources (\`AutoCloseable\`) or \`java.lang.ref.Cleaner\` instead.`,
      },
      autoboxing: {
        question: 'What are autoboxing and unboxing?',
        answer: `**Autoboxing** — automatic conversion of a primitive to its wrapper object (\`int\` → \`Integer\`). **Unboxing** — the reverse conversion.

\`\`\`java
Integer boxed = 42;      // autoboxing: Integer.valueOf(42)
int primitive = boxed;   // unboxing: boxed.intValue()
\`\`\`

Pitfalls:

- **NullPointerException** when unboxing \`null\`: \`Integer x = null; int y = x; // NPE\`
- **Integer cache**: values from -128 to 127 are cached, so \`Integer a = 127; Integer b = 127; a == b // true\`, but \`Integer a = 128; Integer b = 128; a == b // false\`. Compare objects with \`equals()\`.
- **Performance**: boxing in loops creates unnecessary objects.`,
      },
      'interface-vs-abstract': {
        question: 'What is the difference between an abstract class and an interface?',
        answer: `**Abstract class:**

- can have state (fields with any modifiers);
- can have constructors;
- methods with any access modifiers;
- a class can extend only one abstract class (\`extends\`);
- semantics: "is-a" — a common base for related classes.

**Interface:**

- no state — only \`public static final\` constants;
- no constructors;
- methods: abstract, \`default\`, \`static\` (Java 8+), \`private\` (Java 9+);
- a class can implement many interfaces (\`implements\`);
- semantics: "can-do" — a behavior contract for unrelated classes.

**When to choose which:**

- interface — by default: describing a capability (\`Comparable\`, \`Serializable\`);
- abstract class — when you need shared state, protected methods, or a partial implementation (Template Method).

With the advent of default methods the line has blurred, but the key difference remains: **only classes have state and constructors**.`,
      },
      generics: {
        question: 'What are Generics and Type Erasure?',
        answer: `**Generics** — a type parameterization mechanism (Java 5): classes and methods work with different types while preserving type safety at compile time.

\`\`\`java
List<String> list = new ArrayList<>();
list.add("ok");
list.add(42); // compilation error — not a ClassCastException at runtime

<T extends Comparable<T>> T max(List<T> list) { ... } // generic method
\`\`\`

**Type Erasure** — type parameter information is removed during compilation: \`List<String>\` and \`List<Integer>\` are the same \`List\` in bytecode. Done for backward compatibility with pre-Java 5 code.

Consequences of erasure:

- not allowed: \`new T()\`, \`new T[]\`, \`instanceof List<String>\`, overloading by type parameter;
- primitives are not supported (wrappers only).

**Wildcards:**

- \`List<?>\` — any type;
- \`List<? extends Number>\` — Number and its subclasses (reading — producer);
- \`List<? super Integer>\` — Integer and its ancestors (writing — consumer).

The **PECS** rule: Producer — Extends, Consumer — Super.`,
      },
      'string-pool': {
        question: 'What is the String Pool? What is the difference between == and equals() for strings?',
        answer: `The **String Pool** is an area in the heap where the JVM caches string literals. Identical literals point to the same object — saving memory (made possible by String's immutability).

\`\`\`java
String a = "hello";            // from the pool
String b = "hello";            // the same reference from the pool
String c = new String("hello"); // a NEW object in the heap

a == b;        // true  — the same object from the pool
a == c;        // false — different objects
a.equals(c);   // true  — the same contents
c.intern() == a; // true — intern() returns the pooled instance
\`\`\`

**The difference:**

- \`==\` compares **references** (whether it is the same object in memory);
- \`equals()\` compares **contents** character by character.

Rules: always compare strings with \`equals()\`; to guard against NPE — \`"literal".equals(variable)\` or \`Objects.equals(a, b)\`; do not use \`new String("...")\`.`,
      },
      'static-keyword': {
        question: 'What does the static keyword do?',
        answer: `**static** means belonging to the class rather than to an instance.

**Static fields** — one copy per class, shared by all objects:

\`\`\`java
class Counter {
    static int total;      // shared counter
    int value;             // each object has its own
}
\`\`\`

**Static methods** — called without an instance (\`Math.max()\`); have no access to \`this\` or non-static members; cannot be overridden (static binding, only hiding).

**Static initializer blocks** — executed once when the class is loaded:

\`\`\`java
static { config = loadConfig(); }
\`\`\`

**Static nested classes** — do not hold a reference to the outer class instance (unlike inner classes) — preferred to avoid memory leaks.

**Static import**: \`import static java.lang.Math.PI;\`

Beware: mutable static state is an anti-pattern (problems with concurrency and tests); static methods are hard to mock.`,
      },
      'records-sealed': {
        question: 'What are records and sealed classes?',
        answer: `A **\`record\`** (Java 16) is a compact way to declare an **immutable data carrier**. The compiler generates the \`private final\` fields, constructor, accessors (\`name()\`, not \`getName()\`), \`equals()\`/\`hashCode()\` (over all components), and \`toString()\`:

\`\`\`java
public record Point(int x, int y) {}
\`\`\`

Details: a record is **final** and **cannot extend** a class (it implicitly extends \`java.lang.Record\`), but it can implement interfaces. You can add a compact constructor for validation. Suitable for DTOs, keys, value objects.

A **\`sealed\`** class/interface (Java 17) restricts **which classes may extend/implement it**, via \`permits\`:

\`\`\`java
public sealed interface Shape permits Circle, Square {}
\`\`\`

Subtypes must be \`final\`, \`sealed\`, or \`non-sealed\`. Why: control over the hierarchy (a closed set of variants) and an **exhaustive** \`switch\` over types without \`default\` — the compiler knows all the subtypes. Together, record + sealed give Java algebraic data types and work well with pattern matching.`,
      },
      'composition-vs-inheritance': {
        question: 'Should you choose composition or inheritance? Why is inheritance not always good?',
        answer: `**Inheritance** (\`is-a\`) — a class extends another, reusing its code. **Composition** (\`has-a\`) — a class **contains** another object and delegates work to it.

The general recommendation (including from "Effective Java") is to **prefer composition over inheritance**. Problems with inheritance:

- **strong coupling** to the parent's implementation: changes in the base class can unexpectedly break subclasses (fragile base class);
- **breaking encapsulation** — the subclass depends on the parent's internal details;
- **rigidity** — the type is fixed at compile time, behavior can't be changed at runtime;
- in Java there is only **single** class inheritance — the "inheritance budget" is spent on one class.

Composition is more flexible: behavior is plugged in via interfaces (can be changed at runtime, easy to mock in tests), with no fragile link to a parent. Inheritance is appropriate when there is a truly strict "is-a" relationship and the base class is designed for extension (documented, as in the Template Method pattern). Rule: inherit from **abstractions/interfaces**, reuse code via **composition**.`,
      },
      'constructor-order': {
        question: 'In what order does initialization happen when a subclass object is created?',
        answer: `On \`new Subclass()\` the order is:

1. **Static** initialization (once when the class is loaded, if not already): static fields and \`static {}\` blocks — the parent's first, then the subclass's.
2. Memory is allocated, fields get their **default** values (0/\`null\`/\`false\`).
3. The subclass constructor is invoked, but its first (implicit or explicit) statement is **\`super(...)\`**, so control goes up the hierarchy.
4. In the **parent**: field initializers and instance-initialization blocks in declaration order, then the parent constructor body.
5. Back to the subclass: its field initializers and instance blocks, then the subclass constructor body.

Result: **the parent is fully initialized before the subclass**. Hence the well-known trap: if the parent constructor calls a method overridden in the subclass, it runs **while the subclass's fields are not yet initialized** (they equal default values) — which is why calling overridable methods from a constructor is discouraged.`,
      },
      'generics-wildcards': {
        question: 'What are wildcards in generics (? extends T, ? super T)? What is PECS?',
        answer: `A **wildcard \`?\`** is an unknown type parameter, used when the concrete type doesn't matter or isn't known in advance. Bounded wildcards set a bound:

- **\`? extends T\`** (upper bound) — "\`T\` or any of its subtypes." You can **read** from such a collection as \`T\`, but **cannot add** (except \`null\`) — the compiler doesn't know the exact subtype. This is a **producer** (a source of data).
- **\`? super T\`** (lower bound) — "\`T\` or any of its supertypes." You can **write** \`T\` and its subtypes into such a collection, but reading yields only \`Object\`. This is a **consumer** (a sink).

**PECS — Producer Extends, Consumer Super:** if a structure **produces** elements, use \`extends\`; if it **consumes** them, use \`super\`. Example: \`Collections.copy(List<? super T> dest, List<? extends T> src)\` — read from the source (\`extends\`), write to the destination (\`super\`).

Wildcards increase API flexibility. Because of **type erasure**, you cannot, for example, create an array of a generic type (\`new T[]\`), and primitives aren't allowed in generics — wrappers are used (\`Integer\` instead of \`int\`).`,
      },
      reflection: {
        question: 'What is the Reflection API and where is it used?',
        answer: `**Reflection** is a mechanism that lets you **inspect and modify** the structure of classes at runtime: get the list of fields, methods, constructors, annotations, create objects, and call methods by name without knowing the type at compile time.

\`\`\`java
Class<?> clazz = obj.getClass();
Method m = clazz.getDeclaredMethod("hello");
m.setAccessible(true); // access to private
m.invoke(obj);
\`\`\`

Access to **private** members is opened via \`setAccessible(true)\` (unless forbidden by the module system/security manager).

Where it is used: frameworks and libraries — Spring (DI, creating beans, processing annotations), Hibernate (entity mapping), Jackson/Gson (serialization), JUnit (finding test methods).

Downsides: **slower** than direct calls, bypasses type checks and encapsulation (risk of runtime errors instead of compile-time ones), and complicates refactoring and code analysis. So in application code reflection is used carefully — it is mostly "hidden" inside frameworks.`,
      },
      cloneable: {
        question: 'How does Cloneable work and why is it better avoided? How else do you copy objects?',
        answer: `**\`Cloneable\`** is a marker interface that enables \`Object.clone()\` behavior (without it, \`clone()\` throws \`CloneNotSupportedException\`). \`clone()\` creates a bitwise copy of the object.

Why it is avoided (including per "Effective Java"):

- **\`clone()\` makes a shallow copy** — nested objects and collections remain shared between the original and the copy, leading to hidden bugs; for a deep copy \`clone()\` must be overridden manually;
- a **broken contract**: \`clone()\` is declared in \`Object\` (not \`Cloneable\`), is \`protected\`, throws a checked exception, and doesn't call a constructor — the mechanism is unintuitive and easy to implement wrong;
- it works poorly with \`final\` fields.

Preferred alternatives:

- a **copy constructor**: \`new ArrayList<>(other)\`, \`public Point(Point p)\`;
- a **static factory method** for copying;
- for a record — create a new one from the components;
- for a deep copy — copy fields manually or via serialization/specialized libraries.

Bottom line: a copy constructor/factory is simpler, safer, and more explicit than \`Cloneable\`.`,
      },
    },
  };

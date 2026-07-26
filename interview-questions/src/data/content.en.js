// Английские переводы контента.
// Категории: title + description. Вопросы/ответы добавляются постепенно —
// всё, что не переведено, автоматически показывается на русском.
//
// Формат перевода вопроса:
//   questions: {
//     'question-id': { question: '...', answer: `...` },
//   }
export const enContent = {
  oop: {
    title: 'OOP',
    description: 'Object-oriented programming',
    questions: {
      'what-is-oop': {
        question: 'What is OOP?',
        answer: `Object-oriented programming (OOP) is a programming methodology based on representing a program as a collection of objects, each of which is an instance of a particular class, with classes forming an inheritance hierarchy.

- object-oriented programming uses objects, not algorithms, as its fundamental logical building blocks;
- every object is an instance of a particular class;
- classes form hierarchies.

A program is considered object-oriented only if all three requirements are met. In particular, programming that does not use inheritance is called programming with abstract data types rather than object-oriented programming.

According to the OOP paradigm, a program consists of objects exchanging messages. Objects may have state, and the only way to change an object's state is to send it a message, in response to which the object may change its own state.`,
      },
      'oop-principles': {
        question: 'Name the core principles of OOP.',
        answer: `The core principles of OOP:

- **Encapsulation** — hiding an object's internal implementation and providing access to it only through a public interface.
- **Inheritance** — a mechanism that allows a new class to be defined based on an existing one, reusing its properties and functionality.
- **Polymorphism** — the ability of objects with the same interface to have different implementations.
- **Abstraction** — highlighting the significant characteristics of an object while ignoring the insignificant ones.

Three "pillars" of OOP are often singled out: encapsulation, inheritance, and polymorphism; abstraction is considered the fourth principle.`,
      },
      encapsulation: {
        question: 'What is "encapsulation"?',
        answer: `**Encapsulation** is an OOP principle in which data (state) and the methods (behavior) that operate on that data are combined into a single component — a class — while the internal implementation is hidden from the outside world.

In Java, encapsulation is achieved through:

- access modifiers (\`private\`, \`protected\`, \`public\`, package-private);
- providing public accessor methods (getters/setters) instead of direct field access.

Benefits of encapsulation:

- data integrity control (validation in setters);
- the ability to change the internal implementation without affecting client code;
- reduced coupling between system components.`,
      },
      inheritance: {
        question: 'What is "inheritance"?',
        answer: `**Inheritance** is a mechanism that allows a new class to be defined based on an existing (parent) class. The properties and functionality of the parent class are reused by the new class.

In Java, inheritance is implemented with the \`extends\` keyword:

\`\`\`java
class Animal {
    void eat() { System.out.println("eating..."); }
}

class Dog extends Animal {
    void bark() { System.out.println("barking..."); }
}
\`\`\`

Key aspects of inheritance in Java:

- a class can inherit from only one class (single inheritance);
- multiple inheritance of behavior is possible through interfaces;
- all classes implicitly inherit from \`java.lang.Object\`;
- constructors are not inherited;
- members with the \`private\` modifier are inherited but not directly accessible.`,
      },
      polymorphism: {
        question: 'What is "polymorphism"?',
        answer: `**Polymorphism** is the ability of objects with the same interface to have different implementations; the ability to handle objects of different types uniformly.

In Java there are two kinds:

- **Compile-time (static) polymorphism** — method overloading: several methods with the same name but different parameters.
- **Runtime (dynamic) polymorphism** — method overriding: a subclass provides its own implementation of a parent method, and the concrete implementation is chosen at runtime.

\`\`\`java
Animal animal = new Dog();
animal.makeSound(); // Dog's implementation is invoked
\`\`\`

Polymorphism makes it possible to write generic code that works with a base type without knowing about the concrete implementations.`,
      },
      abstraction: {
        question: 'What is "abstraction"?',
        answer: `**Abstraction** means highlighting the characteristics of an object that are significant in the context of the task while ignoring insignificant details.

Abstraction lets us work with objects without going into their implementation details: we describe **what** an object does, not **how** it does it.

In Java, abstraction is implemented through:

- **abstract classes** (\`abstract class\`) — classes that cannot be instantiated and may contain abstract methods;
- **interfaces** (\`interface\`) — contracts that describe behavior without implementation.

Example: a driver does not need to know how the engine works to drive a car — the interface (steering wheel, pedals) is enough.`,
      },
      'message-passing': {
        question: 'What is "message passing"?',
        answer: `**Message passing** is the way objects interact in OOP: one object "sends a message" to another, and the receiver reacts by executing the corresponding method.

In classic object-oriented languages (Java, C++), message passing boils down to **method invocation**: calling an object's method is sending it a message.

Key points:

- the object receiving the message decides for itself how to react to it (late binding);
- the sender does not care about the receiver's internal implementation;
- the only way to change an object's state is to send it a message.

This approach ensures loose coupling and high modularity of the system.`,
      },
      'class-object-interface': {
        question: 'Explain the core OOP concepts: "class", "object", "interface".',
        answer: `A **class** is a template (description) from which objects are created. A class defines state (fields) and behavior (methods). A class is a data type describing the common characteristics of a set of similar objects.

An **object** is an instance of a class, a concrete entity that has:

- **state** — the values of its fields;
- **behavior** — its methods;
- **identity** — uniqueness among other objects.

An **interface** is a contract defining a set of methods that a class must implement. An interface describes **what** an object must do, but not **how**. In Java, a class can implement multiple interfaces, which provides multiple inheritance of type.

\`\`\`java
interface Movable {
    void move();
}

class Car implements Movable {
    @Override
    public void move() { System.out.println("Car is moving"); }
}

Movable car = new Car(); // the car object is an instance of the Car class
\`\`\``,
      },
      'oop-pros-cons': {
        question: 'What are the advantages and disadvantages of the object-oriented approach to programming?',
        answer: `**Advantages:**

- models built on objects are close to the problem domain — the code is easier to understand;
- modularity: the program consists of independent components;
- code reuse through inheritance and composition;
- ease of maintenance and extension (changes are localized);
- encapsulation reduces the impact of changes on the rest of the code;
- polymorphism enables flexible, generic code.

**Disadvantages:**

- reduced performance: dynamic binding, extra levels of indirection, object creation overhead;
- increased memory consumption (object headers, references);
- entry barrier: designing class hierarchies correctly requires experience;
- OOP can be overkill for small tasks;
- a poorly designed inheritance hierarchy is hard to refactor.`,
      },
      'is-a-has-a': {
        question: 'What do the expressions "is-a" and "has-a" mean in terms of OOP principles?',
        answer: `The expressions **"is-a"** and **"has-a"** describe two kinds of relationships between classes:

**"Is-a"** — the **inheritance** relationship. If class B "is a" class A, then B inherits from A.

\`\`\`java
class Dog extends Animal { } // A dog IS an animal
\`\`\`

**"Has-a"** — the **composition/aggregation** relationship. If class A "has a" class B, then A holds a reference to B as a field.

\`\`\`java
class Car {
    private Engine engine; // A car HAS an engine
}
\`\`\`

Practical rule: if you cannot honestly say "is-a" about two entities, do not use inheritance — prefer composition (the "composition over inheritance" principle).`,
      },
      'composition-aggregation': {
        question: 'What is the difference between composition and aggregation?',
        answer: `Composition and aggregation are kinds of association — the "has-a" relationship. The difference lies in the strength of the bond and lifecycle ownership.

**Composition** — a strong bond: the part cannot exist without the whole. The whole controls the part's lifecycle.

\`\`\`java
class Car {
    private final Engine engine = new Engine(); // created together with Car
}
// when the Car is destroyed, the engine "dies" too
\`\`\`

**Aggregation** — a weak bond: the part can exist independently of the whole and can be shared by several objects.

\`\`\`java
class Department {
    private List<Employee> employees; // employees exist without the department too
}
\`\`\`

In short: composition — "owns", aggregation — "uses".`,
      },
      'static-dynamic-binding': {
        question: 'What are static and dynamic binding?',
        answer: `**Binding** is matching a method call to its concrete implementation.

**Static (early) binding** happens at **compile time**. The compiler knows exactly which method will be called. In Java, the following are statically bound:

- \`static\` methods;
- \`private\` methods;
- \`final\` methods;
- constructors;
- overloaded methods (signature selection).

**Dynamic (late) binding** happens at **runtime** based on the actual type of the object. This is how overridden virtual methods work:

\`\`\`java
Animal a = new Dog();
a.makeSound(); // Dog's implementation is chosen at runtime
\`\`\`

Dynamic binding is the foundation of runtime polymorphism; in the JVM it is implemented via virtual method tables (vtable).`,
      },
    },
  },
  jvm: {
    title: 'JVM',
    description: 'Java Virtual Machine',
    questions: {
      'what-is-jvm': {
        question: 'What are JVM, JRE, and JDK?',
        answer: `**JVM (Java Virtual Machine)** — the Java virtual machine that executes bytecode. It provides platform independence ("write once, run anywhere"), memory management, garbage collection, and JIT compilation.

**JRE (Java Runtime Environment)** — the runtime environment: JVM + the standard class libraries. Sufficient for running Java applications.

**JDK (Java Development Kit)** — the developer kit: JRE + development tools (the \`javac\` compiler, the \`jdb\` debugger, \`javadoc\`, \`jar\`, etc.).

Relationship: **JDK ⊃ JRE ⊃ JVM**.`,
      },
      'memory-areas': {
        question: 'What memory areas exist in the JVM?',
        answer: `The main JVM memory areas:

- **Heap** — where all objects and arrays are allocated. Shared by all threads. Divided into the Young Generation (Eden, Survivor S0/S1) and the Old Generation.
- **Stack** — each thread has its own stack; it stores method call frames: local variables, references, intermediate results.
- **Metaspace** (PermGen before Java 8) — class metadata, static variables, the constant pool.
- **PC Register** — the program counter for each thread.
- **Native Method Stack** — the stack for native (JNI) methods.

Errors: heap exhaustion — \`OutOfMemoryError\`, stack overflow — \`StackOverflowError\`.`,
      },
      'garbage-collection': {
        question: 'How does garbage collection work?',
        answer: `The **garbage collector (GC)** automatically frees memory occupied by objects that are no longer reachable from GC Roots (thread-local variables, static fields, JNI references).

Key concepts:

- **Reachability**: an object is alive if it can be reached by following references from GC Roots.
- **Generational hypothesis**: most objects die young. The heap is divided into the Young and Old Generations.
- **Minor GC** — cleans the Young Generation (fast); **Major/Full GC** — cleans the Old Generation (slower, may cause stop-the-world pauses).

Modern collectors:

- **G1 GC** — the default since Java 9; divides the heap into regions, predictable pauses;
- **ZGC / Shenandoah** — low-latency (pauses < 10 ms), for large heaps;
- **Serial / Parallel GC** — the classic options.`,
      },
      classloaders: {
        question: 'What are class loaders (ClassLoader)?',
        answer: `A **ClassLoader** is the JVM mechanism responsible for loading classes into memory at runtime.

The hierarchy of standard class loaders:

1. **Bootstrap ClassLoader** — loads the core JDK classes (java.lang.*, java.util.*, etc.);
2. **Platform (Extension) ClassLoader** — loads platform module classes;
3. **Application (System) ClassLoader** — loads application classes from the classpath.

The **parent delegation** principle: before loading a class, a loader first delegates the request to its parent. This protects core classes from being spoofed.

Class loading phases: **Loading → Linking (Verification, Preparation, Resolution) → Initialization**.`,
      },
      jit: {
        question: 'What is JIT compilation?',
        answer: `**JIT (Just-In-Time) compilation** — compiling bytecode into native machine code while the program is running.

How it works:

- at first, the bytecode is executed by the interpreter;
- the JVM profiles the code and finds "hot spots" — frequently executed methods and loops;
- hot code is compiled to native code and cached (Code Cache);
- aggressive optimizations are applied: inlining, escape analysis, devirtualization, dead code elimination.

HotSpot has two JIT compilers: **C1 (client)** — fast compilation with basic optimizations, and **C2 (server)** — deep optimizations. By default, **tiered compilation** is used — a multi-level combination of both.`,
      },
      'oom-types': {
        question: 'What kinds of OutOfMemoryError do you know?',
        answer: `The main kinds of \`OutOfMemoryError\`:

- **Java heap space** — the heap is full and the GC cannot free memory. Causes: memory leaks, insufficient \`-Xmx\`, large data volumes.
- **GC overhead limit exceeded** — the GC spends > 98% of the time freeing < 2% of the heap.
- **Metaspace** — the class metadata area is exhausted (e.g., due to dynamic class generation).
- **Direct buffer memory** — memory for direct ByteBuffers (NIO) is exhausted.
- **unable to create new native thread** — the OS cannot allocate memory for a new thread.
- **Requested array size exceeds VM limit** — an attempt to create an array that is too large.

Diagnostics: heap dump (\`-XX:+HeapDumpOnOutOfMemoryError\`), analysis in Eclipse MAT / VisualVM.`,
      },
      'metaspace-permgen': {
        question: 'What is Metaspace and how does it differ from PermGen?',
        answer: `Both **PermGen** and **Metaspace** store **class metadata** (class structure, methods, the runtime constant pool). The difference is where and how:

**PermGen (Permanent Generation)** — up to and including Java 7:

- part of the **heap** with a fixed size (\`-XX:MaxPermSize\`);
- a frequent cause of \`OutOfMemoryError: PermGen space\`, especially with heavy class loading (application redeploys in a server, proxy generation);
- the size is hard to choose in advance.

**Metaspace** — since Java 8 (replaced PermGen):

- resides in **native (off-heap) memory** rather than the heap;
- **grows automatically** by default, bounded by available OS memory (can be capped with \`-XX:MaxMetaspaceSize\`);
- the string pool and static fields had already moved to the regular heap even earlier.

Bottom line: the move to Metaspace removed the most common cause of PermGen errors, but a class leak (e.g., from improper ClassLoader unloading) can still produce \`OutOfMemoryError: Metaspace\`.`,
      },
      'gc-roots-reachability': {
        question: 'Which objects does the GC collect? What are GC Roots and reachability?',
        answer: `The garbage collector removes objects that have become **unreachable** — those that cannot be reached by references from the so-called **GC Roots**. Important: the criterion is **reachability**, not "no references at all" (so cyclic references between two garbage objects are still collected — they're unreachable from the roots).

**GC Roots** — known "live" starting points:

- local variables and method parameters in threads' stacks;
- **static** fields of classes;
- active threads;
- JNI references from native code;
- objects used for synchronization (monitors).

The GC walks the graph from the roots (mark), marks reachable objects, and treats the rest as garbage to be freed (sweep/compact).

**What is not collected:** everything reachable from the roots, including objects in static collections, live caches, a live thread's ThreadLocal — which is exactly why "forgotten" references in long-lived structures cause memory leaks even with a working GC. Different reference levels (\`strong\`, \`soft\`, \`weak\`, \`phantom\`) change the behavior: e.g., a \`WeakReference\` doesn't keep an object from being collected.`,
      },
      'gc-algorithms': {
        question: 'Which garbage collectors exist in the JVM (Serial, Parallel, CMS, G1, ZGC)?',
        answer: `Collectors differ in the trade-off between **throughput** and **pauses (latency)**:

- **Serial GC** — single-threaded, stops the application (stop-the-world) for the whole collection. Simple, low memory — for small applications and single-core environments.
- **Parallel GC** (throughput collector) — multi-threaded collection, optimized for **maximum throughput** at the cost of noticeable pauses. Was the default up to Java 8.
- **CMS (Concurrent Mark-Sweep)** — tried to minimize pauses by working **concurrently** with the application, but suffered from fragmentation and overhead; **removed** in Java 14.
- **G1 (Garbage-First)** — **the default since Java 9**. Divides the heap into **regions**, collecting the most "garbage-filled" ones first (garbage-first), balancing pauses and throughput toward a target pause (\`-XX:MaxGCPauseMillis\`). A universal choice for large heaps.
- **ZGC / Shenandoah** — low-latency, almost fully concurrent collectors with **millisecond pauses** even on very large heaps (tens/hundreds of GB); more throughput overhead.

The choice is set by a flag (\`-XX:+UseG1GC\`, \`-XX:+UseZGC\`, etc.). Rule: throughput workloads — Parallel; low pauses on large heaps — G1/ZGC.`,
      },
      'g1-gc': {
        question: 'How does G1 GC work?',
        answer: `**G1 (Garbage-First)** divides the heap not into large contiguous Young/Old areas but into many **equal-sized regions** (usually 1–32 MB). At any moment each region plays the role of Eden, Survivor, Old, or **Humongous** (for very large objects). The logical generational split is kept but physically "smeared" across regions.

How it collects:

- **Young collection** — evacuates live objects from Eden/Survivor regions into new ones (a copying collection, stop-the-world but short);
- a **concurrent marking cycle** — marks live objects in Old regions in parallel with the application, estimating where there's the most garbage;
- **Mixed collections** — collect Young plus a few of the most "garbage-filled" Old regions ("garbage-first" — first where it's most beneficial);
- during evacuation, live objects are **copied and compacted** into other regions, which incidentally eliminates fragmentation.

The key idea is to work toward a **target pause** (\`-XX:MaxGCPauseMillis\`, 200 ms by default): G1 takes as many regions into a collection as it can handle within the allotted time. Why G1 is better than CMS: it compacts memory (no fragmentation) and is more predictable in pauses.`,
      },
      'memory-leaks': {
        question: 'What is a memory leak in Java if there is a garbage collector? How do you find it?',
        answer: `Despite the GC, a **memory leak** in Java is possible: these are objects that are **no longer needed but remain reachable** from GC Roots, so the collector doesn't remove them. Memory grows until an \`OutOfMemoryError\` occurs.

Typical causes:

- objects accumulated in **static collections** or singletons and never removed;
- **unclosed resources** (streams, connections) — use try-with-resources;
- a **\`ThreadLocal\`** in a thread pool without \`remove()\` — the value lives as long as the pool thread does;
- listeners/callbacks you forgot to unsubscribe (the object is held by the subscriber);
- keys in a \`HashMap\` with incorrect \`equals/hashCode\` (can't be removed), caches without a size/TTL limit.

How to find it:

1. symptoms — growing heap usage, increasingly frequent Full GCs, eventually \`OutOfMemoryError: Java heap space\`;
2. take a **heap dump** (\`-XX:+HeapDumpOnOutOfMemoryError\`, \`jmap\`) and analyze it in **Eclipse MAT** / VisualVM — look for dominators and reference chains retaining objects (path to GC Roots);
3. monitor memory in production (JFR, Micrometer/Grafana), profile under load.

Prevention: bounded caches, careful use of ThreadLocal and resources, weak references (\`WeakHashMap\`) where appropriate.`,
      },
    },
  },
  'java-core': {
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
  },
  collections: {
    title: 'Java Collections Framework',
    description: 'Java collections',
    questions: {
      'collections-hierarchy': {
        question: 'Describe the collections hierarchy in Java.',
        answer: `There are two root interfaces: \`Collection\` and \`Map\` (Map does not extend Collection).

**Collection:**

- **List** — ordered collections with index-based access: \`ArrayList\`, \`LinkedList\`, \`Vector\`;
- **Set** — collections of unique elements: \`HashSet\`, \`LinkedHashSet\`, \`TreeSet\`;
- **Queue/Deque** — queues: \`ArrayDeque\`, \`PriorityQueue\`, \`LinkedList\`.

**Map** — key-value pairs: \`HashMap\`, \`LinkedHashMap\`, \`TreeMap\`, \`Hashtable\`.

Supporting interfaces: \`Iterable\` (the root for for-each), \`Iterator\`, \`Comparable\`/\`Comparator\` (sorting). Utility classes: \`Collections\`, \`Arrays\`.`,
      },
      'arraylist-linkedlist': {
        question: 'What is the difference between ArrayList and LinkedList?',
        answer: `**ArrayList** — backed by a dynamic array:

- access by index: **O(1)**;
- insertion/removal in the middle: O(n) (elements are shifted);
- appending to the end: amortized O(1);
- when full, the array grows by a factor of ~1.5.

**LinkedList** — a doubly linked list:

- access by index: **O(n)** (traversal from the head/tail);
- insertion/removal at a known position (via an iterator): O(1);
- implements \`Deque\` — can be used as a queue/stack;
- higher memory overhead (each node stores 2 references).

**In practice**, \`ArrayList\` is almost always better: data locality in memory makes it faster even for insertions, except when insertions/removals at the beginning are frequent.`,
      },
      'hashmap-internals': {
        question: 'How does HashMap work internally?',
        answer: `\`HashMap\` is a hash table storing key-value pairs.

**Internal structure:**

- an array of buckets (\`Node<K,V>[] table\`), 16 by default;
- the bucket index is computed from the key's \`hashCode()\`: \`(n - 1) & hash\`;
- **collisions** are resolved by chaining: elements in the same bucket form a linked list;
- since Java 8: if a bucket has > 8 elements (and the table is ≥ 64), the list is converted into a **red-black tree** — O(log n) lookup instead of O(n);
- when the fill ratio exceeds the load factor (0.75), the table doubles in size and elements are redistributed (rehashing).

**Operation complexity:** get/put — O(1) on average, O(log n) in the worst case (tree).

Keys must correctly implement \`equals()\` and \`hashCode()\` and should be immutable.`,
      },
      'hashmap-treemap-linkedhashmap': {
        question: 'What is the difference between HashMap, TreeMap, and LinkedHashMap?',
        answer: `**HashMap:**

- element order is not guaranteed;
- get/put — O(1);
- allows one \`null\` key.

**LinkedHashMap:**

- preserves **insertion order** (or access order — the basis for an LRU cache);
- get/put — O(1), slightly slower than HashMap due to maintaining a linked list.

**TreeMap:**

- elements are **sorted** by key (natural ordering or a \`Comparator\`);
- backed by a red-black tree;
- get/put — O(log n);
- \`null\` keys are not allowed;
- implements \`NavigableMap\`: \`firstKey()\`, \`floorKey()\`, \`subMap()\`, etc.

Choice: need speed — \`HashMap\`, insertion order — \`LinkedHashMap\`, sorting/range queries — \`TreeMap\`.`,
      },
      'fail-fast-fail-safe': {
        question: 'What are fail-fast and fail-safe iterators?',
        answer: `**Fail-fast** iterators throw a \`ConcurrentModificationException\` if the collection was structurally modified after the iterator was created (other than through the iterator itself). They rely on the \`modCount\` modification counter.

Examples: the iterators of \`ArrayList\`, \`HashMap\`, \`HashSet\`.

\`\`\`java
for (String s : list) {
    list.remove(s); // ConcurrentModificationException!
}
// correct: iterator.remove() or removeIf()
\`\`\`

**Fail-safe** iterators work on a copy of the data or use special mechanisms — they do not throw exceptions:

- \`CopyOnWriteArrayList\` — iterates over a snapshot of the array;
- \`ConcurrentHashMap\` — a weakly consistent iterator: it may or may not see changes made after its creation.

The fail-safe trade-off: you may work with stale data, and copying has overhead.`,
      },
      'comparable-comparator': {
        question: 'What is the difference between Comparable and Comparator?',
        answer: `Both interfaces are used for comparing and sorting objects.

**Comparable<T>** — the "natural ordering", implemented by the class itself:

\`\`\`java
class User implements Comparable<User> {
    public int compareTo(User other) {
        return this.name.compareTo(other.name);
    }
}
Collections.sort(users); // uses compareTo
\`\`\`

**Comparator<T>** — an external comparison strategy, a separate class/lambda:

\`\`\`java
Comparator<User> byAge = Comparator.comparing(User::getAge);
users.sort(byAge.thenComparing(User::getName).reversed());
\`\`\`

When to use which:

- \`Comparable\` — when there is one obvious "natural" ordering;
- \`Comparator\` — when you need multiple sort orders or cannot modify the original class.`,
      },
      'hashset-internals': {
        question: 'How does HashSet work internally? What happens if you mutate an object after adding it to a Set?',
        answer: `Internally, a **HashSet** is a \`HashMap\` where the elements are stored as **keys** and the value is a single shared dummy object (\`PRESENT\`):

\`\`\`java
public boolean add(E e) {
    return map.put(e, PRESENT) == null;
}
\`\`\`

So all its properties are inherited from HashMap: uniqueness via \`hashCode()\`/\`equals()\`, O(1) for add/contains/remove, no order guarantee, one \`null\`.

**The danger of mutable elements**: if you change the fields of an object involved in \`hashCode()\` after adding it:

\`\`\`java
Set<User> set = new HashSet<>();
User u = new User("John");
set.add(u);
u.setName("Jane");            // the hash has changed!
set.contains(u);               // false — we look in a different bucket
set.remove(u);                 // false — cannot remove, a "lost" element
\`\`\`

The object remains in the old bucket, but cannot be found by the new hash — a leak and a violation of the set invariant.

**Conclusion**: Map keys and Set elements should be **immutable** (or at least never change fields involved in hashCode/equals).

Variants: \`LinkedHashSet\` — insertion order, \`TreeSet\` — sorted (backed by TreeMap, O(log n)).`,
      },
      iterator: {
        question: 'What is an Iterator? How do you correctly remove elements while iterating?',
        answer: `An **Iterator** is an object for sequentially traversing a collection (the Iterator pattern). Methods: \`hasNext()\`, \`next()\`, \`remove()\`.

The for-each loop is syntactic sugar over an iterator (requires \`Iterable\`).

**Incorrect removal** — \`ConcurrentModificationException\`:

\`\`\`java
for (String s : list) {
    if (s.isEmpty()) list.remove(s); // CME!
}
\`\`\`

**Correct ways:**

\`\`\`java
// 1. Via the iterator
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    if (it.next().isEmpty()) it.remove();
}

// 2. removeIf (Java 8) — preferred
list.removeIf(String::isEmpty);

// 3. Stream into a new collection
List<String> filtered = list.stream()
    .filter(s -> !s.isEmpty())
    .collect(Collectors.toList());
\`\`\`

Additionally: \`ListIterator\` — bidirectional list traversal plus \`add()\`/\`set()\`; in a multithreaded environment, use concurrent collections instead of manual synchronization.`,
      },
    },
  },
  java8: {
    title: 'Java 8',
    description: 'Lambdas, streams, functional interfaces',
    questions: {
      'java8-features': {
        question: 'What are the main features introduced in Java 8?',
        answer: `Key features of Java 8:

- **Lambda expressions** — compact syntax for anonymous functions: \`(a, b) -> a + b\`;
- **Stream API** — functional processing of collections (map/filter/reduce);
- **Functional interfaces** — \`@FunctionalInterface\`, the \`java.util.function\` package (Function, Predicate, Consumer, Supplier);
- **Default and static methods in interfaces** — default implementations;
- **Optional<T>** — a container for a potentially absent value;
- **New Date/Time API** (\`java.time\`) — LocalDate, LocalDateTime, ZonedDateTime, Duration;
- **Method references** — \`String::valueOf\`, \`System.out::println\`;
- **Nashorn** — a JavaScript engine;
- **Metaspace** instead of PermGen;
- **CompletableFuture** — asynchronous programming.`,
      },
      lambda: {
        question: 'What are lambda expressions?',
        answer: `A **lambda expression** is a compact notation for an anonymous function that implements a functional interface (an interface with a single abstract method).

Syntax:

\`\`\`java
// before Java 8
Runnable r = new Runnable() {
    public void run() { System.out.println("Hi"); }
};

// since Java 8
Runnable r = () -> System.out.println("Hi");

Comparator<String> cmp = (s1, s2) -> s1.length() - s2.length();
Function<Integer, Integer> square = x -> x * x;
\`\`\`

Key points:

- a lambda can capture variables from the enclosing context, but only **effectively final** ones;
- \`this\` inside a lambda refers to the enclosing class (unlike an anonymous class);
- it is compiled via \`invokedynamic\` rather than into a separate class.`,
      },
      'stream-api': {
        question: 'What is the Stream API? What kinds of operations are there?',
        answer: `The **Stream API** is a facility for functional processing of data sequences.

**Intermediate operations (lazy, return a Stream):**

- \`filter(Predicate)\` — filtering;
- \`map(Function)\` / \`flatMap\` — transformation;
- \`sorted()\`, \`distinct()\`, \`limit(n)\`, \`skip(n)\`, \`peek()\`.

**Terminal operations (trigger execution):**

- \`collect(Collectors.toList())\` — collecting into a collection;
- \`forEach\`, \`count\`, \`reduce\`;
- \`findFirst\`, \`findAny\`, \`anyMatch\`, \`allMatch\`, \`noneMatch\`;
- \`min\`, \`max\`, \`sum\` (for primitive streams).

\`\`\`java
List<String> names = users.stream()
    .filter(u -> u.getAge() > 18)
    .map(User::getName)
    .sorted()
    .collect(Collectors.toList());
\`\`\`

Key properties: a stream is lazy, single-use, and does not modify its data source.`,
      },
      optional: {
        question: 'What is Optional and why is it needed?',
        answer: `**Optional<T>** is a container that may hold a value or be empty. It was created to explicitly express "the value may be absent" and to fight \`NullPointerException\`.

\`\`\`java
Optional<User> user = repository.findByName("John");

// bad
if (user.isPresent()) { doSomething(user.get()); }

// good
user.ifPresent(this::doSomething);
String name = user.map(User::getName).orElse("Unknown");
User u = user.orElseThrow(() -> new NotFoundException());
\`\`\`

Factory methods: \`Optional.of(value)\` (NPE on null), \`Optional.ofNullable(value)\`, \`Optional.empty()\`.

Best practices:

- use it as a method **return type**;
- do **not** use it for class fields or method parameters;
- avoid \`get()\` without a check;
- do not wrap collections (return an empty collection instead).`,
      },
      'functional-interfaces': {
        question: 'Which functional interfaces do you know?',
        answer: `A **functional interface** is an interface with a single abstract method (SAM). The \`@FunctionalInterface\` annotation enforces this at compile time.

The main interfaces from \`java.util.function\`:

- **Function<T, R>** — takes T, returns R: \`R apply(T t)\`;
- **Predicate<T>** — takes T, returns boolean: \`boolean test(T t)\`;
- **Consumer<T>** — takes T, returns nothing: \`void accept(T t)\`;
- **Supplier<T>** — takes nothing, returns T: \`T get()\`;
- **UnaryOperator<T>** — Function<T, T>;
- **BinaryOperator<T>** — BiFunction<T, T, T>;
- **BiFunction<T, U, R>**, **BiPredicate<T, U>**, **BiConsumer<T, U>** — two-argument versions.

\`Runnable\`, \`Callable\`, and \`Comparator\` are functional interfaces as well.

Primitive specializations: \`IntFunction\`, \`ToIntFunction\`, \`IntPredicate\`, etc. — they avoid autoboxing.`,
      },
      'default-methods': {
        question: 'What are default methods in interfaces?',
        answer: `A **default method** is an interface method with a default implementation (the \`default\` keyword). They were introduced in Java 8 to evolve APIs without breaking backward compatibility (e.g., \`Collection.stream()\`).

\`\`\`java
interface Vehicle {
    default void start() {
        System.out.println("Starting vehicle...");
    }
}
\`\`\`

**The diamond problem:** if a class implements two interfaces with the same default method, the compiler requires an explicit override:

\`\`\`java
class Car implements A, B {
    @Override
    public void start() {
        A.super.start(); // explicit choice of implementation
    }
}
\`\`\`

Resolution rules: a class always "wins" over an interface; a more specific interface "wins" over a less specific one.`,
      },
      'map-flatmap': {
        question: 'What is the difference between map() and flatMap()?',
        answer: `**map()** — transforms each element into exactly one other element (1 → 1):

\`\`\`java
Stream.of("a", "bb", "ccc")
    .map(String::length)      // Stream<Integer>: 1, 2, 3
\`\`\`

**flatMap()** — transforms each element into a **stream** and "flattens" (concatenates) the nested streams into one (1 → 0..N):

\`\`\`java
List<List<Integer>> nested = List.of(List.of(1, 2), List.of(3, 4));

nested.stream()
    .map(List::stream)        // Stream<Stream<Integer>> — awkward

nested.stream()
    .flatMap(List::stream)    // Stream<Integer>: 1, 2, 3, 4
    .collect(Collectors.toList());

// words from sentences
sentences.stream()
    .flatMap(s -> Arrays.stream(s.split(" ")))
\`\`\`

Rule of thumb: if the mapping function returns a single value — \`map\`; if it returns a collection/stream/Optional — \`flatMap\`.

The same applies to \`Optional\`: \`opt.map(f)\` yields \`Optional<Optional<T>>\` if f returns an Optional — you need \`flatMap\`. In reactive libraries, \`flatMap\` is asynchronous composition of operations.`,
      },
      'parallel-streams': {
        question: 'What are parallel streams and when should they be used?',
        answer: `A **parallel stream** splits data into chunks and processes them on multiple threads via the shared \`ForkJoinPool.commonPool()\` (size = CPU cores − 1).

\`\`\`java
list.parallelStream().filter(...).count();
stream.parallel()...
\`\`\`

**When they pay off:**

- large data volumes (tens/hundreds of thousands of elements);
- CPU-intensive processing of each element;
- the source splits well: \`ArrayList\`, arrays, \`IntStream.range\` (poorly: \`LinkedList\`, \`iterate\`);
- stateless operations without side effects.

**When they hurt:**

- I/O operations inside — they block the shared pool for the whole application;
- small collections — the overhead of splitting/merging outweighs the benefit;
- operations on shared mutable state — race conditions;
- processing order matters (\`forEachOrdered\` kills the gain).

Rule of thumb: use a sequential stream by default; \`parallel()\` — only after measurements (JMH benchmarks).`,
      },
      'stream-intermediate-terminal': {
        question: 'How do intermediate Stream operations differ from terminal ones? What is laziness?',
        answer: `Stream operations come in two kinds:

- **Intermediate** — return a **new Stream**, which lets you build chains (\`filter\`, \`map\`, \`sorted\`, \`distinct\`, \`limit\`, \`peek\`). They are **lazy** — not executed when called.
- **Terminal** — start the processing and return a result or \`void\` (\`collect\`, \`forEach\`, \`reduce\`, \`count\`, \`findFirst\`, \`anyMatch\`). After a terminal operation the stream is **consumed** and cannot be reused.

**Laziness (lazy evaluation):** intermediate operations do nothing until a terminal one is called. Then elements flow through the pipeline **one by one** (not "the whole collection through filter, then the whole thing through map"), which enables optimizations:

- **short-circuiting** — \`findFirst\`, \`anyMatch\`, \`limit\` can stop without processing the entire source (important for infinite streams too, e.g., \`Stream.iterate\`);
- **loop fusion** — several intermediate operations run in a single pass;
- skipping unnecessary work.

Important: a Stream does **not modify** the source collection and does not store data — it merely describes a processing pipeline.`,
      },
      collectors: {
        question: 'What are Collectors? How do you do grouping and partitioning?',
        answer: `**\`Collectors\`** is a set of ready-made "collectors" for the terminal \`collect()\` operation that turn a stream into a collection or aggregate.

Common collectors:

- **into a collection:** \`toList()\`, \`toSet()\`, \`toMap(keyFn, valueFn)\` (beware duplicate keys — a merge function is needed);
- **strings:** \`joining(", ", "[", "]")\`;
- **aggregates:** \`counting()\`, \`summingInt()\`, \`averagingDouble()\`, \`minBy()/maxBy()\`.

**Grouping — \`groupingBy\`:** splits elements by a key into \`Map<K, List<V>>\`:

\`\`\`java
Map<Dept, List<Employee>> byDept =
    employees.stream().collect(Collectors.groupingBy(Employee::getDept));
\`\`\`

You can add a **downstream collector** — what to do with each group: \`groupingBy(Employee::getDept, Collectors.counting())\` yields \`Map<Dept, Long>\` (the number of employees per department).

**Partitioning — \`partitioningBy(predicate)\`** — a special case of grouping by a boolean condition, always producing \`Map<Boolean, List<V>>\` with keys \`true\`/\`false\` (e.g., splitting into those above and below a threshold).`,
      },
      'stream-reduce': {
        question: 'How does reduce() work in the Stream API?',
        answer: `**\`reduce()\`** folds a stream of elements into **a single result** by sequentially applying an associative operation (the accumulator). Three forms:

- **\`reduce(BinaryOperator)\`** → \`Optional<T>\` (the result may be absent for an empty stream):

\`\`\`java
Optional<Integer> sum = nums.stream().reduce((a, b) -> a + b);
\`\`\`

- **\`reduce(identity, accumulator)\`** → \`T\`; \`identity\` is the start/neutral value (0 for a sum, 1 for a product), returned for an empty stream:

\`\`\`java
int sum = nums.stream().reduce(0, Integer::sum);
\`\`\`

- **\`reduce(identity, accumulator, combiner)\`** — the form with a \`combiner\` for **parallel** streams: the accumulator folds partial results, and the combiner merges them across threads.

Correctness requirements: the operation must be **associative**, \`identity\` truly neutral, and the functions **side-effect-free** (otherwise a parallel reduce gives a wrong result).

When to use which: for simple sums/products/concatenations, specialized methods are handier (\`mapToInt().sum()\`); \`collect()\` is more efficient than \`reduce\` for **mutable** reduction (collecting into a collection/\`StringBuilder\`), since it doesn't create a new object at each step.`,
      },
    },
  },
  io: {
    title: 'Java I/O Streams',
    description: 'I/O and NIO',
    questions: {
      'io-streams': {
        question: 'What kinds of I/O streams exist in Java?',
        answer: `Java I/O streams are classified along two dimensions:

**By data type:**

- **byte streams** — \`InputStream\` / \`OutputStream\` (for binary data: files, images, network);
- **character streams** — \`Reader\` / \`Writer\` (for text, encoding-aware).

**By direction:** input (Input/Reader) and output (Output/Writer).

Main implementations:

- file: \`FileInputStream\`, \`FileOutputStream\`, \`FileReader\`, \`FileWriter\`;
- buffered: \`BufferedInputStream\`, \`BufferedReader\`, etc.;
- data: \`DataInputStream\`/\`DataOutputStream\` (primitives);
- objects: \`ObjectInputStream\`/\`ObjectOutputStream\` (serialization);
- bridges between bytes and characters: \`InputStreamReader\`, \`OutputStreamWriter\`.

The **Decorator** pattern is used: streams are wrapped around each other.`,
      },
      'io-vs-nio': {
        question: 'What is the difference between IO and NIO?',
        answer: `**IO (java.io)** — the classic blocking I/O:

- stream-oriented: data is read sequentially, byte by byte;
- **blocking**: the thread waits for the operation to complete;
- one thread — one connection.

**NIO (java.nio, New I/O)** — non-blocking I/O:

- buffer-oriented: data is read into a \`Buffer\` through a \`Channel\`;
- supports a **non-blocking mode**;
- **Selector** — multiplexing: a single thread serves many channels;
- memory-mapped files, file locks.

Key NIO components: \`Channel\` (FileChannel, SocketChannel), \`Buffer\` (ByteBuffer), \`Selector\`.

**NIO.2 (Java 7)** added: \`Path\`, \`Files\`, \`WatchService\`, asynchronous channels (\`AsynchronousFileChannel\`).`,
      },
      'try-with-resources': {
        question: 'What is try-with-resources?',
        answer: `**try-with-resources** (Java 7) is a construct for automatically closing resources that implement the \`AutoCloseable\` interface.

\`\`\`java
try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"));
     PrintWriter writer = new PrintWriter("out.txt")) {
    writer.println(reader.readLine());
} // resources are closed automatically in reverse order
\`\`\`

Advantages over try-finally:

- less boilerplate code;
- resources are guaranteed to be closed even if an exception occurs;
- **suppressed exceptions**: if an exception is thrown both in try and during closing, the exception from close() is suppressed and available via \`getSuppressed()\` (with try-finally it would have "overwritten" the primary one).

Since Java 9 you can use effectively final variables declared outside the block: \`try (reader) { ... }\`.`,
      },
      'files-path': {
        question: 'How do you work with files using Files and Path (NIO.2)?',
        answer: `**Path** is an abstraction of a file path (a replacement for \`File\`); **Files** is a utility class of operations.

\`\`\`java
Path path = Path.of("data", "file.txt"); // or Paths.get(...)

// reading
String content = Files.readString(path);              // Java 11
List<String> lines = Files.readAllLines(path);
try (Stream<String> stream = Files.lines(path)) { ... } // lazy

// writing
Files.writeString(path, "hello");
Files.write(path, bytes, StandardOpenOption.APPEND);

// operations
Files.exists(path);
Files.createDirectories(path.getParent());
Files.copy(src, dst, StandardCopyOption.REPLACE_EXISTING);
Files.move(src, dst);
Files.delete(path);

// tree traversal
try (Stream<Path> walk = Files.walk(dir)) { ... }
\`\`\`

Advantages over \`File\`: informative exceptions, symbolic link support, file attributes, WatchService.`,
      },
    },
  },
  serialization: {
    title: 'Serialization',
    description: 'Object serialization',
    questions: {
      'what-is-serialization': {
        question: 'What is serialization and how is it implemented in Java?',
        answer: `**Serialization** is the process of converting an object into a byte stream for storage or transmission. **Deserialization** is the reverse process.

Standard serialization in Java is implemented via:

- the marker interface \`java.io.Serializable\` (no methods);
- the \`ObjectOutputStream\` / \`ObjectInputStream\` classes.

\`\`\`java
class User implements Serializable {
    private static final long serialVersionUID = 1L;
    private String name;
}

// serialization
try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("user.bin"))) {
    oos.writeObject(user);
}

// deserialization
try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("user.bin"))) {
    User user = (User) ois.readObject();
}
\`\`\`

Key points: the entire object graph is serialized; all fields must be serializable; the constructor is **not called** during deserialization.`,
      },
      transient: {
        question: 'What is the transient keyword?',
        answer: `**transient** is a field modifier that excludes the field from standard serialization.

\`\`\`java
class User implements Serializable {
    private String login;
    private transient String password; // will not go into the byte stream
    private transient Connection connection; // non-serializable resource
}
\`\`\`

After deserialization, transient fields receive their **default values**: \`null\` for references, \`0\`/\`false\` for primitives.

When to use:

- sensitive data (passwords, keys);
- non-serializable resources (connections, streams, locks);
- computed/cached fields that can be restored.

Note: \`static\` fields are not serialized either (they belong to the class, not the object).`,
      },
      serialversionuid: {
        question: 'Why is serialVersionUID needed?',
        answer: `**serialVersionUID** is a unique version identifier of a serializable class.

\`\`\`java
private static final long serialVersionUID = 1L;
\`\`\`

During deserialization the JVM compares the \`serialVersionUID\` from the byte stream with the UID of the current class. On mismatch, an \`InvalidClassException\` is thrown.

If the UID is not declared explicitly, the JVM **computes it automatically** based on the class structure (name, fields, methods). The problem: any change to the class (even adding a method) changes the computed UID and breaks compatibility with previously serialized data.

**Recommendation**: always declare \`serialVersionUID\` explicitly. For compatible changes (adding a field) keep the UID — new fields will get default values when reading old data. For incompatible changes, increment the UID.`,
      },
      'custom-serialization': {
        question: 'How can the serialization process be customized? (writeObject/readObject, Externalizable)',
        answer: `**Option 1: writeObject/readObject methods** — customizing standard serialization:

\`\`\`java
private void writeObject(ObjectOutputStream oos) throws IOException {
    oos.defaultWriteObject();          // standard part
    oos.writeObject(encrypt(password)); // custom logic
}

private void readObject(ObjectInputStream ois) throws IOException, ClassNotFoundException {
    ois.defaultReadObject();
    this.password = decrypt((String) ois.readObject());
}
\`\`\`

**Option 2: the Externalizable interface** — full control:

\`\`\`java
class User implements Externalizable {
    public void writeExternal(ObjectOutput out) { ... }
    public void readExternal(ObjectInput in) { ... }
}
\`\`\`

Externalizable differences: only what you explicitly wrote is serialized; the **no-arg constructor is called** during deserialization (it is required); usually faster and more compact.

Also: \`writeReplace()\`/\`readResolve()\` — replacing the object during serialization/deserialization (used for Singleton).`,
      },
    },
  },
  multithreading: {
    title: 'Multithreading',
    description: 'Threads, synchronization, concurrency',
    questions: {
      'thread-creation': {
        question: 'What ways of creating threads exist in Java?',
        answer: `The main ways:

**1. Extending Thread:**

\`\`\`java
class MyThread extends Thread {
    public void run() { ... }
}
new MyThread().start();
\`\`\`

**2. Implementing Runnable** (preferable — does not use up inheritance):

\`\`\`java
Runnable task = () -> System.out.println("running");
new Thread(task).start();
\`\`\`

**3. Callable + Future** — a task with a result and exceptions:

\`\`\`java
Callable<Integer> task = () -> 42;
Future<Integer> future = executor.submit(task);
Integer result = future.get(); // blocking wait
\`\`\`

**4. ExecutorService / thread pools** — the right approach in production:

\`\`\`java
ExecutorService executor = Executors.newFixedThreadPool(4);
executor.submit(task);
\`\`\`

**5. CompletableFuture** — asynchronous chains (Java 8+).

**6. Virtual Threads** (Java 21) — lightweight threads: \`Thread.ofVirtual().start(task)\`.

Important: call \`start()\`, not \`run()\` — otherwise the code executes in the current thread.`,
      },
      synchronized: {
        question: 'How does the synchronized keyword work?',
        answer: `**synchronized** provides mutual exclusion: only one thread can execute the protected code by acquiring the object's monitor.

Usage variants:

\`\`\`java
// synchronized method — monitor of this
public synchronized void increment() { count++; }

// static method — monitor of the Class object
public static synchronized void update() { ... }

// block — monitor of the specified object
synchronized (lock) { count++; }
\`\`\`

How it works:

- every object in Java has a **monitor** (intrinsic lock);
- a thread acquires the monitor on entry and releases it on exit (including on an exception);
- the monitor is **reentrant**: a thread can re-acquire its own monitor;
- it provides both **atomicity** and **visibility** (happens-before): changes are visible to the next thread that acquires the monitor.

Drawbacks: locking, no timeout, no interruptibility — for complex scenarios use \`ReentrantLock\`.`,
      },
      volatile: {
        question: 'What is volatile and how does it differ from synchronized?',
        answer: `**volatile** is a field modifier that guarantees:

- **visibility**: a write to a volatile field is immediately visible to all threads (reads/writes go to main memory, bypassing caches);
- **no reordering**: operations before a write to a volatile field cannot be moved after it (happens-before).

**What volatile does NOT guarantee — atomicity of compound operations:**

\`\`\`java
private volatile int count;
count++; // NOT atomic: read -> modify -> write, a race is possible
\`\`\`

**Differences from synchronized:**

| | volatile | synchronized |
|---|---|---|
| Visibility | yes | yes |
| Atomicity | only read/write of a single field | yes, the whole block |
| Locking | no | yes |

Typical uses of volatile: stop flags (\`while (!stopped)\`), double-checked locking in Singleton.

For atomic counter operations use \`AtomicInteger\` and other classes from \`java.util.concurrent.atomic\`.`,
      },
      deadlock: {
        question: 'What is a deadlock and how can it be avoided?',
        answer: `**Deadlock** is a situation where two or more threads wait for each other forever, each holding resources the others need.

Classic example:

\`\`\`java
// Thread 1: acquired A, waits for B
synchronized (a) { synchronized (b) { ... } }
// Thread 2: acquired B, waits for A
synchronized (b) { synchronized (a) { ... } }
\`\`\`

Conditions for occurrence (all 4 simultaneously): mutual exclusion, hold and wait, no preemption, circular wait.

**How to avoid it:**

- **lock ordering**: always acquire locks in the same order;
- **timeouts**: \`tryLock(timeout)\` on \`ReentrantLock\`;
- minimize nested locking and lock hold time;
- use high-level facilities: \`java.util.concurrent\`, immutable objects, lock-free structures.

Diagnostics: thread dump (\`jstack\`), \`ThreadMXBean.findDeadlockedThreads()\`.`,
      },
      'executor-service': {
        question: 'What is ExecutorService and which thread pools do you know?',
        answer: `**ExecutorService** is a high-level API for managing threads: it separates task submission from the mechanics of their execution.

Factory methods of \`Executors\`:

- \`newFixedThreadPool(n)\` — a fixed number of threads, unbounded queue;
- \`newCachedThreadPool()\` — creates threads as needed, reuses idle ones (60 sec);
- \`newSingleThreadExecutor()\` — a single thread, sequential execution;
- \`newScheduledThreadPool(n)\` — delayed and periodic tasks;
- \`newWorkStealingPool()\` — a ForkJoinPool with work-stealing;
- \`newVirtualThreadPerTaskExecutor()\` (Java 21) — a virtual thread per task.

In production it is recommended to create a \`ThreadPoolExecutor\` manually, controlling: corePoolSize, maximumPoolSize, the queue (bounded!), ThreadFactory, RejectedExecutionHandler.

Shutdown: \`shutdown()\` — graceful, \`shutdownNow()\` — interrupts tasks, \`awaitTermination()\` — waiting.`,
      },
      'concurrent-collections': {
        question: 'Which thread-safe collections do you know?',
        answer: `The main thread-safe collections from \`java.util.concurrent\`:

**ConcurrentHashMap** — a concurrent hash table:

- since Java 8 — CAS + synchronized at the bucket level (previously — segments);
- lock-free reads, weakly consistent iterators;
- atomic operations: \`computeIfAbsent\`, \`merge\`, \`putIfAbsent\`.

**CopyOnWriteArrayList / CopyOnWriteArraySet** — the entire array is copied on every write. Ideal for frequent reads and rare writes (event listeners).

**BlockingQueue** — queues for producer-consumer:

- \`ArrayBlockingQueue\` — bounded, array-based;
- \`LinkedBlockingQueue\` — based on a linked list;
- \`SynchronousQueue\` — hand-to-hand transfer;
- \`DelayQueue\`, \`PriorityBlockingQueue\`.

**ConcurrentSkipListMap/Set** — sorted concurrent structures.

Legacy: \`Vector\`, \`Hashtable\`, \`Collections.synchronizedList()\` — lock the entire collection, poor scalability.`,
      },
      'wait-notify-sleep': {
        question: 'What is the difference between wait() and sleep()? How do wait/notify work?',
        answer: `**Difference between wait() and sleep():**

| | wait() | sleep() |
|---|---|---|
| Class | Object | Thread (static) |
| Releases the monitor | **yes** | **no** |
| Where it is called | only in a synchronized block | anywhere |
| Wake-up | notify()/notifyAll()/timeout | on timeout |

**The wait/notify mechanism** — thread coordination via an object's monitor:

\`\`\`java
// Consumer
synchronized (lock) {
    while (queue.isEmpty()) {   // always while, not if!
        lock.wait();            // releases the monitor and waits
    }
    process(queue.poll());
}

// Producer
synchronized (lock) {
    queue.add(item);
    lock.notifyAll();           // wakes up waiting threads
}
\`\`\`

Important rules:

- checking the condition in a \`while\` loop protects against **spurious wakeups**;
- \`notify()\` wakes one random thread, \`notifyAll()\` — all of them (safer);
- calling outside synchronized — \`IllegalMonitorStateException\`.

In modern code, instead of wait/notify use \`BlockingQueue\`, \`Condition\` (on ReentrantLock), \`CountDownLatch\`, \`Semaphore\`.`,
      },
      threadlocal: {
        question: 'What is ThreadLocal?',
        answer: `**ThreadLocal<T>** is a variable that has **its own copy of the value for each thread**. Threads do not see each other's values — no synchronization is needed.

\`\`\`java
private static final ThreadLocal<SimpleDateFormat> FORMAT =
    ThreadLocal.withInitial(() -> new SimpleDateFormat("yyyy-MM-dd"));

FORMAT.get().format(date);   // each thread has its own instance
FORMAT.remove();             // cleanup
\`\`\`

**Uses:**

- non-thread-safe objects (SimpleDateFormat before Java 8);
- request context: MDC in logging, SecurityContext in Spring Security, transactional context (binding a Connection to a thread in Spring \`@Transactional\`).

**Dangers:**

- **memory leaks in thread pools**: threads live long, values remain — always call \`remove()\` in finally;
- the context is not propagated to child/asynchronous tasks (there is \`InheritableThreadLocal\`, but it does not work with pools).

Since Java 21, **Scoped Values** have been proposed for virtual threads — a safer alternative.`,
      },
      completablefuture: {
        question: 'What is CompletableFuture?',
        answer: `**CompletableFuture<T>** (Java 8) is an extension of Future for asynchronous programming: composition of operation chains without blocking.

\`\`\`java
CompletableFuture.supplyAsync(() -> fetchUser(id), executor)   // asynchronously
    .thenApply(User::getEmail)                 // transformation
    .thenCompose(email -> sendAsync(email))    // flat composition (flatMap)
    .thenAccept(result -> log.info("Sent: {}", result))
    .exceptionally(ex -> { log.error("Error", ex); return null; });
\`\`\`

**Key methods:**

- creation: \`supplyAsync\` (with a result), \`runAsync\` (without), \`completedFuture\`;
- transformation: \`thenApply\` (map), \`thenCompose\` (flatMap), \`thenAccept\`, \`thenRun\`;
- combining: \`thenCombine\` (two results), \`allOf\` (wait for all), \`anyOf\` (the first one);
- errors: \`exceptionally\`, \`handle\` (result or error), \`whenComplete\`;
- timeouts (Java 9): \`orTimeout\`, \`completeOnTimeout\`.

**Important:** without an explicit executor, the \`*Async\` methods use \`ForkJoinPool.commonPool()\` — for I/O tasks pass your own pool. \`get()\` blocks — avoid it in asynchronous chains.`,
      },
      'concurrency-vs-parallelism': {
        question: 'What is the difference between concurrency and parallelism? What are a process and a thread?',
        answer: `A **process** is a running program with its own isolated address space and resources. A **thread** is a unit of execution within a process; threads of one process **share** its memory (the heap) but have their own stack and program counter. Threads are lighter than processes and switch faster, but require synchronization due to shared memory.

**Concurrency** is a program's ability to **manage several tasks** within one period of time by interleaving them. The tasks may run **not simultaneously**, but in turns on one core (context switching creates the illusion of parallelism). It's about **structure** — how tasks are organized and switched.

**Parallelism** is the **physically simultaneous** execution of several tasks on **different cores/processors**. It's about **execution**.

The relationship: concurrency is possible even on a single core; parallelism requires multiple cores. A concurrent program **can** run in parallel if resources allow. Example: handling HTTP requests is concurrent (many tasks "in flight"), and on a multi-core server it's also parallel (several are actually computed at once). The famous phrasing: concurrency is about **dealing** with many things at once; parallelism is about **doing** many things at once.`,
      },
      'daemon-threads': {
        question: 'What is the difference between a user thread and a daemon thread?',
        answer: `Threads in Java come in two types:

- **User thread** — an ordinary thread. The JVM **will not exit** while at least one user thread is alive. The main thread (\`main\`) is a user thread.
- **Daemon thread** — a background service thread. The JVM **exits** as soon as only daemon threads remain, **without waiting** for them to finish (they are simply terminated).

Set via \`thread.setDaemon(true)\` **before** \`start()\`; by default a thread inherits the creator's status (threads created from main are user threads).

Why daemons: for auxiliary background tasks that shouldn't keep the application alive — the garbage collector, timers, background monitoring, heartbeats.

An important danger: since the JVM kills daemon threads without waiting, you **must not** do critical resource work in them (writing to a file/DB, releasing resources) — \`finally\` blocks may not run and data can be lost. For such work you need user threads and a proper graceful shutdown.`,
      },
      'java-memory-model': {
        question: 'What is the Java Memory Model (JMM) and happens-before?',
        answer: `The **Java Memory Model (JMM)** is part of the language specification that defines **how and when** memory changes made by one thread become **visible** to another, and which reorderings of operations are allowed. Without the JMM, multithreaded behavior would be unpredictable: the compiler, JIT, and CPU can **reorder instructions** and cache values in registers/core caches.

Two key problems the JMM addresses:

- **visibility** — a thread may not see another thread's write if it's "stuck" in a core's cache;
- **ordering** — operations may execute in a different order than in the code.

The central concept is **happens-before**: if action A *happens-before* B, then A's result is **guaranteed visible** to B and cannot be reordered after it. The main rules:

- everything in one thread — in program order;
- **unlocking** a monitor happens-before a subsequent lock of the same monitor (\`synchronized\`);
- a write to a **\`volatile\`** field happens-before a subsequent read of that field;
- \`Thread.start()\` happens-before the started thread's code; the thread's code happens-before \`join()\`.

Practical takeaway: correct visibility isn't achieved "by itself" but through \`synchronized\`, \`volatile\`, \`java.util.concurrent\` (which establish happens-before), not via a bare shared field.`,
      },
      'thread-safety-problems': {
        question: 'What problems arise from incorrect synchronization (race condition, deadlock, livelock, starvation)?',
        answer: `The main multithreading errors:

- **Race condition** — the result depends on the **order** of thread execution. A special case is a lost update in \`i++\` (not atomic: read-modify-write). Fixed by synchronization or atomic operations.
- **Visibility** — a thread doesn't see changes made by another (the value is cached). Fixed by \`volatile\`/\`synchronized\` (see the JMM).
- **Deadlock** — threads wait forever for each other's resources in a cycle (A holds lock 1 and waits for 2, B holds 2 and waits for 1). Prevention — a single lock-acquisition order, timeouts (\`tryLock\`).
- **Livelock** — threads are **not blocked** but endlessly react to each other and make no progress (like two people yielding the way in the same direction). Fixed by adding randomness/backoff.
- **Starvation** — a thread **doesn't get** a resource/CPU time because others keep taking it (e.g., a low-priority thread with greedy high-priority ones). Fixed with fair locks and reasonable priorities.

General principle: minimize shared mutable state, and where it's needed, protect it consistently (the same locks, immutability, thread-safe structures from \`java.util.concurrent\`).`,
      },
      reentrantlock: {
        question: 'What is ReentrantLock and how does it differ from synchronized?',
        answer: `**\`ReentrantLock\`** (from \`java.util.concurrent.locks\`) is an explicit lock with the same mutual-exclusion guarantees as \`synchronized\`, but with more capabilities. "Reentrant" — like \`synchronized\`, it allows the same thread to **re-acquire** it.

\`\`\`java
lock.lock();
try { /* critical section */ }
finally { lock.unlock(); } // must unlock manually!
\`\`\`

Advantages over \`synchronized\`:

- **\`tryLock()\`** — attempt to acquire without waiting forever (including with a timeout) — helps avoid deadlock;
- **interruptible** lock waiting (\`lockInterruptibly()\`);
- **fairness** — an option to grant the lock in queue order (reduces starvation, but slower);
- multiple **\`Condition\`** objects on one lock (like \`wait/notify\`, but separate wait queues);
- can unlock in a different method (flexibility).

Downsides: unlocking must be done **manually in \`finally\`** (forget it — deadlock), and the code is more verbose.

When to use which: **\`synchronized\`** — simpler and sufficient in most cases (the JVM optimizes it well); **\`ReentrantLock\`** — when you need tryLock/timeout, interruptibility, fairness, or multiple conditions.`,
      },
      'atomic-cas': {
        question: 'What are atomic classes (AtomicInteger) and CAS?',
        answer: `**Atomic classes** (\`AtomicInteger\`, \`AtomicLong\`, \`AtomicReference\`, etc. from \`java.util.concurrent.atomic\`) provide thread-safe operations on a single variable **without locks** (lock-free). For example, \`incrementAndGet()\` atomically performs the read-modify-write that a plain \`i++\` doesn't do atomically.

At the core is **CAS (Compare-And-Swap)**: an atomic CPU instruction "compare and exchange." It takes an address, an **expected** value, and a **new** one: if the current value equals the expected, it writes the new one and reports success; otherwise it does nothing and returns failure. The algorithm loops: read the value, compute the new one, try CAS; on failure (someone changed it first) — retry (optimistic retry / spin).

Pros: no locks → no deadlock, less overhead and fewer context switches under **low/moderate** contention. Cons: under **high** contention many loop iterations are wasted (then \`LongAdder\`, which spreads the counter across cells, is better); the classic **ABA problem** (a value changed A→B→A — CAS "won't notice"), solved by versioning (\`AtomicStampedReference\`).

CAS is the foundation of non-blocking structures and most of \`java.util.concurrent\`.`,
      },
      'semaphore-latch-barrier': {
        question: 'How do Semaphore, CountDownLatch, and CyclicBarrier differ?',
        answer: `Three different synchronization primitives from \`java.util.concurrent\`:

- **\`Semaphore\`** — a counter of **permits** that limits the number of threads simultaneously accessing a resource. \`acquire()\` takes a permit (waits if there are none), \`release()\` returns one. Example: a pool of N connections — no more than N threads at once. A binary semaphore (1 permit) works like a lock.
- **\`CountDownLatch\`** — a "latch": one or more threads **wait** on \`await()\` until the counter reaches zero via \`countDown()\`. **One-time** — it doesn't reset after zero. Example: the main thread waits until N workers finish initialization; waiting for several tasks to complete.
- **\`CyclicBarrier\`** — a "barrier": a fixed number of threads wait for each other at \`await()\`, and once all have arrived — they **all continue simultaneously**. **Reusable** (cyclic) — after tripping it's ready for a new cycle; you can set a barrier action. Example: phased computations where threads must move to the next stage in sync.

Key differences: Semaphore — **access limiting** (permits); CountDownLatch — a **one-time** wait for an event (the threads calling \`countDown\` and those waiting are different); CyclicBarrier — a **reusable** mutual meeting of threads (all wait for all).`,
      },
      forkjoinpool: {
        question: 'What is ForkJoinPool and work-stealing?',
        answer: `**\`ForkJoinPool\`** is a specialized thread pool (Java 7) for tasks that can be **recursively split** into subtasks (divide-and-conquer): each task splits (\`fork\`) as needed, and the results are then combined (\`join\`). It's the basis of parallel streams (\`parallelStream\` uses the shared \`ForkJoinPool.commonPool()\`).

The key feature is **work-stealing**: **each** worker thread has its own **double-ended queue (deque)** of tasks. A thread takes its own subtasks from one end; when its queue is empty, it **"steals"** a task from the **other** end of a busy thread's queue. This balances load automatically and keeps cores busy, minimizing idling and contention on a shared queue.

Tasks are expressed as \`RecursiveTask<V>\` (returns a result) or \`RecursiveAction\` (no result), implementing \`compute()\`: if the task is small — compute directly, otherwise split and \`fork\`/\`join\`.

Important: ForkJoin tasks **must not block** (I/O, long \`sleep\`) — that occupies a pool thread and breaks work-stealing; blocking operations need an ordinary pool. ForkJoin is good for **CPU-bound** recursive computations over large data.`,
      },
      'virtual-threads': {
        question: 'What are virtual threads and how do they differ from ordinary ones?',
        answer: `**Virtual threads** (Project Loom, stable in **Java 21**) are very lightweight threads managed by the **JVM** rather than the operating system.

An ordinary (**platform**) thread wraps an OS thread: expensive (≈1 MB stack), limited to thousands, with context switching done by the OS. Because of this, blocking code ("a thread per request") scales poorly — threads idle on I/O.

A **virtual thread** is cheap (its stack grows as needed, and there can be **millions** of them). The JVM runs them on a small pool of platform threads (**carrier threads**). The key mechanism: when a virtual thread **blocks** (a network call, \`sleep\`, a blocking queue), the JVM **unmounts** it from the carrier thread and runs another virtual thread on it — the carrier doesn't idle. When the block clears, the virtual thread is mounted again.

What this gives: you can write **simple blocking, synchronous code** (easy to read and debug) while getting async-like scalability — a million concurrent tasks without reactive complexity. Created via \`Thread.ofVirtual().start(...)\` or \`Executors.newVirtualThreadPerTaskExecutor()\`.

Caveats: virtual threads don't speed up **CPU-bound** work (there the core count rules), you should **not** pool them (create one per task), and "pinning" on a \`synchronized\` block with a blocking call can hold the carrier (prefer \`ReentrantLock\`).`,
      },
      blockingqueue: {
        question: 'What is a BlockingQueue and where is it used?',
        answer: `A **\`BlockingQueue\`** is a thread-safe queue from \`java.util.concurrent\` that **blocks** a thread at the boundaries: when trying to take from an **empty** queue (\`take()\`) the thread waits until an element appears; when trying to put into a **full** (bounded) queue (\`put()\`) it waits until space frees up. This relieves the developer of manual \`wait/notify\`.

The classic use is the **producer-consumer** pattern: producers put tasks into the queue, consumers take them out; the queue safely hands off data and **regulates the pace** (backpressure) — if consumers can't keep up, a bounded queue throttles the producers. Inside a \`ThreadPoolExecutor\`, the task queue is a \`BlockingQueue\`.

Main implementations:

- **\`ArrayBlockingQueue\`** — bounded, array-based (fixed capacity);
- **\`LinkedBlockingQueue\`** — optionally bounded, linked-list-based, higher throughput;
- **\`PriorityBlockingQueue\`** — unbounded, with priority ordering;
- **\`SynchronousQueue\`** — no capacity: a "hand-to-hand" handoff (put waits for take);
- **\`DelayQueue\`** — elements become available only after a delay (schedulers).

Methods of different "flavors": blocking (\`put\`/\`take\`), timed (\`offer\`/\`poll(timeout)\`), and immediate (\`offer\`/\`poll\` without waiting).`,
      },
    },
  },
  reactive: {
    title: 'Reactive Programming',
    description: 'Reactive Streams, Project Reactor, RxJava',
    questions: {
      'what-is-reactive': {
        question: 'What is reactive programming?',
        answer: `**Reactive programming** is a paradigm based on asynchronous data streams and the propagation of changes. The program reacts to events as they arrive.

Principles from the **Reactive Manifesto**:

- **Responsive** — the system responds quickly;
- **Resilient** — resilient to failures;
- **Elastic** — scalable under load;
- **Message Driven** — asynchronous message exchange.

Key differences from the imperative approach:

- **push instead of pull**: data is "pushed" to subscribers rather than requested;
- **non-blocking execution**: threads do not sit idle waiting for I/O;
- **backpressure**: the consumer controls the rate at which data arrives.

The Java ecosystem: Reactive Streams (the standard), Project Reactor (Spring WebFlux), RxJava, Akka Streams, Flow API (Java 9).`,
      },
      'reactive-streams': {
        question: 'What is the Reactive Streams specification?',
        answer: `**Reactive Streams** is a standard for asynchronous stream processing with non-blocking backpressure. Since Java 9 it is included in the JDK as \`java.util.concurrent.Flow\`.

Four interfaces:

\`\`\`java
interface Publisher<T> {
    void subscribe(Subscriber<? super T> s);
}

interface Subscriber<T> {
    void onSubscribe(Subscription s);
    void onNext(T t);
    void onError(Throwable t);
    void onComplete();
}

interface Subscription {
    void request(long n);  // backpressure!
    void cancel();
}

interface Processor<T, R> extends Subscriber<T>, Publisher<R> {}
\`\`\`

Protocol: \`onSubscribe onNext* (onError | onComplete)?\`

The key idea is **backpressure**: via \`request(n)\` the subscriber explicitly tells how many elements it is ready to accept, which protects it from being overwhelmed by a fast publisher.`,
      },
      'mono-flux': {
        question: 'What are Mono and Flux in Project Reactor?',
        answer: `**Project Reactor** is a reactive library, the foundation of Spring WebFlux. Two main publisher types:

**Mono<T>** — a publisher of **0 or 1** element:

\`\`\`java
Mono<User> user = userRepository.findById(id);
Mono<String> name = user.map(User::getName)
                        .defaultIfEmpty("Unknown");
\`\`\`

**Flux<T>** — a publisher of **0..N** elements:

\`\`\`java
Flux<User> users = userRepository.findAll();
users.filter(u -> u.getAge() > 18)
     .map(User::getName)
     .take(10)
     .subscribe(System.out::println);
\`\`\`

Important points:

- nothing happens until subscription (**"assembly time" vs "subscription time"**);
- operators: \`map\`, \`flatMap\`, \`filter\`, \`zip\`, \`merge\`, \`concat\`, \`retry\`, \`onErrorResume\`;
- thread control: \`subscribeOn\` (where subscription happens), \`publishOn\` (where processing happens further down the chain);
- backpressure strategies: \`onBackpressureBuffer\`, \`onBackpressureDrop\`, \`onBackpressureLatest\`.`,
      },
      'reactive-vs-async': {
        question: 'When should you use the reactive approach, and when not?',
        answer: `**The reactive approach is justified:**

- high-load I/O-bound services (thousands of simultaneous connections);
- data streaming (SSE, WebSocket), event-driven systems;
- integrating many external services with slow responses;
- the need for backpressure under uneven load;
- aggregator microservices with parallel calls.

**The reactive approach is excessive/harmful:**

- CPU-bound tasks — non-blocking code will not speed up computation;
- simple CRUD applications with moderate load;
- the team is unfamiliar with the paradigm — debugging and stack traces are very complex;
- blocking dependencies (JDBC without R2DBC) negate the benefits.

An alternative since Java 21 — **virtual threads (Project Loom)**: the scalability of the reactive approach with the familiar imperative code style. In many scenarios Loom is displacing reactive frameworks.`,
      },
      'hot-cold-publishers': {
        question: 'What is the difference between cold and hot publishers?',
        answer: `**A cold publisher** generates data **anew for each subscriber**; nothing happens without a subscription:

\`\`\`java
Flux<User> users = Flux.defer(() -> userRepository.findAll());
users.subscribe(s1); // DB query #1
users.subscribe(s2); // DB query #2 — an independent sequence from the beginning
\`\`\`

Examples: an HTTP request, reading a file, a database query. Each subscriber receives the full stream from the first element.

**A hot publisher** emits data **independently of subscribers**; a subscriber only sees what happened after subscribing:

\`\`\`java
// stock quotes, mouse clicks, Kafka messages — "live" events
Sinks.Many<Price> sink = Sinks.many().multicast().onBackpressureBuffer();
Flux<Price> prices = sink.asFlux();
// a late subscriber has missed the earlier events
\`\`\`

**Turning cold → hot:**

- \`share()\` / \`publish().refCount(n)\` — a shared subscription to the source for multiple consumers;
- \`cache(n)\` — hot + replay of the last n elements to new subscribers;
- \`replay()\` — replaying the history.

**Practical significance**: without understanding the difference, it is easy to end up with duplicated side effects (two HTTP calls instead of one with two subscriptions to a cold stream) or lost events (a late subscription to a hot stream). Analogy: cold — a movie on demand (from the beginning for everyone), hot — a live broadcast.`,
      },
      'webflux-vs-mvc': {
        question: 'What is the difference between Spring WebFlux and Spring MVC?',
        answer: `**Spring MVC** — the classic servlet stack:

- the thread-per-request model, blocking I/O;
- Tomcat/Jetty, Servlet API;
- return types: objects, \`ResponseEntity\`;
- blocking drivers: JDBC, RestTemplate.

**Spring WebFlux** — the reactive stack:

- **non-blocking I/O**, event loop (Netty by default): a small number of threads serves thousands of connections;
- return types: \`Mono<T>\`, \`Flux<T>\`;
- \`WebClient\` instead of RestTemplate, R2DBC instead of JDBC, reactive Mongo/Redis/Kafka drivers;
- Server-Sent Events and streaming support out of the box;
- two styles: annotations (\`@RestController\` + Mono/Flux) and functional routers (RouterFunction).

\`\`\`java
@GetMapping("/users/{id}")
public Mono<User> getUser(@PathVariable String id) {
    return userRepository.findById(id)
        .switchIfEmpty(Mono.error(new NotFoundException()));
}
\`\`\`

**Critically important**: a single blocking call (JDBC, heavy computation) in the event loop **stops the processing of all requests** on that thread. Blocking code is isolated: \`publishOn(Schedulers.boundedElastic())\`. Detector: BlockHound.

**The choice**: WebFlux — high concurrency of I/O-bound load, streaming, the whole dependency chain is reactive. MVC — the familiar model, blocking dependencies, easier debugging. MVC + virtual threads (Java 21) is often a sufficient alternative to WebFlux.`,
      },
      'reactor-error-backpressure': {
        question: 'How do you handle errors and backpressure in Project Reactor?',
        answer: `**Error handling** — an error is terminal: the stream ends with an \`onError\` signal, and no further elements arrive.

Main operators:

\`\`\`java
flux
    .onErrorReturn(fallbackValue)                  // default value
    .onErrorResume(e -> fallbackPublisher(e))      // fallback stream (e.g., a cache)
    .onErrorMap(e -> new BusinessException(e))     // exception transformation
    .onErrorContinue((e, item) -> log.warn(...))   // skip the element, continue (use with care!)
    .retry(3)                                      // re-subscription
    .retryWhen(Retry.backoff(3, Duration.ofSeconds(1))
        .filter(e -> e instanceof TransientException))
    .timeout(Duration.ofSeconds(5))                // TimeoutException on inactivity
    .doFinally(signal -> cleanup());               // resource release
\`\`\`

Important: \`retry\` is a **re-subscription** (for a cold source — repeating the whole operation); an exception in an operator's lambda is turned into onError.

**Backpressure** is a mechanism protecting a slow consumer from a fast producer: the subscriber requests \`request(n)\`.

When the source cannot slow down (events, UI, a message broker), choose a strategy:

- \`onBackpressureBuffer(size)\` — buffering (memory risk; can be used with a DROP_OLDEST policy);
- \`onBackpressureDrop()\` — drop the excess;
- \`onBackpressureLatest()\` — keep only the latest;
- \`onBackpressureError()\` — fail with an error;
- \`limitRate(n)\` — limiting the size of requests upstream;
- \`sample()\` / \`window()\` / \`buffer()\` — stream aggregation.

On overflow without a strategy — \`OverflowException\`. The strategy choice depends on the domain: quotes — latest, metrics — drop/sample, payments — buffer + persistence (Kafka is better).`,
      },
    },
  },
  servlets: {
    title: 'Servlets, JSP, JSTL',
    description: 'Java web technologies',
    questions: {
      'what-is-servlet': {
        question: 'What is a servlet? What is its lifecycle?',
        answer: `A **servlet** is a Java class that handles HTTP requests on the server side. It runs inside a servlet container (Tomcat, Jetty).

**Lifecycle** (managed by the container):

1. **Class loading and instantiation** — the container creates a single instance of the servlet;
2. **init(ServletConfig)** — called once after creation; resource initialization;
3. **service(request, response)** — called for every request (in a separate thread!); \`HttpServlet\` dispatches to \`doGet\`, \`doPost\`, \`doPut\`, \`doDelete\`;
4. **destroy()** — called once before unloading; resource cleanup.

\`\`\`java
@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {
        resp.getWriter().println("Hello!");
    }
}
\`\`\`

Important: a single instance serves many threads simultaneously — the servlet must be **thread-safe** (no mutable state in fields).`,
      },
      jsp: {
        question: 'What is JSP and how does it differ from a servlet?',
        answer: `**JSP (JavaServer Pages)** is a technology for creating dynamic web pages: HTML with embedded Java code.

\`\`\`jsp
<html>
  <body>
    <h1>Hello, <%= request.getParameter("name") %>!</h1>
    <% for (String item : items) { %>
        <p><%= item %></p>
    <% } %>
  </body>
</html>
\`\`\`

**Key fact**: a JSP page is **compiled into a servlet** on first access. JSP is a "servlet inside out": a servlet is Java code that generates HTML; JSP is HTML with Java inserts.

JSP elements: scriptlets \`<% %>\`, expressions \`<%= %>\`, declarations \`<%! %>\`, directives \`<%@ page/include/taglib %>\`, implicit objects (request, response, session, application).

Separation of concerns (MVC): the servlet is the controller (logic), JSP is the view (presentation). Scriptlets are considered an anti-pattern — use EL and JSTL instead.`,
      },
      'jstl-el': {
        question: 'What are JSTL and Expression Language (EL)?',
        answer: `**EL (Expression Language)** is an expression language for accessing data in JSP without Java code:

\`\`\`jsp
\${user.name}                  <!-- getter: user.getName() -->
\${sessionScope.cart.total}
\${param.id}                   <!-- request.getParameter("id") -->
\${empty list ? 'no data' : list[0]}
\`\`\`

**JSTL (JSP Standard Tag Library)** is the standard tag library that replaces scriptlets:

\`\`\`jsp
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:if test="\${user.admin}">Admin panel</c:if>

<c:forEach var="item" items="\${cart.items}">
    <p>\${item.name}: \${item.price}</p>
</c:forEach>

<c:choose>
    <c:when test="\${total > 1000}">Discount!</c:when>
    <c:otherwise>No discount</c:otherwise>
</c:choose>
\`\`\`

JSTL libraries: core (c), formatting (fmt), functions (fn), sql, xml.`,
      },
      'session-tracking': {
        question: 'What session management techniques exist?',
        answer: `HTTP is a stateless protocol, so the following are used to track a user between requests:

**1. Cookies** — the server sends \`Set-Cookie\`, the browser returns \`Cookie\` with every request. The standard mechanism: \`JSESSIONID\`.

**2. URL Rewriting** — the session identifier is appended to the URL (\`;jsessionid=...\`) when cookies are disabled: \`response.encodeURL(url)\`.

**3. Hidden form fields**.

**4. HttpSession API:**

\`\`\`java
HttpSession session = request.getSession();     // creates one if absent
session.setAttribute("user", user);
User user = (User) session.getAttribute("user");
session.setMaxInactiveInterval(1800);            // 30-minute timeout
session.invalidate();                            // end the session
\`\`\`

In modern distributed systems, a **stateless approach** is often used instead of server-side sessions: JWT tokens, with state stored in Redis or a database.`,
      },
    },
  },
  databases: {
    title: 'Databases',
    description: 'Database theory, transactions, indexes',
    questions: {
      acid: {
        question: 'What is ACID?',
        answer: `**ACID** — the four properties of transactions in relational databases:

- **Atomicity** — a transaction is executed entirely or not at all. On failure, all changes are rolled back.
- **Consistency** — a transaction moves the database from one consistent state to another; all constraints (constraints, foreign keys) are satisfied.
- **Isolation** — concurrent transactions do not affect each other; the result is as if they ran sequentially (the degree depends on the isolation level).
- **Durability** — after commit, changes persist even if the system crashes (ensured by WAL — write-ahead logging).

The opposite approach is **BASE** (Basically Available, Soft state, Eventually consistent) — used in distributed NoSQL systems where availability matters more.`,
      },
      'isolation-levels': {
        question: 'What transaction isolation levels do you know?',
        answer: `Isolation levels (from weakest to strictest) and the anomalies they allow:

| Level | Dirty Read | Non-Repeatable Read | Phantom Read |
|---|---|---|---|
| READ UNCOMMITTED | yes | yes | yes |
| READ COMMITTED | no | yes | yes |
| REPEATABLE READ | no | no | yes* |
| SERIALIZABLE | no | no | no |

**Anomalies:**

- **Dirty read** — reading uncommitted changes made by another transaction;
- **Non-repeatable read** — re-reading the same row yields a different result (another transaction modified and committed it);
- **Phantom read** — re-running a query with the same condition returns new rows added by another transaction.

\\* In MySQL (InnoDB), REPEATABLE READ prevents phantoms via next-key locking; in PostgreSQL — via snapshots (MVCC).

Defaults: PostgreSQL, Oracle — READ COMMITTED; MySQL — REPEATABLE READ.`,
      },
      indexes: {
        question: 'What are indexes and how do they work?',
        answer: `An **index** is a data structure that speeds up row lookups by column values at the cost of slower writes and extra storage.

**B-Tree index** (the default) — a balanced tree:

- search, insertion, deletion — O(log n);
- supports equality, ranges (\`<\`, \`>\`, \`BETWEEN\`), sorting, \`LIKE 'prefix%'\`.

Other types: **Hash** (equality only), **GIN/GiST** (full-text search, JSONB, geodata in PostgreSQL), **Bitmap**.

Key concepts:

- **composite index** (a, b, c) — works for prefixes: (a), (a,b), (a,b,c) — the "leftmost prefix rule";
- **covering index** — contains all columns the query needs, so no table access is required (index-only scan);
- **selectivity** — an index is effective for columns with many unique values.

When indexes don't work: functions applied to a column (\`WHERE UPPER(name) = ...\`), \`LIKE '%suffix'\`, low selectivity, implicit type conversion. Analysis: \`EXPLAIN (ANALYZE)\`.`,
      },
      normalization: {
        question: 'What is database normalization?',
        answer: `**Normalization** is the process of organizing data to eliminate redundancy and anomalies (insertion, update, deletion).

**Normal forms:**

- **1NF** — all attributes are atomic (no lists in cells), there is a primary key;
- **2NF** — 1NF + no partial dependencies: non-key attributes depend on the **entire** composite key;
- **3NF** — 2NF + no transitive dependencies: non-key attributes do not depend on other non-key attributes;
- **BCNF** — a stricter 3NF: every determinant is a candidate key.

In practice, 3NF is usually sufficient.

**Denormalization** — deliberately adding redundancy to speed up reads (fewer JOINs): duplicating columns, aggregated values, materialized views. Used in analytics (OLAP, star schema) and high-load read-heavy systems. The trade-off: read speed vs the complexity of maintaining consistency.`,
      },
      'sql-nosql': {
        question: 'What is the difference between SQL and NoSQL databases?',
        answer: `**SQL (relational)** — PostgreSQL, MySQL, Oracle:

- strict schema (tables, columns, types);
- ACID transactions;
- powerful query language (JOIN, aggregations);
- vertical scaling (easier), horizontal scaling is harder.

**NoSQL** — different data models:

- **document** (MongoDB) — JSON documents, flexible schema;
- **key-value** (Redis) — caches, sessions, maximum speed;
- **columnar** (Cassandra) — large volumes, high write throughput;
- **graph** (Neo4j) — relationships and graph traversals.

NoSQL characteristics: flexible schema, horizontal scaling out of the box, eventual consistency (often BASE instead of ACID).

**CAP theorem**: a distributed system can guarantee only 2 of 3 — Consistency, Availability, Partition tolerance. During a network partition, the choice is CP (consistency) or AP (availability).

Choosing: complex relationships and transactions — SQL; scale, schema flexibility, specialized models — NoSQL. Both are often used together (polyglot persistence).`,
      },
    },
  },
  sql: {
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
      normalization: {
        question: 'What are normalization and denormalization? What normal forms exist?',
        answer: `**Normalization** — organizing tables to eliminate **redundancy** and insertion/update/deletion anomalies by splitting data into related tables. The main normal forms (each includes the previous):

- **1NF** — atomic values (no lists/repeating groups in a cell), a primary key exists;
- **2NF** — 1NF + every non-key attribute depends on the **whole** composite key, not part of it;
- **3NF** — 2NF + no **transitive** dependencies (a non-key attribute doesn't depend on another non-key one);
- **BCNF** — a stricter 3NF (every determinant is a candidate key).

In practice you usually go up to **3NF/BCNF**.

**Denormalization** — deliberately **introducing redundancy** (duplicating data, precomputed aggregates, merging tables) for **read speed**: fewer JOINs, faster queries. The cost — more complex writes and a risk of inconsistency (copies must be kept in sync).

The trade-off: normalization optimizes **integrity and writes** (OLTP), denormalization optimizes **reads** (analytics, reports, high-read load). The choice depends on the workload profile.`,
      },
    },
  },
  jdbc: {
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
  },
  testing: {
    title: 'Testing',
    description: 'JUnit, Mockito, testing strategies',
    questions: {
      'test-types': {
        question: 'What types of testing do you know?',
        answer: `**By level (the testing pyramid):**

- **Unit tests** — test an individual class/method in isolation; fast, cheap, and the most numerous (the base of the pyramid);
- **Integration tests** — verify the interaction of components (with databases, queues, external APIs); Testcontainers, @SpringBootTest;
- **E2E (end-to-end)** — test the entire system through the user interface/API; slow and fragile, the fewest in number.

**By purpose:**

- functional / non-functional (load, stress, security);
- regression — verifying that new changes didn't break existing functionality;
- smoke — a basic health check.

**By knowledge of internals**: black-box / white-box / gray-box.

**Approaches**: TDD (test-driven development — test before code: red-green-refactor), BDD (behavior-driven: Given-When-Then, Cucumber).

Metric: code coverage (JaCoCo), but 100% coverage does not guarantee quality — coverage of critical logic and edge cases matters more.`,
      },
      junit5: {
        question: 'Tell us about JUnit 5. Main annotations.',
        answer: `**JUnit 5** = JUnit Platform + JUnit Jupiter (API) + JUnit Vintage (JUnit 4 support).

Main annotations:

- \`@Test\` — a test method;
- \`@BeforeEach\` / \`@AfterEach\` — before/after each test;
- \`@BeforeAll\` / \`@AfterAll\` — once before/after all tests (static);
- \`@DisplayName("...")\` — a readable test name;
- \`@Disabled\` — disables a test;
- \`@Nested\` — nested test groups;
- \`@Tag\` — labels for selective execution;
- \`@Timeout\` — execution time limit.

**Parameterized tests:**

\`\`\`java
@ParameterizedTest
@ValueSource(ints = {1, 3, 5})
void isOdd(int number) {
    assertTrue(number % 2 != 0);
}

@ParameterizedTest
@CsvSource({"1,2,3", "10,20,30"})
void add(int a, int b, int sum) {
    assertEquals(sum, calculator.add(a, b));
}
\`\`\`

Assertions: \`assertEquals\`, \`assertTrue\`, \`assertThrows\`, \`assertAll\` (grouped), \`assertTimeout\`. For expressive assertions, **AssertJ** is often used: \`assertThat(list).hasSize(3).contains("a")\`.`,
      },
      mockito: {
        question: 'What is Mockito? What is the difference between mock, stub, and spy?',
        answer: `**Mockito** is a library for creating test doubles, allowing you to isolate the class under test from its dependencies.

\`\`\`java
@ExtendWith(MockitoExtension.class)
class OrderServiceTest {
    @Mock UserRepository userRepository;
    @InjectMocks OrderService orderService;

    @Test
    void shouldCreateOrder() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(user)); // stubbing

        orderService.createOrder(1L, items);

        verify(userRepository).findById(1L);          // verification
        verify(emailService, never()).sendSpam(any());
    }
}
\`\`\`

**Terminology:**

- **Stub** — a double with predefined answers ("when X is called — return Y"); we check state;
- **Mock** — a double on which **interactions are verified** (which methods, how many times, with which arguments); we check behavior;
- **Spy** — a wrapper around a **real object**: real methods are called by default, but individual ones can be stubbed (\`@Spy\`, \`doReturn(...).when(spy)...\`).

Useful: \`ArgumentCaptor\` — capturing arguments, \`any()\`, \`eq()\` — matchers, \`doThrow\` — exceptions.`,
      },
      'good-unit-test': {
        question: 'What makes a good unit test?',
        answer: `The **FIRST** principles:

- **Fast** — thousands of tests should run in seconds;
- **Independent** — execution order doesn't matter, no shared state;
- **Repeatable** — the same result in any environment (no dependence on time, network, randomness);
- **Self-validating** — determines success/failure itself, no manual inspection;
- **Timely** — written on time (ideally before/along with the code).

The **AAA (Arrange-Act-Assert)** structure:

\`\`\`java
@Test
void shouldApplyDiscountForVipUser() {
    // Arrange (given): setup
    User vip = new User(Status.VIP);
    // Act (when): a single action
    Price price = priceService.calculate(vip, 100);
    // Assert (then): verification
    assertThat(price.getValue()).isEqualTo(90);
}
\`\`\`

More rules: test **behavior, not implementation**; one logical scenario per test; descriptive names (\`should...When...\`); check edge cases and errors; don't mock everything; avoid logic (if statements, loops) in tests.`,
      },
      'testing-pyramid': {
        question: 'What is the testing pyramid? How do unit tests differ from integration tests?',
        answer: `The **testing pyramid** is a model for distributing tests across levels: the lower the level, the **more** tests there are and the **faster and cheaper** they are.

- **Unit tests** (the base, the majority) — test **one unit** (class/method) in **isolation**, with dependencies replaced by mocks. Fast (milliseconds), stable, and pinpoint the error's location.
- **Integration tests** (the middle) — test the **interaction** of components with real dependencies (database, broker, another service). Slower, but catch problems at the seams (mapping, SQL, configuration).
- **E2E / UI** (the top, the fewest) — cross-cutting scenarios through the whole system. The slowest and most fragile.

**The key unit vs integration difference:** unit tests logic in isolation with mocks (fast); integration tests real interaction of several parts (slower, closer to prod).

The point of the pyramid: keep many fast unit tests at the bottom and few expensive e2e tests at the top. **Anti-patterns:** the "ice-cream cone" — an inverted pyramid with too many slow e2e tests; the "hourglass" — many unit and e2e tests but few integration ones.`,
      },
      'junit4-vs-junit5': {
        question: 'How does JUnit 5 differ from JUnit 4?',
        answer: `**JUnit 5** is a redesigned version with a modular architecture of three parts: **Platform** (test launching), **Jupiter** (the new API and engine), **Vintage** (compatibility with old JUnit 3/4). The main differences from JUnit 4:

- **annotations renamed and clearer:** \`@Before\`/\`@After\` → \`@BeforeEach\`/\`@AfterEach\`, \`@BeforeClass\`/\`@AfterClass\` → \`@BeforeAll\`/\`@AfterAll\`, \`@Ignore\` → \`@Disabled\`;
- **exception checking** — via \`assertThrows(...)\` (instead of \`@Test(expected=...)\`), plus \`assertAll\` for grouping checks;
- **\`@ExtendWith\`** (the extension model) instead of \`@RunWith\` — you can plug in several extensions (e.g., \`@ExtendWith(MockitoExtension.class)\`, \`SpringExtension\`);
- **\`@DisplayName\`** — readable test names; **\`@Nested\`** — nested groups;
- powerful **parameterized tests** (\`@ParameterizedTest\` + \`@ValueSource\`, \`@CsvSource\`, \`@MethodSource\`);
- requires **Java 8+** and makes active use of lambdas.

The Vintage engine lets you run old JUnit 4 tests alongside the new ones during a gradual migration.`,
      },
      'spring-boot-testing': {
        question: 'How do you test a Spring Boot application (REST controller, DB layer)?',
        answer: `Spring Boot provides **slice tests** that bring up only the needed part of the context — faster than a full \`@SpringBootTest\`.

**REST controller — \`@WebMvcTest\`:** brings up only the web layer (controllers, filters), with service dependencies replaced by \`@MockBean\`. Requests are driven through **\`MockMvc\`** without a real server:

\`\`\`java
@WebMvcTest(UserController.class)
class UserControllerTest {
  @Autowired MockMvc mvc;
  @MockBean UserService service;
  @Test void returnsUser() throws Exception {
    when(service.find(1L)).thenReturn(new User("Ann"));
    mvc.perform(get("/users/1"))
       .andExpect(status().isOk())
       .andExpect(jsonPath("$.name").value("Ann"));
  }
}
\`\`\`

**DB layer — \`@DataJpaTest\`:** brings up only JPA/repositories, by default with an in-memory database and a transaction rollback after each test. Closer to prod — a real database in a container via **Testcontainers** (\`@Testcontainers\` + \`PostgreSQLContainer\`), to test against the same DBMS as in production.

**\`@SpringBootTest\`** brings up the whole context (optionally with \`webEnvironment=RANDOM_PORT\` and \`TestRestTemplate\`/\`WebTestClient\`) — for full integration tests, but slower than slice tests.`,
      },
      'flaky-tests': {
        question: 'What are flaky tests and how do you deal with them?',
        answer: `A **flaky test** is one that **sometimes passes and sometimes fails without changes to the code**. This is dangerous: it undermines trust in the tests (the team starts ignoring red builds), masks real bugs, and slows CI with reruns.

Common causes:

- **time dependence** — \`sleep\`, timeouts, the real clock (\`LocalDateTime.now()\`); fixed with a fixed \`Clock\`, waiting for a condition (Awaitility) instead of \`sleep\`;
- **order and shared state** — tests depend on each other or on shared mutable statics/the database; fixed with isolation and state cleanup;
- **concurrency/races** — non-determinism in multithreaded code;
- **external dependencies** — network, real APIs; fixed with mocks/stubs, Testcontainers;
- **non-deterministic** collection order (\`HashMap\`), locale, time zone.

How to deal with them:

1. don't ignore or "retry blindly" — **find the cause** (mark \`@Disabled\` with a ticket, but fix it);
2. make tests **deterministic and isolated** (no shared state, no real time/network);
3. replace \`sleep\` with explicit waiting for a condition;
4. run tests in random order to expose hidden dependencies.

Retry is a last resort that masks the problem, not a solution.`,
      },
      'contract-testing': {
        question: 'What is contract testing and why is it needed?',
        answer: `**Contract testing** verifies that the **API between a provider and a consumer is compatible**, without bringing up the whole system. It is especially important in microservices, where services are deployed independently: a change to one's API must not silently break another.

A **contract** is a formal description of the consumer's expectations of the provider's API (what requests it sends, what responses it expects). Tests are generated from it **on both sides**:

- on the **consumer** side the contract defines a stub — the consumer is tested against the expected API;
- on the **provider** side the same contract checks that the real service **actually** responds as promised.

Approaches:

- **Consumer-Driven Contracts (CDC)** — the contract is defined by the consumer (what it really needs), and the provider must satisfy it. Tools: **Pact**, **Spring Cloud Contract**.

Why: to catch API incompatibilities **at build time** rather than in integration/prod; the tests are fast (the whole system isn't needed); and you can evolve the API safely. It's a compromise between cheap unit tests that are "blind" to the counterparty and expensive end-to-end e2e tests.`,
      },
    },
  },
  logging: {
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
  },
  uml: {
    title: 'UML',
    description: 'Unified Modeling Language',
    questions: {
      'uml-diagrams': {
        question: 'What is UML? What kinds of diagrams do you know?',
        answer: `**UML (Unified Modeling Language)** is a unified graphical modeling language for describing, visualizing, and documenting software systems.

Diagrams fall into two groups:

**Structural (static):**

- **class diagram (Class Diagram)** — classes, attributes, methods, relationships — the most widely used;
- component diagram — modules and their dependencies;
- deployment diagram — physical placement on servers;
- object, package, and composite structure diagrams.

**Behavioral (dynamic):**

- **sequence diagram (Sequence)** — interaction of objects over time;
- **use case diagram (Use Case)** — actors and usage scenarios;
- activity diagram (Activity) — workflows, similar to flowcharts;
- state machine diagram (State Machine) — an object's lifecycle;
- communication diagram, timing diagram.

In practice, the most commonly used ones are: class, sequence, use case, and activity diagrams. Popular tools: PlantUML, Mermaid, draw.io, Enterprise Architect.`,
      },
      'class-diagram-relations': {
        question: 'What kinds of relationships exist on a class diagram?',
        answer: `Relationships on a class diagram (from weakest to strongest):

**Dependency** — dashed arrow \`- - ->\`: class A uses B (method parameter, local variable). A change in B may affect A.

**Association** — solid line \`——>\`: A holds a reference to B (a field). Multiplicity is specified: 1, 0..1, 1..*, *.

**Aggregation** — line with a **hollow diamond** \`◇——\`: "part-whole", the part can exist without the whole (department ◇— employees).

**Composition** — line with a **filled diamond** \`◆——\`: strict "part-whole", the part's lifecycle is managed by the whole (house ◆— rooms).

**Inheritance/Generalization** — solid line with a **hollow triangle** \`——▷\`: extends.

**Realization** — dashed line with a hollow triangle \`- - -▷\`: implements.

Class member notation: \`+\` public, \`-\` private, \`#\` protected, \`~\` package, underline — static, *italics* — abstract.`,
      },
      'sequence-diagram': {
        question: 'What does a sequence diagram show?',
        answer: `A **sequence diagram** shows the interaction of objects over time: which messages are passed, in what order, and between whom.

Elements:

- **participants (lifelines)** — objects/actors at the top, with vertical dashed lifelines going down;
- **activation bar** — a rectangle on the lifeline: the object is performing work;
- **messages**:
  - solid arrow with a filled arrowhead — synchronous call;
  - solid arrow with an open arrowhead — asynchronous message;
  - dashed arrow — return of a result;
- **combined fragments**: \`alt\` (if/else), \`opt\` (if), \`loop\` (loop), \`par\` (parallel), \`ref\` (reference to another diagram);
- time flows **from top to bottom**.

Example (PlantUML):

\`\`\`
@startuml
actor User
User -> Controller : POST /orders
Controller -> Service : createOrder(dto)
Service -> Repository : save(order)
Repository --> Service : order
Service --> Controller : orderId
Controller --> User : 201 Created
@enduml
\`\`\`

Use cases: documenting API scenarios, analyzing complex microservice interactions, onboarding new developers.`,
      },
    },
  },
  xml: {
    title: 'XML',
    description: 'XML and how to work with it in Java',
    questions: {
      'what-is-xml': {
        question: 'What is XML? What are the rules of a correct XML document?',
        answer: `**XML (eXtensible Markup Language)** is an extensible markup language for storing and transferring structured data. Unlike HTML, tags are not predefined.

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<order id="123">
    <customer>John Doe</customer>
    <items>
        <item price="100.50" quantity="2">Product A</item>
    </items>
</order>
\`\`\`

Rules of a **well-formed** document:

- exactly one root element;
- every opened tag is closed (\`<a></a>\` or \`<a/>\`);
- proper nesting (no overlapping);
- attribute values in quotes;
- case sensitivity (\`<Tag>\` ≠ \`<tag>\`);
- special characters escaped: \`&lt; &gt; &amp; &quot; &apos;\`.

A **valid** document is well-formed + conforms to a schema (XSD or DTD).

Additionally: namespaces (\`xmlns\`), CDATA sections (\`<![CDATA[ ... ]]>\`), comments \`<!-- -->\`.

XML vs JSON: XML — schemas, namespaces, attributes, XSLT; JSON — more compact and simpler, the standard for REST APIs.`,
      },
      'xml-parsers': {
        question: 'What ways of parsing XML exist in Java? (DOM, SAX, StAX)',
        answer: `**DOM (Document Object Model)** — loads the whole document into memory as a tree:

\`\`\`java
Document doc = DocumentBuilderFactory.newInstance()
    .newDocumentBuilder().parse(file);
NodeList items = doc.getElementsByTagName("item");
\`\`\`

- convenient navigation and modification; random access;
- high memory consumption — not suitable for large files.

**SAX (Simple API for XML)** — an event-driven push parser: reads a stream and invokes callbacks (\`startElement\`, \`characters\`, \`endElement\`):

- minimal memory, fast;
- read-only, forward-only; awkward logic (state kept in the handler).

**StAX (Streaming API for XML)** — a streaming pull parser: the application itself requests the next event (\`XMLStreamReader.next()\`):

- a balance: memory savings + control stays with the application; can also write XML.

**JAXB** — mapping XML ↔ Java objects via annotations (\`@XmlRootElement\`, \`@XmlElement\`): unmarshal/marshal without manual parsing. Removed from the JDK since Java 11 — added as a dependency (jakarta.xml.bind).

Choosing: small files + modification — DOM; huge files — SAX/StAX; object model — JAXB.

Security: disable external entities (XXE attacks): \`factory.setFeature(XMLConstants.FEATURE_SECURE_PROCESSING, true)\`.`,
      },
      'xsd-xpath': {
        question: 'What are XSD and XPath?',
        answer: `**XSD (XML Schema Definition)** is a language for describing the structure of an XML document: elements, attributes, types, multiplicity, constraints.

\`\`\`xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="order">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="customer" type="xs:string"/>
        <xs:element name="amount" type="xs:decimal"/>
      </xs:sequence>
      <xs:attribute name="id" type="xs:int" use="required"/>
    </xs:complexType>
  </xs:element>
</xs:schema>
\`\`\`

Advantages over DTD: data types, namespaces, and it is itself XML. Validation in Java: \`SchemaFactory\` + \`Validator\`.

**XPath** — a language for navigating the XML tree:

\`\`\`
/order/items/item          — absolute path
//item[@price > 100]       — all items with price > 100
/order/@id                 — attribute
//item[1]                  — first item
count(//item)              — function
\`\`\`

\`\`\`java
XPath xpath = XPathFactory.newInstance().newXPath();
String name = xpath.evaluate("/order/customer", doc);
\`\`\`

Related technologies: **XSLT** — transforming XML into other formats using XPath; XQuery — querying XML data.`,
      },
    },
  },
  patterns: {
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
  },
  html: {
    title: 'HTML Basics',
    description: 'HyperText Markup Language',
    questions: {
      'what-is-html': {
        question: 'What is HTML? What is the basic structure of a document?',
        answer: `**HTML (HyperText Markup Language)** is a hypertext markup language that describes the structure and content of a web page using elements (tags).

Basic document structure:

\`\`\`html
<!DOCTYPE html>                     <!-- HTML5 standards mode -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tab title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Page heading</h1>
    <p>A paragraph of text with a <a href="https://example.com">link</a>.</p>
    <script src="app.js"></script>
</body>
</html>
\`\`\`

- \`<!DOCTYPE html>\` — the document type declaration (without it — quirks mode);
- \`<head>\` — metadata: encoding, title, styles, viewport;
- \`<body>\` — the visible content.

HTML5 added: semantic tags, \`<video>\`/\`<audio>\`, \`<canvas>\`, new \`<input>\` types, local storage (Web Storage), geolocation.`,
      },
      'semantic-html': {
        question: 'What is semantic markup?',
        answer: `**Semantic markup** means using HTML tags according to their meaning rather than their appearance.

HTML5 semantic tags:

\`\`\`html
<header>  — page/section header
<nav>     — navigation
<main>    — main content (one per page)
<article> — self-contained content (article, post)
<section> — thematic section
<aside>   — sidebar, supplementary content
<footer>  — footer
<figure> / <figcaption> — illustration with a caption
<time>    — date/time
\`\`\`

Instead of "div soup":

\`\`\`html
<!-- bad -->
<div class="header"><div class="nav">...</div></div>

<!-- good -->
<header><nav>...</nav></header>
\`\`\`

**Why:**

- **accessibility (a11y)**: screen readers understand the page structure;
- **SEO**: search engines index semantic code better;
- code readability and maintainability;
- consistent behavior across browsers.

Also important: an h1-h6 heading hierarchy without gaps, \`alt\` on images, \`<label>\` for form fields, ARIA attributes when necessary.`,
      },
      'block-inline': {
        question: 'What is the difference between block and inline elements?',
        answer: `**Block elements** (\`display: block\`):

- take up the full available width of the parent;
- start on a new line;
- width, height, and all margin/padding apply;
- examples: \`<div>\`, \`<p>\`, \`<h1>-<h6>\`, \`<ul>\`, \`<section>\`, \`<form>\`.

**Inline elements** (\`display: inline\`):

- take up only the width of their content;
- flow within the text, do not break the line;
- width/height **do not apply**; vertical margins do not work;
- examples: \`<span>\`, \`<a>\`, \`<strong>\`, \`<em>\`, \`<code>\`.

**Inline-block** (\`display: inline-block\`) — a hybrid: flows within the text but supports width/height and full spacing; default examples: \`<img>\`, \`<button>\`, \`<input>\`.

Nesting rules: block elements may contain block and inline elements; inline elements — only inline ones (exception: in HTML5 \`<a>\` may wrap blocks).

The display value can be changed via CSS; modern layout is built on \`flex\` and \`grid\`, which change the behavior of the container's **children**.`,
      },
    },
  },
  css: {
    title: 'CSS Basics',
    description: 'Cascading Style Sheets',
    questions: {
      'css-selectors': {
        question: 'What CSS selectors do you know? What is specificity?',
        answer: `**Basic selectors:**

\`\`\`css
* { }                /* universal */
p { }                /* by tag */
.card { }            /* by class */
#header { }          /* by id */
[type="text"] { }    /* by attribute */

div p { }            /* descendant (any level) */
div > p { }          /* direct child */
h1 + p { }           /* next sibling */
h1 ~ p { }           /* all following siblings */

a:hover { }          /* pseudo-classes: :focus, :first-child, :nth-child(2n), :not() */
p::before { }        /* pseudo-elements: ::after, ::first-line, ::placeholder */
\`\`\`

**Specificity** — rule priority in case of conflict, counted as (a, b, c):

- **a** — number of id selectors;
- **b** — classes, attributes, pseudo-classes;
- **c** — tags and pseudo-elements.

\`#nav .item a\` = (1,1,1) beats \`.menu .item a\` = (0,2,1).

Inline styles are stronger than any selectors; \`!important\` overrides everything (an anti-pattern). With equal specificity, the last rule wins (the cascade). Recommendation: keep specificity low (the BEM methodology — classes only).`,
      },
      'box-model': {
        question: 'What is the box model?',
        answer: `The **box model** represents every element as a rectangle made up of four layers (from the inside out):

\`\`\`
┌─────────────── margin ────────────────┐
│  ┌──────────── border ─────────────┐  │
│  │  ┌───────── padding ─────────┐  │  │
│  │  │        content            │  │  │
│  │  └───────────────────────────┘  │  │
│  └─────────────────────────────────┘  │
└────────────────────────────────────────┘
\`\`\`

- **content** — the content itself (width × height);
- **padding** — inner spacing (the element's background extends over it);
- **border** — the border;
- **margin** — outer spacing (transparent).

**box-sizing:**

- \`content-box\` (default): \`width\` covers only the content; the final width = width + padding + border;
- \`border-box\`: \`width\` includes padding and border — more predictable.

Standard practice:

\`\`\`css
*, *::before, *::after { box-sizing: border-box; }
\`\`\`

A nuance — **margin collapse**: vertical margins of adjacent blocks merge into one (the larger one is taken). It happens only vertically and only in normal flow (not in flex/grid).`,
      },
      'flexbox-grid': {
        question: 'What is the difference between Flexbox and Grid?',
        answer: `**Flexbox** — one-dimensional layout (a row OR a column):

\`\`\`css
.container {
    display: flex;
    flex-direction: row;          /* row | column */
    justify-content: space-between; /* along the main axis */
    align-items: center;          /* along the cross axis */
    gap: 16px;
    flex-wrap: wrap;
}
.item { flex: 1 1 200px; }        /* grow shrink basis */
\`\`\`

Ideal for: navigation bars, cards in a row, centering, distributing space between elements.

**Grid** — two-dimensional layout (rows AND columns simultaneously):

\`\`\`css
.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-template-areas: "header header" "sidebar main";
    gap: 16px;
}
.header { grid-area: header; }
\`\`\`

Ideal for: whole-page layouts, complex grids, card galleries.

**Rule of thumb**: content dictates the layout (elements "line themselves up") — Flexbox; the layout dictates the content (a predefined grid) — Grid. They work great together: Grid for the page layout, Flexbox inside components.

Centering an element: \`display: flex; justify-content: center; align-items: center;\` or \`display: grid; place-items: center;\`.`,
      },
      position: {
        question: 'What values of the position property exist?',
        answer: `**static** (default) — the element is in normal flow; top/left/z-index have no effect.

**relative** — the element stays in the flow but is shifted relative to **its original position**; its place in the flow is preserved. Creates a context for absolute descendants.

**absolute** — the element is **removed from the flow**; it is positioned relative to the nearest ancestor with position ≠ static (otherwise — relative to \`<html>\`):

\`\`\`css
.parent { position: relative; }
.badge  { position: absolute; top: -8px; right: -8px; }
\`\`\`

**fixed** — removed from the flow; positioned relative to the **browser window**, does not move when scrolling (headers, modal windows).

**sticky** — a hybrid of relative and fixed: the element scrolls normally but "sticks" when a given threshold is reached:

\`\`\`css
.header { position: sticky; top: 0; }
\`\`\`

**z-index** — the stacking order; works only on positioned elements (≠ static). The concept of a **stacking context** matters: z-index is compared within a single context; a new context is created by opacity < 1, transform, filter, and others.`,
      },
    },
  },
  web: {
    title: 'Web Basics',
    description: 'HTTP, REST, security',
    questions: {
      http: {
        question: 'How does the HTTP protocol work? What methods and response codes do you know?',
        answer: `**HTTP (HyperText Transfer Protocol)** is an application-level request-response protocol on top of TCP (HTTP/3 — on top of QUIC/UDP). It is stateless.

**Methods:**

- **GET** — retrieve a resource (safe, idempotent, cacheable);
- **POST** — create a resource / process data (not idempotent);
- **PUT** — fully replace a resource (idempotent);
- **PATCH** — partial update;
- **DELETE** — deletion (idempotent);
- HEAD, OPTIONS, TRACE, CONNECT.

**Response codes:**

- **1xx** — informational (100 Continue);
- **2xx** — success: 200 OK, 201 Created, 204 No Content;
- **3xx** — redirection: 301 Moved Permanently, 302 Found, 304 Not Modified;
- **4xx** — client error: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 429 Too Many Requests;
- **5xx** — server error: 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout.

Versions: HTTP/1.1 (keep-alive), **HTTP/2** (multiplexing, binary, server push), **HTTP/3** (QUIC — faster connection setup, no head-of-line blocking).

**Idempotency** — a repeated request produces the same result: important for retry logic.`,
      },
      rest: {
        question: 'What is REST? What are the principles of a RESTful API?',
        answer: `**REST (Representational State Transfer)** is an architectural style for building distributed systems on top of HTTP.

**REST principles (constraints):**

- **client-server** — separation of concerns;
- **stateless** — the server does not store client state between requests;
- **cacheability** — responses are marked as cacheable/non-cacheable;
- **uniform interface** — resources are identified by URIs, manipulated through representations, HATEOAS;
- **layered system** — the client does not know whether it talks to the server or an intermediary.

**Design in practice:**

\`\`\`
GET    /api/users          — list of users
GET    /api/users/42       — a specific user
POST   /api/users          — creation (201 + Location)
PUT    /api/users/42       — full update
PATCH  /api/users/42       — partial update
DELETE /api/users/42       — deletion (204)
GET    /api/users/42/orders — nested resources
\`\`\`

Rules: plural nouns (not verbs!), correct response codes, versioning (\`/api/v1/\`), filtering/pagination via query parameters (\`?page=2&size=20&sort=name\`).

Alternatives: GraphQL (flexible queries), gRPC (binary, service-to-service communication), WebSocket (bidirectional real-time).`,
      },
      'browser-render': {
        question: 'What happens after you type a URL into the browser?',
        answer: `The full request journey:

1. **URL parsing** — scheme, host, port, path.
2. **DNS resolution** — hostname → IP address (browser cache → OS → DNS resolver → recursive lookup).
3. **TCP connection** — three-way handshake (SYN → SYN-ACK → ACK).
4. **TLS handshake** (for HTTPS) — negotiating the version and ciphers, certificate verification, key exchange.
5. **HTTP request** — \`GET / HTTP/1.1\` with headers (Host, Cookie, Accept...).
6. **Server-side processing** — load balancer → web server → application → DB → response.
7. **Receiving the response** — status, headers, body (HTML).
8. **Page rendering:**
   - parsing HTML → **DOM tree**;
   - parsing CSS → **CSSOM**;
   - DOM + CSSOM → **Render Tree**;
   - **Layout (reflow)** — computing sizes and positions;
   - **Paint** — drawing pixels;
   - **Composite** — assembling layers on the GPU.
9. Resources load in parallel (CSS, JS, images); JS can block parsing (hence \`defer\`/\`async\`).

Optimizations: caching (Cache-Control, ETag), CDN, HTTP/2, compression (gzip/brotli), lazy loading.`,
      },
      'web-security': {
        question: 'What are the main web application vulnerabilities you know?',
        answer: `Key vulnerabilities (per OWASP Top 10):

**SQL Injection** — injecting SQL through user input. Protection: PreparedStatement/parameterized queries, ORM, validation.

**XSS (Cross-Site Scripting)** — injecting JavaScript into a page (stored/reflected/DOM-based). Protection: output escaping, Content-Security-Policy, HttpOnly cookies.

**CSRF (Cross-Site Request Forgery)** — performing actions on behalf of a logged-in user from another site. Protection: CSRF tokens, SameSite cookies, Origin checks.

**Broken Authentication/Authorization** — weak passwords, brute force, IDOR (accessing others' resources by ID). Protection: MFA, rate limiting, permission checks on every resource.

**Others**: insecure deserialization, XXE, SSRF, using components with known vulnerabilities (Log4Shell), sensitive data exposure.

**Basic hygiene:**

- HTTPS everywhere (HSTS);
- security headers: CSP, X-Content-Type-Options, X-Frame-Options;
- password hashing (bcrypt/argon2), never store them in plain text;
- the principle of least privilege;
- validating all input data on the server;
- regularly updating dependencies (dependabot, OWASP dependency-check).

**CORS** — a browser mechanism that allows cross-origin requests via headers (\`Access-Control-Allow-Origin\`); it is not server protection but a relaxation of the same-origin policy.`,
      },
    },
  },
  kafka: {
    title: 'Apache Kafka',
    description: 'Distributed streaming platform',
    questions: {
      'what-is-kafka': {
        question: 'What is Apache Kafka? Core concepts.',
        answer: `**Apache Kafka** is a distributed event streaming platform: a high-throughput, fault-tolerant, scalable message log.

**Core concepts:**

- **Topic** — a named stream of messages (a category);
- **Partition** — a part of a topic; an ordered, immutable log with offsets. The unit of parallelism;
- **Offset** — the sequential number of a message within a partition;
- **Producer** — sends messages to topics;
- **Consumer** — reads messages; tracks its own offset;
- **Consumer Group** — a group of consumers that share partitions among themselves (each partition goes to only one consumer in the group);
- **Broker** — a Kafka server; a cluster consists of brokers;
- **Replication** — each partition is replicated (leader + followers, ISR — in-sync replicas);
- **ZooKeeper / KRaft** — cluster coordination (KRaft replaces ZooKeeper starting with Kafka 3.x).

**Key properties**: messages are stored on disk for a configured time (retention) regardless of whether they have been read; ordering is guaranteed **only within a partition**; messages with the same key land in the same partition.

Use cases: event-driven microservice integration, data streaming, event sourcing, log and metrics collection, CDC.`,
      },
      'kafka-guarantees': {
        question: 'What delivery guarantees does Kafka support?',
        answer: `**Delivery semantics:**

- **At-most-once** — no more than once: loss is possible, no duplicates (commit the offset before processing);
- **At-least-once** — at least once: no loss, duplicates are possible (commit the offset after processing) — the most common choice;
- **Exactly-once** — exactly once: idempotent producer + Kafka transactions.

**Producer settings:**

- \`acks=0\` — don't wait for acknowledgment (fast, loss is possible);
- \`acks=1\` — acknowledgment from the partition leader;
- \`acks=all\` — acknowledgment from all ISR replicas (reliable) + \`min.insync.replicas=2\`;
- \`enable.idempotence=true\` — deduplication on retries (by sequence number);
- transactions: \`transactional.id\`, atomic writes to multiple topics.

**On the consumer side:**

- manual offset commit (\`enable.auto.commit=false\`) after successful processing → at-least-once;
- handlers must be **idempotent** (duplicates are inevitable in distributed systems);
- \`isolation.level=read_committed\` — read only committed transactional messages.

Full end-to-end exactly-once is achievable within the Kafka ecosystem (Kafka Streams); with external systems — via idempotency or the transactional outbox pattern.`,
      },
      'consumer-groups': {
        question: 'How do Consumer Groups and rebalancing work?',
        answer: `**Consumer Group** — a mechanism for horizontally scaling reads: consumers with the same \`group.id\` share a topic's partitions among themselves.

Assignment rules:

- each partition is assigned to **only one** consumer within the group;
- one consumer can read multiple partitions;
- more consumers than partitions → the extra ones stay idle;
- different groups read the topic **independently** (each has its own offsets, stored in the \`__consumer_offsets\` topic).

**Rebalancing** — redistribution of partitions when the group membership changes (a consumer joins/crashes/stops sending heartbeats, or the number of partitions changes).

Rebalancing problems:

- **stop-the-world** (eager) — all consumers stop reading;
- duplicate processing when offsets are uncommitted.

Improvements:

- **Cooperative (incremental) rebalancing** — only the affected partitions are reassigned;
- **static membership** (\`group.instance.id\`) — consumer restart without rebalancing;
- settings: \`session.timeout.ms\`, \`heartbeat.interval.ms\`, \`max.poll.interval.ms\` (long batch processing risks being kicked out of the group).

Choosing the message key matters: ordering is guaranteed within a partition, and the key determines the partition (\`hash(key) % partitions\`).`,
      },
      'kafka-vs-rabbitmq': {
        question: 'What is the difference between Kafka and traditional message brokers (RabbitMQ)?',
        answer: `**Storage model:**

- **Kafka** — a distributed **log**: messages are stored for a configured time (retention) and are not deleted after being read; the consumer manages its own position (offset) and can **re-read** history;
- **RabbitMQ** — a classic **queue**: a message is deleted after acknowledgment; smart routing (exchanges: direct, topic, fanout, headers).

**Delivery model:**

- Kafka — **pull**: the consumer requests data in batches itself;
- RabbitMQ — **push**: the broker pushes messages to subscribers.

**Performance and scale:**

- Kafka — millions of messages/sec, sequential disk writes, zero-copy, partitioning out of the box;
- RabbitMQ — tens to hundreds of thousands of messages/sec, lower latency under light load.

**When to use Kafka:**

- event streaming, event sourcing, reprocessing history;
- high throughput, integrating many consumers;
- analytics pipelines (Kafka Streams, Connect).

**When to use RabbitMQ:**

- classic queueing tasks (task queues), RPC;
- complex routing, priorities, TTL, dead letter queues;
- strict requirements for delivery order to a specific consumer with acknowledgments.

In short: Kafka is "an event journal that many read", RabbitMQ is "a smart postman for tasks".`,
      },
      'topic-partition-offset': {
        question: 'What are a topic, partition, and offset? Why is Kafka called a commit log?',
        answer: `**Topic** — a named channel (category) of messages. Producers write to a topic, consumers read from it.

**Partition** — a topic is physically split into partitions; this is the unit of parallelism and scaling. Within a partition, messages are strictly ordered and only appended to the end (append-only). Ordering is guaranteed **only within a single partition**, not across the whole topic.

**Offset** — the sequential number of a message within a partition (monotonically increasing). A consumer stores its offset and thus knows what has been read; it can re-read data by moving the offset back.

**"Commit log":** Kafka is a distributed, replicated, ordered, append-only log. Messages are not deleted after being read (unlike a queue) but live according to a retention policy, and different consumers read the same log independently, each with its own offset. The message key determines the partition (\`hash(key) % partitions\`), which gives per-key ordering.`,
      },
      'kafka-brokers-kraft': {
        question: 'What are a broker, controller, and ZooKeeper/KRaft in Kafka?',
        answer: `**Broker** — a Kafka server that stores partitions and serves producer and consumer requests. A cluster consists of several brokers; partitions and their replicas are distributed across them.

**Controller** — a special broker that coordinates the cluster: it assigns partition leaders, tracks broker state, and manages replica rebalancing on failures.

**ZooKeeper → KRaft:** historically Kafka stored cluster metadata (the list of brokers, topics, leaders) in an external **ZooKeeper**. Since Kafka 2.8 and as the standard in 3.x+, ZooKeeper is replaced by **KRaft (Kafka Raft)** — metadata is stored in Kafka itself via a built-in Raft consensus. KRaft benefits: fewer moving parts (no separate ZooKeeper cluster), faster controller recovery and failover, better scaling with the number of partitions.`,
      },
      'kafka-replication': {
        question: 'How does Kafka provide fault tolerance (replication, ISR)? What happens if a partition leader fails?',
        answer: `Each partition has a **replication factor** — the number of copies on different brokers. One replica is the **leader** (all reads and writes go through it), the rest are **followers** that copy data from the leader.

**ISR (In-Sync Replicas)** — the set of replicas that have "caught up" with the leader (not lagging beyond the allowed limit). Only a replica from the ISR can become the new leader.

**When the leader fails**, the controller elects a new leader from the ISR, and clients transparently switch to it — no data is lost if it was replicated to the ISR. The \`min.insync.replicas\` setting together with \`acks=all\` guarantees that a write is acknowledged only after being stored on the required number of replicas: if fewer live ISR members exist than \`min.insync.replicas\`, the write is rejected (sacrificing availability for durability). If \`unclean.leader.election\` is allowed, a lagging replica can become the leader — which risks data loss.`,
      },
      'producer-acks': {
        question: 'What does a producer do and how does the acks setting (0, 1, all) work?',
        answer: `A **producer** sends messages to a topic, choosing the partition itself (by key via hashing, or round-robin if there's no key), batches messages for performance, and can compress them.

**acks** determines when a write is considered successful — a trade-off between speed and durability:

- **acks=0** — the producer doesn't wait for acknowledgment at all. Maximum speed, but the message can be lost (fire-and-forget).
- **acks=1** — waits for acknowledgment only from the partition **leader**. A balance of speed and durability, but if the leader fails before replicating to followers, the message is lost.
- **acks=all (-1)** — waits for acknowledgment from the leader **and all ISR** (respecting \`min.insync.replicas\`). Maximum durability, higher latency.

For "don't lose" guarantees, use \`acks=all\` + \`min.insync.replicas >= 2\` + an enabled idempotent producer.`,
      },
      'idempotent-producer': {
        question: 'What is an idempotent producer and why is it needed?',
        answer: `On a resend (a retry after a timeout, when the acknowledgment was lost but the message actually was written), an ordinary producer can create a **duplicate** — "at-least-once" semantics.

An **idempotent producer** (\`enable.idempotence=true\`, on by default in recent versions) eliminates duplicates on retries. The mechanism: each producer is assigned a **Producer ID (PID)**, and each message a monotonic **sequence number** per partition. The broker tracks the last written sequence and discards retries with an already-seen number.

This gives **exactly-once at the level of writing to a single partition** within the producer's session, without losing performance. For exactly-once **across multiple partitions/topics and together with a consumer**, Kafka transactions are needed (see the EOS question). Idempotence automatically implies \`acks=all\`.`,
      },
      'offset-reset-lag': {
        question: 'What does auto.offset.reset (earliest/latest/none) do? What is consumer lag?',
        answer: `**\`auto.offset.reset\`** determines where to start reading when the group has **no stored offset** (a new group) or the stored offset no longer exists (aged out by retention):

- **earliest** — from the very beginning of the partition (read all available history);
- **latest** (default) — only new messages arriving after connecting;
- **none** — throw an exception if there is no valid offset (forcing the situation to be handled explicitly).

Important: the setting only applies when there is **no** valid offset — if the group has already committed an offset, reading continues from it.

**Consumer lag** — the difference between the last offset in the partition (log-end offset) and the offset the consumer has read up to. A growing lag means consumers aren't keeping up with producers. It is fixed by increasing the number of consumers in the group (up to the number of partitions), optimizing processing, or increasing the number of partitions. Lag is a key Kafka monitoring metric.`,
      },
      'kafka-retention-compaction': {
        question: 'How does the retention policy work and what is a compacted topic?',
        answer: `Kafka stores messages **regardless of whether they have been read** — how many is set by **retention**:

- **by time** (\`retention.ms\`, e.g., 7 days) — messages older than the threshold are deleted;
- **by size** (\`retention.bytes\`) — old segments are deleted when the partition exceeds the size.

This is the **delete** cleanup policy (\`cleanup.policy=delete\`): whole old log segments are removed.

A **compacted topic** (\`cleanup.policy=compact\`) works differently: Kafka keeps **at least the latest value for each key**, removing older records with the same key. The log becomes something like a "snapshot of the current state." It is used for changelogs, storing state (e.g., the latest config/profile per key), and restoring state in Kafka Streams. Deletion by key is expressed with a **tombstone** — a message with that key and a \`null\` value.`,
      },
      'kafka-exactly-once': {
        question: 'How do Kafka transactions and exactly-once semantics (EOS) work?',
        answer: `An **idempotent producer** removes duplicates when writing to a single partition, but it does not cover atomic writes to **multiple** partitions/topics or the "read → process → write" pattern.

**Kafka transactions** solve this: a producer with a \`transactional.id\` opens a transaction, writes to several partitions/topics, and **atomically commits** (or aborts) it. Consumers with \`isolation.level=read_committed\` see only committed messages.

**Exactly-Once Semantics (EOS)** in the "consume-process-produce" chain is achieved by **including the commit of the input topic's offsets in the same transaction** as the result write. Either everything (processing + offset advance + write) is committed atomically, or nothing — no duplicates and no losses.

The cost: extra latency and transaction coordination, so EOS is enabled where duplicates are unacceptable (finance, billing). Kafka Streams supports EOS out of the box (\`processing.guarantee=exactly_once_v2\`).`,
      },
      'kafka-throughput': {
        question: 'How do you increase Kafka throughput? How does the number of partitions affect performance?',
        answer: `**Throughput** is increased from several sides:

- **partitions** — the main lever of parallelism: more partitions → more consumers in a group work in parallel, higher total throughput;
- **producer** — batching (\`batch.size\`, \`linger.ms\`), compression (\`compression.type\`: lz4/zstd), enough \`buffer.memory\`;
- **consumer** — processing in batches, a sufficient \`max.poll.records\`, parallelism across partitions;
- **broker/disks** — Kafka relies on sequential disk writes and zero-copy; fast disks and sufficient network help.

**The number of partitions is a double-edged sword.** More partitions = more parallelism, but:

- overhead grows (open files, memory, load on the controller);
- rebalancing and failover on failures take longer and cost more;
- ordering is guaranteed only within a partition — more partitions dilute global ordering.

The number of partitions is easy to increase but **cannot be decreased**, and increasing it changes key distribution, so it is planned in advance for the target load.`,
      },
      'dead-letter-topic': {
        question: 'What is a dead-letter topic and why is it needed?',
        answer: `A **dead-letter topic (DLT)** is a separate topic where messages that **could not be processed** after retries are exhausted are sent (deserialization error, invalid data, a business exception).

Why: a single "poison message" should not block the whole partition. Without a DLT, a consumer either gets stuck endlessly retrying one message or loses it. A DLT allows you to:

- **not block** processing of the other messages — the problematic one is set aside;
- **preserve** failed messages for analysis, manual review, and reprocessing later;
- separate transient errors (fixed by retry) from permanent ones (sent to the DLT).

In Spring Kafka, a DLT is implemented via \`DeadLetterPublishingRecoverer\` and \`DefaultErrorHandler\` with a configured retry count and backoff; the DLT name usually gets a \`.DLT\` suffix. Retry topic(s) with a delay are often placed before the DLT.`,
      },
      'kafka-streams-connect': {
        question: 'What are Kafka Streams and Kafka Connect? What is the difference?',
        answer: `These are two separate libraries/frameworks in the Kafka ecosystem for different tasks.

**Kafka Streams** — a client library for **stream processing**: it reads from topics, transforms (map/filter/join/aggregations, windowed operations), and writes the result back to Kafka. It runs as an ordinary Java application (not a separate cluster), stores state locally (RocksDB) with a backup to compacted topics, and supports EOS. You choose it over "raw" consumers when you need **stateful processing**: aggregations, stream joins, windows — which would otherwise have to be written by hand.

**Kafka Connect** — a framework for **integrating Kafka with external systems** without writing code, via ready-made connectors:

- **source connectors** pull data from external systems into Kafka (e.g., CDC from a database via Debezium);
- **sink connectors** export from Kafka to external systems (databases, Elasticsearch, S3).

In short: **Streams processes and transforms** data inside Kafka; **Connect moves** data between Kafka and the outside world.`,
      },
    },
  },
  spring: {
    title: 'Spring Framework',
    description: 'IoC, DI, Spring Boot, AOP',
    questions: {
      'what-is-spring': {
        question: 'What is the Spring Framework? What modules does it consist of?',
        answer: `**Spring Framework** is the most popular framework for developing Java applications. Its foundation is the Inversion of Control (IoC) container, which manages the lifecycle of objects (beans) and their dependencies.

**Main modules:**

- **Core Container** — IoC container, DI, ApplicationContext;
- **Spring AOP** — aspect-oriented programming;
- **Spring MVC / WebFlux** — web applications and REST APIs (servlet and reactive stacks);
- **Spring Data** — simplified database access (JPA, MongoDB, Redis...);
- **Spring Security** — authentication and authorization;
- **Spring Transaction** — declarative transaction management;
- **Spring Test** — testing support.

**Ecosystem:**

- **Spring Boot** — quick start: auto-configuration, embedded server, starters;
- **Spring Cloud** — microservice patterns (Config, Gateway, Circuit Breaker);
- **Spring Batch**, **Spring Integration**, and others.

Key advantages: loose coupling through DI, declarative style (annotations), testability, a huge ecosystem and community.`,
      },
      'ioc-di': {
        question: 'What are IoC and DI?',
        answer: `**IoC (Inversion of Control)** — a principle where control over object creation and lifecycle is handed to the framework (container) rather than being done manually in code.

**DI (Dependency Injection)** — a way to implement IoC: dependencies are provided to an object from the outside by the container, instead of the object creating them itself.

\`\`\`java
// without DI — tight coupling
class OrderService {
    private final PaymentService payment = new PaypalPayment(); // creates it itself
}

// with DI — the dependency comes from outside
@Service
class OrderService {
    private final PaymentService payment;

    OrderService(PaymentService payment) {  // injected by the container
        this.payment = payment;
    }
}
\`\`\`

**Injection styles:**

- **constructor injection** — recommended: dependencies are mandatory, fields can be final, easy to test;
- **setter injection** — for optional dependencies;
- **field injection** (\`@Autowired\` on a field) — not recommended: hides dependencies, hinders testing.

Benefits: loose coupling, easy substitution of implementations (mocks in tests), reuse, readability. If a bean has multiple implementations of an interface — disambiguate with \`@Qualifier\` or \`@Primary\`.`,
      },
      'bean-lifecycle': {
        question: 'Describe the Spring bean lifecycle.',
        answer: `Bean lifecycle stages in the ApplicationContext:

1. **Reading bean definitions** (BeanDefinition) from annotations/configuration;
2. **BeanFactoryPostProcessor** — modifying definitions before creation (e.g., resolving \${properties});
3. **Instantiation** — constructor invocation;
4. **Dependency injection** (populate properties);
5. **Aware interfaces** — \`BeanNameAware\`, \`ApplicationContextAware\`;
6. **BeanPostProcessor.postProcessBeforeInitialization()**;
7. **Initialization**: \`@PostConstruct\` → \`InitializingBean.afterPropertiesSet()\` → \`initMethod\`;
8. **BeanPostProcessor.postProcessAfterInitialization()** — this is where AOP proxies are created (@Transactional, etc.);
9. The bean is **ready for use**;
10. **Destruction** (when the context closes): \`@PreDestroy\` → \`DisposableBean.destroy()\` → \`destroyMethod\`.

\`\`\`java
@Component
class CacheService {
    @PostConstruct
    void warmUp() { /* after dependency injection */ }

    @PreDestroy
    void cleanup() { /* before destruction */ }
}
\`\`\`

Important: \`@PreDestroy\` is called only for singleton beans; the container does not destroy prototype beans.`,
      },
      'bean-scopes': {
        question: 'What bean scopes exist in Spring?',
        answer: `**Main scopes:**

- **singleton** (default) — one instance per ApplicationContext. Not to be confused with the Singleton pattern: one per context, not per JVM;
- **prototype** — a new instance every time the bean is requested from the container.

**Web scopes:**

- **request** — one instance per HTTP request;
- **session** — one per HTTP session;
- **application** — one per ServletContext;
- **websocket** — one per WebSocket session.

\`\`\`java
@Component
@Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)
class ReportBuilder { ... }

@Component
@Scope(value = WebApplicationContext.SCOPE_REQUEST,
       proxyMode = ScopedProxyMode.TARGET_CLASS)
class RequestContext { ... }
\`\`\`

**Pitfalls:**

- singleton beans must be **thread-safe** (no mutable state);
- injecting a prototype into a singleton: the prototype is created **once**, when the singleton is created. Solutions: \`ObjectProvider<T>\`, \`@Lookup\`, scoped proxy;
- a web-scoped bean inside a singleton requires \`proxyMode\`.`,
      },
      'spring-boot': {
        question: 'What is Spring Boot? How does auto-configuration work?',
        answer: `**Spring Boot** — a layer on top of Spring for quickly building production-ready applications with minimal configuration.

**Key features:**

- **auto-configuration** — automatic setup based on the classpath;
- **starters** — ready-made dependency bundles (\`spring-boot-starter-web\`, \`-data-jpa\`, \`-security\`);
- **embedded server** — Tomcat/Jetty/Netty inside the jar (\`java -jar app.jar\`);
- **Actuator** — metrics, health checks, monitoring;
- external configuration: application.yml, environment variables, profiles (\`@Profile\`).

**How auto-configuration works:**

- \`@SpringBootApplication\` = \`@Configuration\` + \`@EnableAutoConfiguration\` + \`@ComponentScan\`;
- Spring Boot reads the list of auto-configurations from \`META-INF/spring/...AutoConfiguration.imports\`;
- each one is applied based on **conditions**:

\`\`\`java
@AutoConfiguration
@ConditionalOnClass(DataSource.class)          // if the class is on the classpath
@ConditionalOnMissingBean(DataSource.class)    // if the bean isn't declared manually
public class DataSourceAutoConfiguration { ... }
\`\`\`

So adding \`spring-boot-starter-data-jpa\` + a driver gets you a configured DataSource, EntityManager, and TransactionManager. Your own bean always **overrides** the auto-configuration. Diagnostics: \`--debug\` prints a report of the applied conditions.`,
      },
      transactional: {
        question: 'How does @Transactional work?',
        answer: `**@Transactional** — declarative transaction management via an **AOP proxy**: Spring wraps the bean in a proxy that opens a transaction before the method and commits/rolls back after it.

\`\`\`java
@Service
public class TransferService {
    @Transactional
    public void transfer(long from, long to, BigDecimal amount) {
        accountRepo.debit(from, amount);
        accountRepo.credit(to, amount);  // exception → both operations roll back
    }
}
\`\`\`

**Key parameters:**

- \`propagation\` — behavior when a transaction already exists: REQUIRED (default — join or create), REQUIRES_NEW (suspend the current one, create a new one), NESTED, SUPPORTS, MANDATORY, NEVER;
- \`isolation\` — isolation level;
- \`rollbackFor\` — by default rollback happens only on **unchecked** exceptions; for checked ones you need \`rollbackFor = Exception.class\`;
- \`readOnly = true\` — optimization for reads;
- \`timeout\` — maximum duration.

**Common mistakes (caused by the proxy):**

- **self-invocation**: calling \`this.method()\` inside the bean bypasses the proxy — no transaction is created;
- \`@Transactional\` on **private/final** methods doesn't work;
- swallowing an exception inside the method cancels the rollback;
- long operations (HTTP calls) inside a transaction hold a connection from the pool.`,
      },
      'spring-aop': {
        question: 'What is AOP? How does Spring create proxies?',
        answer: `**AOP (Aspect-Oriented Programming)** — extracting cross-cutting concerns — logging, transactions, security, caching — out of business logic into separate modules (aspects).

**Terminology:**

- **Aspect** — a module of cross-cutting functionality;
- **Join point** — an execution point (in Spring — a method invocation);
- **Pointcut** — an expression selecting join points;
- **Advice** — the action: \`@Before\`, \`@After\`, \`@AfterReturning\`, \`@AfterThrowing\`, \`@Around\`;
- **Weaving** — linking aspects to code (in Spring — at runtime via proxies).

\`\`\`java
@Aspect
@Component
public class LoggingAspect {
    @Around("execution(* com.app.service.*.*(..))")
    public Object logTime(ProceedingJoinPoint pjp) throws Throwable {
        long start = System.nanoTime();
        try {
            return pjp.proceed();
        } finally {
            log.info("{} took {} ms", pjp.getSignature(),
                     (System.nanoTime() - start) / 1_000_000);
        }
    }
}
\`\`\`

**Proxy mechanisms:**

- **JDK Dynamic Proxy** — if the bean implements an interface (the proxy implements the same interface);
- **CGLIB** — subclassing the class (default in Spring Boot); doesn't work with final classes/methods.

\`@Transactional\`, \`@Cacheable\`, \`@Async\`, \`@PreAuthorize\` are all built on AOP proxies — hence the shared self-invocation limitation.`,
      },
      'applicationcontext-vs-beanfactory': {
        question: 'How does ApplicationContext differ from BeanFactory?',
        answer: `Both are IoC containers that manage beans, but \`ApplicationContext\` is an extension of \`BeanFactory\` with enterprise features.

**BeanFactory** is the basic container; it creates beans **lazily** (on demand, at the first \`getBean\`). Minimal memory footprint.

**ApplicationContext** adds on top of it:

- **eager initialization** of singleton beans at startup (configuration errors surface immediately, not on first access);
- **event** publication (\`ApplicationEvent\`, \`@EventListener\`);
- internationalization (\`MessageSource\`);
- convenient work with resources and \`Environment\` (profiles, properties);
- automatic detection of \`BeanPostProcessor\` and \`BeanFactoryPostProcessor\`.

In practice you almost always use \`ApplicationContext\`. \`BeanFactory\` directly — rarely, in memory-constrained environments or for lazy loading.`,
      },
      'autowired-resolution': {
        question: 'How does @Autowired resolve dependencies? What if there are several candidates?',
        answer: `\`@Autowired\` injects a dependency **by type**. The algorithm:

1. the container looks for beans of a matching type;
2. if exactly one is found — it is injected;
3. if several — it tries to pick by field/parameter name or by \`@Primary\`;
4. if it can't choose — \`NoUniqueBeanDefinitionException\`; if there are no candidates — \`NoSuchBeanDefinitionException\` (can be relaxed with \`required = false\`).

Resolving ambiguity:

- **\`@Qualifier("beanName")\`** — explicitly name the bean;
- **\`@Primary\`** — mark a bean as the default preferred one;
- injecting \`List<T>\` or \`Map<String, T>\` — get all beans of the type at once.

Difference from related annotations: \`@Resource\` (JSR-250) injects **by name**, \`@Inject\` (JSR-330) — by type, like \`@Autowired\`, but without the \`required\` attribute.`,
      },
      'injection-types': {
        question: 'What is the difference between constructor, setter, and field injection? Which is preferred?',
        answer: `Three ways to inject dependencies:

- **Constructor injection** — dependencies come through the constructor. The **preferred** way: fields can be \`final\` (immutability), the object is always created in a valid state, dependencies are explicit, it's easy to test (pass mocks to the constructor), and circular dependencies are detected immediately at startup.
- **Setter injection** — through setters. Suitable for **optional** or reconfigurable dependencies.
- **Field injection** (\`@Autowired\` directly on a field) — compact, but **not recommended**: the field can't be \`final\`, dependencies are hidden, testing without the container is hard (needs reflection/Spring), and it's easy to end up with a bloated class holding a dozen dependencies.

Since Spring 4.3, with a single constructor you can omit \`@Autowired\`. Constructor injection is the Spring team's own recommendation.`,
      },
      stereotypes: {
        question: 'What is the difference between @Component, @Service, @Repository, and @Controller?',
        answer: `All four are stereotype annotations that mark a class as a bean picked up during component scanning. Technically \`@Service\`, \`@Repository\`, and \`@Controller\` are specializations of \`@Component\`. The differences are semantic and (for two of them) functional:

- **\`@Component\`** — a generic bean, when no more specific stereotype fits.
- **\`@Service\`** — the business-logic layer. A purely semantic marker.
- **\`@Repository\`** — the data-access layer. Adds **exception translation**: persistence-specific exceptions (JPA/JDBC) are translated into the unified \`DataAccessException\` hierarchy.
- **\`@Controller\`** — the Spring MVC web layer; handles HTTP requests. \`@RestController\` = \`@Controller\` + \`@ResponseBody\`.

The separation improves readability, and \`@Repository\` and \`@Controller\` provide extra behavior.`,
      },
      'bean-post-processor': {
        question: 'How does BeanPostProcessor differ from BeanFactoryPostProcessor?',
        answer: `Both are container extension points, but they work at different stages.

**\`BeanFactoryPostProcessor\`** works with **bean definitions** after they are loaded but **before** the beans themselves are created. It can modify configuration metadata. A classic example is \`PropertySourcesPlaceholderConfigurer\`, which substitutes \`\${...}\` values.

**\`BeanPostProcessor\`** works with **already created** bean instances — its \`postProcessBeforeInitialization\` and \`postProcessAfterInitialization\` methods are called before and after init methods. It is through \`BeanPostProcessor\` that Spring wraps beans in proxies (AOP, \`@Transactional\`) and processes annotations like \`@Autowired\` and \`@PostConstruct\`.

Order: definitions loaded → \`BeanFactoryPostProcessor\` edits the definitions → beans are created → \`BeanPostProcessor\` (before) → init methods (\`@PostConstruct\`, \`afterPropertiesSet\`) → \`BeanPostProcessor\` (after).`,
      },
      'circular-dependency': {
        question: 'How does Spring handle circular dependencies, and what is self-invocation?',
        answer: `A **circular dependency** is when bean A depends on B and B depends on A.

- with **field/setter injection**, Spring can resolve them via an intermediate "early reference" in a third-level cache;
- with **constructor injection**, it cannot — a bean can't be created without a ready dependency, and Spring throws \`BeanCurrentlyInCreationException\`.

Cycles are a sign of a design problem; they are fixed by extracting shared logic into a third bean, \`@Lazy\`, or events. Since Spring Boot 2.6+, cycles are prohibited by default.

**Self-invocation** — calling one bean method from another method **of the same class** (\`this.method()\`). The problem is that the proxy wrapper (for \`@Transactional\`, \`@Cacheable\`, \`@Async\`) intercepts only **external** calls made through the proxy reference. An internal \`this\` call bypasses the proxy, so the annotation **doesn't take effect**. Workarounds: move the method into a separate bean, self-injection, or \`AopContext.currentProxy()\`.`,
      },
      'configuration-properties': {
        question: 'How does @ConfigurationProperties differ from @Value? What are Spring Profiles?',
        answer: `**\`@Value("\${app.timeout}")\`** injects a **single** property into a field. Simple, but: no type-safe grouping, weak support for validation and relaxed binding, inconvenient for large sets of settings.

**\`@ConfigurationProperties(prefix = "app")\`** binds a **whole group** of properties to a typed POJO. Advantages: grouping by prefix, **relaxed binding** (\`app.max-size\` ↔ \`APP_MAXSIZE\`), \`@Validated\` support (JSR-303), nested objects and lists. Recommended for application configuration; \`@Value\` — for single values and SpEL expressions.

**Spring Profiles** — a mechanism for sets of configuration per environment (\`dev\`, \`test\`, \`prod\`). Beans are marked \`@Profile("dev")\`, properties go into \`application-dev.yml\`. The active profile is set via \`spring.profiles.active\` (a property, environment variable, or launch argument), letting a single artifact run in different environments.`,
      },
      'exception-handling': {
        question: 'How do you handle exceptions centrally in Spring (@ControllerAdvice)?',
        answer: `In Spring MVC, exceptions are handled at several levels:

- **\`@ExceptionHandler\`** on a controller method — catches exceptions of that controller;
- **\`@ControllerAdvice\` / \`@RestControllerAdvice\`** — a global component with \`@ExceptionHandler\` methods applied to **all** controllers. It lets you map exceptions to HTTP responses (status + body) in one place without duplicating handling.

Example: \`@ExceptionHandler(EntityNotFoundException.class)\` returns a 404 with an error body. You can return a \`ResponseEntity\` with the desired status or use \`@ResponseStatus\`.

Since Spring 6 / Boot 3 there is \`ProblemDetail\` (RFC 7807) for unified error bodies. The base fallback mechanism is \`ResponseEntityExceptionHandler\`, which you can extend to override the handling of standard Spring MVC exceptions.`,
      },
      'spring-data-repositories': {
        question: 'How do CrudRepository, JpaRepository, and PagingAndSortingRepository differ? How do derived queries work?',
        answer: `The Spring Data interface hierarchy — each extends the previous one:

- **\`CrudRepository\`** — basic CRUD operations (\`save\`, \`findById\`, \`delete\`, \`count\`).
- **\`PagingAndSortingRepository\`** — adds pagination and sorting (\`findAll(Pageable)\`, \`findAll(Sort)\`).
- **\`JpaRepository\`** — adds JPA specifics: \`findAll\` returns a \`List\`, batch operations (\`saveAll\`, \`deleteAllInBatch\`), \`flush()\`, \`getReferenceById\`.

In practice, for JPA you usually take \`JpaRepository\`.

**Derived queries (query by method name)** — Spring generates the query by parsing the method name: \`findByLastNameAndAgeGreaterThan(String, int)\` becomes the corresponding JPQL. Keywords \`And\`, \`Or\`, \`Between\`, \`Like\`, \`OrderBy\`, \`Top\`/\`First\`, and others are supported. Convenient for simple queries; for complex ones the names become unreadable — then you switch to \`@Query\`.`,
      },
      'query-and-projections': {
        question: 'When should you use @Query and native SQL? What are projections?',
        answer: `**\`@Query\`** defines a query explicitly when a derived method is awkward:

- by default — **JPQL** (works with entities and fields, portable across databases);
- \`nativeQuery = true\` — **native SQL**: needed for database-specific constructs, complex window functions, fine tuning, but you lose portability and entity-level checking.

Parameters are bound positionally (\`?1\`) or by name (\`:name\` + \`@Param\`). Modifying queries are marked \`@Modifying\`.

**Projections** return not the whole entity but the needed subset of fields — less data and no extra joins:

- **interface-based** — an interface with getters for the needed fields (a closed projection); Spring creates the implementation itself;
- **DTO/class-based** — a class constructor is filled with the selected fields;
- **dynamic** — the projection type is passed as a method parameter (\`<T> T findBy...(..., Class<T>)\`).

Projections are a simple way to speed up reads and avoid pulling heavy entities.`,
      },
      'transaction-propagation': {
        question: 'What transaction propagation levels exist in Spring?',
        answer: `**Propagation** defines how a \`@Transactional\` method behaves relative to an already existing transaction. The main options:

- **REQUIRED** (default) — join the current transaction, or create a new one if there is none.
- **REQUIRES_NEW** — always create a **new** transaction, suspending the current one. The inner one commits/rolls back independently (useful for audit or logs that must persist even if the main transaction rolls back).
- **SUPPORTS** — run within a transaction if one exists, otherwise without one.
- **NOT_SUPPORTED** — run outside a transaction, suspending the current one.
- **MANDATORY** — requires an existing transaction, otherwise an exception.
- **NEVER** — requires the absence of a transaction, otherwise an exception.
- **NESTED** — a nested transaction via a savepoint: it rolls back to the savepoint without affecting the outer one.

An important nuance: \`REQUIRES_NEW\` and \`NESTED\` work only through the proxy (not on self-invocation) and depend on the data source's capabilities.`,
      },
      pagination: {
        question: 'How do you implement pagination in Spring Data? How does Page differ from Slice?',
        answer: `Spring Data provides pagination via \`Pageable\`:

- the method takes a \`Pageable\` (\`PageRequest.of(page, size, Sort.by(...))\`) and returns a \`Page\`, \`Slice\`, or \`List\`.
- **\`Page<T>\`** — knows the **total number of elements and pages**: for this an extra \`count\` query is executed. Convenient for a UI with page numbers, but the count is expensive on large tables.
- **\`Slice<T>\`** — knows only **whether there is a next page** (it fetches one extra element), without a total count. Cheaper, suitable for "infinite scroll."

**Offset pagination** (\`LIMIT ... OFFSET\`) degrades at large offsets: the database still scans all skipped rows. For large tables you use **keyset pagination (the seek method)** — instead of an offset you filter by the last seen key value (\`WHERE id > :lastId ORDER BY id LIMIT n\`). This is consistently fast and doesn't "shift" on inserts, but it doesn't allow jumping to an arbitrary page.`,
      },
      'spring-security-basics': {
        question: 'How is the Spring Security filter chain structured? What is the SecurityContext?',
        answer: `Spring Security plugs into a web application as a **chain of servlet filters**. The entry point is \`DelegatingFilterProxy\`, which delegates to \`FilterChainProxy\`, which runs the request through a \`SecurityFilterChain\` — an ordered set of filters (authentication, authorization, CSRF, exception handling, etc.). Each filter is responsible for its own aspect.

**SecurityContext / SecurityContextHolder:** the result of authentication (an \`Authentication\` with the principal and its authorities) is stored in the \`SecurityContext\`, and \`SecurityContextHolder\` provides access to it — usually via a \`ThreadLocal\`, so the current user is available anywhere during request processing on that thread.

Since Spring Security 5.7, \`WebSecurityConfigurerAdapter\` was dropped in favor of a **component style**: you declare a \`SecurityFilterChain\` bean and configure \`HttpSecurity\` (\`authorizeHttpRequests\`, \`requestMatchers\`, \`hasRole\`/\`hasAuthority\`). Method-level authorization is enabled with \`@EnableMethodSecurity\` + \`@PreAuthorize\`.`,
      },
      'jwt-stateless': {
        question: 'How does JWT authentication and the stateless approach work? Why a refresh token?',
        answer: `**Stateless authentication** keeps no server-side session: everything needed for verification is sent by the user in every request. This simplifies horizontal scaling (any instance can handle the request), unlike a stateful session in memory/storage.

**JWT (JSON Web Token)** is a signed token of three parts (header, payload with claims, signature). The server issues it at login; the client sends it in the \`Authorization: Bearer ...\` header. The server verifies the signature with its key and trusts the claims **without hitting the database**. Important: the payload is only encoded (base64), not encrypted — secrets are not put into it.

**Access + refresh tokens:** the access token is made **short-lived** (minutes) so that a leak is not critical. A long-lived **refresh token** is stored more securely and is used to obtain a new access token without logging in again. Revocation is done via a blacklist or by storing refresh tokens on the server (which partially reintroduces state).`,
      },
      oauth2: {
        question: 'What is OAuth2 and how does it differ from JWT?',
        answer: `**OAuth2** is a **delegated authorization** protocol: it lets an application obtain limited access to a user's resources without receiving their password. The participants: the **resource owner** (the user), the **client** (the application), the **authorization server** (issues tokens), and the **resource server** (holds the data). The result of a flow (for example, the Authorization Code Flow) is an **access token**.

The key distinction: **OAuth2 is a protocol/framework, while JWT is a token format.** They are not alternatives: OAuth2 describes *how* to obtain a token, and the access token *may* be in JWT format (or it may be an opaque string verified via introspection). The phrasing "OAuth2 vs JWT" is essentially incorrect — they operate at different levels and are often used together.

For authentication (not just authorization) on top of OAuth2 there is **OpenID Connect (OIDC)**, which adds an **id token**. In Spring these are \`spring-security-oauth2-client\` / \`oauth2-resource-server\`.`,
      },
      'csrf-passwordencoder': {
        question: 'What is CSRF and when is it disabled? How do you store passwords (PasswordEncoder)?',
        answer: `**CSRF (Cross-Site Request Forgery)** is an attack in which a third-party site makes the victim's browser send a request to an application where they are authenticated, using their cookie. The defense is a **CSRF token**: an unpredictable value the server expects on state-changing requests and that the foreign site cannot know.

CSRF protection is relevant for **session (cookie-based)** authentication. For a **stateless REST API with a token in the \`Authorization\` header** it is usually **disabled**: the browser does not attach the header automatically, so classic CSRF does not apply. Disabling it with cookie sessions is unsafe.

**PasswordEncoder** — passwords are never stored in plaintext or reversibly encrypted, but **hashed** with an adaptive, salted algorithm:

- **BCrypt** — a common default choice (configurable cost);
- **SCrypt**, **Argon2** — more resistant to GPU/ASIC attacks (memory-hard).

\`DelegatingPasswordEncoder\` stores the algorithm prefix in the hash (\`{bcrypt}...\`), allowing the algorithm to be changed over time. Verification — \`matches(raw, encoded)\`.`,
      },
      'spring-cloud-overview': {
        question: 'What is Spring Cloud and which microservice problems does it solve?',
        answer: `**Spring Cloud** is a set of projects on top of Spring Boot that cover common tasks of a distributed microservice architecture with ready-made solutions:

- **Service Discovery** (Eureka, Consul) — services find each other by name rather than hardcoded addresses;
- **Centralized configuration** (Spring Cloud Config) — settings for all services in one place (usually git);
- **API Gateway** (Spring Cloud Gateway) — a single entry point: routing, authentication, rate limiting;
- **Client-side load balancing** (Spring Cloud LoadBalancer) — distributing requests across instances;
- **Resilience** (Resilience4j) — Circuit Breaker, Retry, Bulkhead;
- **Distributed tracing** (Micrometer Tracing / formerly Sleuth) — an end-to-end request id across services;
- **Event-driven integration** (Spring Cloud Stream) — an abstraction over brokers (Kafka, RabbitMQ).

The idea is to provide microservice infrastructure patterns as reusable components instead of reinventing them in every service.`,
      },
      'service-discovery-gateway': {
        question: 'How do Service Discovery (Eureka) and an API Gateway work?',
        answer: `**Service Discovery** solves the problem of locating services in a dynamic environment where addresses and the number of instances change:

- each service **registers** with the registry (Eureka Server) at startup, sending its name and address, and periodically sends a heartbeat;
- a client asks the registry for instances of the needed service by name and calls them (usually with client-side load balancing);
- instances that stop sending heartbeats are removed from the registry.

Alternatives to Eureka — Consul, Zookeeper (plus health checks and a KV store).

**API Gateway** (Spring Cloud Gateway) is a single entry point for external clients that hides the internal topology. It is responsible for:

- **routing** requests to the right services (by path, headers);
- cross-cutting concerns: authentication/authorization, **rate limiting**, CORS, logging, retries;
- integration with discovery (routes by service name).

Together they enable flexible scaling: instances are added/removed, and clients and the gateway learn about it through the registry.`,
      },
    },
  },
  hibernate: {
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
  },
  'build-tools': {
    title: 'Maven / Gradle',
    description: 'Build tools',
    questions: {
      'what-is-maven': {
        question: 'What is Maven? What is the structure of pom.xml?',
        answer: `**Maven** is a build and dependency management tool for Java projects. Its principle: **convention over configuration** — a standard project structure and lifecycle.

**Standard structure:**

\`\`\`
src/main/java        — source code
src/main/resources   — resources
src/test/java        — tests
src/test/resources   — test resources
target/              — build output
pom.xml              — project descriptor
\`\`\`

**pom.xml (Project Object Model):**

\`\`\`xml
<project>
    <groupId>com.company</groupId>      <!-- organization -->
    <artifactId>my-app</artifactId>     <!-- artifact name -->
    <version>1.0.0-SNAPSHOT</version>   <!-- version -->
    <packaging>jar</packaging>          <!-- jar | war | pom -->

    <parent>...</parent>                <!-- configuration inheritance -->
    <properties>...</properties>        <!-- variables (java.version) -->
    <dependencies>...</dependencies>    <!-- dependencies -->
    <dependencyManagement>...</dependencyManagement> <!-- versions for children -->
    <build><plugins>...</plugins></build> <!-- build plugins -->
    <profiles>...</profiles>            <!-- profiles (dev/prod) -->
</project>
\`\`\`

Artifact coordinates: **groupId:artifactId:version (GAV)**. Dependencies are downloaded from repositories (Maven Central, a corporate Nexus/Artifactory) into the local \`~/.m2/repository\`.

**SNAPSHOT** is a mutable dev version (re-downloaded), while release versions are immutable.`,
      },
      'maven-lifecycle': {
        question: 'Describe the Maven build lifecycle.',
        answer: `Maven has three independent lifecycles: **default** (build), **clean** (cleanup), **site** (documentation).

**Main phases of the default lifecycle (in order):**

1. \`validate\` — verify the project is correct;
2. \`compile\` — compile the main code;
3. \`test\` — run unit tests (Surefire);
4. \`package\` — package (jar/war);
5. \`verify\` — integration tests (Failsafe), quality checks;
6. \`install\` — install the artifact into the local repository (~/.m2);
7. \`deploy\` — publish to a remote repository.

**Key rule**: invoking a phase runs **all preceding** phases: \`mvn package\` = validate + compile + test + package.

\`\`\`bash
mvn clean install            # cleanup + full build + into the local repository
mvn test                     # only up to tests
mvn package -DskipTests      # skip tests
mvn dependency:tree          # dependency tree (plugin invoked directly)
\`\`\`

Each phase executes the **plugin goals** bound to it: compile → \`maven-compiler-plugin:compile\`, package → \`maven-jar-plugin:jar\`. Plugins can be bound to any phase via \`<executions>\`.`,
      },
      'maven-dependencies': {
        question: 'What dependency scopes exist? How are version conflicts resolved?',
        answer: `**Dependency scopes:**

- **compile** (default) — everywhere: compilation, tests, runtime; propagated transitively;
- **provided** — needed for compilation but provided by the environment (Servlet API in Tomcat, Lombok);
- **runtime** — not needed for compilation, needed at runtime (JDBC driver);
- **test** — tests only (JUnit, Mockito);
- **system** — local path to a jar (an anti-pattern);
- **import** — importing a BOM in \`dependencyManagement\`.

**Transitive dependencies** — dependencies of dependencies are pulled in automatically.

**Version conflict resolution** — the **nearest wins** principle: the version with the shortest path in the dependency tree wins; at equal depth — the one declared first.

**Management:**

\`\`\`xml
<dependencyManagement>   <!-- centralized version pinning -->
    <dependencies>
        <dependency>     <!-- BOM: a consistent set of versions -->
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-dependencies</artifactId>
            <version>3.3.0</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>

<exclusions>             <!-- excluding a transitive dependency -->
    <exclusion>
        <groupId>commons-logging</groupId>
        <artifactId>commons-logging</artifactId>
    </exclusion>
</exclusions>
\`\`\`

Diagnostics: \`mvn dependency:tree -Dverbose\`, Maven Enforcer Plugin (banning conflicts). Incompatible versions on the classpath cause \`NoSuchMethodError\`/\`ClassNotFoundException\` at runtime ("JAR hell").`,
      },
      'maven-vs-gradle': {
        question: 'What is the difference between Maven and Gradle?',
        answer: `**Maven:**

- configuration — declarative **XML** (pom.xml);
- rigid standard lifecycle;
- simple and predictable, extremely widespread;
- verbose, hard to customize (you have to write plugins).

**Gradle:**

- configuration — **Groovy/Kotlin DSL** (build.gradle / build.gradle.kts) — it is code;
- model — a **directed acyclic graph (DAG) of tasks**, flexible custom tasks;
- **faster**: incremental builds (rebuilds only what changed), build cache (local and remote), Gradle Daemon, parallelism;
- the standard for Android; the choice for large multi-module projects.

\`\`\`kotlin
// build.gradle.kts
plugins {
    java
    id("org.springframework.boot") version "3.3.0"
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}

tasks.register("hello") {          // custom task — just code
    doLast { println("Hello!") }
}
\`\`\`

Gradle configuration difference: \`implementation\` (does not leak into consumers' API — faster rebuilds) vs \`api\` (leaks).

**Choosing**: Maven — simplicity, stability, team-wide uniformity; Gradle — build speed, flexibility, large projects. Functionally both solve the same problem and work with the same repositories.`,
      },
    },
  },
  git: {
    title: 'Git',
    description: 'Version control system',
    questions: {
      'git-basics': {
        question: 'What is Git? Core concepts and commands.',
        answer: `**Git** is a distributed version control system: every developer has a full copy of the repository with its history.

**Three zones:**

- **Working Directory** — working files;
- **Staging Area (index)** — changes prepared for commit;
- **Repository (.git)** — commit history.

**Main commands:**

\`\`\`bash
git clone <url>              # clone
git status                   # state
git add file / git add .     # to staging
git commit -m "message"      # commit
git push / git pull          # send / receive (fetch + merge)
git fetch                    # fetch without merging

git branch feature-x         # create a branch
git switch feature-x         # switch (= checkout)
git merge feature-x          # merge a branch
git log --oneline --graph    # history

git stash / git stash pop    # set changes aside
git diff / git diff --staged # view changes
\`\`\`

**Key concepts**: a commit is a snapshot of state, identified by a SHA-1 hash; a branch is just a pointer to a commit; HEAD is a pointer to the current commit/branch.

**Undoing changes**: \`git restore file\` (working changes), \`git reset --soft/--hard\` (moving the branch), \`git revert\` (a new undo commit — safe for shared branches).`,
      },
      'merge-rebase': {
        question: 'What is the difference between merge and rebase?',
        answer: `Both commands combine changes from branches, but in different ways:

**merge** — creates a merge commit with two parents; history is preserved as is:

\`\`\`bash
git switch main
git merge feature    # merge commit, branching is visible in history
\`\`\`

- history is truthful but "branchy";
- safe: existing commits are not modified.

**rebase** — "replays" a branch's commits on top of another branch, **rewriting** them (new SHAs):

\`\`\`bash
git switch feature
git rebase main      # feature commits rewritten on top of main
git switch main
git merge feature    # fast-forward — linear history
\`\`\`

- linear, clean history;
- commits are recreated — conflicts are resolved one commit at a time.

**The golden rule of rebase**: **never rebase published (shared) branches** — rewriting history breaks your colleagues' work (divergence from origin, force push).

**In practice:**

- a local branch before push — rebase onto main to bring it up to date;
- merging into main — merge (or squash-merge in a PR);
- \`git rebase -i\` — interactive commit cleanup (squash, reword) before a PR;
- \`git pull --rebase\` — update without extra merge commits.`,
      },
      'branching-strategies': {
        question: 'What branching strategies do you know?',
        answer: `**Git Flow** — the classic heavyweight model:

- permanent branches: \`main\` (releases) and \`develop\`;
- temporary: \`feature/*\` (from develop), \`release/*\`, \`hotfix/*\` (from main);
- suits versioned products with long release cycles;
- downsides: complexity, long-lived branches → big conflicts, poor fit with CI/CD.

**GitHub Flow** — a simple model:

- one permanent branch \`main\` (always deployable);
- features in short-lived branches → Pull Request → code review → merge → deploy;
- suits continuous delivery (web applications).

**Trunk-Based Development**:

- everyone commits to \`main\` (trunk) directly or via very short-lived branches (< 1-2 days);
- unfinished features are hidden behind **feature flags**;
- requires mature CI (fast tests on every commit);
- recommended by DORA/Accelerate practices for elite teams.

**GitLab Flow** — a compromise: main + environment branches (staging, production) or release branches.

**Extras**: commit conventions (Conventional Commits: \`feat:\`, \`fix:\`), mandatory code review via PR/MR, protected branches, semantic versioning for releases.

The trend: the more often you deploy, the shorter the branches and the simpler the model.`,
      },
      'fetch-vs-pull': {
        question: 'How does git fetch differ from git pull?',
        answer: `Both retrieve changes from a remote repository, but differently:

- **\`git fetch\`** — downloads new commits and updates the **remote-tracking branches** (\`origin/main\`) **without touching** your working branch or working directory. Safe: you can see what changed (\`git log main..origin/main\`) before merging.
- **\`git pull\`** = \`git fetch\` + an automatic **\`git merge\`** (or \`git rebase\` with \`pull --rebase\`) of the remote branch into the current one. So pull immediately changes your working branch.

In essence: \`fetch\` is "see what's new without changing anything locally," \`pull\` is "get it and merge right away." \`pull --rebase\` keeps history linear by replaying your local commits on top of the pulled ones, without a merge commit. A cautious workflow — \`fetch\` first, review the diff, then \`merge\`/\`rebase\`.`,
      },
      'reset-revert-checkout': {
        question: 'How do you undo changes in Git? What is the difference between reset --soft, --mixed, and --hard?',
        answer: `Three different undo tools:

- **\`git revert <commit>\`** — creates a **new** commit that undoes the changes of the specified one. History is preserved — safe for **published** (pushed) commits.
- **\`git reset\`** — moves the branch pointer back, "removing" commits from history. Dangerous for already-pushed commits (rewrites history).
- **\`git checkout <commit> -- <file>\`** / **\`git restore\`** — restores specific files without touching history.

The \`reset\` modes differ in what happens to the index and the working directory:

- **\`--soft\`** — moves only the branch pointer; the commits' changes remain **staged** (ready for a new commit). Handy for "reassembling" the last commits.
- **\`--mixed\`** (default) — moves the pointer and resets the **index**, but the changes remain in the working directory (unstaged).
- **\`--hard\`** — moves the pointer and **erases** changes in both the index and the working directory. Data is lost — the most dangerous mode.

Rule: undoing something published — \`revert\`; local unpushed history — \`reset\`.`,
      },
      'fast-forward-merge': {
        question: 'What is a fast-forward merge?',
        answer: `A **fast-forward** merge is possible when the target branch (e.g., \`main\`) has had **no new commits** since the feature branch diverged — that is, history is linear. Then Git simply **moves the \`main\` pointer** forward to the feature branch's commit, **without creating a merge commit**. History stays flat, as if the commits were made directly on \`main\`.

If \`main\` has its own new commits (histories diverged), a fast-forward is not possible — Git creates a **merge commit** with two parents (a three-way merge).

Controlling the behavior:

- **\`--ff\`** (default) — fast-forward if possible;
- **\`--no-ff\`** — always create a merge commit, even when ff is possible. This preserves an explicit trace that there was a separate branch (often used for feature branches so history shows the grouping of work);
- **\`--ff-only\`** — merge only if a fast-forward is possible, otherwise refuse (protects against unexpected merge commits).`,
      },
      'interactive-rebase-squash': {
        question: 'What is an interactive rebase (git rebase -i) and when should you squash commits?',
        answer: `**\`git rebase -i <base>\`** opens a list of commits for editing history before publishing. You can:

- **squash / fixup** — combine several commits into one;
- **reword** — change a commit message;
- **edit** — stop and fix a commit;
- **drop** — remove a commit;
- **reorder** — change the order.

**Squash** is appropriate to "tidy up" a branch's history before merging: combine intermediate commits like "wip", "fix typo", "review fixes" into one meaningful commit. Then \`main\` gets a clean, atomic history — one commit per logical change (which simplifies \`revert\` and \`bisect\`).

**When NOT to squash / rewrite history:** if the commits are already **pushed and used by others** — rebase rewrites hashes and breaks history for colleagues. Rule: interactive rebase is only for **local, not-yet-published** commits (or your own personal branches by agreement). Many teams squash automatically when merging a PR (squash merge), leaving one commit per task in main.`,
      },
      'cherry-pick': {
        question: 'What does git cherry-pick do and when is it used?',
        answer: `**\`git cherry-pick <commit>\`** transfers a **single commit** (or range) from one branch into the current one, creating a copy of it with a new hash — without merging the whole branch.

When it is used:

- a **hotfix** needs to be delivered to several branches (e.g., from \`main\` into \`release/1.x\`) without bringing the rest of the changes;
- to grab one specific useful commit from someone else's/experimental branch;
- to recover a needed commit after a complex history rewrite.

Pitfalls: cherry-pick **duplicates** the change under a new hash, so a later full merge of the same branch may cause conflicts or "repeated" changes. So it isn't overused for regular integration — merge/rebase is for that, and cherry-pick is reserved for a targeted transfer. On a conflict the process stops just like with a merge, and it's resolved manually.`,
      },
      'git-bisect': {
        question: 'How do you find the commit that introduced a bug (git bisect)?',
        answer: `**\`git bisect\`** finds the commit that introduced a bug via **binary search** through history — in \`log₂(N)\` steps instead of checking every commit.

The process:

1. \`git bisect start\`;
2. \`git bisect bad\` — mark the current (broken) commit;
3. \`git bisect good <commit>\` — mark a known-working commit in the past;
4. Git switches to the **middle** commit between them; you test (run a test) and say \`git bisect good\` or \`git bisect bad\`;
5. each answer halves the range until the **first bad** commit remains;
6. \`git bisect reset\` — return to the original state.

The check can be **automated**: \`git bisect run <script>\` — the script returns 0 (good) or a non-zero code (bad), and Git finds the culprit commit itself. Especially useful on a large history where it's unclear which change broke the behavior.`,
      },
      'merge-conflicts': {
        question: 'How do you resolve merge conflicts?',
        answer: `A **conflict** arises when two branches changed the **same lines** of one file (or one deleted a file while the other changed it) — Git cannot automatically decide which version to keep.

How to resolve:

1. Git marks the conflicting spots in the file with markers \`<<<<<<<\`, \`=======\`, \`>>>>>>>\` (your version, separator, their version);
2. \`git status\` shows the conflicting files;
3. manually (or in a merge tool / IDE) edit the file, keeping the desired result and removing the markers;
4. \`git add <file>\` — mark the conflict resolved;
5. finish: \`git commit\` (for a merge) or \`git rebase --continue\` (for a rebase). To abort everything — \`git merge --abort\` / \`git rebase --abort\`.

How to reduce the frequency of conflicts: sync with the main branch more often (short-lived branches), make small focused changes, agree on formatting across the team. For recurring similar conflicts, \`git rerere\` helps (it remembers resolutions).`,
      },
      'detached-head': {
        question: 'What is a detached HEAD and why is it dangerous?',
        answer: `Normally **HEAD** points to a branch (and that to the latest commit). A **detached HEAD** is the state where HEAD points **directly at a specific commit** rather than a branch. It happens with \`git checkout <commit-hash>\`, \`git checkout <tag>\`, or moving onto \`origin/main\` without a local branch.

Why it's dangerous: commits made in a detached HEAD **belong to no branch**. As soon as you switch to another branch, there are no references to those commits — they become "dangling" and will eventually be removed by Git's garbage collector. So the work can be **lost**.

The state itself is fine for "look at / build an old version." But if you started committing and want to keep the work — create a branch: \`git switch -c new-branch\` (or \`git branch new-branch <hash>\`) while the commits are still reachable. Recently lost commits can often be recovered via \`git reflog\`.`,
      },
      'git-hooks': {
        question: 'What are Git hooks and what are they used for?',
        answer: `**Git hooks** are scripts that Git runs automatically on certain lifecycle events (in the \`.git/hooks\` directory or via tools like Husky/pre-commit). They are split into client-side and server-side.

Common client-side hooks:

- **\`pre-commit\`** — before creating a commit: run a linter, formatting, fast tests, a check for accidental secrets. A non-zero exit code cancels the commit.
- **\`commit-msg\`** — check the message format (e.g., Conventional Commits).
- **\`pre-push\`** — before a push: run tests so you don't push something broken.

Server-side (on the repository side):

- **\`pre-receive\` / \`update\`** — check incoming changes (policies, blocking force-push to protected branches);
- **\`post-receive\`** — triggers after acceptance (notifications, CI/CD, deploy).

Why: to automate quality checks and shared team rules locally, before code reaches the shared repository. Note: local hooks in \`.git/hooks\` are not committed, so for shared rules teams use hook managers (Husky, pre-commit) that are versioned in the repository.`,
      },
      'committed-secrets': {
        question: 'What do you do if you accidentally committed secrets (passwords, keys)?',
        answer: `The first thing to understand: if the commit is **pushed**, the secret is considered **compromised** — removing it from history does not undo the fact that it could have been seen or cloned.

The order of actions:

1. **Immediately revoke/rotate the secret** (rotate the key, password, token) — this comes first and matters more than cleaning history;
2. **remove the secret from history**, not just from the last commit (otherwise it stays in earlier ones). Tools: **\`git filter-repo\`** (recommended) or BFG Repo-Cleaner — they rewrite history, removing the file/line from all commits;
3. if the branch is shared — coordinate with the team: rewriting history requires a **force-push** and re-cloning by everyone;
4. **prevent a recurrence**: keep secrets in environment variables / secret managers (Vault), add files to \`.gitignore\`, enable secret scanners (git-secrets, gitleaks) in pre-commit and CI.

The key point: rotating the secret is always mandatory; cleaning history is only a supplement that reduces further leakage.`,
      },
    },
  },
  microservices: {
    title: 'Microservices & Docker',
    description: 'Architecture, containerization, patterns',
    questions: {
      'monolith-vs-microservices': {
        question: 'What is the difference between a monolith and microservices?',
        answer: `**Monolith** — the application as a single deployment: one process, one database, one release.

Pros: simplicity of development/debugging/deployment at the start, ACID transactions, no network overhead. Cons: scaling only as a whole, long releases as it grows, degrading modularity ("big ball of mud"), lock-in to a single stack.

**Microservices** — a set of small independent services, each of which:

- is responsible for its own business domain (bounded context from DDD);
- has its **own database** (database per service);
- is deployed and scaled independently;
- communicates over the network (REST, gRPC, messaging).

Pros: independent teams and releases, targeted scaling, fault tolerance (one going down ≠ all going down), freedom of technology choice. Cons: **distributed complexity** — network failures, eventual consistency instead of ACID, distributed transactions, harder debugging and testing, DevOps infrastructure (orchestration, monitoring, tracing).

**Rule of thumb**: start with a modular monolith and extract microservices when there is a real need (different rates of change, load, teams). "Microservices are not a free lunch" — the price is operational complexity.

An intermediate step is **breaking up the monolith** with the Strangler Fig pattern: gradually moving functionality out into services.`,
      },
      'microservices-communication': {
        question: 'What ways of communication between microservices exist?',
        answer: `**Synchronous communication** (request-response, the caller waits):

- **REST/HTTP + JSON** — simplicity, universality; the standard for external APIs;
- **gRPC** — binary Protobuf, HTTP/2, strict contracts, streaming; 5-10x faster than REST — the choice for service-to-service communication;
- **GraphQL** — flexible queries, usually at the BFF/API Gateway.

Downsides of synchronous: cascading failures (a service waits for a service that waits for a service...), temporal coupling (both must be available).

**Asynchronous communication** (via a message broker):

- **events** (Kafka, RabbitMQ): a service publishes "OrderCreated", subscribers react independently;
- **commands/task queues**: targeted delivery to a single consumer;
- pros: loose coupling, load buffering, resilience to consumer unavailability;
- cons: eventual consistency, harder debugging, duplicates (idempotency is required).

**Key practices:**

- **API contracts**: OpenAPI/Protobuf schemas, contract testing (Pact), backward compatibility;
- **service discovery**: Kubernetes DNS, Eureka, Consul;
- **resilience**: timeouts, retries with backoff, circuit breaker (Resilience4j);
- **observability**: distributed tracing (OpenTelemetry, correlation id).

Recommendation: events for domain integration, synchronous calls for real-time data queries.`,
      },
      'microservices-patterns': {
        question: 'What microservice architecture patterns do you know?',
        answer: `**API Gateway** — a single entry point: routing, authentication, rate limiting, response aggregation (Spring Cloud Gateway, Kong, nginx).

**Circuit Breaker** — protection against cascading failures: after N errors it "opens" and immediately returns an error/fallback, periodically checking for recovery (Closed → Open → Half-Open). Implementation: Resilience4j.

**Saga** — distributed transactions as a sequence of local transactions with **compensating actions** on failure:

- **choreography** — services react to each other's events;
- **orchestration** — a central coordinator (Camunda, Temporal).

**Transactional Outbox** — atomicity of "write to the DB + publish an event": the event is written to an outbox table in the same transaction, and a separate process publishes it to the broker (+ CDC/Debezium).

**CQRS** — separating the write model (commands) from the read model (queries); often with **Event Sourcing** (state = a sequence of events).

**Database per Service** — each service has its own database; other services' data is accessed only via APIs.

**Service Discovery**, **Config Server** — infrastructure patterns (Spring Cloud Config, Kubernetes ConfigMaps).

**Sidecar / Service Mesh** — moving network logic (mTLS, retries, tracing) into a proxy next to the service (Istio, Linkerd).

**BFF (Backend for Frontend)** — a separate API layer for each client type (web, mobile).

**Bulkhead** — resource isolation (separate thread/connection pools) so that the failure of one dependency does not exhaust the resources of the entire service.`,
      },
      docker: {
        question: 'What is Docker? How does a container differ from a virtual machine?',
        answer: `**Docker** — a containerization platform: packaging an application with all its dependencies into a portable image that runs the same everywhere.

**Container vs virtual machine:**

- **VM** — hardware emulation + a full guest OS on a hypervisor: gigabytes, starts in minutes;
- **Container** — an isolated process using the **host OS kernel** (namespaces — isolation, cgroups — resource limits): megabytes, starts in seconds.

**Core concepts:**

- **Image** — an immutable template made of layers (layers are cached and reused);
- **Container** — a running instance of an image;
- **Dockerfile** — the recipe for building an image;
- **Registry** — image storage (Docker Hub, ECR, GCR, Harbor).

\`\`\`dockerfile
# multi-stage build for Java
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline        # dependency cache as a separate layer
COPY src ./src
RUN mvn package -DskipTests

FROM eclipse-temurin:21-jre-alpine   # lightweight runtime image
COPY --from=build /app/target/app.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
\`\`\`

**Best practices**: multi-stage builds (small final image), minimal base images (alpine, distroless), don't run as root, .dockerignore, layer ordering for the cache (dependencies before code), healthcheck.

For local development of multiple services — **Docker Compose** (docker-compose.yml).`,
      },
      kubernetes: {
        question: 'What is Kubernetes? Core objects.',
        answer: `**Kubernetes (K8s)** — a container orchestrator: it automates deployment, scaling, self-healing, and updates of containerized applications in a cluster.

**Architecture**: Control Plane (API Server, Scheduler, Controller Manager, etcd) + Worker Nodes (kubelet, containers).

**Core objects:**

- **Pod** — the minimal unit: one or more containers with shared network/storage;
- **Deployment** — declarative management of Pod replicas: rolling update, rollback, scaling;
- **Service** — a stable access point to Pods (load balancing): ClusterIP (internal), NodePort, LoadBalancer;
- **Ingress** — external HTTP routing (domains, paths, TLS);
- **ConfigMap / Secret** — configuration and sensitive data separate from the image;
- **HorizontalPodAutoscaler** — autoscaling by CPU/metrics;
- **StatefulSet** — for stateful applications (databases); **DaemonSet** — a Pod on every node; **Job/CronJob** — one-off/periodic tasks;
- **PersistentVolume / PVC** — persistent storage.

**Key mechanisms:**

- **declarativeness**: you describe the desired state (YAML), K8s maintains it (reconciliation loop);
- **self-healing**: a crashed Pod is recreated; liveness/readiness/startup **probes** control traffic and restarts;
- **rolling updates** — zero-downtime updates;
- requests/limits — resource management.

Ecosystem: Helm (packages/manifest templates), ArgoCD (GitOps), Prometheus + Grafana (monitoring). Important for Java: the JVM must respect container limits (\`-XX:MaxRAMPercentage\`, modern JDKs do this automatically).`,
      },
      'service-boundaries': {
        question: 'How do you define microservice boundaries? What are the signs of a service that is too small or too large?',
        answer: `Boundaries are drawn **by business capabilities**, not by technical layers. The main tool is **DDD**: a service corresponds to one **bounded context** — an area with a single model and language. A good service owns its data and changes for a single business reason (high cohesion inside, loose coupling outside).

**Signs of a too-large service:** it changes for many unrelated reasons, several teams edit it, a release touches a lot of unrelated functionality, and independent subdomains are clearly visible inside.

**Signs of a too-small service:** it has almost no logic of its own and constantly "chats" over the network with others (chatty), any change affects several services at once (they always deploy together), and distributed transactions appear where a local one would do. Over-splitting produces a "distributed monolith" — the downsides of microservices without their upsides.

Practice: start with larger services and split them as boundaries become clear, not the other way around.`,
      },
      'monolith-migration': {
        question: 'How do you approach migrating a monolith to microservices?',
        answer: `The key principle is **not to rewrite everything at once** (a big-bang is risky), but to migrate incrementally with the **Strangler Fig** pattern: microservices are gradually "grown" around the monolith, redirecting individual functions to them until the monolith is no longer needed.

A typical approach:

1. put a **facade/gateway** in front of the monolith to redirect traffic piece by piece;
2. extract one **bounded context** at a time — starting with the least coupled and most valuable to separate (high load, a separate release cycle);
3. split the data: the new service gets its own database; synchronization is handled via events or temporary shared access;
4. shift traffic gradually (canary is possible), watching the metrics;
5. remove the extracted code from the monolith.

It is important to decide in advance **what not to extract**: a tightly coupled core is sometimes cheaper to leave as a monolith. You migrate when there is real pain (scaling, independent releases), not for fashion.`,
      },
      'sync-vs-async': {
        question: 'When should you choose synchronous communication between services, and when asynchronous?',
        answer: `**Synchronous** (REST, gRPC) — the caller waits for a response here and now.

- Pros: simplicity, an immediate result, clear debugging.
- Cons: **temporal coupling** — if the callee is unavailable or slow, the caller suffers; chains of synchronous calls amplify failures (cascade).
- When: an immediate response is needed (fetching data for display), simple query scenarios. gRPC for fast internal calls, REST for broad compatibility.

**Asynchronous** (messages/events via Kafka, RabbitMQ) — the sender publishes a message and doesn't wait.

- Pros: **loose coupling** in time, resilience to a receiver being down (the message waits in the broker), smoothing of load spikes, natural event-driven integration.
- Cons: more complex (eventual consistency, ordering, duplicates, debugging a distributed flow).
- When: event notifications, long-running operations, decoupling services, different processing speeds.

Rule: **commands/queries with an immediate response — synchronously; facts about what happened (events) and decoupling — asynchronously.** Often both approaches are combined in one system.`,
      },
      'loose-coupling': {
        question: 'What is loose coupling between microservices and how do you achieve it?',
        answer: `**Loose coupling** means services can be changed and deployed independently because they know little about each other's internals. The opposite is a "distributed monolith," where services must be released together.

How it is achieved:

- **data hiding** — each service has its own database; you cannot access another's database directly, only through its API/events;
- **stable contracts** — communicating via versioned APIs/event schemas; changes are made backward-compatible (without breaking consumers);
- **asynchronous events** instead of chains of synchronous calls — decoupling in time;
- **avoiding shared models** — not sharing common domain libraries/entities between services (shared code increases coupling);
- **tolerance to change** — the "Tolerant Reader" principle: ignore unknown fields, don't fail on inessential changes;
- failure isolation (timeouts, circuit breaker) so a neighbor's crash doesn't drag you down.

A sign of good decoupling: a service can be deployed to production without coordinating the release with other teams.`,
      },
      'database-per-service': {
        question: 'What is "database per service" and how do you ensure data consistency?',
        answer: `**Database per service** — each microservice has its own database that only it can access. Other services get data solely through its API or events. This is the key to loose coupling and independent scaling, but it removes the possibility of a single ACID transaction and JOINs across services.

**Consistency** between services becomes **eventual** rather than immediate. Tools:

- **the Saga pattern** — a distributed business operation as a chain of local transactions with compensations (event choreography or orchestration);
- **Transactional Outbox** — to atomically save data and publish an event: the event is written to an outbox table in the same database within one transaction, and a separate process reads it and sends it to the broker (solving the "wrote to the DB but didn't send the event" problem);
- **CQRS / read replicas** — a service keeps a denormalized copy of the needed external data, updated via events, so it doesn't call synchronously for every request;
- **idempotency** of handlers — because delivery is usually at-least-once.

You design so the business tolerates temporary inconsistency; where strict atomicity is needed, that's a sign the data should perhaps live in a single service.`,
      },
      'ms-resilience': {
        question: 'How do you ensure resilience to failures when microservices interact?',
        answer: `In a distributed system failures are inevitable, so calls to neighbors are always treated as potentially unreliable. The main mechanisms:

- **Timeout** — never wait for a response indefinitely; a hung call must not hold resources (threads, connections).
- **Retry + backoff** — retry on transient errors with exponential delay and jitter; only for **idempotent** operations, otherwise it amplifies the problem.
- **Circuit Breaker** — after a series of errors it "opens" calls to the failing service (fail fast + fallback), preventing a cascade and giving the neighbor time to recover.
- **Bulkhead** — resource isolation (separate thread/connection pools per callee) so one failure doesn't eat all the application's resources.
- **Fallback / graceful degradation** — a backup response (cache, default value, reduced functionality) instead of a total failure.
- **Rate limiting / throttling** — protection against overload.

In the Spring ecosystem this is provided by **Resilience4j** (Circuit Breaker, Retry, Bulkhead, RateLimiter, TimeLimiter). The goal is that one service's failure leads to degradation, not to the whole system going down. More on the patterns themselves is in the "Design Patterns" section.`,
      },
      'ms-observability': {
        question: 'How do you set up monitoring, logging, and tracing for microservices?',
        answer: `In a distributed system, behavior can't be understood from a single service — you need the **three pillars of observability**:

- **Logs** — structured (JSON), collected centrally (e.g., **ELK/EFK**: Elasticsearch + Logstash/Fluentd + Kibana). The key is a request **correlation id** propagated through all services to assemble an end-to-end picture.
- **Metrics** — numeric indicators over time (RPS, latency p95/p99, errors, resource usage). Usually **Prometheus** (collection) + **Grafana** (dashboards, alerts); in Spring — Micrometer + Actuator.
- **Tracing (distributed tracing)** — the path of a single request through all services with the timings of each step (**Jaeger**, **Zipkin**, OpenTelemetry). It shows exactly where time is lost in the call chain.

Additionally: **health checks** (\`/actuator/health\`) for the orchestrator, alerts on anomalies, SLO/SLI. Without this, debugging in microservices turns into guesswork — which is why observability is built in from the start, not after an incident.`,
      },
      'ms-security': {
        question: 'How are authentication, authorization, and secret storage implemented in microservices?',
        answer: `**Authentication and authorization:**

- usually **stateless** via tokens: the user authenticates, gets a token (often a **JWT**) that they send on every request — services verify it without a shared session;
- for delegated access and external clients — **OAuth2 / OpenID Connect** with an authorization server (which issues tokens);
- an **API Gateway** often handles token verification at the entry point, and services additionally check permissions (roles/scopes) for their operations;
- between services — mutual authentication, often **mTLS** (typically via a service mesh), so internal traffic is also trusted (the zero-trust principle: don't trust the network by default).

**Secrets** (database passwords, keys, tokens) are not stored in code or committed to git. Secret managers are used: **HashiCorp Vault**, **AWS Secrets Manager**, Kubernetes Secrets (+ encryption). They provide centralized storage, access control, auditing, and **rotation** of secrets without rebuilding services.`,
      },
      'ms-cicd-testing': {
        question: 'How do you set up CI/CD and testing for microservices?',
        answer: `**CI/CD:** each service has an **independent pipeline** and is deployed separately — one of the main advantages of microservices. The pipeline: build → tests → package into a container (Docker) → publish the image → deploy to the orchestrator (Kubernetes). Tools: Jenkins, GitLab CI, GitHub Actions; for deploying to k8s — the GitOps approach (**ArgoCD**, Flux). Safe-rollout practices: blue-green and canary releases, automatic rollback based on metrics.

**Testing** is built as a pyramid, with an emphasis on distribution:

- **unit tests** — the service's logic in isolation (fast, the majority);
- **integration** — the service with its database/broker; it's convenient to spin up real dependencies via **Testcontainers**;
- **contract tests** — key for microservices: they verify that the API between the consumer and provider is compatible (e.g., Spring Cloud Contract, Pact) without bringing up the whole system;
- **end-to-end** — cross-service scenarios; valuable but slow and fragile, so you keep few of them.

The idea: keep expensive e2e tests to a minimum, and verify service compatibility with fast contract tests.`,
      },
    },
  },
  aws: {
    title: 'AWS',
    description: 'EC2, ELB, ECS, S3, VPC',
    questions: {
      'what-is-ec2': {
        question: 'What is Amazon EC2? What instance types and pricing models exist?',
        answer: `**Amazon EC2 (Elastic Compute Cloud)** is a virtual server (instance) service in the AWS cloud: you rent compute capacity with full control over the OS, networking, and storage.

**Key concepts:**

- **AMI (Amazon Machine Image)** — an image with an OS and pre-installed software from which an instance is launched;
- **Instance Type** — a CPU/RAM/network configuration (e.g., \`t3.medium\`, \`m5.large\`);
- **EBS (Elastic Block Store)** — network-attached disks that survive instance stops; **Instance Store** — local ephemeral disks;
- **Security Group** — the instance's virtual firewall;
- **Key Pair** — SSH keys for access.

**Instance type families:**

- **General Purpose (t, m)** — balanced: web servers, microservices;
- **Compute Optimized (c)** — CPU-intensive workloads: batch, encoding;
- **Memory Optimized (r, x)** — databases, caches, in-memory analytics;
- **Storage Optimized (i, d)** — high disk I/O;
- **Accelerated Computing (p, g)** — GPU: ML, graphics.

**Pricing models:**

- **On-Demand** — hourly/per-second billing with no commitment: unpredictable workloads;
- **Reserved Instances / Savings Plans** — up to 72% discount for a 1–3 year commitment: steady workloads;
- **Spot Instances** — up to 90% discount for unused capacity, but AWS can reclaim the instance with a 2-minute notice: fault-tolerant batch jobs;
- **Dedicated Hosts** — dedicated physical hardware: licensing/compliance requirements.`,
      },
      'ec2-autoscaling': {
        question: 'How does Auto Scaling work in EC2?',
        answer: `**Auto Scaling Group (ASG)** — a mechanism for automatically managing the number of EC2 instances: it maintains the desired number of healthy instances and scales it based on load.

**Main parameters:**

- **Min / Max / Desired capacity** — the minimum, maximum, and desired number of instances;
- **Launch Template** — the launch blueprint: AMI, instance type, security groups, user data;
- **Health checks** — EC2 status and/or ELB checks; an unhealthy instance is replaced automatically.

**Scaling policies:**

- **Target Tracking** — maintaining a target metric (e.g., CPU 60%) — the recommended option;
- **Step Scaling** — adding/removing instances in steps based on CloudWatch alarm thresholds;
- **Scheduled Scaling** — on a schedule (e.g., more instances during business hours);
- **Predictive Scaling** — ML-based load forecasting.

**Benefits:**

- fault tolerance: failed instances are replaced, distribution across Availability Zones;
- cost savings: you pay only for the capacity you need;
- ELB integration: new instances are automatically registered with the load balancer.

Best practices: stateless applications (state in a DB/cache/S3), graceful shutdown via lifecycle hooks, warm-up via warm pools, combining On-Demand + Spot in one ASG (mixed instances policy).`,
      },
      'what-is-elb': {
        question: 'What is Elastic Load Balancing? What load balancer types does AWS offer?',
        answer: `**Elastic Load Balancing (ELB)** — a managed load balancing service: it distributes incoming traffic across multiple targets (EC2, containers, IP addresses, Lambda) in one or more Availability Zones.

**Load balancer types:**

- **Application Load Balancer (ALB)** — layer 7 (HTTP/HTTPS):
  - routing by path (\`/api/*\`), host, headers, query parameters;
  - support for WebSocket, HTTP/2, gRPC;
  - targets: EC2, ECS containers, Lambda, IP;
  - the default choice for web applications and microservices;
- **Network Load Balancer (NLB)** — layer 4 (TCP/UDP/TLS):
  - millions of requests per second, ultra-low latency;
  - static IP / Elastic IP per AZ;
  - client IP preservation;
  - the choice for high-load TCP services;
- **Gateway Load Balancer (GWLB)** — layer 3: deploying network virtual appliances (firewalls, IDS/IPS);
- **Classic Load Balancer (CLB)** — legacy, not used for new projects.

**Key mechanisms:**

- **Target Group** — a group of targets with health check settings;
- **Health Checks** — traffic goes only to healthy targets;
- **Cross-Zone Load Balancing** — even distribution across AZs;
- **Sticky Sessions** — pinning a client to a target via a cookie (for stateful applications);
- TLS termination with certificates from **ACM**.`,
      },
      'what-is-ecs': {
        question: 'What is Amazon ECS? Main components.',
        answer: `**Amazon ECS (Elastic Container Service)** — AWS's managed container orchestrator: running, scaling, and managing Docker containers without installing your own orchestrator.

**Main components:**

- **Cluster** — a logical group of compute resources;
- **Task Definition** — the launch "recipe" (similar to docker-compose): images, CPU/memory, ports, environment variables, volumes, IAM role;
- **Task** — a running instance of a Task Definition (one or more containers);
- **Service** — maintains the desired number of tasks, integrates with ELB, performs rolling deployments and auto scaling;
- **Container Agent** — an agent on EC2 instances communicating with the control plane.

**Launch types (where containers run):**

- **Fargate** — serverless: AWS manages the servers, you pay for the task's CPU/memory; simpler to operate;
- **EC2** — containers on your own EC2 instances: more control, cheaper at high density, GPUs available;
- **ECS Anywhere** — running on your own servers (on-premises).

**Integrations:**

- **ECR (Elastic Container Registry)** — Docker image registry;
- **ALB** — load balancing with dynamic port mapping;
- **CloudWatch** — logs and metrics;
- **IAM Task Role** — separate access permissions for each task;
- **Service Auto Scaling** — scaling the number of tasks based on metrics.`,
      },
      'ecs-vs-eks-fargate': {
        question: 'ECS vs EKS: which one to choose? What is Fargate?',
        answer: `**ECS vs EKS:**

- **ECS** — AWS's proprietary orchestrator:
  - simpler: fewer concepts, native AWS integration (IAM, ALB, CloudWatch);
  - the control plane itself is free;
  - vendor lock-in: works only in AWS;
  - the choice for teams fully invested in AWS without Kubernetes expertise;
- **EKS (Elastic Kubernetes Service)** — managed Kubernetes:
  - standard K8s API: portability, a huge ecosystem (Helm, ArgoCD, Istio);
  - control plane fee (~$73/month per cluster);
  - higher entry barrier and operational complexity;
  - the choice for a multi-cloud strategy, complex scenarios, teams with K8s expertise.

**Fargate** — a serverless container execution engine that works with both ECS and EKS:

- no EC2 instances to manage: patching, scaling, capacity are AWS's responsibility;
- billing per vCPU and memory requested by the task, per second;
- isolation: each task runs in its own micro-VM;
- limitations: no GPU (in ECS), more expensive than EC2 at consistently high utilization, no DaemonSet-like scenarios.

**Rule of thumb:**

- small team, everything in AWS, just need to run containers → **ECS + Fargate**;
- need the Kubernetes stack and portability → **EKS**;
- high steady load, cost optimization → **ECS/EKS on EC2** (+ Spot).`,
      },
      'what-is-s3': {
        question: 'What is Amazon S3? Storage classes and the consistency model.',
        answer: `**Amazon S3 (Simple Storage Service)** — object storage with virtually unlimited capacity: files (objects) are stored in **buckets** and accessed via an HTTP API.

**Key characteristics:**

- an **object** = data + metadata + key (a unique name within the bucket); up to 5 TB in size;
- flat structure: "folders" are just key prefixes;
- bucket names are globally unique;
- **11 nines** durability (99.999999999%) — data is replicated across at least 3 AZs;
- **strong read-after-write consistency** — since 2020, reads immediately after a write/overwrite/delete return the latest data.

**Storage classes:**

- **S3 Standard** — frequent access, the default;
- **S3 Intelligent-Tiering** — automatic movement between tiers based on access patterns;
- **S3 Standard-IA / One Zone-IA** — infrequent access: cheaper storage, paid retrieval;
- **S3 Glacier Instant / Flexible Retrieval / Deep Archive** — archival: from milliseconds to 12+ hours for retrieval, the lowest storage cost.

**Features:**

- **Versioning** — keeping all versions of an object, protection against accidental deletion;
- **Lifecycle Policies** — automatic transition to cheaper classes and age-based deletion;
- **Replication (CRR/SRR)** — replication to another region/bucket;
- **Presigned URLs** — temporary links to private objects;
- static website hosting, event notifications (S3 → Lambda/SQS/SNS).

Typical use cases: static assets and media, backups, data lakes, build artifacts, logs.`,
      },
      's3-security': {
        question: 'How is data secured in S3?',
        answer: `**Access control:**

- a bucket is **private** by default — only the owner has access;
- **IAM Policies** — user/role permissions for S3 actions (identity-based);
- **Bucket Policies** — a JSON policy on the bucket itself (resource-based): cross-account access, IP restrictions, requiring HTTPS;
- **Block Public Access** — a "kill switch" overriding any public settings (recommended to keep enabled);
- **ACLs** — a legacy mechanism, AWS recommends disabling them (Object Ownership: Bucket owner enforced);
- **Presigned URLs** — temporary access to an object without exposing credentials.

**Encryption:**

- **at rest** (enabled by default):
  - **SSE-S3** — keys managed by S3 (AES-256);
  - **SSE-KMS** — keys in AWS KMS: auditing via CloudTrail, key access control;
  - **SSE-C** — customer-provided keys;
- **in transit** — TLS; a policy can deny non-HTTPS requests (\`aws:SecureTransport\`).

**Data protection:**

- **Versioning** — recovery from accidental overwrite/deletion;
- **MFA Delete** — deleting versions only with MFA;
- **Object Lock (WORM)** — preventing deletion/modification for a set period (compliance);
- **Replication** — geographic redundancy.

**Audit and monitoring:** CloudTrail (API calls), S3 Server Access Logs, Access Analyzer (finding unintentionally public buckets), Macie (sensitive data discovery).`,
      },
      'what-is-vpc': {
        question: 'What is a VPC? What components make up networking in AWS?',
        answer: `**VPC (Virtual Private Cloud)** — a logically isolated virtual network in AWS where your resources run. You fully control addressing, subnets, routing, and access.

**Main components:**

- **CIDR block** — the VPC's IP address range (e.g., \`10.0.0.0/16\`);
- **Subnet** — a subnetwork within a single Availability Zone:
  - **public** — has a route to an Internet Gateway (web servers, ALB);
  - **private** — no direct access from the internet (databases, backends);
- **Route Table** — routing rules, attached to subnets;
- **Internet Gateway (IGW)** — the VPC's exit to the internet;
- **NAT Gateway** — outbound internet for private subnets (inbound traffic is blocked); placed in a public subnet;
- **Elastic IP** — a static public IP.

**Connectivity:**

- **VPC Peering** — a private connection between two VPCs (not transitive);
- **Transit Gateway** — a hub for connecting many VPCs and on-premises networks;
- **VPC Endpoints** — private access to AWS services without going to the internet:
  - **Gateway Endpoint** — for S3 and DynamoDB (free);
  - **Interface Endpoint (PrivateLink)** — an ENI with a private IP for other services;
- **Site-to-Site VPN / Direct Connect** — connecting a corporate network.

**Typical architecture**: a VPC across 2–3 AZs; in each AZ — a public subnet (ALB, NAT) and private subnets (applications, databases); inter-tier access restricted with security groups.`,
      },
      'security-group-vs-nacl': {
        question: 'What is the difference between a Security Group and a Network ACL?',
        answer: `Both mechanisms are virtual firewalls in a VPC, but they operate at different levels.

**Security Group (SG):**

- applied at the **ENI/instance** level;
- **stateful** — return traffic is allowed automatically;
- **allow** rules only (you cannot explicitly deny);
- all rules are evaluated together;
- a rule's source can reference another SG (e.g., "the database accepts traffic only from the application's SG") — the foundation of microsegmentation;
- by default: all inbound denied, all outbound allowed.

**Network ACL (NACL):**

- applied at the **subnet** level — to all resources within it;
- **stateless** — return traffic must be allowed explicitly (including ephemeral ports 1024–65535);
- both **allow and deny** rules;
- rules are evaluated **in numeric order** until the first match;
- by default (default NACL): all traffic allowed;
- use cases: explicitly blocking IPs/ranges, an extra layer of subnet protection.

**In practice:**

- the primary tool is **Security Groups**: flexible, stateful, can reference each other;
- NACLs — an additional "coarse" layer (defense in depth) and for deny rules;
- traffic passes through **both** levels: the NACL at the subnet boundary, then the SG at the instance.`,
      },
      'cloud-service-models': {
        question: 'What is AWS and what is the difference between IaaS, PaaS, and SaaS?',
        answer: `**AWS (Amazon Web Services)** is a cloud platform providing compute, storage, networking, databases, and other services on a **pay-as-you-go** model, without buying your own hardware.

The three cloud service models differ in **what the provider manages vs. what you do**:

- **IaaS (Infrastructure as a Service)** — the provider gives "raw" infrastructure (virtual machines, network, disks), and you manage the OS, runtime, and application. Maximum control and flexibility. Example: **EC2**, EBS, VPC.
- **PaaS (Platform as a Service)** — the provider manages the OS and runtime, and you deploy only code and data. Less routine, faster development. Example: **Elastic Beanstalk**, RDS, App Runner.
- **SaaS (Software as a Service)** — a ready turnkey application that you just use in a browser. Example: Gmail, Office 365, Salesforce (in AWS — e.g., WorkMail).

Analogy: IaaS — rent land and build the house yourself; PaaS — rent the house; SaaS — stay in a hotel. The higher the level, the less management but also the less control. Separately there is **serverless (FaaS)** — e.g., Lambda, where you don't even manage servers.`,
      },
      iam: {
        question: 'What is IAM? What is the difference between users, roles, policies, and MFA?',
        answer: `**IAM (Identity and Access Management)** is the service for managing access to AWS resources: **who** (authentication) and **what they can do** (authorization). The core principle is **least privilege** (the minimum necessary permissions).

Key entities:

- **User** — a persistent identity for a person or application with long-term credentials (password, access keys). Users can be organized into **groups** with permissions assigned to the group.
- **Role** — an identity with **temporary** permissions that can be "assumed." A role has **no permanent keys** — temporary tokens are issued (STS). Roles are the preferred approach: they are assumed by EC2 instances, Lambda, services, and federated users. Safer than handing out long-term keys.
- **Policy** — a JSON document describing **permissions** (Effect Allow/Deny, Action, Resource, Condition). Attached to a user, group, or role.
- **MFA (Multi-Factor Authentication)** — an extra factor (a one-time code from a phone/device) on top of the password. Mandatory for privileged accounts (root, admins).

Rule: give applications and services **roles**, not hardcoded keys; give people users with MFA; grant permissions via policies following least privilege.`,
      },
      kms: {
        question: 'What is AWS KMS and where is it used?',
        answer: `**KMS (Key Management Service)** is a managed service for creating and managing **encryption keys** and performing cryptographic operations. It stores **master keys (CMK / KMS keys)** that never leave the service in plaintext, and controls access to them via IAM policies and audit logs (CloudTrail).

It's typically used with **envelope encryption**: the KMS key encrypts not the data itself but a generated **data key**, which in turn encrypts the large data. This encrypts large volumes quickly and securely, while the storage holds the encrypted data key.

Where it is used:

- **encryption at rest** in other services: S3 (SSE-KMS), EBS volumes, RDS, DynamoDB, snapshots — out-of-the-box integration;
- encrypting secrets in **Secrets Manager** / SSM Parameter Store;
- application-level encryption via the SDK;
- key control and **rotation**, access segregation, and full usage auditing.

Pros: keys are under control and auditing, not stored in code; automatic rotation can be enabled. For the highest level of hardware isolation there is **CloudHSM**.`,
      },
      'lambda-serverless': {
        question: 'What are AWS Lambda and serverless? When should you use it instead of a server?',
        answer: `**Serverless** is a model where you write code and the provider **manages the servers**, scaling, and availability. Servers exist, but you don't think about them and you pay **only for actual execution**, not for idle instances.

**AWS Lambda (FaaS — Function as a Service)** is a service for running functions **in response to events** without managing infrastructure. A function is triggered by an event (HTTP via API Gateway, an S3/DynamoDB/Kafka event, a schedule, an SQS queue), runs, and finishes. You pay for the number of invocations and the run time (per ms).

Characteristics:

- **auto-scaling** from zero to thousands of concurrent executions;
- **stateless** — state is kept externally (a database, S3);
- **limits**: a maximum execution time (15 minutes), memory/size limits, **cold start** — a delay on the first run (especially noticeable for the JVM).

When to choose Lambda over an always-on service (EC2/ECS): event-driven and irregular load, short and independent tasks (processing uploads, webhooks, ETL, cron), you want to pay only for usage and avoid managing servers. When **not** to: long-running processes, steadily high constant load (containers are cheaper), strict latency requirements (cold start), heavy state.`,
      },
      'aws-storage-types': {
        question: 'How do S3, EBS, and Glacier differ? When do you use each?',
        answer: `Three services — three different types of storage:

- **S3 (Simple Storage Service)** — **object** storage: files ("objects") in buckets, accessed via an HTTP API/URL. Practically unlimited, extremely durable (11 nines of durability), not tied to a specific instance. For: files, backups, static websites, data lakes, media. It is not a file system and can't be mounted as a disk.
- **EBS (Elastic Block Store)** — **block** storage: a virtual disk **attached to a single EC2 instance** (like an HDD/SSD). Data survives instance restarts, supports snapshots. For: OS root volumes, databases on EC2, anything needing a low-latency disk. Tied to one AZ.
- **Glacier (S3 Glacier)** — **archival** storage: very cheap, but with **retrieval latency** (from minutes to hours depending on the retrieval class). For: long-term archives, compliance, rarely read data.

In short: **S3** — objects and files (shared access, scale); **EBS** — a disk for a single instance (low latency); **Glacier** — a cheap cold archive. S3 has classes (Standard, IA, Intelligent-Tiering, Glacier) with automatic data movement via lifecycle policies.`,
      },
      'aws-rds': {
        question: 'What is RDS and how do you connect Spring Boot to it?',
        answer: `**RDS (Relational Database Service)** is a managed relational database service (PostgreSQL, MySQL, MariaDB, Oracle, SQL Server, and also Amazon Aurora). AWS handles the routine: installation, patching, backups, replication, recovery, monitoring — you're responsible only for the schema and queries (a PaaS model for databases).

Capabilities:

- **automatic backups** and point-in-time recovery, snapshots;
- **Multi-AZ** — a synchronous replica in another AZ for fault tolerance and automatic failover;
- **read replicas** — replicas for scaling reads;
- encryption via KMS, access through Security Groups in a VPC.

**Connecting Spring Boot** — like to an ordinary database; RDS gives a standard endpoint (host:port):

\`\`\`properties
spring.datasource.url=jdbc:postgresql://mydb.abc123.eu-west-1.rds.amazonaws.com:5432/app
spring.datasource.username=appuser
spring.datasource.password=\${DB_PASSWORD}
\`\`\`

Practices: don't store the password in code — take it from **Secrets Manager** / environment variables (or use IAM authentication to RDS); keep RDS in a **private subnet**, with access only from the application's SG; tune the connection pool (HikariCP) to the instance's limits.`,
      },
      'dynamodb-vs-rds': {
        question: 'When do you use DynamoDB versus RDS?',
        answer: `**RDS** is a managed **relational** database (SQL): tables with a schema, relationships, JOINs, ACID transactions, complex queries. **DynamoDB** is a managed **NoSQL** key-value / document database: schemaless, horizontally scalable, with predictable low latency at any scale, priced by requests/capacity.

**Choose RDS when:**

- the data is **relational**, with many relationships, and you need JOINs and complex ad-hoc queries;
- strict **ACID transactions** matter (finance);
- the schema is stable, volumes are moderate, and you want familiar SQL.

**Choose DynamoDB when:**

- you need **huge scale** and steadily low latency (single-digit ms) as it grows;
- access is **by key** with known query patterns (model "from the queries");
- a flexible/changing schema, high write load, a serverless stack;
- you don't want to manage sharding and capacity manually (there's an on-demand mode).

DynamoDB's limitations — no full JOINs or complex ad-hoc queries; you must design keys and indexes (GSI/LSI) for access in advance. Rule: a relational model and complex queries → **RDS**; predictable key-based access at hyperscale → **DynamoDB**. They are often combined in one system.`,
      },
      'subnets-igw-nat': {
        question: 'How do public/private subnets, the Internet Gateway, and NAT work? What is CIDR?',
        answer: `**CIDR (Classless Inter-Domain Routing)** defines a network's IP address range via a mask: for example, a VPC \`10.0.0.0/16\` (65,536 addresses), and a subnet \`10.0.1.0/24\` (256 addresses). The number after the \`/\` is how many bits are fixed for the network: the larger it is, the fewer addresses.

**Subnets** are segments of a VPC within one AZ. Whether a subnet is public is determined by its **route table**:

- **Public subnet** — its route table has a route to an **Internet Gateway (IGW)**. The IGW is a VPC component giving bidirectional internet access. Here you place things that must be reachable from outside: a load balancer, bastion, public web servers (which have a public IP).
- **Private subnet** — has no route to an IGW and isn't directly reachable from the internet. Here you place applications and **databases** (safer).

A **NAT Gateway** solves this: private resources need **outbound** internet access (download updates, call an external API), but inbound must be blocked. The NAT is placed in a **public** subnet; private resources reach out through a route to the NAT, but connections cannot be initiated to them from outside.

Typical layout: LB and NAT in public subnets; application servers and databases in private ones; traffic filtered by Security Groups and NACLs.`,
      },
    },
  },
  nosql: {
    title: 'NoSQL',
    description: 'Non-relational databases: types, CAP, consistency, sharding, caching',
    questions: {
      'what-is-nosql': {
        question: 'What is NoSQL and what are the main database types?',
        answer: `**NoSQL** (Not Only SQL) is a family of non-relational databases that give up the rigid table model and strict ACID guarantees in favor of a flexible schema and horizontal scalability.

Main types:

- **Key-value** (Redis, DynamoDB) — "key → value" pairs with the fastest possible lookup by key. When to choose: cache, sessions, rate limiting, fast key lookups.
- **Document** (MongoDB, Couchbase) — JSON-like documents with a nested structure and a flexible schema. When to choose: REST backends, microservices, frequently changing data structure.
- **Wide-column** (Cassandra, HBase) — data in columns grouped into families; huge write volumes and distribution. When to choose: time-series, logs, analytics.
- **Graph** (Neo4j) — nodes and the relationships between them. When to choose: when the relationships themselves matter — social networks, recommendations, dependency graphs.

Common traits: no strict schema, good horizontal scalability, giving up part of the ACID guarantees for performance.`,
      },
      'nosql-vs-sql': {
        question: 'When should you choose NoSQL, and when SQL?',
        answer: `The choice depends on the data model and integrity requirements, not on fashion.

**SQL is better when:**

- you need strict transactions and integrity (finance, payments);
- there are many relationships between entities and complex queries with JOINs and aggregations;
- the schema is stable and well known in advance.

**NoSQL is better when:**

- the schema is flexible or changes often (for example, custom user-defined fields);
- you need huge volumes and horizontal scaling;
- queries are simple (by key), data is denormalized, and write load is high.

**A real-world example:** a service accepted arbitrary user-defined fields. In SQL you would constantly run \`ALTER TABLE\` and complicate the model; in MongoDB it is a single document with a flexible schema — faster reads and no JOINs across tables.`,
      },
      'scaling-horizontal-vertical': {
        question: 'What is the difference between horizontal and vertical scaling?',
        answer: `**Vertical scaling (scale up)** — adding resources to a single machine (CPU, RAM, disk). Simple, requires no application changes, but hits a hardware ceiling and leaves a single point of failure.

**Horizontal scaling (scale out)** — adding new machines and distributing data and load across them. Practically unlimited and fault-tolerant, but it requires sharding and replication and complicates consistency.

NoSQL databases were designed for horizontal scaling from the start — this is one of their key advantages over classic relational databases.`,
      },
      'cap-theorem': {
        question: 'Explain the CAP theorem.',
        answer: `**The CAP theorem:** a distributed system cannot simultaneously guarantee all three properties:

- **Consistency (C)** — all nodes see the same data; every read returns the latest write.
- **Availability (A)** — every request gets a response (not an error), even if some nodes are unavailable.
- **Partition tolerance (P)** — the system keeps working when connectivity between nodes is lost (a network partition).

Since network partitions in a distributed system are inevitable, **P is mandatory**, and the real choice is between C and A at the moment of a partition:

- **CP** (MongoDB, HBase) — sacrifice availability: during a partition some nodes stop responding so they don't return stale data.
- **AP** (Cassandra, DynamoDB) — sacrifice strict consistency: they always respond, but data may be temporarily inconsistent.`,
      },
      'consistency-models': {
        question: 'How does strong consistency differ from eventual consistency? What other models exist?',
        answer: `**Strong consistency** — after a successful write, any subsequent read from any node returns that value. Simpler for the developer, but more expensive in latency and availability.

**Eventual consistency** — replicas converge to one value "over time"; right after a write, a read from another replica may return the old value. Provides high availability and low latency.

Between them there are intermediate guarantees:

- **Read-your-writes** — a user always sees their own writes.
- **Monotonic reads** — a value never "rolls back": once you see a newer value, you won't get an older one.
- **Causal consistency** — causally related operations are seen in the correct order.

These models let you pick the right trade-off between strictness and performance.`,
      },
      'network-partition': {
        question: 'What happens during a network partition, and how does the system decide what to sacrifice?',
        answer: `During a **network partition**, nodes lose connectivity with each other and cannot reconcile data. The system is forced to choose one of two options:

- preserve **consistency (CP)** — reject requests to nodes that cannot confirm the data is current; part of the system becomes temporarily unavailable;
- preserve **availability (AP)** — keep responding with local data, accepting the risk of divergence, and resolve conflicts after connectivity is restored (last-write-wins, vector clocks, CRDTs).

The choice is driven by business requirements: consistency matters more for payments, availability for a social feed. Once connectivity returns, nodes synchronize (anti-entropy, read repair).`,
      },
      sharding: {
        question: 'What is sharding and how do you choose a shard key?',
        answer: `**Sharding (partitioning)** is horizontally splitting data into parts (shards) placed on different nodes to scale volume and load. The **shard key** determines which shard a record lands on.

A good key:

- provides an **even** distribution of data and load across shards;
- matches frequent queries, so a query hits a single shard rather than all of them.

**Hot key / hot partition** — a situation where one key or range receives a disproportionate share of requests. A classic example is sharding by date: all fresh writes go to a single shard. It is fixed by choosing a more even key, hashing, or composite keys.`,
      },
      'nosql-indexes': {
        question: 'What kinds of indexes exist in NoSQL and why are they needed?',
        answer: `Indexes speed up reads at the cost of slower writes and extra memory. Without a suitable index, a query performs a full scan of the entire collection.

- **Primary** — on the primary key (id).
- **Secondary** — on a non-key field (for example, on \`status\`).
- **Compound** — on several fields at once; efficient for queries like \`WHERE user_id = ? AND status = ?\`. The order of fields in the index matters.
- **TTL** — automatically deletes documents after a set time (sessions, cache).
- **Text** — full-text search over string fields.`,
      },
      'nosql-data-modeling': {
        question: 'How does data modeling in NoSQL differ from normalization in SQL? Embedding or referencing?',
        answer: `In SQL, data is **normalized** — split into tables without duplication, with relationships assembled through JOINs. In NoSQL, you model **from the queries** (query-driven) and deliberately **denormalize** — duplicating data so it can be read in a single query.

**Embedding** — storing related data inside the document. Pro: a single read and atomicity per document. Con: document growth and duplication. Chosen for a "contains" relationship and data read together (an order and its line items).

**Referencing** — storing an id and loading the related data separately. Chosen for many-to-many relationships and large or independently changing data.

There are no traditional JOINs — they are replaced by denormalization, materialized views, or application-side joins.`,
      },
      'nosql-transactions': {
        question: 'How do transactions and atomicity work in NoSQL? What is an upsert?',
        answer: `Atomicity is usually guaranteed at the level of a **single document / row / key**: an operation on one document is either fully applied or not at all. This follows from denormalization — related data lives together.

**Multi-document transactions** do exist (for example, in MongoDB since 4.0), but they cost more: higher latency, coordination across shards, and some limitations — so they are avoided on hot paths.

**Upsert** — "update if the record exists, otherwise insert" (update-or-insert). Convenient, but with concurrent requests races are possible: two upserts may create duplicates or overwrite each other. Protection comes from unique indexes, atomic operators (\`$setOnInsert\`), and optimistic locking by version.`,
      },
      quorum: {
        question: 'What is a quorum (N/R/W) and how does it affect consistency?',
        answer: `In distributed systems with replication:

- **N** — the number of replicas storing the data;
- **W** — how many replicas must confirm a **write** for it to count as successful;
- **R** — how many replicas are queried on a **read**.

If **W + R > N**, the sets of written and read replicas overlap, and a read is guaranteed to see the latest write — giving strong consistency. Smaller W and R give a faster response and higher availability at the cost of possibly stale data.

Example: N=3, W=2, R=2 is a balanced quorum. W=1 gives fast writes but weak consistency.

When the primary fails, a **failover** occurs: replicas elect a new leader (leader election), and writes may be unavailable during the election.`,
      },
      'caching-strategies': {
        question: 'Redis as a cache: what caching strategies exist and what problems does a cache have?',
        answer: `**Caching strategies:**

- **Cache-aside (lazy loading)** — the application checks the cache first; on a miss it reads the database and stores the result in the cache. The most common one. Con: the first request is slow and the cache can drift out of sync with the database.
- **Write-through** — a write goes to the cache and synchronously to the database. The cache is always current, but writes are slower.
- **Write-behind (write-back)** — a write goes to the cache and to the database asynchronously later. Fast writes, but a risk of data loss on failure.

**TTL** (time-to-live) — how long an entry lives in the cache before it is evicted; protects against unbounded growth and stale data.

**Cache problems:**

- **Cache stampede** — when a popular key's TTL expires, many requests hit the database at once. Fixed with a regeneration lock and TTL jitter.
- **Cache penetration** — requests for keys that don't exist always pass through to the database. Fixed by caching the "empty" answer or using a Bloom filter.
- **Cache avalanche** — a mass simultaneous expiry of many keys overwhelms the database. Fixed with TTL jitter.`,
      },
    },
  },
  docker: {
    title: 'Docker',
    description: 'Containerization: images, Dockerfile, networks, volumes, docker-compose',
    questions: {
      'docker-vs-vm': {
        question: 'What is Docker and how does a container differ from a virtual machine?',
        answer: `**Docker** is a **containerization** platform: packaging an application with all its dependencies into an isolated, portable container that runs the same everywhere ("works on my machine" stops being a problem).

The difference between a container and a **virtual machine** is the level of isolation:

- a **VM** virtualizes **hardware**: each VM carries a **full guest OS** on top of a hypervisor. Heavy (gigabytes), starts in minutes, strong isolation.
- a **container** virtualizes the **OS**: all containers on a host share **one kernel** and are isolated by Linux kernel features (**namespaces** — process/network/file isolation, **cgroups** — resource limits). Lightweight (megabytes), starts in seconds, but with weaker isolation than a VM.

Bottom line: containers are **process-level isolation** with a shared kernel, so they can be packed densely on a host and scaled quickly. VMs are needed when you require a different OS or stricter isolation. They are often combined: containers run inside a VM.

Key Docker concepts: an **image** — an immutable template (file-system layers + metadata), a **container** — a running instance of an image.`,
      },
      dockerfile: {
        question: 'What is a Dockerfile and what instructions does it consist of?',
        answer: `A **Dockerfile** is a text file with instructions from which \`docker build\` assembles an image. Each instruction describes a build step.

Main instructions:

- **\`FROM\`** — the base image the build starts from (\`FROM eclipse-temurin:21-jre\`);
- **\`WORKDIR\`** — the working directory inside the image;
- **\`COPY\` / \`ADD\`** — copying files from the build context into the image (\`ADD\` can also unpack archives and fetch URLs — but \`COPY\` is usually preferred);
- **\`RUN\`** — run a command at **build** time (install packages, build the project) — creates a new layer;
- **\`ENV\`** — environment variables;
- **\`EXPOSE\`** — document a port (doesn't publish it by itself);
- **\`ENTRYPOINT\` / \`CMD\`** — what to run when the **container starts**.

Example:

\`\`\`dockerfile
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY target/app.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
\`\`\`

Each instruction creates a **layer** — this affects caching (see the separate question), so the order of instructions matters for build speed.`,
      },
      'entrypoint-vs-cmd': {
        question: 'What is the difference between ENTRYPOINT and CMD?',
        answer: `Both define what runs when the container starts, but they play different roles:

- **\`CMD\`** — sets the **default** command/arguments, which are easy to **override** by passing arguments to \`docker run\`. If you run \`docker run image ls -la\`, CMD is completely replaced by \`ls -la\`.
- **\`ENTRYPOINT\`** — sets the container's **main executable**, which is **not** overridden by \`docker run\` arguments (arguments are **appended** to it). Makes the container behave like an "executable program."

They are often **combined**: \`ENTRYPOINT\` is the program, \`CMD\` is the default arguments the user can replace:

\`\`\`dockerfile
ENTRYPOINT ["java", "-jar", "app.jar"]
CMD ["--spring.profiles.active=prod"]
\`\`\`

Then \`docker run image\` starts with the prod profile, and \`docker run image --spring.profiles.active=dev\` replaces just the argument, keeping \`java -jar app.jar\`.

It's important to use the **exec form** (\`["java", "-jar", ...]\`, a JSON array), not the shell form (\`java -jar ...\`): the exec form runs the process as PID 1 directly, so it properly receives signals (\`SIGTERM\` on stop) — otherwise the container won't shut down gracefully.`,
      },
      'image-layers-cache': {
        question: 'How are image layers structured and how does the build cache work in Docker?',
        answer: `A Docker image consists of **layers** — each \`FROM\`/\`RUN\`/\`COPY\`/\`ADD\` instruction creates a new immutable layer on top of the previous one. Layers are reused across images (a shared base layer is stored once) and cached.

**Build cache:** during \`docker build\`, for each instruction Docker checks whether a ready layer for it already exists, and if the instruction and its inputs haven't changed — it **takes the layer from the cache** instead of re-running it. But once one layer "misses" the cache, **all subsequent** ones are rebuilt (the cache is invalidated down the chain).

Hence the main optimization technique — **order instructions from rarely changing to frequently changing**. The classic for Java/Maven: first copy dependencies and download them, then the sources:

\`\`\`dockerfile
COPY pom.xml .
RUN mvn dependency:go-offline      # the dependency layer is cached
COPY src ./src
RUN mvn package                    # rebuilt only when the code changes
\`\`\`

If \`COPY . .\` came first, any code change would invalidate the dependency-download cache, and the build would download them again every time. The right order speeds up builds many times over.`,
      },
      'multistage-image-size': {
        question: 'What is a multi-stage build and how do you reduce a Docker image size?',
        answer: `A **multi-stage build** — one Dockerfile with several \`FROM\` stages: in the first (heavy, with JDK/Maven) the application is **built**, and into the final (lightweight, with just a JRE) **only the result** is copied — the ready artifact. Build tools don't end up in the final image.

\`\`\`dockerfile
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY . .
RUN mvn -q package

FROM eclipse-temurin:21-jre       # final image — without Maven/JDK
WORKDIR /app
COPY --from=build /app/target/app.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
\`\`\`

Other ways to shrink the image:

- a **lightweight base image** — \`-jre\` instead of \`-jdk\`, the \`slim\`/\`alpine\` variants (Alpine on musl is compact but sometimes incompatible; for the JVM there are jlink images);
- **combine \`RUN\`** commands and clean package caches in the same layer (\`apt-get ... && rm -rf /var/lib/apt/lists/*\`);
- **\`.dockerignore\`** — don't pull unnecessary things into the build context (\`.git\`, \`target\`, node_modules);
- fewer layers, only the needed dependencies.

A small image = faster pull/deploy, a smaller attack surface, registry savings.`,
      },
      'docker-volumes': {
        question: 'What are volumes in Docker and why are they needed?',
        answer: `A container's file system is **ephemeral**: when the container is removed, all changes in it are lost. **Volumes** solve **persistence** — storing data outside the container's lifecycle.

Main mount types:

- **Named volume** — managed by Docker (\`docker volume create\`, stored in Docker's area). The preferred way for database data and uploads — it survives container recreation and is easy to back up and move.
- **Bind mount** — mounts a **specific host folder** into the container. Handy for development (mount the sources to change code without a rebuild), but tied to the host's structure.
- **tmpfs** — in RAM, not persisted to disk (for secrets/temporary data).

Why they're needed:

- **persist state** — database data, user files, logs shouldn't vanish with the container;
- **share data** between a container and the host or between containers;
- **separate data from code** — the container can be updated (a new image) while the data in the volume remains.

Rule: make containers **stateless** and move all state to volumes or external services. In \`docker run\` a volume is attached via \`-v myvol:/var/lib/postgresql/data\`.`,
      },
      'docker-networks': {
        question: 'How does networking work in Docker? How do you link several containers?',
        answer: `Docker creates isolated networks for containers. The main **network drivers**:

- **bridge** (default) — a virtual network on the host; containers get internal IPs and talk to each other, reaching outside via port publishing;
- **host** — the container uses the host's network directly (no isolation, no port publishing);
- **none** — no network;
- **overlay** — a network spanning several hosts (for Swarm/orchestration clusters).

**Linking containers:** in a **user-defined bridge network** Docker enables a built-in **DNS**: containers see each other **by name** (or network alias). Just put them in the same network:

\`\`\`bash
docker network create app-net
docker run -d --name db --network app-net postgres
docker run -d --name api --network app-net myapi   # reaches the DB at host "db"
\`\`\`

Then the application connects to the DB at \`db:5432\` rather than by IP. In **docker-compose** this works automatically — all services of one compose file join a shared network and are addressed by service names. (The legacy \`--link\` flag is no longer needed for this.)

**Publishing ports** to the outside — \`-p 8080:8080\` (host:container). Two containers can listen on the same internal port, but you cannot publish the same port to the **host** twice.`,
      },
      'docker-registry-versioning': {
        question: 'What is a Docker registry? How do you version images (latest, semver, git hash)?',
        answer: `A **Docker registry** is a store for images. The \`docker push\` client uploads images there, \`docker pull\` downloads them. **Docker Hub** is the default public registry; **private registries** (AWS ECR, GitHub Container Registry, GitLab, Harbor, Nexus) keep a company's images private, with access control and vulnerability scanning.

An image is addressed as \`registry/repository:tag\`, e.g., \`ghcr.io/team/app:1.4.2\`.

**Tagging (versioning) strategies:**

- **\`latest\`** — the "latest" tag. Convenient, but **dangerous in prod**: it's mutable (one image today, another tomorrow), with no reproducibility — two "latest" deploys can bring up different versions. Avoided for prod.
- **Semver (\`1.4.2\`)** — semantic release versions; clear, readable, supports rolling back to a specific version. Good for public/release images.
- **Git commit hash (\`app:9f3a1c\`)** — a tag by the commit hash: **unambiguously** ties the image to the source code, ideal for CI/CD and traceability (from an image in prod you can tell which commit built it).

In practice you often **combine** them: push an image under several tags at once — semver + git-hash (+ \`latest\` for convenience), and deploy to prod by an **immutable** tag (hash or a specific version) so the deploy is reproducible.`,
      },
      'docker-compose': {
        question: 'What is docker-compose and why is it needed?',
        answer: `**Docker Compose** is a tool for describing and running **multi-container** applications with a single file \`docker-compose.yml\` (or \`compose.yaml\`). Instead of a dozen manual \`docker run\` commands, the whole system (application + database + cache + queue) is described declaratively and brought up with \`docker compose up\`.

\`\`\`yaml
services:
  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: secret
    volumes: [ "dbdata:/var/lib/postgresql/data" ]
  api:
    build: .
    ports: [ "8080:8080" ]
    depends_on: [ db ]
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://db:5432/postgres
volumes:
  dbdata:
\`\`\`

What it provides:

- one command brings the whole stack up/down (\`up\`/\`down\`);
- a shared **network** — services see each other by name (\`api\` → \`db\`);
- images, ports, volumes, variables, and dependencies declared declaratively.

\`depends_on\` sets the **startup order** (but doesn't wait for a service to be ready — health checks are needed for that). Different environments (dev/prod) are set via multiple compose files (\`-f\`), override files, and environment variables / \`.env\`.

Use cases: **local development** and tests (quickly spin up dependencies), simple single-server deploys. For production orchestration across several hosts, use **Kubernetes**.`,
      },
      'docker-resource-limits': {
        question: 'How do you limit a container\'s resources (CPU, RAM) and why does it matter for the JVM?',
        answer: `By default a container can take up **all** the host's resources. Limits are set via **cgroups**:

- **memory:** \`docker run -m 512m\` (\`--memory\`); on exceeding it, the process is killed by the OOM killer;
- **CPU:** \`--cpus="1.5"\` (a fraction of cores), \`--cpu-shares\` (relative weight under contention).

In Kubernetes these are **requests/limits** in the pod manifest.

Why: to prevent one container from "eating" the whole host and taking down its neighbors, ensure predictability and scheduling, and protect against leaks.

**Why this is critical for the JVM:** historically the JVM looked at the resources of the **whole host** rather than the container, and, for example, set the heap size and the number of GC/pool threads based on the host's memory/cores — in a container with a 512 MB limit this led to \`OutOfMemoryError\` and the container being killed by the OOM killer. Modern JDKs (11+) are **container-aware** — they respect cgroup limits. Practices:

- set the heap fraction via **\`-XX:MaxRAMPercentage=75\`** (instead of a hard \`-Xmx\`) so the heap scales with the container limit;
- leave headroom for non-heap memory (Metaspace, thread stacks, direct buffers), since the container limit counts **all** the process's memory, not just the heap;
- verify the JVM sees the correct number of CPUs (\`-XX:ActiveProcessorCount\` if needed).`,
      },
      'container-security': {
        question: 'How do you secure containers (secrets, vulnerabilities, rootless)?',
        answer: `The main aspects of container security:

**Secrets (passwords, tokens, keys):**

- do **not** bake them into the image (in \`ENV\`/layers — they're visible in the image history) and don't commit them;
- pass them via **Docker/Kubernetes secrets**, managers (Vault, AWS Secrets Manager), runtime environment variables;
- use \`.dockerignore\` so \`.env\`/keys don't reach the build context; for build-time secrets use \`--secret\` (BuildKit), which doesn't leave them in layers.

**Vulnerabilities:**

- **scan images** (Trivy, Grype, Docker Scout, registry scanners) — base images and dependencies contain known CVEs;
- use **minimal** and fresh base images (slim/alpine/distroless — a smaller attack surface), rebuild/update regularly;
- pin versions, don't rely on \`latest\`.

**Privileges (least privilege):**

- **don't run the process as root** inside the container — set an unprivileged user (\`USER appuser\`);
- **rootless containers** — running the daemon/containers without root on the host (rootless Docker, Podman): even on a container escape the attacker doesn't get host root;
- don't grant \`--privileged\`, drop unneeded Linux capabilities, use a read-only file system where possible, don't mount docker.sock without need.

General principle: a minimal image, an unprivileged user, secrets outside, regular scanning and updates.`,
      },
      'docker-daemon': {
        question: 'What is the Docker Daemon and how is Docker\'s architecture structured?',
        answer: `Docker is built on a **client-server** model:

- **Docker CLI (client)** — the \`docker\` command you type. It only **sends requests** via a REST API.
- **Docker Daemon (\`dockerd\`)** — a background service (server) that **does all the work**: builds images, creates and runs containers, manages networks, volumes, images. It listens on a Unix socket (\`/var/run/docker.sock\`) or over TCP.
- **Registry** — the image store the daemon pulls from/pushes to.

When you run \`docker run\`, the CLI sends a request to the daemon, which creates the container. Under the hood \`dockerd\` relies on lower-level components: **containerd** (container lifecycle management) and **runc** (the actual container launch via the kernel's namespaces/cgroups).

Practical implications:

- the daemon runs with **root** privileges — access to \`docker.sock\` is effectively root on the host, so it must not be handed out/mounted into containers carelessly;
- the CLI and daemon can be on **different machines** (managing a remote Docker over TCP/TLS);
- an alternative to the daemon model is **Podman** (daemonless, rootless), compatible with the Docker CLI.`,
      },
      'spring-boot-docker': {
        question: 'How do you properly package a Spring Boot application into Docker?',
        answer: `A basic working Dockerfile for Spring Boot is **multi-stage** (build separate from runtime) with dependency caching:

\`\`\`dockerfile
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn -q dependency:go-offline      # dependency cache
COPY src ./src
RUN mvn -q clean package -DskipTests

FROM eclipse-temurin:21-jre
WORKDIR /app
RUN useradd -r appuser                # unprivileged user
USER appuser
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
\`\`\`

Good practices:

- **the JVM in a container** — instead of a hard \`-Xmx\`, use \`-XX:MaxRAMPercentage=75\` so the heap depends on the container limit (JDK 11+ is container-aware); leave headroom for non-heap;
- **configuration via the environment** — Spring reads \`SPRING_DATASOURCE_URL\` etc. from variables, and secrets come from a secrets store, not the image;
- **not root**, a minimal base image (\`-jre\`/distroless), \`.dockerignore\` (don't pull \`target\`, \`.git\`);
- a **health check** on \`/actuator/health\` for the orchestrator;
- the exec form of \`ENTRYPOINT\`, so the application receives \`SIGTERM\` and shuts down gracefully.

An alternative to a hand-written Dockerfile is the Spring Boot plugins: \`./mvnw spring-boot:build-image\` (Cloud Native Buildpacks) builds an optimized layered image without a Dockerfile; or layered jars for better layer caching.`,
      },
    },
  },
  monitoring: {
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
  },
  terraform: {
    title: 'Terraform',
    description: 'Infrastructure as Code: state, providers, remote backend, locking',
    questions: {
      'what-is-terraform': {
        question: 'What is Terraform and Infrastructure as Code (IaC)?',
        answer: `**Infrastructure as Code (IaC)** is an approach where infrastructure (servers, networks, databases, load balancers) is **described as code** and managed through it, rather than created manually by clicking in a UI. Benefits: versioning in git, reproducibility, change review, automation, and eliminating hand-built "snowflake" servers.

**Terraform** (HashiCorp) is a popular IaC tool for provisioning infrastructure in clouds and services. Characteristics:

- **declarative** — you describe the **desired state** (what should exist), and Terraform figures out which actions are needed to get there (unlike imperative "run these steps");
- **cloud-agnostic** — one tool and language (**HCL**, HashiCorp Configuration Language) for many providers (AWS, GCP, Azure, Kubernetes, etc.) via provider plugins;
- **plan before apply** — \`terraform plan\` shows exactly what will change before \`apply\`;
- **state tracking** via a **state file** — Terraform remembers what it has created and brings the real infrastructure in line with the code.

The workflow: write \`.tf\` configuration → \`init\` (download providers) → \`plan\` (review changes) → \`apply\` (apply them).`,
      },
      'terraform-vs-others': {
        question: 'How does Terraform differ from Ansible and CloudFormation?',
        answer: `All three are about infrastructure automation, but with different focuses:

**Terraform vs Ansible** — this is **provisioning vs configuration management**:

- **Terraform** — **declarative**, for **creating and managing infrastructure** (spin up a VM, network, DB). It keeps state, knows the current state of resources, and can delete/change them.
- **Ansible** — primarily **configuration management**: **configuring existing** machines (install packages, lay out configs, deploy), imperative/procedural, usually **stateless** (agentless, over SSH). They are often **combined**: Terraform creates the servers, Ansible configures them.

**Terraform vs CloudFormation:**

- **CloudFormation** — an IaC service **for AWS only** (native, managed by AWS itself, which stores the state for you).
- **Terraform** — **cloud-agnostic**: one tool and language (HCL) for AWS, GCP, Azure, Kubernetes, and hundreds of providers; you manage the state yourself (a remote backend). Advantageous in multi-cloud and when a single ecosystem of modules is needed.

In short: **Terraform** — declarative infrastructure creation in any cloud; **Ansible** — configuring machines; **CloudFormation** — like Terraform but locked to AWS.`,
      },
      'terraform-providers-resources': {
        question: 'What are a provider and a resource in Terraform?',
        answer: `A **provider** is a plugin through which Terraform talks to a specific platform (its API). For example, the \`aws\`, \`google\`, \`azurerm\`, \`kubernetes\` providers. A provider is configured (region, credentials) and downloaded on \`terraform init\`. Providers are exactly what makes Terraform cloud-agnostic — one language, working with any platform that has a provider.

\`\`\`hcl
provider "aws" {
  region = "eu-west-1"
}
\`\`\`

A **resource** describes **a single infrastructure object** that Terraform manages: an EC2 instance, an S3 bucket, a VPC, a DNS record. A resource has a type (\`aws_instance\`), a local name, and arguments:

\`\`\`hcl
resource "aws_instance" "web" {
  ami           = "ami-123456"
  instance_type = "t3.micro"
}
\`\`\`

Terraform builds a **dependency graph** of resources (from references like \`aws_instance.web.id\`) and creates them in the correct order. There are also **data sources** (\`data\`) — read-only access to existing objects, **variables**/**outputs** — parameterization and value output, and **modules** — reusable sets of resources.`,
      },
      'terraform-state': {
        question: 'What is the state file and what is inside terraform.tfstate?',
        answer: `The **state file (\`terraform.tfstate\`)** is a JSON file where Terraform keeps its **map of correspondence** between the resources in your code and the **real objects** in the cloud. It's Terraform's memory of what it has created.

What's inside: the list of managed resources, their **real identifiers** (e.g., an EC2 instance id), current attribute values, metadata and dependencies, a version, and sometimes **sensitive data** (passwords, keys that ended up in attributes).

Why it's needed:

- **code ↔ reality mapping** — from a resource's name in code, Terraform knows which specific cloud object corresponds to it;
- **plan computation** — it compares the *desired* (code) with the *current* (state) and *real* (refresh) state to determine what to create/change/delete;
- **performance** — it caches attributes to avoid querying the API for every resource;
- it stores dependencies for the correct order of operations.

An important consequence: state is a **critical and sensitive** artifact. It must not be edited by hand (there are \`terraform state\` commands and \`import\` for changes), and because of the secrets inside it must be stored **securely** (an encrypted remote backend), not in git.`,
      },
      'terraform-remote-state': {
        question: 'Why can\'t you store state locally in production? How does remote state work?',
        answer: `By default state lives **locally** in \`terraform.tfstate\`. For team/production work this is bad:

- **no shared access** — everyone has their own copy of state, one person's changes aren't visible to others, and the state diverges;
- **risk of loss** — a file on a laptop can be deleted/lost, and without state Terraform "forgets" about the created infrastructure;
- **secrets** — state contains sensitive data, and a local file leaks easily (and shouldn't go into git);
- **no locking** — simultaneous \`apply\` by different people will corrupt the state.

**Remote state (a remote backend)** solves this — state is stored in a shared remote store:

- **a single source of truth** — everyone works with one state;
- **reliability and encryption** — a store with versioning and encryption (e.g., S3 with versions);
- **locking** — prevents simultaneous changes (see state locking);
- **access separation** — permissions to the backend via IAM.

It's configured with a \`backend\` block. A popular option is **AWS S3 (state storage) + DynamoDB (locking)**; also Terraform Cloud, GCS, Azure Blob, Consul. When switching to a remote backend, Terraform offers to **migrate** the existing state into it.`,
      },
      'terraform-state-locking': {
        question: 'What is state locking and why is it needed?',
        answer: `**State locking** is a mechanism that prevents **two operations from simultaneously** modifying the same state. Before \`apply\` (and other changing commands) Terraform **acquires a lock**, and releases it on completion.

Why: if two people (or two CI jobs) run \`apply\` at the same time, they'll write to one state in parallel — leading to **state corruption** and desynchronization with the real infrastructure (duplicate resources, "lost" objects, conflicting changes). The lock serializes such operations: the second \`apply\` **waits** for release or fails with a lock message.

How it's implemented — depends on the backend:

- **S3 + DynamoDB** — state lives in **S3**, and the lock is a "lock" record in a **DynamoDB** table (its strong consistency guarantees that only one can acquire the lock); this is the classic combination for AWS;
- Terraform Cloud, Consul, and others have built-in locking.

The local backend provides no locking between machines — another reason not to use it in a team. If a process crashed and left a "stuck" lock, it can be removed with \`terraform force-unlock\` (carefully, after making sure no one is working).`,
      },
      'terraform-commands': {
        question: 'What do the plan, apply, destroy, and refresh commands do?',
        answer: `The main commands of the Terraform workflow:

- **\`terraform init\`** — initialization: downloads providers and modules, configures the backend. Run first and after changing providers/backend.
- **\`terraform plan\`** — a **dry run**: compares the desired state (code) with the current (state) and real state, and shows what will be **created / changed / destroyed**, without changing anything. A key step for review before applying.
- **\`terraform apply\`** — **applies** the changes, bringing the infrastructure in line with the code (by default it first shows the plan and asks for confirmation). Updates the state.
- **\`terraform destroy\`** — **destroys all** infrastructure managed by this configuration (essentially an apply toward a "nothing" target state). Used carefully, often for temporary/test environments.
- **\`terraform refresh\`** (now \`apply -refresh-only\`) — synchronizes the **state** with the **real** state in the cloud (updates attributes if something was changed manually outside Terraform), without touching the infrastructure itself. By default refresh is implicitly performed within \`plan\`/\`apply\` too.

The typical flow: \`init\` → \`plan\` (review the diff) → \`apply\` (apply it). \`fmt\` and \`validate\` help format and check the configuration.`,
      },
    },
  },
  'clean-code': {
    title: 'Clean Code',
    description: 'Clean Code and Effective Java: naming, functions, exceptions, immutability, best practices',
    questions: {
      'what-is-clean-code': {
        question: 'What is clean code and why does it matter?',
        answer: `**Clean code** is code that is **easy to read, understand, and change** for other people (and for you six months later). The key idea: code is read **far more often** than it's written, so you should optimize for reading.

Why it matters:

- most of a software's life is **maintenance** — reading and editing, not the first writing;
- dirty code slows the team down: every change is risky and requires "excavation";
- **technical debt** accumulates — "we'll fix it later" turns into a system nobody dares to touch.

Signs of clean code: meaningful names, small functions with a single task, minimal duplication, explicit error handling, no "clever" tangled code, readability over brevity.

The reference sources: **"Clean Code" (Robert Martin)** — about readability and structure at the level of names/functions/classes, and **"Effective Java" (Joshua Bloch)** — about Java-specific idioms and best practices (immutability, generics, exceptions). Both complement the **SOLID/DRY/KISS** principles (see the "Design Patterns" section): SOLID is about structure, clean code is about everyday readability.`,
      },
      'clean-naming': {
        question: 'What makes a good name in code?',
        answer: `A name should **fully reveal its meaning** — what it is and why — so you can understand it without comments or looking at the implementation. A good name answers: why this exists, what it does, how it's used.

Rules:

- **intention-revealing names:** \`elapsedTimeInDays\` instead of \`d\`; \`getActiveUsers()\` instead of \`getList()\`;
- **avoid "noise" words** with no meaning: \`data\`, \`info\`, \`tmp\`, \`obj\`, \`value\`, and vague \`manager\`, \`handler\`, \`processor\` — they don't say *what* exactly is done;
- **pronounceable and searchable** names (not \`genymdhms\`), without "Hungarian notation" or extra prefixes;
- **classes are nouns** (\`Order\`, \`UserRepository\`), **methods are verbs** (\`save\`, \`calculateTotal\`, \`isValid\`);
- one concept — **one word** across the whole project (don't mix \`get\`/\`fetch\`/\`retrieve\` for the same thing);
- name length matches the scope: short for a loop counter, spelled out for a class field.

The point: code should read like clear prose. If understanding a variable requires a comment — you usually just need a **better name**.`,
      },
      'clean-functions': {
        question: 'What requirements should a good function (method) meet?',
        answer: `The main principles (from "Clean Code"):

- **Small.** A function should be short — aim for a few lines (say 5–20), fitting on the screen in full. A large function almost always does several things.
- **One task.** A function should do **one thing well**. If you can meaningfully split it into subfunctions with different names — it's doing more than one thing.
- **One level of abstraction.** Inside a function, don't mix high-level steps (\`processOrder()\`) with low-level details (bit operations, string handling) — it should read as a coherent story at one level.
- **Few arguments.** The ideal is 0–2, at most ~3. Many parameters complicate calling and testing; several related parameters are better combined into an object. A **boolean flag parameter** is a sign the function does two things (better split into two methods).
- **No surprising side effects.** The name should honestly reflect everything the method does; hidden state changes are a source of bugs.
- **Command-Query Separation** — a method either **changes** state (a command, usually \`void\`) or **returns** data (a query), but not both at once.

Result: small, honestly named functions with one level of abstraction read top-down like a table of contents.`,
      },
      'clean-comments': {
        question: 'When are comments needed, and when are they redundant?',
        answer: `The main principle: **a comment explains "why," not "what."** What the code does should be shown by **the code itself** (through good names and structure), not by a comment retelling it.

**Bad (redundant) comments:**

- duplicate the code: \`i++; // increment i\` — noise;
- **commented-out code** — it should be deleted (history is in git), not kept;
- **stale** comments that have diverged from the code — worse than none: they lie;
- comments as a "crutch" for bad code: instead of commenting an unclear fragment, it's better to **rewrite/rename** it.

**Useful comments:**

- explaining the **intent and reason** for a decision ("why this way, not the obvious one");
- warning about consequences/non-obvious constraints (thread safety, call order, working around a library bug);
- **TODO/FIXME** with context;
- public API documentation (**Javadoc**) — the method's contract for external consumers;
- explaining a complex formula/regex/algorithm.

Rule: first try to express the thought in **code** (a variable/method name, extracting a function), and only what the code cannot express (the reason, the context) — in a comment.`,
      },
      'clean-error-handling': {
        question: 'How should you handle errors: exceptions or codes/flags?',
        answer: `Rule: **use exceptions, not return codes, \`null\`, or boolean flags** to signal errors.

Why exceptions are better than flags/\`null\`:

- **a clean main flow** — the logic doesn't drown in \`if (result == null) ...\` checks after every call; error handling is separated from business logic;
- **an error can't be silently ignored** — an uncaught exception propagates, whereas a forgotten return-code check is easy to miss;
- **\`null\` as an "error"** leads to a \`NullPointerException\` in an unexpected place; for "the value may be absent," use \`Optional\`, and for an error — an exception.

How to throw and catch correctly:

- **meaningful, domain exceptions** (\`InsufficientFundsException\`), not a generic \`RuntimeException\` — the type makes clear what happened;
- a message with **context** (what went wrong and with what data);
- **don't "swallow"** exceptions (\`catch (Exception e) {}\`) — at least log/rethrow;
- catch an exception **at the level where you can do something about it**, not immediately; don't use exceptions for **normal** control flow (they're expensive and confusing);
- release resources via **try-with-resources**.

On checked vs unchecked: the modern style more often prefers unchecked (\`RuntimeException\`) for programming errors, leaving checked for recoverable situations.`,
      },
      'clean-no-duplication': {
        question: 'Why is code duplication bad, and must it always be removed?',
        answer: `**Duplication** is one of the main enemies of maintainability and the essence of the **DRY (Don't Repeat Yourself)** principle: every piece of **knowledge** should have a single authoritative representation.

Why it's harmful:

- when the logic changes, you must fix it in **all copies** — it's easy to miss one and get inconsistency and a bug;
- it bloats the code and complicates reading;
- copies **drift apart** over time, and it becomes unclear which is "correct."

It's removed by extracting the common part into a method, class, configuration, or template.

**But not fanatically.** Important caveats:

- DRY is about unity of **knowledge**, not matching lines of text: two pieces of code that *currently* look the same but express **different** business rules and will change independently should **not** be merged — otherwise you get false coupling (premature abstraction is often worse than duplication);
- sometimes a little duplication **for readability** is justified — don't build a complex abstraction just to remove a couple of similar lines;
- the "rule of three": tolerate the first repetition, but on the third appearance it's worth extracting the common part.

Bottom line: remove duplication of **knowledge**, but don't confuse it with superficial code similarity, and don't sacrifice clarity for formal DRY.`,
      },
      'minimize-mutability': {
        question: 'Why should you minimize mutability (immutability)? (Effective Java)',
        answer: `Advice from "Effective Java": **prefer immutable objects** and generally minimize mutability — make fields \`final\` and classes immutable where possible.

Advantages of immutable objects:

- **thread safety "for free"** — an immutable object can be freely shared between threads without synchronization (there's nothing for a race to corrupt);
- **easy to reason about** — state is set once at creation and never changes; less "who changed this and when";
- **safe as \`HashMap\` keys** / \`HashSet\` elements — their hash won't "drift" after being added;
- **reliable invariants** — the object is always in a valid state, no need to guard against external modification;
- convenient to cache and reuse.

How to do it:

- **\`final\`** fields, no setters; the value only via the constructor;
- defensive copying of mutable fields (collections, dates) on input and output;
- in Java — a **\`record\`** for immutable data carriers;
- fewer setters = fewer states = fewer bugs.

The cost: frequent "changes" create new objects (GC load). The compromise — mutable "builders" (\`StringBuilder\`, the Builder pattern) for construction, with an immutable result. The general rule: make a class immutable unless there's a compelling reason not to; otherwise minimize mutability.`,
      },
      'optional-and-streams': {
        question: 'How do you use Optional and the Stream API well? (Effective Java)',
        answer: `**Optional** and **Stream** are powerful tools, but they have rules for appropriate use.

**Optional** — a way to explicitly express "the value may be absent" instead of returning \`null\`:

- use it as a method's **return value** when it may not find a result (\`Optional<User> findById(...)\`) — the caller is forced to handle absence;
- **do not** use \`Optional\` for **fields** and method **parameters** (extra wrappers, overhead) — it wasn't designed for that;
- don't wrap collections in \`Optional\` — return an empty collection;
- extract the value safely: \`orElse\`, \`orElseGet\`, \`map\`, \`ifPresent\` — not \`.get()\` without a check (that's the same as \`null\`, just differently);
- for primitives — \`OptionalInt\`/\`OptionalLong\`.

**Stream API:**

- excellent for **data transformations** (filter/map/reduce/collect) — readable and declarative;
- **don't overdo it**: overly long/nested streams read worse than a plain loop — choose by readability, not "because it's trendy";
- functions in the pipeline should be **side-effect-free** (especially important for parallel streams); don't mutate external state in \`forEach\`;
- prefer \`collect(...)\` for gathering the result over mutable accumulators in lambdas.

Rule: both are for **expressiveness and safety**; apply them where they make the code **clearer**, not more complex.`,
      },
      'money-bigdecimal': {
        question: 'Why can\'t you use float/double for money, and what do you use instead?',
        answer: `\`float\` and \`double\` are **binary** floating-point numbers: they **cannot exactly represent** many decimal fractions (e.g., 0.1). The classic example: \`0.1 + 0.2\` gives \`0.30000000000000004\`. For money this is unacceptable — rounding errors accumulate, sums "don't add up," and discrepancies of cents arise that are critical in finance.

What to use:

- **\`BigDecimal\`** — an arbitrary-precision number with a **decimal** representation, without loss of precision. Be sure to:
  - create it from a **string** or via \`BigDecimal.valueOf(...)\`, **not** from a \`double\` (\`new BigDecimal(0.1)\` introduces the same binary error);
  - explicitly set **rounding** (\`setScale(2, RoundingMode.HALF_UP)\`) and the scale for the currency;
  - compare via \`compareTo\` (not \`equals\`, which considers scale: \`2.0\` ≠ \`2.00\`).
- even better — a dedicated domain type **\`Money\`** (amount + currency) that encapsulates rounding rules and forbids adding different currencies. Amounts are often stored as **minor units in an integer** (\`long\` of cents) for speed, but with careful scale control.

In short: money is an **exact decimal** quantity, so use \`BigDecimal\`/\`Money\`; \`double\` is only for approximate scientific/engineering calculations.`,
      },
      'domain-return-types': {
        question: 'Why is it better to return void or a domain object rather than flags? (Effective Java)',
        answer: `The idea: an operation's result should be **self-documenting and type-safe**. A method should be designed to return either **\`void\`** (when it's a command with no result) or a meaningful **domain result object** (e.g., \`TransferResult\`), rather than "raw" \`boolean\`/\`int\` codes or \`null\`.

Why boolean/numeric flags are poor as a result:

- **opaque** — what does \`false\` mean? "Failed," "already existed," "no permission"? The caller guesses;
- information is lost — a single \`boolean\` can't convey *why* and *what* details;
- it's easy to **ignore** the returned code and not handle the error.

A domain result object:

- **explicitly names** the outcome (\`TransferResult\` with fields: status, operation id, message) — the code becomes self-documenting;
- extensible — you can add details without breaking the signature;
- combined with exceptions: **normal** outcomes via a result/value, **erroneous/exceptional** ones via domain exceptions (see the error-handling question).

Related to the **Command-Query Separation** principle: commands (change state) are usually \`void\`, queries return data. And when an operation's result matters — return an **expressive type**, not an anonymous flag. This makes the API clearer and safer to use.`,
      },
    },
  },
};

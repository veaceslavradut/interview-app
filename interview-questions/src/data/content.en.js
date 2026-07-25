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
};

// Английские переводы: jvm
export const jvm = {
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
  };

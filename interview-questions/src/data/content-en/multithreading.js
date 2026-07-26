// Английские переводы: multithreading
export const multithreading = {
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
  };

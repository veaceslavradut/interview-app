// Английский перевод банка квиза: multithreading. Порядок вариантов и опций — как в RU.
export const multithreading = {
  'thread-creation': [
    {
      question: 'What ways are there to create a thread in Java?',
      options: [
        'Extend Thread, implement Runnable/Callable, use an ExecutorService',
        'Only by extending the Thread class',
        'By calling System.createThread()',
        'By putting @Async on any method without extra infrastructure',
      ],
    },
    {
      question: 'How does Callable differ from Runnable?',
      options: [
        'Callable returns a result and can throw checked exceptions; Runnable returns nothing',
        'Runnable returns a Future, and Callable does not',
        'Callable runs only in the main thread',
        'No difference — they are synonyms',
      ],
    },
  ],
  'synchronized': [
    {
      question: 'What does the synchronized keyword provide?',
      options: [
        'Mutual exclusion: an object’s monitor can be held by only one thread at a time',
        'Parallel execution of a method by several threads',
        'Automatic creation of a new thread for the method',
        'Speed-up of the method by caching its result',
      ],
    },
    {
      question: 'On which monitor does a static synchronized method synchronize?',
      options: [
        'On the Class object of that class',
        'On the this instance',
        'On the application’s main thread',
        'Static methods cannot be synchronized',
      ],
    },
  ],
  'volatile': [
    {
      question: 'What does the volatile keyword guarantee?',
      options: [
        'Visibility of a variable’s changes to all threads: reads/writes go to main memory, without per-thread caching',
        'Atomicity of any operations on the variable, including i++',
        'That the variable cannot be changed after initialization',
        'That the variable will be collected by the GC first',
      ],
    },
    {
      question: 'Why does volatile NOT make the operation counter++ thread-safe?',
      options: [
        'Increment is a non-atomic read-modify-write sequence, and threads can overwrite each other’s results',
        'volatile disables writing to the variable',
        'volatile works only with the boolean type',
        'It does — volatile fully solves the increment problem',
      ],
    },
  ],
  'deadlock': [
    {
      question: 'What is a deadlock?',
      options: [
        'A situation where threads wait forever for locks held by one another',
        'A situation where a thread finished with an unhandled exception',
        'Overflow of a thread pool’s task queue',
        'Overly long garbage collection that stops the application',
      ],
    },
    {
      question: 'What is a common way to prevent a deadlock?',
      options: [
        'Always acquire locks in the same global order',
        'Use as many synchronized blocks as possible',
        'Increase the number of threads in the pool',
        'Call System.gc() before acquiring a lock',
      ],
    },
  ],
  'executor-service': [
    {
      question: 'What is ExecutorService for?',
      options: [
        'It manages a thread pool and task execution, sparing you from creating threads manually',
        'It replaces the garbage collector for threads',
        'It guarantees tasks run strictly in a single thread — always',
        'It is only for scheduling tasks on a timer',
      ],
    },
    {
      question: 'What does Executors.newFixedThreadPool(5) create?',
      options: [
        'A pool with a fixed number of 5 threads and a task queue',
        'A pool that creates a new thread for each task without limit',
        '5 separate one-thread pools',
        'A pool of 5 threads that shuts down after the first task',
      ],
    },
  ],
  'concurrent-collections': [
    {
      question: 'Why is ConcurrentHashMap better than Collections.synchronizedMap()?',
      options: [
        'Locks act at the segment/bucket level (and reads are nearly lock-free), not on the whole map — higher concurrency',
        'ConcurrentHashMap stores data in sorted order',
        'ConcurrentHashMap allows null keys, and synchronizedMap does not',
        'No difference — both lock the entire map',
      ],
    },
    {
      question: 'Which collection suits a “read often, write rarely” scenario in a multithreaded environment?',
      options: [
        'CopyOnWriteArrayList — a write creates a copy of the array, reads are lock-free',
        'An ArrayList wrapped in synchronized blocks on every read',
        'LinkedList',
        'HashMap without synchronization',
      ],
    },
  ],
  'wait-notify-sleep': [
    {
      question: 'How does wait() differ from sleep()?',
      options: [
        'wait() releases the monitor and waits for notify(); sleep() holds the monitor and just pauses the thread for a while',
        'sleep() releases the monitor, and wait() does not',
        'wait() can be called anywhere, and sleep() only in a synchronized block',
        'They are the same methods of different classes',
      ],
    },
    {
      question: 'Where can wait(), notify(), notifyAll() be called?',
      options: [
        'Only inside a synchronized block/method on the same monitor, otherwise IllegalMonitorStateException',
        'Anywhere in the program without restriction',
        'Only in the class constructor',
        'Only in static methods',
      ],
    },
  ],
  'threadlocal': [
    {
      question: 'What is ThreadLocal?',
      options: [
        'A variable for which each thread has its own independent copy of the value',
        'A variable accessible only to the main thread',
        'A local variable inside the run() method',
        'A variable automatically synchronized between threads',
      ],
    },
    {
      question: 'What danger is associated with ThreadLocal in thread pools?',
      options: [
        'Threads are reused, and a value not cleared via remove() “leaks” into the next task',
        'ThreadLocal cannot be used with pools at all',
        'A ThreadLocal value is automatically passed to all threads in the pool',
        'ThreadLocal blocks all pool threads on read',
      ],
    },
  ],
  'completablefuture': [
    {
      question: 'What is CompletableFuture?',
      options: [
        'An API for asynchronous computations with composition, processing chains, and error handling',
        'A replacement for the synchronized keyword',
        'A thread that cannot be interrupted',
        'A collection for storing thread results',
      ],
    },
    {
      question: 'How does thenCompose differ from thenApply?',
      options: [
        'thenApply transforms a value (like map); thenCompose unwraps a nested CompletableFuture (like flatMap)',
        'thenApply runs asynchronously, and thenCompose synchronously',
        'thenCompose works only with exceptions',
        'No difference — the methods are interchangeable',
      ],
    },
  ],
  'concurrency-vs-parallelism': [
    {
      question: 'What is the difference between concurrency and parallelism?',
      options: [
        'Concurrency is managing many tasks by interleaving; parallelism is physically simultaneous execution on different cores',
        'They are the same thing',
        'Concurrency requires several cores, parallelism one',
        'Parallelism is possible only within a single thread',
      ],
    },
    {
      question: 'What do threads of one process share?',
      options: [
        'Shared memory (the heap), but each has its own stack and program counter',
        'Everything, including stacks',
        'Nothing — they are fully isolated',
        'Only the program counter',
      ],
    },
  ],
  'daemon-threads': [
    {
      question: 'How does a daemon thread differ from a user thread?',
      options: [
        'The JVM exits as soon as only daemon threads remain, without waiting for them',
        'A daemon thread keeps the JVM alive longer than a user thread',
        'A daemon thread cannot be created programmatically',
        'A daemon thread is always high-priority',
      ],
    },
    {
      question: 'Why shouldn’t you do critical resource work in a daemon thread?',
      options: [
        'The JVM kills it without waiting — finally blocks may not run',
        'A daemon thread has no access to the file system',
        'A daemon thread cannot open connections',
        'A daemon thread runs slower',
      ],
    },
  ],
  'java-memory-model': [
    {
      question: 'What does the Java Memory Model (JMM) define?',
      options: [
        'How and when one thread’s memory changes become visible to others, and which reorderings are allowed',
        'The size of the heap and stack',
        'The garbage-collection algorithm',
        'The bytecode format',
      ],
    },
    {
      question: 'What does the happens-before relationship guarantee?',
      options: [
        'The result of the first action is visible to the second and cannot be reordered after it',
        'Both actions run simultaneously',
        'The actions run in random order',
        'The second action never runs',
      ],
    },
    {
      question: 'Through what is correct visibility of changes between threads achieved?',
      options: [
        'volatile, synchronized, java.util.concurrent (they establish happens-before)',
        'An ordinary shared field with no modifiers',
        'A method’s local variables',
        'Raising a thread’s priority',
      ],
    },
  ],
  'thread-safety-problems': [
    {
      question: 'What is a livelock?',
      options: [
        'Threads are not blocked but endlessly react to each other and make no progress',
        'Threads wait forever for each other’s resources in a circle',
        'A thread gets no CPU time',
        'The result depends on the order in which threads run',
      ],
    },
    {
      question: 'How does a deadlock differ from starvation?',
      options: [
        'Deadlock is circular mutual waiting; starvation is a thread not getting a resource because of others',
        'They are synonyms',
        'Deadlock is fixed with priorities, starvation cannot be eliminated',
        'Starvation blocks all threads, deadlock only one',
      ],
    },
    {
      question: 'How do you prevent a deadlock?',
      options: [
        'A single lock-acquisition order and timeouts (tryLock)',
        'Increase the number of threads',
        'Disable synchronization',
        'Use only daemon threads',
      ],
    },
  ],
  'reentrantlock': [
    {
      question: 'What advantage does ReentrantLock give over synchronized?',
      options: [
        'tryLock with a timeout, interruptibility, fairness, and multiple Conditions',
        'Automatic unlocking without finally',
        'Shorter syntax',
        'Working without acquiring a lock',
      ],
    },
    {
      question: 'Where must you call unlock() on a ReentrantLock?',
      options: ['In a finally block', 'At the start of the method', 'In a catch block', 'Unlocking is not required'],
    },
  ],
  'atomic-cas': [
    {
      question: 'What are atomic classes like AtomicInteger based on?',
      options: [
        'On CAS (Compare-And-Swap) — a lock-free atomic “compare and swap” instruction',
        'On synchronized inside each method',
        'On locking the whole JVM',
        'On a separate coordinator thread',
      ],
    },
    {
      question: 'What is the drawback of CAS under high contention?',
      options: [
        'Many wasted loop spins (LongAdder is a better fit)',
        'A deadlock is possible',
        'Atomicity is lost',
        'Manual unlocking is required',
      ],
    },
  ],
  'semaphore-latch-barrier': [
    {
      question: 'What does a Semaphore limit?',
      options: [
        'The number of threads simultaneously accessing a resource (via permits)',
        'A thread’s execution time',
        'The size of the task queue',
        'The threads’ priority',
      ],
    },
    {
      question: 'How does CyclicBarrier differ from CountDownLatch?',
      options: [
        'CyclicBarrier is reusable and threads wait for each other; CountDownLatch is single-use',
        'CountDownLatch is reusable, CyclicBarrier is not',
        'They are completely identical',
        'CyclicBarrier limits access to a resource',
      ],
    },
  ],
  'forkjoinpool': [
    {
      question: 'What is work-stealing in ForkJoinPool?',
      options: [
        'A thread with an empty queue “steals” a task from the other end of a busy thread’s queue',
        'One thread runs all tasks in turn',
        'Tasks are split evenly in advance and never move',
        'The pool hands tasks to a shared blocking queue',
      ],
    },
    {
      question: 'What must you NOT do in ForkJoinPool tasks?',
      options: [
        'Block on I/O or a long sleep — it breaks work-stealing',
        'Split a task into subtasks',
        'Return a result via RecursiveTask',
        'Call fork() and join()',
      ],
    },
  ],
  'virtual-threads': [
    {
      question: 'How do virtual threads (Java 21) differ from platform threads?',
      options: [
        'Lightweight, managed by the JVM; there can be millions, and on blocking they detach from the carrier thread',
        'They are wrappers over OS threads with a large stack',
        'They speed up CPU-bound computations',
        'They must be pooled',
      ],
    },
    {
      question: 'What is the main benefit of virtual threads?',
      options: [
        'Simple blocking code with the scalability of async (a million tasks)',
        'Faster mathematical computations',
        'Doing away with synchronization entirely',
        'A smaller bytecode size',
      ],
    },
    {
      question: 'How are virtual threads recommended to be used?',
      options: [
        'Create one thread per task (do not pool them)',
        'Keep a fixed pool of a few',
        'Use them only for CPU-bound work',
        'Only as daemon threads',
      ],
    },
  ],
  'blockingqueue': [
    {
      question: 'How does a BlockingQueue behave on take() from an empty queue?',
      options: [
        'The thread blocks and waits until an element appears',
        'It returns null immediately',
        'It throws an exception',
        'It creates a new default element',
      ],
    },
    {
      question: 'For which pattern is BlockingQueue classically used?',
      options: [
        'Producer-consumer (with pacing/backpressure)',
        'Singleton',
        'Observer',
        'Inheritance',
      ],
    },
    {
      question: 'Which BlockingQueue implementation hands an element over “hand to hand” with no capacity?',
      options: ['SynchronousQueue', 'ArrayBlockingQueue', 'PriorityBlockingQueue', 'LinkedBlockingQueue'],
    },
  ],
};

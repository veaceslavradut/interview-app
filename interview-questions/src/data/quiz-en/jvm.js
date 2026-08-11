// Английский перевод банка квиза: jvm. Порядок вариантов и опций — как в RU.
export const jvm = {
  'what-is-jvm': [
    {
      question: 'What is the JVM?',
      options: [
        'A virtual machine that executes Java bytecode and provides platform independence',
        'A compiler that turns Java source into machine code for a specific OS',
        'A text editor for writing Java programs',
        'The library of standard Java classes',
      ],
    },
    {
      question: 'What lets Java programs run on different platforms without recompilation?',
      options: [
        'The code is compiled into bytecode, which is executed by a JVM implemented for each platform',
        'The javac compiler generates machine code for all operating systems at once',
        'Java programs are interpreted directly from source code',
        'Operating systems have built-in support for Java syntax',
      ],
    },
  ],
  'memory-areas': [
    {
      question: 'In which JVM memory area are created objects stored?',
      options: ['In the Heap', 'In the thread Stack', 'In the Program Counter register', 'In the Metaspace area'],
    },
    {
      question: 'Which memory areas does the JVM allocate?',
      options: [
        'Heap, thread stacks, Metaspace, PC registers, native method stacks',
        'Only Heap and Stack',
        'RAM, the hard disk, and the CPU cache',
        'Only the static-variables area',
      ],
    },
  ],
  'garbage-collection': [
    {
      question: 'What is Garbage Collection?',
      options: [
        'Automatic freeing of memory occupied by objects unreachable via references',
        'Manual deletion of objects by calling a delete() method',
        'Cleaning up an application’s temporary files on disk',
        'Compressing jar archives when building the project',
      ],
    },
    {
      question: 'Which objects does the garbage collector remove?',
      options: [
        'Objects unreachable via reference chains from GC roots',
        'All objects older than a certain age',
        'Objects whose finalize() method was called',
        'Objects annotated with @Deprecated',
      ],
    },
  ],
  'classloaders': [
    {
      question: 'Which standard class loaders exist in the JVM?',
      options: [
        'Bootstrap, Platform (Extension), Application (System)',
        'Compiler, Interpreter, Optimizer',
        'Heap, Stack, Metaspace',
        'Primary, Secondary, Backup',
      ],
    },
    {
      question: 'How does the class-loader delegation model work?',
      options: [
        'A loader first delegates loading to its parent loader and only then tries to load the class itself',
        'A loader loads the class itself first and, on failure, passes it to the parent',
        'All loaders load the class simultaneously; the fastest wins',
        'Each class is loaded by all loaders in turn',
      ],
    },
  ],
  'jit': [
    {
      question: 'What is JIT compilation?',
      options: [
        'Compiling “hot” bytecode sections into native machine code while the program runs',
        'Compiling source into bytecode with the javac command',
        'Pre-compiling the whole application into machine code before launch',
        'Real-time syntax checking of code in the IDE',
      ],
    },
    {
      question: 'Why does the JVM use a JIT compiler?',
      options: [
        'To speed up frequently called code by compiling it into optimised native code',
        'To reduce the size of the application’s jar file',
        'To ensure backward compatibility with older Java versions',
        'To automatically fix bugs in the bytecode',
      ],
    },
  ],
  'oom-types': [
    {
      question: 'What does the java.lang.OutOfMemoryError: Java heap space error mean?',
      options: [
        'The heap doesn’t have enough memory to allocate a new object',
        'The call stack overflowed due to deep recursion',
        'The hard disk ran out of space',
        'The maximum number of open files was exceeded',
      ],
    },
    {
      question: 'Which error occurs when the JVM spends almost all its time on GC with minimal result?',
      options: [
        'OutOfMemoryError: GC overhead limit exceeded',
        'StackOverflowError',
        'ClassNotFoundException',
        'ConcurrentModificationException',
      ],
    },
  ],
  'metaspace-permgen': [
    {
      question: 'Where is Metaspace located (since Java 8)?',
      options: [
        'In native (off-heap) memory; it grows automatically',
        'In the heap with a fixed size',
        'In the thread stack',
        'In the String Pool',
      ],
    },
    {
      question: 'What do PermGen and Metaspace store?',
      options: [
        'Class metadata (class structure, methods, the constant pool)',
        'Instances of the application’s objects',
        'Methods’ local variables',
        'Open network connections',
      ],
    },
  ],
  'gc-roots-reachability': [
    {
      question: 'By what criterion does the GC decide an object is garbage?',
      options: [
        'The object is unreachable via references from GC Roots',
        'There is no single reference to the object in the code',
        'The object hasn’t been used for over 5 minutes',
        'The object is annotated with @Deprecated',
      ],
    },
    {
      question: 'Which of the following is a GC Root?',
      options: [
        'Classes’ static fields and local variables in thread stacks',
        'Any object in the heap',
        'Strings in the String Pool',
        'Elements inside an ArrayList',
      ],
    },
    {
      question: 'Will the GC collect two garbage objects that reference each other (a cycle)?',
      options: [
        'Yes — they are unreachable from GC Roots',
        'No — the mutual references keep them forever',
        'Only when System.gc() is called',
        'Only if they implement Serializable',
      ],
    },
  ],
  'gc-algorithms': [
    {
      question: 'Which garbage collector is the default since Java 9?',
      options: ['G1 (Garbage-First)', 'Serial GC', 'CMS', 'Parallel GC'],
    },
    {
      question: 'Which collectors give millisecond pauses even on very large heaps?',
      options: ['ZGC and Shenandoah', 'Serial GC', 'Parallel GC', 'CMS'],
    },
    {
      question: 'What is Parallel GC (the throughput collector) optimised for?',
      options: [
        'Maximum throughput at the cost of noticeable pauses',
        'Minimal pauses at any cost',
        'Minimal memory consumption',
        'Concurrent collection with no stop-the-world',
      ],
    },
  ],
  'g1-gc': [
    {
      question: 'How does G1 GC organise the heap?',
      options: [
        'It divides it into many equal regions (Eden/Survivor/Old/Humongous)',
        'It keeps the whole heap as one contiguous area',
        'It doesn’t use generations at all',
        'It places objects only in native memory',
      ],
    },
    {
      question: 'What does the target pause -XX:MaxGCPauseMillis mean in G1?',
      options: [
        'G1 collects as many regions as it can within the allotted time',
        'It fully disables stop-the-world pauses',
        'It sets the region size',
        'It limits the heap size',
      ],
    },
  ],
  'memory-leaks': [
    {
      question: 'Why is a memory leak possible in Java even with a GC?',
      options: [
        'Unneeded objects remain reachable from GC Roots, so the GC does not remove them',
        'The GC periodically breaks',
        'Primitives are not collected by the collector',
        'Leaks are impossible in Java',
      ],
    },
    {
      question: 'What is a common cause of a memory leak?',
      options: [
        'ThreadLocal in a thread pool without remove(), and objects in static collections',
        'Using try-with-resources',
        'Weak references (WeakReference)',
        'Local variables in a method',
      ],
    },
    {
      question: 'What do you analyse a heap dump with when hunting a leak?',
      options: ['Eclipse MAT / VisualVM', 'javac', 'git bisect', 'EXPLAIN ANALYZE'],
    },
  ],
};

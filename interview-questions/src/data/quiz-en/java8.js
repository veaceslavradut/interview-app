// Английский перевод банка квиза: java8. Порядок вариантов и опций — как в RU.
export const java8 = {
  'java8-features': [
    {
      question: 'Which key features appeared in Java 8?',
      options: [
        'Lambda expressions, the Stream API, Optional, default methods in interfaces, java.time',
        'Modules (JPMS), var, records',
        'Generics, autoboxing, enum',
        'Virtual threads and pattern matching',
      ],
    },
    {
      question: 'Which of the following did NOT appear in Java 8?',
      options: [
        'The var keyword for local variables',
        'Lambda expressions',
        'The Stream API',
        'The Optional class',
      ],
    },
  ],
  'lambda': [
    {
      question: 'What is a lambda expression?',
      options: [
        'A concise way to implement a functional interface — an anonymous function',
        'A way to declare an anonymous class with several methods',
        'A mechanism for multithreaded code execution',
        'A special kind of loop for collections',
      ],
    },
    {
      question: 'Where can a lambda expression be assigned?',
      options: [
        'To a variable of a functional-interface type (with a single abstract method)',
        'To a variable of any interface',
        'Only to a variable of type Object',
        'Only to the parameter of a forEach method',
      ],
    },
  ],
  'stream-api': [
    {
      question: 'What is the Stream API?',
      options: [
        'An API for declaratively processing sequences of data through a pipeline of operations',
        'An API for reading and writing files (I/O streams)',
        'An API for transmitting data over the network',
        'An API for managing threads of execution (Thread)',
      ],
    },
    {
      question: 'How do intermediate stream operations differ from terminal ones?',
      options: [
        'Intermediate (filter, map) are lazy and return a stream; terminal (collect, forEach) start the pipeline and end the stream',
        'Intermediate run immediately, terminal — lazily',
        'Intermediate operations can be called only once',
        'Terminal operations return a new stream for further processing',
      ],
    },
  ],
  'optional': [
    {
      question: 'What is the Optional class for?',
      options: [
        'A container that explicitly expresses a possibly-absent value and helps avoid NullPointerException',
        'A wrapper for optional method parameters',
        'A cache for frequently used objects',
        'A mechanism for lazy field initialization',
      ],
    },
    {
      question: 'How do you safely get a value from an Optional with a default?',
      options: [
        'optional.orElse(defaultValue)',
        'optional.get() — it returns the default itself',
        'optional.value()',
        '(String) optional — via a type cast',
      ],
    },
  ],
  'functional-interfaces': [
    {
      question: 'What is a functional interface?',
      options: [
        'An interface with exactly one abstract method; it can be marked @FunctionalInterface',
        'An interface all of whose methods have a default implementation',
        'An interface with no methods at all',
        'An interface that can be instantiated with the new operator',
      ],
    },
    {
      question: 'Which standard functional interface takes no arguments and returns a value?',
      options: ['Supplier<T>', 'Consumer<T>', 'Predicate<T>', 'Function<T, R>'],
    },
  ],
  'default-methods': [
    {
      question: 'Why were default methods added to interfaces?',
      options: [
        'To evolve interface APIs without breaking existing implementing classes',
        'So interfaces can hold state',
        'To forbid classes from overriding interface methods',
        'So interfaces can be instantiated directly',
      ],
    },
    {
      question: 'What must a class implementing two interfaces with the same default method do?',
      options: [
        'Override the conflicting method (you can delegate via InterfaceName.super.method())',
        'Nothing — the compiler picks the first interface’s method',
        'Give up implementing one of the interfaces',
        'Mark the class with @SuppressWarnings',
      ],
    },
  ],
  'map-flatmap': [
    {
      question: 'How does flatMap differ from map in the Stream API?',
      options: [
        'map transforms each element 1:1; flatMap flattens nested streams/collections into one flat stream',
        'flatMap is faster than map thanks to parallelism',
        'map changes the source collection, flatMap does not',
        'flatMap applies only to numeric streams',
      ],
    },
    {
      question: 'Which operation turns Stream<List<String>> into Stream<String>?',
      options: [
        'flatMap(List::stream)',
        'map(List::stream)',
        'filter(List::isEmpty)',
        'collect(Collectors.toList())',
      ],
    },
  ],
  'parallel-streams': [
    {
      question: 'Which thread pool does parallelStream() use by default?',
      options: [
        'The common ForkJoinPool.commonPool()',
        'A separate new thread for each element',
        'A pool created via Executors.newCachedThreadPool()',
        'The application’s main thread',
      ],
    },
    {
      question: 'When can a parallel stream do harm?',
      options: [
        'With small data volumes, blocking operations, or mutable shared state — the overhead and races outweigh the benefit',
        'A parallel stream is always faster than a sequential one',
        'Only when working with strings',
        'Only if the system has one CPU — otherwise there are no risks',
      ],
    },
  ],
  'stream-intermediate-terminal': [
    {
      question: 'How does an intermediate Stream operation differ from a terminal one?',
      options: [
        'Intermediate returns a new Stream and is lazy; terminal starts processing and returns a result',
        'Intermediate runs immediately, terminal is lazy',
        'Both change the source collection',
        'There is no difference between them',
      ],
    },
    {
      question: 'What is short-circuiting in the Stream API?',
      options: [
        'Operations like findFirst/anyMatch/limit can stop without processing the whole source',
        'Automatic parallelization of all operations',
        'Caching the stream result',
        'Changing the source collection in place',
      ],
    },
    {
      question: 'Can a Stream be reused after a terminal operation?',
      options: [
        'No — the stream is consumed and cannot be used again',
        'Yes, as many times as you like',
        'Only for intermediate operations',
        'Only in parallel mode',
      ],
    },
  ],
  'collectors': [
    {
      question: 'What does Collectors.groupingBy do?',
      options: [
        'Groups elements by a key into a Map<K, List<V>>',
        'Sorts elements in ascending order',
        'Removes duplicates from the stream',
        'Joins strings with a separator',
      ],
    },
    {
      question: 'What does Collectors.partitioningBy(predicate) return?',
      options: [
        'A Map<Boolean, List<V>> with keys true and false',
        'A list of two elements',
        'A Map<K, List<V>> by an arbitrary key',
        'A single reduced value',
      ],
    },
  ],
  'stream-reduce': [
    {
      question: 'What does reduce() do in the Stream API?',
      options: [
        'Folds the stream into a single result by applying an associative operation',
        'Filters elements by a condition',
        'Transforms each element',
        'Sorts the stream',
      ],
    },
    {
      question: 'Why does reduce need the form with an identity (start value)?',
      options: [
        'It provides a neutral value and returns T (for an empty stream — the identity itself)',
        'It makes the operation lazy',
        'It disables parallelism',
        'It guarantees element order',
      ],
    },
    {
      question: 'What is more efficient than reduce for a mutable reduction (collecting into a collection/StringBuilder)?',
      options: [
        'collect() — it doesn’t create a new object at each step',
        'reduce() is always more efficient',
        'forEach() with a shared list',
        'map() without a terminal operation',
      ],
    },
  ],
};

// Английские переводы: java8
export const java8 = {
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
  };

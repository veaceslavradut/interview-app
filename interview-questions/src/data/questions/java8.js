// Категория: java8
export const java8 = {
    id: 'java8',
    title: 'Java 8',
    icon: '🚀',
    description: 'Лямбды, стримы, функциональные интерфейсы',
    questions: [
      {
        id: 'java8-features',
        difficulty: 'easy',
        tags: ['basics'],
        related: ['lambda', 'stream-api'],
        question: 'Какие основные нововведения появились в Java 8?',
        answer: `Ключевые нововведения Java 8:

- **Лямбда-выражения** — компактный синтаксис анонимных функций: \`(a, b) -> a + b\`;
- **Stream API** — функциональная обработка коллекций (map/filter/reduce);
- **Функциональные интерфейсы** — \`@FunctionalInterface\`, пакет \`java.util.function\` (Function, Predicate, Consumer, Supplier);
- **Default и static методы в интерфейсах** — реализация по умолчанию;
- **Optional<T>** — контейнер для потенциально отсутствующего значения;
- **Новый Date/Time API** (\`java.time\`) — LocalDate, LocalDateTime, ZonedDateTime, Duration;
- **Method references** — \`String::valueOf\`, \`System.out::println\`;
- **Nashorn** — JavaScript-движок;
- **Metaspace** вместо PermGen;
- **CompletableFuture** — асинхронное программирование.`,
      },
      {
        id: 'lambda',
        difficulty: 'easy',
        tags: ['lambda', 'functional'],
        related: ['functional-interfaces'],
        question: 'Что такое лямбда-выражения?',
        answer: `**Лямбда-выражение** — компактная запись анонимной функции, реализующей функциональный интерфейс (интерфейс с одним абстрактным методом).

Синтаксис:

\`\`\`java
// до Java 8
Runnable r = new Runnable() {
    public void run() { System.out.println("Hi"); }
};

// с Java 8
Runnable r = () -> System.out.println("Hi");

Comparator<String> cmp = (s1, s2) -> s1.length() - s2.length();
Function<Integer, Integer> square = x -> x * x;
\`\`\`

Особенности:

- лямбда может захватывать переменные из окружающего контекста, но только **effectively final**;
- \`this\` внутри лямбды ссылается на внешний класс (в отличие от анонимного класса);
- компилируется через \`invokedynamic\`, а не в отдельный класс.`,
      },
      {
        id: 'stream-api',
        difficulty: 'medium',
        tags: ['streams'],
        related: ['stream-intermediate-terminal', 'collectors'],
        question: 'Что такое Stream API? Какие бывают операции?',
        answer: `**Stream API** — средство функциональной обработки последовательностей данных.

**Промежуточные операции (lazy, возвращают Stream):**

- \`filter(Predicate)\` — фильтрация;
- \`map(Function)\` / \`flatMap\` — преобразование;
- \`sorted()\`, \`distinct()\`, \`limit(n)\`, \`skip(n)\`, \`peek()\`.

**Терминальные операции (запускают выполнение):**

- \`collect(Collectors.toList())\` — сбор в коллекцию;
- \`forEach\`, \`count\`, \`reduce\`;
- \`findFirst\`, \`findAny\`, \`anyMatch\`, \`allMatch\`, \`noneMatch\`;
- \`min\`, \`max\`, \`sum\` (для примитивных стримов).

\`\`\`java
List<String> names = users.stream()
    .filter(u -> u.getAge() > 18)
    .map(User::getName)
    .sorted()
    .collect(Collectors.toList());
\`\`\`

Ключевые свойства: стрим ленивый, одноразовый, не изменяет источник данных.`,
      },
      {
        id: 'optional',
        difficulty: 'easy',
        tags: ['optional'],
        related: [],
        question: 'Что такое Optional и зачем он нужен?',
        answer: `**Optional<T>** — контейнер, который может содержать значение или быть пустым. Создан для явного выражения «значение может отсутствовать» и борьбы с \`NullPointerException\`.

\`\`\`java
Optional<User> user = repository.findByName("John");

// плохо
if (user.isPresent()) { doSomething(user.get()); }

// хорошо
user.ifPresent(this::doSomething);
String name = user.map(User::getName).orElse("Unknown");
User u = user.orElseThrow(() -> new NotFoundException());
\`\`\`

Методы создания: \`Optional.of(value)\` (NPE при null), \`Optional.ofNullable(value)\`, \`Optional.empty()\`.

Best practices:

- использовать как **возвращаемый тип** методов;
- **не** использовать для полей класса и параметров методов;
- избегать \`get()\` без проверки;
- не оборачивать коллекции (возвращайте пустую коллекцию).`,
      },
      {
        id: 'functional-interfaces',
        difficulty: 'easy',
        tags: ['functional', 'lambda'],
        related: ['lambda'],
        question: 'Какие функциональные интерфейсы вы знаете?',
        answer: `**Функциональный интерфейс** — интерфейс с одним абстрактным методом (SAM). Аннотация \`@FunctionalInterface\` проверяет это на этапе компиляции.

Основные интерфейсы из \`java.util.function\`:

- **Function<T, R>** — принимает T, возвращает R: \`R apply(T t)\`;
- **Predicate<T>** — принимает T, возвращает boolean: \`boolean test(T t)\`;
- **Consumer<T>** — принимает T, ничего не возвращает: \`void accept(T t)\`;
- **Supplier<T>** — ничего не принимает, возвращает T: \`T get()\`;
- **UnaryOperator<T>** — Function<T, T>;
- **BinaryOperator<T>** — BiFunction<T, T, T>;
- **BiFunction<T, U, R>**, **BiPredicate<T, U>**, **BiConsumer<T, U>** — версии с двумя аргументами.

Также функциональными являются \`Runnable\`, \`Callable\`, \`Comparator\`.

Примитивные специализации: \`IntFunction\`, \`ToIntFunction\`, \`IntPredicate\` и т.д. — избегают автоупаковки.`,
      },
      {
        id: 'default-methods',
        difficulty: 'medium',
        tags: ['basics'],
        related: [],
        question: 'Что такое default-методы в интерфейсах?',
        answer: `**Default-метод** — метод интерфейса с реализацией по умолчанию (ключевое слово \`default\`). Появились в Java 8 для эволюции API без нарушения обратной совместимости (например, \`Collection.stream()\`).

\`\`\`java
interface Vehicle {
    default void start() {
        System.out.println("Starting vehicle...");
    }
}
\`\`\`

**Проблема ромба (diamond problem):** если класс реализует два интерфейса с одинаковым default-методом, компилятор требует явного переопределения:

\`\`\`java
class Car implements A, B {
    @Override
    public void start() {
        A.super.start(); // явный выбор реализации
    }
}
\`\`\`

Правила разрешения: класс всегда «выигрывает» у интерфейса; более конкретный интерфейс «выигрывает» у менее конкретного.`,
      },
      {
        id: 'map-flatmap',
        difficulty: 'medium',
        tags: ['streams'],
        related: ['stream-api'],
        question: 'В чем разница между map() и flatMap()?',
        answer: `**map()** — преобразует каждый элемент в один другой элемент (1 → 1):

\`\`\`java
Stream.of("a", "bb", "ccc")
    .map(String::length)      // Stream<Integer>: 1, 2, 3
\`\`\`

**flatMap()** — преобразует каждый элемент в **стрим** и «разворачивает» (склеивает) вложенные стримы в один (1 → 0..N):

\`\`\`java
List<List<Integer>> nested = List.of(List.of(1, 2), List.of(3, 4));

nested.stream()
    .map(List::stream)        // Stream<Stream<Integer>> — неудобно

nested.stream()
    .flatMap(List::stream)    // Stream<Integer>: 1, 2, 3, 4
    .collect(Collectors.toList());

// слова из предложений
sentences.stream()
    .flatMap(s -> Arrays.stream(s.split(" ")))
\`\`\`

Правило: если функция преобразования возвращает одиночное значение — \`map\`; если коллекцию/стрим/Optional — \`flatMap\`.

Аналогично у \`Optional\`: \`opt.map(f)\` даёт \`Optional<Optional<T>>\`, если f возвращает Optional — нужен \`flatMap\`. В реактивных библиотеках \`flatMap\` — асинхронная композиция операций.`,
      },
      {
        id: 'parallel-streams',
        difficulty: 'hard',
        tags: ['streams'],
        related: ['stream-api'],
        question: 'Что такое параллельные стримы и когда их стоит использовать?',
        answer: `**Параллельный стрим** разбивает данные на части и обрабатывает их в нескольких потоках через общий \`ForkJoinPool.commonPool()\` (размер = ядра CPU − 1).

\`\`\`java
list.parallelStream().filter(...).count();
stream.parallel()...
\`\`\`

**Когда оправданы:**

- большие объёмы данных (десятки/сотни тысяч элементов);
- CPU-ёмкая обработка каждого элемента;
- источник хорошо делится: \`ArrayList\`, массивы, \`IntStream.range\` (плохо: \`LinkedList\`, \`iterate\`);
- операции без состояния и побочных эффектов.

**Когда вредны:**

- I/O-операции внутри — блокируют общий пул для всего приложения;
- маленькие коллекции — накладные расходы на разбиение/слияние превышают выгоду;
- операции с общим изменяемым состоянием — гонки;
- важен порядок обработки (\`forEachOrdered\` убивает выигрыш).

Правило: по умолчанию — последовательный стрим; \`parallel()\` — только после измерений (JMH-бенчмарки).`,
      },
      {
        id: 'stream-intermediate-terminal',
        difficulty: 'medium',
        tags: ['streams'],
        related: ['stream-api'],
        question: 'Чем промежуточные операции Stream отличаются от терминальных? Что такое ленивость?',
        answer: `Операции Stream делятся на два вида:

- **Промежуточные (intermediate)** — возвращают **новый Stream**, что позволяет строить цепочки (\`filter\`, \`map\`, \`sorted\`, \`distinct\`, \`limit\`, \`peek\`). Они **ленивые** — не выполняются в момент вызова.
- **Терминальные (terminal)** — запускают обработку и возвращают результат или \`void\` (\`collect\`, \`forEach\`, \`reduce\`, \`count\`, \`findFirst\`, \`anyMatch\`). После терминальной операции стрим **израсходован** и повторно использован быть не может.

**Ленивость (lazy evaluation):** промежуточные операции не делают ничего, пока не вызвана терминальная. Тогда элементы проходят по конвейеру **по одному** (а не «вся коллекция через filter, потом вся через map»), что даёт оптимизации:

- **short-circuiting** — \`findFirst\`, \`anyMatch\`, \`limit\` могут остановиться, не обработав весь источник (важно и для бесконечных стримов, например \`Stream.iterate\`);
- **слияние операций (loop fusion)** — несколько промежуточных операций выполняются за один проход;
- пропуск ненужной работы.

Важно: Stream **не изменяет** исходную коллекцию и не хранит данные — он лишь описывает конвейер обработки.`,
      },
      {
        id: 'collectors',
        difficulty: 'medium',
        tags: ['streams', 'collectors'],
        related: ['stream-api'],
        question: 'Что такое Collectors? Как делать группировку и партиционирование?',
        answer: `**\`Collectors\`** — набор готовых «сборщиков» для терминальной операции \`collect()\`, превращающих поток в коллекцию или агрегат.

Частые сборщики:

- **в коллекцию:** \`toList()\`, \`toSet()\`, \`toMap(keyFn, valueFn)\` (осторожно с дублями ключей — нужен merge-функция);
- **строки:** \`joining(", ", "[", "]")\`;
- **агрегаты:** \`counting()\`, \`summingInt()\`, \`averagingDouble()\`, \`minBy()/maxBy()\`.

**Группировка — \`groupingBy\`:** делит элементы по ключу в \`Map<K, List<V>>\`:

\`\`\`java
Map<Dept, List<Employee>> byDept =
    employees.stream().collect(Collectors.groupingBy(Employee::getDept));
\`\`\`

Можно добавить **downstream-сборщик** — что делать с каждой группой: \`groupingBy(Employee::getDept, Collectors.counting())\` даст \`Map<Dept, Long>\` (число сотрудников в отделе).

**Партиционирование — \`partitioningBy(predicate)\`** — частный случай группировки по булеву условию, всегда даёт \`Map<Boolean, List<V>>\` с ключами \`true\`/\`false\` (например, разделить на прошедших и не прошедших порог).`,
      },
      {
        id: 'stream-reduce',
        difficulty: 'medium',
        tags: ['streams'],
        related: ['collectors'],
        question: 'Как работает reduce() в Stream API?',
        answer: `**\`reduce()\`** сворачивает поток элементов в **один результат**, последовательно применяя ассоциативную операцию (аккумулятор). Три формы:

- **\`reduce(BinaryOperator)\`** → \`Optional<T>\` (результат может отсутствовать для пустого стрима):

\`\`\`java
Optional<Integer> sum = nums.stream().reduce((a, b) -> a + b);
\`\`\`

- **\`reduce(identity, accumulator)\`** → \`T\`; \`identity\` — стартовое/нейтральное значение (для суммы 0, для произведения 1), возвращается для пустого стрима:

\`\`\`java
int sum = nums.stream().reduce(0, Integer::sum);
\`\`\`

- **\`reduce(identity, accumulator, combiner)\`** — форма с \`combiner\` для **параллельных** стримов: аккумулятор сворачивает частичные результаты, а combiner объединяет их между потоками.

Требования к корректности: операция должна быть **ассоциативной**, \`identity\` — истинно нейтральным, а функции — **без побочных эффектов** (иначе параллельный reduce даст неверный результат).

Когда что: для простых сумм/произведений/конкатенаций удобнее специализированные (\`mapToInt().sum()\`); \`collect()\` эффективнее \`reduce\` для **мутабельной** редукции (сбор в коллекцию/\`StringBuilder\`), т.к. не создаёт новый объект на каждом шаге.`,
      },
    ],
  };

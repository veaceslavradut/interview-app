// Категория: collections
export const collections = {
    id: 'collections',
    title: 'Java Collections Framework',
    icon: '📦',
    description: 'Коллекции Java',
    questions: [
      {
        id: 'collections-hierarchy',
        difficulty: 'easy',
        tags: ['collections'],
        related: ['arraylist-linkedlist'],
        question: 'Расскажите об иерархии коллекций в Java.',
        answer: `Два корневых интерфейса: \`Collection\` и \`Map\` (Map не наследуется от Collection).

**Collection:**

- **List** — упорядоченные коллекции с доступом по индексу: \`ArrayList\`, \`LinkedList\`, \`Vector\`;
- **Set** — коллекции уникальных элементов: \`HashSet\`, \`LinkedHashSet\`, \`TreeSet\`;
- **Queue/Deque** — очереди: \`ArrayDeque\`, \`PriorityQueue\`, \`LinkedList\`.

**Map** — пары «ключ-значение»: \`HashMap\`, \`LinkedHashMap\`, \`TreeMap\`, \`Hashtable\`.

Вспомогательные интерфейсы: \`Iterable\` (корень для for-each), \`Iterator\`, \`Comparable\`/\`Comparator\` (сортировка). Утилитные классы: \`Collections\`, \`Arrays\`.`,
      },
      {
        id: 'arraylist-linkedlist',
        difficulty: 'easy',
        tags: ['collections', 'list'],
        related: ['collections-hierarchy'],
        question: 'В чем разница между ArrayList и LinkedList?',
        answer: `**ArrayList** — основан на динамическом массиве:

- доступ по индексу: **O(1)**;
- вставка/удаление в середине: O(n) (сдвиг элементов);
- добавление в конец: амортизированное O(1);
- при заполнении массив увеличивается в ~1.5 раза.

**LinkedList** — двусвязный список:

- доступ по индексу: **O(n)** (обход от начала/конца);
- вставка/удаление по известной позиции (через итератор): O(1);
- реализует \`Deque\` — можно использовать как очередь/стек;
- больше расход памяти (каждый узел хранит 2 ссылки).

**На практике** почти всегда лучше \`ArrayList\`: локальность данных в памяти делает его быстрее даже во вставках, кроме случаев частых вставок/удалений в начале.`,
      },
      {
        id: 'hashmap-internals',
        difficulty: 'hard',
        tags: ['collections', 'map', 'internals'],
        related: ['hashmap-treemap-linkedhashmap', 'hashset-internals'],
        question: 'Как устроена HashMap?',
        answer: `\`HashMap\` — хеш-таблица, хранящая пары «ключ-значение».

**Внутреннее устройство:**

- массив бакетов (\`Node<K,V>[] table\`), по умолчанию размером 16;
- индекс бакета вычисляется из \`hashCode()\` ключа: \`(n - 1) & hash\`;
- **коллизии** решаются цепочками: элементы одного бакета образуют связный список;
- с Java 8: если в бакете > 8 элементов (и таблица ≥ 64), список превращается в **красно-чёрное дерево** — поиск O(log n) вместо O(n);
- при заполнении > load factor (0.75) таблица удваивается и элементы перераспределяются (rehashing).

**Сложность операций:** get/put — O(1) в среднем, O(log n) в худшем случае (дерево).

Ключи должны корректно реализовывать \`equals()\` и \`hashCode()\` и быть неизменяемыми.`,
      },
      {
        id: 'hashmap-treemap-linkedhashmap',
        difficulty: 'medium',
        tags: ['collections', 'map'],
        related: ['hashmap-internals'],
        question: 'В чем разница между HashMap, TreeMap и LinkedHashMap?',
        answer: `**HashMap:**

- порядок элементов не гарантируется;
- get/put — O(1);
- допускает один \`null\`-ключ.

**LinkedHashMap:**

- сохраняет **порядок вставки** (или порядок доступа — access order, основа для LRU-кэша);
- get/put — O(1), чуть медленнее HashMap из-за поддержки связного списка.

**TreeMap:**

- элементы **отсортированы** по ключу (natural ordering или \`Comparator\`);
- основан на красно-чёрном дереве;
- get/put — O(log n);
- \`null\`-ключи не допускаются;
- реализует \`NavigableMap\`: \`firstKey()\`, \`floorKey()\`, \`subMap()\` и т.д.

Выбор: нужна скорость — \`HashMap\`, порядок вставки — \`LinkedHashMap\`, сортировка/диапазонные запросы — \`TreeMap\`.`,
      },
      {
        id: 'fail-fast-fail-safe',
        difficulty: 'medium',
        tags: ['collections', 'iterators'],
        related: ['iterator'],
        question: 'Что такое fail-fast и fail-safe итераторы?',
        answer: `**Fail-fast** итераторы бросают \`ConcurrentModificationException\`, если коллекция была структурно изменена после создания итератора (не через сам итератор). Работают на основе счётчика модификаций \`modCount\`.

Примеры: итераторы \`ArrayList\`, \`HashMap\`, \`HashSet\`.

\`\`\`java
for (String s : list) {
    list.remove(s); // ConcurrentModificationException!
}
// правильно: iterator.remove() или removeIf()
\`\`\`

**Fail-safe** итераторы работают с копией данных или используют специальные механизмы — исключений не бросают:

- \`CopyOnWriteArrayList\` — итератор по снимку массива;
- \`ConcurrentHashMap\` — слабо согласованный (weakly consistent) итератор: может видеть или не видеть изменения, сделанные после его создания.

Компромисс fail-safe: возможна работа с устаревшими данными и накладные расходы на копирование.`,
      },
      {
        id: 'comparable-comparator',
        difficulty: 'easy',
        tags: ['collections', 'sorting'],
        related: [],
        question: 'В чем разница между Comparable и Comparator?',
        answer: `Оба интерфейса используются для сравнения и сортировки объектов.

**Comparable<T>** — «естественный порядок», реализуется самим классом:

\`\`\`java
class User implements Comparable<User> {
    public int compareTo(User other) {
        return this.name.compareTo(other.name);
    }
}
Collections.sort(users); // использует compareTo
\`\`\`

**Comparator<T>** — внешняя стратегия сравнения, отдельный класс/лямбда:

\`\`\`java
Comparator<User> byAge = Comparator.comparing(User::getAge);
users.sort(byAge.thenComparing(User::getName).reversed());
\`\`\`

Когда что использовать:

- \`Comparable\` — когда есть один очевидный «естественный» порядок;
- \`Comparator\` — когда нужны несколько вариантов сортировки или нельзя менять исходный класс.`,
      },
      {
        id: 'hashset-internals',
        difficulty: 'medium',
        tags: ['collections', 'set', 'internals'],
        related: ['hashmap-internals'],
        question: 'Как устроен HashSet? Что будет, если изменить объект после добавления в Set?',
        answer: `**HashSet** внутри — это \`HashMap\`, где элементы хранятся как **ключи**, а значением служит один общий объект-заглушка (\`PRESENT\`):

\`\`\`java
public boolean add(E e) {
    return map.put(e, PRESENT) == null;
}
\`\`\`

Поэтому все свойства наследуются от HashMap: уникальность через \`hashCode()\`/\`equals()\`, O(1) для add/contains/remove, порядок не гарантируется, один \`null\`.

**Опасность изменяемых элементов**: если изменить поля объекта, участвующие в \`hashCode()\`, после добавления:

\`\`\`java
Set<User> set = new HashSet<>();
User u = new User("John");
set.add(u);
u.setName("Jane");            // хеш изменился!
set.contains(u);               // false — ищем в другом бакете
set.remove(u);                 // false — удалить невозможно, «потерянный» элемент
\`\`\`

Объект остаётся в старом бакете, но найти его по новому хешу нельзя — утечка и нарушение инварианта множества.

**Вывод**: ключи Map и элементы Set должны быть **неизменяемыми** (или как минимум не менять поля, входящие в hashCode/equals).

Варианты: \`LinkedHashSet\` — порядок вставки, \`TreeSet\` — сортировка (на TreeMap, O(log n)).`,
      },
      {
        id: 'iterator',
        difficulty: 'easy',
        tags: ['collections', 'iterators'],
        related: ['fail-fast-fail-safe'],
        question: 'Что такое Iterator? Как правильно удалять элементы при итерации?',
        answer: `**Iterator** — объект для последовательного обхода коллекции (паттерн Итератор). Методы: \`hasNext()\`, \`next()\`, \`remove()\`.

Цикл for-each — синтаксический сахар над итератором (требует \`Iterable\`).

**Неправильное удаление** — \`ConcurrentModificationException\`:

\`\`\`java
for (String s : list) {
    if (s.isEmpty()) list.remove(s); // CME!
}
\`\`\`

**Правильные способы:**

\`\`\`java
// 1. Через итератор
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    if (it.next().isEmpty()) it.remove();
}

// 2. removeIf (Java 8) — предпочтительно
list.removeIf(String::isEmpty);

// 3. Стрим в новую коллекцию
List<String> filtered = list.stream()
    .filter(s -> !s.isEmpty())
    .collect(Collectors.toList());
\`\`\`

Дополнительно: \`ListIterator\` — двунаправленный обход списков + \`add()\`/\`set()\`; в многопоточной среде — конкурентные коллекции вместо ручной синхронизации.`,
      },
    ],
  };

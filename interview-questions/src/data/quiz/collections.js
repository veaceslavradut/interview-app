// Банк вопросов финального теста: Коллекции
export const collectionsQuiz = [
  {
    id: 'collections-hierarchy',
    variants: [
      {
        question: 'Какое утверждение об иерархии коллекций Java ВЕРНО?',
        options: [
          'Интерфейс Map не наследуется от Collection и стоит в иерархии отдельно',
          'Map наследуется от Collection, как List и Set',
          'List и Set наследуются от Map',
          'Все коллекции наследуются от класса ArrayList',
        ],
        correct: 0,
      },
      {
        question: 'Какие основные интерфейсы наследуются от Collection?',
        options: [
          'List, Set, Queue',
          'Map, HashMap, TreeMap',
          'Iterator, Iterable, Comparable',
          'Array, Vector, Stack',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'arraylist-linkedlist',
    variants: [
      {
        question: 'Чем ArrayList отличается от LinkedList?',
        options: [
          'ArrayList основан на массиве и даёт O(1) доступ по индексу; LinkedList — на связанных узлах с быстрой вставкой/удалением через итератор',
          'LinkedList даёт O(1) доступ по индексу, ArrayList — O(n)',
          'ArrayList потокобезопасен, а LinkedList — нет',
          'ArrayList не может расти динамически, а LinkedList может',
        ],
        correct: 0,
      },
      {
        question: 'Какая коллекция быстрее для частого доступа к элементам по индексу?',
        options: [
          'ArrayList — доступ по индексу выполняется за O(1)',
          'LinkedList — узлы связаны напрямую',
          'Обе одинаково — доступ всегда O(n)',
          'HashSet — он оптимизирован для доступа по индексу',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'hashmap-internals',
    variants: [
      {
        question: 'Как HashMap хранит элементы?',
        options: [
          'В массиве бакетов: индекс вычисляется из hashCode ключа, коллизии решаются списком, который при росте превращается в красно-чёрное дерево',
          'В отсортированном по ключам массиве с бинарным поиском',
          'В двусвязном списке пар ключ-значение',
          'В базе данных на диске',
        ],
        correct: 0,
      },
      {
        question: 'Как HashMap находит значение по ключу?',
        options: [
          'Вычисляет hashCode ключа, определяет бакет, затем сравнивает ключи в бакете через equals',
          'Перебирает все элементы, сравнивая ключи через ==',
          'Использует бинарный поиск по отсортированным ключам',
          'Хранит для каждого ключа порядковый номер вставки',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'hashmap-treemap-linkedhashmap',
    variants: [
      {
        question: 'Какая реализация Map хранит ключи в отсортированном порядке?',
        options: [
          'TreeMap',
          'HashMap',
          'LinkedHashMap',
          'Hashtable',
        ],
        correct: 0,
      },
      {
        question: 'Чем LinkedHashMap отличается от HashMap?',
        options: [
          'LinkedHashMap сохраняет порядок вставки элементов (или порядок доступа)',
          'LinkedHashMap сортирует ключи по возрастанию',
          'LinkedHashMap потокобезопасен',
          'LinkedHashMap не допускает null-ключей',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'fail-fast-fail-safe',
    variants: [
      {
        question: 'Как ведёт себя fail-fast итератор при изменении коллекции во время обхода?',
        options: [
          'Бросает ConcurrentModificationException',
          'Молча продолжает обход с новыми данными',
          'Блокирует поток до завершения изменения',
          'Автоматически перезапускает обход с начала',
        ],
        correct: 0,
      },
      {
        question: 'Какая коллекция предоставляет fail-safe итератор?',
        options: [
          'CopyOnWriteArrayList — итератор работает со снимком данных',
          'ArrayList',
          'HashMap',
          'HashSet',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'comparable-comparator',
    variants: [
      {
        question: 'Чем Comparable отличается от Comparator?',
        options: [
          'Comparable задаёт естественный порядок внутри самого класса (compareTo); Comparator — внешний компаратор (compare), можно создать несколько',
          'Comparable — внешний класс сравнения, Comparator — метод внутри класса',
          'Comparable сравнивает по ссылке, Comparator — по значению',
          'Это два названия одного интерфейса в разных версиях Java',
        ],
        correct: 0,
      },
      {
        question: 'Когда стоит использовать Comparator вместо Comparable?',
        options: [
          'Когда нужно несколько разных порядков сортировки или нельзя изменить исходный класс',
          'Когда объекты сравниваются только на равенство',
          'Когда сортировка выполняется в несколько потоков',
          'Comparator устарел — всегда следует использовать Comparable',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'hashset-internals',
    variants: [
      {
        question: 'На чём основана реализация HashSet?',
        options: [
          'На HashMap: элементы хранятся как ключи, значением служит фиктивный объект-заглушка',
          'На отсортированном массиве с бинарным поиском',
          'На двусвязном списке уникальных элементов',
          'На TreeMap с компаратором по hashCode',
        ],
        correct: 0,
      },
      {
        question: 'Как HashSet обеспечивает уникальность элементов?',
        options: [
          'Через hashCode и equals: элемент с таким же хешем и равный по equals повторно не добавляется',
          'Сравнивая элементы оператором ==',
          'Через метод compareTo каждого элемента',
          'Сохраняя элементы в отсортированном виде и сравнивая соседей',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'iterator',
    variants: [
      {
        question: 'Как безопасно удалить элемент из коллекции во время её обхода?',
        options: [
          'Использовать метод remove() самого итератора',
          'Вызвать collection.remove() внутри цикла for-each',
          'Обнулить элемент, присвоив ему null',
          'Удалять элементы можно только после полной остановки приложения',
        ],
        correct: 0,
      },
      {
        question: 'Что такое Iterator?',
        options: [
          'Объект для последовательного обхода элементов коллекции (hasNext, next, remove)',
          'Индекс текущего элемента массива',
          'Поток, обрабатывающий элементы коллекции параллельно',
          'Специальный вид цикла for в Java',
        ],
        correct: 0,
      },
    ],
  },
];

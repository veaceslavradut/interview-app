// Английский перевод банка квиза: collections. Порядок вариантов и опций — как в RU.
export const collections = {
  'collections-hierarchy': [
    {
      question: 'Which statement about the Java collections hierarchy is CORRECT?',
      options: [
        'The Map interface does not extend Collection and sits separately in the hierarchy',
        'Map extends Collection, like List and Set',
        'List and Set extend Map',
        'All collections extend the ArrayList class',
      ],
    },
    {
      question: 'Which main interfaces extend Collection?',
      options: [
        'List, Set, Queue',
        'Map, HashMap, TreeMap',
        'Iterator, Iterable, Comparable',
        'Array, Vector, Stack',
      ],
    },
  ],
  'arraylist-linkedlist': [
    {
      question: 'How does ArrayList differ from LinkedList?',
      options: [
        'ArrayList is backed by an array and gives O(1) index access; LinkedList uses linked nodes with fast insertion/removal via an iterator',
        'LinkedList gives O(1) index access, ArrayList — O(n)',
        'ArrayList is thread-safe, and LinkedList is not',
        'ArrayList cannot grow dynamically, while LinkedList can',
      ],
    },
    {
      question: 'Which collection is faster for frequent access to elements by index?',
      options: [
        'ArrayList — index access runs in O(1)',
        'LinkedList — its nodes are linked directly',
        'Both are equal — access is always O(n)',
        'HashSet — it is optimised for index access',
      ],
    },
  ],
  'hashmap-internals': [
    {
      question: 'How does HashMap store elements?',
      options: [
        'In an array of buckets: the index is computed from the key’s hashCode, collisions are handled by a list that turns into a red-black tree as it grows',
        'In an array sorted by keys with binary search',
        'In a doubly linked list of key-value pairs',
        'In a database on disk',
      ],
    },
    {
      question: 'How does HashMap find a value by key?',
      options: [
        'It computes the key’s hashCode, locates the bucket, then compares keys in the bucket via equals',
        'It iterates over all elements, comparing keys with ==',
        'It uses binary search over sorted keys',
        'It stores an insertion sequence number for each key',
      ],
    },
  ],
  'hashmap-treemap-linkedhashmap': [
    {
      question: 'Which Map implementation keeps keys in sorted order?',
      options: ['TreeMap', 'HashMap', 'LinkedHashMap', 'Hashtable'],
    },
    {
      question: 'How does LinkedHashMap differ from HashMap?',
      options: [
        'LinkedHashMap preserves insertion order of elements (or access order)',
        'LinkedHashMap sorts keys in ascending order',
        'LinkedHashMap is thread-safe',
        'LinkedHashMap does not allow null keys',
      ],
    },
  ],
  'fail-fast-fail-safe': [
    {
      question: 'How does a fail-fast iterator behave when the collection is modified during iteration?',
      options: [
        'It throws ConcurrentModificationException',
        'It silently continues iterating with the new data',
        'It blocks the thread until the modification completes',
        'It automatically restarts iteration from the beginning',
      ],
    },
    {
      question: 'Which collection provides a fail-safe iterator?',
      options: [
        'CopyOnWriteArrayList — the iterator works on a snapshot of the data',
        'ArrayList',
        'HashMap',
        'HashSet',
      ],
    },
  ],
  'comparable-comparator': [
    {
      question: 'How does Comparable differ from Comparator?',
      options: [
        'Comparable defines the natural ordering inside the class itself (compareTo); Comparator is an external comparator (compare) — you can create several',
        'Comparable is an external comparison class, Comparator is a method inside the class',
        'Comparable compares by reference, Comparator by value',
        'They are two names for the same interface in different Java versions',
      ],
    },
    {
      question: 'When should you use Comparator instead of Comparable?',
      options: [
        'When you need several different sort orders or cannot modify the original class',
        'When objects are compared only for equality',
        'When sorting runs in several threads',
        'Comparator is deprecated — you should always use Comparable',
      ],
    },
  ],
  'hashset-internals': [
    {
      question: 'What is the HashSet implementation based on?',
      options: [
        'On HashMap: elements are stored as keys, with a dummy placeholder object as the value',
        'On a sorted array with binary search',
        'On a doubly linked list of unique elements',
        'On a TreeMap with a comparator by hashCode',
      ],
    },
    {
      question: 'How does HashSet ensure element uniqueness?',
      options: [
        'Through hashCode and equals: an element with the same hash and equal by equals is not added again',
        'By comparing elements with the == operator',
        'Via each element’s compareTo method',
        'By keeping elements sorted and comparing neighbours',
      ],
    },
  ],
  'iterator': [
    {
      question: 'How do you safely remove an element from a collection while iterating over it?',
      options: [
        'Use the iterator’s own remove() method',
        'Call collection.remove() inside a for-each loop',
        'Null out the element by assigning null to it',
        'Elements can be removed only after the application has fully stopped',
      ],
    },
    {
      question: 'What is an Iterator?',
      options: [
        'An object for sequentially traversing a collection’s elements (hasNext, next, remove)',
        'The index of the current array element',
        'A thread that processes a collection’s elements in parallel',
        'A special kind of for loop in Java',
      ],
    },
  ],
};

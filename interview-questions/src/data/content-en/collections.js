// Английские переводы: collections
export const collections = {
    title: 'Java Collections Framework',
    description: 'Java collections',
    questions: {
      'collections-hierarchy': {
        question: 'Describe the collections hierarchy in Java.',
        answer: `There are two root interfaces: \`Collection\` and \`Map\` (Map does not extend Collection).

**Collection:**

- **List** — ordered collections with index-based access: \`ArrayList\`, \`LinkedList\`, \`Vector\`;
- **Set** — collections of unique elements: \`HashSet\`, \`LinkedHashSet\`, \`TreeSet\`;
- **Queue/Deque** — queues: \`ArrayDeque\`, \`PriorityQueue\`, \`LinkedList\`.

**Map** — key-value pairs: \`HashMap\`, \`LinkedHashMap\`, \`TreeMap\`, \`Hashtable\`.

Supporting interfaces: \`Iterable\` (the root for for-each), \`Iterator\`, \`Comparable\`/\`Comparator\` (sorting). Utility classes: \`Collections\`, \`Arrays\`.`,
      },
      'arraylist-linkedlist': {
        question: 'What is the difference between ArrayList and LinkedList?',
        answer: `**ArrayList** — backed by a dynamic array:

- access by index: **O(1)**;
- insertion/removal in the middle: O(n) (elements are shifted);
- appending to the end: amortized O(1);
- when full, the array grows by a factor of ~1.5.

**LinkedList** — a doubly linked list:

- access by index: **O(n)** (traversal from the head/tail);
- insertion/removal at a known position (via an iterator): O(1);
- implements \`Deque\` — can be used as a queue/stack;
- higher memory overhead (each node stores 2 references).

**In practice**, \`ArrayList\` is almost always better: data locality in memory makes it faster even for insertions, except when insertions/removals at the beginning are frequent.`,
      },
      'hashmap-internals': {
        question: 'How does HashMap work internally?',
        answer: `\`HashMap\` is a hash table storing key-value pairs.

**Internal structure:**

- an array of buckets (\`Node<K,V>[] table\`), 16 by default;
- the bucket index is computed from the key's \`hashCode()\`: \`(n - 1) & hash\`;
- **collisions** are resolved by chaining: elements in the same bucket form a linked list;
- since Java 8: if a bucket has > 8 elements (and the table is ≥ 64), the list is converted into a **red-black tree** — O(log n) lookup instead of O(n);
- when the fill ratio exceeds the load factor (0.75), the table doubles in size and elements are redistributed (rehashing).

**Operation complexity:** get/put — O(1) on average, O(log n) in the worst case (tree).

Keys must correctly implement \`equals()\` and \`hashCode()\` and should be immutable.`,
      },
      'hashmap-treemap-linkedhashmap': {
        question: 'What is the difference between HashMap, TreeMap, and LinkedHashMap?',
        answer: `**HashMap:**

- element order is not guaranteed;
- get/put — O(1);
- allows one \`null\` key.

**LinkedHashMap:**

- preserves **insertion order** (or access order — the basis for an LRU cache);
- get/put — O(1), slightly slower than HashMap due to maintaining a linked list.

**TreeMap:**

- elements are **sorted** by key (natural ordering or a \`Comparator\`);
- backed by a red-black tree;
- get/put — O(log n);
- \`null\` keys are not allowed;
- implements \`NavigableMap\`: \`firstKey()\`, \`floorKey()\`, \`subMap()\`, etc.

Choice: need speed — \`HashMap\`, insertion order — \`LinkedHashMap\`, sorting/range queries — \`TreeMap\`.`,
      },
      'fail-fast-fail-safe': {
        question: 'What are fail-fast and fail-safe iterators?',
        answer: `**Fail-fast** iterators throw a \`ConcurrentModificationException\` if the collection was structurally modified after the iterator was created (other than through the iterator itself). They rely on the \`modCount\` modification counter.

Examples: the iterators of \`ArrayList\`, \`HashMap\`, \`HashSet\`.

\`\`\`java
for (String s : list) {
    list.remove(s); // ConcurrentModificationException!
}
// correct: iterator.remove() or removeIf()
\`\`\`

**Fail-safe** iterators work on a copy of the data or use special mechanisms — they do not throw exceptions:

- \`CopyOnWriteArrayList\` — iterates over a snapshot of the array;
- \`ConcurrentHashMap\` — a weakly consistent iterator: it may or may not see changes made after its creation.

The fail-safe trade-off: you may work with stale data, and copying has overhead.`,
      },
      'comparable-comparator': {
        question: 'What is the difference between Comparable and Comparator?',
        answer: `Both interfaces are used for comparing and sorting objects.

**Comparable<T>** — the "natural ordering", implemented by the class itself:

\`\`\`java
class User implements Comparable<User> {
    public int compareTo(User other) {
        return this.name.compareTo(other.name);
    }
}
Collections.sort(users); // uses compareTo
\`\`\`

**Comparator<T>** — an external comparison strategy, a separate class/lambda:

\`\`\`java
Comparator<User> byAge = Comparator.comparing(User::getAge);
users.sort(byAge.thenComparing(User::getName).reversed());
\`\`\`

When to use which:

- \`Comparable\` — when there is one obvious "natural" ordering;
- \`Comparator\` — when you need multiple sort orders or cannot modify the original class.`,
      },
      'hashset-internals': {
        question: 'How does HashSet work internally? What happens if you mutate an object after adding it to a Set?',
        answer: `Internally, a **HashSet** is a \`HashMap\` where the elements are stored as **keys** and the value is a single shared dummy object (\`PRESENT\`):

\`\`\`java
public boolean add(E e) {
    return map.put(e, PRESENT) == null;
}
\`\`\`

So all its properties are inherited from HashMap: uniqueness via \`hashCode()\`/\`equals()\`, O(1) for add/contains/remove, no order guarantee, one \`null\`.

**The danger of mutable elements**: if you change the fields of an object involved in \`hashCode()\` after adding it:

\`\`\`java
Set<User> set = new HashSet<>();
User u = new User("John");
set.add(u);
u.setName("Jane");            // the hash has changed!
set.contains(u);               // false — we look in a different bucket
set.remove(u);                 // false — cannot remove, a "lost" element
\`\`\`

The object remains in the old bucket, but cannot be found by the new hash — a leak and a violation of the set invariant.

**Conclusion**: Map keys and Set elements should be **immutable** (or at least never change fields involved in hashCode/equals).

Variants: \`LinkedHashSet\` — insertion order, \`TreeSet\` — sorted (backed by TreeMap, O(log n)).`,
      },
      iterator: {
        question: 'What is an Iterator? How do you correctly remove elements while iterating?',
        answer: `An **Iterator** is an object for sequentially traversing a collection (the Iterator pattern). Methods: \`hasNext()\`, \`next()\`, \`remove()\`.

The for-each loop is syntactic sugar over an iterator (requires \`Iterable\`).

**Incorrect removal** — \`ConcurrentModificationException\`:

\`\`\`java
for (String s : list) {
    if (s.isEmpty()) list.remove(s); // CME!
}
\`\`\`

**Correct ways:**

\`\`\`java
// 1. Via the iterator
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    if (it.next().isEmpty()) it.remove();
}

// 2. removeIf (Java 8) — preferred
list.removeIf(String::isEmpty);

// 3. Stream into a new collection
List<String> filtered = list.stream()
    .filter(s -> !s.isEmpty())
    .collect(Collectors.toList());
\`\`\`

Additionally: \`ListIterator\` — bidirectional list traversal plus \`add()\`/\`set()\`; in a multithreaded environment, use concurrent collections instead of manual synchronization.`,
      },
    },
  };

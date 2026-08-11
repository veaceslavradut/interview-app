// Английский перевод банка квиза: algorithms. Порядок вариантов и опций — как в RU.
export const algorithms = {
  'alg-quiz-bigo': [
    {
      question: 'What does Big-O notation describe?',
      options: [
        'The upper asymptotic bound on the growth of an algorithm’s time or memory as the input size grows',
        'The exact number of operations of an algorithm for a specific input',
        'The size of the algorithm’s source code in lines',
        'The algorithm’s speed in seconds on a specific processor',
      ],
    },
    {
      question: 'What does the complexity O(2n + 5) simplify to for large n?',
      options: ['O(n)', 'O(2n)', 'O(n + 5)', 'O(5)'],
    },
  ],
  'alg-quiz-complexities': [
    {
      question: 'What is the complexity of binary search in a sorted array?',
      options: ['O(log n)', 'O(n)', 'O(1)', 'O(n log n)'],
    },
    {
      question: 'Which complexity class is the practical limit for comparison sorting?',
      options: ['O(n log n)', 'O(n)', 'O(log n)', 'O(n²)'],
    },
  ],
  'alg-quiz-array-list': [
    {
      question: 'What is the complexity of accessing an element by index in an array and in a linked list?',
      options: [
        'In an array O(1), in a linked list O(n)',
        'O(1) in both',
        'In an array O(n), in a linked list O(1)',
        'O(n) in both',
      ],
    },
    {
      question: 'What is the advantage of a linked list over an array?',
      options: [
        'Insertion/removal at a known position is O(1) (re-linking references), with no element shifting',
        'Fast index access in O(1)',
        'Better cache locality on sequential traversal',
        'Lower memory use per element',
      ],
    },
  ],
  'alg-quiz-hashtable': [
    {
      question: 'What is the average complexity of key access in a hash table?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    },
    {
      question: 'What is a collision in a hash table?',
      options: [
        'A situation where two different keys map to the same bucket (index)',
        'RAM overflow on insertion',
        'A compilation error on a wrong key type',
        'Two threads accessing the table simultaneously',
      ],
    },
  ],
  'alg-quiz-binary-search': [
    {
      question: 'What is the mandatory condition for applying binary search?',
      options: [
        'The array must be sorted',
        'The array must consist only of unique elements',
        'The array size must be a power of two',
        'The elements must be integers',
      ],
    },
    {
      question: 'Why take the midpoint as lo + (hi - lo) / 2 rather than (lo + hi) / 2?',
      options: [
        'To avoid int overflow with large indices',
        'So the search works on an unsorted array',
        'To reduce the complexity to O(1)',
        'It doesn’t matter, the formulas are equivalent in all cases',
      ],
    },
  ],
  'alg-quiz-sorting': [
    {
      question: 'What does the stability of a sorting algorithm mean?',
      options: [
        'Preserving the relative order of equal elements',
        'A guaranteed O(n log n) complexity in the worst case',
        'No extra memory (in-place sorting)',
        'Working without recursion',
      ],
    },
    {
      question: 'What is quick sort’s worst-case time?',
      options: ['O(n²)', 'O(n log n)', 'O(n)', 'O(log n)'],
    },
  ],
  'alg-quiz-bst': [
    {
      question: 'What invariant does a binary search tree (BST) maintain?',
      options: [
        'In the left subtree all keys are less than the node’s key, in the right greater',
        'All leaves are at the same level',
        'Every node has exactly two children',
        'Keys are stored only in the leaves',
      ],
    },
    {
      question: 'Which BST traversal yields keys in sorted order?',
      options: ['In-order (left → root → right)', 'Pre-order', 'Post-order', 'BFS (by levels)'],
    },
  ],
  'alg-quiz-bfs-dfs': [
    {
      question: 'Which data structure does breadth-first search (BFS) use?',
      options: ['A queue (FIFO)', 'A stack (LIFO)', 'A heap', 'A hash table'],
    },
    {
      question: 'What is BFS best suited for in an unweighted graph?',
      options: [
        'Finding the shortest path by number of edges',
        'Topological sorting',
        'Cycle detection via backtracking',
        'Finding strongly connected components',
      ],
    },
  ],
  'alg-quiz-shortest-path': [
    {
      question: 'Which algorithm finds the shortest path in a weighted graph with non-negative weights?',
      options: ['Dijkstra’s algorithm', 'Plain BFS', 'Bubble sort', 'Binary search'],
    },
    {
      question: 'What do you need if the graph has edges with negative weight?',
      options: [
        'The Bellman-Ford algorithm (it also detects negative cycles)',
        'Dijkstra’s algorithm unchanged',
        'Breadth-first search (BFS)',
        'A greedy choice of the nearest vertex',
      ],
    },
  ],
  'alg-quiz-dp-greedy': [
    {
      question: 'Which two signs indicate a problem is solved by dynamic programming?',
      options: [
        'Optimal substructure and overlapping subproblems',
        'Sorted input and unique elements',
        'No recursion and the presence of a loop',
        'Small input size and integer data',
      ],
    },
    {
      question: 'How does a greedy algorithm differ from dynamic programming?',
      options: [
        'Greedy makes a locally optimal choice and never revisits it; DP considers all subproblems',
        'Greedy always gives the correct answer for any problem, and DP does not',
        'DP works only on graphs, and greedy only on arrays',
        'There is no difference',
      ],
    },
  ],
};

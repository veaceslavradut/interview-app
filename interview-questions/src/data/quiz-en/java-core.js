// Английский перевод банка квиза: java-core. Порядок вариантов и опций — как в RU.
export const javaCore = {
  'object-methods': [
    {
      question: 'Which methods are defined in the java.lang.Object class?',
      options: [
        'equals, hashCode, toString, clone, getClass, wait, notify, notifyAll, finalize',
        'compareTo, length, charAt, substring',
        'start, run, join, interrupt',
        'add, remove, contains, size',
      ],
    },
    {
      question: 'Which of the following methods does NOT belong to the Object class?',
      options: ['compareTo()', 'equals()', 'hashCode()', 'toString()'],
    },
  ],
  'equals-hashcode': [
    {
      question: 'What does the contract between equals() and hashCode() state?',
      options: [
        'If objects are equal by equals(), their hashCode() values must match',
        'If objects’ hashCode() values match, the objects must be equal by equals()',
        'equals() and hashCode() are not related at all',
        'hashCode() must return a unique value for every object',
      ],
    },
    {
      question: 'What happens if you override equals() but not hashCode()?',
      options: [
        'Equal objects may land in different HashMap/HashSet buckets, and lookup will work incorrectly',
        'The code will not compile',
        'The JVM automatically generates a correct hashCode()',
        'Nothing — hashCode() does not affect collections',
      ],
    },
  ],
  'string-immutable': [
    {
      question: 'Why is the String class immutable in Java?',
      options: [
        'For security, thread safety, hashCode caching, and the string pool to work',
        'Because strings are stored on disk, not in memory',
        'So strings take less memory than character arrays',
        'It is a design mistake that was fixed in newer Java versions',
      ],
    },
    {
      question: 'What happens when a string is “changed”, e.g. by concatenation?',
      options: [
        'A new String object is created; the original string is not changed',
        'The original string is modified in place',
        'The string is marked as changed and recomputed on read',
        'An UnsupportedOperationException is thrown',
      ],
    },
  ],
  'exceptions': [
    {
      question: 'How do checked exceptions differ from unchecked ones?',
      options: [
        'Checked must be handled or declared in throws; unchecked (RuntimeException and its subclasses) need not be',
        'Checked occur only at compile time, unchecked only at runtime',
        'Unchecked cannot be caught with a catch block',
        'Checked exceptions exist only in library code',
      ],
    },
    {
      question: 'Which of the following exceptions is unchecked?',
      options: ['NullPointerException', 'IOException', 'SQLException', 'ClassNotFoundException'],
    },
  ],
  'final-finally-finalize': [
    {
      question: 'What does the final keyword mean for a class?',
      options: [
        'Such a class cannot be inherited from',
        'The class cannot be instantiated',
        'All the class’s fields automatically become constants',
        'The class will be collected by the garbage collector last',
      ],
    },
    {
      question: 'What is the difference between final, finally and finalize?',
      options: [
        'final is a modifier (constant / no inheritance); finally is a try block that always runs; finalize is a method called by the GC before an object is removed',
        'They are three synonyms for the same program-termination mechanism',
        'final is a try block; finally is a modifier; finalize is a keyword for constants',
        'All three are used only for memory management',
      ],
    },
  ],
  'autoboxing': [
    {
      question: 'What is autoboxing?',
      options: [
        'Automatic conversion of a primitive type into the corresponding wrapper class (int → Integer)',
        'Automatic compression of objects in memory',
        'Packing classes into a jar archive at build time',
        'Converting an object into a byte array',
      ],
    },
    {
      question: 'What danger is associated with unboxing?',
      options: [
        'If the wrapper is null, unboxing throws a NullPointerException',
        'Unboxing is irreversible — the value cannot be boxed again',
        'Unboxing changes the number’s value',
        'Unboxing works only for the Integer type',
      ],
    },
  ],
  'interface-vs-abstract': [
    {
      question: 'How does an abstract class differ from an interface?',
      options: [
        'An abstract class can have state (non-static fields) and constructors; a class inherits only one abstract class but implements many interfaces',
        'An interface can have constructors, and an abstract class cannot',
        'You can inherit an abstract class multiple times, but an interface is implemented only once',
        'No difference — since Java 8 they are the same',
      ],
    },
    {
      question: 'What can an abstract class contain that an interface CANNOT?',
      options: [
        'Constructors and non-static fields (state)',
        'Abstract methods',
        'Static methods',
        'Methods with an implementation',
      ],
    },
  ],
  'generics': [
    {
      question: 'Why are generics needed?',
      options: [
        'To parameterise types and check type safety at compile time',
        'To speed up collections at runtime',
        'For automatic serialization of objects',
        'To create several instances of a class at once',
      ],
    },
    {
      question: 'What is type erasure?',
      options: [
        'After compilation, type-parameter information is removed — at runtime List<String> and List<Integer> are indistinguishable',
        'Automatic removal of unused types from the jar file',
        'A mechanism for removing objects from memory by the garbage collector',
        'A ban on using primitive types in generics at runtime',
      ],
    },
  ],
  'string-pool': [
    {
      question: 'What is the String pool?',
      options: [
        'An area in the heap where string literals are stored to reuse identical strings',
        'A queue of strings waiting to be printed to the console',
        'A cache of all strings read from files',
        'A thread pool for processing strings in parallel',
      ],
    },
    {
      question: 'What will the expression "java" == new String("java") return?',
      options: [
        'false — the literal comes from the pool, and new creates a new object in the heap',
        'true — strings with the same content are always the same object',
        'true — the == operator compares string contents',
        'A compilation error',
      ],
    },
  ],
  'static-keyword': [
    {
      question: 'What does the static modifier mean?',
      options: [
        'The member belongs to the class, not a specific instance, and is shared by all objects of the class',
        'The field’s value cannot be changed after initialization',
        'The method runs in a separate thread',
        'The field is not included in serialization',
      ],
    },
    {
      question: 'Why can’t a static method directly access non-static fields?',
      options: [
        'A static method is called without an instance, while non-static fields exist only on a concrete object',
        'Non-static fields are stored in a different memory area inaccessible to static methods',
        'This restriction is lifted by the volatile keyword',
        'It can — there are no restrictions',
      ],
    },
  ],
  'records-sealed': [
    {
      question: 'What is true about a record in Java?',
      options: [
        'An immutable data carrier; it is final and cannot inherit from a class',
        'A mutable class with automatic setters',
        'It can inherit from any class',
        'An analogue of an interface with default methods',
      ],
    },
    {
      question: 'What does the permits keyword of a sealed class specify?',
      options: [
        'An explicit list of classes allowed to extend/implement it',
        'Access rights to fields',
        'A list of allowed annotations',
        'The threads allowed to access it',
      ],
    },
  ],
  'composition-vs-inheritance': [
    {
      question: 'Why is composition usually preferred over inheritance?',
      options: [
        'Inheritance couples tightly to the parent’s implementation (fragile base class) and breaks encapsulation',
        'Composition is always faster at runtime',
        'Inheritance is impossible in Java',
        'Composition does not require interfaces',
      ],
    },
    {
      question: 'Which relationship corresponds to composition?',
      options: [
        'has-a (a class contains another object and delegates to it)',
        'is-a (a class is a kind of another)',
        'Multiple inheritance of classes',
        'A static, compile-time link',
      ],
    },
  ],
  'constructor-order': [
    {
      question: 'What is initialized first when a subclass object is created?',
      options: [
        'The parent is fully initialized before the subclass (via super())',
        'The subclass before the parent',
        'The order is undefined',
        'Only the subclass’s static fields',
      ],
    },
    {
      question: 'Why is it dangerous to call an overridable method from the parent’s constructor?',
      options: [
        'It runs when the subclass’s fields are not yet initialized (they hold default values)',
        'It causes a compilation error',
        'The method won’t be found at runtime',
        'A parent constructor cannot call methods',
      ],
    },
  ],
  'generics-wildcards': [
    {
      question: 'What does the PECS principle mean?',
      options: [
        'Producer Extends, Consumer Super — a data source via extends, a sink via super',
        'Public Extends, Class Super',
        'Primitive Erasure Cast Safety',
        'Parent Extends Child Structure',
      ],
    },
    {
      question: 'What can you do with a collection of type List<? extends Number>?',
      options: [
        'Read elements as Number, but not add (except null)',
        'Freely add any Number',
        'Add only Integer',
        'Neither read nor write',
      ],
    },
  ],
  'reflection': [
    {
      question: 'What does the Reflection API let you do?',
      options: [
        'Inspect and invoke classes’ fields/methods at runtime by name',
        'Compile code into machine instructions',
        'Control garbage collection',
        'Speed up method calls',
      ],
    },
    {
      question: 'What is the main drawback of reflection?',
      options: [
        'It is slower than direct calls and bypasses type checks and encapsulation',
        'It does not work in frameworks',
        'It cannot create objects',
        'It requires a separate JVM',
      ],
    },
  ],
  'cloneable': [
    {
      question: 'Why is Object.clone() considered problematic?',
      options: [
        'It makes a shallow copy, and its contract is broken and unintuitive',
        'It always makes a deep copy',
        'It works only with primitives',
        'It requires implementing Serializable',
      ],
    },
    {
      question: 'Which way of copying objects is preferable to Cloneable?',
      options: [
        'A copy constructor or a static factory method',
        'A type cast',
        'Using a static field',
        'Calling finalize()',
      ],
    },
  ],
};

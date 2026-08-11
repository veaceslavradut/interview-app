// Английский перевод банка квиза: oop. Порядок вариантов и опций — как в RU.
export const oop = {
  'oop-definition': [
    {
      question: 'What is object-oriented programming (OOP)?',
      options: [
        'A programming methodology based on representing a program as a collection of objects — instances of classes that form an inheritance hierarchy',
        'A way of writing programs as a sequence of instructions executed top to bottom',
        'A paradigm in which a program is described as a set of mathematical functions without mutable state',
        'A methodology in which a program consists only of global variables and procedures',
      ],
    },
    {
      question: 'Which statement matches the OOP paradigm?',
      options: [
        'A program consists of objects exchanging messages; an object’s state can be changed by sending it a message',
        'A program consists of pure functions that have no state or side effects',
        'A program is a set of SQL queries to a database',
        'A program is a sequence of machine instructions directly controlling memory',
      ],
    },
    {
      question: 'Programming with abstract data types but WITHOUT inheritance is called…',
      options: [
        'Programming with abstract data types (not object-oriented)',
        'Fully object-oriented programming',
        'Functional programming',
        'Logic programming',
      ],
    },
  ],
  'oop-principles': [
    {
      question: 'Which principles are the core principles of OOP?',
      options: [
        'Encapsulation, inheritance, polymorphism, abstraction',
        'Compilation, interpretation, translation, linking',
        'Iteration, recursion, branching, sequence',
        'Normalization, denormalization, indexing, sharding',
      ],
    },
    {
      question: 'Which three principles are traditionally called the “pillars” of OOP?',
      options: [
        'Encapsulation, inheritance, polymorphism',
        'Abstraction, decomposition, modularity',
        'Inheritance, composition, aggregation',
        'Encapsulation, serialization, synchronization',
      ],
    },
    {
      question: 'Which of the following is NOT an OOP principle?',
      options: ['Normalization', 'Encapsulation', 'Polymorphism', 'Inheritance'],
    },
  ],
  'encapsulation': [
    {
      question: 'What is encapsulation?',
      options: [
        'Bundling data and the methods that work on it into a class and hiding the internal implementation from the outside world',
        'A mechanism for creating a new class based on an existing one',
        'The ability of objects with the same interface to have different implementations',
        'Splitting a program into independent threads of execution',
      ],
    },
    {
      question: 'How is encapsulation achieved in Java?',
      options: [
        'Access modifiers (private, protected, public) and public getters/setters',
        'The extends and implements keywords',
        'The @Override and @FunctionalInterface annotations',
        'The synchronized and volatile keywords',
      ],
    },
    {
      question: 'Which of the following is an advantage of encapsulation?',
      options: [
        'The ability to change a class’s internal implementation without affecting client code',
        'Automatic speed-up of the program',
        'The ability to inherit from several classes at once',
        'Automatic freeing of the memory an object occupies',
      ],
    },
  ],
  'inheritance': [
    {
      question: 'What is inheritance?',
      options: [
        'A mechanism that lets you define a new class based on an existing one, reusing its properties and behaviour',
        'Hiding an object’s data from direct outside access',
        'The ability of a method to accept parameters of different types',
        'Combining several objects into a single array',
      ],
    },
    {
      question: 'Which statement about inheritance in Java is CORRECT?',
      options: [
        'A class can inherit from only one class; all classes implicitly inherit from java.lang.Object',
        'A class can inherit from several classes at once via extends',
        'A parent class’s constructors are inherited by the subclass automatically',
        'The parent’s private members are not inherited and are physically absent from the subclass object',
      ],
    },
    {
      question: 'How is multiple inheritance of behaviour implemented in Java?',
      options: [
        'By implementing several interfaces',
        'Via the extends keyword listing several classes',
        'Through static nested classes',
        'Multiple inheritance of behaviour is impossible in Java in any form',
      ],
    },
  ],
  'polymorphism': [
    {
      question: 'What is polymorphism?',
      options: [
        'The ability of objects with the same interface to have different implementations and be handled uniformly',
        'Hiding an object’s internal implementation behind a public interface',
        'A mechanism for reusing a parent class’s properties and methods',
        'A way to store objects of different types in one collection without casting',
      ],
    },
    {
      question: 'What happens when animal.makeSound() is called, given Animal animal = new Dog() and Dog overrides makeSound()?',
      options: [
        'The Dog implementation is called (runtime polymorphism)',
        'The Animal implementation is called, because the variable’s type is Animal',
        'A compilation error occurs',
        'A ClassCastException is thrown',
      ],
    },
    {
      question: 'How does method overloading differ from overriding?',
      options: [
        'Overloading is compile-time polymorphism (same name, different parameters); overriding is runtime polymorphism (a subclass replaces the parent’s implementation)',
        'Overloading happens at runtime, and overriding at compile time',
        'They are synonyms for the same mechanism',
        'Overloading is only possible in interfaces, and overriding only in abstract classes',
      ],
    },
  ],
  'abstraction': [
    {
      question: 'What is abstraction in OOP?',
      options: [
        'Highlighting an object’s significant characteristics for the task at hand and ignoring insignificant details',
        'A complete ban on creating instances of any classes',
        'Storing all program data in static fields',
        'A way to encrypt data inside an object',
      ],
    },
    {
      question: 'Through which Java language constructs is abstraction implemented?',
      options: [
        'Abstract classes and interfaces',
        'Loops and conditional statements',
        'Arrays and collections',
        'try-catch blocks and exceptions',
      ],
    },
    {
      question: 'Which statement best captures the essence of abstraction?',
      options: [
        'We describe WHAT an object does, not HOW it does it',
        'We describe HOW an object is built, in all implementation details',
        'We hide the object so that it cannot be accessed at all',
        'We copy the object’s behaviour into every class that needs it',
      ],
    },
  ],
  'class-object-interface': [
    {
      question: 'What is a class?',
      options: [
        'A template (description) from which objects are created; it defines state and behaviour',
        'A concrete instance that exists in memory while the program runs',
        'A file with a .java extension that must contain a main method',
        'A memory area where all static variables are stored',
      ],
    },
    {
      question: 'How does an object differ from a class?',
      options: [
        'An object is a concrete instance of a class created in memory at runtime; a class is only a description (template)',
        'An object is a description, and a class is its instance',
        'An object exists only at compile time, and a class at runtime',
        'They are interchangeable concepts',
      ],
    },
    {
      question: 'What is an interface in Java?',
      options: [
        'A contract describing the behaviour (set of methods) a class undertakes to implement',
        'A class you cannot inherit from',
        'A graphical window for interacting with the user',
        'A mechanism for automatically generating getters and setters',
      ],
    },
  ],
  'oop-pros-cons': [
    {
      question: 'Which of the following is an ADVANTAGE of OOP?',
      options: [
        'Code reuse and easier maintenance thanks to modularity',
        'Guaranteed higher performance compared with procedural code',
        'Lower memory consumption than any other approach',
        'No need to design the application’s architecture',
      ],
    },
    {
      question: 'Which of the following is a DISADVANTAGE of OOP?',
      options: [
        'Lower performance and extra memory use due to object creation and dynamic dispatch',
        'The impossibility of reusing code',
        'The inability to model the problem domain',
        'A ban on using third-party libraries',
      ],
    },
  ],
  'is-a-has-a': [
    {
      question: 'What does the IS-A relationship describe?',
      options: [
        'Inheritance: a subclass is a kind of the parent class (Dog IS-A Animal)',
        'Composition: an object contains another object as a part (Car HAS-A Engine)',
        'Method overloading within a single class',
        'The relationship between a class and its static fields',
      ],
    },
    {
      question: 'The relationship “a car has an engine” (Car – Engine) is an example of…',
      options: ['HAS-A (composition/aggregation)', 'IS-A (inheritance)', 'Polymorphism', 'Method overriding'],
    },
    {
      question: 'How is the IS-A relationship expressed in Java?',
      options: [
        'Via extends (class inheritance) and implements (interface implementation)',
        'By declaring a field of another class inside this class',
        'By creating an object with the new operator',
        'Via a static import',
      ],
    },
  ],
  'composition-aggregation': [
    {
      question: 'How does composition differ from aggregation?',
      options: [
        'In composition the part cannot exist without the whole; in aggregation the part can exist independently',
        'In aggregation the part is destroyed together with the whole, in composition it is not',
        'Composition is inheritance, and aggregation is interface implementation',
        'They are complete synonyms',
      ],
    },
    {
      question: 'The relationship “a room is part of a house” (the room doesn’t exist without the house) is an example of…',
      options: ['Composition', 'Aggregation', 'Inheritance', 'Polymorphism'],
    },
    {
      question: 'The relationship “a student – a university” (the student can exist without the university) is an example of…',
      options: ['Aggregation', 'Composition', 'Inheritance', 'Encapsulation'],
    },
  ],
  'static-dynamic-binding': [
    {
      question: 'What is static (early) binding?',
      options: [
        'Binding a call to a method’s implementation at compile time (overloaded, static, private, final methods)',
        'Choosing a method’s implementation while the program runs',
        'Binding an object to a thread of execution',
        'Loading a class into memory on first access',
      ],
    },
    {
      question: 'What is dynamic (late) binding?',
      options: [
        'Choosing the concrete implementation of an overridden method at runtime by the object’s actual type',
        'Determining the called method at compile time',
        'Linking external libraries when building the project',
        'Automatically creating objects at application startup',
      ],
    },
    {
      question: 'For which methods does Java use static binding?',
      options: [
        'For static, private, final and overloaded methods',
        'Only for abstract methods',
        'For all overridden methods',
        'Only for interface methods',
      ],
    },
  ],
  'message-passing': [
    {
      question: 'According to the OOP paradigm, how can you change an object’s state?',
      options: [
        'Send the object a message (call a method), in response to which the object may change its state',
        'Directly change its private fields from anywhere in the program',
        'Overwrite the object’s memory region using the OS',
        'An object’s state cannot be changed in OOP at all',
      ],
    },
    {
      question: 'What does “message passing” between objects mean in OOP?',
      options: [
        'Calling methods of some objects by other objects',
        'Sending data over the network between servers',
        'Exchanging messages through a broker like Kafka',
        'Copying one object’s fields into another',
      ],
    },
  ],
};

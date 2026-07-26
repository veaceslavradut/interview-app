// Английские переводы: oop
export const oop = {
    title: 'OOP',
    description: 'Object-oriented programming',
    questions: {
      'what-is-oop': {
        question: 'What is OOP?',
        answer: `Object-oriented programming (OOP) is a programming methodology based on representing a program as a collection of objects, each of which is an instance of a particular class, with classes forming an inheritance hierarchy.

- object-oriented programming uses objects, not algorithms, as its fundamental logical building blocks;
- every object is an instance of a particular class;
- classes form hierarchies.

A program is considered object-oriented only if all three requirements are met. In particular, programming that does not use inheritance is called programming with abstract data types rather than object-oriented programming.

According to the OOP paradigm, a program consists of objects exchanging messages. Objects may have state, and the only way to change an object's state is to send it a message, in response to which the object may change its own state.`,
      },
      'oop-principles': {
        question: 'Name the core principles of OOP.',
        answer: `The core principles of OOP:

- **Encapsulation** — hiding an object's internal implementation and providing access to it only through a public interface.
- **Inheritance** — a mechanism that allows a new class to be defined based on an existing one, reusing its properties and functionality.
- **Polymorphism** — the ability of objects with the same interface to have different implementations.
- **Abstraction** — highlighting the significant characteristics of an object while ignoring the insignificant ones.

Three "pillars" of OOP are often singled out: encapsulation, inheritance, and polymorphism; abstraction is considered the fourth principle.`,
      },
      encapsulation: {
        question: 'What is "encapsulation"?',
        answer: `**Encapsulation** is an OOP principle in which data (state) and the methods (behavior) that operate on that data are combined into a single component — a class — while the internal implementation is hidden from the outside world.

In Java, encapsulation is achieved through:

- access modifiers (\`private\`, \`protected\`, \`public\`, package-private);
- providing public accessor methods (getters/setters) instead of direct field access.

Benefits of encapsulation:

- data integrity control (validation in setters);
- the ability to change the internal implementation without affecting client code;
- reduced coupling between system components.`,
      },
      inheritance: {
        question: 'What is "inheritance"?',
        answer: `**Inheritance** is a mechanism that allows a new class to be defined based on an existing (parent) class. The properties and functionality of the parent class are reused by the new class.

In Java, inheritance is implemented with the \`extends\` keyword:

\`\`\`java
class Animal {
    void eat() { System.out.println("eating..."); }
}

class Dog extends Animal {
    void bark() { System.out.println("barking..."); }
}
\`\`\`

Key aspects of inheritance in Java:

- a class can inherit from only one class (single inheritance);
- multiple inheritance of behavior is possible through interfaces;
- all classes implicitly inherit from \`java.lang.Object\`;
- constructors are not inherited;
- members with the \`private\` modifier are inherited but not directly accessible.`,
      },
      polymorphism: {
        question: 'What is "polymorphism"?',
        answer: `**Polymorphism** is the ability of objects with the same interface to have different implementations; the ability to handle objects of different types uniformly.

In Java there are two kinds:

- **Compile-time (static) polymorphism** — method overloading: several methods with the same name but different parameters.
- **Runtime (dynamic) polymorphism** — method overriding: a subclass provides its own implementation of a parent method, and the concrete implementation is chosen at runtime.

\`\`\`java
Animal animal = new Dog();
animal.makeSound(); // Dog's implementation is invoked
\`\`\`

Polymorphism makes it possible to write generic code that works with a base type without knowing about the concrete implementations.`,
      },
      abstraction: {
        question: 'What is "abstraction"?',
        answer: `**Abstraction** means highlighting the characteristics of an object that are significant in the context of the task while ignoring insignificant details.

Abstraction lets us work with objects without going into their implementation details: we describe **what** an object does, not **how** it does it.

In Java, abstraction is implemented through:

- **abstract classes** (\`abstract class\`) — classes that cannot be instantiated and may contain abstract methods;
- **interfaces** (\`interface\`) — contracts that describe behavior without implementation.

Example: a driver does not need to know how the engine works to drive a car — the interface (steering wheel, pedals) is enough.`,
      },
      'message-passing': {
        question: 'What is "message passing"?',
        answer: `**Message passing** is the way objects interact in OOP: one object "sends a message" to another, and the receiver reacts by executing the corresponding method.

In classic object-oriented languages (Java, C++), message passing boils down to **method invocation**: calling an object's method is sending it a message.

Key points:

- the object receiving the message decides for itself how to react to it (late binding);
- the sender does not care about the receiver's internal implementation;
- the only way to change an object's state is to send it a message.

This approach ensures loose coupling and high modularity of the system.`,
      },
      'class-object-interface': {
        question: 'Explain the core OOP concepts: "class", "object", "interface".',
        answer: `A **class** is a template (description) from which objects are created. A class defines state (fields) and behavior (methods). A class is a data type describing the common characteristics of a set of similar objects.

An **object** is an instance of a class, a concrete entity that has:

- **state** — the values of its fields;
- **behavior** — its methods;
- **identity** — uniqueness among other objects.

An **interface** is a contract defining a set of methods that a class must implement. An interface describes **what** an object must do, but not **how**. In Java, a class can implement multiple interfaces, which provides multiple inheritance of type.

\`\`\`java
interface Movable {
    void move();
}

class Car implements Movable {
    @Override
    public void move() { System.out.println("Car is moving"); }
}

Movable car = new Car(); // the car object is an instance of the Car class
\`\`\``,
      },
      'oop-pros-cons': {
        question: 'What are the advantages and disadvantages of the object-oriented approach to programming?',
        answer: `**Advantages:**

- models built on objects are close to the problem domain — the code is easier to understand;
- modularity: the program consists of independent components;
- code reuse through inheritance and composition;
- ease of maintenance and extension (changes are localized);
- encapsulation reduces the impact of changes on the rest of the code;
- polymorphism enables flexible, generic code.

**Disadvantages:**

- reduced performance: dynamic binding, extra levels of indirection, object creation overhead;
- increased memory consumption (object headers, references);
- entry barrier: designing class hierarchies correctly requires experience;
- OOP can be overkill for small tasks;
- a poorly designed inheritance hierarchy is hard to refactor.`,
      },
      'is-a-has-a': {
        question: 'What do the expressions "is-a" and "has-a" mean in terms of OOP principles?',
        answer: `The expressions **"is-a"** and **"has-a"** describe two kinds of relationships between classes:

**"Is-a"** — the **inheritance** relationship. If class B "is a" class A, then B inherits from A.

\`\`\`java
class Dog extends Animal { } // A dog IS an animal
\`\`\`

**"Has-a"** — the **composition/aggregation** relationship. If class A "has a" class B, then A holds a reference to B as a field.

\`\`\`java
class Car {
    private Engine engine; // A car HAS an engine
}
\`\`\`

Practical rule: if you cannot honestly say "is-a" about two entities, do not use inheritance — prefer composition (the "composition over inheritance" principle).`,
      },
      'composition-aggregation': {
        question: 'What is the difference between composition and aggregation?',
        answer: `Composition and aggregation are kinds of association — the "has-a" relationship. The difference lies in the strength of the bond and lifecycle ownership.

**Composition** — a strong bond: the part cannot exist without the whole. The whole controls the part's lifecycle.

\`\`\`java
class Car {
    private final Engine engine = new Engine(); // created together with Car
}
// when the Car is destroyed, the engine "dies" too
\`\`\`

**Aggregation** — a weak bond: the part can exist independently of the whole and can be shared by several objects.

\`\`\`java
class Department {
    private List<Employee> employees; // employees exist without the department too
}
\`\`\`

In short: composition — "owns", aggregation — "uses".`,
      },
      'static-dynamic-binding': {
        question: 'What are static and dynamic binding?',
        answer: `**Binding** is matching a method call to its concrete implementation.

**Static (early) binding** happens at **compile time**. The compiler knows exactly which method will be called. In Java, the following are statically bound:

- \`static\` methods;
- \`private\` methods;
- \`final\` methods;
- constructors;
- overloaded methods (signature selection).

**Dynamic (late) binding** happens at **runtime** based on the actual type of the object. This is how overridden virtual methods work:

\`\`\`java
Animal a = new Dog();
a.makeSound(); // Dog's implementation is chosen at runtime
\`\`\`

Dynamic binding is the foundation of runtime polymorphism; in the JVM it is implemented via virtual method tables (vtable).`,
      },
    },
  };

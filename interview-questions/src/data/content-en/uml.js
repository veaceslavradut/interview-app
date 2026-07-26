// Английские переводы: uml
export const uml = {
    title: 'UML',
    description: 'Unified Modeling Language',
    questions: {
      'uml-diagrams': {
        question: 'What is UML? What kinds of diagrams do you know?',
        answer: `**UML (Unified Modeling Language)** is a unified graphical modeling language for describing, visualizing, and documenting software systems.

Diagrams fall into two groups:

**Structural (static):**

- **class diagram (Class Diagram)** — classes, attributes, methods, relationships — the most widely used;
- component diagram — modules and their dependencies;
- deployment diagram — physical placement on servers;
- object, package, and composite structure diagrams.

**Behavioral (dynamic):**

- **sequence diagram (Sequence)** — interaction of objects over time;
- **use case diagram (Use Case)** — actors and usage scenarios;
- activity diagram (Activity) — workflows, similar to flowcharts;
- state machine diagram (State Machine) — an object's lifecycle;
- communication diagram, timing diagram.

In practice, the most commonly used ones are: class, sequence, use case, and activity diagrams. Popular tools: PlantUML, Mermaid, draw.io, Enterprise Architect.`,
      },
      'class-diagram-relations': {
        question: 'What kinds of relationships exist on a class diagram?',
        answer: `Relationships on a class diagram (from weakest to strongest):

**Dependency** — dashed arrow \`- - ->\`: class A uses B (method parameter, local variable). A change in B may affect A.

**Association** — solid line \`——>\`: A holds a reference to B (a field). Multiplicity is specified: 1, 0..1, 1..*, *.

**Aggregation** — line with a **hollow diamond** \`◇——\`: "part-whole", the part can exist without the whole (department ◇— employees).

**Composition** — line with a **filled diamond** \`◆——\`: strict "part-whole", the part's lifecycle is managed by the whole (house ◆— rooms).

**Inheritance/Generalization** — solid line with a **hollow triangle** \`——▷\`: extends.

**Realization** — dashed line with a hollow triangle \`- - -▷\`: implements.

Class member notation: \`+\` public, \`-\` private, \`#\` protected, \`~\` package, underline — static, *italics* — abstract.`,
      },
      'sequence-diagram': {
        question: 'What does a sequence diagram show?',
        answer: `A **sequence diagram** shows the interaction of objects over time: which messages are passed, in what order, and between whom.

Elements:

- **participants (lifelines)** — objects/actors at the top, with vertical dashed lifelines going down;
- **activation bar** — a rectangle on the lifeline: the object is performing work;
- **messages**:
  - solid arrow with a filled arrowhead — synchronous call;
  - solid arrow with an open arrowhead — asynchronous message;
  - dashed arrow — return of a result;
- **combined fragments**: \`alt\` (if/else), \`opt\` (if), \`loop\` (loop), \`par\` (parallel), \`ref\` (reference to another diagram);
- time flows **from top to bottom**.

Example (PlantUML):

\`\`\`
@startuml
actor User
User -> Controller : POST /orders
Controller -> Service : createOrder(dto)
Service -> Repository : save(order)
Repository --> Service : order
Service --> Controller : orderId
Controller --> User : 201 Created
@enduml
\`\`\`

Use cases: documenting API scenarios, analyzing complex microservice interactions, onboarding new developers.`,
      },
    },
  };

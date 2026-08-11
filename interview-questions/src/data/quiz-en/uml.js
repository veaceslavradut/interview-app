// Английский перевод банка квиза: uml. Порядок вариантов и опций — как в RU.
export const uml = {
  'uml-diagrams': [
    {
      question: 'Into which two groups are UML diagrams divided?',
      options: [
        'Structural (class, component) and behavioural (sequence, activity)',
        'Textual and graphical',
        'Client and server',
        'Static and compiled',
      ],
    },
    {
      question: 'Which group does a class diagram belong to?',
      options: [
        'Structural diagrams',
        'Behavioural diagrams',
        'Deployment diagrams',
        'A class diagram is not a UML diagram',
      ],
    },
  ],
  'class-diagram-relations': [
    {
      question: 'How is composition shown on a class diagram?',
      options: [
        'A filled diamond on the side of the whole',
        'An empty (unfilled) diamond',
        'A dashed arrow',
        'A double solid line',
      ],
    },
    {
      question: 'What does an arrow with a hollow triangle mean on a class diagram?',
      options: [
        'Inheritance (generalization): the subclass points to the parent',
        'Composition',
        'Dependency',
        'A many-to-many association',
      ],
    },
  ],
  'sequence-diagram': [
    {
      question: 'What does a sequence diagram show?',
      options: [
        'Interaction of objects over time: the order of message exchange top to bottom',
        'The structure of classes and their fields',
        'The physical placement of servers',
        'The class inheritance hierarchy',
      ],
    },
    {
      question: 'What does the vertical dashed line under a participant mean on a sequence diagram?',
      options: [
        'The lifeline — the object’s existence over time',
        'Inheritance from another object',
        'A remote call over the network',
        'An error in the diagram',
      ],
    },
  ],
};

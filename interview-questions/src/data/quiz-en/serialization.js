// Английский перевод банка квиза: serialization. Порядок вариантов и опций — как в RU.
export const serialization = {
  'what-is-serialization': [
    {
      question: 'What is serialization?',
      options: [
        'Converting an object into a byte stream for saving or transmitting, with the ability to restore it later (deserialization)',
        'Performing operations strictly sequentially, without parallelism',
        'Numbering objects in a collection',
        'Compressing objects to save heap memory',
      ],
    },
    {
      question: 'What is special about the Serializable interface?',
      options: [
        'It is a marker interface — it has no methods and merely marks a class as serializable',
        'It requires implementing serialize() and deserialize() methods',
        'It extends Cloneable',
        'It applies only to collections',
      ],
    },
  ],
  'transient': [
    {
      question: 'What does the transient modifier do?',
      options: [
        'Excludes a field from serialization — after deserialization it gets the default value',
        'Makes the field visible to all threads',
        'Forbids changing the field after initialization',
        'Marks the field as temporary for the garbage collector',
      ],
    },
    {
      question: 'What value will a transient int field have after an object is deserialized?',
      options: [
        '0 — the default value for int',
        'The last saved value',
        'A random value',
        'The field throws a NullPointerException on read',
      ],
    },
  ],
  'serialversionuid': [
    {
      question: 'What is serialVersionUID for?',
      options: [
        'Controlling class-version compatibility on deserialization — a mismatch throws InvalidClassException',
        'Uniquely identifying each object in the heap',
        'Encrypting serialized data',
        'Counting how many times an object was serialized',
      ],
    },
    {
      question: 'What happens on deserialization if a class’s serialVersionUID changed?',
      options: [
        'An InvalidClassException is thrown',
        'The object is restored with default fields',
        'The JVM automatically converts the data to the new version',
        'Nothing — serialVersionUID doesn’t affect deserialization',
      ],
    },
  ],
  'custom-serialization': [
    {
      question: 'How do you customize a class’s serialization logic?',
      options: [
        'Define private writeObject/readObject methods or implement the Externalizable interface',
        'Override the toString and valueOf methods',
        'Add a @CustomSerialization annotation',
        'Custom serialization logic is impossible in Java',
      ],
    },
    {
      question: 'How does Externalizable differ from Serializable?',
      options: [
        'Externalizable requires explicitly implementing writeExternal/readExternal — the developer fully controls the format',
        'Externalizable serializes objects only to XML',
        'Externalizable requires no methods',
        'Externalizable is always faster automatically in every case',
      ],
    },
  ],
};

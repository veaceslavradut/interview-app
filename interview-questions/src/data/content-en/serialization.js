// Английские переводы: serialization
export const serialization = {
    title: 'Serialization',
    description: 'Object serialization',
    questions: {
      'what-is-serialization': {
        question: 'What is serialization and how is it implemented in Java?',
        answer: `**Serialization** is the process of converting an object into a byte stream for storage or transmission. **Deserialization** is the reverse process.

Standard serialization in Java is implemented via:

- the marker interface \`java.io.Serializable\` (no methods);
- the \`ObjectOutputStream\` / \`ObjectInputStream\` classes.

\`\`\`java
class User implements Serializable {
    private static final long serialVersionUID = 1L;
    private String name;
}

// serialization
try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("user.bin"))) {
    oos.writeObject(user);
}

// deserialization
try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("user.bin"))) {
    User user = (User) ois.readObject();
}
\`\`\`

Key points: the entire object graph is serialized; all fields must be serializable; the constructor is **not called** during deserialization.`,
      },
      transient: {
        question: 'What is the transient keyword?',
        answer: `**transient** is a field modifier that excludes the field from standard serialization.

\`\`\`java
class User implements Serializable {
    private String login;
    private transient String password; // will not go into the byte stream
    private transient Connection connection; // non-serializable resource
}
\`\`\`

After deserialization, transient fields receive their **default values**: \`null\` for references, \`0\`/\`false\` for primitives.

When to use:

- sensitive data (passwords, keys);
- non-serializable resources (connections, streams, locks);
- computed/cached fields that can be restored.

Note: \`static\` fields are not serialized either (they belong to the class, not the object).`,
      },
      serialversionuid: {
        question: 'Why is serialVersionUID needed?',
        answer: `**serialVersionUID** is a unique version identifier of a serializable class.

\`\`\`java
private static final long serialVersionUID = 1L;
\`\`\`

During deserialization the JVM compares the \`serialVersionUID\` from the byte stream with the UID of the current class. On mismatch, an \`InvalidClassException\` is thrown.

If the UID is not declared explicitly, the JVM **computes it automatically** based on the class structure (name, fields, methods). The problem: any change to the class (even adding a method) changes the computed UID and breaks compatibility with previously serialized data.

**Recommendation**: always declare \`serialVersionUID\` explicitly. For compatible changes (adding a field) keep the UID — new fields will get default values when reading old data. For incompatible changes, increment the UID.`,
      },
      'custom-serialization': {
        question: 'How can the serialization process be customized? (writeObject/readObject, Externalizable)',
        answer: `**Option 1: writeObject/readObject methods** — customizing standard serialization:

\`\`\`java
private void writeObject(ObjectOutputStream oos) throws IOException {
    oos.defaultWriteObject();          // standard part
    oos.writeObject(encrypt(password)); // custom logic
}

private void readObject(ObjectInputStream ois) throws IOException, ClassNotFoundException {
    ois.defaultReadObject();
    this.password = decrypt((String) ois.readObject());
}
\`\`\`

**Option 2: the Externalizable interface** — full control:

\`\`\`java
class User implements Externalizable {
    public void writeExternal(ObjectOutput out) { ... }
    public void readExternal(ObjectInput in) { ... }
}
\`\`\`

Externalizable differences: only what you explicitly wrote is serialized; the **no-arg constructor is called** during deserialization (it is required); usually faster and more compact.

Also: \`writeReplace()\`/\`readResolve()\` — replacing the object during serialization/deserialization (used for Singleton).`,
      },
    },
  };

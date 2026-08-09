// Категория: serialization
export const serialization = {
    id: 'serialization',
    title: 'Сериализация',
    icon: '📤',
    description: 'Сериализация объектов',
    questions: [
      {
        id: 'what-is-serialization',
        difficulty: 'easy',
        tags: ['basics'],
        related: ['transient', 'serialversionuid'],
        question: 'Что такое сериализация и как она реализована в Java?',
        answer: `**Сериализация** — процесс преобразования объекта в поток байтов для сохранения или передачи. **Десериализация** — обратный процесс.

В Java стандартная сериализация реализуется через:

- маркерный интерфейс \`java.io.Serializable\` (без методов);
- классы \`ObjectOutputStream\` / \`ObjectInputStream\`.

\`\`\`java
class User implements Serializable {
    private static final long serialVersionUID = 1L;
    private String name;
}

// сериализация
try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("user.bin"))) {
    oos.writeObject(user);
}

// десериализация
try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("user.bin"))) {
    User user = (User) ois.readObject();
}
\`\`\`

Особенности: сериализуется весь граф объектов; все поля должны быть сериализуемыми; конструктор при десериализации **не вызывается**.`,
      },
      {
        id: 'transient',
        difficulty: 'easy',
        tags: ['basics'],
        related: ['what-is-serialization'],
        question: 'Что такое ключевое слово transient?',
        answer: `**transient** — модификатор поля, исключающий его из стандартной сериализации.

\`\`\`java
class User implements Serializable {
    private String login;
    private transient String password; // не попадёт в поток байтов
    private transient Connection connection; // несериализуемый ресурс
}
\`\`\`

После десериализации transient-поля получают **значения по умолчанию**: \`null\` для ссылок, \`0\`/\`false\` для примитивов.

Когда использовать:

- чувствительные данные (пароли, ключи);
- несериализуемые ресурсы (соединения, потоки, блокировки);
- вычисляемые/кэшируемые поля, которые можно восстановить.

Примечание: \`static\` поля также не сериализуются (они принадлежат классу, а не объекту).`,
      },
      {
        id: 'serialversionuid',
        difficulty: 'medium',
        tags: ['basics'],
        related: ['what-is-serialization'],
        question: 'Зачем нужен serialVersionUID?',
        answer: `**serialVersionUID** — уникальный идентификатор версии сериализуемого класса.

\`\`\`java
private static final long serialVersionUID = 1L;
\`\`\`

При десериализации JVM сравнивает \`serialVersionUID\` из потока байтов с UID текущего класса. При несовпадении бросается \`InvalidClassException\`.

Если UID не объявлен явно, JVM **вычисляет его автоматически** на основе структуры класса (имени, полей, методов). Проблема: любое изменение класса (даже добавление метода) меняет вычисленный UID и ломает совместимость с ранее сериализованными данными.

**Рекомендация**: всегда объявлять \`serialVersionUID\` явно. При совместимых изменениях (добавление поля) UID сохраняют — новые поля при чтении старых данных получат значения по умолчанию. При несовместимых изменениях UID увеличивают.`,
      },
      {
        id: 'custom-serialization',
        difficulty: 'hard',
        tags: ['advanced'],
        related: ['what-is-serialization'],
        question: 'Как настроить процесс сериализации? (writeObject/readObject, Externalizable)',
        answer: `**Способ 1: методы writeObject/readObject** — кастомизация стандартной сериализации:

\`\`\`java
private void writeObject(ObjectOutputStream oos) throws IOException {
    oos.defaultWriteObject();          // стандартная часть
    oos.writeObject(encrypt(password)); // кастомная логика
}

private void readObject(ObjectInputStream ois) throws IOException, ClassNotFoundException {
    ois.defaultReadObject();
    this.password = decrypt((String) ois.readObject());
}
\`\`\`

**Способ 2: интерфейс Externalizable** — полный контроль:

\`\`\`java
class User implements Externalizable {
    public void writeExternal(ObjectOutput out) { ... }
    public void readExternal(ObjectInput in) { ... }
}
\`\`\`

Отличия Externalizable: сериализуется только то, что вы явно записали; при десериализации **вызывается конструктор без аргументов** (он обязателен); обычно быстрее и компактнее.

Также: \`writeReplace()\`/\`readResolve()\` — подмена объекта при сериализации/десериализации (используется для Singleton).`,
      },
    ],
  };

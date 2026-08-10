// Категория: io
export const io = {
    id: 'io',
    title: 'Потоки ввода-вывода в Java',
    icon: '💾',
    description: 'I/O и NIO',
    questions: [
      {
        id: 'io-streams',
        difficulty: 'easy',
        tags: ['basics'],
        related: ['io-vs-nio'],
        question: 'Какие виды потоков ввода-вывода существуют в Java?',
        answer: `Потоки I/O в Java делятся по двум признакам:

**По типу данных:**

- **байтовые** — \`InputStream\` / \`OutputStream\` (для бинарных данных: файлы, изображения, сеть);
- **символьные** — \`Reader\` / \`Writer\` (для текста, с учётом кодировки).

**По направлению:** ввод (Input/Reader) и вывод (Output/Writer).

Основные реализации:

- файловые: \`FileInputStream\`, \`FileOutputStream\`, \`FileReader\`, \`FileWriter\`;
- буферизованные: \`BufferedInputStream\`, \`BufferedReader\` и др.;
- данные: \`DataInputStream\`/\`DataOutputStream\` (примитивы);
- объекты: \`ObjectInputStream\`/\`ObjectOutputStream\` (сериализация);
- мосты между байтами и символами: \`InputStreamReader\`, \`OutputStreamWriter\`.

Используется паттерн **Декоратор**: потоки оборачиваются друг в друга.`,
      },
      {
        id: 'io-vs-nio',
        difficulty: 'medium',
        tags: ['nio'],
        related: ['io-streams'],
        question: 'В чем разница между IO и NIO?',
        answer: `**IO (java.io)** — классический блокирующий ввод-вывод:

- потокоориентированный (stream-oriented): данные читаются последовательно байт за байтом;
- **блокирующий**: поток ждёт завершения операции;
- один поток — одно соединение.

**NIO (java.nio, New I/O)** — неблокирующий ввод-вывод:

- буфероориентированный (buffer-oriented): данные читаются в \`Buffer\` через \`Channel\`;
- поддерживает **неблокирующий режим**;
- **Selector** — мультиплексирование: один поток обслуживает множество каналов;
- memory-mapped файлы, файловые блокировки.

Ключевые компоненты NIO: \`Channel\` (FileChannel, SocketChannel), \`Buffer\` (ByteBuffer), \`Selector\`.

**NIO.2 (Java 7)** добавил: \`Path\`, \`Files\`, \`WatchService\`, асинхронные каналы (\`AsynchronousFileChannel\`).`,
      },
      {
        id: 'try-with-resources',
        difficulty: 'easy',
        tags: ['basics'],
        related: [],
        question: 'Что такое try-with-resources?',
        answer: `**try-with-resources** (Java 7) — конструкция для автоматического закрытия ресурсов, реализующих интерфейс \`AutoCloseable\`.

\`\`\`java
try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"));
     PrintWriter writer = new PrintWriter("out.txt")) {
    writer.println(reader.readLine());
} // ресурсы закроются автоматически в обратном порядке
\`\`\`

Преимущества перед try-finally:

- меньше шаблонного кода;
- ресурсы гарантированно закрываются даже при исключении;
- **suppressed exceptions**: если исключение возникло и в try, и при закрытии, исключение из close() подавляется и доступно через \`getSuppressed()\` (в try-finally оно бы «затёрло» первичное).

С Java 9 можно использовать effectively final переменные, объявленные вне блока: \`try (reader) { ... }\`.`,
      },
      {
        id: 'files-path',
        difficulty: 'medium',
        tags: ['nio', 'files'],
        related: ['io-vs-nio'],
        question: 'Как работать с файлами через Files и Path (NIO.2)?',
        answer: `**Path** — абстракция пути к файлу (замена \`File\`), **Files** — утилитный класс операций.

\`\`\`java
Path path = Path.of("data", "file.txt"); // или Paths.get(...)

// чтение
String content = Files.readString(path);              // Java 11
List<String> lines = Files.readAllLines(path);
try (Stream<String> stream = Files.lines(path)) { ... } // лениво

// запись
Files.writeString(path, "hello");
Files.write(path, bytes, StandardOpenOption.APPEND);

// операции
Files.exists(path);
Files.createDirectories(path.getParent());
Files.copy(src, dst, StandardCopyOption.REPLACE_EXISTING);
Files.move(src, dst);
Files.delete(path);

// обход дерева
try (Stream<Path> walk = Files.walk(dir)) { ... }
\`\`\`

Преимущества над \`File\`: информативные исключения, поддержка символических ссылок, атрибуты файлов, WatchService.`,
      },
    ],
  };

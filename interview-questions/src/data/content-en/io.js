// Английские переводы: io
export const io = {
    title: 'Java I/O Streams',
    description: 'I/O and NIO',
    questions: {
      'io-streams': {
        question: 'What kinds of I/O streams exist in Java?',
        answer: `Java I/O streams are classified along two dimensions:

**By data type:**

- **byte streams** — \`InputStream\` / \`OutputStream\` (for binary data: files, images, network);
- **character streams** — \`Reader\` / \`Writer\` (for text, encoding-aware).

**By direction:** input (Input/Reader) and output (Output/Writer).

Main implementations:

- file: \`FileInputStream\`, \`FileOutputStream\`, \`FileReader\`, \`FileWriter\`;
- buffered: \`BufferedInputStream\`, \`BufferedReader\`, etc.;
- data: \`DataInputStream\`/\`DataOutputStream\` (primitives);
- objects: \`ObjectInputStream\`/\`ObjectOutputStream\` (serialization);
- bridges between bytes and characters: \`InputStreamReader\`, \`OutputStreamWriter\`.

The **Decorator** pattern is used: streams are wrapped around each other.`,
      },
      'io-vs-nio': {
        question: 'What is the difference between IO and NIO?',
        answer: `**IO (java.io)** — the classic blocking I/O:

- stream-oriented: data is read sequentially, byte by byte;
- **blocking**: the thread waits for the operation to complete;
- one thread — one connection.

**NIO (java.nio, New I/O)** — non-blocking I/O:

- buffer-oriented: data is read into a \`Buffer\` through a \`Channel\`;
- supports a **non-blocking mode**;
- **Selector** — multiplexing: a single thread serves many channels;
- memory-mapped files, file locks.

Key NIO components: \`Channel\` (FileChannel, SocketChannel), \`Buffer\` (ByteBuffer), \`Selector\`.

**NIO.2 (Java 7)** added: \`Path\`, \`Files\`, \`WatchService\`, asynchronous channels (\`AsynchronousFileChannel\`).`,
      },
      'try-with-resources': {
        question: 'What is try-with-resources?',
        answer: `**try-with-resources** (Java 7) is a construct for automatically closing resources that implement the \`AutoCloseable\` interface.

\`\`\`java
try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"));
     PrintWriter writer = new PrintWriter("out.txt")) {
    writer.println(reader.readLine());
} // resources are closed automatically in reverse order
\`\`\`

Advantages over try-finally:

- less boilerplate code;
- resources are guaranteed to be closed even if an exception occurs;
- **suppressed exceptions**: if an exception is thrown both in try and during closing, the exception from close() is suppressed and available via \`getSuppressed()\` (with try-finally it would have "overwritten" the primary one).

Since Java 9 you can use effectively final variables declared outside the block: \`try (reader) { ... }\`.`,
      },
      'files-path': {
        question: 'How do you work with files using Files and Path (NIO.2)?',
        answer: `**Path** is an abstraction of a file path (a replacement for \`File\`); **Files** is a utility class of operations.

\`\`\`java
Path path = Path.of("data", "file.txt"); // or Paths.get(...)

// reading
String content = Files.readString(path);              // Java 11
List<String> lines = Files.readAllLines(path);
try (Stream<String> stream = Files.lines(path)) { ... } // lazy

// writing
Files.writeString(path, "hello");
Files.write(path, bytes, StandardOpenOption.APPEND);

// operations
Files.exists(path);
Files.createDirectories(path.getParent());
Files.copy(src, dst, StandardCopyOption.REPLACE_EXISTING);
Files.move(src, dst);
Files.delete(path);

// tree traversal
try (Stream<Path> walk = Files.walk(dir)) { ... }
\`\`\`

Advantages over \`File\`: informative exceptions, symbolic link support, file attributes, WatchService.`,
      },
    },
  };

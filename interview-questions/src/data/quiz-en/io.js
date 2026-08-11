// Английский перевод банка квиза: io. Порядок вариантов и опций — как в RU.
export const io = {
  'io-streams': [
    {
      question: 'What are the two main kinds of I/O streams in Java IO?',
      options: [
        'Byte streams (InputStream/OutputStream) and character streams (Reader/Writer)',
        'Synchronous and asynchronous',
        'Local and network',
        'Compressed and uncompressed',
      ],
    },
    {
      question: 'Which classes should you use to read text data?',
      options: [
        'Character streams Reader/Writer — they handle encodings correctly',
        'Only InputStream — text is always read as bytes',
        'The Thread and Runnable classes',
        'The Socket and ServerSocket classes',
      ],
    },
  ],
  'io-vs-nio': [
    {
      question: 'How does NIO differ from classic IO?',
      options: [
        'NIO uses buffers, channels, and selectors and supports non-blocking mode; IO is blocking and stream-oriented',
        'NIO works only with the network, IO only with files',
        'NIO is a legacy API replaced by classic IO',
        'IO is faster than NIO in all scenarios',
      ],
    },
    {
      question: 'What does a Selector let you do in NIO?',
      options: [
        'Serve many channels with one thread, reacting to readiness for operations',
        'Choose the fastest file system',
        'Sort data in a buffer',
        'Automatically close unused files',
      ],
    },
  ],
  'try-with-resources': [
    {
      question: 'What does the try-with-resources construct do?',
      options: [
        'Automatically closes resources implementing AutoCloseable when the try block finishes',
        'Repeats the try block until it succeeds',
        'Allocates extra memory for the try block',
        'Runs the try block in a separate thread',
      ],
    },
    {
      question: 'Which interface must a resource implement to be used in try-with-resources?',
      options: ['AutoCloseable', 'Serializable', 'Comparable', 'Runnable'],
    },
  ],
  'files-path': [
    {
      question: 'What are Path and Files from NIO.2?',
      options: [
        'Path is an abstraction of a filesystem path; Files is a utility class of file operations (read, copy, delete)',
        'Path is a file’s content; Files is the list of open files',
        'They are legacy classes replaced by java.io.File',
        'Classes for working exclusively with network resources',
      ],
    },
    {
      question: 'How do you read all lines of a text file the modern way?',
      options: [
        'Files.readAllLines(path) or Files.lines(path)',
        'new File(path).readLines()',
        'Path.read(path)',
        'System.in.readAllLines(path)',
      ],
    },
  ],
};

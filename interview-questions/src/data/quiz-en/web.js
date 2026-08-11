// Английский перевод банка квиза: web. Порядок вариантов и опций — как в RU.
export const web = {
  'http': [
    {
      question: 'Which statement about the HTTP protocol is CORRECT?',
      options: [
        'HTTP is stateless: the server keeps no context between requests',
        'HTTP automatically stores each client’s state on the server',
        'HTTP works only with text data',
        'An HTTP request contains no headers',
      ],
    },
    {
      question: 'Which HTTP methods are idempotent?',
      options: [
        'GET, PUT, DELETE — a repeated call gives the same result',
        'Only POST',
        'POST and PATCH',
        'There are no idempotent methods in HTTP',
      ],
    },
  ],
  'rest': [
    {
      question: 'What is REST?',
      options: [
        'An architectural style for web services: resources with URIs, standard HTTP methods, stateless interaction',
        'A binary data-transfer protocol over TCP',
        'A library for building web UIs',
        'A data-serialization format, an analogue of JSON',
      ],
    },
    {
      question: 'Which HTTP method is used by REST convention to create a resource?',
      options: ['POST', 'GET', 'HEAD', 'OPTIONS'],
    },
  ],
  'browser-render': [
    {
      question: 'In what order does the browser render a page?',
      options: [
        'Builds DOM and CSSOM → render tree → layout (computing positions) → paint',
        'Paint → layout → building the DOM',
        'Immediately paints the HTML text without building a tree',
        'First runs all JavaScript, then builds the CSSOM, then the DOM',
      ],
    },
    {
      question: 'What is the DOM?',
      options: [
        'The Document Object Model — a tree of objects built by the browser from HTML',
        'A query language for the browser’s database',
        'A page-loading protocol',
        'An HTML-compression format for transmission',
      ],
    },
  ],
  'web-security': [
    {
      question: 'What is XSS (Cross-Site Scripting)?',
      options: [
        'Injecting a malicious script into a page that runs in other users’ browsers',
        'Overloading the server with many requests',
        'Brute-forcing a password',
        'Stealing physical access to the server',
      ],
    },
    {
      question: 'How do you protect against CSRF attacks?',
      options: [
        'Use CSRF tokens and the SameSite attribute for cookies',
        'Escape HTML output',
        'Use PreparedStatement',
        'Compress all server responses',
      ],
    },
  ],
};

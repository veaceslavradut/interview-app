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
  'same-origin-policy': [
    {
      question: 'What is the Same-Origin Policy (SOP)?',
      options: [
        'A browser rule: a script from one origin cannot by default read responses to another origin',
        'A server setting that encrypts all responses',
        'A load-balancing mechanism between domains',
        'A caching policy for static resources',
      ],
    },
  ],
  'cors': [
    {
      question: 'What does CORS do?',
      options: [
        'Lets the server, via headers, allow the browser to read responses to cross-origin requests',
        'Protects the server from any cross-origin requests at the network level',
        'Encrypts cookies when transferred between domains',
        'Speeds up requests by merging them into one',
      ],
    },
  ],
  'cors-preflight': [
    {
      question: 'What is a preflight request in CORS?',
      options: [
        'A preliminary OPTIONS request by which the browser asks the server for permission before a "non-simple" request',
        'The first GET request when loading the page',
        'A resend of the request on a 500 error',
        'A request to warm up the server cache',
      ],
    },
  ],
  'cors-credentials': [
    {
      question: 'Why can a wildcard "*" not be used with Access-Control-Allow-Credentials: true?',
      options: [
        'For security the browser requires an exact origin, otherwise any site could access data with the user\'s cookies',
        'Because a wildcard slows down request processing',
        'Because "*" is not supported by old browsers',
        'Because credentials work only over HTTP, not HTTPS',
      ],
    },
  ],
};

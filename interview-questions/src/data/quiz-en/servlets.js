// Английский перевод банка квиза: servlets. Порядок вариантов и опций — как в RU.
export const servlets = {
  'what-is-servlet': [
    {
      question: 'What is a servlet?',
      options: [
        'A Java class that runs on the server and handles requests (usually HTTP) inside a servlet container',
        'A script executed in the user’s browser',
        'A web-application configuration file',
        'A utility for deploying applications',
      ],
    },
    {
      question: 'Which methods make up a servlet’s lifecycle?',
      options: [
        'init() — once on creation, service() — per request, destroy() — on unload',
        'start(), run(), stop()',
        'open(), process(), close()',
        'create(), execute(), delete()',
      ],
    },
  ],
  'jsp': [
    {
      question: 'What is JSP?',
      options: [
        'A page with HTML and Java inserts that the container compiles into a servlet',
        'A programming language that replaces Java on the server',
        'A data-storage format similar to JSON',
        'A data-exchange protocol between browser and server',
      ],
    },
    {
      question: 'What does a JSP page turn into on first access?',
      options: [
        'It is compiled into a servlet',
        'It is turned into a static HTML file on disk',
        'It is sent to the browser and executed there',
        'It is converted to a PDF',
      ],
    },
  ],
  'jstl-el': [
    {
      question: 'What are JSTL and Expression Language (EL)?',
      options: [
        'JSTL is a standard tag library (loops, conditions); EL is the ${...} syntax for accessing data without Java code in JSP',
        'JSTL is a style language, EL a markup language',
        'They are two competing frameworks to replace JSP',
        'JSTL is a database, EL its driver',
      ],
    },
    {
      question: 'Why use JSTL and EL in JSP instead of scriptlets <% %>?',
      options: [
        'The code becomes cleaner and more declarative — logic is separated from presentation',
        'Scriptlets are not supported by any container',
        'JSTL runs in the browser and offloads the server',
        'EL automatically caches pages',
      ],
    },
  ],
  'session-tracking': [
    {
      question: 'What session-tracking methods exist in web applications?',
      options: [
        'Cookies, URL rewriting, hidden form fields, HttpSession',
        'Only the client’s IP address',
        'Only login and password on every request',
        'Sessions can’t be tracked — HTTP is stateless',
      ],
    },
    {
      question: 'How does the server most often tie requests to an HttpSession?',
      options: [
        'Via the JSESSIONID cookie sent by the browser with each request',
        'By the device’s MAC address',
        'By the User-Agent header',
        'By the request’s sequence number',
      ],
    },
  ],
};

// Английский перевод банка квиза: xml. Порядок вариантов и опций — как в RU.
export const xml = {
  'what-is-xml': [
    {
      question: 'What is XML?',
      options: [
        'An extensible markup language for storing and transmitting structured data with custom tags',
        'A programming language for web servers',
        'A binary data-compression format',
        'A network-packet routing protocol',
      ],
    },
    {
      question: 'What does a “well-formed” XML document mean?',
      options: [
        'The document follows syntax rules: one root element, closed tags, correct nesting',
        'The document passed validation against an XSD schema',
        'The document is under 1 MB',
        'The document contains only Latin characters',
      ],
    },
  ],
  'xml-parsers': [
    {
      question: 'How does a DOM parser differ from SAX?',
      options: [
        'DOM loads the whole document into memory as a tree; SAX is event-based, reading sequentially without loading everything',
        'SAX loads everything into memory, DOM is event-based',
        'DOM works only with HTML, SAX only with XML',
        'No difference — DOM and SAX are one parser',
      ],
    },
    {
      question: 'Which parser do you choose for a very large XML file with limited memory?',
      options: [
        'SAX or StAX — they don’t load the whole document into memory',
        'DOM — it is optimized for large files',
        'Any — memory use is the same for all',
        'Large XML files can’t be parsed',
      ],
    },
  ],
  'xsd-xpath': [
    {
      question: 'What is XSD for?',
      options: [
        'It describes an XML document’s schema: allowed elements, attributes, and types — for validation',
        'A query language for selecting nodes from XML',
        'An XML-compression format',
        'A library for converting XML to JSON',
      ],
    },
    {
      question: 'What is XPath used for?',
      options: [
        'A query language for navigating and selecting nodes in an XML tree',
        'Validating XML against a schema',
        'Styling XML for display in the browser',
        'Specifying the path to an XML file on disk',
      ],
    },
  ],
};

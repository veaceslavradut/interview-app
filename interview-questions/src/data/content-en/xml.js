// Английские переводы: xml
export const xml = {
    title: 'XML',
    description: 'XML and how to work with it in Java',
    questions: {
      'what-is-xml': {
        question: 'What is XML? What are the rules of a correct XML document?',
        answer: `**XML (eXtensible Markup Language)** is an extensible markup language for storing and transferring structured data. Unlike HTML, tags are not predefined.

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<order id="123">
    <customer>John Doe</customer>
    <items>
        <item price="100.50" quantity="2">Product A</item>
    </items>
</order>
\`\`\`

Rules of a **well-formed** document:

- exactly one root element;
- every opened tag is closed (\`<a></a>\` or \`<a/>\`);
- proper nesting (no overlapping);
- attribute values in quotes;
- case sensitivity (\`<Tag>\` ≠ \`<tag>\`);
- special characters escaped: \`&lt; &gt; &amp; &quot; &apos;\`.

A **valid** document is well-formed + conforms to a schema (XSD or DTD).

Additionally: namespaces (\`xmlns\`), CDATA sections (\`<![CDATA[ ... ]]>\`), comments \`<!-- -->\`.

XML vs JSON: XML — schemas, namespaces, attributes, XSLT; JSON — more compact and simpler, the standard for REST APIs.`,
      },
      'xml-parsers': {
        question: 'What ways of parsing XML exist in Java? (DOM, SAX, StAX)',
        answer: `**DOM (Document Object Model)** — loads the whole document into memory as a tree:

\`\`\`java
Document doc = DocumentBuilderFactory.newInstance()
    .newDocumentBuilder().parse(file);
NodeList items = doc.getElementsByTagName("item");
\`\`\`

- convenient navigation and modification; random access;
- high memory consumption — not suitable for large files.

**SAX (Simple API for XML)** — an event-driven push parser: reads a stream and invokes callbacks (\`startElement\`, \`characters\`, \`endElement\`):

- minimal memory, fast;
- read-only, forward-only; awkward logic (state kept in the handler).

**StAX (Streaming API for XML)** — a streaming pull parser: the application itself requests the next event (\`XMLStreamReader.next()\`):

- a balance: memory savings + control stays with the application; can also write XML.

**JAXB** — mapping XML ↔ Java objects via annotations (\`@XmlRootElement\`, \`@XmlElement\`): unmarshal/marshal without manual parsing. Removed from the JDK since Java 11 — added as a dependency (jakarta.xml.bind).

Choosing: small files + modification — DOM; huge files — SAX/StAX; object model — JAXB.

Security: disable external entities (XXE attacks): \`factory.setFeature(XMLConstants.FEATURE_SECURE_PROCESSING, true)\`.`,
      },
      'xsd-xpath': {
        question: 'What are XSD and XPath?',
        answer: `**XSD (XML Schema Definition)** is a language for describing the structure of an XML document: elements, attributes, types, multiplicity, constraints.

\`\`\`xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="order">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="customer" type="xs:string"/>
        <xs:element name="amount" type="xs:decimal"/>
      </xs:sequence>
      <xs:attribute name="id" type="xs:int" use="required"/>
    </xs:complexType>
  </xs:element>
</xs:schema>
\`\`\`

Advantages over DTD: data types, namespaces, and it is itself XML. Validation in Java: \`SchemaFactory\` + \`Validator\`.

**XPath** — a language for navigating the XML tree:

\`\`\`
/order/items/item          — absolute path
//item[@price > 100]       — all items with price > 100
/order/@id                 — attribute
//item[1]                  — first item
count(//item)              — function
\`\`\`

\`\`\`java
XPath xpath = XPathFactory.newInstance().newXPath();
String name = xpath.evaluate("/order/customer", doc);
\`\`\`

Related technologies: **XSLT** — transforming XML into other formats using XPath; XQuery — querying XML data.`,
      },
    },
  };

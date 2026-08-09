// Категория: xml
export const xml = {
    id: 'xml',
    title: 'XML',
    icon: '📄',
    description: 'XML и работа с ним в Java',
    questions: [
      {
        id: 'what-is-xml',
        difficulty: 'easy',
        tags: ['basics'],
        related: ['xml-parsers'],
        question: 'Что такое XML? Каковы правила корректного XML-документа?',
        answer: `**XML (eXtensible Markup Language)** — расширяемый язык разметки для хранения и передачи структурированных данных. В отличие от HTML, теги не предопределены.

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<order id="123">
    <customer>Иван Иванов</customer>
    <items>
        <item price="100.50" quantity="2">Товар А</item>
    </items>
</order>
\`\`\`

Правила **well-formed** (корректного) документа:

- ровно один корневой элемент;
- каждый открытый тег закрыт (\`<a></a>\` или \`<a/>\`);
- правильная вложенность (без пересечений);
- значения атрибутов в кавычках;
- регистрозависимость (\`<Tag>\` ≠ \`<tag>\`);
- спецсимволы экранированы: \`&lt; &gt; &amp; &quot; &apos;\`.

**Valid (валидный)** документ — well-formed + соответствует схеме (XSD или DTD).

Дополнительно: пространства имён (\`xmlns\`), CDATA-секции (\`<![CDATA[ ... ]]>\`), комментарии \`<!-- -->\`.

XML vs JSON: XML — схемы, неймспейсы, атрибуты, XSLT; JSON — компактнее и проще, стандарт для REST API.`,
      },
      {
        id: 'xml-parsers',
        difficulty: 'medium',
        tags: ['parsing'],
        related: ['what-is-xml'],
        question: 'Какие способы парсинга XML существуют в Java? (DOM, SAX, StAX)',
        answer: `**DOM (Document Object Model)** — загружает весь документ в память как дерево:

\`\`\`java
Document doc = DocumentBuilderFactory.newInstance()
    .newDocumentBuilder().parse(file);
NodeList items = doc.getElementsByTagName("item");
\`\`\`

- удобная навигация и модификация; произвольный доступ;
- высокий расход памяти — не подходит для больших файлов.

**SAX (Simple API for XML)** — событийный push-парсер: читает поток и вызывает колбэки (\`startElement\`, \`characters\`, \`endElement\`):

- минимальная память, быстрый;
- только чтение, только вперёд; неудобная логика (состояние в обработчике).

**StAX (Streaming API for XML)** — потоковый pull-парсер: приложение само запрашивает следующее событие (\`XMLStreamReader.next()\`):

- баланс: экономия памяти + контроль у приложения; умеет и писать XML.

**JAXB** — маппинг XML ↔ Java-объекты через аннотации (\`@XmlRootElement\`, \`@XmlElement\`): unmarshal/marshal без ручного парсинга. С Java 11 исключён из JDK — подключается как зависимость (jakarta.xml.bind).

Выбор: маленькие файлы + модификация — DOM; огромные файлы — SAX/StAX; объектная модель — JAXB.

Безопасность: отключайте внешние сущности (XXE-атаки): \`factory.setFeature(XMLConstants.FEATURE_SECURE_PROCESSING, true)\`.`,
      },
      {
        id: 'xsd-xpath',
        difficulty: 'medium',
        tags: ['parsing'],
        related: [],
        question: 'Что такое XSD и XPath?',
        answer: `**XSD (XML Schema Definition)** — язык описания структуры XML-документа: элементы, атрибуты, типы, кратность, ограничения.

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

Преимущества над DTD: типы данных, неймспейсы, сам является XML. Валидация в Java: \`SchemaFactory\` + \`Validator\`.

**XPath** — язык навигации по XML-дереву:

\`\`\`
/order/items/item          — абсолютный путь
//item[@price > 100]       — все item с ценой > 100
/order/@id                 — атрибут
//item[1]                  — первый item
count(//item)              — функция
\`\`\`

\`\`\`java
XPath xpath = XPathFactory.newInstance().newXPath();
String name = xpath.evaluate("/order/customer", doc);
\`\`\`

Связанные технологии: **XSLT** — преобразование XML в другие форматы с использованием XPath; XQuery — запросы к XML-данным.`,
      },
    ],
  };

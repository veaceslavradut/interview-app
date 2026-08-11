// Английский перевод банка квиза: testing. Порядок вариантов и опций — как в RU.
export const testing = {
  'test-types': [
    {
      question: 'What does the “testing pyramid” state?',
      options: [
        'The base is many fast unit tests, fewer integration tests, and even fewer slow e2e tests',
        'There should be the most e2e tests through the UI',
        'All test types should be in equal proportions',
        'Manual testing alone is enough',
      ],
    },
    {
      question: 'How does a unit test differ from an integration test?',
      options: [
        'A unit test checks an isolated module (dependencies are mocked); an integration test — the interaction of several components',
        'Unit tests are written by testers, integration tests by developers',
        'An integration test is always faster than a unit test',
        'A unit test checks the whole application',
      ],
    },
  ],
  'junit5': [
    {
      question: 'Which JUnit 5 annotation runs a method before EACH test?',
      options: ['@BeforeEach', '@BeforeAll', '@Before', '@Setup'],
    },
    {
      question: 'Which modules make up the JUnit 5 architecture?',
      options: [
        'JUnit Platform, JUnit Jupiter, JUnit Vintage',
        'JUnit Core, JUnit UI, JUnit DB',
        'JUnit Client, JUnit Server, JUnit Proxy',
        'JUnit 5 is a monolithic library with no modules',
      ],
    },
  ],
  'mockito': [
    {
      question: 'What is Mockito used for?',
      options: [
        'For creating mock objects of dependencies in unit tests (when/thenReturn, verify)',
        'For load-testing applications',
        'For automatically generating test data in the DB',
        'For running tests in the browser',
      ],
    },
    {
      question: 'How does a mock differ from a spy in Mockito?',
      options: [
        'A mock is a full stub (methods do nothing by default); a spy wraps a real object, calling real methods except overridden ones',
        'A spy is a stub, a mock is a real object',
        'A mock works only with static methods',
        'No difference — they are synonyms',
      ],
    },
  ],
  'good-unit-test': [
    {
      question: 'What does the FIRST principle mean for unit tests?',
      options: [
        'Fast, Independent, Repeatable, Self-validating, Timely',
        'Full, Integrated, Reliable, Secure, Tested',
        'The first test should run before the others',
        'Functional, Isolated, Random, Sequential, Threaded',
      ],
    },
    {
      question: 'What is the AAA pattern in testing?',
      options: [
        'Arrange-Act-Assert: preparing data, performing an action, checking the result',
        'Authentication-Authorization-Accounting',
        'Async-Await-Assert: testing only asynchronous code',
        'Add-Apply-Approve: the code-review process for tests',
      ],
    },
  ],
  'testing-pyramid': [
    {
      question: 'Which tests should be most numerous in the testing pyramid?',
      options: [
        'Unit tests (fast, in isolation)',
        'End-to-end tests',
        'UI tests',
        'Manual tests',
      ],
    },
    {
      question: 'How does a unit test differ from an integration test?',
      options: [
        'A unit tests a unit in isolation with mocks; integration — the real interaction of components',
        'A unit is slower and requires a DB',
        'Integration tests one method in isolation',
        'No difference',
      ],
    },
    {
      question: 'What is the “ice-cream cone” anti-pattern in testing?',
      options: [
        'An inverted pyramid with an excess of slow e2e tests',
        'An ideal pyramid with many unit tests',
        'A complete absence of tests',
        'Tests written before the code',
      ],
    },
  ],
  'junit4-vs-junit5': [
    {
      question: 'How do you check that a method throws an exception in JUnit 5?',
      options: ['assertThrows(...)', '@Test(expected = ...)', '@Rule ExpectedException', 'try-catch with fail()'],
    },
    {
      question: 'What replaced @RunWith from JUnit 4 in JUnit 5?',
      options: ['@ExtendWith (the extensions model)', '@BeforeAll', '@Disabled', '@DisplayName'],
    },
  ],
  'spring-boot-testing': [
    {
      question: 'Which annotation brings up only the web layer for testing a REST controller?',
      options: ['@WebMvcTest (with MockMvc and @MockBean)', '@DataJpaTest', '@SpringBootTest', '@Component'],
    },
    {
      question: 'How do you test against the same DBMS as in production?',
      options: [
        'Bring up a real DB in a container via Testcontainers',
        'Use only in-memory H2',
        'Mock the repository entirely',
        'Test directly in production',
      ],
    },
  ],
  'flaky-tests': [
    {
      question: 'What is a flaky test?',
      options: [
        'A test that sometimes passes and sometimes fails without code changes',
        'A test that always fails',
        'A test without a single assert',
        'A slow integration test',
      ],
    },
    {
      question: 'How do you correctly deal with flaky tests?',
      options: [
        'Find the cause and make the tests deterministic and isolated',
        'Just retry them until they’re green',
        'Delete all failing tests',
        'Ignore red builds',
      ],
    },
  ],
  'contract-testing': [
    {
      question: 'What does contract testing check?',
      options: [
        'API compatibility between a consumer and a provider without spinning up the whole system',
        'Database performance',
        'Code coverage by tests',
        'The correctness of the UI layout',
      ],
    },
    {
      question: 'Which tools are used for contract testing?',
      options: ['Pact, Spring Cloud Contract', 'JMeter, Gatling', 'Checkstyle, PMD', 'Prometheus, Grafana'],
    },
  ],
};

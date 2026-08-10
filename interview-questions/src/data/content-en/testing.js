// Английские переводы: testing
export const testing = {
    title: 'Testing',
    description: 'JUnit, Mockito, testing strategies',
    questions: {
      'test-types': {
        question: 'What types of testing do you know?',
        answer: `**By level (the testing pyramid):**

- **Unit tests** — test an individual class/method in isolation; fast, cheap, and the most numerous (the base of the pyramid);
- **Integration tests** — verify the interaction of components (with databases, queues, external APIs); Testcontainers, @SpringBootTest;
- **E2E (end-to-end)** — test the entire system through the user interface/API; slow and fragile, the fewest in number.

**By purpose:**

- functional / non-functional (load, stress, security);
- regression — verifying that new changes didn't break existing functionality;
- smoke — a basic health check.

**By knowledge of internals**: black-box / white-box / gray-box.

**Approaches**: TDD (test-driven development — test before code: red-green-refactor), BDD (behavior-driven: Given-When-Then, Cucumber).

Metric: code coverage (JaCoCo), but 100% coverage does not guarantee quality — coverage of critical logic and edge cases matters more.`,
      },
      junit5: {
        question: 'Tell us about JUnit 5. Main annotations.',
        answer: `**JUnit 5** = JUnit Platform + JUnit Jupiter (API) + JUnit Vintage (JUnit 4 support).

Main annotations:

- \`@Test\` — a test method;
- \`@BeforeEach\` / \`@AfterEach\` — before/after each test;
- \`@BeforeAll\` / \`@AfterAll\` — once before/after all tests (static);
- \`@DisplayName("...")\` — a readable test name;
- \`@Disabled\` — disables a test;
- \`@Nested\` — nested test groups;
- \`@Tag\` — labels for selective execution;
- \`@Timeout\` — execution time limit.

**Parameterized tests:**

\`\`\`java
@ParameterizedTest
@ValueSource(ints = {1, 3, 5})
void isOdd(int number) {
    assertTrue(number % 2 != 0);
}

@ParameterizedTest
@CsvSource({"1,2,3", "10,20,30"})
void add(int a, int b, int sum) {
    assertEquals(sum, calculator.add(a, b));
}
\`\`\`

Assertions: \`assertEquals\`, \`assertTrue\`, \`assertThrows\`, \`assertAll\` (grouped), \`assertTimeout\`. For expressive assertions, **AssertJ** is often used: \`assertThat(list).hasSize(3).contains("a")\`.`,
      },
      mockito: {
        question: 'What is Mockito? What is the difference between mock, stub, and spy?',
        answer: `**Mockito** is a library for creating test doubles, allowing you to isolate the class under test from its dependencies.

\`\`\`java
@ExtendWith(MockitoExtension.class)
class OrderServiceTest {
    @Mock UserRepository userRepository;
    @InjectMocks OrderService orderService;

    @Test
    void shouldCreateOrder() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(user)); // stubbing

        orderService.createOrder(1L, items);

        verify(userRepository).findById(1L);          // verification
        verify(emailService, never()).sendSpam(any());
    }
}
\`\`\`

**Terminology:**

- **Stub** — a double with predefined answers ("when X is called — return Y"); we check state;
- **Mock** — a double on which **interactions are verified** (which methods, how many times, with which arguments); we check behavior;
- **Spy** — a wrapper around a **real object**: real methods are called by default, but individual ones can be stubbed (\`@Spy\`, \`doReturn(...).when(spy)...\`).

Useful: \`ArgumentCaptor\` — capturing arguments, \`any()\`, \`eq()\` — matchers, \`doThrow\` — exceptions.`,
      },
      'good-unit-test': {
        question: 'What makes a good unit test?',
        answer: `The **FIRST** principles:

- **Fast** — thousands of tests should run in seconds;
- **Independent** — execution order doesn't matter, no shared state;
- **Repeatable** — the same result in any environment (no dependence on time, network, randomness);
- **Self-validating** — determines success/failure itself, no manual inspection;
- **Timely** — written on time (ideally before/along with the code).

The **AAA (Arrange-Act-Assert)** structure:

\`\`\`java
@Test
void shouldApplyDiscountForVipUser() {
    // Arrange (given): setup
    User vip = new User(Status.VIP);
    // Act (when): a single action
    Price price = priceService.calculate(vip, 100);
    // Assert (then): verification
    assertThat(price.getValue()).isEqualTo(90);
}
\`\`\`

More rules: test **behavior, not implementation**; one logical scenario per test; descriptive names (\`should...When...\`); check edge cases and errors; don't mock everything; avoid logic (if statements, loops) in tests.`,
      },
      'testing-pyramid': {
        question: 'What is the testing pyramid? How do unit tests differ from integration tests?',
        answer: `The **testing pyramid** is a model for distributing tests across levels: the lower the level, the **more** tests there are and the **faster and cheaper** they are.

- **Unit tests** (the base, the majority) — test **one unit** (class/method) in **isolation**, with dependencies replaced by mocks. Fast (milliseconds), stable, and pinpoint the error's location.
- **Integration tests** (the middle) — test the **interaction** of components with real dependencies (database, broker, another service). Slower, but catch problems at the seams (mapping, SQL, configuration).
- **E2E / UI** (the top, the fewest) — cross-cutting scenarios through the whole system. The slowest and most fragile.

**The key unit vs integration difference:** unit tests logic in isolation with mocks (fast); integration tests real interaction of several parts (slower, closer to prod).

The point of the pyramid: keep many fast unit tests at the bottom and few expensive e2e tests at the top. **Anti-patterns:** the "ice-cream cone" — an inverted pyramid with too many slow e2e tests; the "hourglass" — many unit and e2e tests but few integration ones.`,
      },
      'junit4-vs-junit5': {
        question: 'How does JUnit 5 differ from JUnit 4?',
        answer: `**JUnit 5** is a redesigned version with a modular architecture of three parts: **Platform** (test launching), **Jupiter** (the new API and engine), **Vintage** (compatibility with old JUnit 3/4). The main differences from JUnit 4:

- **annotations renamed and clearer:** \`@Before\`/\`@After\` → \`@BeforeEach\`/\`@AfterEach\`, \`@BeforeClass\`/\`@AfterClass\` → \`@BeforeAll\`/\`@AfterAll\`, \`@Ignore\` → \`@Disabled\`;
- **exception checking** — via \`assertThrows(...)\` (instead of \`@Test(expected=...)\`), plus \`assertAll\` for grouping checks;
- **\`@ExtendWith\`** (the extension model) instead of \`@RunWith\` — you can plug in several extensions (e.g., \`@ExtendWith(MockitoExtension.class)\`, \`SpringExtension\`);
- **\`@DisplayName\`** — readable test names; **\`@Nested\`** — nested groups;
- powerful **parameterized tests** (\`@ParameterizedTest\` + \`@ValueSource\`, \`@CsvSource\`, \`@MethodSource\`);
- requires **Java 8+** and makes active use of lambdas.

The Vintage engine lets you run old JUnit 4 tests alongside the new ones during a gradual migration.`,
      },
      'spring-boot-testing': {
        question: 'How do you test a Spring Boot application (REST controller, DB layer)?',
        answer: `Spring Boot provides **slice tests** that bring up only the needed part of the context — faster than a full \`@SpringBootTest\`.

**REST controller — \`@WebMvcTest\`:** brings up only the web layer (controllers, filters), with service dependencies replaced by \`@MockBean\`. Requests are driven through **\`MockMvc\`** without a real server:

\`\`\`java
@WebMvcTest(UserController.class)
class UserControllerTest {
  @Autowired MockMvc mvc;
  @MockBean UserService service;
  @Test void returnsUser() throws Exception {
    when(service.find(1L)).thenReturn(new User("Ann"));
    mvc.perform(get("/users/1"))
       .andExpect(status().isOk())
       .andExpect(jsonPath("$.name").value("Ann"));
  }
}
\`\`\`

**DB layer — \`@DataJpaTest\`:** brings up only JPA/repositories, by default with an in-memory database and a transaction rollback after each test. Closer to prod — a real database in a container via **Testcontainers** (\`@Testcontainers\` + \`PostgreSQLContainer\`), to test against the same DBMS as in production.

**\`@SpringBootTest\`** brings up the whole context (optionally with \`webEnvironment=RANDOM_PORT\` and \`TestRestTemplate\`/\`WebTestClient\`) — for full integration tests, but slower than slice tests.`,
      },
      'flaky-tests': {
        question: 'What are flaky tests and how do you deal with them?',
        answer: `A **flaky test** is one that **sometimes passes and sometimes fails without changes to the code**. This is dangerous: it undermines trust in the tests (the team starts ignoring red builds), masks real bugs, and slows CI with reruns.

Common causes:

- **time dependence** — \`sleep\`, timeouts, the real clock (\`LocalDateTime.now()\`); fixed with a fixed \`Clock\`, waiting for a condition (Awaitility) instead of \`sleep\`;
- **order and shared state** — tests depend on each other or on shared mutable statics/the database; fixed with isolation and state cleanup;
- **concurrency/races** — non-determinism in multithreaded code;
- **external dependencies** — network, real APIs; fixed with mocks/stubs, Testcontainers;
- **non-deterministic** collection order (\`HashMap\`), locale, time zone.

How to deal with them:

1. don't ignore or "retry blindly" — **find the cause** (mark \`@Disabled\` with a ticket, but fix it);
2. make tests **deterministic and isolated** (no shared state, no real time/network);
3. replace \`sleep\` with explicit waiting for a condition;
4. run tests in random order to expose hidden dependencies.

Retry is a last resort that masks the problem, not a solution.`,
      },
      'contract-testing': {
        question: 'What is contract testing and why is it needed?',
        answer: `**Contract testing** verifies that the **API between a provider and a consumer is compatible**, without bringing up the whole system. It is especially important in microservices, where services are deployed independently: a change to one's API must not silently break another.

A **contract** is a formal description of the consumer's expectations of the provider's API (what requests it sends, what responses it expects). Tests are generated from it **on both sides**:

- on the **consumer** side the contract defines a stub — the consumer is tested against the expected API;
- on the **provider** side the same contract checks that the real service **actually** responds as promised.

Approaches:

- **Consumer-Driven Contracts (CDC)** — the contract is defined by the consumer (what it really needs), and the provider must satisfy it. Tools: **Pact**, **Spring Cloud Contract**.

Why: to catch API incompatibilities **at build time** rather than in integration/prod; the tests are fast (the whole system isn't needed); and you can evolve the API safely. It's a compromise between cheap unit tests that are "blind" to the counterparty and expensive end-to-end e2e tests.`,
      },
    },
  };

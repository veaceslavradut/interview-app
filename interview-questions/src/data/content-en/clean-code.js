// Английские переводы: clean-code
export const cleanCode = {
    title: 'Clean Code',
    description: 'Clean Code and Effective Java: naming, functions, exceptions, immutability, best practices',
    questions: {
      'what-is-clean-code': {
        question: 'What is clean code and why does it matter?',
        answer: `**Clean code** is code that is **easy to read, understand, and change** for other people (and for you six months later). The key idea: code is read **far more often** than it's written, so you should optimize for reading.

Why it matters:

- most of a software's life is **maintenance** — reading and editing, not the first writing;
- dirty code slows the team down: every change is risky and requires "excavation";
- **technical debt** accumulates — "we'll fix it later" turns into a system nobody dares to touch.

Signs of clean code: meaningful names, small functions with a single task, minimal duplication, explicit error handling, no "clever" tangled code, readability over brevity.

The reference sources: **"Clean Code" (Robert Martin)** — about readability and structure at the level of names/functions/classes, and **"Effective Java" (Joshua Bloch)** — about Java-specific idioms and best practices (immutability, generics, exceptions). Both complement the **SOLID/DRY/KISS** principles (see the "Design Patterns" section): SOLID is about structure, clean code is about everyday readability.`,
      },
      'clean-naming': {
        question: 'What makes a good name in code?',
        answer: `A name should **fully reveal its meaning** — what it is and why — so you can understand it without comments or looking at the implementation. A good name answers: why this exists, what it does, how it's used.

Rules:

- **intention-revealing names:** \`elapsedTimeInDays\` instead of \`d\`; \`getActiveUsers()\` instead of \`getList()\`;
- **avoid "noise" words** with no meaning: \`data\`, \`info\`, \`tmp\`, \`obj\`, \`value\`, and vague \`manager\`, \`handler\`, \`processor\` — they don't say *what* exactly is done;
- **pronounceable and searchable** names (not \`genymdhms\`), without "Hungarian notation" or extra prefixes;
- **classes are nouns** (\`Order\`, \`UserRepository\`), **methods are verbs** (\`save\`, \`calculateTotal\`, \`isValid\`);
- one concept — **one word** across the whole project (don't mix \`get\`/\`fetch\`/\`retrieve\` for the same thing);
- name length matches the scope: short for a loop counter, spelled out for a class field.

The point: code should read like clear prose. If understanding a variable requires a comment — you usually just need a **better name**.`,
      },
      'clean-functions': {
        question: 'What requirements should a good function (method) meet?',
        answer: `The main principles (from "Clean Code"):

- **Small.** A function should be short — aim for a few lines (say 5–20), fitting on the screen in full. A large function almost always does several things.
- **One task.** A function should do **one thing well**. If you can meaningfully split it into subfunctions with different names — it's doing more than one thing.
- **One level of abstraction.** Inside a function, don't mix high-level steps (\`processOrder()\`) with low-level details (bit operations, string handling) — it should read as a coherent story at one level.
- **Few arguments.** The ideal is 0–2, at most ~3. Many parameters complicate calling and testing; several related parameters are better combined into an object. A **boolean flag parameter** is a sign the function does two things (better split into two methods).
- **No surprising side effects.** The name should honestly reflect everything the method does; hidden state changes are a source of bugs.
- **Command-Query Separation** — a method either **changes** state (a command, usually \`void\`) or **returns** data (a query), but not both at once.

Result: small, honestly named functions with one level of abstraction read top-down like a table of contents.`,
      },
      'clean-comments': {
        question: 'When are comments needed, and when are they redundant?',
        answer: `The main principle: **a comment explains "why," not "what."** What the code does should be shown by **the code itself** (through good names and structure), not by a comment retelling it.

**Bad (redundant) comments:**

- duplicate the code: \`i++; // increment i\` — noise;
- **commented-out code** — it should be deleted (history is in git), not kept;
- **stale** comments that have diverged from the code — worse than none: they lie;
- comments as a "crutch" for bad code: instead of commenting an unclear fragment, it's better to **rewrite/rename** it.

**Useful comments:**

- explaining the **intent and reason** for a decision ("why this way, not the obvious one");
- warning about consequences/non-obvious constraints (thread safety, call order, working around a library bug);
- **TODO/FIXME** with context;
- public API documentation (**Javadoc**) — the method's contract for external consumers;
- explaining a complex formula/regex/algorithm.

Rule: first try to express the thought in **code** (a variable/method name, extracting a function), and only what the code cannot express (the reason, the context) — in a comment.`,
      },
      'clean-error-handling': {
        question: 'How should you handle errors: exceptions or codes/flags?',
        answer: `Rule: **use exceptions, not return codes, \`null\`, or boolean flags** to signal errors.

Why exceptions are better than flags/\`null\`:

- **a clean main flow** — the logic doesn't drown in \`if (result == null) ...\` checks after every call; error handling is separated from business logic;
- **an error can't be silently ignored** — an uncaught exception propagates, whereas a forgotten return-code check is easy to miss;
- **\`null\` as an "error"** leads to a \`NullPointerException\` in an unexpected place; for "the value may be absent," use \`Optional\`, and for an error — an exception.

How to throw and catch correctly:

- **meaningful, domain exceptions** (\`InsufficientFundsException\`), not a generic \`RuntimeException\` — the type makes clear what happened;
- a message with **context** (what went wrong and with what data);
- **don't "swallow"** exceptions (\`catch (Exception e) {}\`) — at least log/rethrow;
- catch an exception **at the level where you can do something about it**, not immediately; don't use exceptions for **normal** control flow (they're expensive and confusing);
- release resources via **try-with-resources**.

On checked vs unchecked: the modern style more often prefers unchecked (\`RuntimeException\`) for programming errors, leaving checked for recoverable situations.`,
      },
      'clean-no-duplication': {
        question: 'Why is code duplication bad, and must it always be removed?',
        answer: `**Duplication** is one of the main enemies of maintainability and the essence of the **DRY (Don't Repeat Yourself)** principle: every piece of **knowledge** should have a single authoritative representation.

Why it's harmful:

- when the logic changes, you must fix it in **all copies** — it's easy to miss one and get inconsistency and a bug;
- it bloats the code and complicates reading;
- copies **drift apart** over time, and it becomes unclear which is "correct."

It's removed by extracting the common part into a method, class, configuration, or template.

**But not fanatically.** Important caveats:

- DRY is about unity of **knowledge**, not matching lines of text: two pieces of code that *currently* look the same but express **different** business rules and will change independently should **not** be merged — otherwise you get false coupling (premature abstraction is often worse than duplication);
- sometimes a little duplication **for readability** is justified — don't build a complex abstraction just to remove a couple of similar lines;
- the "rule of three": tolerate the first repetition, but on the third appearance it's worth extracting the common part.

Bottom line: remove duplication of **knowledge**, but don't confuse it with superficial code similarity, and don't sacrifice clarity for formal DRY.`,
      },
      'minimize-mutability': {
        question: 'Why should you minimize mutability (immutability)? (Effective Java)',
        answer: `Advice from "Effective Java": **prefer immutable objects** and generally minimize mutability — make fields \`final\` and classes immutable where possible.

Advantages of immutable objects:

- **thread safety "for free"** — an immutable object can be freely shared between threads without synchronization (there's nothing for a race to corrupt);
- **easy to reason about** — state is set once at creation and never changes; less "who changed this and when";
- **safe as \`HashMap\` keys** / \`HashSet\` elements — their hash won't "drift" after being added;
- **reliable invariants** — the object is always in a valid state, no need to guard against external modification;
- convenient to cache and reuse.

How to do it:

- **\`final\`** fields, no setters; the value only via the constructor;
- defensive copying of mutable fields (collections, dates) on input and output;
- in Java — a **\`record\`** for immutable data carriers;
- fewer setters = fewer states = fewer bugs.

The cost: frequent "changes" create new objects (GC load). The compromise — mutable "builders" (\`StringBuilder\`, the Builder pattern) for construction, with an immutable result. The general rule: make a class immutable unless there's a compelling reason not to; otherwise minimize mutability.`,
      },
      'optional-and-streams': {
        question: 'How do you use Optional and the Stream API well? (Effective Java)',
        answer: `**Optional** and **Stream** are powerful tools, but they have rules for appropriate use.

**Optional** — a way to explicitly express "the value may be absent" instead of returning \`null\`:

- use it as a method's **return value** when it may not find a result (\`Optional<User> findById(...)\`) — the caller is forced to handle absence;
- **do not** use \`Optional\` for **fields** and method **parameters** (extra wrappers, overhead) — it wasn't designed for that;
- don't wrap collections in \`Optional\` — return an empty collection;
- extract the value safely: \`orElse\`, \`orElseGet\`, \`map\`, \`ifPresent\` — not \`.get()\` without a check (that's the same as \`null\`, just differently);
- for primitives — \`OptionalInt\`/\`OptionalLong\`.

**Stream API:**

- excellent for **data transformations** (filter/map/reduce/collect) — readable and declarative;
- **don't overdo it**: overly long/nested streams read worse than a plain loop — choose by readability, not "because it's trendy";
- functions in the pipeline should be **side-effect-free** (especially important for parallel streams); don't mutate external state in \`forEach\`;
- prefer \`collect(...)\` for gathering the result over mutable accumulators in lambdas.

Rule: both are for **expressiveness and safety**; apply them where they make the code **clearer**, not more complex.`,
      },
      'money-bigdecimal': {
        question: 'Why can\'t you use float/double for money, and what do you use instead?',
        answer: `\`float\` and \`double\` are **binary** floating-point numbers: they **cannot exactly represent** many decimal fractions (e.g., 0.1). The classic example: \`0.1 + 0.2\` gives \`0.30000000000000004\`. For money this is unacceptable — rounding errors accumulate, sums "don't add up," and discrepancies of cents arise that are critical in finance.

What to use:

- **\`BigDecimal\`** — an arbitrary-precision number with a **decimal** representation, without loss of precision. Be sure to:
  - create it from a **string** or via \`BigDecimal.valueOf(...)\`, **not** from a \`double\` (\`new BigDecimal(0.1)\` introduces the same binary error);
  - explicitly set **rounding** (\`setScale(2, RoundingMode.HALF_UP)\`) and the scale for the currency;
  - compare via \`compareTo\` (not \`equals\`, which considers scale: \`2.0\` ≠ \`2.00\`).
- even better — a dedicated domain type **\`Money\`** (amount + currency) that encapsulates rounding rules and forbids adding different currencies. Amounts are often stored as **minor units in an integer** (\`long\` of cents) for speed, but with careful scale control.

In short: money is an **exact decimal** quantity, so use \`BigDecimal\`/\`Money\`; \`double\` is only for approximate scientific/engineering calculations.`,
      },
      'domain-return-types': {
        question: 'Why is it better to return void or a domain object rather than flags? (Effective Java)',
        answer: `The idea: an operation's result should be **self-documenting and type-safe**. A method should be designed to return either **\`void\`** (when it's a command with no result) or a meaningful **domain result object** (e.g., \`TransferResult\`), rather than "raw" \`boolean\`/\`int\` codes or \`null\`.

Why boolean/numeric flags are poor as a result:

- **opaque** — what does \`false\` mean? "Failed," "already existed," "no permission"? The caller guesses;
- information is lost — a single \`boolean\` can't convey *why* and *what* details;
- it's easy to **ignore** the returned code and not handle the error.

A domain result object:

- **explicitly names** the outcome (\`TransferResult\` with fields: status, operation id, message) — the code becomes self-documenting;
- extensible — you can add details without breaking the signature;
- combined with exceptions: **normal** outcomes via a result/value, **erroneous/exceptional** ones via domain exceptions (see the error-handling question).

Related to the **Command-Query Separation** principle: commands (change state) are usually \`void\`, queries return data. And when an operation's result matters — return an **expressive type**, not an anonymous flag. This makes the API clearer and safer to use.`,
      },
    },
  };

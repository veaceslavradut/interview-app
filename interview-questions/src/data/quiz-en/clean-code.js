// Английский перевод банка квиза: clean-code. Порядок вариантов и опций — как в RU.
export const cleanCode = {
  'what-is-clean-code': [
    {
      question: 'Why is so much attention paid to code readability?',
      options: [
        'Code is read far more often than written, and maintenance takes up most of software’s life',
        'Readable code always runs faster',
        'The compiler requires readable code',
        'It doesn’t matter, only performance does',
      ],
    },
    {
      question: 'Which two books are considered classics on the topic?',
      options: [
        '“Clean Code” (R. Martin) and “Effective Java” (J. Bloch)',
        '“War and Peace” and “Hamlet”',
        'Only the official Oracle documentation',
        '“Clean Code” and “Harry Potter”',
      ],
    },
  ],
  'clean-naming': [
    {
      question: 'What should a good variable/method name be?',
      options: [
        'Intention-revealing — clear without a comment (elapsedTimeInDays)',
        'As short as possible (d, tmp, x)',
        'With a mandatory type prefix',
        'The same for all loop variables',
      ],
    },
    {
      question: 'Which words in names are considered “noise” and meaningless?',
      options: [
        'data, info, tmp, obj, manager, handler',
        'save, calculate, validate',
        'order, user, account',
        'isValid, hasAccess',
      ],
    },
  ],
  'clean-functions': [
    {
      question: 'Which principles should a good function meet?',
      options: [
        'Small, does one thing, one level of abstraction, few arguments',
        'Large, so all the logic is in one place',
        'Maximum parameters for flexibility',
        'Must return a boolean',
      ],
    },
    {
      question: 'What does a boolean flag parameter in a method signal?',
      options: [
        'That the method probably does two things — better to split it into two methods',
        'That the method is well designed',
        'That the method is thread-safe',
        'That the method returns an Optional',
      ],
    },
  ],
  'clean-comments': [
    {
      question: 'What should a good comment explain?',
      options: [
        'The “why” (intent, reason), not the “what” — what the code does is shown by the code itself',
        'Step by step what each line does',
        'The history of all the file’s changes',
        'The names of all the code’s authors',
      ],
    },
    {
      question: 'What should you do with commented-out code?',
      options: [
        'Delete it — the history is in git',
        'Keep it forever just in case',
        'Move it to a separate file',
        'Leave it as documentation',
      ],
    },
  ],
  'clean-error-handling': [
    {
      question: 'How do you correctly signal an error?',
      options: [
        'Throw a meaningful domain exception rather than returning null/false/a code',
        'Return null and hope for a check',
        'Return a boolean flag',
        'Silently log and continue',
      ],
    },
    {
      question: 'Why are exceptions better than return codes?',
      options: [
        'The main flow stays clean, and an error can’t be silently ignored',
        'Exceptions run faster than checks',
        'Return codes are impossible in Java',
        'Exceptions require no handling',
      ],
    },
  ],
  'clean-no-duplication': [
    {
      question: 'What does the DRY principle actually require eliminating?',
      options: [
        'Duplication of knowledge (logic), not any superficial similarity of lines',
        'Absolutely any similar lines of code',
        'All comments in the code',
        'Reuse of libraries',
      ],
    },
    {
      question: 'When is a little duplication acceptable?',
      options: [
        'When the pieces express different business rules or for readability',
        'Never — duplication is always evil',
        'Only in tests',
        'Only in private methods',
      ],
    },
  ],
  'minimize-mutability': [
    {
      question: 'What is the main advantage of immutable objects?',
      options: [
        'Thread safety without synchronization and easy reasoning about state',
        'They always use less memory',
        'The garbage collector doesn’t collect them',
        'They work only in a single thread',
      ],
    },
    {
      question: 'How do you make a class immutable?',
      options: [
        'final fields, no setters, values only via the constructor, defensive copying',
        'Add setters to all fields',
        'Mark the class with @Immutable — that’s enough',
        'Make all fields public',
      ],
    },
  ],
  'optional-and-streams': [
    {
      question: 'Where is it NOT recommended to use Optional?',
      options: [
        'For fields and method parameters',
        'As the return value of a search method',
        'Together with map/orElse',
        'To express “the value may be absent”',
      ],
    },
    {
      question: 'Which rule matters for functions inside a Stream pipeline?',
      options: [
        'They should be side-effect-free (not mutate external state)',
        'They should change the source collection',
        'They must be as long as possible',
        'They should always use .get() on an Optional',
      ],
    },
  ],
  'money-bigdecimal': [
    {
      question: 'Why can’t you use double for money?',
      options: [
        'Binary floating point doesn’t represent decimal fractions exactly — errors accumulate',
        'double is too slow',
        'double doesn’t support negative numbers',
        'double can’t be saved to a DB',
      ],
    },
    {
      question: 'How do you correctly create a BigDecimal for money?',
      options: [
        'From a string or via BigDecimal.valueOf(...), not from a double',
        'Via new BigDecimal(0.1)',
        'By casting from float',
        'Via Double.parseDouble',
      ],
    },
  ],
  'domain-return-types': [
    {
      question: 'Why is it better to return a domain result object than a boolean flag?',
      options: [
        'A flag is opaque and loses information; a domain object is self-documenting and extensible',
        'A boolean uses more memory',
        'Domain objects run faster',
        'Java doesn’t support returning a boolean',
      ],
    },
    {
      question: 'What does the Command-Query Separation principle prescribe?',
      options: [
        'Commands change state (usually void), queries return data — don’t mix them',
        'Every method must return a boolean',
        'All methods must change state',
        'Queries must modify data',
      ],
    },
  ],
};

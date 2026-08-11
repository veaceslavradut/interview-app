// Английский перевод банка квиза: build-tools. Порядок вариантов и опций — как в RU.
export const buildTools = {
  'what-is-maven': [
    {
      question: 'What is Maven?',
      options: [
        'A build and dependency-management tool based on a POM file and the “convention over configuration” principle',
        'A development environment for Java',
        'An application server for deploying WAR files',
        'A version-control system',
      ],
    },
    {
      question: 'What is described in the pom.xml file?',
      options: [
        'The project coordinates (groupId, artifactId, version), dependencies, plugins, and build settings',
        'The list of users with access to the project',
        'The SQL schema of the application’s database',
        'The operating-system configuration',
      ],
    },
  ],
  'maven-lifecycle': [
    {
      question: 'In what order do the main Maven lifecycle phases run?',
      options: [
        'validate → compile → test → package → verify → install → deploy',
        'deploy → install → package → test → compile',
        'compile → validate → deploy → test → package',
        'The phases run in an arbitrary order',
      ],
    },
    {
      question: 'What does the mvn package command do?',
      options: [
        'Runs all phases up to and including package: compiles, runs tests, and builds the artifact (jar/war)',
        'Only downloads dependencies',
        'Publishes the artifact to a remote repository',
        'Deletes the target directory',
      ],
    },
  ],
  'maven-dependencies': [
    {
      question: 'What does the "test" scope of a Maven dependency mean?',
      options: [
        'The dependency is available only for compiling and running tests and isn’t included in the final artifact',
        'The dependency is used only in production',
        'The dependency is downloaded but never linked',
        'The dependency is scanned for viruses',
      ],
    },
    {
      question: 'What are transitive dependencies?',
      options: [
        'Your dependencies’ dependencies, which Maven links automatically',
        'Dependencies declared in two places at once',
        'Dependencies downloaded from a mirror repository',
        'Outdated dependencies that need updating',
      ],
    },
  ],
  'maven-vs-gradle': [
    {
      question: 'How does Gradle differ from Maven?',
      options: [
        'Gradle uses a DSL (Groovy/Kotlin) and incremental builds with caching; Maven is declarative XML with a rigid lifecycle',
        'Gradle doesn’t support dependency management',
        'Maven is faster than Gradle thanks to caching',
        'Gradle works only with Android projects',
      ],
    },
    {
      question: 'What lets Gradle usually build large projects faster than Maven?',
      options: [
        'Incremental builds, a task-output cache, and the Gradle daemon',
        'Gradle skips compiling some classes',
        'Gradle doesn’t run tests',
        'Gradle builds the project in the cloud',
      ],
    },
  ],
};

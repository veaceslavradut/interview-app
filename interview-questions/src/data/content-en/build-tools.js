// Английские переводы: build-tools
export const buildTools = {
    title: 'Maven / Gradle',
    description: 'Build tools',
    questions: {
      'what-is-maven': {
        question: 'What is Maven? What is the structure of pom.xml?',
        answer: `**Maven** is a build and dependency management tool for Java projects. Its principle: **convention over configuration** — a standard project structure and lifecycle.

**Standard structure:**

\`\`\`
src/main/java        — source code
src/main/resources   — resources
src/test/java        — tests
src/test/resources   — test resources
target/              — build output
pom.xml              — project descriptor
\`\`\`

**pom.xml (Project Object Model):**

\`\`\`xml
<project>
    <groupId>com.company</groupId>      <!-- organization -->
    <artifactId>my-app</artifactId>     <!-- artifact name -->
    <version>1.0.0-SNAPSHOT</version>   <!-- version -->
    <packaging>jar</packaging>          <!-- jar | war | pom -->

    <parent>...</parent>                <!-- configuration inheritance -->
    <properties>...</properties>        <!-- variables (java.version) -->
    <dependencies>...</dependencies>    <!-- dependencies -->
    <dependencyManagement>...</dependencyManagement> <!-- versions for children -->
    <build><plugins>...</plugins></build> <!-- build plugins -->
    <profiles>...</profiles>            <!-- profiles (dev/prod) -->
</project>
\`\`\`

Artifact coordinates: **groupId:artifactId:version (GAV)**. Dependencies are downloaded from repositories (Maven Central, a corporate Nexus/Artifactory) into the local \`~/.m2/repository\`.

**SNAPSHOT** is a mutable dev version (re-downloaded), while release versions are immutable.`,
      },
      'maven-lifecycle': {
        question: 'Describe the Maven build lifecycle.',
        answer: `Maven has three independent lifecycles: **default** (build), **clean** (cleanup), **site** (documentation).

**Main phases of the default lifecycle (in order):**

1. \`validate\` — verify the project is correct;
2. \`compile\` — compile the main code;
3. \`test\` — run unit tests (Surefire);
4. \`package\` — package (jar/war);
5. \`verify\` — integration tests (Failsafe), quality checks;
6. \`install\` — install the artifact into the local repository (~/.m2);
7. \`deploy\` — publish to a remote repository.

**Key rule**: invoking a phase runs **all preceding** phases: \`mvn package\` = validate + compile + test + package.

\`\`\`bash
mvn clean install            # cleanup + full build + into the local repository
mvn test                     # only up to tests
mvn package -DskipTests      # skip tests
mvn dependency:tree          # dependency tree (plugin invoked directly)
\`\`\`

Each phase executes the **plugin goals** bound to it: compile → \`maven-compiler-plugin:compile\`, package → \`maven-jar-plugin:jar\`. Plugins can be bound to any phase via \`<executions>\`.`,
      },
      'maven-dependencies': {
        question: 'What dependency scopes exist? How are version conflicts resolved?',
        answer: `**Dependency scopes:**

- **compile** (default) — everywhere: compilation, tests, runtime; propagated transitively;
- **provided** — needed for compilation but provided by the environment (Servlet API in Tomcat, Lombok);
- **runtime** — not needed for compilation, needed at runtime (JDBC driver);
- **test** — tests only (JUnit, Mockito);
- **system** — local path to a jar (an anti-pattern);
- **import** — importing a BOM in \`dependencyManagement\`.

**Transitive dependencies** — dependencies of dependencies are pulled in automatically.

**Version conflict resolution** — the **nearest wins** principle: the version with the shortest path in the dependency tree wins; at equal depth — the one declared first.

**Management:**

\`\`\`xml
<dependencyManagement>   <!-- centralized version pinning -->
    <dependencies>
        <dependency>     <!-- BOM: a consistent set of versions -->
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-dependencies</artifactId>
            <version>3.3.0</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>

<exclusions>             <!-- excluding a transitive dependency -->
    <exclusion>
        <groupId>commons-logging</groupId>
        <artifactId>commons-logging</artifactId>
    </exclusion>
</exclusions>
\`\`\`

Diagnostics: \`mvn dependency:tree -Dverbose\`, Maven Enforcer Plugin (banning conflicts). Incompatible versions on the classpath cause \`NoSuchMethodError\`/\`ClassNotFoundException\` at runtime ("JAR hell").`,
      },
      'maven-vs-gradle': {
        question: 'What is the difference between Maven and Gradle?',
        answer: `**Maven:**

- configuration — declarative **XML** (pom.xml);
- rigid standard lifecycle;
- simple and predictable, extremely widespread;
- verbose, hard to customize (you have to write plugins).

**Gradle:**

- configuration — **Groovy/Kotlin DSL** (build.gradle / build.gradle.kts) — it is code;
- model — a **directed acyclic graph (DAG) of tasks**, flexible custom tasks;
- **faster**: incremental builds (rebuilds only what changed), build cache (local and remote), Gradle Daemon, parallelism;
- the standard for Android; the choice for large multi-module projects.

\`\`\`kotlin
// build.gradle.kts
plugins {
    java
    id("org.springframework.boot") version "3.3.0"
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}

tasks.register("hello") {          // custom task — just code
    doLast { println("Hello!") }
}
\`\`\`

Gradle configuration difference: \`implementation\` (does not leak into consumers' API — faster rebuilds) vs \`api\` (leaks).

**Choosing**: Maven — simplicity, stability, team-wide uniformity; Gradle — build speed, flexibility, large projects. Functionally both solve the same problem and work with the same repositories.`,
      },
      'gradle-basics': {
        question: 'What are the basics of Gradle: build, tasks, phases?',
        answer: `**Gradle** is a build system based on a **task graph**; scripts are written in **Groovy** (\`build.gradle\`) or the **Kotlin DSL** (\`build.gradle.kts\`). Unlike Maven's declarative \`pom.xml\`, a Gradle script is programmable configuration.

The unit of work is a **task**: \`compileJava\`, \`test\`, \`jar\`, \`build\`. Tasks are linked by dependencies and form a **DAG**; Gradle runs only what is needed, in the correct order.

A build runs in **three phases**:

1. **Initialization** — the projects are determined (which modules participate, \`settings.gradle\`);
2. **Configuration** — scripts run, the task graph is built (**all** tasks are configured, even ones not executed);
3. **Execution** — the selected tasks and their dependencies run.

\`\`\`groovy
plugins { id 'java' }
group = 'com.example'
dependencies { testImplementation 'org.junit.jupiter:junit-jupiter:5.10.0' }
\`\`\`

Key advantages: **incremental builds** and a **build cache** (does not rebuild unchanged parts), and a **daemon** (a warm JVM process) — hence the speed. The \`java\`/\`application\` plugin brings the standard tasks and layout (\`src/main/java\`).`,
      },
      'gradle-dependencies': {
        question: 'How are dependencies and configurations (implementation, api, …) managed in Gradle?',
        answer: `Dependencies are declared in the \`dependencies\` block, bound to a **configuration** — a named set of dependencies for a specific purpose. The \`java\` plugin provides the main ones:

\`\`\`groovy
dependencies {
    implementation 'org.apache.commons:commons-lang3:3.14.0'   // needed for compile and runtime
    api 'com.google.guava:guava:33.0.0-jre'                    // + "leaks" into the module's API
    compileOnly 'org.projectlombok:lombok:1.18.30'             // compile only (not at runtime)
    runtimeOnly 'com.h2database:h2:2.2.224'                    // runtime only
    testImplementation 'org.junit.jupiter:junit-jupiter:5.10.0'
}
\`\`\`

The key difference **\`implementation\` vs \`api\`**:

- **\`implementation\`** — the dependency is **not** visible to the module's consumers (does not enter their compile classpath). Change its version and dependent modules are **not** recompiled → faster builds, better encapsulation;
- **\`api\`** — the dependency is **transitively** visible to consumers (needed if its types appear in the module's public API).

Maven-scope analogy: \`implementation/api\`≈compile, \`compileOnly\`≈provided, \`runtimeOnly\`≈runtime, \`testImplementation\`≈test. Version conflicts are resolved by a single resolution strategy (by default — the **highest** version); you can pin via \`constraints\`/a platform (BOM).`,
      },
      'gradle-plugins': {
        question: 'What are Gradle plugins and how do they extend the build?',
        answer: `A **Gradle plugin** is a reusable package of configuration that adds **tasks, conventions, configurations and extensions** to the project. Almost all of Gradle's functionality comes from plugins.

\`\`\`groovy
plugins {
    id 'java'                                   // core plugin: compileJava/test/jar tasks, src/main/java layout
    id 'org.springframework.boot' version '3.2.0'  // community plugin: bootJar, bootRun
    id 'application'                            // a run task + distribution build
}
\`\`\`

Kinds:

- **core plugins** (built in: \`java\`, \`java-library\`, \`application\`, \`maven-publish\`) — applied by id with no version;
- **community/third-party** — from the **Gradle Plugin Portal**, with a version;
- **your own** — \`buildSrc\` or **convention plugins** to reuse configuration across modules.

A plugin usually provides an **extension** for configuration:

\`\`\`groovy
java { toolchain { languageVersion = JavaLanguageVersion.of(21) } }
\`\`\`

Plugins implement "convention over configuration": apply \`java\` — get a standard set of tasks and structure without describing them by hand.`,
      },
      'gradle-multimodule': {
        question: 'How is a multi-module project structured in Gradle?',
        answer: `A multi-module (multi-project) build is a **root project** plus several subprojects; the makeup is defined in **\`settings.gradle\`**:

\`\`\`groovy
// settings.gradle (root)
rootProject.name = 'shop'
include 'domain', 'service', 'web'
\`\`\`

Structure:

\`\`\`text
shop/
├── settings.gradle        // the list of modules
├── build.gradle           // shared configuration (subprojects/allprojects)
├── domain/build.gradle
├── service/build.gradle
└── web/build.gradle
\`\`\`

Key points:

- **a dependency between modules** — via \`project(...)\`:

\`\`\`groovy
// web/build.gradle
dependencies { implementation project(':service') }
\`\`\`

- **shared configuration** is moved to the root (\`subprojects { ... }\`) or, preferably, into **convention plugins** (\`buildSrc\`) to avoid duplication;
- Gradle builds a **single task graph** across all modules and builds them in the correct order, **in parallel** and **incrementally** (rebuilding only what is affected);
- \`implementation project(':service')\` does **not** leak transitively into consumers of \`web\` — use \`api\` for such "leaking".

This gives a fast, cacheable build of large codebases with clear module boundaries.`,
      },
    },
  };

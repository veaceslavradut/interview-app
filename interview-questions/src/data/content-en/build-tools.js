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
    },
  };

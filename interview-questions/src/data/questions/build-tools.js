// Категория: build-tools
export const buildTools = {
    id: 'build-tools',
    title:'Maven / Gradle',
    icon: '🔧',
    description: 'Инструменты сборки',
    questions: [
      {
        id: 'what-is-maven',
        difficulty: 'easy',
        tags: ['maven'],
        related: ['maven-lifecycle'],
        question: 'Что такое Maven? Какова структура pom.xml?',
        answer: `**Maven** — инструмент сборки и управления зависимостями Java-проектов. Принцип: **convention over configuration** — стандартная структура проекта и жизненный цикл.

**Стандартная структура:**

\`\`\`
src/main/java        — исходный код
src/main/resources   — ресурсы
src/test/java        — тесты
src/test/resources   — тестовые ресурсы
target/              — результаты сборки
pom.xml              — описание проекта
\`\`\`

**pom.xml (Project Object Model):**

\`\`\`xml
<project>
    <groupId>com.company</groupId>      <!-- организация -->
    <artifactId>my-app</artifactId>     <!-- имя артефакта -->
    <version>1.0.0-SNAPSHOT</version>   <!-- версия -->
    <packaging>jar</packaging>          <!-- jar | war | pom -->

    <parent>...</parent>                <!-- наследование конфигурации -->
    <properties>...</properties>        <!-- переменные (java.version) -->
    <dependencies>...</dependencies>    <!-- зависимости -->
    <dependencyManagement>...</dependencyManagement> <!-- версии для наследников -->
    <build><plugins>...</plugins></build> <!-- плагины сборки -->
    <profiles>...</profiles>            <!-- профили (dev/prod) -->
</project>
\`\`\`

Координаты артефакта: **groupId:artifactId:version (GAV)**. Зависимости скачиваются из репозиториев (Maven Central, корпоративный Nexus/Artifactory) в локальный \`~/.m2/repository\`.

**SNAPSHOT** — изменяемая dev-версия (перекачивается), релизные версии неизменны.`,
      },
      {
        id: 'maven-lifecycle',
        difficulty: 'medium',
        tags: ['maven'],
        related: ['what-is-maven'],
        question: 'Расскажите про жизненный цикл сборки Maven.',
        answer: `Maven имеет три независимых жизненных цикла: **default** (сборка), **clean** (очистка), **site** (документация).

**Основные фазы цикла default (по порядку):**

1. \`validate\` — проверка корректности проекта;
2. \`compile\` — компиляция main-кода;
3. \`test\` — запуск unit-тестов (Surefire);
4. \`package\` — упаковка (jar/war);
5. \`verify\` — интеграционные тесты (Failsafe), проверки качества;
6. \`install\` — установка артефакта в локальный репозиторий (~/.m2);
7. \`deploy\` — публикация в удалённый репозиторий.

**Ключевое правило**: вызов фазы выполняет **все предыдущие** фазы: \`mvn package\` = validate + compile + test + package.

\`\`\`bash
mvn clean install            # очистка + полная сборка + в локальный репозиторий
mvn test                     # только до тестов
mvn package -DskipTests      # пропустить тесты
mvn dependency:tree          # дерево зависимостей (плагин напрямую)
\`\`\`

Каждая фаза выполняет привязанные к ней **goals плагинов**: compile → \`maven-compiler-plugin:compile\`, package → \`maven-jar-plugin:jar\`. Плагины можно привязывать к любым фазам через \`<executions>\`.`,
      },
      {
        id: 'maven-dependencies',
        difficulty: 'medium',
        tags: ['maven', 'dependencies'],
        related: [],
        question: 'Какие scope зависимостей существуют? Как разрешаются конфликты версий?',
        answer: `**Scope зависимостей:**

- **compile** (по умолчанию) — везде: компиляция, тесты, runtime; транзитивно передаётся;
- **provided** — нужна для компиляции, но предоставляется окружением (Servlet API в Tomcat, Lombok);
- **runtime** — не нужна для компиляции, нужна в runtime (JDBC-драйвер);
- **test** — только для тестов (JUnit, Mockito);
- **system** — локальный путь к jar (антипаттерн);
- **import** — импорт BOM в \`dependencyManagement\`.

**Транзитивные зависимости** — зависимости зависимостей подтягиваются автоматически.

**Разрешение конфликтов версий** — принцип **nearest wins** («ближайший выигрывает»): побеждает версия с кратчайшим путём в дереве зависимостей; при равной глубине — первая объявленная.

**Управление:**

\`\`\`xml
<dependencyManagement>   <!-- фиксация версий централизованно -->
    <dependencies>
        <dependency>     <!-- BOM: согласованный набор версий -->
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-dependencies</artifactId>
            <version>3.3.0</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>

<exclusions>             <!-- исключение транзитивной зависимости -->
    <exclusion>
        <groupId>commons-logging</groupId>
        <artifactId>commons-logging</artifactId>
    </exclusion>
</exclusions>
\`\`\`

Диагностика: \`mvn dependency:tree -Dverbose\`, Maven Enforcer Plugin (запрет конфликтов). Несовместимые версии в classpath — причина \`NoSuchMethodError\`/\`ClassNotFoundException\` в runtime («JAR hell»).`,
      },
      {
        id: 'maven-vs-gradle',
        difficulty: 'easy',
        tags: ['maven', 'gradle'],
        related: [],
        question: 'В чем разница между Maven и Gradle?',
        answer: `**Maven:**

- конфигурация — декларативный **XML** (pom.xml);
- жёсткий стандартный жизненный цикл;
- прост и предсказуем, огромная распространённость;
- многословный, сложная кастомизация (нужно писать плагины).

**Gradle:**

- конфигурация — **Groovy/Kotlin DSL** (build.gradle / build.gradle.kts) — это код;
- модель — **направленный граф задач (DAG)**, гибкие кастомные задачи;
- **быстрее**: инкрементальная сборка (пересобирает только изменённое), build cache (локальный и удалённый), Gradle Daemon, параллельность;
- стандарт для Android; выбор для крупных multi-module проектов.

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

tasks.register("hello") {          // кастомная задача — просто код
    doLast { println("Hello!") }
}
\`\`\`

Отличие конфигураций Gradle: \`implementation\` (не протекает в API потребителей — быстрее пересборка) vs \`api\` (протекает).

**Выбор**: Maven — простота, стабильность, единообразие в команде; Gradle — скорость сборки, гибкость, большие проекты. Функционально оба решают одну задачу и работают с одними репозиториями.`,
      },
      {
        id: 'gradle-basics',
        difficulty: 'medium',
        tags: ['gradle'],
        related: ['maven-vs-gradle', 'gradle-dependencies', 'gradle-plugins'],
        question: 'Каковы основы Gradle: сборка, задачи (tasks), фазы?',
        answer: `**Gradle** — система сборки на основе **графа задач (task graph)**; скрипты пишут на **Groovy** (\`build.gradle\`) или **Kotlin DSL** (\`build.gradle.kts\`). В отличие от декларативного \`pom.xml\` Maven, Gradle-скрипт — это программируемая конфигурация.

Единица работы — **task** (задача): \`compileJava\`, \`test\`, \`jar\`, \`build\`. Задачи связаны зависимостями и образуют **DAG**; Gradle выполняет только нужные, в правильном порядке.

Сборка идёт в **три фазы**:

1. **Initialization** — определяются проекты (какие модули участвуют, \`settings.gradle\`);
2. **Configuration** — выполняются скрипты, строится граф задач (конфигурируются **все** задачи, даже невыполняемые);
3. **Execution** — выполняются выбранные задачи и их зависимости.

\`\`\`groovy
plugins { id 'java' }
group = 'com.example'
dependencies { testImplementation 'org.junit.jupiter:junit-jupiter:5.10.0' }
\`\`\`

Ключевые преимущества: **инкрементальная сборка** и **build cache** (не пересобирает неизменившееся), **демон** (тёплый JVM-процесс) — отсюда скорость. Плагин \`java\`/\`application\` приносит стандартные задачи и layout (\`src/main/java\`).`,
      },
      {
        id: 'gradle-dependencies',
        difficulty: 'medium',
        tags: ['gradle'],
        related: ['gradle-basics', 'maven-dependencies'],
        question: 'Как в Gradle управляются зависимости и configurations (implementation, api, …)?',
        answer: `Зависимости объявляют в блоке \`dependencies\`, привязывая к **configuration** — именованному набору зависимостей для определённой цели. Плагин \`java\` даёт основные:

\`\`\`groovy
dependencies {
    implementation 'org.apache.commons:commons-lang3:3.14.0'   // нужна для компиляции и рантайма
    api 'com.google.guava:guava:33.0.0-jre'                    // + «протекает» в API модуля
    compileOnly 'org.projectlombok:lombok:1.18.30'             // только компиляция (не в рантайм)
    runtimeOnly 'com.h2database:h2:2.2.224'                    // только рантайм
    testImplementation 'org.junit.jupiter:junit-jupiter:5.10.0'
}
\`\`\`

Ключевое различие **\`implementation\` vs \`api\`**:

- **\`implementation\`** — зависимость **не** видна потребителям модуля (не попадает в их compile classpath). Меняете её версию — зависящие модули **не** перекомпилируются → быстрее сборка, лучше инкапсуляция;
- **\`api\`** — зависимость **транзитивно** видна потребителям (нужна, если её типы фигурируют в публичном API модуля).

Аналог Maven-scope: \`implementation/api\`≈compile, \`compileOnly\`≈provided, \`runtimeOnly\`≈runtime, \`testImplementation\`≈test. Конфликты версий решает единая стратегия резолвинга (по умолчанию — **наибольшая** версия); можно фиксировать через \`constraints\`/platform (BOM).`,
      },
      {
        id: 'gradle-plugins',
        difficulty: 'medium',
        tags: ['gradle'],
        related: ['gradle-basics', 'gradle-multimodule'],
        question: 'Что такое плагины Gradle и как они расширяют сборку?',
        answer: `**Плагин Gradle** — переиспользуемый пакет конфигурации, который добавляет в проект **задачи, соглашения (conventions), configurations и расширения (extensions)**. Почти вся функциональность Gradle приходит из плагинов.

\`\`\`groovy
plugins {
    id 'java'                                   // core-плагин: задачи compileJava/test/jar, layout src/main/java
    id 'org.springframework.boot' version '3.2.0'  // community-плагин: bootJar, bootRun
    id 'application'                            // задача run + сборка дистрибутива
}
\`\`\`

Виды:

- **core-плагины** (встроены: \`java\`, \`java-library\`, \`application\`, \`maven-publish\`) — подключаются по id без версии;
- **community/сторонние** — из **Gradle Plugin Portal**, с указанием версии;
- **свои** — \`buildSrc\` или **convention plugins** для переиспользования конфигурации между модулями.

Плагин обычно даёт **extension** для настройки:

\`\`\`groovy
java { toolchain { languageVersion = JavaLanguageVersion.of(21) } }
\`\`\`

Плагины реализуют принцип «convention over configuration»: подключил \`java\` — получил стандартный набор задач и структуру без ручного описания.`,
      },
      {
        id: 'gradle-multimodule',
        difficulty: 'hard',
        tags: ['gradle', 'advanced'],
        related: ['gradle-basics', 'gradle-plugins'],
        question: 'Как устроен многомодульный проект в Gradle?',
        answer: `Многомодульный (multi-project) билд — это **корневой проект** и несколько подпроектов; состав задаётся в **\`settings.gradle\`**:

\`\`\`groovy
// settings.gradle (корень)
rootProject.name = 'shop'
include 'domain', 'service', 'web'
\`\`\`

Структура:

\`\`\`text
shop/
├── settings.gradle        // перечень модулей
├── build.gradle           // общая конфигурация (subprojects/allprojects)
├── domain/build.gradle
├── service/build.gradle
└── web/build.gradle
\`\`\`

Ключевые моменты:

- **зависимость между модулями** — через \`project(...)\`:

\`\`\`groovy
// web/build.gradle
dependencies { implementation project(':service') }
\`\`\`

- **общая конфигурация** выносится в корень (\`subprojects { ... }\`) или, что предпочтительнее, в **convention plugins** (\`buildSrc\`), чтобы не дублировать;
- Gradle строит **единый граф задач** по всем модулям и собирает их в правильном порядке, **параллельно** и **инкрементально** (пересобирает только затронутые);
- \`implementation project(':service')\` **не протекает** транзитивно в потребителей \`web\` — для «протекания» используют \`api\`.

Это даёт быстрый, кэшируемый билд больших кодовых баз с чёткими границами модулей.`,
      },
    ],
  };

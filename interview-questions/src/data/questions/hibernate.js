// Категория: hibernate
export const hibernate = {
    id: 'hibernate',
    title: 'Hibernate / JPA',
    icon: '🗃️',
    description: 'ORM, entity, кэширование',
    questions: [
      {
        id: 'what-is-orm',
        difficulty: 'easy',
        tags: ['orm', 'basics'],
        related: ['entity-states', 'hibernate-vs-jdbc'],
        question: 'Что такое ORM, JPA и Hibernate?',
        answer: `**ORM (Object-Relational Mapping)** — технология отображения объектов на таблицы реляционной БД: работа с данными через объекты вместо ручного SQL.

**JPA (Jakarta/Java Persistence API)** — **спецификация** (стандарт) ORM для Java: аннотации (\`@Entity\`, \`@Id\`, \`@OneToMany\`), интерфейс \`EntityManager\`, язык запросов JPQL.

**Hibernate** — самая популярная **реализация** JPA (также EclipseLink, OpenJPA). Даёт расширения сверх стандарта: Session, HQL, кэш 2-го уровня, @Formula и др.

\`\`\`java
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @OneToMany(mappedBy = "user")
    private List<Order> orders;
}
\`\`\`

**Соотношение**: JPA — контракт, Hibernate — движок. Код пишут по JPA (переносимость), Hibernate-специфику используют осознанно.

**Spring Data JPA** — ещё один уровень: репозитории с автогенерацией запросов (\`findByNameAndAgeGreaterThan\`) поверх JPA/Hibernate.

Плюсы ORM: скорость разработки, переносимость, кэширование, dirty checking. Минусы: сложность контроля SQL, N+1, накладные расходы — для сложной аналитики часто лучше нативный SQL.`,
      },
      {
        id: 'entity-states',
        difficulty: 'medium',
        tags: ['orm', 'entity'],
        related: ['persist-merge-save', 'flush-commit'],
        question: 'Какие состояния может иметь entity? Что такое Persistence Context?',
        answer: `**Persistence Context** — «кэш первого уровня»: область, где EntityManager отслеживает загруженные сущности и их изменения (dirty checking). Обычно живёт в рамках транзакции.

**Состояния entity:**

- **Transient (new)** — новый объект, не связан с контекстом, нет id в БД:

\`\`\`java
User user = new User("John"); // transient
\`\`\`

- **Managed (persistent)** — привязан к контексту; **все изменения автоматически синхронизируются** с БД при flush/commit:

\`\`\`java
em.persist(user);              // managed
user.setName("Jane");          // UPDATE выполнится сам — dirty checking
\`\`\`

- **Detached** — контекст закрыт или entity отсоединён; изменения не отслеживаются:

\`\`\`java
em.detach(user);               // или закрытие EntityManager
user.setName("Bob");           // в БД не попадёт
User managed = em.merge(user); // повторное присоединение (merge возвращает НОВЫЙ managed-объект)
\`\`\`

- **Removed** — помечен на удаление: \`em.remove(user)\` → DELETE при commit.

Внутри одной транзакции повторный \`find()\` того же id вернёт **тот же объект** из контекста без запроса к БД (repeatable read на уровне объектов).`,
      },
      {
        id: 'lazy-eager',
        difficulty: 'medium',
        tags: ['orm', 'performance'],
        related: ['n-plus-one'],
        question: 'В чем разница между LAZY и EAGER загрузкой? Что такое LazyInitializationException?',
        answer: `**FetchType** определяет, когда загружаются связанные сущности:

- **EAGER** — сразу вместе с родителем (JOIN или отдельный запрос);
- **LAZY** — при первом обращении (Hibernate подставляет прокси).

**По умолчанию**: \`@ManyToOne\`, \`@OneToOne\` — EAGER; \`@OneToMany\`, \`@ManyToMany\` — LAZY.

\`\`\`java
@Entity
public class User {
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Order> orders;   // прокси-коллекция, загрузится при обращении
}
\`\`\`

**LazyInitializationException** — обращение к LAZY-связи **после закрытия** Persistence Context (вне транзакции):

\`\`\`java
User user = userService.findById(1L); // транзакция закрылась
user.getOrders().size();              // LazyInitializationException!
\`\`\`

**Правильные решения:**

- **JOIN FETCH** в запросе: \`SELECT u FROM User u JOIN FETCH u.orders WHERE u.id = :id\`;
- **@EntityGraph** в Spring Data: \`@EntityGraph(attributePaths = "orders")\`;
- DTO-проекция — выбрать сразу нужные поля;
- расширить транзакцию на весь сценарий использования.

**Плохие решения**: \`spring.jpa.open-in-view=true\` (держит соединение на весь запрос; в новых проектах рекомендуют отключать), EAGER везде (грузит лишнее всегда).

Рекомендация: **всё LAZY** (включая @ManyToOne), а нужные связи загружать явно под конкретный сценарий.`,
      },
      {
        id: 'n-plus-one',
        difficulty: 'hard',
        tags: ['orm', 'performance'],
        related: ['lazy-eager', 'hibernate-caches'],
        question: 'Что такое проблема N+1 и как её решить?',
        answer: `**Проблема N+1** — вместо одного запроса выполняется 1 (список родителей) + N (по запросу на связь каждого родителя):

\`\`\`java
List<User> users = userRepo.findAll();        // 1 запрос: SELECT * FROM users
for (User u : users) {
    u.getOrders().size();                     // N запросов: SELECT * FROM orders WHERE user_id = ?
}
// 100 пользователей = 101 запрос!
\`\`\`

Возникает из-за LAZY-загрузки связей в цикле (а с EAGER — прячется ещё глубже).

**Решения:**

- **JOIN FETCH** (JPQL):

\`\`\`java
@Query("SELECT u FROM User u JOIN FETCH u.orders")
List<User> findAllWithOrders();   // 1 запрос с JOIN
\`\`\`

- **@EntityGraph** (Spring Data):

\`\`\`java
@EntityGraph(attributePaths = {"orders"})
List<User> findAll();
\`\`\`

- **@BatchSize(size = 50)** (Hibernate) — загрузка связей пачками через IN: 1 + N/50 запросов;
- \`hibernate.default_batch_fetch_size\` — глобально;
- **DTO-проекция** — сразу выбрать плоские данные одним запросом.

**Нюанс**: JOIN FETCH двух коллекций одновременно даёт \`MultipleBagFetchException\` / декартово произведение — комбинируйте fetch + @BatchSize.

**Как обнаружить**: логирование SQL (\`spring.jpa.show-sql\`, p6spy), метрики Hibernate, статический анализ. N+1 — самая частая причина деградации производительности JPA-приложений.`,
      },
      {
        id: 'hibernate-caches',
        difficulty: 'hard',
        tags: ['orm', 'caching', 'performance'],
        related: ['n-plus-one'],
        question: 'Какие уровни кэширования есть в Hibernate?',
        answer: `**Кэш первого уровня (L1)** — Persistence Context / Session:

- включён **всегда**, отключить нельзя;
- область действия — одна сессия/транзакция;
- повторный \`find()\` по тому же id не идёт в БД;
- сбрасывается при \`clear()\`, \`detach()\`, закрытии сессии.

**Кэш второго уровня (L2)** — общий для всех сессий (на SessionFactory):

- выключен по умолчанию, включается явно;
- провайдеры: Ehcache, Caffeine, Infinispan, Hazelcast (через JCache);
- кэширует сущности по id:

\`\`\`java
@Entity
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Country { ... }
\`\`\`

- стратегии: READ_ONLY (справочники), READ_WRITE, NONSTRICT_READ_WRITE, TRANSACTIONAL.

**Кэш запросов (Query Cache)** — кэширует результаты запросов (списки id); работает только вместе с L2; инвалидируется при **любом** изменении затронутых таблиц — полезен редко.

**Подводные камни L2:**

- устаревшие данные при изменении БД мимо Hibernate;
- инвалидация в кластере требует распределённого кэша;
- имеет смысл для редко меняющихся данных (справочники).

На практике для бизнес-данных чаще используют явное кэширование на уровне сервиса (Spring \`@Cacheable\` + Redis/Caffeine), а L2 — точечно.`,
      },
      {
        id: 'hibernate-vs-jdbc',
        difficulty: 'easy',
        tags: ['orm', 'basics'],
        related: ['what-is-orm'],
        question: 'Чем Hibernate лучше чистого JDBC? В чём его минусы?',
        answer: `**JDBC** — низкоуровневый API: разработчик сам пишет SQL, вручную маппит \`ResultSet\` в объекты, управляет \`Connection\`/\`Statement\`, обрабатывает \`SQLException\`. Много рутинного кода.

**Hibernate** — ORM поверх JDBC, автоматизирующий это:

- **маппинг** объектов на таблицы через аннотации — не нужно вручную собирать объекты из строк;
- **генерация SQL** под целевую СУБД (диалекты) — переносимость;
- **Persistence Context** с dirty checking, кэшированием первого уровня и автоматической синхронизацией изменений;
- удобная навигация по связям, ленивая загрузка, HQL/Criteria, кэш второго уровня, оптимистичные блокировки.

**Минусы:**

- скрытая сложность — «магия» (ленивая загрузка, N+1, автофлаш) требует понимания, иначе рождает неявные проблемы производительности;
- overhead по сравнению с точечным ручным SQL;
- для тяжёлых аналитических запросов и bulk-операций чистый SQL часто эффективнее.

Итог: Hibernate ускоряет CRUD-разработку и упрощает работу с доменной моделью, но для узких мест иногда нужен нативный SQL.`,
      },
      {
        id: 'session-vs-sessionfactory',
        difficulty: 'easy',
        tags: ['orm', 'basics'],
        related: ['entity-states'],
        question: 'Чем Session отличается от SessionFactory?',
        answer: `**\`SessionFactory\`** — тяжёлый, потокобезопасный объект, создаваемый **один раз** на приложение (на каждый persistence unit). Хранит конфигурацию, маппинги, пул соединений и кэш второго уровня. Его создание дорого, поэтому он существует в единственном экземпляре и служит фабрикой сессий.

**\`Session\`** — лёгкий, **не потокобезопасный** объект, представляющий единицу работы (обычно на один запрос/транзакцию). Оборачивает соединение с БД, хранит **Persistence Context** первого уровня (кэш управляемых сущностей) и выполняет операции (\`save\`, \`get\`, \`query\`). Создаётся из \`SessionFactory\` под конкретную операцию и закрывается по её завершении.

В терминах JPA им соответствуют **\`EntityManagerFactory\`** и **\`EntityManager\`**. Правило: одна \`SessionFactory\` на приложение, много короткоживущих \`Session\` — по одной на поток/транзакцию.`,
      },
      {
        id: 'persist-merge-save',
        difficulty: 'medium',
        tags: ['orm', 'entity'],
        related: ['entity-states', 'flush-commit'],
        question: 'В чём разница между persist(), save(), merge() и update()?',
        answer: `Методы перевода объекта в управляемое состояние различаются семантикой:

- **\`persist()\`** (JPA) — делает **transient**-объект managed. Не гарантирует немедленный \`INSERT\` (может отложиться до flush), ничего не возвращает. Бросает исключение, если объект уже detached.
- **\`save()\`** (Hibernate) — похоже на \`persist\`, но сразу генерирует идентификатор и возвращает его; специфичен для Hibernate.
- **\`merge()\`** (JPA) — берёт **detached** (или transient) объект, **копирует его состояние** в управляемый экземпляр из Persistence Context (при необходимости подгрузив его) и возвращает **managed-копию**. Важно: переданный объект остаётся detached — работать нужно с возвращённым.
- **\`update()\`** (Hibernate) — повторно присоединяет detached-объект к сессии, делая его managed. Бросает исключение, если такой объект уже есть в контексте (в отличие от \`merge\`).

Современный код на JPA обычно использует \`persist\` для новых сущностей и \`merge\` для detached; Hibernate-специфичные \`save\`/\`update\`/\`saveOrUpdate\` считаются устаревающими.`,
      },
      {
        id: 'flush-commit',
        difficulty: 'medium',
        tags: ['orm', 'entity'],
        related: ['persist-merge-save', 'entity-states'],
        question: 'В чём разница между flush() и commit()? Что такое dirty checking?',
        answer: `**\`flush()\`** синхронизирует Persistence Context с БД — выполняет накопленные \`INSERT\`/\`UPDATE\`/\`DELETE\`, но **в рамках текущей транзакции** и **без её завершения**. Данные видны внутри транзакции, но ещё могут быть откачены.

**\`commit()\`** завершает транзакцию: сначала вызывает \`flush()\` (сброс изменений), затем фиксирует их в БД окончательно. После commit откат невозможен.

**Dirty checking (проверка загрязнения)** — Hibernate при flush автоматически сравнивает текущее состояние managed-сущностей со снимком, сделанным при загрузке, и для изменённых генерирует \`UPDATE\`. Поэтому явный \`save\`/\`update\` для уже managed-объекта не нужен: достаточно изменить поле — изменения сохранятся при flush.

**FlushMode** управляет моментом автоматического flush: по умолчанию (\`AUTO\`) — перед выполнением запроса, который может зависеть от несохранённых изменений, и при commit. Если не сделать flush/commit, изменения не попадут в БД. \`clear()\` очищает контекст, отсоединяя все сущности (managed → detached).`,
      },
      {
        id: 'hql-vs-criteria',
        difficulty: 'medium',
        tags: ['orm', 'queries'],
        related: [],
        question: 'Что такое HQL и чем он отличается от Criteria API?',
        answer: `И то, и другое — способы писать запросы к сущностям (а не к таблицам напрямую).

**HQL (Hibernate Query Language)** / его JPA-стандарт **JPQL** — объектно-ориентированный SQL-подобный язык, оперирующий **именами сущностей и полей**, а не таблиц и колонок: \`FROM User u WHERE u.age > :age\`. Компактен и читаем, но запрос — это **строка**, ошибки видны только в рантайме.

**Criteria API** — программное построение запроса через объекты Java (\`CriteriaBuilder\`, \`CriteriaQuery\`, \`Root\`). Многословнее, зато **типобезопасно** (особенно с metamodel), проверяется компилятором и удобно для **динамических** запросов, собираемых по условиям (фильтры, у которых заранее неизвестен набор).

Правило выбора: **HQL/JPQL** — для статичных, заранее известных запросов (короче и понятнее); **Criteria** — для динамически формируемых запросов. Для повторяющихся запросов есть **именованные запросы** (\`@NamedQuery\`), которые парсятся один раз при старте.`,
      },
      {
        id: 'mappedby-joincolumn',
        difficulty: 'medium',
        tags: ['orm', 'mapping'],
        related: ['manytomany-intermediate'],
        question: 'В чём разница между mappedBy и @JoinColumn? Что такое владелец связи?',
        answer: `В двунаправленной ассоциации всегда есть **владелец связи (owning side)** — сторона, чьи изменения Hibernate транслирует в БД (именно она отвечает за внешний ключ). Вторая сторона — **inverse (обратная)**.

- **\`@JoinColumn\`** ставится на **владельце** и задаёт колонку внешнего ключа. Владелец «физически» держит связь.
- **\`mappedBy = "поле"\`** ставится на **обратной** стороне и говорит: «связь уже отображена полем на другой стороне, своего внешнего ключа у меня нет». Это делает сторону read-only относительно связи.

Пример: \`@OneToMany(mappedBy = "author") List<Book> books\` в \`Author\`, а в \`Book\` — \`@ManyToOne @JoinColumn(name = "author_id") Author author\`. Владелец — \`Book\`.

Частая ошибка: менять только inverse-сторону и ждать сохранения — изменения не попадут в БД, т.к. за внешний ключ отвечает владелец. Обновлять нужно владеющую сторону (или обе, поддерживая консистентность в памяти).`,
      },
      {
        id: 'manytomany-intermediate',
        difficulty: 'medium',
        tags: ['orm', 'mapping'],
        related: ['mappedby-joincolumn'],
        question: 'Когда вместо @ManyToMany нужна отдельная промежуточная сущность?',
        answer: `\`@ManyToMany\` с \`@JoinTable\` подходит, только когда связующая таблица содержит **исключительно два внешних ключа** и никаких собственных данных.

Как только связи нужны **дополнительные атрибуты** — становится необходима отдельная сущность на связующую таблицу. Примеры атрибутов: количество и цена в «заказ ↔ товар», дата зачисления и оценка в «студент ↔ курс», роль в «пользователь ↔ проект».

В этом случае \`@ManyToMany\` заменяют на **две связи \`@OneToMany\`/\`@ManyToOne\`** через промежуточную сущность (например, \`OrderItem\`), которая содержит ссылки на обе стороны плюс свои поля.

Дополнительные причины предпочесть промежуточную сущность даже без лишних полей:

- лучший контроль над каскадами и удалением;
- возможность отдельного первичного ключа и аудита;
- \`@ManyToMany\` бывает капризным при обновлениях (удаление/пересоздание строк join-таблицы). На практике многие вообще избегают \`@ManyToMany\` в пользу явной сущности.`,
      },
      {
        id: 'element-collection',
        difficulty: 'medium',
        tags: ['orm', 'mapping'],
        related: ['mappedby-joincolumn'],
        question: 'Что такое @ElementCollection и когда его использовать?',
        answer: `**\`@ElementCollection\`** отображает коллекцию **не-сущностей** — примитивов, строк или встраиваемых объектов (\`@Embeddable\`) — в отдельную таблицу, **без создания отдельной сущности**. Элементы полностью принадлежат владельцу и не имеют собственной идентичности.

Пример: список телефонов или набор тегов у пользователя — \`@ElementCollection List<String> phones\`; данные лягут в отдельную таблицу с внешним ключом на владельца.

Особенности:

- жизненный цикл элементов **полностью** зависит от владельца (нет своего id, нельзя ссылаться извне);
- по умолчанию загрузка **LAZY**;
- обновление часто реализуется как **удаление всех строк и вставка заново**, что неэффективно для больших коллекций;
- для встраиваемых типов используется \`@Embeddable\` + \`@ElementCollection\`.

Когда выбрать: простые «принадлежащие» наборы значений без самостоятельной жизни. Если у элементов есть идентичность, они переиспользуются или на них ссылаются — нужна полноценная сущность и \`@OneToMany\`.`,
      },
    ],
  };

// Банки вопросов для финальных тестов по темам.
// Каждый «слот» содержит несколько вариантов вопроса — при каждом прохождении
// случайно выбирается один вариант, а порядок ответов перемешивается.
import { jvmQuiz } from './quiz/jvm.js';
import { javaCoreQuiz } from './quiz/javaCore.js';
import { collectionsQuiz } from './quiz/collections.js';
import { java8Quiz } from './quiz/java8.js';
import { ioQuiz, serializationQuiz } from './quiz/ioSerialization.js';
import { multithreadingQuiz } from './quiz/multithreading.js';
import { reactiveQuiz } from './quiz/reactive.js';
import { servletsQuiz, htmlQuiz, cssQuiz, webQuiz } from './quiz/webFrontend.js';
import { databasesQuiz, sqlQuiz, jdbcQuiz } from './quiz/dataStorage.js';
import {
  testingQuiz,
  loggingQuiz,
  umlQuiz,
  xmlQuiz,
  buildToolsQuiz,
  gitQuiz,
} from './quiz/toolsQuality.js';
import { patternsQuiz } from './quiz/patterns.js';
import { springQuiz, hibernateQuiz } from './quiz/frameworks.js';
import { kafkaQuiz, microservicesQuiz, awsQuiz } from './quiz/infra.js';
import { nosqlQuiz } from './quiz/nosql.js';
import { dockerQuiz } from './quiz/docker.js';
import { monitoringQuiz } from './quiz/monitoring.js';
import { terraformQuiz } from './quiz/terraform.js';
import { cleanCodeQuiz } from './quiz/cleanCode.js';
import { systemDesignQuiz } from './quiz/systemDesign.js';
import { algorithmsQuiz } from './quiz/algorithms.js';
import { claudeCertifiedDeveloperQuiz } from './quiz/claude.js';
import { ccdvImportedQuiz } from './quiz/ccdvImported.js';
import { quizzesEn } from './quizzes.en.js';

export const quizzes = {
  oop: {
    questions: [
      {
        id: 'oop-definition',
        variants: [
          {
            question: 'Что такое объектно-ориентированное программирование (ООП)?',
            options: [
              'Методология программирования, основанная на представлении программы в виде совокупности объектов — экземпляров классов, образующих иерархию наследования',
              'Способ написания программ в виде последовательности инструкций, выполняемых сверху вниз',
              'Парадигма, в которой программа описывается как набор математических функций без изменяемого состояния',
              'Методология, при которой программа состоит только из глобальных переменных и процедур',
            ],
            correct: 0,
          },
          {
            question: 'Какое из утверждений соответствует парадигме ООП?',
            options: [
              'Программа состоит из объектов, обменивающихся сообщениями; изменить состояние объекта можно, послав ему сообщение',
              'Программа состоит из чистых функций, которые не имеют состояния и побочных эффектов',
              'Программа — это набор SQL-запросов к базе данных',
              'Программа — это последовательность машинных команд, напрямую управляющих памятью',
            ],
            correct: 0,
          },
          {
            question: 'Программирование с использованием абстрактных типов данных, но БЕЗ наследования, называется…',
            options: [
              'Программированием с помощью абстрактных типов данных (не объектно-ориентированным)',
              'Полноценным объектно-ориентированным программированием',
              'Функциональным программированием',
              'Логическим программированием',
            ],
            correct: 0,
          },
        ],
      },
      {
        id: 'oop-principles',
        variants: [
          {
            question: 'Какие принципы являются основными принципами ООП?',
            options: [
              'Инкапсуляция, наследование, полиморфизм, абстракция',
              'Компиляция, интерпретация, трансляция, линковка',
              'Итерация, рекурсия, ветвление, последовательность',
              'Нормализация, денормализация, индексация, шардирование',
            ],
            correct: 0,
          },
          {
            question: 'Какие три принципа традиционно называют «столпами» ООП?',
            options: [
              'Инкапсуляция, наследование, полиморфизм',
              'Абстракция, декомпозиция, модульность',
              'Наследование, композиция, агрегация',
              'Инкапсуляция, сериализация, синхронизация',
            ],
            correct: 0,
          },
          {
            question: 'Какой из перечисленных принципов НЕ относится к принципам ООП?',
            options: [
              'Нормализация',
              'Инкапсуляция',
              'Полиморфизм',
              'Наследование',
            ],
            correct: 0,
          },
        ],
      },
      {
        id: 'encapsulation',
        variants: [
          {
            question: 'Что такое инкапсуляция?',
            options: [
              'Объединение данных и методов работы с ними в классе и сокрытие внутренней реализации от внешнего мира',
              'Механизм создания нового класса на основе существующего',
              'Возможность объектов с одинаковым интерфейсом иметь разную реализацию',
              'Разделение программы на независимые потоки выполнения',
            ],
            correct: 0,
          },
          {
            question: 'С помощью чего в Java достигается инкапсуляция?',
            options: [
              'Модификаторов доступа (private, protected, public) и публичных геттеров/сеттеров',
              'Ключевых слов extends и implements',
              'Аннотаций @Override и @FunctionalInterface',
              'Ключевых слов synchronized и volatile',
            ],
            correct: 0,
          },
          {
            question: 'Какое из перечисленного является преимуществом инкапсуляции?',
            options: [
              'Возможность изменять внутреннюю реализацию класса, не затрагивая клиентский код',
              'Автоматическое ускорение работы программы',
              'Возможность наследоваться сразу от нескольких классов',
              'Автоматическое освобождение памяти, занимаемой объектом',
            ],
            correct: 0,
          },
        ],
      },
      {
        id: 'inheritance',
        variants: [
          {
            question: 'Что такое наследование?',
            options: [
              'Механизм, позволяющий описать новый класс на основе существующего, заимствуя его свойства и функциональность',
              'Сокрытие данных объекта от прямого доступа извне',
              'Способность метода принимать параметры разных типов',
              'Объединение нескольких объектов в один массив',
            ],
            correct: 0,
          },
          {
            question: 'Какое утверждение о наследовании в Java ВЕРНО?',
            options: [
              'Класс может наследоваться только от одного класса; все классы неявно наследуются от java.lang.Object',
              'Класс может одновременно наследоваться от нескольких классов через extends',
              'Конструкторы родительского класса наследуются подклассом автоматически',
              'private-члены родителя не наследуются и физически отсутствуют в объекте подкласса',
            ],
            correct: 0,
          },
          {
            question: 'Как в Java реализуется множественное наследование поведения?',
            options: [
              'Через реализацию нескольких интерфейсов',
              'Через ключевое слово extends с перечислением нескольких классов',
              'Через статические вложенные классы',
              'Множественное наследование поведения в Java невозможно ни в каком виде',
            ],
            correct: 0,
          },
        ],
      },
      {
        id: 'polymorphism',
        variants: [
          {
            question: 'Что такое полиморфизм?',
            options: [
              'Возможность объектов с одинаковым интерфейсом иметь различную реализацию и обрабатываться единообразно',
              'Сокрытие внутренней реализации объекта за публичным интерфейсом',
              'Механизм заимствования свойств и методов родительского класса',
              'Способ хранения объектов разных типов в одной коллекции без приведения типов',
            ],
            correct: 0,
          },
          {
            question: 'Что произойдёт при вызове animal.makeSound(), если Animal animal = new Dog(), а Dog переопределяет makeSound()?',
            options: [
              'Вызовется реализация метода из класса Dog (динамический полиморфизм)',
              'Вызовется реализация метода из класса Animal, так как тип переменной — Animal',
              'Произойдёт ошибка компиляции',
              'Будет выброшено исключение ClassCastException',
            ],
            correct: 0,
          },
          {
            question: 'Чем перегрузка методов (overloading) отличается от переопределения (overriding)?',
            options: [
              'Перегрузка — полиморфизм времени компиляции (одно имя, разные параметры); переопределение — полиморфизм времени выполнения (подкласс заменяет реализацию родителя)',
              'Перегрузка выполняется в runtime, а переопределение — на этапе компиляции',
              'Это синонимы одного и того же механизма',
              'Перегрузка возможна только в интерфейсах, а переопределение — только в абстрактных классах',
            ],
            correct: 0,
          },
        ],
      },
      {
        id: 'abstraction',
        variants: [
          {
            question: 'Что такое абстракция в ООП?',
            options: [
              'Выделение значимых характеристик объекта в контексте задачи и игнорирование незначимых деталей',
              'Полный запрет на создание экземпляров любых классов',
              'Хранение всех данных программы в статических полях',
              'Способ шифрования данных внутри объекта',
            ],
            correct: 0,
          },
          {
            question: 'Через какие конструкции языка Java реализуется абстракция?',
            options: [
              'Абстрактные классы и интерфейсы',
              'Циклы и условные операторы',
              'Массивы и коллекции',
              'try-catch блоки и исключения',
            ],
            correct: 0,
          },
          {
            question: 'Какое утверждение лучше всего описывает суть абстракции?',
            options: [
              'Мы описываем, ЧТО делает объект, а не КАК он это делает',
              'Мы описываем, КАК устроен объект, во всех деталях реализации',
              'Мы скрываем объект так, что к нему невозможно обратиться',
              'Мы копируем поведение объекта в каждый класс, где оно нужно',
            ],
            correct: 0,
          },
        ],
      },
      {
        id: 'class-object-interface',
        variants: [
          {
            question: 'Что такое класс?',
            options: [
              'Шаблон (описание), на основе которого создаются объекты; определяет состояние и поведение',
              'Конкретный экземпляр, существующий в памяти во время выполнения программы',
              'Файл с расширением .java, обязательно содержащий метод main',
              'Область памяти, где хранятся все статические переменные',
            ],
            correct: 0,
          },
          {
            question: 'Чем объект отличается от класса?',
            options: [
              'Объект — конкретный экземпляр класса, созданный в памяти во время выполнения; класс — лишь описание (шаблон)',
              'Объект — это описание, а класс — его экземпляр',
              'Объект существует только на этапе компиляции, а класс — в runtime',
              'Ничем, это взаимозаменяемые понятия',
            ],
            correct: 0,
          },
          {
            question: 'Что такое интерфейс в Java?',
            options: [
              'Контракт, описывающий поведение (набор методов), которое обязуется реализовать класс',
              'Класс, от которого нельзя наследоваться',
              'Графическое окно для взаимодействия с пользователем',
              'Механизм автоматического создания геттеров и сеттеров',
            ],
            correct: 0,
          },
        ],
      },
      {
        id: 'oop-pros-cons',
        variants: [
          {
            question: 'Какое из перечисленного является ПРЕИМУЩЕСТВОМ ООП?',
            options: [
              'Повторное использование кода и упрощение сопровождения за счёт модульности',
              'Гарантированно более высокая производительность по сравнению с процедурным кодом',
              'Меньший объём потребляемой памяти по сравнению с любым другим подходом',
              'Отсутствие необходимости проектировать архитектуру приложения',
            ],
            correct: 0,
          },
          {
            question: 'Какое из перечисленного является НЕДОСТАТКОМ ООП?',
            options: [
              'Снижение производительности и дополнительный расход памяти из-за создания объектов и динамической диспетчеризации',
              'Невозможность повторного использования кода',
              'Отсутствие возможности моделировать предметную область',
              'Запрет на использование сторонних библиотек',
            ],
            correct: 0,
          },
        ],
      },
      {
        id: 'is-a-has-a',
        variants: [
          {
            question: 'Что описывает отношение IS-A («является»)?',
            options: [
              'Наследование: подкласс является разновидностью родительского класса (Dog IS-A Animal)',
              'Композицию: объект содержит другой объект как часть (Car HAS-A Engine)',
              'Перегрузку методов внутри одного класса',
              'Связь между классом и его статическими полями',
            ],
            correct: 0,
          },
          {
            question: 'Отношение «у автомобиля есть двигатель» (Car — Engine) — это пример…',
            options: [
              'HAS-A (композиция/агрегация)',
              'IS-A (наследование)',
              'Полиморфизма',
              'Переопределения методов',
            ],
            correct: 0,
          },
          {
            question: 'Как в Java выражается отношение IS-A?',
            options: [
              'Через extends (наследование классов) и implements (реализация интерфейсов)',
              'Через объявление поля другого класса внутри данного класса',
              'Через создание объекта оператором new',
              'Через статический импорт',
            ],
            correct: 0,
          },
        ],
      },
      {
        id: 'composition-aggregation',
        variants: [
          {
            question: 'Чем композиция отличается от агрегации?',
            options: [
              'При композиции часть не может существовать без целого; при агрегации часть может существовать независимо',
              'При агрегации часть уничтожается вместе с целым, при композиции — нет',
              'Композиция — это наследование, а агрегация — реализация интерфейсов',
              'Ничем, это полные синонимы',
            ],
            correct: 0,
          },
          {
            question: 'Отношение «комната — часть дома» (комната не существует без дома) — это пример…',
            options: [
              'Композиции',
              'Агрегации',
              'Наследования',
              'Полиморфизма',
            ],
            correct: 0,
          },
          {
            question: 'Отношение «студент — университет» (студент может существовать и без университета) — это пример…',
            options: [
              'Агрегации',
              'Композиции',
              'Наследования',
              'Инкапсуляции',
            ],
            correct: 0,
          },
        ],
      },
      {
        id: 'static-dynamic-binding',
        variants: [
          {
            question: 'Что такое статическое (раннее) связывание?',
            options: [
              'Связывание вызова с реализацией метода на этапе компиляции (перегруженные, static, private, final методы)',
              'Выбор реализации метода во время выполнения программы',
              'Связывание объекта с потоком выполнения',
              'Загрузка класса в память при первом обращении',
            ],
            correct: 0,
          },
          {
            question: 'Что такое динамическое (позднее) связывание?',
            options: [
              'Выбор конкретной реализации переопределённого метода во время выполнения по фактическому типу объекта',
              'Определение вызываемого метода на этапе компиляции',
              'Подключение внешних библиотек при сборке проекта',
              'Автоматическое создание объектов при старте приложения',
            ],
            correct: 0,
          },
          {
            question: 'Для каких методов в Java используется статическое связывание?',
            options: [
              'Для static, private, final и перегруженных методов',
              'Только для абстрактных методов',
              'Для всех переопределённых (overridden) методов',
              'Только для методов интерфейсов',
            ],
            correct: 0,
          },
        ],
      },
      {
        id: 'message-passing',
        variants: [
          {
            question: 'Как, согласно парадигме ООП, можно изменить состояние объекта?',
            options: [
              'Послать объекту сообщение (вызвать метод), в ответ на которое объект может изменить своё состояние',
              'Напрямую изменить его приватные поля из любого места программы',
              'Перезаписать область памяти объекта средствами ОС',
              'Состояние объекта в ООП изменить нельзя вообще',
            ],
            correct: 0,
          },
          {
            question: 'Что в ООП понимается под «обменом сообщениями» между объектами?',
            options: [
              'Вызов методов одних объектов другими объектами',
              'Передача данных по сети между серверами',
              'Обмен сообщениями через брокер вроде Kafka',
              'Копирование полей одного объекта в другой',
            ],
            correct: 0,
          },
        ],
      },
    ],
  },
  jvm: { questions: jvmQuiz },
  'java-core': { questions: javaCoreQuiz },
  collections: { questions: collectionsQuiz },
  java8: { questions: java8Quiz },
  io: { questions: ioQuiz },
  serialization: { questions: serializationQuiz },
  multithreading: { questions: multithreadingQuiz },
  reactive: { questions: reactiveQuiz },
  servlets: { questions: servletsQuiz },
  databases: { questions: databasesQuiz },
  sql: { questions: sqlQuiz },
  jdbc: { questions: jdbcQuiz },
  testing: { questions: testingQuiz },
  logging: { questions: loggingQuiz },
  uml: { questions: umlQuiz },
  xml: { questions: xmlQuiz },
  patterns: { questions: patternsQuiz },
  html: { questions: htmlQuiz },
  css: { questions: cssQuiz },
  web: { questions: webQuiz },
  kafka: { questions: kafkaQuiz },
  spring: { questions: springQuiz },
  hibernate: { questions: hibernateQuiz },
  'build-tools': { questions: buildToolsQuiz },
  git: { questions: gitQuiz },
  microservices: { questions: microservicesQuiz },
  aws: { questions: awsQuiz },
  nosql: { questions: nosqlQuiz },
  docker: { questions: dockerQuiz },
  monitoring: { questions: monitoringQuiz },
  terraform: { questions: terraformQuiz },
  'clean-code': { questions: cleanCodeQuiz },
  'system-design': { questions: systemDesignQuiz },
  algorithms: { questions: algorithmsQuiz },
  'claude-certified-developer': {
    questions: [...claudeCertifiedDeveloperQuiz, ...ccdvImportedQuiz],
  },
};

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Собирает конкретный вариант теста: случайный вариант вопроса в каждом слоте,
// перемешанный порядок вопросов и ответов.
//
// Локализация (lang='en'): если для слота есть английский оверрайд того же
// варианта (quizzesEn[cat][slotId][variantIndex]), берём его текст/опции. Опции
// в оверрайде хранятся в ТОМ ЖЕ порядке, что и в RU-исходнике, поэтому `correct`
// остаётся валидным индексом. Непереведённое грациозно остаётся на русском.
// Собирает один вопрос из слота: случайный вариант, EN-оверрайд (если есть и
// lang==='en'), опции — в объекты { text, isCorrect } с финальным перемешиванием.
// `categoryId` кладётся в результат, чтобы мок-интервью могло связать вопрос с темой
// (buildQuiz по одной теме его просто игнорирует).
function buildSlotQuestion(categoryId, slot, enBank, lang) {
  const variantIndex = Math.floor(Math.random() * slot.variants.length);
  const variant = slot.variants[variantIndex];
  const enVariant = lang === 'en' ? enBank?.[slot.id]?.[variantIndex] : null;
  const questionText = enVariant?.question ?? variant.question;
  const optionTexts = enVariant?.options ?? variant.options;
  const options = optionTexts.map((text, index) => ({
    text,
    isCorrect: index === variant.correct,
  }));
  return {
    id: slot.id,
    categoryId,
    question: questionText,
    options: shuffle(options),
  };
}

export function buildQuiz(categoryId, lang = 'ru') {
  const quiz = quizzes[categoryId];
  if (!quiz) return null;
  const enBank = lang === 'en' ? quizzesEn[categoryId] : null;
  const questions = shuffle(quiz.questions).map((slot) =>
    buildSlotQuestion(categoryId, slot, enBank, lang)
  );
  return { questions };
}

// Мок-интервью на позицию Senior Java Developer — одна кросс-темная сессия,
// собранная из банков квизов и взвешенная по тому, что реально спрашивают у
// сеньоров: ядро (JVM/GC, многопоточность, Java 8, коллекции, Spring, Hibernate,
// SQL, микросервисы, System Design, паттерны, ядро языка) встречается чаще
// периферии (git, docker, вёрстка и т.п.). claude-certified-developer намеренно
// не входит — это отдельный трек. Веса заданы только для тем, у которых есть банк
// квиза; тема без веса в интервью не попадает.
const INTERVIEW_WEIGHTS = {
  jvm: 3,
  multithreading: 3,
  java8: 3,
  collections: 3,
  'java-core': 3,
  spring: 3,
  hibernate: 3,
  sql: 3,
  microservices: 3,
  'system-design': 3,
  patterns: 3,
  oop: 2,
  kafka: 2,
  databases: 2,
  nosql: 2,
  reactive: 2,
  algorithms: 2,
  docker: 2,
  'clean-code': 2,
  aws: 2,
  io: 1,
  serialization: 1,
  servlets: 1,
  jdbc: 1,
  testing: 1,
  logging: 1,
  uml: 1,
  xml: 1,
  html: 1,
  css: 1,
  web: 1,
  'build-tools': 1,
  git: 1,
  monitoring: 1,
  terraform: 1,
};

export const MOCK_INTERVIEW_SIZE = 22;
// Чтобы одна тема не заполонила интервью — не больше стольких вопросов из неё.
const MOCK_MAX_PER_CATEGORY = 3;

// Взвешенно выбирает тему среди ещё «доступных» (остались неиспользованные слоты
// и не достигнут лимит на тему). null — пул исчерпан.
function pickCategory(cats, remaining, picks) {
  const eligible = cats.filter(
    (id) => remaining[id].length > 0 && (picks[id] || 0) < MOCK_MAX_PER_CATEGORY
  );
  if (eligible.length === 0) return null;
  const total = eligible.reduce((sum, id) => sum + INTERVIEW_WEIGHTS[id], 0);
  let r = Math.random() * total;
  for (const id of eligible) {
    r -= INTERVIEW_WEIGHTS[id];
    if (r <= 0) return id;
  }
  return eligible[eligible.length - 1];
}

export function buildMockInterview(lang = 'ru', count = MOCK_INTERVIEW_SIZE) {
  const cats = Object.keys(INTERVIEW_WEIGHTS).filter((id) => quizzes[id]?.questions?.length);
  // Неиспользованные слоты каждой темы (перемешаны), чтобы брать без повторов.
  const remaining = {};
  for (const id of cats) remaining[id] = shuffle(quizzes[id].questions.slice());
  const picks = {};
  const questions = [];
  while (questions.length < count) {
    const id = pickCategory(cats, remaining, picks);
    if (!id) break; // пул исчерпан (лимиты/слоты) — отдаём сколько набралось
    const slot = remaining[id].pop();
    picks[id] = (picks[id] || 0) + 1;
    const enBank = lang === 'en' ? quizzesEn[id] : null;
    questions.push(buildSlotQuestion(id, slot, enBank, lang));
  }
  // Финальное перемешивание, чтобы темы шли вперемешку, а не блоками.
  return { questions: shuffle(questions) };
}

export function hasQuiz(categoryId) {
  return Boolean(quizzes[categoryId]);
}

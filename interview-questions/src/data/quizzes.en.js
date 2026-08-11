// Английские переводы банков квизов (i18n квизов).
// Ключ — categoryId; значение — оверрайд вида
//   { [slotId]: [ { question, options: [...] }, ... ] }
// по одному элементу на каждый вариант слота, В ТОМ ЖЕ порядке, что и в
// RU-исходнике (buildQuiz читает `correct` из RU по индексу опции, поэтому
// порядок опций менять нельзя). Непереведённые категории просто отсутствуют —
// их квиз грациозно остаётся на русском.
import { oop } from './quiz-en/oop.js';
import { collections } from './quiz-en/collections.js';
import { javaCore } from './quiz-en/java-core.js';
import { jvm } from './quiz-en/jvm.js';
import { java8 } from './quiz-en/java8.js';
import { multithreading } from './quiz-en/multithreading.js';
import { spring } from './quiz-en/spring.js';
import { patterns } from './quiz-en/patterns.js';
import { sql } from './quiz-en/sql.js';
import { aws } from './quiz-en/aws.js';
import { kafka } from './quiz-en/kafka.js';
import { nosql } from './quiz-en/nosql.js';
import { microservices } from './quiz-en/microservices.js';
import { hibernate } from './quiz-en/hibernate.js';
import { git } from './quiz-en/git.js';

export const quizzesEn = {
  oop,
  collections,
  'java-core': javaCore,
  jvm,
  java8,
  multithreading,
  spring,
  patterns,
  sql,
  aws,
  kafka,
  nosql,
  microservices,
  hibernate,
  git,
};

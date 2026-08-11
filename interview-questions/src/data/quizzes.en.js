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
import { docker } from './quiz-en/docker.js';
import { systemDesign } from './quiz-en/system-design.js';
import { algorithms } from './quiz-en/algorithms.js';
import { testing } from './quiz-en/testing.js';
import { cleanCode } from './quiz-en/clean-code.js';
import { monitoring } from './quiz-en/monitoring.js';
import { reactive } from './quiz-en/reactive.js';
import { terraform } from './quiz-en/terraform.js';
import { databases } from './quiz-en/databases.js';
import { jdbc } from './quiz-en/jdbc.js';
import { io } from './quiz-en/io.js';
import { serialization } from './quiz-en/serialization.js';
import { servlets } from './quiz-en/servlets.js';
import { web } from './quiz-en/web.js';
import { css } from './quiz-en/css.js';
import { buildTools } from './quiz-en/build-tools.js';
import { html } from './quiz-en/html.js';
import { uml } from './quiz-en/uml.js';
import { xml } from './quiz-en/xml.js';
import { logging } from './quiz-en/logging.js';
import { claudeCertifiedDeveloperEn } from './quiz-en/claude.js';
import { ccdvImportedEn } from './quiz-en/ccdvImported.js';

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
  docker,
  'system-design': systemDesign,
  algorithms,
  testing,
  'clean-code': cleanCode,
  monitoring,
  reactive,
  terraform,
  databases,
  jdbc,
  io,
  serialization,
  servlets,
  web,
  css,
  'build-tools': buildTools,
  html,
  uml,
  xml,
  logging,
  // CCD: original slots (claude.js) + imported slots (from the English master)
  'claude-certified-developer': { ...claudeCertifiedDeveloperEn, ...ccdvImportedEn },
};

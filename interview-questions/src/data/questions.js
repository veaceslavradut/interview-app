// Каноничный список категорий (русский — источник истины).
// Каждая категория вынесена в отдельный файл в ./questions/ — этот файл лишь
// собирает их в массив в нужном порядке (порядок задаёт вид на главной).
import { oop } from './questions/oop.js';
import { jvm } from './questions/jvm.js';
import { javaCore } from './questions/java-core.js';
import { collections } from './questions/collections.js';
import { java8 } from './questions/java8.js';
import { io } from './questions/io.js';
import { serialization } from './questions/serialization.js';
import { multithreading } from './questions/multithreading.js';
import { reactive } from './questions/reactive.js';
import { servlets } from './questions/servlets.js';
import { databases } from './questions/databases.js';
import { sql } from './questions/sql.js';
import { jdbc } from './questions/jdbc.js';
import { testing } from './questions/testing.js';
import { logging } from './questions/logging.js';
import { uml } from './questions/uml.js';
import { xml } from './questions/xml.js';
import { patterns } from './questions/patterns.js';
import { html } from './questions/html.js';
import { css } from './questions/css.js';
import { web } from './questions/web.js';
import { kafka } from './questions/kafka.js';
import { spring } from './questions/spring.js';
import { hibernate } from './questions/hibernate.js';
import { buildTools } from './questions/build-tools.js';
import { git } from './questions/git.js';
import { microservices } from './questions/microservices.js';
import { aws } from './questions/aws.js';
import { nosql } from './questions/nosql.js';
import { docker } from './questions/docker.js';
import { monitoring } from './questions/monitoring.js';
import { terraform } from './questions/terraform.js';
import { cleanCode } from './questions/clean-code.js';
import { systemDesign } from './questions/system-design.js';
import { algorithms } from './questions/algorithms.js';
import { claudeCertifiedDeveloper } from './questions/claude-certified-developer.js';

export const categories = [
  oop,
  jvm,
  javaCore,
  collections,
  java8,
  io,
  serialization,
  multithreading,
  reactive,
  servlets,
  databases,
  sql,
  jdbc,
  testing,
  logging,
  uml,
  xml,
  patterns,
  html,
  css,
  web,
  kafka,
  spring,
  hibernate,
  buildTools,
  git,
  microservices,
  aws,
  nosql,
  docker,
  monitoring,
  terraform,
  cleanCode,
  systemDesign,
  algorithms,
  claudeCertifiedDeveloper,
];


export function getCategory(categoryId) {
  return categories.find((c) => c.id === categoryId);
}

export function getQuestion(categoryId, questionId) {
  const category = getCategory(categoryId);
  if (!category) return null;
  const index = category.questions.findIndex((q) => q.id === questionId);
  if (index === -1) return null;
  return {
    category,
    question: category.questions[index],
    prev: index > 0 ? category.questions[index - 1] : null,
    next: index < category.questions.length - 1 ? category.questions[index + 1] : null,
  };
}

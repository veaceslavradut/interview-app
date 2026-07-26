// Банк вопросов финального теста: Terraform
export const terraformQuiz = [
  {
    id: 'what-is-terraform',
    variants: [
      {
        question: 'Что такое Infrastructure as Code (IaC)?',
        options: [
          'Подход, при котором инфраструктура описывается и управляется кодом, а не вручную через UI',
          'Написание бизнес-логики приложения',
          'Хранение кода в облаке',
          'Автоматическое масштабирование контейнеров',
        ],
        correct: 0,
      },
      {
        question: 'Какой подход использует Terraform?',
        options: [
          'Декларативный — вы описываете желаемое состояние, Terraform вычисляет действия',
          'Императивный — вы перечисляете точные шаги выполнения',
          'Только ручную настройку через консоль',
          'Только настройку существующих машин по SSH',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'terraform-vs-others',
    variants: [
      {
        question: 'В чём главное отличие Terraform от Ansible?',
        options: [
          'Terraform — провижининг инфраструктуры (декларативно, со state); Ansible — настройка существующих машин',
          'Ansible создаёт инфраструктуру, а Terraform только настраивает ОС',
          'Это один и тот же инструмент',
          'Terraform работает только по SSH',
        ],
        correct: 0,
      },
      {
        question: 'Чем Terraform отличается от AWS CloudFormation?',
        options: [
          'Terraform облаконезависим (AWS, GCP, Azure…), а CloudFormation — только для AWS',
          'CloudFormation работает с любым облаком, а Terraform — только с AWS',
          'Оба работают только с Kubernetes',
          'Terraform не хранит состояние, а CloudFormation хранит',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'terraform-providers-resources',
    variants: [
      {
        question: 'Что такое provider в Terraform?',
        options: [
          'Плагин для общения с API конкретной платформы (aws, google, azurerm…)',
          'Один объект инфраструктуры',
          'Файл состояния',
          'Команда применения изменений',
        ],
        correct: 0,
      },
      {
        question: 'Что описывает resource?',
        options: [
          'Один объект инфраструктуры, которым управляет Terraform (EC2, S3-бакет, VPC)',
          'Плагин для облака',
          'Переменную конфигурации',
          'Удалённое хранилище state',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'terraform-state',
    variants: [
      {
        question: 'Зачем нужен state-файл в Terraform?',
        options: [
          'Хранит соответствие ресурсов из кода реальным объектам в облаке',
          'Хранит исходный код приложения',
          'Содержит логи выполнения',
          'Кэширует Docker-образы',
        ],
        correct: 0,
      },
      {
        question: 'Почему state-файл нельзя хранить в git и редактировать руками?',
        options: [
          'Он содержит чувствительные данные и критичен — для правок есть terraform state / import',
          'Он слишком большой для git',
          'Git не поддерживает JSON',
          'Его вообще не нужно хранить',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'terraform-remote-state',
    variants: [
      {
        question: 'Почему в проде нельзя хранить state локально?',
        options: [
          'Нет общего доступа и блокировок, риск потери файла, утечка секретов',
          'Локальный state работает быстрее и это опасно',
          'Terraform это технически запрещает',
          'Локальный state занимает слишком много места',
        ],
        correct: 0,
      },
      {
        question: 'Какая связка популярна для remote state в AWS?',
        options: [
          'S3 (хранение state) + DynamoDB (блокировка)',
          'EC2 + Lambda',
          'RDS + ElastiCache',
          'CloudFront + Route53',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'terraform-state-locking',
    variants: [
      {
        question: 'Зачем нужен state locking?',
        options: [
          'Не дать двум apply одновременно менять state и повредить его',
          'Зашифровать state-файл',
          'Ускорить terraform plan',
          'Ограничить доступ к облаку',
        ],
        correct: 0,
      },
      {
        question: 'Что произойдёт, если два человека одновременно сделают apply без блокировки?',
        options: [
          'Параллельная запись повредит state и рассинхронизирует его с реальностью',
          'Второй apply просто отменится без последствий',
          'Terraform объединит изменения автоматически',
          'Ничего — apply всегда безопасен',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'terraform-commands',
    variants: [
      {
        question: 'Что делает terraform plan?',
        options: [
          'Показывает, что будет создано/изменено/удалено, ничего не меняя (сухой прогон)',
          'Применяет изменения к инфраструктуре',
          'Удаляет всю инфраструктуру',
          'Скачивает провайдеры',
        ],
        correct: 0,
      },
      {
        question: 'Что делает terraform destroy?',
        options: [
          'Удаляет всю инфраструктуру, управляемую данной конфигурацией',
          'Обновляет state из реального состояния',
          'Форматирует конфигурацию',
          'Инициализирует backend',
        ],
        correct: 0,
      },
    ],
  },
];

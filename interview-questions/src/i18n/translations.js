// Строки интерфейса на всех поддерживаемых языках
const ui = {
  ru: {
    heroTitle: 'Java Interview Hub',
    heroSubtitle: 'Подготовка к интервью на позицию Senior Java Developer',
    topics: 'тем',
    questionsCount: 'вопросов',
    home: 'Главная',
    breadcrumbsLabel: 'Хлебные крошки',
    prevQuestion: '← Предыдущий',
    nextQuestion: 'Следующий →',
    listen: '🔊 Слушать ответ',
    pause: '⏸ Пауза',
    resume: '▶ Продолжить',
    stop: '⏹ Стоп',
    speechGroupLabel: 'Озвучивание ответа',
    speedTitle: 'Скорость воспроизведения',
    voiceTitle: 'Голос озвучивания',
    untranslated: '🌐 Этот ответ пока доступен только на русском языке.',
  },
  en: {
    heroTitle: 'Java Interview Hub',
    heroSubtitle: 'Preparation for a Senior Java Developer interview',
    topics: 'topics',
    questionsCount: 'questions',
    home: 'Home',
    breadcrumbsLabel: 'Breadcrumbs',
    prevQuestion: '← Previous',
    nextQuestion: 'Next →',
    listen: '🔊 Listen to the answer',
    pause: '⏸ Pause',
    resume: '▶ Resume',
    stop: '⏹ Stop',
    speechGroupLabel: 'Read the answer aloud',
    speedTitle: 'Playback speed',
    voiceTitle: 'Voice',
    untranslated: '🌐 This answer is only available in Russian for now.',
  },
};

export function t(lang, key) {
  return ui[lang]?.[key] ?? ui.ru[key] ?? key;
}

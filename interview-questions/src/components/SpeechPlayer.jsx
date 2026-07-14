import { useEffect, useMemo, useRef, useState } from 'react';

// Преобразует markdown-ответ в чистый текст, пригодный для озвучивания
function markdownToSpeechText(markdown) {
  return markdown
    // блоки кода заменяем на короткую фразу
    .replace(/```[\s\S]*?```/g, ' Далее следует пример кода, смотрите его на экране. ')
    // строки таблиц убираем (плохо звучат)
    .replace(/^\|.*\|$/gm, ' ')
    // инлайн-код — оставляем содержимое
    .replace(/`([^`]+)`/g, '$1')
    // заголовки, жирный, курсив
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    // маркеры списков
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    // ссылки [текст](url) → текст
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    // разделители и лишние пустые строки
    .replace(/^---+$/gm, ' ')
    .replace(/\n{2,}/g, '. ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

// Разбивает текст на короткие фрагменты по предложениям.
// Это обходит баг Chrome, когда длинная озвучка обрывается через ~15 секунд.
function splitIntoChunks(text, maxLength = 200) {
  const sentences = text.match(/[^.!?]+[.!?]+[\s]*|[^.!?]+$/g) || [text];
  const chunks = [];
  let current = '';
  for (const sentence of sentences) {
    if (current && current.length + sentence.length > maxLength) {
      chunks.push(current.trim());
      current = sentence;
    } else {
      current += sentence;
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

// Оценка «приятности» голоса: нейросетевые голоса звучат намного естественнее
function voiceScore(voice) {
  const name = voice.name.toLowerCase();
  if (name.includes('natural') || name.includes('neural')) return 4; // Edge — нейроголоса
  if (name.includes('online')) return 3;
  if (name.includes('google')) return 2; // Chrome — облачный голос Google
  return 1; // локальные системные голоса (звучат роботизированно)
}

// Убирает технический мусор из названия голоса для отображения
function friendlyVoiceName(voice) {
  return voice.name
    .replace(/^Microsoft\s+/i, '')
    .replace(/\s*Online\s*/i, ' ')
    .replace(/\s*\(Natural\)\s*/i, ' ')
    .replace(/\s*[-—]\s*Russian.*$/i, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function getRussianVoices() {
  return window.speechSynthesis
    .getVoices()
    .filter((v) => v.lang.toLowerCase().startsWith('ru'))
    .sort((a, b) => voiceScore(b) - voiceScore(a));
}

const RATES = [0.75, 1, 1.25, 1.5];
const VOICE_STORAGE_KEY = 'interview-hub-voice';

export default function SpeechPlayer({ title, text }) {
  const [status, setStatus] = useState('idle'); // idle | playing | paused
  const [rate, setRate] = useState(1);
  const [voices, setVoices] = useState([]);
  const [voiceName, setVoiceName] = useState(
    () => localStorage.getItem(VOICE_STORAGE_KEY) || ''
  );
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const queueRef = useRef({ cancelled: false });

  // голоса подгружаются асинхронно
  useEffect(() => {
    if (!supported) return undefined;
    const load = () => setVoices(getRussianVoices());
    load();
    window.speechSynthesis.addEventListener('voiceschanged', load);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', load);
  }, [supported]);

  // останавливаем озвучку при уходе со страницы / смене вопроса
  useEffect(() => {
    if (!supported) return undefined;
    window.speechSynthesis.cancel();
    setStatus('idle');
    return () => {
      queueRef.current.cancelled = true;
      window.speechSynthesis.cancel();
    };
  }, [supported, text]);

  const selectedVoice = useMemo(
    () => voices.find((v) => v.name === voiceName) || voices[0] || null,
    [voices, voiceName]
  );

  if (!supported) {
    return null;
  }

  const start = (speechRate, voice = selectedVoice) => {
    window.speechSynthesis.cancel();
    const queue = { cancelled: false };
    queueRef.current.cancelled = true;
    queueRef.current = queue;

    const chunks = splitIntoChunks(`${title}. ${markdownToSpeechText(text)}`);
    let remaining = chunks.length;

    chunks.forEach((chunk) => {
      const utterance = new SpeechSynthesisUtterance(chunk);
      utterance.lang = 'ru-RU';
      utterance.rate = speechRate;
      if (voice) utterance.voice = voice;
      utterance.onend = () => {
        remaining -= 1;
        if (remaining === 0 && !queue.cancelled) setStatus('idle');
      };
      window.speechSynthesis.speak(utterance);
    });
    setStatus('playing');
  };

  const handlePlayPause = () => {
    if (status === 'playing') {
      window.speechSynthesis.pause();
      setStatus('paused');
    } else if (status === 'paused') {
      window.speechSynthesis.resume();
      setStatus('playing');
    } else {
      start(rate);
    }
  };

  const handleStop = () => {
    queueRef.current.cancelled = true;
    window.speechSynthesis.cancel();
    setStatus('idle');
  };

  const handleRate = () => {
    const nextRate = RATES[(RATES.indexOf(rate) + 1) % RATES.length];
    setRate(nextRate);
    if (status !== 'idle') {
      // перезапускаем с новой скоростью (менять на лету API не позволяет)
      start(nextRate);
    }
  };

  const handleVoiceChange = (event) => {
    const name = event.target.value;
    setVoiceName(name);
    localStorage.setItem(VOICE_STORAGE_KEY, name);
    if (status !== 'idle') {
      const voice = voices.find((v) => v.name === name) || null;
      start(rate, voice);
    }
  };

  return (
    <div className="speech-player" role="group" aria-label="Озвучивание ответа">
      <button type="button" className="speech-button speech-main" onClick={handlePlayPause}>
        {status === 'playing' ? '⏸ Пауза' : status === 'paused' ? '▶ Продолжить' : '🔊 Слушать ответ'}
      </button>
      {status !== 'idle' && (
        <button type="button" className="speech-button" onClick={handleStop}>
          ⏹ Стоп
        </button>
      )}
      <button
        type="button"
        className="speech-button speech-rate"
        onClick={handleRate}
        title="Скорость воспроизведения"
      >
        {rate}×
      </button>
      {voices.length > 1 && (
        <select
          className="speech-voice-select"
          value={selectedVoice ? selectedVoice.name : ''}
          onChange={handleVoiceChange}
          title="Голос озвучивания"
          aria-label="Голос озвучивания"
        >
          {voices.map((voice) => (
            <option key={voice.name} value={voice.name}>
              {friendlyVoiceName(voice)}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Web Speech Synthesis helper for Spanish
let cachedVoice: SpeechSynthesisVoice | null = null;

export function getSpanishVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return null;
  }
  if (cachedVoice) return cachedVoice;

  const voices = window.speechSynthesis.getVoices();
  // Prefer European Spanish voices (es-ES), or any Spanish voice (es)
  const esVoice =
    voices.find(v => v.lang === 'es-ES') ||
    voices.find(v => v.lang.startsWith('es')) ||
    null;

  if (esVoice) {
    cachedVoice = esVoice;
  }
  return esVoice;
}

// Ensure voices are loaded
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoice = getSpanishVoice();
  };
}

export function playSpanishSpeech(
  text: string,
  rate = 1.0,
  onStart?: () => void,
  onEnd?: () => void,
  onError?: () => void
): () => void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    if (onError) onError();
    return () => {};
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Clean text from symbols like « » ¡ ! ¿ ?
  const cleanText = text.replace(/[«»]/g, '').trim();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'es-ES';
  utterance.rate = rate; // 1.0 = normal, 0.8 = slow
  utterance.pitch = 1.0;

  const voice = getSpanishVoice();
  if (voice) {
    utterance.voice = voice;
  }

  utterance.onstart = () => {
    if (onStart) onStart();
  };

  utterance.onend = () => {
    if (onEnd) onEnd();
  };

  utterance.onerror = (e) => {
    // If canceled, ignore
    if (e.error !== 'canceled' && onError) {
      onError();
    }
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);

  // Return cancel function
  return () => {
    window.speechSynthesis.cancel();
    if (onEnd) onEnd();
  };
}

export function stopSpanishSpeech(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

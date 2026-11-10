/**
 * Sons de acerto e erro gerados no próprio navegador (Web Audio), sem baixar arquivos.
 * O contexto de áudio só é criado no primeiro toque do aluno, como os navegadores exigem.
 */
let ctx: AudioContext | null = null;

function audio(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx ??= new AC();
    if (ctx.state === 'suspended') void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

function tone(ac: AudioContext, freq: number, start: number, duration: number, type: OscillatorType, volume: number) {
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(gain).connect(ac.destination);
  osc.start(start);
  osc.stop(start + duration + 0.02);
}

export function playCorrect() {
  const ac = audio();
  if (!ac) return;
  const t = ac.currentTime;
  tone(ac, 660, t, 0.14, 'sine', 0.12);
  tone(ac, 990, t + 0.09, 0.2, 'sine', 0.1);
}

export function playWrong() {
  const ac = audio();
  if (!ac) return;
  const t = ac.currentTime;
  tone(ac, 220, t, 0.18, 'triangle', 0.12);
  tone(ac, 175, t + 0.12, 0.24, 'triangle', 0.1);
}

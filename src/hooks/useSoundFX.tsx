import { createContext, useContext, useRef, useState, useCallback, type ReactNode } from 'react';
import { useReducedMotionPref } from './useMedia';

const STORAGE_KEY = 'sushmita-series-muted';

interface SoundFXContextType {
  muted: boolean;
  toggleMute: () => void;
  playSting: () => void;
  playClick: () => void;
  playHover: () => void;
}

const SoundFXContext = createContext<SoundFXContextType>({
  muted: false,
  toggleMute: () => {},
  playSting: () => {},
  playClick: () => {},
  playHover: () => {},
});

export function SoundFXProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotionPref();
  const [muted, setMuted] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved !== null ? saved === 'true' : false;
    } catch {
      return false;
    }
  });

  const ctxRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (typeof window === 'undefined') return null;
    if (!ctxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        ctxRef.current = new AudioCtx();
      }
    }
    if (ctxRef.current && ctxRef.current.state === 'suspended') {
      ctxRef.current.resume().catch(() => {});
    }
    return ctxRef.current;
  }, []);

  const toggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEY, String(next));
      } catch {
        // storage disabled
      }
      return next;
    });
  }, []);

  /**
   * Synthesized Netflix-style cinematic dual-tone sting:
   * Low sub-impact + resonant swelling chord + warm low-pass filter decay.
   */
  const playSting = useCallback(() => {
    if (muted || reducedMotion) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const master = ctx.createGain();
      master.gain.setValueAtTime(0.4, now);
      master.connect(ctx.destination);

      // 1. Sub impact (thump)
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(110, now);
      subOsc.frequency.exponentialRampToValueAtTime(35, now + 0.35);

      subGain.gain.setValueAtTime(0.6, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      subOsc.connect(subGain);
      subGain.connect(master);
      subOsc.start(now);
      subOsc.stop(now + 0.5);

      // 2. Resonant Chord Hit (D2 + A2 interval with slight detune)
      const frequencies = [73.42, 110.0, 146.83, 220.0];
      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        osc.type = idx % 2 === 0 ? 'sawtooth' : 'triangle';
        osc.frequency.setValueAtTime(freq, now + 0.05);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(300, now + 0.05);
        filter.frequency.exponentialRampToValueAtTime(1600, now + 0.4);
        filter.frequency.exponentialRampToValueAtTime(250, now + 2.2);

        // Envelope: soft swell then long cinematic decay
        gain.gain.setValueAtTime(0.001, now + 0.05);
        gain.gain.linearRampToValueAtTime(0.25 / (idx + 1), now + 0.25);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(master);

        osc.start(now + 0.05);
        osc.stop(now + 2.5);
      });
    } catch {
      // AudioContext policy or playback error fallback
    }
  }, [muted, reducedMotion, getAudioContext]);

  /** Subtle tactile micro-click (20ms) for buttons and switches */
  const playClick = useCallback(() => {
    if (muted || reducedMotion) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(950, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.025);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.025);
    } catch {
      // audio error fallback
    }
  }, [muted, reducedMotion, getAudioContext]);

  /** Mellow short frequency blip for hover chips */
  const playHover = useCallback(() => {
    if (muted || reducedMotion) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(540, now);
      osc.frequency.exponentialRampToValueAtTime(620, now + 0.035);

      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.035);
    } catch {
      // audio error fallback
    }
  }, [muted, reducedMotion, getAudioContext]);

  return (
    <SoundFXContext.Provider value={{ muted, toggleMute, playSting, playClick, playHover }}>
      {children}
    </SoundFXContext.Provider>
  );
}

export function useSoundFX() {
  return useContext(SoundFXContext);
}

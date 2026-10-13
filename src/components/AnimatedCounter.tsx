import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { useInView } from 'framer-motion';
import { useReducedMotionPref } from '../hooks/useMedia';

interface AnimatedCounterProps {
  value: string | number;
  className?: string;
  style?: CSSProperties;
  duration?: number;
  delay?: number;
}

export default function AnimatedCounter({
  value,
  className = '',
  style,
  duration = 1.4,
  delay = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduced = useReducedMotionPref();

  const strValue = String(value);

  // Parse numeric value and affix (e.g. "500+" -> num: 500, suffix: "+")
  const match = strValue.match(/^([^0-9.]*)([0-9.]+)(.*)$/);
  const prefix = match ? match[1] : '';
  const num = match ? parseFloat(match[2]) : NaN;
  const suffix = match ? match[3] : '';
  const isDecimal = match ? match[2].includes('.') : false;
  const decimals = isDecimal && match ? match[2].split('.')[1].length : 0;

  const [displayNum, setDisplayNum] = useState<number>(0);

  useEffect(() => {
    if (isNaN(num) || reduced) {
      setDisplayNum(num);
      return;
    }

    if (!isInView) return;

    let start = 0;
    let timerId: number | undefined;

    const timeoutId = window.setTimeout(() => {
      const startTime = performance.now();
      const totalDuration = duration * 1000;

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, Math.max(0, elapsed / totalDuration));
        // Ease out expo curve: 1 - Math.pow(2, -10 * progress)
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = start + (num - start) * easeOut;

        setDisplayNum(current);

        if (progress < 1) {
          timerId = requestAnimationFrame(step);
        } else {
          setDisplayNum(num);
        }
      };

      timerId = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (timerId) cancelAnimationFrame(timerId);
    };
  }, [isInView, num, duration, delay, reduced]);

  if (isNaN(num) || reduced) {
    return (
      <span ref={ref} className={className} style={style}>
        {strValue}
      </span>
    );
  }

  const formatted = isDecimal ? displayNum.toFixed(decimals) : Math.round(displayNum).toString();

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

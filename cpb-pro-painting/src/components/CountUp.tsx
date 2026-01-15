import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

interface CountUpProps {
  end: number;
  duration?: number;
  delay?: number;
}

export default function CountUp({ end, duration = 2, delay = 0 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!isInView || hasStarted) return;

    const startDelay = setTimeout(() => {
      setHasStarted(true);
      let startTime: number | null = null;
      const startValue = 0;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = (currentTime - startTime) / 1000;
        
        if (elapsed < duration) {
          const progress = elapsed / duration;
          const easeOutQuad = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(easeOutQuad * end));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(startDelay);
  }, [end, duration, delay, isInView, hasStarted]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

import { useEffect, useRef } from "react";

/**
 * Animates a metric counter directly on its DOM text node via IntersectionObserver
 * and requestAnimationFrame without triggering parent React re-renders during scroll.
 */
export function useCounter(
  targetValue: number,
  duration = 1400,
  suffix = ""
): React.RefObject<HTMLSpanElement> {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      el.textContent = `${targetValue}${suffix}`;
      return;
    }

    let rafId = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.unobserve(el);

          let startTimestamp: number | null = null;
          let lastShown = -1;

          const step = (timestamp: number) => {
            if (startTimestamp === null) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const nextValue = Math.round(eased * targetValue);

            if (nextValue !== lastShown) {
              lastShown = nextValue;
              el.textContent = `${nextValue}${suffix}`;
            }

            if (progress < 1) {
              rafId = window.requestAnimationFrame(step);
            }
          };

          rafId = window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [targetValue, duration, suffix]);

  return ref;
}

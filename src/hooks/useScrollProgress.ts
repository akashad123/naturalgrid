import { useEffect, useRef } from "react";

/**
 * Updates the scroll progress bar directly via a DOM ref and caches maxScroll
 * on resize so continuous scrolling causes zero React re-renders or layout thrashing.
 */
export function useScrollProgress(): React.RefObject<HTMLDivElement> {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let maxScroll = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      0
    );

    const updateBar = () => {
      const bar = barRef.current;
      if (bar) {
        const progress =
          maxScroll > 0
            ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1)
            : 0;
        bar.style.transform = `scaleX(${progress})`;
      }
      ticking = false;
    };

    const recalcBounds = () => {
      maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        0
      );
      if (!ticking) {
        window.requestAnimationFrame(updateBar);
        ticking = true;
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateBar);
        ticking = true;
      }
    };

    updateBar();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", recalcBounds, { passive: true });
    window.addEventListener("load", recalcBounds, { once: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", recalcBounds);
      window.removeEventListener("load", recalcBounds);
    };
  }, []);

  return barRef;
}

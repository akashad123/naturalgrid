import { useState, useEffect } from "react";

export function useStickyHeader(threshold = 24): boolean {
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsStuck(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check on load/reload
    setIsStuck(window.scrollY > threshold);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isStuck;
}

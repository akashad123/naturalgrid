import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Initializes global Lenis smooth scrolling cleanly in the browser (SSR-safe),
 * respects reduced-motion settings, pauses during open modal dialogs, and
 * resets scroll position immediately on client-side route transitions.
 */
export const useSmoothScroll = (pathname: string): void => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false,
      autoRaf: true,
      anchors: true,
      stopInertiaOnNavigate: true,
      respectReducedMotion: true,
      prevent: (node) =>
        Boolean(node.closest("dialog[open], [data-lenis-prevent]")) ||
        document.body.style.overflow === "hidden",
    });

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    lenis.scrollTo(0, { immediate: true, force: true });
    lenis.resize();
  }, [pathname]);
};

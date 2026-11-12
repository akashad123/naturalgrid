import { useEffect } from "react";

const REVEAL_SELECTORS = [
  ".section-head",
  ".how-head",
  ".how-carousel",
  ".journey-copy",
  ".stat-card",
  ".project-card",
  ".projects-accordion",
  ".calc-inputs",
  ".calc-highlight",
  ".calc-cta",
  ".features-intro",
  ".features-panel",
  ".features-about",
  ".process-steps > *",
  ".precision-copy",
  ".trusted-label",
  ".trusted-marquee",
  ".connect-info",
  ".contact-form",
  ".map-head",
  ".map-embed",
];

/**
 * Progressive motion and interaction hook:
 * - Adds slow Ken Burns drift to static hero poster imagery
 * - Applies staggered [data-reveal] entrance animations via IntersectionObserver
 *   strictly to below-the-fold sections (preventing hero/footer hydration flash)
 * Honors prefers-reduced-motion automatically.
 */
export const useScrollReveal = (routeKey: string): void => {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      return;
    }

    // Static hero poster slow drift (automatically paused via CSS while video plays)
    document.querySelectorAll<HTMLElement>(".hero-bg img").forEach((img) => {
      img.classList.add("kenburns");
    });

    // IntersectionObserver for scroll reveals
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    const siblingCount = new Map<HTMLElement | null, number>();
    const revealTargets = document.querySelectorAll<HTMLElement>(
      REVEAL_SELECTORS.join(",")
    );

    revealTargets.forEach((el) => {
      if (el.classList.contains("split-title")) return;
      if (el.classList.contains("is-visible")) return;

      const parent = el.parentElement;
      const index = siblingCount.get(parent) ?? 0;
      siblingCount.set(parent, index + 1);
      el.style.setProperty("--reveal-delay", `${Math.min(index * 75, 280)}ms`);
      el.setAttribute("data-reveal", "");
      revealObserver.observe(el);
    });

    // Localized cursor spotlight tracking scoped strictly to hovered accordions
    let rafId = 0;
    let activeAccordion: HTMLElement | null = null;
    let pointerX = 0;
    let pointerY = 0;

    const commitAccordionGlow = () => {
      rafId = 0;
      if (!activeAccordion) return;
      const rect = activeAccordion.getBoundingClientRect();
      activeAccordion.style.setProperty("--mx", `${pointerX - rect.left}px`);
      activeAccordion.style.setProperty("--my", `${pointerY - rect.top}px`);
    };

    const handleAccordionPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>(".feature-acc")
          : null;
      if (!target) {
        activeAccordion = null;
        return;
      }

      activeAccordion = target;
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (!rafId) {
        rafId = window.requestAnimationFrame(commitAccordionGlow);
      }
    };

    document.addEventListener("pointermove", handleAccordionPointerMove, {
      passive: true,
    });

    return () => {
      revealObserver.disconnect();
      document.removeEventListener("pointermove", handleAccordionPointerMove);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [routeKey]);
};

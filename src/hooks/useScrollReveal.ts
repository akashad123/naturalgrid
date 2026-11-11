import { useEffect } from "react";

const REVEAL_SELECTORS = [
  ".hero-content",
  ".hero-featurebar",
  ".page-hero > *",
  ".contact-hero > *",
  ".section-head",
  ".how-head",
  ".how-carousel",
  ".journey-copy",
  ".stat-card",
  ".project-card",
  ".gallery-item",
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
  ".footer-left",
  ".footer-card",
];

const SHEEN_SELECTORS =
  ".stat-card, .calc-highlight, .calc-cta, .feature-acc";

/**
 * Progressive motion and interaction hook mirroring legacy motion.js:
 * - Adds slow Ken Burns drift to hero imagery
 * - Applies staggered [data-reveal] entrance animations via IntersectionObserver
 * - Adds cursor-tracking radial sheen (--mx/--my) on interactive cards on pointer devices
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

    // Hero imagery slow drift
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const siblingCount = new Map<HTMLElement | null, number>();
    const revealTargets = document.querySelectorAll<HTMLElement>(
      REVEAL_SELECTORS.join(",")
    );

    revealTargets.forEach((el) => {
      // Page titles animate word-by-word instead — skip block reveal
      if (el.classList.contains("split-title")) return;
      // Preserve persistent elements (such as footer) once already revealed
      if (el.classList.contains("is-visible")) return;

      const parent = el.parentElement;
      const index = siblingCount.get(parent) ?? 0;
      siblingCount.set(parent, index + 1);
      el.style.setProperty("--reveal-delay", `${Math.min(index * 90, 360)}ms`);
      el.setAttribute("data-reveal", "");
      revealObserver.observe(el);
    });

    // Cursor-following radial sheen on pointer devices (lightweight/static on narrow touch screens)
    const sheenCleanups: Array<() => void> = [];
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (hasFinePointer) {
      document.querySelectorAll<HTMLElement>(SHEEN_SELECTORS).forEach((el) => {
        el.classList.add("has-sheen");
        const handleMouseMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
          el.style.setProperty("--my", `${e.clientY - rect.top}px`);
        };
        el.addEventListener("mousemove", handleMouseMove);
        sheenCleanups.push(() =>
          el.removeEventListener("mousemove", handleMouseMove)
        );
      });
    }

    return () => {
      revealObserver.disconnect();
      sheenCleanups.forEach((cleanup) => cleanup());
    };
  }, [routeKey]);
};

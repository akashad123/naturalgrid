import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Coordinates GSAP ScrollTrigger entrance, backdrop parallax depth,
 * and pointer-device focus choreography exclusively for the Gallery photos section.
 * Simplifies automatically to lightweight fades on mobile viewports and
 * disables motion when prefers-reduced-motion is enabled.
 */
export const useGalleryGsap = (
  sectionRef: RefObject<HTMLElement | null>,
  itemCount: number
): void => {
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".gallery-item", section);
      const topBackdrop = section.querySelector<HTMLElement>(".gallery-bg-svg--top");
      const bottomBackdrop = section.querySelector<HTMLElement>(
        ".gallery-bg-svg--bottom"
      );
      const topSun = section.querySelector<SVGElement>(
        ".gallery-bg-svg--top .gallery-parallax-sun"
      );
      const topClouds = section.querySelector<SVGElement>(
        ".gallery-bg-svg--top .gallery-parallax-clouds"
      );
      const ridges = gsap.utils.toArray<SVGElement>(
        ".gallery-parallax-ridge",
        section
      );
      const arrays = gsap.utils.toArray<SVGElement>(
        ".gallery-parallax-array",
        section
      );

      const mm = gsap.matchMedia();

      // Desktop & tablet: choreographed shutter reveal, backdrop parallax, and ambient clouds
      mm.add(
        "(min-width: 769px) and (prefers-reduced-motion: no-preference)",
        () => {
          const cardCount = Math.max(cards.length, 1);
          const staggerStep = Math.min(0.11, 0.56 / cardCount);

          if (cards.length > 0) {
            gsap.set(cards, {
              opacity: 0,
              y: 32,
              clipPath: "inset(14% 0% 0% 0%)",
            });

            gsap.to(cards, {
              opacity: 1,
              y: 0,
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 0.78,
              ease: "power3.out",
              stagger: {
                each: staggerStep,
                from: "start",
              },
              clearProps: "clipPath,transform,willChange",
              scrollTrigger: {
                trigger: ".gallery-grid",
                start: "top 86%",
                once: true,
              },
            });
          }

          // Subtle horizontal ambient float for upper sky clouds inside the backdrop
          if (topClouds) {
            gsap.to(topClouds, {
              x: 16,
              duration: 7.5,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          }

          // Scroll-scrubbed vertical parallax depth for backdrop sun, contours, and solar structures
          const scrubTargets: Array<{
            el: Element | Element[];
            fromY: number;
            toY: number;
          }> = [];

          if (topSun) scrubTargets.push({ el: topSun, fromY: -10, toY: 16 });
          if (ridges.length > 0) {
            scrubTargets.push({ el: ridges, fromY: -12, toY: 14 });
          }
          if (arrays.length > 0) {
            scrubTargets.push({ el: arrays, fromY: 18, toY: -10 });
          }

          scrubTargets.forEach(({ el, fromY, toY }) => {
            gsap.fromTo(
              el,
              { y: fromY },
              {
                y: toY,
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.85,
                },
              }
            );
          });

          if (topBackdrop || bottomBackdrop) {
            gsap.fromTo(
              [topBackdrop, bottomBackdrop].filter(Boolean),
              { opacity: 0.78 },
              {
                opacity: 1,
                duration: 0.9,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top 90%",
                  once: true,
                },
              }
            );
          }

          // Non-scaling fine-pointer spotlight focus across gallery cards (zero scale/translate)
          const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
          const cleanups: Array<() => void> = [];

          if (hasFinePointer && cards.length > 1) {
            cards.forEach((card) => {
              const handleEnter = () => {
                gsap.to(cards, {
                  opacity: (_idx, target) => (target === card ? 1 : 0.74),
                  duration: 0.26,
                  ease: "power2.out",
                  overwrite: "auto",
                });
              };
              const handleLeave = () => {
                gsap.to(cards, {
                  opacity: 1,
                  duration: 0.28,
                  ease: "power2.out",
                  overwrite: "auto",
                });
              };

              card.addEventListener("mouseenter", handleEnter);
              card.addEventListener("mouseleave", handleLeave);
              card.addEventListener("focusin", handleEnter);
              card.addEventListener("focusout", handleLeave);

              cleanups.push(() => {
                card.removeEventListener("mouseenter", handleEnter);
                card.removeEventListener("mouseleave", handleLeave);
                card.removeEventListener("focusin", handleEnter);
                card.removeEventListener("focusout", handleLeave);
              });
            });
          }

          return () => {
            cleanups.forEach((fn) => fn());
          };
        }
      );

      // Mobile viewports: lightweight single-pass entrance with static backdrop illustrations
      mm.add(
        "(max-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          if (cards.length > 0) {
            gsap.fromTo(
              cards,
              { opacity: 0, y: 14 },
              {
                opacity: 1,
                y: 0,
                duration: 0.45,
                ease: "power2.out",
                stagger: Math.min(0.06, 0.3 / Math.max(cards.length, 1)),
                clearProps: "transform",
                scrollTrigger: {
                  trigger: ".gallery-grid",
                  start: "top 90%",
                  once: true,
                },
              }
            );
          }
        }
      );

      // Reduced motion fallback: immediate visibility without motion
      mm.add("(prefers-reduced-motion: reduce)", () => {
        if (cards.length > 0) {
          gsap.set(cards, { opacity: 1, clearProps: "all" });
        }
      });
    }, section);

    // Refresh ScrollTrigger once lazy-loaded masonry thumbnails settle in layout
    const imgs = Array.from(
      section.querySelectorAll<HTMLImageElement>(".gallery-item img")
    );
    let refreshTimer: number | undefined;
    const scheduleRefresh = () => {
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 60);
    };

    const imgCleanups = imgs.map((img) => {
      if (img.complete) return () => undefined;
      img.addEventListener("load", scheduleRefresh, { once: true });
      return () => img.removeEventListener("load", scheduleRefresh);
    });

    return () => {
      window.clearTimeout(refreshTimer);
      imgCleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, [sectionRef, itemCount]);
};

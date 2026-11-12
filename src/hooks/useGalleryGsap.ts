import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Coordinates GSAP ScrollTrigger entrance, scrubbed internal photo parallax,
 * alternating column scroll depth, backdrop parallax, and single-card hover
 * accent choreography exclusively for the Gallery photos section.
 * Simplifies automatically on mobile viewports and honors prefers-reduced-motion.
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

      // Desktop & tablet: crisp ScrollTrigger curtain reveals + live scrubbed photo parallax
      mm.add(
        "(min-width: 769px) and (prefers-reduced-motion: no-preference)",
        () => {
          cards.forEach((card, idx) => {
            const img = card.querySelector<HTMLImageElement>("img");
            const bar = card.querySelector<HTMLElement>(".gallery-item-bar");
            const zoom = card.querySelector<HTMLElement>(".gallery-zoom");
            const colIndex = idx % 3;

            // Per-card optical curtain reveal triggered cleanly as each card enters view
            gsap.fromTo(
              card,
              {
                opacity: 0,
                clipPath: "inset(22% 0% 0% 0%)",
              },
              {
                opacity: 1,
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 0.85,
                delay: colIndex * 0.09,
                ease: "power3.out",
                clearProps: "clipPath",
                scrollTrigger: {
                  trigger: card,
                  start: "top 92%",
                  once: true,
                },
              }
            );

            // Scrubbed alternating column depth synced 1:1 with Lenis scroll (no double-lerp lag)
            gsap.fromTo(
              card,
              { y: colIndex === 1 ? 22 : -14 },
              {
                y: colIndex === 1 ? -22 : 14,
                ease: "none",
                scrollTrigger: {
                  trigger: ".gallery-grid",
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              }
            );

            // Scrubbed internal photo window parallax (image glides cleanly inside overflow:hidden frame)
            if (img) {
              gsap.fromTo(
                img,
                { yPercent: -6 },
                {
                  yPercent: 6,
                  ease: "none",
                  scrollTrigger: {
                    trigger: card,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                  },
                }
              );
            }

            if (bar) {
              gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
            }
            if (zoom) {
              gsap.set(zoom, { opacity: 0 });
            }
          });

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

          // Scrubbed vertical parallax depth for backdrop sun, contours, and solar structures
          const scrubTargets: Array<{
            el: Element | Element[];
            fromY: number;
            toY: number;
          }> = [];

          if (topSun) scrubTargets.push({ el: topSun, fromY: -12, toY: 18 });
          if (ridges.length > 0) {
            scrubTargets.push({ el: ridges, fromY: -14, toY: 16 });
          }
          if (arrays.length > 0) {
            scrubTargets.push({ el: arrays, fromY: 20, toY: -12 });
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
                  scrub: true,
                },
              }
            );
          });

          // Single-card GPU hover accent (top hairline sweep + zoom pill fade; zero sibling repaint or card scale/translate)
          const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
          const cleanups: Array<() => void> = [];

          if (hasFinePointer) {
            cards.forEach((card) => {
              const bar = card.querySelector<HTMLElement>(".gallery-item-bar");
              const zoom = card.querySelector<HTMLElement>(".gallery-zoom");

              const handleEnter = () => {
                if (bar) {
                  gsap.to(bar, {
                    scaleX: 1,
                    duration: 0.28,
                    ease: "power2.out",
                    overwrite: "auto",
                  });
                }
                if (zoom) {
                  gsap.to(zoom, {
                    opacity: 1,
                    duration: 0.2,
                    ease: "power2.out",
                    overwrite: "auto",
                  });
                }
              };

              const handleLeave = () => {
                if (bar) {
                  gsap.to(bar, {
                    scaleX: 0,
                    duration: 0.22,
                    ease: "power2.out",
                    overwrite: "auto",
                  });
                }
                if (zoom) {
                  gsap.to(zoom, {
                    opacity: 0,
                    duration: 0.18,
                    ease: "power2.out",
                    overwrite: "auto",
                  });
                }
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

      // Mobile viewports: lightweight single-pass fade entrance with static backdrop & zero scrub overhead
      mm.add(
        "(max-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          cards.forEach((card, idx) => {
            gsap.fromTo(
              card,
              { opacity: 0, y: 14 },
              {
                opacity: 1,
                y: 0,
                duration: 0.42,
                delay: Math.min(idx * 0.05, 0.2),
                ease: "power2.out",
                clearProps: "transform",
                scrollTrigger: {
                  trigger: card,
                  start: "top 92%",
                  once: true,
                },
              }
            );
          });
        }
      );

      // Reduced motion fallback: immediate full visibility without motion
      mm.add("(prefers-reduced-motion: reduce)", () => {
        if (cards.length > 0) {
          gsap.set(cards, { opacity: 1, clearProps: "all" });
        }
      });
    }, section);

    // Refresh ScrollTrigger once all gallery thumbnails decode cleanly
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

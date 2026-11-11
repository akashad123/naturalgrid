import React, { useState, useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const HeroVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Check reduced motion or save-data
    if (prefersReducedMotion) return;

    // Check navigator connection
    const nav = navigator as unknown as {
      connection?: { saveData?: boolean; effectiveType?: string };
    };
    if (
      nav.connection &&
      (nav.connection.saveData || /(^|-)2g$/.test(nav.connection.effectiveType || ""))
    ) {
      return;
    }

    const checkViewport = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkViewport();
    setShouldLoadVideo(true);

    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoadVideo) return;

    video.muted = true;

    const onPlaying = () => {
      setIsPlaying(true);
    };

    video.addEventListener("playing", onPlaying);

    // Pause hero video decode when scrolled offscreen to keep lower-page scrolling smooth
    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const resume = video.play();
            if (resume && typeof resume.catch === "function") {
              resume.catch(() => {});
            }
          } else {
            video.pause();
          }
        },
        { rootMargin: "160px 0px" }
      );
      observer.observe(video);
    } else {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          // Autoplay policy prevented playback, keep poster visible
        });
      }
    }

    return () => {
      observer?.disconnect();
      video.removeEventListener("playing", onPlaying);
    };
  }, [shouldLoadVideo, isMobile]);

  return (
    <div className={`hero-bg ${isPlaying ? "is-playing" : ""}`} aria-hidden="true">
      {/* Poster layer */}
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/images/hero/hero-mobile.webp"
          width="1080"
          height="1440"
        />
        <img
          src="/images/hero/hero-desktop.webp"
          alt=""
          width="1536"
          height="1024"
          {...({ fetchpriority: "high" } as Record<string, string>)}
          decoding="async"
        />
      </picture>

      {/* Background Video */}
      {shouldLoadVideo && (
        <video
          ref={videoRef}
          className="hero-bg-video"
          autoPlay
          muted
          loop
          playsInline
        >
          {isMobile ? (
            <source src="/images/hero/hero-mobile.webm" type="video/webm" />
          ) : (
            <source src="/images/hero/hero-desktop.webm" type="video/webm" />
          )}
        </video>
      )}
    </div>
  );
};

import React from "react";

interface PageHeroProps {
  badgeText?: string;
  title: string;
  description?: string;
  className?: string;
  background?: React.ReactNode;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badgeText = "",
  title,
  description,
  className = "",
  background,
  children,
}) => {
  // Support multi-line titles via \n while preserving word-by-word animation
  const lines = title.split("\n");
  let wordCounter = 0;

  return (
    <section className={`page-hero ${className}`}>
      {background}
      {badgeText && (
        <div className="hero-badge">
          <svg
            className="sun-spin"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="12" y1="1" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="23" />
              <line x1="4.2" y1="4.2" x2="6.3" y2="6.3" />
              <line x1="17.7" y1="17.7" x2="19.8" y2="19.8" />
              <line x1="1" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="23" y2="12" />
              <line x1="4.2" y1="19.8" x2="6.3" y2="17.7" />
              <line x1="17.7" y1="6.3" x2="19.8" y2="4.2" />
            </g>
          </svg>
          <span>{badgeText}</span>
        </div>
      )}

      <h1 className="page-title split-title">
        {lines.map((line, lineIdx) => {
          const words = line.split(" ");
          return (
            <React.Fragment key={lineIdx}>
              {words.map((word, wordIdx) => {
                const currentIdx = wordCounter++;
                return (
                  <React.Fragment key={wordIdx}>
                    <span
                      className="title-word"
                      style={{
                        animationDelay: `${Math.min(currentIdx * 90, 720)}ms`,
                      }}
                    >
                      {word}
                    </span>
                    {wordIdx < words.length - 1 ? " " : ""}
                  </React.Fragment>
                );
              })}
              {lineIdx < lines.length - 1 ? <br className="hero-title-br" /> : null}
            </React.Fragment>
          );
        })}
      </h1>

      {description && <p className="page-hero-text">{description}</p>}
      {children}
    </section>
  );
};

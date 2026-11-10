import React from "react";

interface PageHeroProps {
  badgeText?: string;
  title: string;
  description?: string;
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badgeText = "Future with Renewable",
  title,
  description,
  className = "",
}) => {
  // Split title words to apply the word-by-word rise animation
  const words = title.split(" ");

  return (
    <section className={`page-hero ${className}`}>
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
        {words.map((word, idx) => (
          <React.Fragment key={idx}>
            <span
              className="title-word"
              style={{
                animationDelay: `${Math.min(idx * 90, 720)}ms`,
              }}
            >
              {word}
            </span>
            {idx < words.length - 1 ? " " : ""}
          </React.Fragment>
        ))}
      </h1>

      {description && <p className="page-hero-text">{description}</p>}
    </section>
  );
};

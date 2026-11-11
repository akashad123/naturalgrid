import React, { useRef, useState } from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation & Survey",
    description:
      "We study your KSEB bill, inspect your roof and understand your daily power needs — then recommend the right system size with honest, verified advice.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design & Quote",
    description:
      "You receive a tailored on-grid, off-grid or hybrid design and a clear Natural Grid quotation, with guidance on net metering and any applicable subsidy.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Installation & Approvals",
    description:
      "Our team installs using approved, ISI-compliant materials and handles the KSEB net-metering, inspection and commissioning — so your system goes live safely.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Service & AMC",
    description:
      "Once live, we stay with you — panel cleaning, preventive maintenance and fast local support through district teams across all 14 districts of Kerala.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 11.5 11 13.5 15 9.5" />
      </svg>
    ),
  },
];

/**
 * Full-bleed "How It Works" section with a 4-card overlapping deck:
 * Step 01 starts full width, and each subsequent step glides cleanly over
 * previous cards from the right, leaving only the preceding logo rails exposed
 * on the left (3 logo rails + 3/4 Service & AMC panel at Step 04).
 */
export const HowItWorksCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const totalSteps = HOW_IT_WORKS_STEPS.length;
  const maxIndex = totalSteps - 1;

  const goPrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const goNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handleSectionKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = touchStartX.current - endX;
    touchStartX.current = null;

    if (deltaX > 40) goNext();
    else if (deltaX < -40) goPrev();
  };

  return (
    <section
      className="how"
      id="process"
      aria-label="How Solar Works"
      onKeyDown={handleSectionKeyDown}
    >
      <div className="how-inner">
        <div className="how-topbar">
          <div className="how-head">
            <p className="eyebrow section-label">How It Works</p>
            <h2 className="section-title section-title--sub">
              Going Solar in Four Simple Steps
            </h2>
            <p className="section-text">
              From your first call to lifelong care, here&apos;s exactly what
              happens when you go solar with Natural Grid — clear and
              jargon-free at every step.
            </p>
          </div>

          <div className="how-controls" aria-label="Process steps navigation">
            <div
              className="how-step-dots"
              role="tablist"
              aria-label="Select process step"
            >
              {HOW_IT_WORKS_STEPS.map((step, idx) => (
                <button
                  key={step.number}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIndex}
                  aria-label={`Step ${step.number}: ${step.title}`}
                  className={`how-step-dot ${
                    idx === activeIndex ? "is-active" : ""
                  }`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <span className="how-step-dot-bar" />
                </button>
              ))}
            </div>

            <span className="how-counter" aria-live="polite">
              {HOW_IT_WORKS_STEPS[activeIndex].number} / 0{totalSteps}
            </span>

            <div className="how-arrows">
              <button
                type="button"
                className="how-arrow-btn how-arrow-btn--prev"
                aria-label="Previous step"
                disabled={activeIndex === 0}
                onClick={goPrev}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button
                type="button"
                className="how-arrow-btn how-arrow-btn--next"
                aria-label="Next step"
                disabled={activeIndex === maxIndex}
                onClick={goNext}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className="how-carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="how-track">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const isActive = idx === activeIndex;
              const isCovered = idx < activeIndex;
              const isUpcoming = idx > activeIndex;

              const stateClass = isActive
                ? "is-active"
                : isCovered
                  ? "is-covered"
                  : "is-upcoming";

              return (
                <article
                  key={step.number}
                  className={`how-card ${stateClass}`}
                  aria-hidden={isUpcoming}
                  style={
                    {
                      "--card-index": idx,
                      zIndex: idx + 1,
                    } as React.CSSProperties
                  }
                  onClick={isCovered ? () => setActiveIndex(idx) : undefined}
                >
                  <div className="how-card-rail">
                    {isCovered ? (
                      <button
                        type="button"
                        className="how-card-rail-trigger"
                        aria-label={`Return to Step ${step.number}: ${step.title}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveIndex(idx);
                        }}
                      >
                        <span className="how-card-icon">{step.icon}</span>
                        <span className="how-card-rail-num">{step.number}</span>
                      </button>
                    ) : (
                      <div className="how-card-rail-static">
                        <span className="how-card-icon">{step.icon}</span>
                        <span className="how-card-rail-num">{step.number}</span>
                      </div>
                    )}
                  </div>

                  <div className="how-card-body">
                    <span className="how-card-num">Step {step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

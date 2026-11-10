import React, { useState } from "react";
import { Link } from "react-router-dom";

interface EnergySlide {
  badge: string;
  title: string;
  intro: string;
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  bgImage: {
    src: string;
    srcSet: string;
    width: number;
    height: number;
  };
}

const SLIDES: EnergySlide[] = [
  {
    badge: "Care after installation",
    title: "Your solar plant deserves regular care",
    intro:
      "Most solar problems don't appear on day one. Dust build-up, wiring wear, inverter faults and monsoon-related issues gradually reduce generation — often without the owner noticing.",
    features: [
      {
        title: "Scheduled Inspection",
        description:
          "Periodic technical inspections protect generation and catch small issues before they become expensive ones.",
        icon: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="8 12.5 11 15.5 16 9.5" />
          </svg>
        ),
      },
      {
        title: "Breakdown Assistance",
        description:
          "Rapid response for unexpected system faults, including troubleshooting, on-site inspection, repair coordination, spare parts replacement, and warranty support with manufacturers (where applicable) to restore your system quickly.",
        icon: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 7 12 12 15.5 14" />
          </svg>
        ),
      },
    ],
    bgImage: {
      src: "/images/ground-mounted-array-800.webp",
      srcSet:
        "/images/ground-mounted-array-800.webp 800w, /images/ground-mounted-array-1600.webp 1600w",
      width: 800,
      height: 1200,
    },
  },
  {
    badge: "Any installer, Any system, Complete peace of mind",
    title: "We service solar plants regardless of who installed them",
    intro:
      "Many of our AMC customers came to us after their original installer stopped responding. If your system needs attention, we're here.",
    features: [
      {
        title: "Low-Generation Diagnosis",
        description:
          "Identify and resolve the causes of low solar power generation through performance analysis, system monitoring, and on-site inspection to ensure your system operates at optimal efficiency.",
        icon: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="6" y1="20" x2="6" y2="14" />
            <line x1="12" y1="20" x2="12" y2="8" />
            <line x1="18" y1="20" x2="18" y2="4" />
          </svg>
        ),
      },
      {
        title: "Inverter & Protection Support",
        description:
          "Inverter fault diagnosis and troubleshooting, wiring inspections, earthing system verification, surge and lightning protection inspection, and support for system upgrades to ensure safe and reliable operation.",
        icon: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.7 21a2 2 0 0 1-3.4 0" />
          </svg>
        ),
      },
    ],
    bgImage: {
      src: "/images/rooftop-solar-800.webp",
      srcSet:
        "/images/rooftop-solar-800.webp 800w, /images/rooftop-solar-1600.webp 1600w",
      width: 800,
      height: 1200,
    },
  },
  {
    badge: "Honest, verified guidance",
    title: "Clear guidance on subsidy and net metering",
    intro:
      "Eligible residential customers may receive a central-government subsidy under the applicable MNRE scheme and we never guarantee amounts or approval.",
    features: [
      {
        title: "Complete Documentation Support",
        description:
          "We assist with eligibility checks, applications and the full paperwork involved in going solar.",
        icon: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
            <polyline points="17 18 23 18 23 12" />
          </svg>
        ),
      },
      {
        title: "KSEB Net-Metering Coordination",
        description:
          "Export surplus electricity to the grid and import when needed — we handle the coordination and paperwork with KSEB on your behalf.",
        icon: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z" />
          </svg>
        ),
      },
    ],
    bgImage: {
      src: "/images/solar-panel-closeup-800.webp",
      srcSet:
        "/images/solar-panel-closeup-800.webp 800w, /images/solar-panel-closeup-1600.webp 1600w",
      width: 800,
      height: 534,
    },
  },
];

export const EnergySlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section className="energy">
      {/* Cross-fading background photos */}
      <div className="energy-bg" aria-hidden="true">
        {SLIDES.map((slide, idx) => (
          <img
            key={idx}
            className={idx === activeIndex ? "is-active" : ""}
            src={slide.bgImage.src}
            srcSet={slide.bgImage.srcSet}
            sizes="100vw"
            width={slide.bgImage.width}
            height={slide.bgImage.height}
            alt=""
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>

      <div className="energy-slider">
        {SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`energy-card ${idx === activeIndex ? "is-active" : ""}`}
          >
            <div className="hero-badge">
              <span>{slide.badge}</span>
            </div>

            <h2>{slide.title}</h2>
            <p className="energy-intro">{slide.intro}</p>

            {slide.features.map((feat, fIdx) => (
              <div key={fIdx} className="energy-feature">
                <div className="energy-feature-head">
                  {feat.icon}
                  <h3>{feat.title}</h3>
                </div>
                <p>{feat.description}</p>
              </div>
            ))}

            <Link to="/contact" className="contact-btn">
              <span>Contact Now</span>
              <span className="btn-arrow">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          </div>
        ))}
      </div>

      <div className="energy-nav">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={prevSlide}
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
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={nextSlide}
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
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </section>
  );
};

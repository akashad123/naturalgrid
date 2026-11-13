import React from "react";
import { Link } from "react-router-dom";
import { StaggerRollText } from "@/components/common/StaggerRollText";

/**
 * Editorial Landing Hero inspired by the Metana modern clean-tech design:
 * Features high-res green wind turbine visual, large typography, verified trust badge,
 * dual action CTAs, and floating glass Vision & Mission cards.
 */
export const HomeHero: React.FC = () => {
  return (
    <section className="home-hero" aria-label="Welcome to Natural Grid">
      {/* Background Image Container */}
      <div className="home-hero-bg" aria-hidden="true">
        <img
          src="/images/hero/hero-wind-green.jpg"
          alt=""
          className="home-hero-img"
          loading="eager"
        />
        <div className="home-hero-overlay" />
      </div>

      {/* Vertical Side Tag (matching reference layout) */}
      <div className="home-hero-vert-tag" aria-hidden="true">
        <span>KERALA • 14 DISTRICTS • SERVICE FIRST</span>
      </div>

      <div className="home-hero-container">
        {/* Top: Large Editorial Title */}
        <div className="home-hero-top">
          <p className="home-hero-eyebrow">
            <span className="home-hero-eyebrow-dot" />
            Solar Technology &amp; Services
          </p>
          <h1 className="home-hero-title">
            <span className="home-hero-title-line">Kerala’s Trusted Solar Company,</span>
            <span className="home-hero-title-line home-hero-title-accent">
              Built on Service First.
            </span>
          </h1>
        </div>

        {/* Bottom Grid: Left (Badge, Copy, CTAs) + Right (Vision & Mission Glass Cards) */}
        <div className="home-hero-bottom">
          <div className="home-hero-intro">
            <div className="home-hero-trust-badge">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>14 Districts Across Kerala • Service-First Solar</span>
            </div>

            <p className="home-hero-desc">
              Expert solar installation for homes and businesses across Kerala.
              Save on your KSEB bills and switch to clean, renewable energy —
              with service that stays with you long after commissioning.
            </p>

            <div className="home-hero-actions">
              <Link
                to="/contact"
                className="home-hero-btn home-hero-btn--solid"
                aria-label="Get a Free Quote"
              >
                <StaggerRollText text="Get a Free Quote" />
                <svg
                  width="15"
                  height="15"
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
              </Link>
              <a
                href="#about"
                className="home-hero-btn home-hero-btn--ghost"
                aria-label="Our Services"
              >
                <StaggerRollText text="Our Services" />
              </a>
            </div>
          </div>

          {/* Right: Floating Glass Cards (Vision & Mission) */}
          <div className="home-hero-cards">
            <Link
              to="/about"
              className="home-hero-card"
              aria-label="Natural Grid Vision"
            >
              <div className="home-hero-card-head">
                <span className="home-hero-card-tag">Natural Grid Vision</span>
                <span className="home-hero-card-meta">
                  Lifetime Care
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>
              <p className="home-hero-card-body">
                Energy that powers life without leaving a trace — backed by
                structured AMC and lifetime support.
              </p>
            </Link>

            <Link
              to="/about"
              className="home-hero-card"
              aria-label="Natural Grid Mission"
            >
              <div className="home-hero-card-head">
                <span className="home-hero-card-tag">Natural Grid Mission</span>
                <span className="home-hero-card-meta">
                  14 Districts
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>
              <p className="home-hero-card-body">
                Dependable rooftop solar with honest assessments, approved ISI
                materials, and dedicated local dispatch.
              </p>
            </Link>
          </div>
        </div>

        {/* Bottom Center Scroll Indicator */}
        <a
          href="#about"
          className="home-hero-scroll"
          aria-label="Scroll down to Who We Are"
        >
          <span className="home-hero-scroll-badge" aria-hidden="true">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};
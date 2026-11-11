import React from "react";
import { Link } from "react-router-dom";
import { SeoHead } from "@/components/common/SeoHead";

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Page Not Found"
        description="The page you are looking for does not exist."
        noindex
      />

      <section className="page-hero">
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
          <span>Error 404</span>
        </div>

        <h1 className="page-title">Page Not Found</h1>

        <p className="page-hero-text">
          Sorry, the page you're looking for doesn't exist or has moved. Let's
          get you back on track — head to our homepage or reach out to our team.
        </p>

        <div style={{ marginTop: "24px" }}>
          <Link to="/" className="contact-btn page-hero-cta">
            <span>Back to Home</span>
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
      </section>
    </>
  );
};

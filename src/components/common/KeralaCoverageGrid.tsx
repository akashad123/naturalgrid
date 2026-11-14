import React, { useState } from "react";
import { Link } from "react-router-dom";
import { KERALA_DISTRICTS } from "@/data/districts";

interface KeralaCoverageGridProps {
  /** If true, renders interactive filter tabs for North, Central, and South Kerala */
  showTabs?: boolean;
  /** If true, renders a more compact version suitable for embedding within service pages */
  compact?: boolean;
  /** Optional custom title override */
  title?: string;
  /** Optional custom subtitle override */
  subtitle?: string;
}

type RegionFilter = "All" | "North Kerala" | "Central Kerala" | "South Kerala";

const REGIONS: RegionFilter[] = [
  "All",
  "North Kerala",
  "Central Kerala",
  "South Kerala",
];

/**
 * Reusable, responsive grid showcasing Natural Grid's solar installation
 * coverage across all 14 Kerala districts, grouped by region.
 * Conforms strictly to 0px border-radius and brand color theme.
 */
export const KeralaCoverageGrid: React.FC<KeralaCoverageGridProps> = ({
  showTabs = true,
  compact = false,
  title = "Kerala Solar Service Coverage",
  subtitle = "With headquarters in Sulthan Bathery, Wayanad and dedicated regional service engineers, Natural Grid provides solar installation, KSEB net metering, and rapid AMC maintenance across all 14 districts.",
}) => {
  const [activeRegion, setActiveRegion] = useState<RegionFilter>("All");

  const filteredDistricts =
    activeRegion === "All"
      ? KERALA_DISTRICTS
      : KERALA_DISTRICTS.filter((d) => d.region === activeRegion);

  return (
    <section
      className={`coverage-grid-section ${compact ? "coverage-grid-section--compact" : ""}`}
      aria-label="Kerala 14 Districts Solar Coverage"
    >
      <div className="coverage-grid-header">
        <div className="coverage-grid-badge">
          <span className="coverage-badge-dot" />
          <span>All 14 Kerala Districts • Rapid On-Site Service</span>
        </div>
        <h2 className="coverage-grid-title">{title}</h2>
        <p className="coverage-grid-subtitle">{subtitle}</p>

        {showTabs && (
          <div
            className="coverage-region-tabs"
            role="tablist"
            aria-label="Filter districts by region"
          >
            {REGIONS.map((region) => (
              <button
                key={region}
                type="button"
                role="tab"
                aria-selected={activeRegion === region}
                className={`coverage-tab-btn ${
                  activeRegion === region ? "is-active" : ""
                }`}
                onClick={() => setActiveRegion(region)}
              >
                {region === "All" ? "All Districts (14)" : region}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="coverage-cards-grid">
        {filteredDistricts.map((district) => (
          <Link
            key={district.slug}
            to={`/solar-installation/${district.slug}`}
            className="coverage-district-card"
          >
            <div className="coverage-card-top">
              <span className="coverage-card-region">{district.region}</span>
              <span className="coverage-card-malayalam">
                {district.malayalamName}
              </span>
            </div>

            <h3 className="coverage-card-name">{district.name}</h3>

            <p className="coverage-card-circles">
              <strong className="coverage-label">KSEB Circles: </strong>
              <span>
                {district.ksebCircles
                  .map((c) => c.replace(" Electrical Circle", ""))
                  .join(", ")}
              </span>
            </p>

            <div className="coverage-card-metrics">
              <div className="coverage-metric-item">
                <span className="metric-caption">Daily Sun</span>
                <strong className="metric-val">
                  {district.solarProfile.avgSunHours.split(" ")[0]} hrs
                </strong>
              </div>
              <div className="coverage-metric-item">
                <span className="metric-caption">Yield / kW</span>
                <strong className="metric-val">
                  {district.solarProfile.annualGenerationPerKw.split(" ")[0]} u/yr
                </strong>
              </div>
            </div>

            <div className="coverage-card-footer">
              <span className="coverage-cta-text">
                Explore Solar in {district.name}
              </span>
              <svg
                className="coverage-cta-arrow"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  calculateSolar,
  BILLING_DAYS,
  PropertyType,
} from "@/utils/calculator";
import { formatINR, formatKw } from "@/utils/formatters";
import { useSheen } from "@/hooks/useSheen";

interface SolarCalculatorProps {
  embedded?: boolean;
}

export const SolarCalculator: React.FC<SolarCalculatorProps> = ({
  embedded = false,
}) => {
  const [units, setUnits] = useState<number>(300);
  const [propertyType, setPropertyType] = useState<PropertyType>("residential");
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);
  const [isStale, setIsStale] = useState<boolean>(false);
  const [results, setResults] = useState<{
    size: number;
    annual: number;
  }>({ size: 0, annual: 0 });

  const resultsRef = useRef<HTMLDivElement>(null);
  const { onMouseMove } = useSheen();

  const days = BILLING_DAYS[propertyType];

  const handleUnitsChange = (newVal: number) => {
    setUnits(Math.max(0, newVal));
    if (hasCalculated) {
      setIsStale(true);
    }
  };

  const handlePropertyTypeChange = (type: PropertyType) => {
    setPropertyType(type);
    if (hasCalculated) {
      setIsStale(true);
    }
  };

  const runCalculation = () => {
    const r = calculateSolar(units, propertyType);
    setResults({
      size: r.solarSizeKw,
      annual: r.annualSavings,
    });
    setHasCalculated(true);
    setIsStale(false);

    // Scroll into view on mobile
    if (window.innerWidth <= 1024 && resultsRef.current) {
      resultsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      runCalculation();
    }
  };

  return (
    <div className={`calc-page ${embedded ? "calc-page--embedded" : ""}`}>
      {/* Inputs */}
      <div className="calc-inputs">
        <h2>Your Details</h2>

        <div className="calc-field">
          <label htmlFor="calc-units">Average Units on Your Bill</label>
          <div className="calc-input-wrap">
            <input
              type="number"
              id="calc-units"
              min="0"
              step="10"
              value={units || ""}
              onChange={(e) => handleUnitsChange(Number(e.target.value) || 0)}
              onKeyDown={handleKeyDown}
              inputMode="numeric"
              aria-describedby="calc-units-hint"
            />
            <span className="calc-affix" aria-hidden="true">
              units
            </span>
          </div>

          <input
            type="range"
            id="calc-units-range"
            className="calc-range"
            min="50"
            max="3000"
            step="10"
            value={Math.min(Math.max(units, 50), 3000)}
            onChange={(e) => handleUnitsChange(Number(e.target.value))}
            aria-label="Average units slider"
          />

          <div className="calc-range-labels">
            <span>50 units</span>
            <span>3,000 units</span>
          </div>

          <p id="calc-units-hint" className="calc-field-hint" data-units-hint>
            Take the units figure straight off your latest KSEB bill — we read
            it as {days} days of consumption.
          </p>
        </div>

        <div className="calc-field">
          <span className="calc-field-label" id="calc-type-label">
            Property Type
          </span>
          <div
            className="filter-group calc-type-group"
            role="group"
            aria-labelledby="calc-type-label"
          >
            <button
              type="button"
              className={`filter-btn ${
                propertyType === "residential" ? "active" : ""
              }`}
              aria-pressed={propertyType === "residential"}
              onClick={() => handlePropertyTypeChange("residential")}
            >
              Residential
            </button>
            <button
              type="button"
              className={`filter-btn ${
                propertyType === "commercial" ? "active" : ""
              }`}
              aria-pressed={propertyType === "commercial"}
              onClick={() => handlePropertyTypeChange("commercial")}
            >
              Commercial
            </button>
          </div>
        </div>

        <button
          type="button"
          id="calc-run"
          className="calc-run"
          onClick={runCalculation}
        >
          Calculate My Savings
        </button>

        <p className="calc-note">
          Estimates are indicative, based on standard assumptions (3.5 units
          generated per kW per day and a ₹8 per unit tariff). Actual system
          size, cost and savings depend on your site survey, tariff and final
          design — contact us for an accurate quotation.
        </p>
      </div>

      {/* Results */}
      <div
        ref={resultsRef}
        className={`calc-results ${!hasCalculated ? "is-idle" : ""} ${
          isStale ? "is-stale" : ""
        } ${hasCalculated ? "results-in" : ""}`}
        aria-live="polite"
      >
        {!hasCalculated ? (
          <p className="calc-hint">
            Enter the average units from your bill, choose your property type
            and tap <strong>Calculate My Savings</strong> to see your results.
          </p>
        ) : (
          <>
            <div
              className="calc-highlight has-sheen has-sheen--white"
              onMouseMove={onMouseMove}
            >
              <div className="calc-stat">
                <span className="calc-value value-pop">
                  <span data-result="size">{formatKw(results.size)}</span>{" "}
                  <span className="calc-unit">kW</span>
                </span>
                <span className="calc-label">Recommended Solar System Size</span>
              </div>
              <div className="calc-stat">
                <span className="calc-value value-pop" data-result="annual">
                  {formatINR(results.annual)}
                </span>
                <span className="calc-label">Estimated Yearly Savings</span>
              </div>
            </div>

            <div
              className="calc-cta has-sheen has-sheen--white"
              onMouseMove={onMouseMove}
            >
              <div>
                <h3>Want the full breakdown for your property?</h3>
                <p>
                  For your exact system cost, subsidy, payback period and a
                  detailed savings estimate, contact us — we'll arrange a free
                  consultation and an accurate quotation based on your site, roof
                  and tariff.
                </p>
              </div>
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
          </>
        )}
      </div>
    </div>
  );
};

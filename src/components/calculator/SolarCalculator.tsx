import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  calculateSolar,
  BILLING_DAYS,
  UNITS_PER_KW_PER_DAY,
  PropertyType,
} from "@/utils/calculator";
import { formatINR, formatKw } from "@/utils/formatters";

interface SolarCalculatorProps {
  embedded?: boolean;
}

interface ConsumptionPreset {
  label: string;
  units: number;
  propertyType: PropertyType;
}

const PRESETS: ConsumptionPreset[] = [
  { label: "150 u · Small Home", units: 150, propertyType: "residential" },
  { label: "300 u · Family Home", units: 300, propertyType: "residential" },
  { label: "600 u · Large Villa", units: 600, propertyType: "residential" },
  { label: "1200 u · Commercial", units: 1200, propertyType: "commercial" },
];

const INITIAL_CALCULATION = calculateSolar(300, "residential");

export const SolarCalculator: React.FC<SolarCalculatorProps> = ({
  embedded = false,
}) => {
  const [units, setUnits] = useState<number>(300);
  const [propertyType, setPropertyType] = useState<PropertyType>("residential");
  const [hasCalculated, setHasCalculated] = useState<boolean>(true);
  const [isStale, setIsStale] = useState<boolean>(false);
  const [results, setResults] = useState<{
    size: number;
    annual: number;
  }>({
    size: INITIAL_CALCULATION.solarSizeKw,
    annual: INITIAL_CALCULATION.annualSavings,
  });

  const resultsRef = useRef<HTMLDivElement>(null);

  const days = BILLING_DAYS[propertyType];

  const handleUnitsChange = (newVal: number) => {
    const cleanVal = Math.max(0, newVal);
    setUnits(cleanVal);
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

  const applyPreset = (preset: ConsumptionPreset) => {
    const r = calculateSolar(preset.units, preset.propertyType);
    setUnits(preset.units);
    setPropertyType(preset.propertyType);
    setResults({
      size: r.solarSizeKw,
      annual: r.annualSavings,
    });
    setHasCalculated(true);
    setIsStale(false);
  };

  const runCalculation = () => {
    const r = calculateSolar(units, propertyType);
    setResults({
      size: r.solarSizeKw,
      annual: r.annualSavings,
    });
    setHasCalculated(true);
    setIsStale(false);

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

  // Indicative secondary breakdown figures derived strictly from calculated system size
  const dailyUnits = results.size * UNITS_PER_KW_PER_DAY;
  const estMonthlyUnits = Math.round(dailyUnits * 30);
  const estRoofSqFt = Math.max(0, Math.round(results.size * 90));
  const fiveYearSavings = Math.round(results.annual * 5);

  return (
    <div className={`calc-page ${embedded ? "calc-page--embedded" : ""}`}>
      {/* Inputs */}
      <div className="calc-inputs">
        <div className="calc-inputs-head">
          <span className="calc-step-tag">01 / System Estimator</span>
          <h2>Your Electricity Profile</h2>
        </div>

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

          <div className="calc-presets" aria-label="Quick consumption presets">
            {PRESETS.map((preset) => {
              const isSelected =
                units === preset.units && propertyType === preset.propertyType;
              return (
                <button
                  key={preset.label}
                  type="button"
                  className={`calc-preset-btn ${isSelected ? "is-active" : ""}`}
                  onClick={() => applyPreset(preset)}
                >
                  {preset.label}
                </button>
              );
            })}
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
          <span>{isStale ? "Update Estimate" : "Calculate My Savings"}</span>
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
        <div className="calc-highlight">
          <svg
            className="calc-highlight-art"
            viewBox="0 0 220 120"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="176" cy="30" r="14" stroke="rgba(255, 255, 255, 0.16)" strokeWidth="1" />
            <polygon
              points="108,82 188,64 198,98 118,116"
              fill="rgba(255, 255, 255, 0.04)"
              stroke="rgba(255, 255, 255, 0.18)"
              strokeWidth="1"
            />
            <line x1="136" y1="76" x2="146" y2="110" stroke="rgba(255, 255, 255, 0.14)" strokeWidth="0.9" />
            <line x1="162" y1="70" x2="172" y2="104" stroke="rgba(255, 255, 255, 0.14)" strokeWidth="0.9" />
          </svg>

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

        {/* 4-cell indicative technical breakdown */}
        <div className="calc-breakdown" aria-label="Estimated solar breakdown">
          <div className="calc-metric-card">
            <span className="calc-metric-kicker">Daily Usage</span>
            <span className="calc-metric-val">
              {dailyUnits.toFixed(1)} <small>units/day</small>
            </span>
          </div>
          <div className="calc-metric-card">
            <span className="calc-metric-kicker">Est. Monthly Output</span>
            <span className="calc-metric-val">
              ~{estMonthlyUnits.toLocaleString("en-IN")} <small>units/mo</small>
            </span>
          </div>
          <div className="calc-metric-card">
            <span className="calc-metric-kicker">Approx. Roof Space</span>
            <span className="calc-metric-val">
              ~{estRoofSqFt.toLocaleString("en-IN")} <small>sq ft</small>
            </span>
          </div>
          <div className="calc-metric-card">
            <span className="calc-metric-kicker">5-Yr Indicative Offset</span>
            <span className="calc-metric-val">{formatINR(fiveYearSavings)}</span>
          </div>
        </div>

        <div className="calc-cta">
          <div>
            <h3>Want the full breakdown for your property?</h3>
            <p>
              For your exact system cost, subsidy eligibility, payback period
              and site shading report, contact us — we&apos;ll arrange a free
              consultation and official Natural Grid quotation.
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
      </div>
    </div>
  );
};

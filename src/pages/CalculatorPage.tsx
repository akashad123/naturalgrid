import React from "react";
import { SeoHead } from "@/components/common/SeoHead";
import { PageHero } from "@/components/common/PageHero";
import { SolarCalculator } from "@/components/calculator/SolarCalculator";
import { CalculatorBackdropIllustrations } from "@/components/calculator/CalculatorBackdropIllustrations";

const FAQS = [
  {
    question: "How accurate is this estimate?",
    answer:
      "It's an indicative estimate based on standard assumptions — about 3.5 units generated per kW each day and a ₹8 per unit tariff. Your actual system size and savings depend on a site survey, your tariff, roof space and final design. Contact us for exact figures.",
  },
  {
    question: "How is the recommended system size calculated?",
    answer:
      "We divide the average units on your bill by the days it covers to get your daily consumption, then divide that by 3.5 — the units a single kW typically generates in a day in Kerala. Residential bills are read as 60 days and commercial bills as 30. The exact size is confirmed after a site assessment.",
  },
  {
    question: "Are subsidy and net metering included in the savings?",
    answer:
      "No. The yearly savings shown come from reduced electricity bills only. Subsidy eligibility and net-metering benefits depend on the applicable Government / MNRE scheme and KSEB rules — we'll explain what applies to you during your consultation, with no guaranteed-subsidy claims.",
  },
  {
    question: "Will my actual savings be exactly this amount?",
    answer:
      "Not necessarily. Real savings depend on your actual consumption, tariff, weather, shading, system size and usage patterns. We give honest, realistic estimates — never guaranteed figures.",
  },
  {
    question: "How do I get an exact quote?",
    answer: (
      <>
        Contact us — call <a href="tel:+919072634443">+91 90726 34443</a>, email{" "}
        <a href="mailto:info@naturalgrid.in">info@naturalgrid.in</a> or message us
        on <a href="https://wa.me/919072634443">WhatsApp</a>. We&apos;ll review
        your bill and site and share an official Natural Grid quotation with exact
        cost, subsidy and payback details.
      </>
    ),
  },
];

export const CalculatorPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Solar Savings Calculator"
        description="Calculate your rooftop solar requirements (kW) and annual electricity bill savings (₹) based on your KSEB bi-monthly consumption."
        keywords="solar savings calculator Kerala, KSEB solar calculator, rooftop solar kW calculator, solar bill savings India"
        canonicalPath="/calculator"
      />

      <PageHero
        title="Solar Savings Calculator"
        description="Enter the average units from your electricity bill and your property type to instantly estimate the solar system size you need and your yearly savings. Contact us for exact figures and a detailed quotation."
      />

      <section className="calculator-stage" aria-label="Solar savings estimator">
        <CalculatorBackdropIllustrations />

        <div className="calculator-stage-inner">
          <SolarCalculator />

          {/* ============ FAQ ============ */}
          <div className="faq-section" aria-label="Frequently asked questions">
            <div className="faq-head">
              <p className="eyebrow section-label">02 / Frequently Asked</p>
              <h2>Common Calculator Questions</h2>

              <div className="faq-illustration" aria-hidden="true">
                <svg viewBox="0 0 280 156" fill="none">
                  <defs>
                    <radialGradient id="faq-sun-glow" cx="28%" cy="32%" r="36%">
                      <stop offset="0%" stopColor="#9f4c1c" stopOpacity="0.16" />
                      <stop offset="100%" stopColor="#9f4c1c" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="faq-hill-fade" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#236537" stopOpacity="0.09" />
                      <stop offset="100%" stopColor="#236537" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <circle cx="62" cy="46" r="42" fill="url(#faq-sun-glow)" />
                  <circle
                    cx="62"
                    cy="46"
                    r="14"
                    fill="rgba(159, 76, 28, 0.08)"
                    stroke="rgba(159, 76, 28, 0.42)"
                    strokeWidth="1.15"
                  />
                  <path
                    d="M62 22 V27 M62 65 V70 M38 46 H43 M81 46 H86 M45 29 L49 33 M75 59 L79 63 M79 29 L75 33 M49 59 L45 63"
                    stroke="rgba(159, 76, 28, 0.36)"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                  />

                  <path
                    d="M8 124 C68 96, 138 112, 206 94 C236 86, 258 92, 272 86 L272 152 L8 152 Z"
                    fill="url(#faq-hill-fade)"
                  />
                  <path
                    d="M8 124 C68 96, 138 112, 206 94 C236 86, 258 92, 272 86"
                    stroke="rgba(35, 101, 55, 0.32)"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                  />

                  <g strokeLinecap="round" strokeLinejoin="round">
                    <polygon
                      points="118,86 210,64 252,82 160,104"
                      fill="rgba(35, 101, 55, 0.08)"
                      stroke="rgba(6, 48, 36, 0.45)"
                      strokeWidth="1.25"
                    />
                    <path
                      d="M148 79 L190 97 M179 71 L221 89 M139 95 L231 73"
                      stroke="rgba(35, 101, 55, 0.35)"
                      strokeWidth="1"
                    />
                    <path
                      d="M158 104 V120 M210 92 V106"
                      stroke="rgba(6, 48, 36, 0.32)"
                      strokeWidth="1.15"
                    />
                  </g>
                </svg>
              </div>
            </div>

            <div className="faq">
              {FAQS.map((faq, idx) => (
                <details key={idx} className="feature-acc">
                  <summary>
                    <span>{faq.question}</span>
                    <span className="acc-icon">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

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
              <p className="faq-lead">
                Based on Kerala rooftop irradiance, KSEB bi-monthly tariff
                slabs, and standard MNRE on-grid sizing benchmarks.
              </p>

              <aside
                className="faq-basis-card"
                aria-label="Kerala solar estimation benchmarks"
              >
                <div className="faq-basis-art" aria-hidden="true">
                  <svg viewBox="0 0 220 92" fill="none">
                    <path
                      d="M12 78 C54 64, 96 72, 138 60 C166 52, 192 58, 208 50"
                      stroke="rgba(35, 101, 55, 0.28)"
                      strokeWidth="1"
                    />
                    <circle
                      cx="42"
                      cy="28"
                      r="11"
                      fill="rgba(159, 76, 28, 0.1)"
                      stroke="rgba(159, 76, 28, 0.42)"
                      strokeWidth="1"
                    />
                    <path
                      d="M42 10 V14 M42 42 V46 M24 28 H28 M56 28 H60 M30 16 L33 19 M51 37 L54 40 M54 16 L51 19 M33 37 L30 40"
                      stroke="rgba(159, 76, 28, 0.36)"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                    <polygon
                      points="94,48 158,34 196,46 132,60"
                      fill="rgba(35, 101, 55, 0.1)"
                      stroke="rgba(6, 48, 36, 0.42)"
                      strokeWidth="1.15"
                    />
                    <path
                      d="M115 43 L153 55 M137 38 L175 50 M112 54 L177 40"
                      stroke="rgba(35, 101, 55, 0.34)"
                      strokeWidth="0.9"
                    />
                    <path
                      d="M94 68 V54 L132 60 V68"
                      stroke="rgba(6, 48, 36, 0.28)"
                      strokeWidth="1"
                    />
                  </svg>
                </div>

                <dl className="faq-basis-metrics">
                  <div>
                    <dt>Avg Yield</dt>
                    <dd>3.5 u / kW·day</dd>
                  </div>
                  <div>
                    <dt>Tariff Basis</dt>
                    <dd>₹8 / unit</dd>
                  </div>
                  <div>
                    <dt>Billing Cycle</dt>
                    <dd>60d Res · 30d Com</dd>
                  </div>
                </dl>
              </aside>
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

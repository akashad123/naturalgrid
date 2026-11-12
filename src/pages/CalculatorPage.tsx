import React from "react";
import { SeoHead } from "@/components/common/SeoHead";
import { PageHero } from "@/components/common/PageHero";
import { SolarCalculator } from "@/components/calculator/SolarCalculator";

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
        canonicalPath="/calculator"
      />

      <PageHero
        title="Solar Savings Calculator"
        description="Enter the average units from your electricity bill and your property type to instantly estimate the solar system size you need and your yearly savings. Contact us for exact figures and a detailed quotation."
      />

      <SolarCalculator />

      {/* ============ FAQ ============ */}
      <section className="faq-section" aria-label="Frequently asked questions">
        <div className="faq-head">
          <p className="eyebrow section-label">FAQ</p>
          <h2>Frequently Asked Questions</h2>
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
      </section>
    </>
  );
};

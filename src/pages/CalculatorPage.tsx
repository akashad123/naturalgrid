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
      "System size is calculated by dividing your daily electricity consumption by what one kW of solar typically generates in a day in Kerala (about 3.5 units). For residential bills, we divide the units by 60 days (KSEB two-month billing cycle); for commercial, we divide by 30 days.",
  },
  {
    question: "Does this include the PM Surya Ghar subsidy?",
    answer:
      "The calculator estimates gross electricity bill savings. The Central Government subsidy (up to ₹78,000 for residential systems up to 3kW) is credited directly to your bank account after installation and inspection, reducing your net investment cost even further.",
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
        badgeText="Plan Your Solar Investment"
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

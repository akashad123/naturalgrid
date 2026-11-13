import React from "react";
import { SeoHead } from "@/components/common/SeoHead";
import { PageHero } from "@/components/common/PageHero";
import { Accordion } from "@/components/common/Accordion";
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
            </div>

            <Accordion
              className="faq"
              name="calculator-faq"
              items={FAQS.map((faq, idx) => ({
                id: idx,
                title: faq.question,
                content: faq.answer,
              }))}
              defaultOpenIndex={0}
            />
          </div>
        </div>
      </section>
    </>
  );
};

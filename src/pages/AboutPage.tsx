import React from "react";
import { SeoHead } from "@/components/common/SeoHead";
import { PageHero } from "@/components/common/PageHero";
import { EnergySlider } from "@/components/about/EnergySlider";
import { TrustMarquee } from "@/components/home/TrustMarquee";

export const AboutPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="About Us"
        description="Learn about Natural Grid LLP — a service-first solar energy company founded in Sulthan Bathery, Wayanad, with district-level service teams across Kerala."
        canonicalPath="/about"
      />

      {/* ============ PAGE HERO ============ */}
      <PageHero
        badgeText="Future with Renewable"
        title="A Solar Company Built Around Service"
        description="We're a Wayanad-based solar company that sees the installation as the start of the relationship, not the end of it — fitting each system carefully and staying on to keep it running for years."
      />

      {/* ============ OUR JOURNEY ============ */}
      <section className="journey">
        <div className="journey-copy">
          <p className="eyebrow section-label">Our Journey</p>
          <h2 className="section-title section-title--sub">
            From Wayanad to All 14 Districts
          </h2>
          <p>
            Natural Grid was started with a simple observation: across Kerala,
            hundreds of rooftop solar systems sit underperforming or abandoned
            because the company that installed them moved on, or couldn't support
            them once the sale was complete.
          </p>
          <p>
            We set out to be different. We began in Sulthan Bathery, Wayanad —
            working on residential rooftops, small commercial systems and solar
            water heaters. We took on the hard, unglamorous work: cleaning
            panels properly, troubleshooting inverters, sorting out KSEB net-metering
            delays and answering calls when a system showed an error code after a
            monsoon storm.
          </p>
          <p>
            Today, that service-first model is expanding across all 14 districts
            of Kerala. We're building local technician networks so a customer in
            Kasaragod or Kollam gets the same fast, knowledgeable response as a
            neighbour in Wayanad.
          </p>
        </div>

        {/* How We Work Process List */}
        <ol className="process-steps">
          <li className="process-step">
            <div className="process-step-marker" aria-hidden="true">
              <span className="process-step-num">01</span>
              <span className="process-step-line"></span>
            </div>
            <div className="process-step-body">
              <h3>You reach out</h3>
              <p>
                Call, message or fill in the form — a real person picks it up. We
                get back to you within 24 hours and, where practical, arrange a
                site visit within 24–48 hours.
              </p>
            </div>
          </li>

          <li className="process-step">
            <div className="process-step-marker" aria-hidden="true">
              <span className="process-step-num">02</span>
              <span className="process-step-line"></span>
            </div>
            <div className="process-step-body">
              <h3>We visit, evaluate, and document the best solution</h3>
              <p>
                We look at your roof, wiring and KSEB bill, then give you a clear
                written plan and quote. We also help with the KSEB and subsidy
                paperwork where it is needed.
              </p>
            </div>
          </li>

          <li className="process-step">
            <div className="process-step-marker" aria-hidden="true">
              <span className="process-step-num">03</span>
              <span className="process-step-line"></span>
            </div>
            <div className="process-step-body">
              <h3>The right team does the work</h3>
              <p>
                Trained technicians install your system using approved,
                ISI-compliant materials — with safe, careful workmanship from the
                first bracket to the final connection.
              </p>
            </div>
          </li>

          <li className="process-step">
            <div className="process-step-marker" aria-hidden="true">
              <span className="process-step-num">04</span>
              <span className="process-step-line"></span>
            </div>
            <div className="process-step-body">
              <h3>We finish and check with you</h3>
              <p>
                Once it is done, we test the system, walk you through how it
                works, and only close the job when you are happy. Every enquiry
                is followed up until it is properly wrapped up.
              </p>
            </div>
          </li>

          <li className="process-step">
            <div className="process-step-marker" aria-hidden="true">
              <span className="process-step-num">05</span>
              <span className="process-step-line"></span>
            </div>
            <div className="process-step-body">
              <h3>We stay on with AMC</h3>
              <p>
                After handover we keep in touch. Our AMC plans cover
                inspection, monitoring and breakdown help — so your plant keeps
                generating well, year after year.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* ============ CARE AFTER INSTALLATION SLIDER ============ */}
      <EnergySlider />

      {/* ============ VISION ============ */}
      <section className="precision">
        <h2 className="section-title">Our Vision</h2>

        <div className="precision-copy">
          <p className="precision-brand">
            Natural Grid<sup>LLP</sup>
          </p>
          <p>
            Natural Grid is committed to becoming one of Kerala's most trusted
            solar service and AMC providers. Our vision is to deliver reliable,
            responsive, and professional after-sales support across all 14
            districts through dedicated local service teams. As we grow, we aim
            to expand into battery energy storage, EV charging solutions, and
            advanced renewable energy services, building a strong service
            network that will eventually extend beyond Kerala.
          </p>
        </div>
      </section>

      {/* ============ TRUSTED BY ============ */}
      <TrustMarquee showEyebrow={false} />
    </>
  );
};

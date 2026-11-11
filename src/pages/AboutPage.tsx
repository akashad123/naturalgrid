import React from "react";
import { Link } from "react-router-dom";
import { SeoHead } from "@/components/common/SeoHead";
import { PageHero } from "@/components/common/PageHero";
import { EnergySlider } from "@/components/about/EnergySlider";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { useCounter } from "@/hooks/useCounter";

export const AboutPage: React.FC = () => {
  const { count: districtsCount, ref: districtsRef } = useCounter(14);
  const { count: servicesCount, ref: servicesRef } = useCounter(8);

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
        title={"A Solar Company Built Around\u00A0Service"}
        description="We're a Wayanad-based solar company that sees the installation as the start of the relationship, not the end of it — fitting each system carefully and staying on to keep it running for years."
      />

      {/* ============ OUR JOURNEY ============ */}
      <section className="journey">
        <div>
          <div className="hero-badge">
            <span>About our journey</span>
          </div>
        </div>

        <div className="journey-copy">
          <p>
            Natural Grid LLP is a Kerala-based renewable-energy company
            headquartered in Sulthan Bathery, Wayanad. Incorporated as a Limited
            Liability Partnership, we focus on solar power plant installation,
            annual maintenance contracts (AMC), servicing, repair, inspection,
            performance monitoring and complete lifecycle support. Our
            strength comes from hands-on field experience — we understand what
            happens to a solar plant after commissioning, and we have built our
            company around solving exactly that.
          </p>
          <p>
            We also collaborate with the Kisan Service Society (KSS), a
            non-profit network with units across Kerala, helping solar awareness
            and reliable service reach households and farmers even in rural areas
            — while all technical assessments, quotations and payments are
            handled directly and only by Natural Grid LLP.
          </p>
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
      </section>

      {/* ============ STATS ============ */}
      <section className="stats-row">
        <div className="stat stat-card">
          <span ref={districtsRef} className="stat-number">
            {districtsCount}
          </span>
          <span className="stat-label">Districts Covered Across Kerala</span>
        </div>
        <div className="stat stat-card">
          <span className="stat-number">24h</span>
          <span className="stat-label">Enquiry Response Target</span>
        </div>
        <div className="stat stat-card">
          <span className="stat-number">24–48h</span>
          <span className="stat-label">Service Visit Scheduling Target</span>
        </div>
        <div className="stat stat-card">
          <span ref={servicesRef} className="stat-number">
            {servicesCount}+
          </span>
          <span className="stat-label">End-to-End Solar Services</span>
        </div>
      </section>

      {/* ============ WORK PROCESS ============ */}
      <section className="process">
        <div className="process-head">
          <h2 className="section-title">How We Work</h2>
          <p className="section-text">
            However you reach us, every job follows the same five steps — so you
            always know what is happening and what comes next.
          </p>
          <Link to="/contact" className="btn-dark">
            <span>Talk to Us</span>
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
                Once it is done, we test the system, walk you through how it works,
                and only close the job when you are happy. Every enquiry is
                followed up until it is properly wrapped up.
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

      {/* ============ SPEED & PRECISION / VISION ============ */}
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

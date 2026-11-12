import React from "react";
import { Link } from "react-router-dom";
import { SeoHead } from "@/components/common/SeoHead";
import { PageHero } from "@/components/common/PageHero";
import { EnergySlider } from "@/components/about/EnergySlider";
import { AboutHorizonAccent } from "@/components/about/AboutBackdropIllustrations";
import { MinimalBackdrop } from "@/components/common/MinimalBackdrop";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { useCounter } from "@/hooks/useCounter";

export const AboutPage: React.FC = () => {
  const districtsRef = useCounter(14);
  const servicesRef = useCounter(8, 1400, "+");

  return (
    <>
      <SeoHead
        title="About Us"
        description="Learn about Natural Grid LLP — a service-first solar energy company founded in Sulthan Bathery, Wayanad, with district-level service teams across Kerala."
        keywords="Natural Grid LLP, solar company Wayanad, Sulthan Bathery solar, Kerala solar AMC company, Kisan Service Society solar"
        canonicalPath="/about"
      />

      {/* ============ PAGE HERO ============ */}
      <PageHero
        title={"A Solar Company Built Around\u00A0Service"}
        description="We're a Wayanad-based solar company that sees the installation as the start of the relationship, not the end of it — fitting each system carefully and staying on to keep it running for years."
      />

      <div className="about-stage">
        <MinimalBackdrop />
        <div className="about-stage-inner">
          {/* ============ OUR JOURNEY (MINIMAL EDITORIAL GRID) ============ */}
          <section className="journey">
        <div className="journey-aside">
          <p className="eyebrow section-label">01 / Our Journey</p>
          <h2 className="journey-heading">
            Built around what happens after commissioning.
          </h2>
        </div>

        <div className="journey-copy">
          <p>
            Natural Grid LLP is a Kerala-based renewable-energy company
            headquartered in Sulthan Bathery, Wayanad — focused on rooftop solar
            installation, annual maintenance contracts (AMC), inspection,
            monitoring, and complete lifecycle service across all 14 districts.
          </p>
          <p>
            Through field work and collaboration with the Kisan Service Society
            (KSS), we bring dependable solar guidance to urban and rural homes
            alike — while every technical assessment, quotation, and payment stays
            directly with Natural Grid LLP.
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

      {/* ============ MINIMAL STATS BAR ============ */}
      <section className="stats-row" aria-label="Key service standards">
        <div className="stat stat-card">
          <span ref={districtsRef} className="stat-number">
            0
          </span>
          <span className="stat-label">Districts Covered Across Kerala</span>
        </div>
        <div className="stat stat-card">
          <span className="stat-number">24h</span>
          <span className="stat-label">Enquiry Response Target</span>
        </div>
        <div className="stat stat-card">
          <span className="stat-number">24–48h</span>
          <span className="stat-label">Site Visit Target</span>
        </div>
        <div className="stat stat-card">
          <span ref={servicesRef} className="stat-number">
            0+
          </span>
          <span className="stat-label">Years &amp; Services Experience</span>
        </div>
      </section>

      {/* ============ WORK PROCESS (MINIMAL SPLIT LEDGER) ============ */}
      <section className="process">
        <div className="process-head">
          <p className="eyebrow section-label">02 / How We Work</p>
          <h2 className="section-title">Five predictable steps.</h2>
          <p className="section-text">
            Clear milestones from first enquiry through ongoing post-handover care.
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
            <span className="process-step-num" aria-hidden="true">01</span>
            <div className="process-step-body">
              <h3>You reach out</h3>
              <p>
                A real technician responds within 24 hours and schedules a site
                visit within 24–48 hours where practical.
              </p>
            </div>
          </li>

          <li className="process-step">
            <span className="process-step-num" aria-hidden="true">02</span>
            <div className="process-step-body">
              <h3>Site audit &amp; written quote</h3>
              <p>
                We review your roof, wiring, and KSEB bill, then issue a clear
                written specification plus net-metering and subsidy paperwork.
              </p>
            </div>
          </li>

          <li className="process-step">
            <span className="process-step-num" aria-hidden="true">03</span>
            <div className="process-step-body">
              <h3>Trained installation team</h3>
              <p>
                District technicians install approved, ISI-compliant materials
                with clean routing from structural mounts to earthing.
              </p>
            </div>
          </li>

          <li className="process-step">
            <span className="process-step-num" aria-hidden="true">04</span>
            <div className="process-step-body">
              <h3>Commissioning &amp; walkthrough</h3>
              <p>
                Every protection check and system test is completed and walked
                through with you before handover.
              </p>
            </div>
          </li>

          <li className="process-step">
            <span className="process-step-num" aria-hidden="true">05</span>
            <div className="process-step-body">
              <h3>Long-term AMC support</h3>
              <p>
                Scheduled inspections, output monitoring, and prompt breakdown
                help keep generation steady year after year.
              </p>
            </div>
          </li>
        </ol>
      </section>
        </div>
      </div>

      {/* ============ CARE AFTER INSTALLATION SLIDER ============ */}
      <EnergySlider />

      {/* ============ OUR VISION (MINIMAL EDITORIAL) ============ */}
      <section className="precision">
        <AboutHorizonAccent />
        <div className="precision-head">
          <p className="eyebrow section-label">03 / Our Vision</p>
          <h2 className="section-title">Built for long-term trust across Kerala.</h2>
        </div>

        <div className="precision-copy">
          <p className="precision-brand">
            Natural Grid<sup>LLP</sup>
          </p>
          <p>
            Headquartered in Wayanad, our goal is reliable, local after-sales
            solar support in all 14 districts — expanding steadily into battery
            energy storage, EV charging, and clean-energy servicing that puts
            post-commissioning care first.
          </p>
          <div className="precision-pillars">
            <div className="precision-pillar">
              <strong>14 Districts</strong>
              <span>Dedicated local service dispatch</span>
            </div>
            <div className="precision-pillar">
              <strong>AMC First</strong>
              <span>Preventive care beyond installation</span>
            </div>
            <div className="precision-pillar">
              <strong>Storage &amp; EV</strong>
              <span>Ready for next-generation grids</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUSTED BY ============ */}
      <TrustMarquee showEyebrow={false} />
    </>
  );
};

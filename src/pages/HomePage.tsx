import React from "react";
import { Link } from "react-router-dom";
import { SeoHead } from "@/components/common/SeoHead";
import { HeroVideo } from "@/components/home/HeroVideo";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { siteConfig } from "@/config/site";
import { useCounter } from "@/hooks/useCounter";

export const HomePage: React.FC = () => {
  const { count: districtCount, ref: districtRef } = useCounter(14);

  return (
    <>
      <SeoHead
        title="Solar Installation, Service & AMC in Kerala"
        description="Service-first solar company in Kerala. Rooftop solar installation, AMC, repair, cleaning and monitoring with district-level support teams across all 14 districts."
        canonicalPath="/"
      />

      {/* ============ HERO ============ */}
      <section className="hero">
        <HeroVideo />

        <div className="hero-content">
          <p className="hero-eyebrow">Clean Energy. Brighter Future.</p>

          <h1 className="hero-headline">
            <span>Kerala’s Trusted Solar Company,</span>
            <span>
              Built on <span className="hero-headline-accent">Service First.</span>
            </span>
          </h1>

          <p className="hero-text">
            Expert solar installation for homes and businesses across Kerala.
            Save on your KSEB bills and switch to clean, renewable energy —
            with service that stays with you long after commissioning.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="hero-btn hero-btn--solid">
              <span>Get a Free Quote</span>
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
            </Link>
            <a href="#about" className="hero-btn hero-btn--ghost">
              <span>Our Services</span>
            </a>
          </div>

          <div className="hero-trust">
            <p className="hero-trust-text">
              <strong>Trusted by homes &amp; businesses</strong> across all 14
              districts of Kerala
            </p>
          </div>
        </div>

        <div className="hero-featurebar">
          <div className="hero-feature">
            <span className="hero-feature-icon" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </span>
            <span>
              Expert
              <br />
              Installation
            </span>
          </div>
          <div className="hero-feature">
            <span className="hero-feature-icon" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 11.5 11 13.5 15 9.5" />
              </svg>
            </span>
            <span>
              ISI-Compliant
              <br />
              Materials
            </span>
          </div>
          <div className="hero-feature">
            <span className="hero-feature-icon" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
              </svg>
            </span>
            <span>
              Subsidy &amp;
              <br />
              Net Metering
            </span>
          </div>
          <div className="hero-feature">
            <span className="hero-feature-icon" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </span>
            <span>
              Maintenance
              <br />
              &amp; AMC
            </span>
          </div>
        </div>
      </section>

      {/* ============ ABOUT / STATS ============ */}
      <section className="about" id="about">
        <div className="about-side">
          <div className="stat">
            <span ref={districtRef} className="stat-number">
              {districtCount}
            </span>
            <span className="stat-label">Districts Served Across Kerala</span>
          </div>

          <p className="eyebrow about-list-label">Our Services</p>
          <nav className="about-list">
            {siteConfig.services.map((service) => (
              <Link
                key={service.id}
                to={`/${service.slug}`}
                className="about-list-item"
              >
                <span>{service.shortTitle}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            ))}
          </nav>
        </div>

        <div className="about-main">
          <p className="eyebrow section-label">Who We Are</p>
          <div className="hero-badge">
            <span>Service-first solar, across Kerala</span>
          </div>

          <h2 className="about-heading">
            From residential rooftops to commercial and institutional projects,
            Natural Grid delivers quality installation using approved,
            ISI-compliant materials — and backs every system with an organised
            statewide service network.
          </h2>

          <Link to="/about" className="social-link about-more">
            <span>More About Us</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ============ PROCESS / HOW IT WORKS ============ */}
      <section className="how" id="process">
        <div className="how-head">
          <p className="eyebrow section-label">How It Works</p>
          <h2 className="section-title section-title--sub">
            Going Solar in Four Simple Steps
          </h2>
          <p className="section-text">
            From your first call to lifelong care, here's exactly what happens
            when you go solar with Natural Grid — clear and jargon-free at every
            step.
          </p>
        </div>

        <div className="how-grid">
          <article className="how-step">
            <span className="how-icon" aria-hidden="true">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </span>
            <span className="how-num">Step 01</span>
            <h3>Consultation &amp; Survey</h3>
            <p>
              We study your KSEB bill, inspect your roof and understand your daily
              power needs — then recommend the right system size with honest,
              verified advice.
            </p>
          </article>

          <article className="how-step">
            <span className="how-icon" aria-hidden="true">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
              </svg>
            </span>
            <span className="how-num">Step 02</span>
            <h3>Design &amp; Quote</h3>
            <p>
              You receive a tailored on-grid, off-grid or hybrid design and a
              clear Natural Grid quotation, with guidance on net metering and
              any applicable subsidy.
            </p>
          </article>

          <article className="how-step">
            <span className="how-icon" aria-hidden="true">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </span>
            <span className="how-num">Step 03</span>
            <h3>Installation &amp; Approvals</h3>
            <p>
              Our team installs using approved, ISI-compliant materials and
              handles the KSEB net-metering, inspection and commissioning — so
              your system goes live safely.
            </p>
          </article>

          <article className="how-step">
            <span className="how-icon" aria-hidden="true">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 11.5 11 13.5 15 9.5" />
              </svg>
            </span>
            <span className="how-num">Step 04</span>
            <h3>Service &amp; AMC</h3>
            <p>
              Once live, we stay with you — panel cleaning, preventive
              maintenance and fast local support through district teams across
              all 14 districts of Kerala.
            </p>
          </article>
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section className="projects" id="projects">
        <div className="section-head">
          <div className="section-head-copy">
            <p className="eyebrow section-label">Our Projects</p>
            <h2 className="section-title section-title--sub">
              Solar for Homes, Businesses &amp; Industry
            </h2>
            <p className="section-text">
              On-grid, off-grid and hybrid systems for homes, businesses,
              institutions and industry — plus solar pumps, street lights and
              water heaters.
            </p>
          </div>
          <Link to="/gallery" className="btn-dark">
            <span>View Our Work</span>
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

        <div className="project-grid">
          <Link to="/gallery" className="project-card">
            <div className="project-media">
              <img
                src="/images/rooftop-solar-800.webp"
                srcSet="/images/rooftop-solar-800.webp 800w, /images/rooftop-solar-1600.webp 1600w"
                sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, 33vw"
                width="800"
                height="1200"
                alt="Solar panels installed on a rooftop"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="project-info">
              <div>
                <h3>Residential Rooftop Solar</h3>
                <p>On-Grid with Net Metering</p>
              </div>
              <span className="project-arrow" aria-hidden="true">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </div>
          </Link>

          <Link to="/gallery" className="project-card">
            <div className="project-media">
              <img
                src="/images/solar-team-800.webp"
                srcSet="/images/solar-team-800.webp 800w, /images/solar-team-1600.webp 1600w"
                sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, 33vw"
                width="800"
                height="600"
                alt="Team working at a commercial solar installation"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="project-info">
              <div>
                <h3>Commercial &amp; Institutional Solar</h3>
                <p>Offices, Schools, Hospitals &amp; More</p>
              </div>
              <span className="project-arrow" aria-hidden="true">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </div>
          </Link>

          <Link to="/gallery" className="project-card">
            <div className="project-media">
              <img
                src="/images/ground-mounted-array-800.webp"
                srcSet="/images/ground-mounted-array-800.webp 800w, /images/ground-mounted-array-1600.webp 1600w"
                sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, 33vw"
                width="800"
                height="1200"
                alt="Ground-mounted solar panel array"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="project-info">
              <div>
                <h3>Industrial &amp; Ground-Mounted Solar</h3>
                <p>Larger-Capacity Systems</p>
              </div>
              <span className="project-arrow" aria-hidden="true">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="features" id="features">
        <div className="features-intro">
          <p className="eyebrow section-label">Why Natural Grid</p>
          <h2 className="section-title section-title--sub">
            Why customers choose Natural Grid
          </h2>
          <p className="section-text">
            Approved brands, district-level service teams, 24-hour response
            targets and a service-first approach to solar.
          </p>
          <Link to="/contact" className="btn-dark">
            <span>Get Started</span>
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

        <div className="features-side">
          <div className="features-panel">
            <span className="panel-watermark" aria-hidden="true">
              naturalgrid
            </span>
            <h3>Service First. Kerala-Wide.</h3>
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

          <div className="features-acc">
            <details className="feature-acc">
              <summary>
                <span>Service-first philosophy</span>
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
              <p>
                We build trust through what happens after installation, not
                just the sale — structured AMC plans, preventive maintenance and
                genuine long-term customer care.
              </p>
            </details>

            <details className="feature-acc">
              <summary>
                <span>Approved quality materials</span>
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
              <p>
                We work with reputed brands and ISI-approved materials — panels,
                inverters, protection equipment, cabling and mounting
                structures. Final make and model depend on technical design,
                availability and the approved quotation.
              </p>
            </details>

            <details className="feature-acc">
              <summary>
                <span>Honest communication</span>
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
              <p>
                No exaggerated generation promises. Just clear, verified
                information and proper documentation at every step.
              </p>
            </details>
          </div>
        </div>

        <div className="features-about">
          <p className="eyebrow section-label">About Us</p>
          <p className="features-about-text">
            Natural Grid LLP is a Kerala-based renewable-energy company
            headquartered in Sulthan Bathery, Wayanad. Built on hands-on field
            experience, we understand what happens to a solar plant after
            commissioning — and we've built our company around solving exactly
            that.
          </p>
          <Link to="/contact" className="btn-dark">
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

      {/* ============ TRUSTED BY ============ */}
      <TrustMarquee />
    </>
  );
};

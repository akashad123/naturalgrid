import React from "react";
import { Link } from "react-router-dom";
import { SeoHead } from "@/components/common/SeoHead";
import { PageHero } from "@/components/common/PageHero";
import { HeroVideo } from "@/components/home/HeroVideo";
import { HowItWorksCarousel } from "@/components/home/HowItWorksCarousel";
import { FeaturesAboutIllustration, FeaturesPanelAccent } from "@/components/home/FeaturesIllustrations";
import { ProjectsAccordion } from "@/components/home/ProjectsAccordion";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { siteConfig } from "@/config/site";
import { useCounter } from "@/hooks/useCounter";

export const HomePage: React.FC = () => {
  const districtRef = useCounter(14);

  return (
    <>
      <SeoHead
        title="Solar Installation, Service & AMC in Kerala"
        description="Service-first solar company in Kerala. Rooftop solar installation, AMC, repair, cleaning and monitoring with district-level support teams across all 14 districts."
        canonicalPath="/"
      />

      {/* ============ HERO (Matches inner PageHero without badge/topbar/buttons) ============ */}
      <PageHero
        className="hero--about-match"
        badgeText=""
        title={"Kerala’s Trusted Solar Company, Built on Service\u00A0First."}
        description="Expert solar installation for homes and businesses across Kerala. Save on your KSEB bills and switch to clean, renewable energy — with service that stays with you long after commissioning."
        background={<HeroVideo />}
      />

      {/* ============ ABOUT / STATS ============ */}
      <section className="about" id="about">
        <div className="about-side">
          <div className="stat">
            <span ref={districtRef} className="stat-number">
              0
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

      {/* ============ PROCESS / HOW IT WORKS (Overlapping Deck) ============ */}
      <HowItWorksCarousel />

      {/* ============ PROJECTS ============ */}
      <section className="projects" id="projects">
        <div className="section-head">
          <div className="section-head-copy">
            <p className="eyebrow section-label">Our Projects</p>
          </div>
        </div>

        <ProjectsAccordion />
      </section>

      {/* ============ FEATURES ============ */}
      <section className="features" id="features">
        <div className="features-intro">
          <p className="eyebrow section-label">Why Natural Grid</p>
          <p className="section-text">
            Approved brands, district-level service teams, 24-hour response
            targets and a service-first approach to solar.
          </p>
        </div>

        <div className="features-side">
          <div className="features-panel">
            <span className="panel-watermark" aria-hidden="true">
              naturalgrid
            </span>
            <FeaturesPanelAccent />
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
          <FeaturesAboutIllustration />
        </div>
      </section>

      {/* ============ TRUSTED BY ============ */}
      <TrustMarquee />
    </>
  );
};

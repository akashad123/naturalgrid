import React from "react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/common/PageHero";
import { Accordion } from "@/components/common/Accordion";
import {
  ServiceBackdropIllustrations,
  ServiceVisualId,
} from "@/components/service/ServiceBackdropIllustrations";
import { siteConfig } from "@/config/site";

export interface ServiceStep {
  num: string;
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

interface ServiceLayoutProps {
  serviceId: ServiceVisualId;
  title: string;
  heroText: string;
  steps: ServiceStep[];
  faqs?: ServiceFaq[];
  children: React.ReactNode;
}

export const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  serviceId,
  title,
  heroText,
  steps,
  faqs,
  children,
}) => {
  const otherServices = siteConfig.services.filter((s) => s.id !== serviceId);

  return (
    <>
      <PageHero title={title} description={heroText} />

      <div className="services-stage">
        <ServiceBackdropIllustrations serviceId={serviceId} />

        <section className="services-detail">
          <div className="services-main">
            <article>
              <div className="service-sec-head">
                <span className="service-sec-num">01 / Workflow</span>
                <h2 className="panel-section-title">How It Works</h2>
              </div>

              <div className="panel-steps">
                {steps.map((step, idx) => (
                  <div key={idx} className="panel-step">
                    <span className="panel-step-num">{step.num}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="service-sec-head service-sec-head--body">
                <span className="service-sec-num">02 / Scope &amp; Details</span>
              </div>
              <div className="panel-body">{children}</div>

              {faqs && faqs.length > 0 && (
                <div className="service-faq-wrap">
                  <div className="service-sec-head">
                    <span className="service-sec-num">03 / Clarifications</span>
                    <h2 className="panel-section-title">
                      Frequently Asked Questions
                    </h2>
                  </div>

                  <Accordion
                    className="faq"
                    name={`service-faq-${serviceId}`}
                    items={faqs.map((faq, idx) => ({
                      id: idx,
                      title: faq.question,
                      content: faq.answer,
                    }))}
                    defaultOpenIndex={0}
                  />
                </div>
              )}
            </article>
          </div>

          {/* Sibling Service Cross-Links */}
          <nav className="service-explore" aria-label="Explore other solar services">
            <span className="service-sec-num">Explore Other Services</span>
            <div className="service-explore-links">
              {otherServices.map((srv) => (
                <Link
                  key={srv.id}
                  to={`/${srv.slug}`}
                  className="service-explore-link"
                >
                  <span>{srv.title}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              ))}
            </div>
          </nav>

          {/* Advice / Contact CTA Banner */}
          <aside className="advice-card advice-card--banner">
            <span className="advice-icon" aria-hidden="true">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <div className="advice-card-copy">
              <h3>Contact us for any advice</h3>
              <a href={`tel:${siteConfig.phoneRaw}`} className="advice-phone">
                {siteConfig.phoneDisplay}
              </a>
            </div>
            <Link to="/contact" className="contact-btn">
              <span>Get a Free Consultation</span>
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
          </aside>
        </section>
      </div>
    </>
  );
};

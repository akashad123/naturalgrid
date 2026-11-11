import React from "react";
import { SeoHead } from "@/components/common/SeoHead";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/site";

const FAQS = [
  {
    question: "Which areas do you serve?",
    answer:
      "We serve all 14 districts of Kerala, coordinated from our headquarters in Sulthan Bathery, Wayanad. District-level technical teams are being built for fast, local response.",
  },
  {
    question: "How soon will you respond to my enquiry?",
    answer:
      "We aim to acknowledge every enquiry within 24 hours. Where a site visit is needed, we schedule it within 24–48 hours where practical — depending on your location, urgency and technician availability.",
  },
  {
    question: "Can you service a system installed by someone else?",
    answer:
      "Yes. We provide AMC, repair and troubleshooting for solar plants regardless of who installed them — low generation, inverter errors, wiring concerns and more.",
  },
  {
    question: "Do you guarantee generation output or subsidy amounts?",
    answer:
      "No. Generation depends on many site factors, and subsidy depends on the applicable Government / MNRE scheme and approvals. We give honest, realistic estimates and never guarantee output or subsidy figures.",
  },
  {
    question: "How do I get a quote?",
    answer: (
      <>
        Call <a href="tel:+919072634443">+91 90726 34443</a>, email{" "}
        <a href="mailto:info@naturalgrid.in">info@naturalgrid.in</a>, message us
        on <a href="https://wa.me/919072634443">WhatsApp</a>, or fill in the form
        above. We&apos;ll review your KSEB bill and requirements and share an
        official Natural Grid quotation.
      </>
    ),
  },
];

export const ContactPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Contact Us"
        description="Get in touch with Natural Grid LLP for rooftop solar installations, battery backup systems, and AMC maintenance anywhere in Kerala."
        canonicalPath="/contact"
      />

      {/* ============ CONTACT HERO ============ */}
      <section className="contact-hero">
        <div className="hero-badge">
          <svg
            className="sun-spin"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="12" y1="1" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="23" />
              <line x1="4.2" y1="4.2" x2="6.3" y2="6.3" />
              <line x1="17.7" y1="17.7" x2="19.8" y2="19.8" />
              <line x1="1" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="23" y2="12" />
              <line x1="4.2" y1="19.8" x2="6.3" y2="17.7" />
              <line x1="17.7" y1="6.3" x2="19.8" y2="4.2" />
            </g>
          </svg>
          <span>{siteConfig.tagline}</span>
        </div>

        <h1 className="contact-title">Talk to Natural&nbsp;Grid</h1>

        <a href="#connect" className="contact-btn">
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
        </a>
      </section>

      {/* ============ LET'S CONNECT / FORM ============ */}
      <section className="connect" id="connect">
        <div className="connect-info">
          <h2>Let's Connect</h2>
          <p>
            Ready to go solar, or need service for your existing system? Our team
            responds to every enquiry within 24 hours.
          </p>
          <p>
            Registered Office: {siteConfig.address.line1},{" "}
            {siteConfig.address.locality}, {siteConfig.address.region} —{" "}
            {siteConfig.address.postalCode}.
            <br />
            Service area: all 14 districts of Kerala.
          </p>

          <div className="connect-socials">
            <a href={`tel:${siteConfig.phoneRaw}`} className="social-link">
              <span>{siteConfig.phoneDisplay}</span>
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
            </a>
            <a href={`mailto:${siteConfig.email}`} className="social-link">
              <span>{siteConfig.email}</span>
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
            </a>
            <a
              href={`https://wa.me/${siteConfig.phoneRaw.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span>WhatsApp Us</span>
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
            </a>
          </div>
        </div>

        <ContactForm />
      </section>

      {/* ============ MAP ============ */}
      <section className="map-section" aria-label="Our location on Google Maps">
        <div className="map-head">
          <h2>Find Us on the Map</h2>
          <a
            href="https://maps.google.com/?cid=2529540166396408318"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <span>Get Directions</span>
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
          </a>
        </div>
        <div className="map-embed">
          <iframe
            src={siteConfig.address.googleMapsEmbedUrl}
            title={`${siteConfig.name} — Sulthan Bathery, Wayanad on Google Maps`}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>

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

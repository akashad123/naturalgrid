import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
import {
  FooterCornerWave,
  FooterHeroIllustration,
} from "./FooterIllustration";

const SOCIAL_LINKS = [
  { label: "Facebook", href: siteConfig.socials.facebook },
  { label: "Instagram", href: siteConfig.socials.instagram },
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
  { label: "YouTube", href: siteConfig.socials.youtube },
] as const;

export const SiteFooter: React.FC = () => {
  return (
    <footer className="site-footer">
      {/* Upper full-bleed solar landscape band + right-aligned brand lockup */}
      <div className="footer-hero">
        <FooterHeroIllustration />
        <div className="footer-hero-content">
          <div className="footer-lockup">
            <Link to="/" className="footer-brand" aria-label="Natural Grid Home">
              <img
                src="/images/logo.webp"
                width="320"
                height="320"
                alt={siteConfig.name}
                className="footer-logo"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <span className="footer-lockup-divider" aria-hidden="true" />
            <h2 className="footer-title">
              Let&apos;s Build
              <br />
              Energy Together
            </h2>
          </div>
        </div>
      </div>

      {/* Open 4-column directory & bottom social / copyright hairline bar */}
      <div className="footer-inner">
        <div className="footer-card">
          <div className="footer-links">
            <div className="link-col">
              <h3>Pages</h3>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/calculator">Savings Calculator</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="link-col">
              <h3>Services</h3>
              {siteConfig.services.map((service) => (
                <Link key={service.id} to={`/${service.slug}`}>
                  {service.footerTitle}
                </Link>
              ))}
            </div>
            <div className="link-col">
              <h3>Contact</h3>
              <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phoneDisplay}</a>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a
                href={`https://wa.me/${siteConfig.phoneRaw.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
            <div className="link-col">
              <h3>Registered Office</h3>
              <Link to="/contact">
                {siteConfig.address.line1}, {siteConfig.address.locality},{" "}
                {siteConfig.address.region} - {siteConfig.address.postalCode}
              </Link>
            </div>
          </div>

          {/* Crawlable Local SEO District Directory */}
          <div className="footer-districts">
            <span className="footer-districts-label">
              Solar Installation Across Kerala:
            </span>
            <div className="footer-districts-list">
              {siteConfig.districts.map((districtName) => {
                const slug = districtName.toLowerCase().replace(/\s+/g, "-");
                return (
                  <Link
                    key={slug}
                    to={`/solar-installation/${slug}`}
                    className="footer-district-link"
                  >
                    Solar in {districtName}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-socials">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span>{item.label}</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            ))}
          </div>

          <p className="footer-copy">
            &copy; Copyright 2026 | <Link to="/">{siteConfig.legalName}</Link> | All
            Rights Reserved
          </p>
        </div>
      </div>

      <FooterCornerWave />
    </footer>
  );
};

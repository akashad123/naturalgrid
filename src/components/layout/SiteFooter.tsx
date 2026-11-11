import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";

export const SiteFooter: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-watermark" aria-hidden="true">
          naturalgrid
        </span>

        <div className="footer-left">
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
          <h2 className="footer-title">Let's Build Energy&nbsp;Together</h2>
          <div className="footer-socials">
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span>Facebook</span>
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
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span>Instagram</span>
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
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span>LinkedIn</span>
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
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span>YouTube</span>
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
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; Copyright 2026 | <Link to="/">{siteConfig.legalName}</Link> | All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
};

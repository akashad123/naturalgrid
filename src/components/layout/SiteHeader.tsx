import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { useStickyHeader } from "@/hooks/useStickyHeader";

export const SiteHeader: React.FC = () => {
  const isStuck = useStickyHeader(24);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  // Close mobile nav on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    document.body.classList.remove("nav-open");
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    const nextState = !mobileMenuOpen;
    setMobileMenuOpen(nextState);
    if (nextState) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
  };

  const toggleServicesDropdown = (e: React.MouseEvent) => {
    // Only toggle on smaller screens where hover doesn't apply
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      setServicesDropdownOpen((prev) => !prev);
    }
  };

  const isServiceActive = location.pathname.startsWith("/service-");
  const isHome =
    location.pathname === "/" || location.pathname === "/index.html";

  return (
    <header className={`site-header ${isStuck ? "is-stuck" : ""}`}>
      <Link
        to="/"
        className="logo"
        aria-label={`${siteConfig.name} - ${siteConfig.tagline}`}
      >
        <span className="logo-mark">
          <span className="logo-natural">Natural</span>
          <span className="logo-grid">Grid</span>
        </span>
        <span className="logo-tagline">{siteConfig.tagline}</span>
      </Link>

      <nav className={`main-nav ${mobileMenuOpen ? "is-open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link ${isActive && location.pathname === "/" ? "active" : ""}`
          }
          end
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          About
        </NavLink>

        <div
          className={`nav-dropdown ${servicesDropdownOpen ? "is-open" : ""}`}
          onMouseEnter={() => {
            if (window.innerWidth > 1024) setServicesDropdownOpen(true);
          }}
          onMouseLeave={() => {
            if (window.innerWidth > 1024) setServicesDropdownOpen(false);
          }}
        >
          <button
            type="button"
            className={`nav-link nav-dropdown-toggle ${
              isServiceActive ? "active" : ""
            }`}
            aria-expanded={servicesDropdownOpen}
            aria-controls="services-menu"
            onClick={toggleServicesDropdown}
          >
            <span>Services</span>
            <svg
              className="nav-caret"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className="nav-dropdown-menu" id="services-menu">
            {siteConfig.services.map((service) => (
              <NavLink
                key={service.id}
                to={`/${service.slug}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {service.title}
              </NavLink>
            ))}
          </div>
        </div>

        <NavLink
          to="/gallery"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Gallery
        </NavLink>

        <NavLink
          to="/calculator"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Savings Calculator
        </NavLink>

        {!isHome && (
          <Link to="/contact" className="contact-btn nav-contact">
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
        )}
      </nav>

      <div className="header-actions">
        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>

        {!isHome && (
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
        )}
      </div>
    </header>
  );
};

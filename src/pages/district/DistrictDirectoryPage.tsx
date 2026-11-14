import React from "react";
import { Link } from "react-router-dom";
import { SeoHead } from "@/components/common/SeoHead";
import { KeralaCoverageGrid } from "@/components/common/KeralaCoverageGrid";
import { siteConfig } from "@/config/site";

export const DistrictDirectoryPage: React.FC = () => {
  const canonicalPath = "/solar-installation";

  // Build JSON-LD structured data for statewide multi-location service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Rooftop Solar Installation Across Kerala",
    serviceType: "Solar Power Plant Installation, Net Metering & AMC",
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phoneRaw,
      email: siteConfig.email,
      url: siteConfig.url,
      image: `${siteConfig.url}/images/og-image.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.line1,
        addressLocality: siteConfig.address.locality,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.countryCode,
      },
    },
    areaServed: siteConfig.districts.map((districtName) => ({
      "@type": "AdministrativeArea",
      name: `${districtName} District, Kerala`,
    })),
    description:
      "Engineered on-grid, off-grid, and hybrid rooftop solar plant installation and AMC services across all 14 districts in Kerala by Natural Grid LLP.",
  };

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service-installation" },
    { name: "Kerala Service Areas", path: canonicalPath },
  ];

  return (
    <div className="district-directory-page">
      <SeoHead
        title="Solar Installation in Kerala | All 14 Districts Service Coverage"
        description="Engineered rooftop solar installation across all 14 Kerala districts by Natural Grid LLP. On-grid solar, KSEB net metering, PM Surya Ghar subsidy, and rapid 24-48h AMC maintenance."
        keywords="solar installation Kerala, solar company Kerala, rooftop solar Kerala 14 districts, KSEB solar net metering, solar subsidy Kerala, solar panel dealers Kerala"
        canonicalPath={canonicalPath}
        breadcrumbs={breadcrumbs}
        schema={[serviceSchema]}
      />

      {/* ============ BREADCRUMBS ============ */}
      <nav className="district-breadcrumbs" aria-label="Breadcrumb">
        <div className="district-container">
          <ol className="breadcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to="/service-installation">Services</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">
              <span>Kerala Service Areas (14 Districts)</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* ============ HERO SECTION ============ */}
      <header className="directory-hero">
        <div className="district-container">
          <div className="district-hero-badge">
            <span className="district-badge-dot" />
            <span>Statewide Service Network • All 14 Districts</span>
          </div>

          <h1 className="directory-hero-title">
            Rooftop Solar Installation Across All 14 Kerala Districts
          </h1>

          <p className="directory-hero-subtext">
            Headquartered in Sulthan Bathery, Wayanad, Natural Grid LLP provides
            turnkey on-grid, off-grid, and hybrid solar installations for homes,
            commercial complexes, and institutions across Kerala. Every
            installation is customized to regional wind, humidity, and roof
            structures with complete KSEB net-metering liaison and lifetime
            AMC support.
          </p>

          <div className="directory-hero-actions">
            <Link
              to="/contact"
              className="district-btn district-btn--primary"
            >
              <span>Get a Free Quote</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              to="/calculator"
              className="district-btn district-btn--ghost"
            >
              <span>Savings Calculator</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ============ STATEWIDE METRICS STRIP ============ */}
      <section className="district-profile-bar" aria-label="Statewide Metrics">
        <div className="district-container district-profile-grid">
          <div className="district-profile-card">
            <span className="profile-card-label">Districts Covered</span>
            <strong className="profile-card-val">14 of 14</strong>
            <span className="profile-card-desc">Statewide service teams</span>
          </div>

          <div className="district-profile-card">
            <span className="profile-card-label">KSEB Liaison</span>
            <strong className="profile-card-val">100% Approved</strong>
            <span className="profile-card-desc">Bi-directional net metering</span>
          </div>

          <div className="district-profile-card">
            <span className="profile-card-label">Central Subsidy</span>
            <strong className="profile-card-val">Up to ₹78,000</strong>
            <span className="profile-card-desc">PM Surya Ghar Yojana</span>
          </div>

          <div className="district-profile-card">
            <span className="profile-card-label">Service Response</span>
            <strong className="profile-card-val">24–48 Hours</strong>
            <span className="profile-card-desc">On-site breakdown dispatch</span>
          </div>
        </div>
      </section>

      {/* ============ COVERAGE GRID ============ */}
      <div className="district-container directory-grid-wrapper">
        <KeralaCoverageGrid
          showTabs={true}
          title="Select Your District"
          subtitle="Click on any district to explore localized solar irradiance, verified installations, KSEB circle compliance, and contact our regional engineers."
        />
      </div>

      {/* ============ REGIONAL CLIMATE ENGINEERING STRATEGY ============ */}
      <section className="directory-climate-section">
        <div className="district-container">
          <div className="district-sec-head">
            <span className="district-sec-num">01 / Engineering Standards</span>
            <h2 className="panel-section-title">
              Why Kerala Rooftops Require District-Specific Solar Engineering
            </h2>
          </div>

          <div className="directory-climate-grid">
            <div className="directory-climate-card">
              <div className="climate-card-num">A</div>
              <h3>Coastal Corridors</h3>
              <p className="climate-card-districts">
                Alappuzha • Kollam • Ernakulam • Kozhikode • Kannur • Kasaragod
              </p>
              <p className="climate-card-text">
                Saline atmospheric moisture accelerates galvanic corrosion on standard steel frames.
                We engineer all coastal installations with marine-grade SS316 fasteners,
                anodized structural aluminum or hot-dip galvanized (HDG &gt; 80 microns)
                mounts, and IP66/IP68 sealed DC isolators.
              </p>
            </div>

            <div className="directory-climate-card">
              <div className="climate-card-num">B</div>
              <h3>Western Ghats &amp; Highland Hills</h3>
              <p className="climate-card-districts">
                Wayanad (HQ) • Idukki • Pathanamthitta
              </p>
              <p className="climate-card-text">
                High-altitude topography faces prolonged south-west and north-east monsoon
                downpours with gusty winds exceeding 140 km/h. Our structures use triangular
                braced trusses, multi-point chemical anchoring into RCC slabs, and high-tilt
                orientations for self-cleaning runoff.
              </p>
            </div>

            <div className="directory-climate-card">
              <div className="climate-card-num">C</div>
              <h3>Central &amp; Inland Plains</h3>
              <p className="climate-card-districts">
                Thrissur • Palakkad • Malappuram • Kottayam • Thiruvananthapuram
              </p>
              <p className="climate-card-text">
                Intense sunshine and high ambient daytime temperatures demand panels with low
                temperature coefficients (such as N-Type TOPCon and Bifacial mono PERC).
                Elevated rooftop superstructures maximize natural cross-ventilation under the
                modules to preserve peak generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BOTTOM STATEWIDE CONSULTATION CTA ============ */}
      <section className="directory-cta-section">
        <div className="district-container">
          <div className="directory-cta-card">
            <div className="directory-cta-content">
              <span className="directory-cta-badge">Direct District Assistance</span>
              <h2>Ready to Install Solar in Your District?</h2>
              <p>
                Get a customized technical quotation, rooftop layout analysis,
                and exact KSEB net-metering savings estimate prepared by our
                district engineers.
              </p>
            </div>
            <div className="directory-cta-actions">
              <Link
                to="/contact"
                className="district-btn district-btn--primary"
              >
                <span>Request Free Site Survey</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="district-btn district-btn--ghost"
              >
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

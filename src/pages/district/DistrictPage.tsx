import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getDistrictBySlug, KERALA_DISTRICTS } from "@/data/districts";
import { SeoHead } from "@/components/common/SeoHead";
import { Accordion } from "@/components/common/Accordion";
import { siteConfig } from "@/config/site";

export const DistrictPage: React.FC = () => {
  const { districtSlug } = useParams<{ districtSlug: string }>();
  const district = districtSlug ? getDistrictBySlug(districtSlug) : undefined;

  if (!district) {
    return <Navigate to="/404" replace />;
  }

  const canonicalPath = `/solar-installation/${district.slug}`;

  // Build JSON-LD structured data: Service, LocalBusiness with areaServed, and FAQPage
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Rooftop Solar Installation in ${district.name}`,
    serviceType: "Solar Power Plant Installation & AMC",
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
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${district.name} District, Kerala`,
    },
    description: district.metaDescription,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: district.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Kerala Service Areas", path: "/solar-installation" },
    { name: district.name, path: canonicalPath },
  ];

  const accordionItems = district.faqs.map((faq, idx) => ({
    id: `faq-${district.slug}-${idx}`,
    title: faq.question,
    content: faq.answer,
  }));

  const nearbyList = district.nearbyDistricts
    .map((slug) => getDistrictBySlug(slug))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  return (
    <div className="district-page">
      <SeoHead
        title={district.title}
        description={district.metaDescription}
        keywords={district.keywords}
        canonicalPath={canonicalPath}
        breadcrumbs={breadcrumbs}
        schema={[serviceSchema, faqSchema]}
      />

      {/* ============ BREADCRUMB NAVIGATION ============ */}
      <nav className="district-breadcrumbs" aria-label="Breadcrumb">
        <div className="district-container">
          <ol className="breadcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to="/solar-installation">Kerala Service Areas</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">
              <span>{district.name}</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* ============ HERO SECTION (EDITORIAL 2-COLUMN) ============ */}
      <header className="district-hero">
        <div className="district-container">
          <div className="district-hero-grid">
            <div className="district-hero-main">
              <div className="district-hero-badge">
                <span className="district-badge-dot" />
                <span>
                  {district.region} • {district.malayalamName}
                </span>
              </div>

              <h1 className="district-hero-title">{district.heroHeadline}</h1>

              <p className="district-hero-subtext">{district.heroSubtext}</p>

              <div className="district-hero-actions">
                <Link
                  to={`/contact?district=${encodeURIComponent(district.name)}`}
                  className="district-btn district-btn--primary"
                >
                  <span>Get Free Quote for {district.name}</span>
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
                <a href="#projects" className="district-btn district-btn--ghost">
                  <span>View Completed Projects</span>
                </a>
              </div>

              <div className="district-hero-trust" aria-label="Key Service Guarantees">
                <span className="hero-trust-item">
                  <span className="trust-check">✓</span> 100% KSEB Net Metering
                </span>
                <span className="hero-trust-item">
                  <span className="trust-check">✓</span> 24–48h On-Site Dispatch
                </span>
                <span className="hero-trust-item">
                  <span className="trust-check">✓</span> PM Surya Ghar Subsidy
                </span>
              </div>
            </div>

            {/* Local District Solar Profile Quick Card */}
            <aside className="district-hero-card" aria-label="District Technical Summary">
              <div className="hero-card-header">
                <span className="hero-card-eyebrow">DISTRICT PROFILE</span>
                <h2 className="hero-card-title">{district.name} Solar Specs</h2>
              </div>

              <div className="hero-card-specs">
                <div className="hero-spec-row">
                  <span className="spec-label">Daily Irradiance:</span>
                  <span className="spec-value">{district.solarProfile.avgSunHours}</span>
                </div>
                <div className="hero-spec-row">
                  <span className="spec-label">Annual Yield / kW:</span>
                  <span className="spec-value">{district.solarProfile.annualGenerationPerKw}</span>
                </div>
                <div className="hero-spec-row">
                  <span className="spec-label">KSEB Circles:</span>
                  <span className="spec-value">{district.ksebCircles.map(c => c.replace(" Electrical Circle", "")).join(", ")}</span>
                </div>
                <div className="hero-spec-row">
                  <span className="spec-label">Climate Spec:</span>
                  <span className="spec-value">{district.solarProfile.monsoonEngineering.split("with")[0].trim()}</span>
                </div>
              </div>

              <div className="hero-card-footer">
                <span className="hero-card-note">Direct District Dispatch</span>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="hero-card-phone"
                  aria-label={`Call Natural Grid at ${siteConfig.phoneDisplay}`}
                >
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </header>

      {/* ============ SOLAR TECHNICAL PROFILE BAR ============ */}
      <section className="district-profile-bar" aria-label="Solar Metrics">
        <div className="district-container district-profile-grid">
          <div className="district-profile-card">
            <span className="profile-card-label">Daily Solar Irradiance</span>
            <strong className="profile-card-val">
              {district.solarProfile.avgSunHours}
            </strong>
            <span className="profile-card-desc">
              Annualized sunshine hours
            </span>
          </div>

          <div className="district-profile-card">
            <span className="profile-card-label">Generation per kW</span>
            <strong className="profile-card-val">
              {district.solarProfile.annualGenerationPerKw}
            </strong>
            <span className="profile-card-desc">
              Clean solar units / year
            </span>
          </div>

          <div className="district-profile-card">
            <span className="profile-card-label">Central Subsidy</span>
            <strong className="profile-card-val">Up to ₹78,000</strong>
            <span className="profile-card-desc">
              PM Surya Ghar Yojana
            </span>
          </div>

          <div className="district-profile-card">
            <span className="profile-card-label">Net Metering</span>
            <strong className="profile-card-val">100% KSEB</strong>
            <span className="profile-card-desc">Direct bi-directional credit</span>
          </div>
        </div>
      </section>

      {/* ============ IN-DEPTH DISTRICT OVERVIEW ============ */}
      <section className="district-content-section">
        <div className="district-container district-layout">
          <div className="district-main-col">
            <h2 className="district-heading">
              Solar Power Plant Installation &amp; Service in {district.name}
            </h2>

            <div className="district-prose">
              {district.overview.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Engineering Highlights */}
            <div className="district-spec-box">
              <h3 className="spec-box-title">
                Engineered for {district.name}&apos;s Climate &amp; Rooftops
              </h3>
              <div className="spec-box-grid">
                <div className="spec-item">
                  <strong>Roof Compatibility:</strong>
                  <span>{district.solarProfile.roofSuitability}</span>
                </div>
                <div className="spec-item">
                  <strong>Monsoon Engineering:</strong>
                  <span>{district.solarProfile.monsoonEngineering}</span>
                </div>
                <div className="spec-item">
                  <strong>KSEB Electrical Circles:</strong>
                  <span>{district.ksebCircles.join(", ")}</span>
                </div>
              </div>
            </div>

            {/* Localities Covered */}
            <div className="district-towns-box">
              <h3 className="spec-box-title">
                Service Coverage Across {district.name}
              </h3>
              <p className="spec-box-text">
                Our district engineering crews provide on-site technical survey,
                custom solar design, KSEB net-metering liaison, and prompt AMC
                service across all major towns and rural centers:
              </p>
              <ul className="town-tags">
                {district.majorTowns.map((town, idx) => (
                  <li key={idx} className="town-tag">
                    {town}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Consultation Aside */}
          <aside className="district-aside">
            <div className="district-aside-card">
              <h3 className="aside-title">Switch to Solar in {district.name}</h3>
              <p className="aside-text">
                Schedule a site visit by a real technician. We inspect your roof,
                analyze your KSEB bill, and issue a transparent written quote.
              </p>
              <div className="aside-contact-list">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="aside-contact-link"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
                <a
                  href={`https://wa.me/919072634443?text=${encodeURIComponent(
                    `Hi Natural Grid, I'm interested in rooftop solar installation in ${district.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aside-contact-link"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
              <Link
                to={`/contact?district=${encodeURIComponent(district.name)}`}
                className="aside-quote-btn"
              >
                <span>Request Written Quotation</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* ============ FEATURED PROJECTS IN / NEAR THIS DISTRICT ============ */}
      <section className="district-projects-section" id="projects">
        <div className="district-container">
          <p className="eyebrow section-label">Verified Solar Engineering</p>
          <h2 className="district-heading">
            Completed Solar Projects in &amp; Around {district.name}
          </h2>
          <p className="section-text">
            Natural Grid delivers robust solar installations engineered for
            long-term reliability and compliant with all KSEB net-metering
            standards:
          </p>

          <div className="district-projects-grid">
            {district.featuredProjects.map((project, idx) => (
              <article key={idx} className="district-project-card">
                <div className="project-card-media">
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    width={800}
                    height={500}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="project-badge">{project.type}</span>
                </div>
                <div className="project-card-body">
                  <span className="project-location">{project.location}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FREQUENTLY ASKED QUESTIONS ============ */}
      <section className="district-faq-section">
        <div className="district-container">
          <p className="eyebrow section-label">Common Queries</p>
          <h2 className="district-heading">
            Solar Installation FAQs for {district.name}
          </h2>
          <p className="section-text">
            Frequently asked questions about rooftop solar feasibility, KSEB net
            metering, subsidies, and maintenance in {district.name} district:
          </p>

          <div className="district-faq-accordion">
            <Accordion
              name={`faq-${district.slug}`}
              items={accordionItems}
            />
          </div>
        </div>
      </section>

      {/* ============ NEARBY DISTRICTS & SITEMAP INTERNAL LINKS ============ */}
      <section className="district-nearby-section">
        <div className="district-container">
          <p className="eyebrow section-label">Regional Coverage</p>
          <h2 className="district-subheading">
            Solar Installation in Neighboring Districts
          </h2>
          <div className="nearby-districts-grid">
            {nearbyList.map((nearby) => (
              <Link
                key={nearby.id}
                to={`/solar-installation/${nearby.slug}`}
                className="nearby-district-card"
              >
                <strong>{nearby.name}</strong>
                <span>
                  {nearby.malayalamName} • {nearby.region}
                </span>
                <span className="nearby-arrow">→</span>
              </Link>
            ))}
          </div>

          <div className="district-all-links">
            <p className="district-all-label">
              All 14 Kerala District Service Portals:
            </p>
            <div className="district-pill-cloud">
              {KERALA_DISTRICTS.map((d) => (
                <Link
                  key={d.id}
                  to={`/solar-installation/${d.slug}`}
                  className={`district-pill ${
                    d.slug === district.slug ? "is-current" : ""
                  }`}
                >
                  {d.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

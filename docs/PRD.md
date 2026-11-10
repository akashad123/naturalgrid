# Website Product Requirements Document (PRD)

Status: Discovery Complete — Pending Technology Stack Confirmation

## Website Overview
- **Name:** Natural Grid LLP
- **Tagline:** Future with renewable
- **Brand Domain:** naturalgrid.in
- **Purpose:** Provide a modern, trustworthy, high-performance web presence for Natural Grid LLP, a Kerala-based solar installation and service provider with district-level support teams across all 14 districts. The site presents service offerings, educates customers on PM Surya Ghar subsidies and solar savings, showcases past installations with an interactive photo lightbox, provides a dynamic KSEB bill savings calculator, and drives enquiries via Web3Forms and direct phone/WhatsApp calling.
- **Target Audience:**
  - Residential homeowners looking for rooftop solar installations, battery backup/hybrid inverters, and PM Surya Ghar government subsidies.
  - Commercial and institutional property owners looking to reduce high monthly KSEB energy bills.
  - Existing solar plant owners requiring maintenance, cleaning, solar water heater servicing, and Annual Maintenance Contracts (AMC).
- **Primary User Actions:**
  - Calculate solar system requirements (kW) and annual electricity bill savings (₹) using the interactive savings calculator.
  - Learn about key services: Rooftop Solar Installation, Battery Backup & Hybrid Systems, Solar Maintenance & AMC, PM Surya Ghar Subsidy Assistance, Solar Water Heaters.
  - View real-world installation photos and site details in the gallery with modal lightbox view.
  - Submit enquiry/contact form with auto-formatted 10-digit mobile number.
  - Direct one-click phone call (`tel:+919072634443`) and WhatsApp enquiry.
  - Access social media profiles (Facebook, Instagram, LinkedIn, YouTube).

---

## Goals & Non-Goals

### Goals:
- Migrate existing static multi-page HTML/CSS/JS site to React without altering any visual design, typography, brand colors, spacing, animations, or responsive behavior.
- Preserve 100% of existing functionality: KSEB calculator math & UI, Web3Forms contact form submission with phone normalization, gallery lightbox modal, about slider, hero background video swap with poster fallback, sticky navigation, and scroll animations.
- Implement client-side routing (with SEO-friendly URLs matching existing paths/slugs: `/`, `/about`, `/services/*`, `/calculator`, `/gallery`, `/contact`, `/404`).
- Maintain excellent accessibility (WCAG AA color contrast, ARIA landmarks, dialog focus trap, keyboard navigation, reduced-motion fallbacks).
- Maintain SEO readiness (clean meta tags per route, Open Graph, Twitter cards, LocalBusiness schema JSON-LD, sitemap, robots.txt).
- Production-ready Vite build deployed cleanly to Vercel with strict CSP and caching headers.

### Non-Goals:
- No custom backend server or database (this is strictly a frontend-only project).
- No new unapproved third-party analytics, tracking scripts, or external dependencies.
- No redesign or arbitrary styling alterations away from the existing aesthetic.
- No fabrication of reviews, customer logos, testimonials, or legal claims.

---

## Pages and Routes

| Page | Route | Purpose | Primary Content / Actions | SEO Indexable? | Status |
|---|---|---|---|---|---|
| **Home** | `/` | Brand introduction & value proposition | Hero video/poster, key metrics (14 districts, 8+ yrs, 100% compliance), 5 core services, how it works process, calculator teaser, featured projects, trust marquee, footer | Yes | Existing Static (Pending React Migration) |
| **About Us** | `/about` | Company background & service philosophy | Company journey, mission & values, "Care after installation" 4-phase interactive slider, team & district technician network | Yes | Existing Static (Pending React Migration) |
| **Solar Calculator** | `/calculator` | Solar system sizing and annual bill savings estimator | Dual-input (number input + range slider), property toggle (Residential: 60-day KSEB cycle vs Commercial: 30-day cycle), live system size (kW) & savings (₹) outputs, CTA to contact | Yes | Existing Static (Pending React Migration) |
| **Projects Gallery** | `/gallery` | Showcase of completed Kerala installations | Responsive image grid, project details (Sulthan Bathery, Pariyaram, etc.), full-screen `<dialog>` lightbox with keyboard navigation | Yes | Existing Static (Pending React Migration) |
| **Rooftop Installation** | `/service-installation` | Service detail page | Residential & commercial rooftop solar details, engineering process, Tier-1 components | Yes | Existing Static (Pending React Migration) |
| **Solar Maintenance & AMC** | `/service-amc` | Service detail page | Comprehensive solar health checks, panel cleaning, inverter diagnostics, repair services across all 14 districts | Yes | Existing Static (Pending React Migration) |
| **Battery Backup Systems** | `/service-battery-backup` | Service detail page | Hybrid inverter systems, lithium-ion battery integration, power outage protection | Yes | Existing Static (Pending React Migration) |
| **PM Surya Ghar Subsidy** | `/service-subsidy` | Service detail page | Government subsidy breakdown (up to ₹78,000 for 3kW), KSEB net metering assistance, paperwork guidance | Yes | Existing Static (Pending React Migration) |
| **Solar Water Heaters** | `/service-water-heater` | Service detail page | Solar thermal water heating systems for homes, hotels, and hospitals | Yes | Existing Static (Pending React Migration) |
| **Contact Us** | `/contact` | Lead generation & direct communication | Office address (Anugraha Complex, Sulthan Bathery, Wayanad), phone, email, Google Maps embed, Web3Forms enquiry form | Yes | Existing Static (Pending React Migration) |
| **404 Not Found** | `/404` (and catch-all) | Error recovery | Branded 404 error message with return link to home | No (`noindex`) | Existing Static (Pending React Migration) |

---

## Functional Requirements

| ID | Requirement | Priority | Acceptance Criteria |
|---|---|---|---|
| **FR-01** | **Solar Savings Calculator Logic** | High | System size kW = `averageUnits / (billingDays * 3.5)`; Annual savings ₹ = `(averageUnits / billingDays) * 30 * 8 * 12`. Residential billing days = 60; Commercial = 30. Unit tests in `tests/calculator.test.js` pass with identical math. |
| **FR-02** | **Solar Savings Calculator UI** | High | Input and range slider synchronized; Enter triggers calculation; Residential/Commercial toggle updates billing hint; results pop animation; dimming when stale. |
| **FR-03** | **Phone Number Normalization** | High | Clean Indian numbers to 10 digits (`[6-9]\d{9}`). Handles `+91`, `91`, leading `0`, spaces, dashes, brackets. Unit tests in `tests/phone.test.js` pass. |
| **FR-04** | **Contact Form Submission** | High | Web3Forms integration (`POST https://api.web3forms.com/submit`); client-side validation for required fields, email format, and valid normalized phone number; inline error messages (`aria-invalid`, `aria-describedby`); sending state; success & error messages; form reset on success. |
| **FR-05** | **Navigation & Mobile Drawer** | High | Floating top bar and sticky site header; sticky flip when scrolled > 24px (`is-stuck`); desktop dropdown menu on hover/focus; mobile hamburger toggle (`aria-expanded`) and accordion-style Services submenu; close on link selection. |
| **FR-06** | **Gallery Lightbox** | High | Native accessible dialog/modal; image preview with full-size load; next/previous buttons; arrow key navigation; Esc key and backdrop click dismiss; page scroll lock during open modal. |
| **FR-07** | **About Page Energy Slider** | Medium | Interactive 4-card slider with background image cross-fade; next/prev buttons; circular navigation. |
| **FR-08** | **Hero Video Progressive Enhancement** | Medium | Auto-selects desktop/mobile WebM video based on 768px viewport breakpoint; respects `prefers-reduced-motion` and `saveData`/`2g`; smooth transition from poster picture to playing video. |
| **FR-09** | **Scroll Animations & Motion Layer** | Medium | Split-word rising animation on page titles; IntersectionObserver card reveal and number counting; card sheen mousemove effect; top scroll progress bar. |
| **FR-10** | **SEO & Social Sharing Metadata** | High | Unique `<title>`, `<meta name="description">`, canonical URL, Open Graph tags, Twitter Card tags, and Schema.org `LocalBusiness` JSON-LD on all pages. |

---

## Content & Assets
- **Logo:** `images/logo.webp` + SVG wordmark (`NaturalGrid` + "Future with renewable").
- **Images:** High-efficiency WebP images with 800w and 1600w variants (`images/*.webp`), and hero video (`images/hero/hero-desktop.webm`, `images/hero/hero-mobile.webm`).
- **Social links:**
  - Facebook: `https://www.facebook.com/profile.php?id=61584992191296`
  - Instagram: `https://www.instagram.com/natural_grid/`
  - LinkedIn: `https://www.linkedin.com/company/naturalgrid-llp/`
  - YouTube: `https://www.youtube.com/@NaturalGrid`
- **Contact:**
  - Phone: `+91 90726 34443`
  - Email: `info@naturalgrid.in`
  - Office: Anugraha Complex, Near KSFE, Sulthan Bathery, Wayanad, Kerala - 673592

---

## Open Questions & Assumptions
- **Q1:** Frontend framework confirmation: React + Vite (recommended). TypeScript vs JavaScript?
- **Q2:** Styling confirmation: Retain existing centralized CSS tokens (`css/style.css`) or migrate to Tailwind CSS?
- **Q3:** Animation preference: Native CSS / lightweight JS observers (matching existing implementation) or Framer Motion?
- **Q4:** Client-side routing: React Router (v6/v7) for seamless single-page navigation with browser history and scroll restoration?
- **Q5:** Hosting target: Confirm Vercel deployment with current `vercel.json` security headers and caching configuration.

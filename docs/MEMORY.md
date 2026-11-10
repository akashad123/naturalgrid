# Project Memory and Developer Handover

Last updated: Phase 0 Discovery Complete (Waiting for Tech Confirmation)

## Current Status
- **Current Phase:** Phase 0 — Discovery & Tech Confirmation
- **Overall Status:** Existing static project unpacked, thoroughly analyzed, and unit tests verified (21/21 passing). Git repo initialized. PRD and Phases documented. Ready for tech confirmation before React scaffold.

## Pages / Modules Overview (Existing vs Target)
- Total Pages: 11 pages (`index.html`, `about.html`, `calculator.html`, `gallery.html`, `contact.html`, `service-installation.html`, `service-amc.html`, `service-battery-backup.html`, `service-subsidy.html`, `service-water-heater.html`, `404.html`)
- Pure Modules: `js/calculator.js`, `js/phone.js` (tested via `tests/calculator.test.js`, `tests/phone.test.js`)
- Interactive UI Scripts: `js/nav.js`, `js/hero-video.js`, `js/about-slider.js`, `js/gallery.js`, `js/calculator-page.js`, `js/contact-form.js`, `js/motion.js`
- Styles: `css/style.css` (3,890 lines, CSS variables design system)
- Assets: WebP images (800w / 1600w), WebM hero videos (desktop / mobile), icons and favicon suite

## Key Implementation Map
- **Routes to establish:**
  - `/` (Home)
  - `/about` (About Us)
  - `/calculator` (Solar Savings Calculator)
  - `/gallery` (Completed Projects)
  - `/service-installation` (Rooftop Solar Installation)
  - `/service-amc` (Solar Maintenance & AMC)
  - `/service-battery-backup` (Battery Backup Systems)
  - `/service-subsidy` (PM Surya Ghar Subsidy Assistance)
  - `/service-water-heater` (Solar Water Heaters)
  - `/contact` (Contact Us)
  - `*` (404 Not Found)
- **Shared Components to build:**
  - `TopBar`: Contact links & social links
  - `SiteHeader`: Sticky nav, logo wordmark, desktop dropdown, mobile drawer
  - `SiteFooter`: Coverage districts, quick links, contact info, copyright
  - `PageHero`: Standard banner for inner pages with breadcrumbs & CTAs
  - `Calculator`: Solar calculation engine and interactive controls
  - `ContactForm`: Validated form with Web3Forms integration
  - `LightboxModal`: Native `<dialog>` image viewer with keyboard navigation
  - `HeroVideo`: High-performance background video switcher with poster fallback
  - `EnergySlider`: Interactive 4-phase slider
  - `StatsGrid` / `StatCard`: Animated counters with cursor sheen
  - `SeoHead`: Metadata, Open Graph, Twitter cards, and JSON-LD structured data

## Confirmed Technical Decisions
- **Source of Truth:** Existing static site copy, layout, design tokens, and interactions.
- **Backend Scope:** Frontend-only (static / SPA with client-side routing; no backend or database).
- **Submissions:** Direct client-side POST to Web3Forms API.
- **Pending Confirmation:**
  - Build Tool & Framework: React 18/19 + Vite
  - Language: TypeScript (recommended for maintainability & type safety) vs JavaScript
  - Styling System: Preserve existing centralized CSS tokens (`css/style.css` / CSS Modules) or Tailwind CSS
  - Motion: Native CSS/Observers (current) vs Framer Motion
  - Routing: React Router v6/v7

## Content and Asset Status
- **Approved Assets:** All existing WebP images, WebM videos, favicons, copy, and legal info present in repo.
- **External Dependencies:** Google Fonts (`Fraunces`, `Inter`, `Inter Tight`, `Anek Malayalam`), Google Maps embed, Web3Forms API.

## Verification Performed
- `node --test`: 21 tests passed (100% pass rate on calculator logic and phone normalization).
- Inspection of all 11 HTML templates, 9 JS files, CSS tokens, and `vercel.json` configuration.

## Git State
- **Branch:** `master`
- **Initial Status:** Git repository initialized; `.gitignore` added.
- **Last Commit:** Pending initial baseline commit.
- **Remote:** None currently configured.

## Next Exact Step
1. Present discovery report and ask user to confirm technology stack choices (React + Vite, TypeScript/JavaScript, Styling, Animation).
2. Upon user confirmation, commit the baseline and scaffold the React structure incrementally.

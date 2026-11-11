# Project Memory and Developer Handover

Last updated: React + TypeScript Migration Complete

## Current Status
- **Current Phase:** Phase 5 — QA, Verification & Handover (Verified & Complete)
- **Overall Status:** Migration and post-migration parity audit from static multi-page site to React + Vite + TypeScript are complete and verified. Fixed Tailwind Preflight CSS cascade order (`tailwind-base.css` -> `legacy.css` -> `index.css`), restored legacy hero/about/FAQ/service copy parity, added `useScrollReveal` + `noindex` on 404, updated `public/sitemap.xml` to extensionless routes, and verified all 11 routes and 5 interactive flows in headless Chrome at desktop (`1440×900`) and mobile (`390×844`).

## Pages / Modules Completed
- `src/pages/HomePage.tsx`: Exact legacy `.hero-eyebrow`/`.hero-headline`/`.hero-headline-accent`/`.hero-text`/`.hero-btn--solid` hero, 4-feature bar, metrics, short-titled services list, 4-step process, project cards, features accordion, and 4-set brand marquee (`TrustMarquee.tsx`).
- `src/pages/AboutPage.tsx`: `.journey` (`About our journey` badge, KSS collaboration copy, CTA), `.stats-row` (`14`, `24h`, `24–48h`, `8+` with `useCounter` on numeric stats), `.process` (`How We Work` 5-step list), interactive 3-card `EnergySlider`, `.precision` (`Our Vision`), brand marquee.
- `src/pages/CalculatorPage.tsx`: Dedicated calculator page with live sync slider/input, residential/commercial mode, results pop animation, stale state dimming, and all 5 FAQ accordions.
- `src/pages/GalleryPage.tsx`: Grid of 6 project installations with native accessible `<dialog>` lightbox modal, keyboard navigation (Esc, ArrowLeft, ArrowRight), and clean `body.style.overflow` cleanup.
- `src/pages/service/ServiceInstallationPage.tsx`: Solar Power Plant Installation service details, 3 steps, system types, assessment, commissioning, FAQs.
- `src/pages/service/ServiceBatteryPage.tsx`: Battery Backup & Grid Systems service details, 3 steps, off-grid/hybrid features, FAQs.
- `src/pages/service/ServiceAmcPage.tsx`: Annual Maintenance Contracts (AMC) details, 3 steps, coverage list, commitment, FAQs.
- `src/pages/service/ServiceSubsidyPage.tsx`: Solar Subsidy & Net Metering details, 3 steps, factors, documents needed, FAQs.
- `src/pages/service/ServiceWaterHeaterPage.tsx`: Solar Water Heaters details, 3 steps, ETC/FPC collector types, FAQs.
- `src/pages/ContactPage.tsx`: Address, phone, email, WhatsApp, Web3Forms integration, exact `Naturalgrid` Google Maps embed (`siteConfig.address.googleMapsEmbedUrl`), and all 5 FAQs.
- `src/pages/NotFoundPage.tsx`: Branded 404 error page with return link and `<meta name="robots" content="noindex" />`.

## Key Implementation Map
- **Routes:**
  - `/` (Home)
  - `/about` (About Us)
  - `/calculator` (Solar Savings Calculator)
  - `/gallery` (Completed Projects)
  - `/service-installation` (Solar Power Plant Installation)
  - `/service-battery-backup` (Battery Backup & Hybrid Systems)
  - `/service-amc` (Annual Maintenance (AMC))
  - `/service-subsidy` (Solar Subsidy & Net Metering)
  - `/service-water-heater` (Solar Water Heaters)
  - `/contact` (Contact Us)
  - `*` (404 Not Found with `noindex`)
  - Backward compatibility redirects from all `*.html` paths to clean extensionless paths (`public/sitemap.xml` uses extensionless URLs).
- **Shared Components & Styles:**
  - `src/main.tsx`: Imports `src/styles/tailwind-base.css` -> `src/styles/legacy.css` -> `src/styles/index.css` so Tailwind Preflight never overrides `legacy.css`.
  - `Layout`: Stitches `ScrollProgress`, `TopBar`, `SiteHeader`, `<Outlet />`, `FloatingActions`, `SiteFooter`, and runs `useScrollReveal(location.pathname)`.
  - `SeoHead`: Dynamic document title, meta description, canonical URL, and per-route `noindex` meta lifecycle management.
  - `PageHero`: Standard inner page hero banner with word-by-word rising title animation (`split-title` / `title-word`).
  - `SolarCalculator`: Pure logic calculation with dual-input synchronization.
  - `ContactForm`: Inline validated form with 10-digit phone normalization and Web3Forms submission.
  - `GalleryModal`: Native accessible `<dialog>` image viewer with keyboard navigation and cleanup.
  - `EnergySlider`: Interactive 3-card slider with background photo cross-fading.
  - `HeroVideo`: High-performance background video switcher with poster fallback and reduced-motion detection.
- **Configuration & Utilities:**
  - `src/config/site.ts`: Centralized brand metadata, contacts, social links, ordered `services` array (with `title`, `shortTitle`, `footerTitle`), `districts` array, and exact Google Maps embed URL.
  - `src/hooks/useScrollReveal.ts`: Ken Burns hero drift, staggered `[data-reveal]` observer, and pointer-device `.has-sheen` card effect with `prefers-reduced-motion` guard.
  - `src/utils/calculator.ts`: Pure solar calculation logic.
  - `src/utils/phone.ts`: Indian phone normalizer.
  - `src/utils/formatters.ts`: INR currency and kW formatters.

## Confirmed Technical Decisions
- **Stack:** React 18 + Vite + TypeScript.
- **Styling:** Tailwind CSS mapped to existing tokens, strict `tailwind-base.css` -> `legacy.css` -> `index.css` cascade, and sharp edges (`border-radius: 0 !important`) per user global rule.
- **Animations:** Native CSS transitions, keyframes, and IntersectionObserver hooks (`useScrollReveal`, `useStickyHeader`, `useScrollProgress`, `useSheen`, `useCounter`, `useReducedMotion`).
- **Form Submissions:** Direct client-side POST to Web3Forms API.
- **Hosting:** Vercel deployment with strict Content-Security-Policy headers and SPA rewrite rules in `vercel.json`.

## Verification Performed
1. `npm test` (`node --test --experimental-strip-types`):
   - 28 / 28 tests passing (pure calculation math and Indian phone number normalization across JS + TS).
2. `npm run build` (`tsc && vite build`):
   - Zero TypeScript or Vite errors.
   - Output bundle: `dist/index.html` 4.27 kB (gzip 1.52 kB), `dist/assets/index-zbdzGyQJ.css` 59.69 kB (gzip 12.46 kB), `dist/assets/index-CJVdVXpW.js` 271.66 kB (gzip 79.67 kB).
   - Verified CSS cascade order in built CSS (`preflight` at offset 0 before `.topbar` at 5876 and `.float-contact` at 49003).
3. Headless Chrome (`vite preview --port 4173`) audit:
   - Tested all 11 routes at `1440×900` (desktop) and `390×844` (mobile): 0 console errors, 0 page exceptions, 0 failed asset requests, `0px` horizontal overflow, sharp `0px` radius, single `<h1>` per route, `noindex` restricted to 404.
   - Verified calculator (`300` units -> `1.4` kW / `₹14,400` Residential; `2.9` kW / `₹28,800` Commercial), gallery lightbox open/next/close + overflow reset, about slider slide switch, contact invalid phone validation message + map embed, and mobile drawer/submenu open & route-change close.

## Git State
- **Branch:** `master`
- **Previous Commit:** `7b65f40`
- **Remote Status:** Local Git repository only (no remote upstream configured yet).

## Next Exact Step
1. Configure a Git remote (`git remote add origin <url>`) and push `master` when ready to deploy to Vercel.

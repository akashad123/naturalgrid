# Project Memory and Developer Handover

Last updated: Landing Hero Cleanup Complete

## Current Status
- **Current Phase:** Phase 5 — QA, Verification & Handover (Hero Simplified, Pre-rendered, Verified)
- **Overall Status:** Migration, UI/copy parity, landing hero cleanup, repository cleanup, dynamic OG/Twitter SEO, build-time SSR prerendering (`src/entry-server.tsx` + `scripts/prerender.mjs`), and Vercel clean-URL configuration are complete. On `/` only, `<TopBar />`, `.hero-eyebrow`, `.hero-trust`, and `.hero-featurebar` have been removed per user request while keeping inner-page `<TopBar />` and `/` footer contacts intact.

## Pages / Modules Completed
- `src/pages/HomePage.tsx`: Hero with background photo/video, `.hero-headline`, `.hero-headline-accent`, `.hero-text`, and `.hero-actions` (`Get a Free Quote`, `Our Services`), plus metrics, short-titled services list, 4-step process, project cards, features accordion, and 4-set brand marquee (`TrustMarquee.tsx`). Removed `.hero-eyebrow`, `.hero-trust`, and `.hero-featurebar`.
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
  - `src/main.tsx`: Imports `src/styles/tailwind-base.css` -> `src/styles/legacy.css` -> `src/styles/index.css` so Tailwind Preflight never overrides `legacy.css`; uses `hydrateRoot` when `data-ssr-route` matches `window.location.pathname` and `createRoot` otherwise.
  - `src/entry-server.tsx` & `scripts/prerender.mjs`: Build-time SSR renderer (`StaticRouter` + `SeoCollectorProvider`) outputting prerendered `dist/*.html` for all 10 public routes and `dist/404.html` (`noindex`).
  - `Layout`: Stitches `ScrollProgress`, `TopBar` (rendered on inner routes, omitted on `/` / `/index.html`), `SiteHeader` (flush at `top: 0` on `/` via `body:not(:has(.topbar))`), `<Outlet />`, `FloatingActions`, `SiteFooter`, and runs `useScrollReveal(location.pathname)`.
  - `SeoHead` & `src/utils/seo.ts`: Shared resolver and DOM/SSR updater for `<title>`, `description`, `keywords`, `og:*`, `twitter:*`, `canonical`, and `noindex`.
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
- **Hosting:** Vercel static deployment with `cleanUrls: true`, `trailingSlash: false`, strict Content-Security-Policy headers, and immutable asset cache headers in `vercel.json` (plus updated `.vercelignore` and `README.md`).

## Verification Performed
1. `npm test` (`node --test --experimental-strip-types`):
   - 25 / 25 tests passing (`tests/calculator.test.js`, `tests/phone.test.js`, `tests/react-utils.test.js` importing `src/utils/calculator.ts`, `src/utils/phone.ts`, `src/utils/formatters.ts`, and `src/utils/seo.ts`).
2. `npm run build` (`tsc && vite build && vite build --ssr ... && node scripts/prerender.mjs`):
   - Zero TypeScript, Vite, or React SSR warnings/errors.
   - Client bundle: `dist/index.html` 4.27 kB (gzip 1.52 kB), `dist/assets/index-CBradGYi.css` 59.72 kB (gzip 12.47 kB), `dist/assets/index-6Oc5FVGq.js` 269.57 kB (gzip 79.67 kB); SSR bundle `.prerender-ssr/entry-server.js` 170.84 kB (cleaned after prerendering 11 HTML files into `dist/`).
3. Headless Chrome (`vite preview --port 4174`) audit:
   - Tested all 11 routes at `1440×900` (desktop) and `390×844` (mobile): 0 console errors, 0 console warnings (clean hydration), 0 page exceptions, 0 failed asset requests, `0px` horizontal overflow (`-15px` delta with vertical scrollbar on desktop, `0px` on mobile), sharp `0px` radius, single `<h1>` per route, `noindex` restricted to 404.
   - Verified `/` hero omits `.topbar`, `.hero-eyebrow`, `.hero-trust`, and `.hero-featurebar` (both DOM and raw prerendered HTML), `.site-header` aligns at `top: 0px`, footer retains contacts on `/`, and `/about` retains `.topbar`.
   - Verified raw prerendered HTTP responses (`/`, `/about.html`, `/calculator.html`, `/404.html`) contain expected SSR metadata/content before JS runs.
   - Verified calculator (`300` units -> `1.4` / `₹14,400` Residential; `2.9` / `₹28,800` Commercial), gallery lightbox open/next/close + overflow reset, about slider slide switch, contact invalid phone validation message + map embed, and mobile drawer/submenu open & route-change close.

## Git State
- **Branch:** `master`
- **Previous Commit:** `929ff96`
- **Remote Status:** Local Git repository only (no remote upstream configured yet).

## Next Exact Step
1. Configure a Git remote (`git remote add origin <url>`), push `master`, configure `VITE_SITE_URL` and `VITE_WEB3FORMS_ACCESS_KEY` in Vercel, and run one live Contact form submission smoke test on the deployed URL.

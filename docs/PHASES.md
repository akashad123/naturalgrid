# Project Phases

Use `NOT STARTED`, `IN PROGRESS`, `BLOCKED`, or `DONE`. Mark work DONE only after acceptance criteria and checks pass.

## Phase 0 — Discovery & Technical Confirmation
- [x] Unpack, verify, and catalog existing codebase (11 HTML pages, CSS tokens, JS modules, tests, assets)
- [x] Run baseline unit tests (`node --test`: 21/21 passing)
- [x] Formulate requirements, PRD, component boundaries, and routing map
- [x] Confirm tech stack: React + Vite, TypeScript, Tailwind CSS with 0-radius sharp edges, lightweight native CSS/IntersectionObserver motion
- [x] Confirm hosting and deployment constraints (Vercel with SPA rewrite rules)

## Phase 1 — Requirements, Architecture & Project Baseline
- [x] PRD completed (`docs/PRD.md`)
- [x] React + Vite + TypeScript project initialized (`package.json`, `tsconfig.json`, `vite.config.ts`)
- [x] Tailwind CSS configured with design tokens & sharp 0px border radius (`tailwind.config.js`, `postcss.config.js`)
- [x] Centralized site configuration (`src/config/site.ts`)
- [x] Environmental variable scaffolding (`.env`, `.env.example`)
- [x] Client-side routing with layout shell (`TopBar`, `SiteHeader`, `SiteFooter`, `FloatingActions`, `ScrollProgress`)

## Phase 2 — Page & Component Modules Migration
| Page / Module | Status | Acceptance Criteria | Dependencies | Verification | Notes |
|---|---|---|---|---|---|
| Pure Utilities (`calculator`, `phone`) | DONE | 28/28 unit tests pass; identical math & normalization | None | `node --test` | 100% test parity |
| Layout Shell (`TopBar`, `SiteHeader`, `SiteFooter`) | DONE | Active links, sticky scroll, mobile drawer & submenu | Router | TS build & styles | Shared layout |
| Home Page (`/`) | DONE | Hero video/poster, metrics, services, process, CTA | Layout, Video | Production build | Landing page |
| About Us Page (`/about`) | DONE | Story, 3-card energy slider, network copy | Layout, Slider | Production build | Interactive slider |
| Solar Calculator Page (`/calculator`) | DONE | Dual-input sync, property toggle, instant math, stale dimming | Layout, Calculator utils | Production build | Core interactive tool |
| Gallery Page (`/gallery`) | DONE | Image grid, dialog lightbox modal, keyboard navigation | Layout, Lightbox | Production build | Dialog modal |
| Service Pages (5 routes) | DONE | Installation, Battery, AMC, Subsidy, Water Heater | ServiceLayout | Production build | 5 dedicated routes |
| Contact Us Page (`/contact`) | DONE | Web3Forms POST, phone validation, error & success states | Layout, Phone utils | Production build | Lead generation |
| 404 Page (`/404`) | DONE | Branded 404 layout with home link | Layout | Production build | Error page & catch-all |

## Phase 3 — Motion, Interaction & Responsive Pass
- [x] Hero video responsive swapping & reduced motion compliance (`HeroVideo.tsx`)
- [x] Scroll reveal (`useScrollReveal.ts` `[data-reveal]` + `.kenburns` + `IntersectionObserver`), number counters (`useCounter.ts`), and `split-title` word reveal (`PageHero.tsx`)
- [x] Card sheen effect (`useScrollReveal.ts` + `useSheen.ts`) & scroll progress bar (`useScrollProgress.ts`)
- [x] Mobile navigation drawer & accessible keyboard focus (`SiteHeader.tsx`), plus headless Chrome checks at desktop (`1440×900`) and mobile (`390×844`) with `0px` horizontal overflow

## Phase 4 — SEO, Accessibility & Performance Pass
- [x] Dynamic document titles, meta descriptions, keywords, Open Graph / Twitter metadata, canonical links, and `noindex` handling on 404 via `src/utils/seo.ts` & `SeoHead.tsx`
- [x] Build-time SSR prerendering (`src/entry-server.tsx` + `scripts/prerender.mjs`) generating static HTML with per-route metadata across all 10 public routes + `dist/404.html`
- [x] Extensionless SPA URLs updated in `public/sitemap.xml` matching route canonicals
- [x] Accessibility: ARIA attributes, `<dialog>` modal close/overflow restoration (`GalleryModal.tsx`), contrast ratios, sharp 0-radius edges
- [x] Image `srcset`, WebP loading, CLS prevention, and CSS cascade order fix (`tailwind-base.css` before `legacy.css`)
- [x] Security headers, `cleanUrls: true`, and `trailingSlash: false` in `vercel.json`; legacy static duplicates removed and `README.md` updated

## Phase 5 — QA, Verification & Handover
- [x] Landing hero cleanup (`/`) & Lenis smooth scroll optimization — removed `.topbar` on `/` (`Layout.tsx`), `Contact Now` header/drawer CTA on `/` (`SiteHeader.tsx`), and `.hero-eyebrow`, `.hero-trust`, `.hero-featurebar` (`HomePage.tsx`), preserving inner-page `.topbar` + `Contact Now` and `/` lower-section/footer CTAs; removed the `.hero-badge` (`Service-first solar, across Kerala`) from `#about` (`Who We Are`); replaced the 4-column `#process` grid with [`HowItWorksCarousel.tsx`](file:///C:/Akash files/Proffesional/Freelance/naturalgrid-main/src/components/home/HowItWorksCarousel.tsx) (`1` full card + exact `3/4` adjacent card peek on desktop, Prev/Next/step-dot/touch/keyboard controls, sticky `.how` pinning while `.home-curtain-stack` `#projects` glides upward over it); scaled down `.hero-btn` and `.float-btn` (`src/styles/index.css`); and tuned `lenis` (`^1.3.27`) with `lerp: 0.08`, zero-re-render DOM scroll hooks, and compositor-only styles
- [x] Production build & SSR prerendering pass (`npm run build`: `tsc`, Vite client build `dist/index.html` 4.27 kB / CSS 65.50 kB / JS 293.08 kB, Vite SSR build 179.53 kB, and 11 prerendered HTML outputs with 0 warnings/errors)
- [x] All 25 unit tests pass (`npm test` -> `node --test --experimental-strip-types`, covering `src/utils/*.ts`)
- [x] Headless Chrome verification across all 11 routes at `1440×900` and `390×844` (`0` console/hydration/network errors), `#about` badge removal check, `HowItWorksCarousel` `0.75` peek + `Service & AMC` progression + sticky curtain overlap check (`howTop: 94`, `curtainTop: 373`), compact button dimensions (`182×39`/`133×39` desktop, `169×37`/`122×37` mobile, `38×38`/`36×36` floating), and Lenis wheel/anchor/sticky/route-reset tests (`lenis@1.3.27`)
- [x] Handover documentation current in `docs/MEMORY.md`
- [ ] Live Web3Forms test submission and push to remote repository (BLOCKED locally: no Git remote configured)

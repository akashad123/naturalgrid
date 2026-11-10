# Project Phases

Use `NOT STARTED`, `IN PROGRESS`, `BLOCKED`, or `DONE`. Mark work DONE only after acceptance criteria and checks pass.

## Phase 0 — Discovery & Technical Confirmation
- [x] Unpack, verify, and catalog existing codebase (11 HTML pages, CSS tokens, JS modules, tests, assets)
- [x] Run baseline unit tests (`node --test`: 21/21 passing)
- [x] Formulate requirements, PRD, component boundaries, and routing map
- [ ] Ask user to confirm technology stack (React + Vite, TypeScript/JavaScript, Styling strategy, Motion strategy) — **IN PROGRESS**
- [ ] Confirm hosting and deployment constraints (Vercel)

## Phase 1 — Requirements, Architecture & Project Baseline
- [x] PRD created (`docs/PRD.md`)
- [ ] React + Vite project initialization with approved stack
- [ ] Directory layout & component boundaries established
- [ ] Theme tokens, font imports, and global styles wired
- [ ] Client-side routing with layout shell (TopBar, Header, Footer)

## Phase 2 — Page & Component Modules Migration
| Page / Module | Status | Acceptance Criteria | Dependencies | Verification | Notes |
|---|---|---|---|---|---|
| Pure Utilities (`calculator`, `phone`) | NOT STARTED | 21/21 unit tests pass; identical math & normalization | None | `node --test` or Vitest | Pure logic |
| Layout Shell (`TopBar`, `Header`, `Footer`) | NOT STARTED | Active links, sticky scroll, mobile drawer & submenu | Router | Responsive inspection | Shared on all pages |
| Home Page (`/`) | NOT STARTED | Hero video/poster, metrics, services, process, CTA | Layout, Video | Visual & interaction | Key landing page |
| About Us Page (`/about`) | NOT STARTED | Story, 4-phase energy slider, network copy | Layout, Slider | Slide controls | Interactive slider |
| Solar Calculator Page (`/calculator`) | NOT STARTED | Dual-input sync, property toggle, instant math, stale dimming | Layout, Calculator utils | Math & UI checks | Core interactive tool |
| Gallery Page (`/gallery`) | NOT STARTED | Image grid, dialog lightbox modal, keyboard navigation | Layout, Lightbox | Modal & Esc/Arrow keys | Dialog modal |
| Service Pages (5 routes) | NOT STARTED | Installation, AMC, Battery, Subsidy, Water Heater | Layout | Content parity | 5 dedicated pages |
| Contact Us Page (`/contact`) | NOT STARTED | Web3Forms POST, phone validation, error & success states | Layout, Phone utils | Form submission & validation | Lead generation |
| 404 Page (`/404`) | NOT STARTED | Branded 404 layout with home link | Layout | Route catch-all | Error page |

## Phase 3 — Motion, Interaction & Responsive Pass
- [ ] Hero video responsive swapping & reduced motion compliance
- [ ] Scroll reveal animations & number counters
- [ ] Card sheen effect & scroll progress bar
- [ ] Mobile navigation drawer & accessible keyboard focus

## Phase 4 — SEO, Accessibility & Performance Pass
- [ ] Meta tags, titles, canonicals, Open Graph, and JSON-LD per route
- [ ] Accessibility audit: ARIA attributes, dialog traps, contrast ratios
- [ ] Image srcset, WebP loading, CLS prevention
- [ ] Security headers & CSP validation in `vercel.json`

## Phase 5 — QA, Verification & Handover
- [ ] Production build succeeds without errors or warnings
- [ ] All unit and interaction tests pass
- [ ] Final MEMORY.md and technical handover updated
- [ ] Clean Git commit and push status verified

# Development Rules

These rules are mandatory for every task in this project.

## 1. Understand before changing
- First inspect the existing implementation and all related functionality.
- Trace the relevant components, routes, state, services, schemas, API calls, database objects, and dependencies before editing.
- Add requested functionality with the smallest possible change set.
- Preserve existing functionality, data flow, business logic, UI/UX, and public interfaces unless the request explicitly requires a change.
- Do not refactor, rename, reformat, or modify unrelated code.
- If a shared component, service, schema, hook, utility, or function is used by other features, understand its dependencies before changing it.
- If requirements are ambiguous, contradictory, risky, or missing essential information, stop and ask a concise clarifying question. Never invent business rules or silently assume requirements.
- Do not claim something is implemented, tested, deployed, or pushed unless it actually is.

## 2. Tech-stack confirmation is mandatory
Before creating or changing the application architecture, ask the user to confirm:
1. Which frontend technology/framework should be used?
2. Which backend/database/authentication approach is required, if applicable?
3. Which styling system or component library is preferred?
4. Which animation solution is preferred, if animation is needed?
5. Are there existing hosting, deployment, or integration constraints?

Suggested starting point, not an automatic decision:
- Frontend: React + Vite
- Backend/data/auth: Supabase when appropriate
- Styling: CSS Modules, plain CSS, Tailwind CSS, or another user-approved option
- Motion: Framer Motion or GSAP only when justified by the design

Ask whether this suggested stack is acceptable. Do not install, migrate, replace, or upgrade major technologies without approval. If the user has already specified the stack in the current project brief, do not ask them to repeat it; confirm only unresolved choices. Recommend a better-fit alternative when there is a concrete technical reason, explain the trade-off briefly, and obtain approval before switching.

## 3. Structure and naming
- Establish a clear, scalable folder structure before substantial implementation.
- Group code by feature/domain when that improves maintainability; keep shared components, hooks, utilities, services, types, and assets in clear locations.
- Avoid giant components and duplicate implementations.
- Use consistent, descriptive naming. Follow the conventions of the chosen language and framework.
- Use PascalCase for React component files and component names; camelCase for variables, functions, hooks (useX), and utilities; UPPER_SNAKE_CASE only for true constants where appropriate.
- Use kebab-case for route segments and static asset filenames unless the existing project convention differs.
- Name files by responsibility, not vague labels such as `common2`, `final`, or `new`.
- Keep imports organized and remove only imports made genuinely unused by the requested change.
- Do not create folders solely to make the structure look elaborate.

## 4. Dynamic, maintainable implementation
- Prefer reusable, data-driven components and configuration over duplicated markup.
- Avoid hard-coded business data, repeated strings, magic numbers, URLs, credentials, and environment-specific values.
- Put legitimate configuration in a central configuration/constants location or environment variables.
- Render lists and repeated UI from structured data.
- Do not hard-code credentials, API keys, tokens, secrets, or private endpoints. Use environment variables and provide a safe `.env.example`.
- Do not over-engineer. A value that is genuinely fixed by the design or requirement may be a named design token or documented constant.
- Do not fabricate data, API responses, database fields, or integrations. Clearly label mock/demo data and isolate it from production data paths.

## 5. Global design system
- Create and maintain a centralized theme/global styling system.
- Define reusable design tokens for colors, typography, spacing, sizing, borders, shadows, radii, breakpoints, and motion where relevant.
- Avoid scattered one-off colors and arbitrary styling values.
- Keep components visually consistent and support light/dark themes when the product requirements call for them.
- Treat `docs/DESIGN.md` as the authoritative design specification. Do not invent a new visual direction when it is empty or when the user has supplied a design reference.
- If `DESIGN.md` is empty, ask for or inspect the user's supplied screenshot/reference and request the separate UI-reference analysis workflow. Do not fill the design document with guesses.
- Do not store user-provided reference screenshots or images in a `reference/` folder or commit them to the repository. Use attachments supplied in the current task/session. Store only approved production assets in the appropriate public/assets location.

## 6. Responsive design and accessibility
- Mobile experience is mandatory, not a later enhancement.
- Use mobile-first responsive implementation and test small screens, tablets, laptops, and wide desktops.
- Use Tailwind's default breakpoint values as a baseline when Tailwind is selected: sm 640px, md 768px, lg 1024px, xl 1280px, 2xl 1536px. If another system is used, define equivalent project breakpoints centrally.
- Prevent horizontal overflow, clipped controls, unreadable text, and unusable navigation.
- Make touch targets comfortable and forms usable on mobile.
- Use semantic HTML, keyboard-accessible controls, visible focus states, appropriate labels, and meaningful alternative text.
- Respect reduced-motion preferences and avoid motion that harms usability.

## 7. SEO and discoverability
- Treat SEO as an implementation requirement from the beginning, not a final cosmetic task.
- Use semantic HTML landmarks and a logical heading hierarchy.
- Provide unique, descriptive page titles and meta descriptions for indexable pages.
- Use meaningful, crawlable links with real `href` values and stable, readable URLs.
- Add canonical URLs where appropriate, Open Graph/social metadata, descriptive image alt text, and suitable structured data only when factually applicable.
- Include and validate `robots.txt` and XML sitemap when the site is intended to be indexed.
- Avoid accidentally indexing private, authenticated, staging, duplicate, or thin pages. Use correct robots directives and canonical strategy.
- Consider server-side rendering or prerendering for public content when client-only rendering would materially weaken discoverability or initial content delivery. Explain trade-offs before changing the stack.
- Do not promise rankings or claim SEO is guaranteed. SEO implementation improves technical eligibility; content quality, authority, competition, and search-engine systems also matter.
- Verify rendered page content and metadata using appropriate tools where available.

## 8. Performance and quality
- Optimize images and fonts; use modern formats and responsive image sizes where appropriate.
- Lazy-load below-the-fold media when appropriate; do not lazy-load critical above-the-fold content indiscriminately.
- Avoid unnecessary dependencies, oversized bundles, layout shifts, excessive animation, and avoidable network requests.
- Use loading, empty, error, success, and disabled states where relevant.
- Handle failures explicitly; do not hide errors behind fake success states.
- Add tests proportionate to the feature and project risk.

## 9. Git workflow
- Work in small, reviewable increments.
- After each completed module/feature, run the relevant checks, inspect `git status` and the diff, then commit and push the work as requested.
- Before committing, ensure only project changes belonging to the completed module are included. Never include unrelated user changes, secrets, `.env` files, generated junk, or reference screenshots.
- Use a clear commit message, such as `feat: add booking management`.
- Push only to the already configured and intended remote/branch. If the remote, branch, credentials, permissions, or upstream are unclear, ask before pushing.
- Never force-push, rewrite shared history, delete branches, or overwrite remote work unless the user explicitly authorizes it.
- If tests fail, the working tree contains unrelated changes, or a safe push cannot be established, explain the blocker instead of pretending the push succeeded.
- Do not make a commit/push for every tiny edit; the unit is a completed module or independently reviewable feature.

## 10. Documentation and handover — automatic maintenance
Update project documentation automatically as part of the same task whenever implementation, requirements, decisions, architecture, progress, or known issues change. Do not wait for the user to remind you.
- Update `PRD.md` when scope, requirements, acceptance criteria, roles, or business rules change.
- Update `ARCHITECTURE.md` when components, data flow, integrations, infrastructure, security boundaries, or technical decisions change (full-stack projects).
- Update `RULES.md` when a durable development convention is added or changed.
- Update `PHASES.md` after each meaningful task/module: mark completed work, current work, next work, dependencies, and blockers.
- Update `MEMORY.md` after every meaningful task with a concise, factual handover: what changed, key files, decisions, commands/checks run and results, remaining work, known issues, and exact next step.
- Keep `DESIGN.md` user-owned. Do not populate or rewrite it unless the user asks or supplies a design specification to incorporate.
- Keep documentation concise, current, and factual. Remove stale statements when they become false. Never claim a task is complete if it is not.
- If the agent session ends unexpectedly, the latest `MEMORY.md` and `PHASES.md` must still make the next action obvious.

## 11. Communication
- Answer only the question or task asked.
- Mention additional issues only when they are necessary to complete the task safely or correctly.
- Ask the smallest number of high-value clarifying questions; ask before making consequential assumptions.
- Do not overwhelm the user with repeated status messages or unnecessary explanations.
- At completion, report briefly: what changed, checks performed and results, documentation updated, and Git commit/push status.

# UI Reference Screenshot → Developer Handoff (JSONC)

Use this prompt whenever the user attaches a UI screenshot or visual reference. The screenshot is supplied as an attachment for that task; do not copy it into the repository or create a reference-images directory.

Thoroughly inspect the provided screenshot(s). Describe the UI as a practical handoff from a UI designer to a developer. Be precise about visible evidence and clearly label any inferred or uncertain detail. Do not invent content that cannot be observed.

Produce a structured JSONC specification that covers:

1. **Overall composition**
   - Page purpose and visual character
   - Main layout, content hierarchy, alignment, spacing rhythm, density, and visual balance
   - Header, navigation, hero, content sections, sidebars, cards, footer, overlays, and other visible regions
   - Container widths, columns, grids, and likely layout behavior

2. **Components and states**
   - Identify each visible component and its hierarchy
   - Describe dimensions/proportions, padding, gaps, borders, radii, shadows, typography, icons, imagery, and alignment
   - Include visible hover, active, selected, disabled, loading, or expanded states only when evidenced; otherwise mark them as unspecified
   - Describe likely interactions separately from observed appearance

3. **Color tokens**
   - Extract a rough, practical palette.
   - Define exactly two main color palettes: `primary` and `secondary`, using coherent shade scales similar to Tailwind.
   - Alongside those, define only the necessary neutral grays and a limited set of accent colors for complex media, gradients, shadows, charts, or status indicators.
   - Do not create a large collection of near-duplicate colors.
   - Mark sampled colors as approximate when they are estimated from a screenshot.

4. **Light and dark modes**
   - Provide both light-mode and dark-mode token mappings.
   - Preserve the same design identity and hierarchy across modes.
   - If only one mode is visible, derive the other conservatively and label it as a proposed interpretation, not an observed fact.

5. **Typography**
   - Describe font character, hierarchy, approximate sizes, weights, line heights, letter spacing, and text widths.
   - Do not claim an exact font family unless it is identifiable from supplied evidence.

6. **Responsive behavior**
   - Define responsive rules using Tailwind CSS default breakpoints:
     - `sm`: 640px
     - `md`: 768px
     - `lg`: 1024px
     - `xl`: 1280px
     - `2xl`: 1536px
   - Explain what changes at each breakpoint: stacking, navigation collapse, grid columns, spacing, typography, image crop, card sizing, and visibility.
   - Mobile view is mandatory. Do not merely scale down desktop; describe a usable mobile composition.
   - If the screenshot does not show mobile behavior, label responsive decisions as recommendations/inferences.

7. **Media and detail**
   - Describe image aspect ratios, crop, focal point, overlays, gradients, icon style, and decorative details.
   - Only detail accents and complex media deeply; keep the main palette limited to primary, secondary, neutrals, and necessary accents.

8. **Accessibility and implementation notes**
   - Semantic structure, contrast risks, keyboard/focus needs, touch target considerations, reduced-motion considerations, and text alternatives.
   - Do not invent backend behavior or technology choices.

Output requirements:
- First output the complete JSONC specification in a fenced `jsonc` code block.
- Use comments to explain inferred values, uncertainty, and implementation intent.
- Keep the schema consistent and readable.
- After the JSONC, output a separate Markdown code block containing a developer implementation prompt.
- The developer prompt must describe only the UI to implement, visual behavior, responsive behavior, and design-token rules/usage. Do not mention technology or framework specifications.
- The developer prompt must instruct the implementer to use the provided tokens consistently, avoid arbitrary values, preserve the screenshot's hierarchy, implement both themes, and build mobile-first.
- Do not write the output into `DESIGN.md` automatically. Present it for user review; only incorporate it into `DESIGN.md` when the user asks.

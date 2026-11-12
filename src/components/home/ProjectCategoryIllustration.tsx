import type { ReactNode } from "react";

export type ProjectCategoryKey =
  | "residential-rooftop-solar"
  | "commercial-institutional-solar"
  | "industrial-ground-mounted-solar";

interface ProjectCategoryIllustrationProps {
  categoryId: string;
}

/**
 * Shared soft horizon contour strokes fading smoothly at both horizontal edges
 * via an opacity-only gradient so the sketch blends naturally into #projects.
 */
function SketchHorizonContours({
  fadeId,
  ridgePath,
  basePath,
}: {
  fadeId: string;
  ridgePath: string;
  basePath: string;
}) {
  return (
    <>
      <defs>
        <linearGradient id={fadeId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#17492a" stopOpacity="0" />
          <stop offset="18%" stopColor="#17492a" stopOpacity="0.28" />
          <stop offset="82%" stopColor="#17492a" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#17492a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={ridgePath} stroke={`url(#${fadeId})`} strokeWidth="1" fill="none" />
      <path d={basePath} stroke={`url(#${fadeId})`} strokeWidth="0.9" fill="none" />
    </>
  );
}

/** Distinct minimal green-ink architectural SVG sketches tailored for categories 01–03. */
const CATEGORY_SKETCHES: Record<ProjectCategoryKey, ReactNode> = {
  // 01: Residential Rooftop Solar — twin angled arrays on residential terrace & soft contours
  "residential-rooftop-solar": (
    <svg
      className="projects-item-art-svg"
      viewBox="0 0 300 220"
      fill="none"
      aria-hidden="true"
    >
      <g strokeLinecap="round" strokeLinejoin="round">
        {/* Background horizon contour lines */}
        <SketchHorizonContours
          fadeId="proj-fade-res"
          ridgePath="M6 164 C58 140, 118 144, 174 162 C222 178, 260 156, 294 146"
          basePath="M10 186 C72 194, 152 176, 218 184 C252 188, 276 184, 294 176"
        />

        {/* Ground shadow tint beneath twin arrays */}
        <ellipse cx="148" cy="182" rx="108" ry="8" fill="rgba(35, 101, 55, 0.08)" />

        {/* Residential roof / mounting terrace plinth */}
        <line
          x1="44"
          y1="178"
          x2="246"
          y2="178"
          stroke="rgba(6, 48, 36, 0.32)"
          strokeWidth="1.15"
        />
        <path
          d="M52 178 L72 162 L230 162 L242 178"
          fill="rgba(35, 101, 55, 0.04)"
          stroke="rgba(23, 73, 42, 0.34)"
          strokeWidth="1"
        />

        {/* Structural mounting posts */}
        <line x1="82" y1="150" x2="82" y2="178" stroke="rgba(6, 48, 36, 0.48)" strokeWidth="1.25" />
        <line x1="126" y1="146" x2="126" y2="178" stroke="rgba(6, 48, 36, 0.48)" strokeWidth="1.25" />
        <line x1="174" y1="142" x2="174" y2="178" stroke="rgba(6, 48, 36, 0.48)" strokeWidth="1.25" />
        <line x1="216" y1="138" x2="216" y2="178" stroke="rgba(6, 48, 36, 0.48)" strokeWidth="1.25" />

        {/* Left tilted 3D solar panel bank */}
        <polygon
          points="56,144 74,98 156,92 142,140"
          fill="rgba(35, 101, 55, 0.1)"
          stroke="rgba(6, 48, 36, 0.62)"
          strokeWidth="1.35"
        />
        {/* Depth frame edge */}
        <polyline
          points="56,144 59,147 144,143 158,95"
          stroke="rgba(6, 48, 36, 0.38)"
          strokeWidth="1"
        />
        {/* Panel cells — horizontal rows */}
        <line x1="65" y1="121" x2="149" y2="116" stroke="rgba(23, 73, 42, 0.42)" strokeWidth="0.95" />
        {/* Panel cells — vertical columns */}
        <line x1="94" y1="96" x2="77" y2="143" stroke="rgba(23, 73, 42, 0.38)" strokeWidth="0.9" />
        <line x1="115" y1="95" x2="98" y2="142" stroke="rgba(23, 73, 42, 0.38)" strokeWidth="0.9" />
        <line x1="135" y1="93" x2="120" y2="141" stroke="rgba(23, 73, 42, 0.38)" strokeWidth="0.9" />

        {/* Right tilted 3D solar panel bank */}
        <polygon
          points="154,138 170,91 250,86 238,134"
          fill="rgba(35, 101, 55, 0.08)"
          stroke="rgba(6, 48, 36, 0.6)"
          strokeWidth="1.35"
        />
        <polyline
          points="154,138 157,141 240,137 252,89"
          stroke="rgba(6, 48, 36, 0.36)"
          strokeWidth="1"
        />
        <line x1="162" y1="114" x2="244" y2="110" stroke="rgba(23, 73, 42, 0.4)" strokeWidth="0.95" />
        <line x1="190" y1="90" x2="175" y2="137" stroke="rgba(23, 73, 42, 0.36)" strokeWidth="0.9" />
        <line x1="210" y1="88" x2="196" y2="136" stroke="rgba(23, 73, 42, 0.36)" strokeWidth="0.9" />
        <line x1="230" y1="87" x2="217" y2="135" stroke="rgba(23, 73, 42, 0.36)" strokeWidth="0.9" />

        {/* Subtle minimalist foliage sprigs around base */}
        <path
          d="M32 178 C32 170, 39 167, 43 172 C46 168, 52 171, 52 178 Z"
          fill="rgba(35, 101, 55, 0.08)"
          stroke="rgba(23, 73, 42, 0.36)"
          strokeWidth="0.95"
        />
        <path
          d="M248 178 C248 171, 255 168, 259 173 C263 169, 268 172, 268 178 Z"
          fill="rgba(35, 101, 55, 0.08)"
          stroke="rgba(23, 73, 42, 0.36)"
          strokeWidth="0.95"
        />
      </g>
    </svg>
  ),

  // 02: Commercial & Institutional Solar — multi-story building roof with elevated PV rows
  "commercial-institutional-solar": (
    <svg
      className="projects-item-art-svg"
      viewBox="0 0 300 220"
      fill="none"
      aria-hidden="true"
    >
      <g strokeLinecap="round" strokeLinejoin="round">
        {/* Ground & horizon contour sweep */}
        <SketchHorizonContours
          fadeId="proj-fade-comm"
          ridgePath="M6 170 C54 156, 98 160, 148 168 C202 176, 254 160, 294 152"
          basePath="M14 190 C84 184, 180 194, 286 184"
        />

        {/* Commercial building main volume (3/4 isometric perspective) */}
        <polygon
          points="56,184 56,104 186,92 186,184"
          fill="rgba(35, 101, 55, 0.06)"
          stroke="rgba(6, 48, 36, 0.56)"
          strokeWidth="1.25"
        />
        {/* Side building return wing */}
        <polygon
          points="186,92 246,108 246,184 186,184"
          fill="rgba(35, 101, 55, 0.1)"
          stroke="rgba(6, 48, 36, 0.48)"
          strokeWidth="1.2"
        />

        {/* Roof parapet slab */}
        <polyline
          points="52,104 186,91 250,108"
          stroke="rgba(6, 48, 36, 0.62)"
          strokeWidth="1.35"
        />

        {/* Elevated commercial solar rows across flat terrace */}
        {/* Back row */}
        <polygon
          points="80,82 94,62 172,56 160,76"
          fill="rgba(35, 101, 55, 0.12)"
          stroke="rgba(6, 48, 36, 0.56)"
          strokeWidth="1.2"
        />
        <line x1="112" y1="60" x2="100" y2="80" stroke="rgba(23, 73, 42, 0.35)" strokeWidth="0.9" />
        <line x1="134" y1="59" x2="122" y2="79" stroke="rgba(23, 73, 42, 0.35)" strokeWidth="0.9" />
        <line x1="154" y1="57" x2="142" y2="77" stroke="rgba(23, 73, 42, 0.35)" strokeWidth="0.9" />
        <line x1="94" y1="81" x2="94" y2="96" stroke="rgba(6, 48, 36, 0.4)" strokeWidth="1" />
        <line x1="152" y1="76" x2="152" y2="92" stroke="rgba(6, 48, 36, 0.4)" strokeWidth="1" />

        {/* Front row */}
        <polygon
          points="66,97 80,77 162,71 150,91"
          fill="rgba(35, 101, 55, 0.14)"
          stroke="rgba(6, 48, 36, 0.64)"
          strokeWidth="1.3"
        />
        <line x1="100" y1="75" x2="88" y2="95" stroke="rgba(23, 73, 42, 0.38)" strokeWidth="0.9" />
        <line x1="122" y1="74" x2="110" y2="94" stroke="rgba(23, 73, 42, 0.38)" strokeWidth="0.9" />
        <line x1="144" y1="72" x2="132" y2="92" stroke="rgba(23, 73, 42, 0.38)" strokeWidth="0.9" />

        {/* Secondary wing array */}
        <polygon
          points="190,90 198,74 238,83 230,98"
          fill="rgba(35, 101, 55, 0.11)"
          stroke="rgba(6, 48, 36, 0.54)"
          strokeWidth="1.15"
        />
        <line x1="214" y1="78" x2="207" y2="93" stroke="rgba(23, 73, 42, 0.35)" strokeWidth="0.85" />

        {/* Architectural window mullion lines */}
        <line x1="70" y1="122" x2="172" y2="114" stroke="rgba(23, 73, 42, 0.34)" strokeWidth="1" />
        <line x1="70" y1="142" x2="172" y2="136" stroke="rgba(23, 73, 42, 0.34)" strokeWidth="1" />
        <line x1="70" y1="162" x2="172" y2="158" stroke="rgba(23, 73, 42, 0.28)" strokeWidth="1" />
        <line x1="94" y1="120" x2="94" y2="184" stroke="rgba(23, 73, 42, 0.22)" strokeWidth="0.9" />
        <line x1="124" y1="118" x2="124" y2="184" stroke="rgba(23, 73, 42, 0.22)" strokeWidth="0.9" />
        <line x1="154" y1="115" x2="154" y2="184" stroke="rgba(23, 73, 42, 0.22)" strokeWidth="0.9" />

        {/* Side louvers & AC/inverter utility cabinet */}
        <line x1="198" y1="122" x2="234" y2="128" stroke="rgba(23, 73, 42, 0.28)" strokeWidth="0.95" />
        <line x1="198" y1="142" x2="234" y2="146" stroke="rgba(23, 73, 42, 0.28)" strokeWidth="0.95" />
        <rect
          x="198"
          y="160"
          width="18"
          height="24"
          fill="rgba(35, 101, 55, 0.08)"
          stroke="rgba(6, 48, 36, 0.45)"
          strokeWidth="1"
        />
      </g>
    </svg>
  ),

  // 03: Industrial & Ground-Mounted Solar — multi-row solar field + plant/grid horizon
  "industrial-ground-mounted-solar": (
    <svg
      className="projects-item-art-svg"
      viewBox="0 0 300 220"
      fill="none"
      aria-hidden="true"
    >
      <g strokeLinecap="round" strokeLinejoin="round">
        {/* Wide industrial land contours */}
        <SketchHorizonContours
          fadeId="proj-fade-ind"
          ridgePath="M6 124 C64 114, 134 122, 198 118 C242 115, 272 118, 294 126"
          basePath="M10 192 C78 184, 186 196, 290 186"
        />

        {/* Distant industrial warehouse roof & grid pylon silhouette */}
        <path
          d="M28 122 V96 L64 84 L100 96 V122"
          fill="rgba(35, 101, 55, 0.05)"
          stroke="rgba(23, 73, 42, 0.36)"
          strokeWidth="1.05"
        />
        <line x1="40" y1="104" x2="88" y2="104" stroke="rgba(23, 73, 42, 0.24)" strokeWidth="0.9" />

        {/* Subtle transmission grid pylon at top right */}
        <path d="M242 122 L252 62 L262 122" stroke="rgba(23, 73, 42, 0.38)" strokeWidth="1.05" />
        <line x1="238" y1="76" x2="266" y2="76" stroke="rgba(23, 73, 42, 0.36)" strokeWidth="1" />
        <line x1="240" y1="92" x2="264" y2="92" stroke="rgba(23, 73, 42, 0.3)" strokeWidth="0.95" />

        {/* Rear utility-scale ground array row */}
        <polygon
          points="72,138 86,106 206,104 196,136"
          fill="rgba(35, 101, 55, 0.08)"
          stroke="rgba(6, 48, 36, 0.5)"
          strokeWidth="1.2"
        />
        <line x1="79" y1="122" x2="201" y2="120" stroke="rgba(23, 73, 42, 0.32)" strokeWidth="0.9" />
        <line x1="114" y1="105" x2="102" y2="137" stroke="rgba(23, 73, 42, 0.32)" strokeWidth="0.85" />
        <line x1="144" y1="105" x2="132" y2="137" stroke="rgba(23, 73, 42, 0.32)" strokeWidth="0.85" />
        <line x1="174" y1="104" x2="162" y2="136" stroke="rgba(23, 73, 42, 0.32)" strokeWidth="0.85" />

        {/* Steel pile piers under foreground array */}
        <line x1="68" y1="172" x2="68" y2="188" stroke="rgba(6, 48, 36, 0.48)" strokeWidth="1.25" />
        <line x1="118" y1="172" x2="118" y2="188" stroke="rgba(6, 48, 36, 0.48)" strokeWidth="1.25" />
        <line x1="168" y1="172" x2="168" y2="188" stroke="rgba(6, 48, 36, 0.48)" strokeWidth="1.25" />
        <line x1="216" y1="170" x2="216" y2="188" stroke="rgba(6, 48, 36, 0.48)" strokeWidth="1.25" />

        {/* Foreground high-capacity ground-mounted array row */}
        <polygon
          points="36,174 58,132 238,128 222,170"
          fill="rgba(35, 101, 55, 0.12)"
          stroke="rgba(6, 48, 36, 0.64)"
          strokeWidth="1.4"
        />
        <polyline
          points="36,174 40,177 224,173 240,131"
          stroke="rgba(6, 48, 36, 0.38)"
          strokeWidth="1"
        />
        <line x1="47" y1="153" x2="230" y2="149" stroke="rgba(23, 73, 42, 0.42)" strokeWidth="0.95" />
        <line x1="92" y1="131" x2="72" y2="173" stroke="rgba(23, 73, 42, 0.38)" strokeWidth="0.9" />
        <line x1="128" y1="130" x2="108" y2="172" stroke="rgba(23, 73, 42, 0.38)" strokeWidth="0.9" />
        <line x1="164" y1="130" x2="144" y2="172" stroke="rgba(23, 73, 42, 0.38)" strokeWidth="0.9" />
        <line x1="200" y1="129" x2="182" y2="171" stroke="rgba(23, 73, 42, 0.38)" strokeWidth="0.9" />
      </g>
    </svg>
  ),
};

/**
 * Renders the minimal architectural Natural Grid vector illustration displayed
 * beneath the active project index (01, 02, or 03) inside ProjectsAccordion.
 */
export function ProjectCategoryIllustration({
  categoryId,
}: ProjectCategoryIllustrationProps) {
  const key = (
    categoryId in CATEGORY_SKETCHES
      ? categoryId
      : "residential-rooftop-solar"
  ) as ProjectCategoryKey;

  return (
    <div className="projects-item-art" aria-hidden="true">
      {CATEGORY_SKETCHES[key]}
    </div>
  );
}

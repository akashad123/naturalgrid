import type { ReactNode } from "react";

/** Step identifiers supported by the How It Works card deck. */
export type HowItWorksStepKey = "01" | "02" | "03" | "04";

interface StepArtwork {
  left: ReactNode;
  right: ReactNode;
}

interface HowItWorksBackdropProps {
  stepNumber: string;
}

/** Shared radiating solar burst positioned cleanly in the top-right corner of each card. */
function SunBurstCorner({ stepId }: { stepId: string }) {
  const gradId = `how-sun-glow-${stepId}`;

  return (
    <svg
      className="how-card-art how-card-art--sun"
      viewBox="0 0 180 180"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={gradId} cx="84%" cy="16%" r="72%">
          <stop offset="0%" stopColor="rgba(255, 103, 0, 0.24)" />
          <stop offset="48%" stopColor="rgba(242, 221, 184, 0.1)" />
          <stop offset="100%" stopColor="rgba(242, 221, 184, 0)" />
        </radialGradient>
      </defs>

      {/* Soft solar ambient wash */}
      <circle cx="152" cy="28" r="78" fill={`url(#${gradId})`} />

      {/* Crisp minimal sun disc & inner solar arc */}
      <circle
        cx="152"
        cy="28"
        r="30"
        fill="rgba(242, 221, 184, 0.14)"
        stroke="rgba(242, 221, 184, 0.42)"
        strokeWidth="1.35"
      />
      <circle
        cx="152"
        cy="28"
        r="19"
        stroke="rgba(255, 103, 0, 0.36)"
        strokeWidth="1"
      />

      {/* Thin alternating solar rays */}
      <g
        stroke="rgba(242, 221, 184, 0.38)"
        strokeWidth="1.25"
        strokeLinecap="round"
      >
        <line x1="148.6" y1="66.8" x2="146.6" y2="89.8" />
        <line x1="136.8" y1="63.9" x2="131.3" y2="76.8" />
        <line x1="126.4" y1="57.4" x2="110" y2="76.3" />
        <line x1="118.6" y1="48.1" x2="106.6" y2="55.3" />
        <line x1="114" y1="36.8" x2="89.7" y2="42.4" />
        <line x1="113.2" y1="24.6" x2="99.2" y2="23.4" />
        <line x1="116.1" y1="12.8" x2="94.9" y2="3.8" />
      </g>
    </svg>
  );
}

/** Shared low-profile Kerala terrain wave anchoring the bottom edge across cards. */
function HorizonWaves() {
  return (
    <svg
      className="how-card-art how-card-art--hills"
      viewBox="0 0 1000 110"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      {/* Distant sage ridge */}
      <path
        d="M0 74 C140 44, 290 48, 450 74 C615 98, 790 40, 1000 60 L1000 110 L0 110 Z"
        fill="rgba(35, 101, 55, 0.38)"
      />
      {/* Foreground deep emerald hill */}
      <path
        d="M0 84 C190 54, 340 88, 540 72 C715 58, 845 38, 1000 66 L1000 110 L0 110 Z"
        fill="rgba(10, 48, 27, 0.62)"
      />
      {/* Delicate ridge highlight */}
      <path
        d="M0 84 C190 54, 340 88, 540 72 C715 58, 845 38, 1000 66"
        stroke="rgba(242, 221, 184, 0.14)"
        strokeWidth="1.2"
      />
    </svg>
  );
}

/** Step-specific minimal Natural Grid solar vector pairs (bottom-left & bottom-right). */
const STEP_ARTWORK_MAP: Record<HowItWorksStepKey, StepArtwork> = {
  "01": {
    // Roof inspection + KSEB consumption assessment
    left: (
      <svg
        className="how-card-art how-card-art--left"
        viewBox="0 0 132 76"
        fill="none"
        aria-hidden="true"
      >
        <g strokeLinecap="round" strokeLinejoin="round">
          {/* Kerala home silhouette with solar roof plane */}
          <path
            d="M14 66 V40 L40 23 L66 40 V66 Z"
            fill="rgba(242, 221, 184, 0.08)"
            stroke="rgba(242, 221, 184, 0.4)"
            strokeWidth="1.25"
          />
          <path
            d="M8 42 L40 20 L72 42"
            stroke="rgba(242, 221, 184, 0.52)"
            strokeWidth="1.35"
          />
          {/* Small rooftop PV module */}
          <path
            d="M41 25 L59 36 L55 41 L37 30 Z"
            fill="rgba(255, 103, 0, 0.22)"
            stroke="rgba(255, 103, 0, 0.58)"
            strokeWidth="1.1"
          />
          <line x1="35" y1="66" x2="35" y2="52" stroke="rgba(242, 221, 184, 0.35)" strokeWidth="1.15" />
          <line x1="45" y1="66" x2="45" y2="52" stroke="rgba(242, 221, 184, 0.35)" strokeWidth="1.15" />
          <line x1="35" y1="52" x2="45" y2="52" stroke="rgba(242, 221, 184, 0.35)" strokeWidth="1.15" />

          {/* Minimal KSEB bill / consumption bar slate */}
          <rect
            x="82"
            y="28"
            width="36"
            height="38"
            fill="rgba(242, 221, 184, 0.07)"
            stroke="rgba(242, 221, 184, 0.36)"
            strokeWidth="1.2"
          />
          <line x1="88" y1="36" x2="108" y2="36" stroke="rgba(242, 221, 184, 0.44)" strokeWidth="1.15" />
          <line x1="91" y1="58" x2="91" y2="48" stroke="rgba(242, 221, 184, 0.38)" strokeWidth="2.2" />
          <line x1="99" y1="58" x2="99" y2="44" stroke="rgba(255, 103, 0, 0.65)" strokeWidth="2.2" />
          <line x1="107" y1="58" x2="107" y2="51" stroke="rgba(242, 221, 184, 0.38)" strokeWidth="2.2" />
        </g>
      </svg>
    ),
    // Minimal ground/rooftop angled solar panel array
    right: (
      <svg
        className="how-card-art how-card-art--right"
        viewBox="0 0 172 96"
        fill="none"
        aria-hidden="true"
      >
        <g strokeLinecap="round" strokeLinejoin="round">
          {/* Mounting struts anchored cleanly into horizon */}
          <line x1="56" y1="68" x2="56" y2="86" stroke="rgba(242, 221, 184, 0.4)" strokeWidth="1.35" />
          <line x1="106" y1="64" x2="106" y2="86" stroke="rgba(242, 221, 184, 0.4)" strokeWidth="1.35" />
          <line x1="44" y1="86" x2="118" y2="86" stroke="rgba(242, 221, 184, 0.28)" strokeWidth="1.1" />

          {/* Tilted solar panel frame */}
          <polygon
            points="28,70 48,26 138,22 120,66"
            fill="rgba(242, 221, 184, 0.1)"
            stroke="rgba(242, 221, 184, 0.52)"
            strokeWidth="1.4"
          />
          {/* Horizontal cell row dividers */}
          <line x1="38" y1="48" x2="129" y2="44" stroke="rgba(242, 221, 184, 0.34)" strokeWidth="1.05" />
          {/* Vertical cell column dividers */}
          <line x1="70" y1="25" x2="51" y2="69" stroke="rgba(242, 221, 184, 0.34)" strokeWidth="1.05" />
          <line x1="93" y1="24" x2="74" y2="68" stroke="rgba(242, 221, 184, 0.34)" strokeWidth="1.05" />
          <line x1="116" y1="23" x2="97" y2="67" stroke="rgba(242, 221, 184, 0.34)" strokeWidth="1.05" />

          {/* Minimal foliage tufts flanking the array */}
          <path
            d="M12 86 C12 79, 20 77, 23 82 C26 78, 32 80, 32 86 Z"
            fill="rgba(242, 221, 184, 0.12)"
            stroke="rgba(242, 221, 184, 0.28)"
            strokeWidth="1"
          />
          <path
            d="M134 86 C134 78, 142 74, 147 80 C151 76, 158 79, 158 86 Z"
            fill="rgba(242, 221, 184, 0.12)"
            stroke="rgba(242, 221, 184, 0.28)"
            strokeWidth="1"
          />
        </g>
      </svg>
    ),
  },

  "02": {
    // System engineering: hybrid inverter + battery bank schematic
    left: (
      <svg
        className="how-card-art how-card-art--left"
        viewBox="0 0 132 76"
        fill="none"
        aria-hidden="true"
      >
        <g strokeLinecap="round" strokeLinejoin="round">
          {/* Hybrid inverter unit */}
          <rect
            x="16"
            y="18"
            width="38"
            height="48"
            fill="rgba(242, 221, 184, 0.09)"
            stroke="rgba(242, 221, 184, 0.46)"
            strokeWidth="1.3"
          />
          <rect
            x="23"
            y="25"
            width="24"
            height="12"
            stroke="rgba(242, 221, 184, 0.36)"
            strokeWidth="1.05"
          />
          <circle cx="44" cy="46" r="2.2" fill="rgba(255, 103, 0, 0.78)" />
          <line x1="23" y1="46" x2="36" y2="46" stroke="rgba(242, 221, 184, 0.36)" strokeWidth="1.15" />
          <line x1="23" y1="54" x2="47" y2="54" stroke="rgba(242, 221, 184, 0.24)" strokeWidth="1.15" />

          {/* Power bus connection */}
          <line
            x1="54"
            y1="44"
            x2="74"
            y2="44"
            stroke="rgba(255, 103, 0, 0.52)"
            strokeWidth="1.25"
            strokeDasharray="3 3"
          />

          {/* Battery storage module */}
          <rect
            x="74"
            y="28"
            width="36"
            height="38"
            fill="rgba(242, 221, 184, 0.08)"
            stroke="rgba(242, 221, 184, 0.42)"
            strokeWidth="1.25"
          />
          <line x1="82" y1="28" x2="82" y2="24" stroke="rgba(242, 221, 184, 0.42)" strokeWidth="2.4" />
          <line x1="102" y1="28" x2="102" y2="24" stroke="rgba(242, 221, 184, 0.42)" strokeWidth="2.4" />
          <rect x="82" y="38" width="20" height="4" fill="rgba(242, 221, 184, 0.28)" />
          <rect x="82" y="46" width="20" height="4" fill="rgba(255, 103, 0, 0.48)" />
          <rect x="82" y="54" width="20" height="4" fill="rgba(242, 221, 184, 0.28)" />
        </g>
      </svg>
    ),
    // Architectural engineering blueprint solar array
    right: (
      <svg
        className="how-card-art how-card-art--right"
        viewBox="0 0 172 96"
        fill="none"
        aria-hidden="true"
      >
        <g strokeLinecap="round" strokeLinejoin="round">
          {/* CAD blueprint bounding grid */}
          <rect
            x="22"
            y="24"
            width="124"
            height="54"
            fill="rgba(242, 221, 184, 0.06)"
            stroke="rgba(242, 221, 184, 0.28)"
            strokeWidth="1.1"
            strokeDasharray="4 4"
          />
          {/* Dual engineered solar modules */}
          <rect
            x="30"
            y="32"
            width="50"
            height="38"
            fill="rgba(242, 221, 184, 0.1)"
            stroke="rgba(242, 221, 184, 0.5)"
            strokeWidth="1.3"
          />
          <rect
            x="88"
            y="32"
            width="50"
            height="38"
            fill="rgba(242, 221, 184, 0.1)"
            stroke="rgba(242, 221, 184, 0.5)"
            strokeWidth="1.3"
          />
          {/* Internal grid lines */}
          <line x1="47" y1="32" x2="47" y2="70" stroke="rgba(242, 221, 184, 0.3)" strokeWidth="1" />
          <line x1="63" y1="32" x2="63" y2="70" stroke="rgba(242, 221, 184, 0.3)" strokeWidth="1" />
          <line x1="30" y1="51" x2="80" y2="51" stroke="rgba(242, 221, 184, 0.3)" strokeWidth="1" />

          <line x1="105" y1="32" x2="105" y2="70" stroke="rgba(242, 221, 184, 0.3)" strokeWidth="1" />
          <line x1="121" y1="32" x2="121" y2="70" stroke="rgba(242, 221, 184, 0.3)" strokeWidth="1" />
          <line x1="88" y1="51" x2="138" y2="51" stroke="rgba(242, 221, 184, 0.3)" strokeWidth="1" />

          {/* Blueprint dimension ticks */}
          <line x1="30" y1="15" x2="138" y2="15" stroke="rgba(255, 103, 0, 0.54)" strokeWidth="1.15" />
          <line x1="30" y1="11" x2="30" y2="19" stroke="rgba(255, 103, 0, 0.54)" strokeWidth="1.15" />
          <line x1="138" y1="11" x2="138" y2="19" stroke="rgba(255, 103, 0, 0.54)" strokeWidth="1.15" />
          <line x1="22" y1="86" x2="146" y2="86" stroke="rgba(242, 221, 184, 0.3)" strokeWidth="1" />
        </g>
      </svg>
    ),
  },

  "03": {
    // Structural rooftop mounting rail + safety earthing
    left: (
      <svg
        className="how-card-art how-card-art--left"
        viewBox="0 0 132 76"
        fill="none"
        aria-hidden="true"
      >
        <g strokeLinecap="round" strokeLinejoin="round">
          {/* Elevated mounting rail & structural legs */}
          <line x1="14" y1="64" x2="86" y2="64" stroke="rgba(242, 221, 184, 0.38)" strokeWidth="1.25" />
          <line x1="26" y1="40" x2="26" y2="64" stroke="rgba(242, 221, 184, 0.42)" strokeWidth="1.35" />
          <line x1="68" y1="24" x2="68" y2="64" stroke="rgba(242, 221, 184, 0.42)" strokeWidth="1.35" />
          <line x1="26" y1="54" x2="68" y2="38" stroke="rgba(242, 221, 184, 0.24)" strokeWidth="1.1" />

          {/* Tilted profile panel beam */}
          <polygon
            points="16,42 76,18 80,24 20,48"
            fill="rgba(242, 221, 184, 0.14)"
            stroke="rgba(242, 221, 184, 0.56)"
            strokeWidth="1.35"
          />

          {/* Safety earthing / grounding line */}
          <line x1="80" y1="34" x2="104" y2="34" stroke="rgba(255, 103, 0, 0.52)" strokeWidth="1.15" />
          <line x1="104" y1="34" x2="104" y2="52" stroke="rgba(255, 103, 0, 0.52)" strokeWidth="1.15" />
          <line x1="93" y1="52" x2="115" y2="52" stroke="rgba(242, 221, 184, 0.48)" strokeWidth="1.3" />
          <line x1="97" y1="57" x2="111" y2="57" stroke="rgba(242, 221, 184, 0.4)" strokeWidth="1.2" />
          <line x1="101" y1="62" x2="107" y2="62" stroke="rgba(242, 221, 184, 0.34)" strokeWidth="1.2" />
        </g>
      </svg>
    ),
    // Solar array -> Bi-directional KSEB Net Meter -> Grid pylon
    right: (
      <svg
        className="how-card-art how-card-art--right"
        viewBox="0 0 172 96"
        fill="none"
        aria-hidden="true"
      >
        <g strokeLinecap="round" strokeLinejoin="round">
          {/* Compact mounted solar array */}
          <polygon
            points="14,68 26,34 66,30 56,64"
            fill="rgba(242, 221, 184, 0.1)"
            stroke="rgba(242, 221, 184, 0.48)"
            strokeWidth="1.35"
          />
          <line x1="20" y1="51" x2="61" y2="47" stroke="rgba(242, 221, 184, 0.3)" strokeWidth="1" />
          <line x1="46" y1="32" x2="35" y2="66" stroke="rgba(242, 221, 184, 0.3)" strokeWidth="1" />
          <line x1="36" y1="66" x2="36" y2="84" stroke="rgba(242, 221, 184, 0.38)" strokeWidth="1.25" />

          {/* Grid sync conduit */}
          <line x1="60" y1="54" x2="78" y2="54" stroke="rgba(255, 103, 0, 0.56)" strokeWidth="1.2" />
          <line x1="112" y1="54" x2="128" y2="54" stroke="rgba(242, 221, 184, 0.42)" strokeWidth="1.2" />

          {/* Bi-directional KSEB net meter */}
          <rect
            x="78"
            y="38"
            width="34"
            height="42"
            fill="rgba(242, 221, 184, 0.09)"
            stroke="rgba(242, 221, 184, 0.48)"
            strokeWidth="1.3"
          />
          <circle
            cx="95"
            cy="53"
            r="9"
            stroke="rgba(242, 221, 184, 0.38)"
            strokeWidth="1.15"
          />
          <circle cx="95" cy="53" r="2.2" fill="rgba(255, 103, 0, 0.78)" />
          {/* Export / Import indicator bar */}
          <path d="M87 69 H103" stroke="rgba(255, 103, 0, 0.58)" strokeWidth="1.2" />
          <line x1="95" y1="80" x2="95" y2="86" stroke="rgba(242, 221, 184, 0.3)" strokeWidth="1.15" />

          {/* Clean minimal utility grid tower */}
          <path
            d="M132 86 L142 22 L152 86"
            stroke="rgba(242, 221, 184, 0.42)"
            strokeWidth="1.25"
          />
          <line x1="126" y1="36" x2="158" y2="36" stroke="rgba(242, 221, 184, 0.42)" strokeWidth="1.25" />
          <line x1="130" y1="50" x2="154" y2="50" stroke="rgba(242, 221, 184, 0.34)" strokeWidth="1.15" />
          <line x1="136" y1="68" x2="148" y2="68" stroke="rgba(242, 221, 184, 0.3)" strokeWidth="1.1" />
        </g>
      </svg>
    ),
  },

  "04": {
    // AMC protection shield + live uptime diagnostics
    left: (
      <svg
        className="how-card-art how-card-art--left"
        viewBox="0 0 132 76"
        fill="none"
        aria-hidden="true"
      >
        <g strokeLinecap="round" strokeLinejoin="round">
          {/* Service warranty & AMC shield */}
          <path
            d="M44 15 L68 22 V39 C68 53 56 62 44 66 C32 62 20 53 20 39 V22 Z"
            fill="rgba(242, 221, 184, 0.09)"
            stroke="rgba(242, 221, 184, 0.48)"
            strokeWidth="1.35"
          />
          {/* Performance pulse waveform inside shield */}
          <polyline
            points="28,42 36,42 40,34 46,48 51,38 59,38"
            stroke="rgba(255, 103, 0, 0.7)"
            strokeWidth="1.4"
          />

          {/* 24h care / radial status arcs */}
          <circle
            cx="96"
            cy="44"
            r="14"
            stroke="rgba(242, 221, 184, 0.34)"
            strokeWidth="1.2"
            strokeDasharray="4 3"
          />
          <polyline
            points="91,44 95,48 102,39"
            stroke="rgba(242, 221, 184, 0.56)"
            strokeWidth="1.4"
          />
        </g>
      </svg>
    ),
    // Twin maintained solar arrays + telemetry monitoring signal arcs
    right: (
      <svg
        className="how-card-art how-card-art--right"
        viewBox="0 0 172 96"
        fill="none"
        aria-hidden="true"
      >
        <g strokeLinecap="round" strokeLinejoin="round">
          {/* Twin angled solar panel arrays */}
          <polygon
            points="16,74 30,40 82,36 70,70"
            fill="rgba(242, 221, 184, 0.09)"
            stroke="rgba(242, 221, 184, 0.48)"
            strokeWidth="1.35"
          />
          <line x1="23" y1="57" x2="76" y2="53" stroke="rgba(242, 221, 184, 0.32)" strokeWidth="1" />
          <line x1="56" y1="38" x2="43" y2="72" stroke="rgba(242, 221, 184, 0.32)" strokeWidth="1" />
          <line x1="44" y1="72" x2="44" y2="86" stroke="rgba(242, 221, 184, 0.38)" strokeWidth="1.25" />

          <polygon
            points="84,72 98,38 150,34 138,68"
            fill="rgba(242, 221, 184, 0.09)"
            stroke="rgba(242, 221, 184, 0.48)"
            strokeWidth="1.35"
          />
          <line x1="91" y1="55" x2="144" y2="51" stroke="rgba(242, 221, 184, 0.32)" strokeWidth="1" />
          <line x1="124" y1="36" x2="111" y2="70" stroke="rgba(242, 221, 184, 0.32)" strokeWidth="1" />
          <line x1="112" y1="70" x2="112" y2="86" stroke="rgba(242, 221, 184, 0.38)" strokeWidth="1.25" />

          {/* Minimal remote monitoring telemetry arcs */}
          <circle cx="88" cy="24" r="2.2" fill="rgba(255, 103, 0, 0.72)" />
          <path d="M79 19 C84 14, 92 14, 97 19" stroke="rgba(242, 221, 184, 0.42)" strokeWidth="1.15" />
          <path d="M73 14 C81 6, 95 6, 103 14" stroke="rgba(242, 221, 184, 0.28)" strokeWidth="1.1" />

          {/* Clean panel care sparkles */}
          <path d="M144 20 V26 M141 23 H147" stroke="rgba(255, 103, 0, 0.62)" strokeWidth="1.2" />
          <path d="M24 26 V30 M22 28 H26" stroke="rgba(242, 221, 184, 0.46)" strokeWidth="1.1" />
        </g>
      </svg>
    ),
  },
};

/**
 * Renders the minimal Natural Grid solar backdrop inside each How It Works step card:
 * top-right radiating sun, rolling Kerala horizon waves, and step-specific minimal vectors.
 */
export function HowItWorksBackdrop({ stepNumber }: HowItWorksBackdropProps) {
  const key = (
    stepNumber in STEP_ARTWORK_MAP ? stepNumber : "01"
  ) as HowItWorksStepKey;
  const artwork = STEP_ARTWORK_MAP[key];

  return (
    <div className="how-card-backdrop" aria-hidden="true">
      <SunBurstCorner stepId={key} />
      <HorizonWaves />
      {artwork.left}
      {artwork.right}
    </div>
  );
}

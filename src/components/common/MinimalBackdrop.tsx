import React from "react";

/**
 * Sticky-centered minimalist architectural backdrop:
 * - Minimalist drafting plus (+) markers, sky clouds, and matte sun SVG
 * - Clean visual canvas without distracting background typography
 */
export const MinimalBackdrop: React.FC = () => {
  return (
    <div className="minimal-backdrop" aria-hidden="true">
      <div className="minimal-backdrop-sticky">
        <svg
          className="minimal-backdrop-svg gallery-bg-svg--top"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <defs>
            <linearGradient id="min-ridge-band" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#236537" stopOpacity="0" />
              <stop offset="22%" stopColor="#236537" stopOpacity="0.16" />
              <stop offset="78%" stopColor="#236537" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#236537" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Minimal drafting plus (+) crosshairs */}
          <g stroke="rgba(6, 48, 36, 0.16)" strokeWidth="1">
            <line x1="78" y1="142" x2="112" y2="142" />
            <line x1="95" y1="125" x2="95" y2="159" />

            <line x1="1328" y1="146" x2="1362" y2="146" />
            <line x1="1345" y1="129" x2="1345" y2="163" />

            <line x1="48" y1="450" x2="72" y2="450" />
            <line x1="60" y1="438" x2="60" y2="462" />

            <line x1="1368" y1="450" x2="1392" y2="450" />
            <line x1="1380" y1="438" x2="1380" y2="462" />

            <line x1="92" y1="744" x2="124" y2="744" />
            <line x1="108" y1="728" x2="108" y2="760" />

            <line x1="1316" y1="744" x2="1348" y2="744" />
            <line x1="1332" y1="728" x2="1332" y2="760" />
          </g>

          {/* Minimal matte sun disc & dashed azimuth halo */}
          <g className="gallery-parallax-sun">
            <circle
              cx="1196"
              cy="228"
              r="50"
              stroke="rgba(159, 76, 28, 0.16)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
            <circle
              cx="1196"
              cy="228"
              r="24"
              fill="rgba(159, 76, 28, 0.12)"
              stroke="rgba(159, 76, 28, 0.32)"
              strokeWidth="1.05"
            />
            <circle
              cx="228"
              cy="684"
              r="18"
              fill="rgba(159, 76, 28, 0.08)"
              stroke="rgba(159, 76, 28, 0.24)"
              strokeWidth="1"
            />
          </g>

          {/* Drifting minimal sky clouds */}
          <g
            className="gallery-parallax-clouds"
            stroke="rgba(35, 101, 55, 0.22)"
            strokeWidth="1"
            strokeLinecap="round"
          >
            <path d="M180 232 H262 M192 232 C196 220, 214 218, 222 224 C230 214, 250 217, 252 232" />
            <path d="M940 184 H1008 M950 184 C954 175, 968 174, 974 179 C980 171, 996 173, 998 184" />
            <path d="M560 154 H614 M568 154 C572 147, 584 146, 589 150 C594 144, 608 146, 610 154" />
            <path d="M1110 668 H1188 M1122 668 C1126 657, 1142 656, 1150 661 C1158 652, 1176 655, 1178 668" />
            <path d="M390 712 H446 M398 712 C402 704, 414 703, 419 707 C424 701, 438 703, 440 712" />
          </g>

          {/* Delicate horizon contour curves */}
          <g className="gallery-parallax-ridge">
            <path
              d="M0 308 C320 268, 680 300, 1060 274 C1230 262, 1340 248, 1440 264"
              stroke="url(#min-ridge-band)"
              strokeWidth="0.9"
            />
            <path
              d="M0 648 C340 618, 700 652, 1080 624 C1240 612, 1360 600, 1440 614"
              stroke="url(#min-ridge-band)"
              strokeWidth="0.9"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

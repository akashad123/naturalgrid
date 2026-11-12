import React from "react";

/**
 * Minimal architectural solar and Wayanad horizon background illustrations
 * scoped to the Gallery photos section (.gallery-section).
 * Pairs opacity-faded emerald contours (#236537 / #063024) and matte solar
 * orange (#9f4c1c / #ff6700) accents behind the installation photo grid.
 */
export const GalleryBackdropIllustrations: React.FC = () => {
  return (
    <div className="gallery-backdrop" aria-hidden="true">
      {/* Upper sky band: subtle grid ticks, drifting clouds, warm solar arc & ridge */}
      <svg
        className="gallery-bg-svg gallery-bg-svg--top"
        viewBox="0 0 1440 360"
        preserveAspectRatio="xMidYMin slice"
        fill="none"
      >
        <defs>
          <linearGradient id="gal-top-ridge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#236537" stopOpacity="0" />
            <stop offset="16%" stopColor="#236537" stopOpacity="0.24" />
            <stop offset="50%" stopColor="#063024" stopOpacity="0.16" />
            <stop offset="84%" stopColor="#236537" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#236537" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="gal-panel-tint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#236537" stopOpacity="0.11" />
            <stop offset="100%" stopColor="#063024" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        {/* Minimal drafting elevation ticks along top edges */}
        <g stroke="rgba(6, 48, 36, 0.14)" strokeWidth="0.9">
          <line x1="48" y1="36" x2="96" y2="36" />
          <line x1="72" y1="24" x2="72" y2="48" />
          <line x1="1344" y1="42" x2="1392" y2="42" />
          <line x1="1368" y1="30" x2="1368" y2="54" />
        </g>

        {/* Matte solar disc & subtle azimuth arcs on upper right */}
        <g className="gallery-parallax-sun">
          <circle
            cx="1248"
            cy="96"
            r="52"
            stroke="rgba(159, 76, 28, 0.16)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <circle
            cx="1248"
            cy="96"
            r="26"
            fill="rgba(159, 76, 28, 0.14)"
            stroke="rgba(159, 76, 28, 0.34)"
            strokeWidth="1.1"
          />
        </g>

        {/* Drifting minimal sky clouds */}
        <g
          className="gallery-parallax-clouds"
          stroke="rgba(35, 101, 55, 0.22)"
          strokeWidth="1"
          strokeLinecap="round"
        >
          <path d="M132 104 H210 M144 104 C148 92, 166 90, 174 96 C182 86, 202 89, 204 104" />
          <path d="M980 68 H1046 M990 68 C994 59, 1008 58, 1014 63 C1020 55, 1038 57, 1040 68" />
          <path d="M510 52 H564 M518 52 C522 45, 534 44, 539 48 C544 42, 558 44, 560 52" />
        </g>

        {/* Upper left wind & rooftop survey vignette */}
        <g className="gallery-parallax-array" strokeLinecap="round" strokeLinejoin="round">
          <line x1="88" y1="266" x2="88" y2="178" stroke="rgba(6, 48, 36, 0.24)" strokeWidth="1.25" />
          <path
            d="M88 178 L72 150 M88 178 L116 186 M88 178 L66 198"
            stroke="rgba(35, 101, 55, 0.28)"
            strokeWidth="1.15"
          />
          <circle cx="88" cy="178" r="2.8" fill="rgba(6, 48, 36, 0.35)" />

          {/* Tilted miniature PV rack on upper left slope */}
          <polygon
            points="126,238 228,256 218,278 118,258"
            fill="url(#gal-panel-tint)"
            stroke="rgba(6, 48, 36, 0.28)"
            strokeWidth="1.1"
          />
          <line x1="158" y1="244" x2="148" y2="264" stroke="rgba(35, 101, 55, 0.24)" strokeWidth="0.9" />
          <line x1="192" y1="250" x2="182" y2="271" stroke="rgba(35, 101, 55, 0.24)" strokeWidth="0.9" />
          <line x1="122" y1="248" x2="223" y2="267" stroke="rgba(35, 101, 55, 0.2)" strokeWidth="0.85" />
        </g>

        {/* Sweeping Wayanad ridge contours across top gutter */}
        <g className="gallery-parallax-ridge">
          <path
            d="M0 296 C260 228, 520 278, 790 256 C1030 236, 1250 184, 1440 224"
            stroke="url(#gal-top-ridge)"
            strokeWidth="1.1"
          />
          <path
            d="M0 328 C310 282, 620 318, 920 288 C1140 266, 1300 242, 1440 260"
            stroke="url(#gal-top-ridge)"
            strokeWidth="0.85"
          />
        </g>
      </svg>

      {/* Lower horizon band: architectural Kerala solar house, twin array & hillside contours */}
      <svg
        className="gallery-bg-svg gallery-bg-svg--bottom"
        viewBox="0 0 1440 340"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        <defs>
          <linearGradient id="gal-bot-ridge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#236537" stopOpacity="0" />
            <stop offset="14%" stopColor="#236537" stopOpacity="0.28" />
            <stop offset="86%" stopColor="#236537" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#236537" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="gal-bot-hill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#236537" stopOpacity="0.065" />
            <stop offset="100%" stopColor="#236537" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Soft tinted hill fill anchored along lower edge */}
        <path
          d="M0 246 C260 168, 540 218, 820 188 C1080 160, 1280 132, 1440 168 L1440 340 L0 340 Z"
          fill="url(#gal-bot-hill)"
        />

        {/* Lower topographic ridges */}
        <g className="gallery-parallax-ridge">
          <path
            d="M0 246 C260 168, 540 218, 820 188 C1080 160, 1280 132, 1440 168"
            stroke="url(#gal-bot-ridge)"
            strokeWidth="1.15"
          />
          <path
            d="M0 282 C320 248, 660 282, 980 248 C1180 226, 1330 212, 1440 228"
            stroke="url(#gal-bot-ridge)"
            strokeWidth="0.9"
          />
          <path
            d="M40 314 C360 296, 740 312, 1120 284 C1260 274, 1360 268, 1440 274"
            stroke="url(#gal-bot-ridge)"
            strokeWidth="0.8"
          />
        </g>

        {/* Bottom-left foreground ground-mounted PV installation silhouette */}
        <g className="gallery-parallax-array" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="212" cy="276" rx="140" ry="10" fill="rgba(35, 101, 55, 0.06)" />
          <line x1="112" y1="244" x2="112" y2="274" stroke="rgba(6, 48, 36, 0.34)" strokeWidth="1.4" />
          <line x1="176" y1="252" x2="176" y2="278" stroke="rgba(6, 48, 36, 0.34)" strokeWidth="1.4" />
          <line x1="242" y1="258" x2="242" y2="281" stroke="rgba(6, 48, 36, 0.34)" strokeWidth="1.4" />
          <line x1="302" y1="262" x2="302" y2="283" stroke="rgba(6, 48, 36, 0.34)" strokeWidth="1.4" />

          <polygon
            points="84,186 332,230 318,264 98,236"
            fill="rgba(35, 101, 55, 0.08)"
            stroke="rgba(6, 48, 36, 0.36)"
            strokeWidth="1.35"
          />
          <line x1="146" y1="197" x2="152" y2="243" stroke="rgba(35, 101, 55, 0.28)" strokeWidth="1" />
          <line x1="208" y1="208" x2="210" y2="251" stroke="rgba(35, 101, 55, 0.28)" strokeWidth="1" />
          <line x1="270" y1="219" x2="266" y2="258" stroke="rgba(35, 101, 55, 0.28)" strokeWidth="1" />
          <line x1="91" y1="212" x2="325" y2="248" stroke="rgba(35, 101, 55, 0.26)" strokeWidth="0.95" />
        </g>

        {/* Bottom-right Kerala solar residence & grid line motif */}
        <g className="gallery-parallax-array" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M1222 238 V196 L1272 170 L1322 196 V238 Z"
            fill="rgba(35, 101, 55, 0.055)"
            stroke="rgba(6, 48, 36, 0.34)"
            strokeWidth="1.25"
          />
          <path
            d="M1212 199 L1272 166 L1332 199"
            stroke="rgba(6, 48, 36, 0.4)"
            strokeWidth="1.3"
          />
          {/* Matte solar panel inset on house pitch */}
          <polygon
            points="1274,173 1310,192 1303,200 1267,181"
            fill="rgba(159, 76, 28, 0.16)"
            stroke="rgba(159, 76, 28, 0.48)"
            strokeWidth="1.05"
          />
          <rect
            x="1258"
            y="214"
            width="20"
            height="24"
            stroke="rgba(6, 48, 36, 0.28)"
            strokeWidth="1"
          />
          {/* Minimal transmission tower far right */}
          <path
            d="M1368 236 L1378 158 L1388 236 M1364 178 H1392 M1367 198 H1389"
            stroke="rgba(35, 101, 55, 0.26)"
            strokeWidth="1"
          />
        </g>
      </svg>
    </div>
  );
};

import React from "react";

/**
 * Architectural solar irradiance, KSEB net-meter, and Wayanad horizon backdrop
 * illustrations scoped to the Savings Calculator page (.calculator-stage).
 */
export const CalculatorBackdropIllustrations: React.FC = () => {
  return (
    <div className="calc-backdrop" aria-hidden="true">
      {/* Upper schematic sky band: solar arc protractor, clouds & tilted PV array */}
      <svg
        className="calc-bg-svg calc-bg-svg--top"
        viewBox="0 0 1440 340"
        preserveAspectRatio="xMidYMin slice"
        fill="none"
      >
        <defs>
          <linearGradient id="calc-ridge-top" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#236537" stopOpacity="0" />
            <stop offset="18%" stopColor="#236537" stopOpacity="0.22" />
            <stop offset="50%" stopColor="#063024" stopOpacity="0.14" />
            <stop offset="82%" stopColor="#236537" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#236537" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Subtle schematic grid crosshairs */}
        <g stroke="rgba(6, 48, 36, 0.14)" strokeWidth="0.9">
          <line x1="48" y1="42" x2="96" y2="42" />
          <line x1="72" y1="22" x2="72" y2="62" />
          <line x1="1344" y1="46" x2="1392" y2="46" />
          <line x1="1368" y1="26" x2="1368" y2="66" />
        </g>

        {/* Upper-left minimal PV rooftop elevation sketch */}
        <g strokeLinecap="round" strokeLinejoin="round">
          <polygon
            points="64,174 176,142 192,188 80,220"
            fill="rgba(35, 101, 55, 0.06)"
            stroke="rgba(6, 48, 36, 0.24)"
            strokeWidth="1.15"
          />
          <line x1="102" y1="163" x2="118" y2="209" stroke="rgba(35, 101, 55, 0.22)" strokeWidth="0.9" />
          <line x1="140" y1="152" x2="156" y2="198" stroke="rgba(35, 101, 55, 0.22)" strokeWidth="0.9" />
          <line x1="72" y1="197" x2="184" y2="165" stroke="rgba(35, 101, 55, 0.18)" strokeWidth="0.9" />
          <line x1="94" y1="216" x2="94" y2="246" stroke="rgba(6, 48, 36, 0.24)" strokeWidth="1.1" />
          <line x1="176" y1="193" x2="176" y2="226" stroke="rgba(6, 48, 36, 0.24)" strokeWidth="1.1" />
        </g>

        {/* Upper-right solar azimuth arc + matte sun disc */}
        <g>
          <path
            d="M1196 154 A96 96 0 0 1 1388 154"
            stroke="rgba(159, 76, 28, 0.2)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <circle
            cx="1292"
            cy="112"
            r="24"
            fill="rgba(159, 76, 28, 0.11)"
            stroke="rgba(159, 76, 28, 0.3)"
            strokeWidth="1.1"
          />
          <line x1="1292" y1="76" x2="1292" y2="62" stroke="rgba(159, 76, 28, 0.28)" strokeWidth="1" />
          <line x1="1256" y1="88" x2="1244" y2="78" stroke="rgba(159, 76, 28, 0.24)" strokeWidth="1" />
          <line x1="1328" y1="88" x2="1340" y2="78" stroke="rgba(159, 76, 28, 0.24)" strokeWidth="1" />
        </g>

        {/* Sweeping architectural ridge line */}
        <path
          d="M0 292 C280 230, 560 278, 840 248 C1080 222, 1280 186, 1440 220"
          stroke="url(#calc-ridge-top)"
          strokeWidth="1.1"
        />
      </svg>

      {/* Lower horizon band: schematic bi-directional meter wave, solar home & ridges */}
      <svg
        className="calc-bg-svg calc-bg-svg--bottom"
        viewBox="0 0 1440 320"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        <defs>
          <linearGradient id="calc-hill-bot" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#236537" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#236537" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="calc-ridge-bot" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#236537" stopOpacity="0" />
            <stop offset="16%" stopColor="#236537" stopOpacity="0.24" />
            <stop offset="84%" stopColor="#236537" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#236537" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M0 232 C260 162, 540 212, 820 184 C1080 156, 1280 128, 1440 162 L1440 320 L0 320 Z"
          fill="url(#calc-hill-bot)"
        />
        <path
          d="M0 232 C260 162, 540 212, 820 184 C1080 156, 1280 128, 1440 162"
          stroke="url(#calc-ridge-bot)"
          strokeWidth="1.15"
        />
        <path
          d="M0 268 C320 236, 660 272, 980 238 C1180 216, 1320 202, 1440 218"
          stroke="url(#calc-ridge-bot)"
          strokeWidth="0.9"
        />

        {/* Bottom-left Kerala rooftop solar house vignette */}
        <g strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M84 268 V218 L142 186 L200 218 V268 Z"
            fill="rgba(35, 101, 55, 0.05)"
            stroke="rgba(6, 48, 36, 0.28)"
            strokeWidth="1.2"
          />
          <polygon
            points="92,208 142,180 192,208 142,218"
            fill="rgba(35, 101, 55, 0.09)"
            stroke="rgba(35, 101, 55, 0.34)"
            strokeWidth="1"
          />
          <rect
            x="130"
            y="238"
            width="24"
            height="30"
            stroke="rgba(6, 48, 36, 0.24)"
            strokeWidth="1"
          />
        </g>

        {/* Bottom-right schematic net-metering grid pylon & sine output curve */}
        <g strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M1262 262 L1278 164 L1294 262 M1267 224 H1289 M1271 196 H1285"
            stroke="rgba(6, 48, 36, 0.26)"
            strokeWidth="1.15"
          />
          <path
            d="M1180 228 C1202 204, 1222 250, 1244 228"
            stroke="rgba(159, 76, 28, 0.26)"
            strokeWidth="1"
          />
          <circle cx="1334" cy="212" r="22" stroke="rgba(6, 48, 36, 0.2)" strokeWidth="1" strokeDasharray="3 4" />
          <path d="M1324 212 H1344 M1338 206 L1344 212 L1338 218" stroke="rgba(35, 101, 55, 0.32)" strokeWidth="1.1" />
        </g>
      </svg>

      {/* Mid-band minimal solar glow & smooth contour waves */}
      <svg
        className="calc-bg-svg calc-bg-svg--mid"
        viewBox="0 0 1440 360"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id="calc-mid-glow" cx="72%" cy="48%" r="44%">
            <stop offset="0%" stopColor="#236537" stopOpacity="0.065" />
            <stop offset="100%" stopColor="#236537" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="calc-mid-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#236537" stopOpacity="0" />
            <stop offset="30%" stopColor="#236537" stopOpacity="0.14" />
            <stop offset="75%" stopColor="#236537" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#236537" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="1440" height="360" fill="url(#calc-mid-glow)" />

        <path
          d="M0 148 C320 206, 660 112, 1020 156 C1220 180, 1340 132, 1440 146"
          stroke="url(#calc-mid-line)"
          strokeWidth="1.05"
        />
        <path
          d="M0 226 C360 264, 720 184, 1080 226 C1240 244, 1360 210, 1440 222"
          stroke="url(#calc-mid-line)"
          strokeWidth="0.85"
        />
      </svg>
    </div>
  );
};

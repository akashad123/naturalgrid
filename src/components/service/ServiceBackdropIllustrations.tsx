import React from "react";

export type ServiceVisualId =
  | "installation"
  | "battery-backup"
  | "amc"
  | "subsidy"
  | "water-heater";

interface ServiceBackdropIllustrationsProps {
  serviceId?: ServiceVisualId;
}

/**
 * Tailored minimal architectural technical schematics rendered subtly in the
 * outer gutters of each service detail page without intruding on editorial copy.
 */
export const ServiceBackdropIllustrations: React.FC<
  ServiceBackdropIllustrationsProps
> = ({ serviceId = "installation" }) => {
  return (
    <div className="service-backdrop" aria-hidden="true">
      {/* Upper subtle ridge + drafting calibration markers */}
      <svg
        className="service-bg-svg service-bg-svg--top"
        viewBox="0 0 1440 300"
        preserveAspectRatio="xMidYMin slice"
        fill="none"
      >
        <defs>
          <linearGradient id="srv-ridge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#236537" stopOpacity="0" />
            <stop offset="20%" stopColor="#236537" stopOpacity="0.18" />
            <stop offset="80%" stopColor="#236537" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#236537" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g stroke="rgba(6, 48, 36, 0.12)" strokeWidth="0.9">
          <line x1="44" y1="36" x2="88" y2="36" />
          <line x1="66" y1="18" x2="66" y2="54" />
          <line x1="1352" y1="36" x2="1396" y2="36" />
          <line x1="1374" y1="18" x2="1374" y2="54" />
        </g>

        {/* Right-edge technical schematic specific to the active service */}
        {serviceId === "installation" && (
          <g strokeLinecap="round" strokeLinejoin="round">
            <circle cx="1320" cy="84" r="22" fill="rgba(159, 76, 28, 0.1)" stroke="rgba(159, 76, 28, 0.28)" strokeWidth="1" />
            <polygon
              points="1196,154 1344,122 1358,170 1210,202"
              fill="rgba(35, 101, 55, 0.05)"
              stroke="rgba(6, 48, 36, 0.24)"
              strokeWidth="1.1"
            />
            <line x1="1245" y1="143" x2="1259" y2="191" stroke="rgba(35, 101, 55, 0.22)" strokeWidth="0.9" />
            <line x1="1295" y1="133" x2="1309" y2="181" stroke="rgba(35, 101, 55, 0.22)" strokeWidth="0.9" />
            <line x1="1203" y1="178" x2="1351" y2="146" stroke="rgba(35, 101, 55, 0.18)" strokeWidth="0.9" />
          </g>
        )}

        {serviceId === "battery-backup" && (
          <g strokeLinecap="round" strokeLinejoin="round">
            <rect x="1238" y="84" width="112" height="72" fill="rgba(35, 101, 55, 0.05)" stroke="rgba(6, 48, 36, 0.24)" strokeWidth="1.15" />
            <rect x="1250" y="98" width="22" height="44" fill="rgba(35, 101, 55, 0.12)" stroke="rgba(35, 101, 55, 0.26)" strokeWidth="0.9" />
            <rect x="1283" y="98" width="22" height="44" fill="rgba(35, 101, 55, 0.12)" stroke="rgba(35, 101, 55, 0.26)" strokeWidth="0.9" />
            <rect x="1316" y="98" width="22" height="44" fill="rgba(159, 76, 28, 0.12)" stroke="rgba(159, 76, 28, 0.28)" strokeWidth="0.9" />
            <path d="M1176 122 C1192 98, 1208 146, 1224 122" stroke="rgba(35, 101, 55, 0.28)" strokeWidth="1.1" />
          </g>
        )}

        {serviceId === "amc" && (
          <g strokeLinecap="round" strokeLinejoin="round">
            <circle cx="1306" cy="116" r="46" stroke="rgba(6, 48, 36, 0.2)" strokeWidth="1" strokeDasharray="4 5" />
            <polyline
              points="1244,126 1268,126 1280,104 1296,144 1312,92 1326,126 1364,126"
              stroke="rgba(35, 101, 55, 0.3)"
              strokeWidth="1.25"
            />
            <circle cx="1312" cy="92" r="3" fill="rgba(159, 76, 28, 0.45)" />
          </g>
        )}

        {serviceId === "subsidy" && (
          <g strokeLinecap="round" strokeLinejoin="round">
            <rect x="1246" y="76" width="96" height="96" fill="rgba(35, 101, 55, 0.04)" stroke="rgba(6, 48, 36, 0.22)" strokeWidth="1.1" />
            <circle cx="1294" cy="124" r="28" stroke="rgba(35, 101, 55, 0.28)" strokeWidth="1" />
            <path d="M1274 118 H1314 M1306 111 L1314 118 L1306 125" stroke="rgba(35, 101, 55, 0.32)" strokeWidth="1.1" />
            <path d="M1314 132 H1274 M1282 125 L1274 132 L1282 139" stroke="rgba(159, 76, 28, 0.34)" strokeWidth="1.1" />
          </g>
        )}

        {serviceId === "water-heater" && (
          <g strokeLinecap="round" strokeLinejoin="round">
            <rect x="1238" y="80" width="114" height="26" fill="rgba(159, 76, 28, 0.08)" stroke="rgba(6, 48, 36, 0.24)" strokeWidth="1.1" />
            <line x1="1254" y1="106" x2="1224" y2="170" stroke="rgba(35, 101, 55, 0.26)" strokeWidth="1.2" />
            <line x1="1276" y1="106" x2="1246" y2="170" stroke="rgba(35, 101, 55, 0.26)" strokeWidth="1.2" />
            <line x1="1298" y1="106" x2="1268" y2="170" stroke="rgba(35, 101, 55, 0.26)" strokeWidth="1.2" />
            <line x1="1320" y1="106" x2="1290" y2="170" stroke="rgba(35, 101, 55, 0.26)" strokeWidth="1.2" />
            <line x1="1342" y1="106" x2="1312" y2="170" stroke="rgba(35, 101, 55, 0.26)" strokeWidth="1.2" />
          </g>
        )}

        <path
          d="M0 248 C300 200, 620 242, 960 212 C1160 194, 1310 176, 1440 196"
          stroke="url(#srv-ridge)"
          strokeWidth="1"
        />
      </svg>

      {/* Bottom gentle horizon band matching calculator & gallery */}
      <svg
        className="service-bg-svg service-bg-svg--bottom"
        viewBox="0 0 1440 220"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        <defs>
          <linearGradient id="srv-hill-bot" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#236537" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#236537" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 156 C280 104, 580 148, 900 120 C1140 98, 1300 84, 1440 112 L1440 220 L0 220 Z"
          fill="url(#srv-hill-bot)"
        />
        <path
          d="M0 156 C280 104, 580 148, 900 120 C1140 98, 1300 84, 1440 112"
          stroke="rgba(35, 101, 55, 0.2)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

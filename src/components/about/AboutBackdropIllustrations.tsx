import React from "react";

/**
 * Minimal architectural horizon and drafting tick motif used sparingly
 * on About page sections to maintain clean geometric continuity.
 */
export const AboutHorizonAccent: React.FC = () => {
  return (
    <div className="about-horizon-art" aria-hidden="true">
      <svg viewBox="0 0 1440 180" preserveAspectRatio="xMidYMax slice" fill="none">
        <defs>
          <linearGradient id="about-ridge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#236537" stopOpacity="0" />
            <stop offset="22%" stopColor="#236537" stopOpacity="0.18" />
            <stop offset="78%" stopColor="#236537" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#236537" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 132 C320 82, 640 124, 960 96 C1160 78, 1310 66, 1440 88"
          stroke="url(#about-ridge-grad)"
          strokeWidth="1"
        />
        <path
          d="M0 158 C380 130, 740 156, 1100 134 C1240 125, 1350 118, 1440 128"
          stroke="url(#about-ridge-grad)"
          strokeWidth="0.75"
        />
      </svg>
    </div>
  );
};

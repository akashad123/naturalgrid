/**
 * Etched emerald and solar-amber landscape illustrations for the full-bleed SiteFooter:
 * - FooterHeroIllustration: full-width undulating green topographic contour hills with a
 *   luminous left-anchored solar scene (#FF6700 sun, tilted solar array, foliage & solar grid ridge).
 * - FooterCornerWave: subtle matching contour wave accent tucked in the bottom-right footer corner.
 */
export function FooterHeroIllustration() {
  return (
    <div className="footer-art" aria-hidden="true">
      {/* Full-width multi-line topographic green horizon hills spanning across the footer */}
      <svg
        className="footer-hills-svg"
        viewBox="0 0 1440 340"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <radialGradient id="footer-ambient-solar" cx="21%" cy="32%" r="36%">
            <stop offset="0%" stopColor="#ff6700" stopOpacity="0.22" />
            <stop offset="45%" stopColor="#236537" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#0c3b22" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="footer-hill-back" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14542f" stopOpacity="0.58" />
            <stop offset="50%" stopColor="#1a6337" stopOpacity="0.46" />
            <stop offset="100%" stopColor="#0e4225" stopOpacity="0.38" />
          </linearGradient>

          <linearGradient id="footer-hill-front" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0a331d" stopOpacity="0.92" />
            <stop offset="55%" stopColor="#0d3d23" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#092d19" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="footer-contour-bright" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5ec77f" stopOpacity="0.65" />
            <stop offset="35%" stopColor="#7ad996" stopOpacity="0.78" />
            <stop offset="72%" stopColor="#4aad69" stopOpacity="0.52" />
            <stop offset="100%" stopColor="#358f53" stopOpacity="0.35" />
          </linearGradient>

          <linearGradient id="footer-contour-soft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3f9e5d" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#56be77" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2b7a46" stopOpacity="0.22" />
          </linearGradient>
        </defs>

        {/* Soft solar atmosphere mesh */}
        <rect x="0" y="0" width="1440" height="340" fill="url(#footer-ambient-solar)" />

        {/* Distant Wayanad hillside silhouette */}
        <path
          d="M0 242 C180 186, 360 198, 560 238 C780 282, 1080 234, 1440 182 L1440 340 L0 340 Z"
          fill="url(#footer-hill-back)"
        />
        <path
          d="M0 242 C180 186, 360 198, 560 238 C780 282, 1080 234, 1440 182"
          stroke="url(#footer-contour-soft)"
          strokeWidth="1.2"
        />

        {/* Mid-ground sweeping ridge & foreground base blending cleanly into lower footer */}
        <path
          d="M0 282 C210 248, 430 294, 710 278 C980 264, 1210 292, 1440 258 L1440 340 L0 340 Z"
          fill="url(#footer-hill-front)"
        />
        <path
          d="M0 282 C210 248, 430 294, 710 278 C980 264, 1210 292, 1440 258"
          stroke="url(#footer-contour-bright)"
          strokeWidth="1.45"
        />

        {/* Layered fine topographic contour filaments across the full width */}
        <g stroke="url(#footer-contour-soft)" fill="none" strokeLinecap="round">
          <path d="M0 254 C190 202, 375 216, 595 256 C820 296, 1110 252, 1440 206" strokeWidth="0.95" />
          <path d="M0 266 C200 220, 395 238, 635 270 C870 302, 1140 268, 1440 226" strokeWidth="0.85" opacity="0.82" />
          <path d="M0 294 C225 262, 460 306, 735 289 C1000 274, 1225 304, 1440 272" strokeWidth="1" opacity="0.72" />
          <path d="M0 306 C240 276, 485 316, 760 299 C1020 284, 1245 314, 1440 285" strokeWidth="0.85" opacity="0.54" />
          <path d="M0 318 C255 290, 510 326, 790 309 C1045 295, 1265 322, 1440 298" strokeWidth="0.75" opacity="0.38" />
          <path d="M0 329 C280 306, 540 334, 825 319 C1070 306, 1285 330, 1440 311" strokeWidth="0.7" opacity="0.24" />
        </g>
      </svg>

      {/* Proportional left-anchored solar scene so circle sun and panel geometry never stretch */}
      <svg
        className="footer-scene-svg"
        viewBox="0 0 660 320"
        preserveAspectRatio="xMinYMax meet"
        fill="none"
      >
        <defs>
          <radialGradient id="footer-sun-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff7b1a" stopOpacity="0.46" />
            <stop offset="48%" stopColor="#ff6700" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#ff6700" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="footer-sun-core" cx="42%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#ffaa3b" />
            <stop offset="55%" stopColor="#ff6700" />
            <stop offset="100%" stopColor="#bf4400" />
          </radialGradient>

          <linearGradient id="footer-panel-surface" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2f854d" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#174d2c" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#0a2e1a" stopOpacity="0.96" />
          </linearGradient>

          <linearGradient id="footer-roof-array" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff8c2e" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ff6700" stopOpacity="0.22" />
          </linearGradient>
        </defs>

        {/* Subtle sunlit clouds */}
        <g stroke="rgba(130, 214, 158, 0.42)" strokeWidth="1.05" strokeLinecap="round">
          <path d="M52 104 H102 M59 104 C62 94, 74 92, 80 97 C86 88, 100 91, 100 104" />
          <path d="M368 96 H414 M374 96 C377 88, 388 86, 393 90 C398 83, 411 86, 411 96" />
        </g>

        {/* Warm glowing #FF6700 solar disc and concentric corona */}
        <circle cx="242" cy="112" r="76" fill="url(#footer-sun-halo)" />
        <circle
          cx="242"
          cy="112"
          r="38"
          stroke="rgba(255, 138, 44, 0.28)"
          strokeWidth="1"
        />
        <circle
          cx="242"
          cy="112"
          r="31"
          fill="url(#footer-sun-core)"
          stroke="rgba(255, 204, 136, 0.48)"
          strokeWidth="1.2"
        />

        {/* Secondary solar service building & grid ridge on right hill (100% solar, zero turbines) */}
        <g strokeLinecap="round" strokeLinejoin="round">
          {/* Solar rooftop pavilion silhouette */}
          <path
            d="M446 254 V216 L496 190 L546 216 V254 Z"
            fill="rgba(16, 68, 38, 0.72)"
            stroke="rgba(122, 217, 150, 0.46)"
            strokeWidth="1.2"
          />
          <path
            d="M438 219 L496 186 L554 219"
            stroke="rgba(170, 236, 189, 0.68)"
            strokeWidth="1.5"
          />
          {/* Illuminated roof-mounted solar subarray */}
          <polygon
            points="496,191 536,212 528,220 488,199"
            fill="url(#footer-roof-array)"
            stroke="rgba(255, 166, 84, 0.78)"
            strokeWidth="1.15"
          />
          {/* Building subtle window / doorway details */}
          <line x1="484" y1="254" x2="484" y2="233" stroke="rgba(122, 217, 150, 0.42)" strokeWidth="1.1" />
          <line x1="506" y1="254" x2="506" y2="233" stroke="rgba(122, 217, 150, 0.42)" strokeWidth="1.1" />
          <line x1="484" y1="233" x2="506" y2="233" stroke="rgba(122, 217, 150, 0.42)" strokeWidth="1.1" />

          {/* Foliage flanking the solar pavilion */}
          <path
            d="M402 256 C402 238, 420 232, 429 242 C436 234, 449 239, 449 256 Z"
            fill="#145630"
            stroke="rgba(110, 206, 140, 0.45)"
            strokeWidth="1.1"
          />
          <path
            d="M548 256 C548 242, 562 237, 569 245 C576 238, 588 243, 588 256 Z"
            fill="#145630"
            stroke="rgba(110, 206, 140, 0.42)"
            strokeWidth="1.05"
          />
        </g>

        {/* Ground foliage left of main solar array */}
        <path
          d="M34 268 C34 246, 54 236, 66 250 C76 238, 96 244, 96 268 Z"
          fill="#155d34"
          stroke="rgba(122, 217, 150, 0.5)"
          strokeWidth="1.15"
        />

        {/* Foreground precision-tilted multi-panel solar array */}
        <g strokeLinecap="round" strokeLinejoin="round">
          {/* Mounting piers & base shadow */}
          <ellipse cx="198" cy="281" rx="134" ry="8" fill="rgba(5, 22, 12, 0.55)" />
          <line x1="98" y1="238" x2="98" y2="274" stroke="rgba(154, 232, 178, 0.72)" strokeWidth="2.4" />
          <line x1="148" y1="246" x2="148" y2="278" stroke="rgba(154, 232, 178, 0.72)" strokeWidth="2.4" />
          <line x1="202" y1="254" x2="202" y2="282" stroke="rgba(154, 232, 178, 0.72)" strokeWidth="2.4" />
          <line x1="254" y1="262" x2="254" y2="285" stroke="rgba(154, 232, 178, 0.72)" strokeWidth="2.4" />
          <line x1="298" y1="268" x2="298" y2="288" stroke="rgba(154, 232, 178, 0.72)" strokeWidth="2.4" />

          {/* Tilted photovoltaic array plane */}
          <polygon
            points="74,172 322,228 302,272 90,238"
            fill="url(#footer-panel-surface)"
            stroke="#b6efc5"
            strokeWidth="1.9"
          />
          {/* Top-edge metallic solar catchlight */}
          <polyline
            points="74,172 322,228"
            stroke="#e4ffeb"
            strokeWidth="2.2"
          />
          {/* Beveled lower frame depth */}
          <polyline
            points="74,172 69,179 86,243 302,278 324,233"
            stroke="rgba(154, 232, 178, 0.52)"
            strokeWidth="1.35"
          />

          {/* Horizontal center seam splitting upper & lower PV rows */}
          <line
            x1="82"
            y1="205"
            x2="312"
            y2="250"
            stroke="rgba(196, 245, 209, 0.72)"
            strokeWidth="1.2"
          />

          {/* Vertical module dividers across 6 bays */}
          <line x1="115" y1="181" x2="126" y2="244" stroke="rgba(196, 245, 209, 0.65)" strokeWidth="1.15" />
          <line x1="156" y1="190" x2="162" y2="250" stroke="rgba(196, 245, 209, 0.65)" strokeWidth="1.15" />
          <line x1="198" y1="200" x2="198" y2="256" stroke="rgba(196, 245, 209, 0.65)" strokeWidth="1.15" />
          <line x1="239" y1="209" x2="233" y2="262" stroke="rgba(196, 245, 209, 0.65)" strokeWidth="1.15" />
          <line x1="280" y1="219" x2="268" y2="267" stroke="rgba(196, 245, 209, 0.65)" strokeWidth="1.15" />

          {/* Diagonal subtle specular reflection lines */}
          <line x1="128" y1="190" x2="150" y2="207" stroke="rgba(255, 255, 255, 0.34)" strokeWidth="1.1" />
          <line x1="206" y1="208" x2="226" y2="224" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.1" />
        </g>

        {/* Foreground meadow tuft flanking right array corner */}
        <path
          d="M312 276 C312 260, 328 254, 336 263 C342 256, 354 260, 354 276 Z"
          fill="#155d34"
          stroke="rgba(122, 217, 150, 0.45)"
          strokeWidth="1.05"
        />
      </svg>
    </div>
  );
}

/** Subtle emerald topographic contour curve tucked into the bottom-right footer corner. */
export function FooterCornerWave() {
  return (
    <div className="footer-corner-art" aria-hidden="true">
      <svg
        className="footer-corner-svg"
        viewBox="0 0 380 180"
        fill="none"
      >
        <defs>
          <linearGradient id="footer-corner-stroke" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4aad69" stopOpacity="0" />
            <stop offset="45%" stopColor="#65cf86" stopOpacity="0.48" />
            <stop offset="100%" stopColor="#8be3a6" stopOpacity="0.62" />
          </linearGradient>
        </defs>
        <path
          d="M18 180 C110 176, 198 118, 286 78 C326 60, 358 58, 380 62 L380 180 Z"
          fill="rgba(35, 101, 55, 0.14)"
        />
        <g stroke="url(#footer-corner-stroke)" fill="none" strokeLinecap="round">
          <path d="M18 180 C110 176, 198 118, 286 78 C326 60, 358 58, 380 62" strokeWidth="1.25" />
          <path d="M54 180 C138 172, 218 122, 298 90 C334 76, 362 76, 380 80" strokeWidth="0.95" opacity="0.72" />
          <path d="M92 180 C166 170, 240 132, 312 106 C342 95, 366 96, 380 99" strokeWidth="0.85" opacity="0.48" />
          <path d="M132 180 C196 170, 262 142, 326 122 C350 114, 368 115, 380 118" strokeWidth="0.75" opacity="0.28" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Minimal Natural Grid solar illustrations for the Home page Why Natural Grid / About Us section:
 * - FeaturesAboutIllustration: etched Wayanad hills, warm #FF6700 sun, multi-panel solar array,
 *   and Kerala service rooftop silhouette directly below the About Us copy.
 * - FeaturesPanelAccent: subtle bottom-right horizon & solar array accent inside the dark-green CTA panel.
 */
export function FeaturesAboutIllustration() {
  return (
    <div className="features-about-art" aria-hidden="true">
      <svg
        className="features-about-art-svg"
        viewBox="0 0 460 220"
        fill="none"
      >
        <defs>
          {/* Opacity-only horizontal fade for Wayanad horizon ridges */}
          <linearGradient id="feat-ridge-fade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#236537" stopOpacity="0" />
            <stop offset="14%" stopColor="#236537" stopOpacity="0.34" />
            <stop offset="86%" stopColor="#236537" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#236537" stopOpacity="0" />
          </linearGradient>

          {/* Warm solar glow matching brand orange #FF6700 */}
          <radialGradient id="feat-sun-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff6700" stopOpacity="0.28" />
            <stop offset="55%" stopColor="#ff6700" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ff6700" stopOpacity="0" />
          </radialGradient>

          {/* Soft green glass tint across tilted solar panels */}
          <linearGradient id="feat-panel-glass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#236537" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#236537" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#063024" stopOpacity="0.14" />
          </linearGradient>
        </defs>

        {/* Warm solar disc & soft halo */}
        <circle cx="118" cy="54" r="36" fill="url(#feat-sun-glow)" />
        <circle
          cx="118"
          cy="54"
          r="15"
          fill="rgba(255, 103, 0, 0.22)"
          stroke="rgba(255, 103, 0, 0.45)"
          strokeWidth="1"
        />

        {/* Minimal wispy cloud lines */}
        <g stroke="rgba(35, 101, 55, 0.28)" strokeWidth="0.95" strokeLinecap="round">
          <path d="M50 76 H86 M56 76 C58 69, 66 68, 70 72 C74 66, 84 68, 84 76" />
          <path d="M214 90 H252 M220 90 C222 84, 230 83, 234 86 C238 81, 248 83, 248 90" />
        </g>

        {/* Distant rolling Wayanad hills */}
        <path
          d="M8 148 C78 106, 152 108, 224 136 C296 164, 366 112, 452 132 L452 198 L8 198 Z"
          fill="rgba(35, 101, 55, 0.05)"
        />
        <path
          d="M8 148 C78 106, 152 108, 224 136 C296 164, 366 112, 452 132"
          stroke="url(#feat-ridge-fade)"
          strokeWidth="1.05"
        />
        <path
          d="M12 166 C94 140, 178 152, 266 168 C338 180, 404 150, 450 156"
          stroke="url(#feat-ridge-fade)"
          strokeWidth="0.9"
        />

        {/* Right ridge Kerala rooftop service center & palm foliage */}
        <g strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M342 156 V132 L372 117 L402 132 V156 Z"
            fill="rgba(35, 101, 55, 0.07)"
            stroke="rgba(6, 48, 36, 0.44)"
            strokeWidth="1.15"
          />
          <path
            d="M336 134 L372 114 L408 134"
            stroke="rgba(6, 48, 36, 0.52)"
            strokeWidth="1.2"
          />
          {/* Small solar array mounted cleanly on roof slope */}
          <polygon
            points="374,118 395,129 390,134 369,123"
            fill="rgba(255, 103, 0, 0.16)"
            stroke="rgba(255, 103, 0, 0.62)"
            strokeWidth="1"
          />
          <line x1="364" y1="156" x2="364" y2="143" stroke="rgba(6, 48, 36, 0.36)" strokeWidth="1" />
          <line x1="376" y1="156" x2="376" y2="143" stroke="rgba(6, 48, 36, 0.36)" strokeWidth="1" />
          <line x1="364" y1="143" x2="376" y2="143" stroke="rgba(6, 48, 36, 0.36)" strokeWidth="1" />

          {/* Minimal foliage flanking rooftop */}
          <path
            d="M408 156 C408 144, 418 140, 424 147 C429 142, 437 146, 437 156 Z"
            fill="rgba(35, 101, 55, 0.08)"
            stroke="rgba(35, 101, 55, 0.38)"
            strokeWidth="0.95"
          />
        </g>

        {/* Ground shadow beneath main solar array */}
        <ellipse cx="182" cy="192" rx="146" ry="8" fill="rgba(35, 101, 55, 0.09)" />

        {/* Foreground multi-panel tilted solar array (perspective) */}
        <g strokeLinecap="round" strokeLinejoin="round">
          {/* Steel mounting piers & cross struts */}
          <line x1="74" y1="168" x2="74" y2="192" stroke="rgba(6, 48, 36, 0.56)" strokeWidth="1.4" />
          <line x1="128" y1="174" x2="128" y2="195" stroke="rgba(6, 48, 36, 0.56)" strokeWidth="1.4" />
          <line x1="184" y1="179" x2="184" y2="198" stroke="rgba(6, 48, 36, 0.56)" strokeWidth="1.4" />
          <line x1="238" y1="184" x2="238" y2="200" stroke="rgba(6, 48, 36, 0.56)" strokeWidth="1.4" />
          <line x1="286" y1="187" x2="286" y2="201" stroke="rgba(6, 48, 36, 0.56)" strokeWidth="1.4" />

          {/* Tilted solar array plane */}
          <polygon
            points="52,118 308,164 294,192 66,164"
            fill="url(#feat-panel-glass)"
            stroke="rgba(6, 48, 36, 0.68)"
            strokeWidth="1.45"
          />
          {/* Beveled under-frame depth */}
          <polyline
            points="52,118 49,122 63,167 294,196 310,167"
            stroke="rgba(6, 48, 36, 0.38)"
            strokeWidth="1.05"
          />

          {/* Horizontal center seam separating upper & lower module rows */}
          <line
            x1="59"
            y1="141"
            x2="301"
            y2="178"
            stroke="rgba(35, 101, 55, 0.48)"
            strokeWidth="1"
          />

          {/* Vertical module dividers across 6 bays */}
          <line x1="94" y1="125" x2="104" y2="169" stroke="rgba(35, 101, 55, 0.42)" strokeWidth="0.95" />
          <line x1="138" y1="133" x2="144" y2="174" stroke="rgba(35, 101, 55, 0.42)" strokeWidth="0.95" />
          <line x1="182" y1="141" x2="184" y2="179" stroke="rgba(35, 101, 55, 0.42)" strokeWidth="0.95" />
          <line x1="224" y1="149" x2="222" y2="184" stroke="rgba(35, 101, 55, 0.42)" strokeWidth="0.95" />
          <line x1="266" y1="157" x2="258" y2="188" stroke="rgba(35, 101, 55, 0.42)" strokeWidth="0.95" />

          {/* Diagonal subtle specular glint across panel cells */}
          <line x1="104" y1="132" x2="122" y2="144" stroke="rgba(255, 255, 255, 0.55)" strokeWidth="1" />
          <line x1="188" y1="147" x2="204" y2="159" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1" />

          {/* Foreground meadow tufts & base sweep */}
          <path
            d="M26 196 C26 184, 38 179, 45 187 C49 182, 57 185, 57 196 Z"
            fill="rgba(35, 101, 55, 0.1)"
            stroke="rgba(35, 101, 55, 0.36)"
            strokeWidth="0.95"
          />
          <path
            d="M312 200 C312 190, 322 187, 327 193 C331 189, 338 192, 338 200 Z"
            fill="rgba(35, 101, 55, 0.09)"
            stroke="rgba(35, 101, 55, 0.34)"
            strokeWidth="0.95"
          />
          <path
            d="M16 199 C110 194, 232 206, 368 196"
            stroke="url(#feat-ridge-fade)"
            strokeWidth="1.05"
          />
        </g>
      </svg>
    </div>
  );
}

/** Minimal bottom-right solar panel & hill corner accent inside the dark-green .features-panel card. */
export function FeaturesPanelAccent() {
  return (
    <div className="features-panel-art" aria-hidden="true">
      <svg
        className="features-panel-art-svg"
        viewBox="0 0 220 96"
        fill="none"
      >
        <g strokeLinecap="round" strokeLinejoin="round">
          {/* Minimal cloud curve above the ridge */}
          <path
            d="M122 28 H158 M128 28 C130 22, 138 20, 143 24 C147 19, 156 21, 156 28"
            stroke="rgba(242, 221, 184, 0.28)"
            strokeWidth="0.95"
          />

          {/* Soft rolling Kerala horizon wave */}
          <path
            d="M0 96 C46 76, 86 78, 128 84 C166 89, 194 74, 220 79 L220 96 Z"
            fill="rgba(35, 101, 55, 0.45)"
          />
          <path
            d="M28 92 C78 68, 126 76, 174 84 C194 87, 208 84, 220 80"
            stroke="rgba(242, 221, 184, 0.24)"
            strokeWidth="1"
          />

          {/* Compact crisp solar array on right ridge */}
          <line x1="152" y1="74" x2="152" y2="87" stroke="rgba(242, 221, 184, 0.44)" strokeWidth="1.15" />
          <line x1="184" y1="72" x2="184" y2="87" stroke="rgba(242, 221, 184, 0.44)" strokeWidth="1.15" />
          <polygon
            points="132,76 146,46 204,44 192,74"
            fill="rgba(242, 221, 184, 0.1)"
            stroke="rgba(242, 221, 184, 0.56)"
            strokeWidth="1.2"
          />
          <line x1="139" y1="61" x2="198" y2="59" stroke="rgba(242, 221, 184, 0.34)" strokeWidth="0.95" />
          <line x1="166" y1="45" x2="152" y2="75" stroke="rgba(242, 221, 184, 0.34)" strokeWidth="0.95" />
          <line x1="185" y1="45" x2="172" y2="75" stroke="rgba(242, 221, 184, 0.34)" strokeWidth="0.95" />

          {/* Tiny #FF6700 solar glint node */}
          <circle cx="196" cy="36" r="2.2" fill="rgba(255, 103, 0, 0.72)" />
        </g>
      </svg>
    </div>
  );
}

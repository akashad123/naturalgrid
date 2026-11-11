import React from "react";

const BRANDS = [
  "Adani",
  "Waaree",
  "UTL",
  "Saatvik",
  "Renaissance",
  "Deye",
  "Havells",
  "Polycab",
  "V-guard",
];

interface TrustMarqueeProps {
  showEyebrow?: boolean;
}

export const TrustMarquee: React.FC<TrustMarqueeProps> = ({
  showEyebrow = true,
}) => {
  return (
    <section className="trusted">
      {showEyebrow && <p className="eyebrow section-label">Brand Partners</p>}
      <p className="trusted-label">We work with approved, reputed brands</p>

      <div className="trusted-marquee">
        <div className="trusted-track">
          <div className="trusted-set">
            {BRANDS.map((brand, i) => (
              <span key={`set1-${i}`} className="trusted-logo">
                <span>{brand}</span>
              </span>
            ))}
          </div>
          <div className="trusted-set" aria-hidden="true">
            {BRANDS.map((brand, i) => (
              <span key={`set2-${i}`} className="trusted-logo">
                <span>{brand}</span>
              </span>
            ))}
          </div>
          <div className="trusted-set" aria-hidden="true">
            {BRANDS.map((brand, i) => (
              <span key={`set3-${i}`} className="trusted-logo">
                <span>{brand}</span>
              </span>
            ))}
          </div>
          <div className="trusted-set" aria-hidden="true">
            {BRANDS.map((brand, i) => (
              <span key={`set4-${i}`} className="trusted-logo">
                <span>{brand}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

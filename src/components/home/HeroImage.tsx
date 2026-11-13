import React from "react";

export const HeroImage: React.FC = () => {
  return (
    <div className="hero-bg hero-bg--white-solar" aria-hidden="true">
      <picture>
        <source
          type="image/webp"
          srcSet="/images/hero/hero-solar-white.webp"
        />
        <img
          src="/images/hero/hero-solar-white.jpg"
          alt="Natural Grid Solar Power Installation"
          className="hero-solar-img"
          loading="eager"
          decoding="async"
        />
      </picture>
    </div>
  );
};

import React from "react";

export const HeroImage: React.FC = () => {
  return (
    <div className="hero-bg hero-bg--image" aria-hidden="true">
      <picture>
        <source
          type="image/webp"
          srcSet="/images/hero/hero-wind-green.webp"
        />
        <img
          src="/images/hero/hero-wind-green.png"
          alt=""
          className="hero-bg-img"
          loading="eager"
          decoding="async"
        />
      </picture>
    </div>
  );
};

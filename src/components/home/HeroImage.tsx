import React from "react";

export const HeroImage: React.FC = () => {
  return (
    <div className="hero-bg hero-bg--image" aria-hidden="true">
      <img
        src="/images/hero/hero-wind-green.jpg"
        alt=""
        className="hero-bg-img"
        loading="eager"
      />
    </div>
  );
};

import React from "react";
import { SeoHead } from "@/components/common/SeoHead";
import { PageHero } from "@/components/common/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const GalleryPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Gallery - Our Work in the Field"
        description="Photos of completed solar installations across Kerala by Natural Grid LLP: residential rooftops, commercial arrays, and solar water heaters."
        canonicalPath="/gallery"
      />

      <PageHero
        title="Gallery"
        description="A look at our solar work across Kerala — rooftop and ground-mounted installations, commercial and institutional projects, solar products and our teams on site."
      />

      <section className="gallery-page">
        <GalleryGrid />
      </section>
    </>
  );
};

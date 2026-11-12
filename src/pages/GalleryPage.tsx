import React, { useRef } from "react";
import { SeoHead } from "@/components/common/SeoHead";
import { PageHero } from "@/components/common/PageHero";
import { GalleryBackdropIllustrations } from "@/components/gallery/GalleryBackdropIllustrations";
import { GALLERY_ITEMS, GalleryGrid } from "@/components/gallery/GalleryGrid";
import { useGalleryGsap } from "@/hooks/useGalleryGsap";

export const GalleryPage: React.FC = () => {
  const photosSectionRef = useRef<HTMLElement>(null);

  useGalleryGsap(photosSectionRef, GALLERY_ITEMS.length);

  return (
    <>
      <SeoHead
        title="Gallery"
        description="Photos of completed solar installations across Kerala by Natural Grid LLP: residential rooftops, commercial arrays, and solar water heaters."
        keywords="solar installation photos Kerala, rooftop solar projects Wayanad, Natural Grid solar gallery, commercial solar Kerala"
        canonicalPath="/gallery"
      />

      <PageHero
        title="Gallery"
        description="A look at our solar work across Kerala — rooftop and ground-mounted installations, commercial and institutional projects, solar products and our teams on site."
      />

      <section className="gallery-section" ref={photosSectionRef}>
        <GalleryBackdropIllustrations />
        <div className="gallery-page">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
};

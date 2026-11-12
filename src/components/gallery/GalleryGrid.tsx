import React, { useState } from "react";
import { GalleryModal, GalleryItemData } from "./GalleryModal";

export const GALLERY_ITEMS: GalleryItemData[] = [
  {
    id: "pariyaram",
    thumbSrc: "/images/pariyaram-rooftop-solar-800.webp",
    fullSrc: "/images/pariyaram-rooftop-solar-1440.webp",
    srcSet:
      "/images/pariyaram-rooftop-solar-800.webp 800w, /images/pariyaram-rooftop-solar-1440.webp 1440w",
    alt: "Rooftop solar panels on a raised steel mounting frame at Pariyaram",
    label: "View image: rooftop solar installation at Pariyaram",
    width: 800,
    height: 397,
  },
  {
    id: "water-heater",
    thumbSrc: "/images/solar-water-heater-800.webp",
    fullSrc: "/images/solar-water-heater-1600.webp",
    srcSet:
      "/images/solar-water-heater-800.webp 800w, /images/solar-water-heater-1600.webp 1600w",
    alt: "Evacuated-tube solar water heater with stainless-steel storage tank",
    label: "View image: solar water heater",
    width: 800,
    height: 530,
  },
  {
    id: "rooftop-residential",
    thumbSrc: "/images/rooftop-solar-800.webp",
    fullSrc: "/images/rooftop-solar-1600.webp",
    srcSet:
      "/images/rooftop-solar-800.webp 800w, /images/rooftop-solar-1600.webp 1600w",
    alt: "Solar panels installed on a rooftop",
    label: "View image: rooftop solar installation",
    width: 800,
    height: 1200,
  },
  {
    id: "team",
    thumbSrc: "/images/solar-team-800.webp",
    fullSrc: "/images/solar-team-1600.webp",
    srcSet:
      "/images/solar-team-800.webp 800w, /images/solar-team-1600.webp 1600w",
    alt: "Team working at a solar installation",
    label: "View image: team at a solar installation",
    width: 800,
    height: 600,
  },
  {
    id: "panel-closeup",
    thumbSrc: "/images/solar-panel-closeup-800.webp",
    fullSrc: "/images/solar-panel-closeup-1600.webp",
    srcSet:
      "/images/solar-panel-closeup-800.webp 800w, /images/solar-panel-closeup-1600.webp 1600w",
    alt: "Close-up of a solar panel",
    label: "View image: close-up of a solar panel",
    width: 800,
    height: 534,
  },
  {
    id: "ground-array",
    thumbSrc: "/images/ground-mounted-array-800.webp",
    fullSrc: "/images/ground-mounted-array-1600.webp",
    srcSet:
      "/images/ground-mounted-array-800.webp 800w, /images/ground-mounted-array-1600.webp 1600w",
    alt: "Ground-mounted solar panel array",
    label: "View image: ground-mounted solar panels",
    width: 800,
    height: 1200,
  },
];

interface GalleryGridProps {
  limit?: number;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ limit }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const displayedItems = limit ? GALLERY_ITEMS.slice(0, limit) : GALLERY_ITEMS;

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  return (
    <div className="gallery-grid">
      {displayedItems.map((item, idx) => (
        <button
          key={item.id}
          type="button"
          className="gallery-item"
          aria-label={item.label}
          onClick={() => handleOpen(idx)}
        >
          <img
            src={item.thumbSrc}
            srcSet={item.srcSet}
            sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, 33vw"
            width={item.width}
            height={item.height}
            alt={item.alt}
            loading="eager"
            decoding="async"
          />
          <span className="gallery-item-bar" aria-hidden="true" />
          <span className="gallery-zoom" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </span>
        </button>
      ))}

      <GalleryModal
        isOpen={modalOpen}
        currentIndex={selectedIndex}
        items={displayedItems}
        onClose={() => setModalOpen(false)}
        onNavigate={setSelectedIndex}
      />
    </div>
  );
};

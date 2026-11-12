import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProjectCategoryIllustration } from "./ProjectCategoryIllustration";

/**
 * Data contract for each project category row in the Home page vertical accordion.
 */
export interface ProjectCategoryItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageSrcSet: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  imagePosition?: string;
  ctaLabel: string;
  ctaTo: string;
}

/**
 * Ordered list of Natural Grid solar project categories matching HomePage's
 * residential, commercial/institutional, and industrial/ground-mounted showcase.
 */
const PROJECT_CATEGORIES: ProjectCategoryItem[] = [
  {
    id: "residential-rooftop-solar",
    num: "01",
    title: "Residential Rooftop Solar",
    subtitle: "On-Grid with Net Metering",
    description:
      "Custom on-grid, off-grid and hybrid rooftop installations engineered for Kerala homes — backed by KSEB net-metering coordination, subsidy documentation assistance and ongoing AMC support.",
    imageSrc: "/images/rooftop-solar-800.webp",
    imageSrcSet:
      "/images/rooftop-solar-800.webp 800w, /images/rooftop-solar-1600.webp 1600w",
    imageWidth: 800,
    imageHeight: 1200,
    imageAlt: "Solar panels installed on a rooftop",
    imagePosition: "center 38%",
    ctaLabel: "View Projects",
    ctaTo: "/gallery",
  },
  {
    id: "commercial-institutional-solar",
    num: "02",
    title: "Commercial & Institutional Solar",
    subtitle: "Offices, Schools, Hospitals & More",
    description:
      "Reliable solar power plants tailored for offices, schools, hospitals and commercial buildings using approved, ISI-compliant components and responsive district-level service teams.",
    imageSrc: "/images/solar-team-800.webp",
    imageSrcSet:
      "/images/solar-team-800.webp 800w, /images/solar-team-1600.webp 1600w",
    imageWidth: 800,
    imageHeight: 600,
    imageAlt: "Team working at a commercial solar installation",
    imagePosition: "center 60%",
    ctaLabel: "View Projects",
    ctaTo: "/gallery",
  },
  {
    id: "industrial-ground-mounted-solar",
    num: "03",
    title: "Industrial & Ground-Mounted Solar",
    subtitle: "Larger-Capacity Systems",
    description:
      "High-capacity rooftop and ground-mounted arrays built for industrial sites and larger facilities requiring disciplined structural engineering, commissioning and preventative AMC care.",
    imageSrc: "/images/ground-mounted-array-800.webp",
    imageSrcSet:
      "/images/ground-mounted-array-800.webp 800w, /images/ground-mounted-array-1600.webp 1600w",
    imageWidth: 800,
    imageHeight: 1200,
    imageAlt: "Ground-mounted solar panel array",
    imagePosition: "center 82%",
    ctaLabel: "View Projects",
    ctaTo: "/gallery",
  },
];

/**
 * Interactive numbered vertical accordion for the Our Projects section.
 * Keeps one category expanded by default (starting at 01) while allowing users
 * to inspect each category photo, summary, and gallery link vertically.
 */
export const ProjectsAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="projects-accordion" data-testid="projects-accordion">
      {PROJECT_CATEGORIES.map((item, idx) => {
        const isActive = activeIndex === idx;
        const triggerId = `project-trigger-${item.id}`;
        const panelId = `project-panel-${item.id}`;

        return (
          <article
            key={item.id}
            className={`projects-item${isActive ? " is-active" : ""}`}
            data-project-index={idx}
          >
            {/* Left numeric rail column with category-specific illustration beneath */}
            <div className="projects-item-num-col" aria-hidden="true">
              <span className="projects-item-num">{item.num}</span>
              <ProjectCategoryIllustration categoryId={item.id} />
            </div>

            {/* Right category heading + collapsible vertical showcase panel */}
            <div className="projects-item-main">
              <h3 className="projects-item-heading">
                <button
                  type="button"
                  id={triggerId}
                  className="projects-item-trigger"
                  aria-expanded={isActive}
                  aria-controls={panelId}
                  onClick={() => setActiveIndex(idx)}
                >
                  <span className="projects-item-mobile-num" aria-hidden="true">
                    {item.num}
                  </span>
                  <span className="projects-item-title">{item.title}</span>
                  <span className="projects-item-arrow" aria-hidden="true">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                aria-hidden={!isActive}
                className="projects-panel-wrap"
              >
                <div className="projects-panel-inner">
                  <div className="projects-card">
                    <div className="projects-card-media">
                      <img
                        src={item.imageSrc}
                        srcSet={item.imageSrcSet}
                        sizes="(max-width: 680px) 100vw, (max-width: 1024px) 74vw, 820px"
                        width={item.imageWidth}
                        height={item.imageHeight}
                        alt={item.imageAlt}
                        style={{
                          objectPosition: item.imagePosition ?? "center center",
                        }}
                        loading={idx === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    </div>

                    <div className="projects-card-footer">
                      <div className="projects-card-copy">
                        <p className="projects-card-sub">{item.subtitle}</p>
                        <p className="projects-card-desc">{item.description}</p>
                      </div>

                      <Link
                        to={item.ctaTo}
                        className="projects-card-cta"
                        tabIndex={isActive ? undefined : -1}
                      >
                        <span>{item.ctaLabel}</span>
                        <span className="btn-arrow" aria-hidden="true">
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
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

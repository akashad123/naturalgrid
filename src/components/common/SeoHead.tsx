import { useEffect } from "react";
import { siteConfig } from "@/config/site";

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  noindex?: boolean;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  keywords,
  canonicalPath = "",
  noindex = false,
}) => {
  useEffect(() => {
    // Document Title
    const fullTitle = title
      ? `${title} | ${siteConfig.name}`
      : `${siteConfig.name} | Solar Installation, Service & AMC in Kerala`;
    document.title = fullTitle;

    // Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent =
      description ||
      "Service-first solar company in Kerala. Rooftop solar installation, AMC, repair, cleaning and monitoring with district-level support teams across all 14 districts.";
    if (metaDesc) {
      metaDesc.setAttribute("content", descContent);
    }

    // Robots directive (noindex on 404/non-public routes; cleaned up on valid routes)
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (noindex) {
      if (!metaRobots) {
        metaRobots = document.createElement("meta");
        metaRobots.setAttribute("name", "robots");
        document.head.appendChild(metaRobots);
      }
      metaRobots.setAttribute("content", "noindex");
    } else if (metaRobots) {
      metaRobots.remove();
    }

    // Meta Keywords
    if (keywords) {
      let metaKw = document.querySelector('meta[name="keywords"]');
      if (!metaKw) {
        metaKw = document.createElement("meta");
        metaKw.setAttribute("name", "keywords");
        document.head.appendChild(metaKw);
      }
      metaKw.setAttribute("content", keywords);
    }

    // Canonical link
    const canonicalUrl = `${siteConfig.url}${canonicalPath}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalUrl);

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [title, description, keywords, canonicalPath, noindex]);

  return null;
};

import React, { createContext, useContext, useEffect } from "react";
import { siteConfig } from "@/config/site";
import {
  ResolvedSeo,
  SeoInput,
  resolveSeoMetadata,
} from "@/utils/seo";

const SeoCollectorContext = createContext<((seo: ResolvedSeo) => void) | null>(
  null
);

export const SeoCollectorProvider: React.FC<{
  onCollect: (seo: ResolvedSeo) => void;
  children: React.ReactNode;
}> = ({ onCollect, children }) => (
  <SeoCollectorContext.Provider value={onCollect}>
    {children}
  </SeoCollectorContext.Provider>
);

function upsertMetaTag(
  attrName: "name" | "property",
  attrValue: string,
  content: string
): void {
  let meta = document.querySelector<HTMLMetaElement>(
    `meta[${attrName}="${attrValue}"]`
  );
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attrName, attrValue);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

export const SeoHead: React.FC<SeoInput> = ({
  title,
  description,
  keywords,
  canonicalPath,
  noindex = false,
}) => {
  const collectSeo = useContext(SeoCollectorContext);
  const resolved = resolveSeoMetadata(
    { title, description, keywords, canonicalPath, noindex },
    siteConfig.name,
    siteConfig.url
  );

  // During build-time SSR prerendering, report resolved metadata synchronously
  if (collectSeo) {
    collectSeo(resolved);
  }

  useEffect(() => {
    document.title = resolved.fullTitle;

    upsertMetaTag("name", "description", resolved.description);
    upsertMetaTag("name", "keywords", resolved.keywords);

    upsertMetaTag("property", "og:title", resolved.fullTitle);
    upsertMetaTag("property", "og:description", resolved.description);
    upsertMetaTag("property", "og:url", resolved.ogUrl);

    upsertMetaTag("name", "twitter:title", resolved.fullTitle);
    upsertMetaTag("name", "twitter:description", resolved.description);

    // Robots directive (noindex on 404/non-public routes; cleaned up on valid routes)
    const metaRobots = document.querySelector<HTMLMetaElement>(
      'meta[name="robots"]'
    );
    if (resolved.noindex) {
      upsertMetaTag("name", "robots", "noindex");
    } else if (metaRobots) {
      metaRobots.remove();
    }

    // Canonical link (omitted on noindex error pages)
    let linkCanonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (resolved.canonicalUrl) {
      if (!linkCanonical) {
        linkCanonical = document.createElement("link");
        linkCanonical.setAttribute("rel", "canonical");
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute("href", resolved.canonicalUrl);
    } else if (linkCanonical) {
      linkCanonical.remove();
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [
    resolved.fullTitle,
    resolved.description,
    resolved.keywords,
    resolved.canonicalUrl,
    resolved.ogUrl,
    resolved.noindex,
  ]);

  return null;
};

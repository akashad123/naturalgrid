export interface SeoInput {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  noindex?: boolean;
}

export interface ResolvedSeo {
  fullTitle: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogUrl: string;
  noindex: boolean;
}

export const DEFAULT_SEO_DESCRIPTION =
  "Service-first solar company in Kerala. Rooftop solar installation, AMC, repair, cleaning and monitoring with district-level support teams across all 14 districts.";

export const DEFAULT_SEO_KEYWORDS =
  "solar company Kerala, rooftop solar Kerala, solar AMC Kerala, solar service near me, solar installation Wayanad";

/**
 * Resolves full document title, metadata, and canonical URL identically
 * for both client-side navigation and build-time SSR prerendering.
 */
export function resolveSeoMetadata(
  input: SeoInput,
  siteName: string,
  siteUrl: string
): ResolvedSeo {
  const cleanSiteUrl = siteUrl.replace(/\/+$/, "");
  const isHome = input.canonicalPath === "/" || !input.title;

  const fullTitle = isHome
    ? `${siteName} | Solar Installation, Service & AMC in Kerala`
    : `${input.title} | ${siteName}`;

  const description = input.description?.trim() || DEFAULT_SEO_DESCRIPTION;
  const keywords = input.keywords?.trim() || DEFAULT_SEO_KEYWORDS;
  const noindex = Boolean(input.noindex);

  const rawPath = input.canonicalPath ?? "/";
  const normalizedPath =
    rawPath === "" || rawPath === "/"
      ? "/"
      : rawPath.startsWith("/")
      ? rawPath
      : `/${rawPath}`;

  const canonicalUrl = noindex
    ? ""
    : normalizedPath === "/"
    ? `${cleanSiteUrl}/`
    : `${cleanSiteUrl}${normalizedPath}`;

  const ogUrl = canonicalUrl || `${cleanSiteUrl}/`;

  return {
    fullTitle,
    description,
    keywords,
    canonicalUrl,
    ogUrl,
    noindex,
  };
}

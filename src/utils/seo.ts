export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface SeoInput {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  noindex?: boolean;
  ogImage?: string;
  breadcrumbs?: BreadcrumbItem[];
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export interface ResolvedSeo {
  fullTitle: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogUrl: string;
  ogImage: string;
  robotsContent: string;
  noindex: boolean;
  schemaJson?: string;
}

export const DEFAULT_SEO_DESCRIPTION =
  "Service-first solar company in Kerala. Rooftop solar installation, AMC, repair, cleaning and monitoring with district-level support teams across all 14 districts.";

export const DEFAULT_SEO_KEYWORDS =
  "solar company Kerala, rooftop solar Kerala, solar AMC Kerala, solar service near me, solar installation Wayanad";

export const DEFAULT_OG_IMAGE = "/images/og-image.jpg";

export const INDEX_ROBOTS_DIRECTIVE = "index, follow, max-image-preview:large";
export const NOINDEX_ROBOTS_DIRECTIVE = "noindex, nofollow";

/**
 * Builds valid Schema.org BreadcrumbList structured data.
 */
export function buildBreadcrumbSchema(
  breadcrumbs: BreadcrumbItem[],
  siteUrl: string
): Record<string, unknown> {
  const cleanSiteUrl = siteUrl.replace(/\/+$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => {
      const itemUrl = crumb.path.startsWith("http")
        ? crumb.path
        : crumb.path === "/"
        ? `${cleanSiteUrl}/`
        : `${cleanSiteUrl}${crumb.path.startsWith("/") ? crumb.path : `/${crumb.path}`}`;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: itemUrl,
      };
    }),
  };
}

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
  const robotsContent = noindex ? NOINDEX_ROBOTS_DIRECTIVE : INDEX_ROBOTS_DIRECTIVE;

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

  const ogImage = input.ogImage
    ? input.ogImage.startsWith("http")
      ? input.ogImage
      : `${cleanSiteUrl}${input.ogImage.startsWith("/") ? input.ogImage : `/${input.ogImage}`}`
    : `${cleanSiteUrl}${DEFAULT_OG_IMAGE}`;

  // Assemble JSON-LD structured data if schemas or breadcrumbs were passed
  let finalSchemas: Array<Record<string, unknown>> = [];
  if (input.schema) {
    if (Array.isArray(input.schema)) {
      finalSchemas.push(...input.schema);
    } else {
      finalSchemas.push(input.schema);
    }
  }
  if (input.breadcrumbs && input.breadcrumbs.length > 0) {
    finalSchemas.push(buildBreadcrumbSchema(input.breadcrumbs, cleanSiteUrl));
  }

  const schemaJson =
    finalSchemas.length === 1
      ? JSON.stringify(finalSchemas[0])
      : finalSchemas.length > 1
      ? JSON.stringify({
          "@context": "https://schema.org",
          "@graph": finalSchemas,
        })
      : undefined;

  return {
    fullTitle,
    description,
    keywords,
    canonicalUrl,
    ogUrl,
    ogImage,
    robotsContent,
    noindex,
    schemaJson,
  };
}

import React, { createContext, useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
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

export const SeoHead: React.FC<SeoInput> = (props) => {
  const collectSeo = useContext(SeoCollectorContext);
  const resolved = resolveSeoMetadata(props, siteConfig.name, siteConfig.url);

  // During build-time SSR prerendering, report resolved metadata synchronously
  if (collectSeo) {
    collectSeo(resolved);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [resolved.canonicalUrl]);

  return (
    <Helmet>
      <title>{resolved.fullTitle}</title>
      <meta name="description" content={resolved.description} />
      <meta name="keywords" content={resolved.keywords} />
      <meta name="robots" content={resolved.robotsContent} />

      {/* Open Graph */}
      <meta property="og:title" content={resolved.fullTitle} />
      <meta property="og:description" content={resolved.description} />
      <meta property="og:url" content={resolved.ogUrl} />
      <meta property="og:image" content={resolved.ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolved.fullTitle} />
      <meta name="twitter:description" content={resolved.description} />
      <meta name="twitter:image" content={resolved.ogImage} />

      {/* Canonical URL */}
      {resolved.canonicalUrl && (
        <link rel="canonical" href={resolved.canonicalUrl} />
      )}

      {/* Google Search Console verification token (if configured) */}
      {typeof import.meta !== "undefined" &&
        import.meta.env?.VITE_GOOGLE_SITE_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={import.meta.env.VITE_GOOGLE_SITE_VERIFICATION}
          />
        )}

      {/* Structured Data (Schema.org JSON-LD) */}
      {resolved.schemaJson && (
        <script type="application/ld+json">{resolved.schemaJson}</script>
      )}
    </Helmet>
  );
};

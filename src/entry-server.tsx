import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { SeoCollectorProvider } from "@/components/common/SeoHead";
import { AppRoutes } from "@/routes/AppRoutes";
import { siteConfig } from "@/config/site";
import { ResolvedSeo, resolveSeoMetadata } from "@/utils/seo";

/**
 * Renders a route to static HTML and extracts resolved SEO metadata
 * for build-time static prerendering.
 */
export function renderRoute(url: string): { html: string; seo: ResolvedSeo } {
  let collectedSeo: ResolvedSeo = resolveSeoMetadata(
    { canonicalPath: url },
    siteConfig.name,
    siteConfig.url
  );

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <SeoCollectorProvider
        onCollect={(seo) => {
          collectedSeo = seo;
        }}
      >
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </SeoCollectorProvider>
    </React.StrictMode>
  );

  return { html, seo: collectedSeo };
}

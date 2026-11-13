import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
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

  const helmetContext = {};

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <SeoCollectorProvider
          onCollect={(seo) => {
            collectedSeo = seo;
          }}
        >
          <StaticRouter
            location={url}
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <AppRoutes />
          </StaticRouter>
        </SeoCollectorProvider>
      </HelmetProvider>
    </React.StrictMode>
  );

  return { html, seo: collectedSeo };
}

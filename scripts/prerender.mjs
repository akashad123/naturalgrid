import fs from "node:fs";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const ssrDir = path.join(rootDir, ".prerender-ssr");

const PRERENDER_ROUTES = [
  "/",
  "/about",
  "/service-installation",
  "/service-battery-backup",
  "/service-amc",
  "/service-subsidy",
  "/service-water-heater",
  "/gallery",
  "/calculator",
  "/contact",
  "/404",
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function replaceMetaContent(html, attrName, attrValue, newContent) {
  const escaped = escapeHtml(newContent);
  const pattern = new RegExp(
    `(<meta\\s+${attrName}="${attrValue}"\\s+content=")[^"]*("\\s*/?>)`,
    "i"
  );
  return html.replace(pattern, `$1${escaped}$2`);
}

function applySeoToTemplate(template, route, html, seo) {
  let out = template;

  out = out.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(seo.fullTitle)}</title>`
  );

  out = replaceMetaContent(out, "name", "description", seo.description);
  out = replaceMetaContent(out, "name", "keywords", seo.keywords);
  out = replaceMetaContent(out, "property", "og:title", seo.fullTitle);
  out = replaceMetaContent(out, "property", "og:description", seo.description);
  out = replaceMetaContent(out, "property", "og:url", seo.ogUrl);
  out = replaceMetaContent(out, "name", "twitter:title", seo.fullTitle);
  out = replaceMetaContent(out, "name", "twitter:description", seo.description);

  if (seo.noindex) {
    out = out.replace(/\s*<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, "");
    out = out.replace(
      /(<meta\s+name="viewport"[^>]*>)/i,
      `$1\n  <meta name="robots" content="noindex" />`
    );
  } else if (seo.canonicalUrl) {
    out = out.replace(
      /(<link\s+rel="canonical"\s+href=")[^"]*("\s*\/?>)/i,
      `$1${escapeHtml(seo.canonicalUrl)}$2`
    );
  }

  out = out.replace(
    /<div\s+id="root"\s*><\/div>/i,
    `<div id="root" data-ssr-route="${escapeHtml(route)}">${html}</div>`
  );

  return out;
}

try {
  const templatePath = path.join(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Missing built client template at ${templatePath}`);
  }

  const ssrEntryPath = path.join(ssrDir, "entry-server.js");
  if (!fs.existsSync(ssrEntryPath)) {
    throw new Error(`Missing SSR bundle at ${ssrEntryPath}`);
  }

  const template = fs.readFileSync(templatePath, "utf8");
  const { renderRoute } = await import(pathToFileURL(ssrEntryPath).href);

  for (const route of PRERENDER_ROUTES) {
    const { html, seo } = renderRoute(route);
    const renderedDocument = applySeoToTemplate(template, route, html, seo);
    const outputFile =
      route === "/" ? "index.html" : `${route.replace(/^\//, "")}.html`;
    const outputPath = path.join(distDir, outputFile);

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, renderedDocument, "utf8");
    console.log(
      `Prerendered ${route} -> dist/${outputFile} | title="${seo.fullTitle}"`
    );
  }
} finally {
  fs.rmSync(ssrDir, { recursive: true, force: true });
}

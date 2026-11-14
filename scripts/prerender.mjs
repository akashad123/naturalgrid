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
  // Kerala District Local SEO Directory Hub & 14 District Landing Pages
  "/solar-installation",
  "/solar-installation/thiruvananthapuram",
  "/solar-installation/kollam",
  "/solar-installation/pathanamthitta",
  "/solar-installation/alappuzha",
  "/solar-installation/kottayam",
  "/solar-installation/idukki",
  "/solar-installation/ernakulam",
  "/solar-installation/thrissur",
  "/solar-installation/palakkad",
  "/solar-installation/malappuram",
  "/solar-installation/kozhikode",
  "/solar-installation/wayanad",
  "/solar-installation/kannur",
  "/solar-installation/kasaragod",
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
  out = replaceMetaContent(out, "name", "robots", seo.robotsContent);
  out = replaceMetaContent(out, "property", "og:title", seo.fullTitle);
  out = replaceMetaContent(out, "property", "og:description", seo.description);
  out = replaceMetaContent(out, "property", "og:url", seo.ogUrl);
  out = replaceMetaContent(out, "name", "twitter:title", seo.fullTitle);
  out = replaceMetaContent(out, "name", "twitter:description", seo.description);

  if (seo.noindex) {
    out = out.replace(/\s*<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, "");
  } else if (seo.canonicalUrl) {
    out = out.replace(
      /(<link\s+rel="canonical"\s+href=")[^"]*("\s*\/?>)/i,
      `$1${escapeHtml(seo.canonicalUrl)}$2`
    );
  }

  if (seo.schemaJson) {
    out = out.replace(
      /<\/head>/i,
      `  <script type="application/ld+json">${seo.schemaJson}</script>\n</head>`
    );
  }

  out = out.replace(
    /<div\s+id="root"\s*><\/div>/i,
    `<div id="root" data-ssr-route="${escapeHtml(route)}">${html}</div>`
  );

  return out;
}

/**
 * Validates all prerendered HTML files, sitemap.xml, and robots.txt at build time
 * so missing canonicals, duplicate titles/descriptions, or empty SSR shells fail early.
 */
function verifyBuildSeo(renderedPages) {
  const seenTitles = new Map();
  const seenDescriptions = new Map();
  const publicCanonicals = new Set();

  for (const { route, seo, html, documentHtml } of renderedPages) {
    if (!seo.fullTitle || seo.fullTitle.length < 15) {
      throw new Error(`SEO check failed on ${route}: title too short`);
    }
    if (!seo.description || seo.description.length < 40) {
      throw new Error(`SEO check failed on ${route}: description too short`);
    }
    if (seenTitles.has(seo.fullTitle)) {
      throw new Error(
        `SEO check failed: duplicate title "${seo.fullTitle}" on ${route} and ${seenTitles.get(seo.fullTitle)}`
      );
    }
    seenTitles.set(seo.fullTitle, route);

    if (seenDescriptions.has(seo.description)) {
      throw new Error(
        `SEO check failed: duplicate description on ${route} and ${seenDescriptions.get(seo.description)}`
      );
    }
    seenDescriptions.set(seo.description, route);

    if (!html.includes("<h1")) {
      throw new Error(`SEO check failed on ${route}: missing <h1> in SSR HTML`);
    }

    if (seo.noindex) {
      if (/<link\s+rel="canonical"/i.test(documentHtml)) {
        throw new Error(`SEO check failed on ${route}: noindex page must not emit canonical`);
      }
      if (!/content="noindex,\s*nofollow"/i.test(documentHtml)) {
        throw new Error(`SEO check failed on ${route}: missing noindex, nofollow robots meta`);
      }
    } else {
      if (!seo.canonicalUrl) {
        throw new Error(`SEO check failed on ${route}: missing canonicalUrl`);
      }
      publicCanonicals.add(seo.canonicalUrl);
    }

    const ldMatches = [...documentHtml.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
    if (ldMatches.length === 0) {
      throw new Error(`SEO check failed on ${route}: missing JSON-LD structured data`);
    }
    for (const match of ldMatches) {
      JSON.parse(match[1]);
    }
  }

  const sitemapPath = path.join(distDir, "sitemap.xml");
  const robotsPath = path.join(distDir, "robots.txt");
  if (!fs.existsSync(sitemapPath) || !fs.existsSync(robotsPath)) {
    throw new Error("SEO check failed: dist/sitemap.xml or dist/robots.txt missing");
  }

  const sitemapXml = fs.readFileSync(sitemapPath, "utf8");
  const sitemapUrls = new Set(
    [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/gi)].map((m) => m[1].trim())
  );
  for (const canonical of publicCanonicals) {
    if (!sitemapUrls.has(canonical)) {
      throw new Error(`SEO check failed: ${canonical} missing from sitemap.xml`);
    }
  }
  if (sitemapUrls.size !== publicCanonicals.size) {
    throw new Error(
      `SEO check failed: sitemap.xml has ${sitemapUrls.size} URLs, expected ${publicCanonicals.size}`
    );
  }

  const robotsTxt = fs.readFileSync(robotsPath, "utf8");
  if (!/Sitemap:\s*https:\/\/naturalgrid\.in\/sitemap\.xml/i.test(robotsTxt)) {
    throw new Error("SEO check failed: robots.txt missing Sitemap directive");
  }
  console.log(
    `SEO build audit passed: ${renderedPages.length} routes (${publicCanonicals.size} indexable in sitemap.xml, 1 noindex), unique titles/descriptions, valid JSON-LD & H1.`
  );
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

  const renderedPages = [];
  for (const route of PRERENDER_ROUTES) {
    const { html, seo } = renderRoute(route);
    const renderedDocument = applySeoToTemplate(template, route, html, seo);
    const outputFile =
      route === "/" ? "index.html" : `${route.replace(/^\//, "")}.html`;
    const outputPath = path.join(distDir, outputFile);

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, renderedDocument, "utf8");
    renderedPages.push({ route, seo, html, documentHtml: renderedDocument });
    console.log(
      `Prerendered ${route} -> dist/${outputFile} | title="${seo.fullTitle}"`
    );
  }

  verifyBuildSeo(renderedPages);
} finally {
  fs.rmSync(ssrDir, { recursive: true, force: true });
}

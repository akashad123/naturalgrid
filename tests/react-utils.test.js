import { test } from "node:test";
import assert from "node:assert/strict";
import { formatINR, formatKw } from "../src/utils/formatters.ts";
import {
  resolveSeoMetadata,
  DEFAULT_SEO_DESCRIPTION,
  INDEX_ROBOTS_DIRECTIVE,
  NOINDEX_ROBOTS_DIRECTIVE,
} from "../src/utils/seo.ts";

test("formatINR formats Indian rupee amounts without decimals", () => {
  assert.equal(formatINR(14400), "₹14,400");
  assert.equal(formatINR(28800.4), "₹28,800");
});

test("formatKw rounds kW values to one decimal place", () => {
  assert.equal(formatKw(1.4285), "1.4");
  assert.equal(formatKw(2.8571), "2.9");
});

test("resolveSeoMetadata keeps homepage brand title format and trailing slash canonical", () => {
  const seo = resolveSeoMetadata(
    { title: "Solar Installation, Service & AMC in Kerala", canonicalPath: "/" },
    "Natural Grid LLP",
    "https://naturalgrid.in/"
  );
  assert.equal(seo.fullTitle, "Natural Grid LLP | Solar Installation, Service & AMC in Kerala");
  assert.equal(seo.canonicalUrl, "https://naturalgrid.in/");
  assert.equal(seo.noindex, false);
});

test("resolveSeoMetadata builds inner route metadata and omits canonical when noindex is set", () => {
  const about = resolveSeoMetadata(
    {
      title: "About Us",
      keywords: "Natural Grid LLP, solar company Wayanad",
      canonicalPath: "/about",
    },
    "Natural Grid LLP",
    "https://naturalgrid.in"
  );
  assert.equal(about.fullTitle, "About Us | Natural Grid LLP");
  assert.equal(about.canonicalUrl, "https://naturalgrid.in/about");
  assert.equal(about.description, DEFAULT_SEO_DESCRIPTION);
  assert.equal(about.keywords, "Natural Grid LLP, solar company Wayanad");
  assert.equal(about.robotsContent, INDEX_ROBOTS_DIRECTIVE);

  const notFound = resolveSeoMetadata(
    { title: "Page Not Found", noindex: true },
    "Natural Grid LLP",
    "https://naturalgrid.in"
  );
  assert.equal(notFound.noindex, true);
  assert.equal(notFound.canonicalUrl, "");
  assert.equal(notFound.robotsContent, NOINDEX_ROBOTS_DIRECTIVE);
});

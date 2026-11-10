import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function loadPhone() {
  const sandbox = { window: {} };
  const source = fs.readFileSync(path.join(__dirname, "..", "js", "phone.js"), "utf8");
  vm.runInNewContext(source, sandbox);
  return sandbox.window.NaturalGridPhone;
}

const { normalize } = loadPhone();

test("a plain 10-digit mobile number is kept as is", () => {
  assert.equal(normalize("9072634443"), "9072634443");
});

test("a number pasted with the +91 country code and spaces is accepted", () => {
  assert.equal(normalize("+91 90726 34443"), "9072634443");
});

test("a +91 number without spaces is accepted", () => {
  assert.equal(normalize("+919072634443"), "9072634443");
});

test("a 91 country code without the plus is accepted", () => {
  assert.equal(normalize("919072634443"), "9072634443");
});

test("a leading 0 trunk prefix is dropped instead of becoming part of the number", () => {
  assert.equal(normalize("09072634443"), "9072634443");
});

test("spaces, hyphens and brackets are ignored", () => {
  assert.equal(normalize("(+91) 9072-634-443"), "9072634443");
});

test("surrounding whitespace is ignored", () => {
  assert.equal(normalize("  9072634443 \n"), "9072634443");
});

test("too few digits is rejected", () => {
  assert.equal(normalize("907263444"), null);
});

test("too many digits is rejected rather than truncated", () => {
  assert.equal(normalize("90726344431"), null);
});

test("Indian mobile numbers start with 6-9, so 5xxxxxxxxx is rejected", () => {
  assert.equal(normalize("5072634443"), null);
});

test("empty input is rejected", () => {
  assert.equal(normalize(""), null);
  assert.equal(normalize(null), null);
  assert.equal(normalize(undefined), null);
});

test("letters make the number invalid", () => {
  assert.equal(normalize("90726abc43"), null);
});

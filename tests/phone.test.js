import { test } from "node:test";
import assert from "node:assert/strict";
import { normalizePhone } from "../src/utils/phone.ts";

test("a plain 10-digit mobile number is kept as is", () => {
  assert.equal(normalizePhone("9072634443"), "9072634443");
});

test("a number pasted with the +91 country code and spaces is accepted", () => {
  assert.equal(normalizePhone("+91 90726 34443"), "9072634443");
});

test("a +91 number without spaces is accepted", () => {
  assert.equal(normalizePhone("+919072634443"), "9072634443");
});

test("a 91 country code without the plus is accepted", () => {
  assert.equal(normalizePhone("919072634443"), "9072634443");
});

test("a leading 0 trunk prefix is dropped instead of becoming part of the number", () => {
  assert.equal(normalizePhone("09072634443"), "9072634443");
});

test("spaces, hyphens and brackets are ignored", () => {
  assert.equal(normalizePhone("(+91) 9072-634-443"), "9072634443");
});

test("surrounding whitespace is ignored", () => {
  assert.equal(normalizePhone("  9072634443 \n"), "9072634443");
});

test("too few digits is rejected", () => {
  assert.equal(normalizePhone("907263444"), null);
});

test("too many digits is rejected rather than truncated", () => {
  assert.equal(normalizePhone("90726344431"), null);
});

test("Indian mobile numbers start with 6-9, so 5xxxxxxxxx is rejected", () => {
  assert.equal(normalizePhone("5072634443"), null);
});

test("empty input is rejected", () => {
  assert.equal(normalizePhone(""), null);
  assert.equal(normalizePhone(null), null);
  assert.equal(normalizePhone(undefined), null);
});

test("letters make the number invalid", () => {
  assert.equal(normalizePhone("90726abc43"), null);
});

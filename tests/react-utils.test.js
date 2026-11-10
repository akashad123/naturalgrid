import { test } from "node:test";
import assert from "node:assert/strict";
import { calculateSolar, BILLING_DAYS } from "../src/utils/calculator.ts";
import { normalizePhone } from "../src/utils/phone.ts";

test("TS calculator: residential bills are read as 60 days of consumption", () => {
  assert.equal(BILLING_DAYS.residential, 60);
  assert.equal(calculateSolar(300, "residential").billingDays, 60);
});

test("TS calculator: commercial bills are read as 30 days of consumption", () => {
  assert.equal(BILLING_DAYS.commercial, 30);
  assert.equal(calculateSolar(300, "commercial").billingDays, 30);
});

test("TS calculator: 300 residential units need 1.43 kW (5 units/day / 3.5)", () => {
  assert.equal(calculateSolar(300, "residential").solarSizeKw.toFixed(2), "1.43");
});

test("TS calculator: 300 residential units save Rs 14,400 a year", () => {
  assert.equal(Math.round(calculateSolar(300, "residential").annualSavings), 14400);
});

test("TS calculator: 300 commercial units need 2.86 kW and save Rs 28,800 a year", () => {
  const r = calculateSolar(300, "commercial");
  assert.equal(r.solarSizeKw.toFixed(2), "2.86");
  assert.equal(Math.round(r.annualSavings), 28800);
});

test("TS phone: accepts +91 formatted numbers", () => {
  assert.equal(normalizePhone("+91 90726 34443"), "9072634443");
});

test("TS phone: rejects invalid letters", () => {
  assert.equal(normalizePhone("90726abc43"), null);
});

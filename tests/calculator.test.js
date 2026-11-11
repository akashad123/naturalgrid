import { test } from "node:test";
import assert from "node:assert/strict";
import { calculateSolar, BILLING_DAYS } from "../src/utils/calculator.ts";

test("residential bills are read as 60 days of consumption", () => {
  assert.equal(BILLING_DAYS.residential, 60);
  assert.equal(calculateSolar(300, "residential").billingDays, 60);
});

test("commercial bills are read as 30 days of consumption", () => {
  assert.equal(BILLING_DAYS.commercial, 30);
  assert.equal(calculateSolar(300, "commercial").billingDays, 30);
});

test("300 residential units need 1.43 kW (5 units/day / 3.5)", () => {
  assert.equal(calculateSolar(300, "residential").solarSizeKw.toFixed(2), "1.43");
});

test("300 residential units save Rs 14,400 a year (150 units/month at Rs 8)", () => {
  assert.equal(Math.round(calculateSolar(300, "residential").annualSavings), 14400);
});

test("300 commercial units need 2.86 kW and save Rs 28,800 a year", () => {
  const r = calculateSolar(300, "commercial");
  assert.equal(r.solarSizeKw.toFixed(2), "2.86");
  assert.equal(Math.round(r.annualSavings), 28800);
});

test("units arriving as a string from the input field are accepted", () => {
  assert.equal(calculateSolar("300", "residential").solarSizeKw.toFixed(2), "1.43");
});

test("negative units are treated as zero", () => {
  const r = calculateSolar(-50, "residential");
  assert.equal(r.solarSizeKw, 0);
  assert.equal(r.annualSavings, 0);
});

test("empty or non-numeric input gives zero, never NaN", () => {
  for (const bad of ["", "abc", null, undefined, NaN]) {
    const r = calculateSolar(bad, "residential");
    assert.equal(r.solarSizeKw, 0);
    assert.equal(r.annualSavings, 0);
  }
});

test("an unknown property type falls back to residential", () => {
  assert.equal(calculateSolar(300, "industrial").billingDays, 60);
});

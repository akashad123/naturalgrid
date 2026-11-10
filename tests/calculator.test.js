const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// calculator.js is a browser script that attaches itself to window, so run the
// real file in a sandbox instead of importing it.
function loadCalculator() {
  const sandbox = { window: {} };
  const source = fs.readFileSync(path.join(__dirname, "..", "js", "calculator.js"), "utf8");
  vm.runInNewContext(source, sandbox);
  return sandbox.window.NaturalGridCalculator;
}

const { calculate, BILLING_DAYS } = loadCalculator();

test("residential bills are read as 60 days of consumption", () => {
  assert.equal(BILLING_DAYS.residential, 60);
  assert.equal(calculate(300, "residential").billingDays, 60);
});

test("commercial bills are read as 30 days of consumption", () => {
  assert.equal(BILLING_DAYS.commercial, 30);
  assert.equal(calculate(300, "commercial").billingDays, 30);
});

test("300 residential units need 1.43 kW (5 units/day / 3.5)", () => {
  assert.equal(calculate(300, "residential").solarSizeKw.toFixed(2), "1.43");
});

test("300 residential units save Rs 14,400 a year (150 units/month at Rs 8)", () => {
  assert.equal(Math.round(calculate(300, "residential").annualSavings), 14400);
});

test("300 commercial units need 2.86 kW and save Rs 28,800 a year", () => {
  const r = calculate(300, "commercial");
  assert.equal(r.solarSizeKw.toFixed(2), "2.86");
  assert.equal(Math.round(r.annualSavings), 28800);
});

test("units arriving as a string from the input field are accepted", () => {
  assert.equal(calculate("300", "residential").solarSizeKw.toFixed(2), "1.43");
});

test("negative units are treated as zero", () => {
  const r = calculate(-50, "residential");
  assert.equal(r.solarSizeKw, 0);
  assert.equal(r.annualSavings, 0);
});

test("empty or non-numeric input gives zero, never NaN", () => {
  for (const input of ["", "abc", undefined, null]) {
    const r = calculate(input, "residential");
    assert.equal(r.solarSizeKw, 0, `solarSizeKw for ${input}`);
    assert.equal(r.annualSavings, 0, `annualSavings for ${input}`);
  }
});

test("an unknown property type falls back to residential", () => {
  assert.equal(calculate(300, "industrial").billingDays, 60);
});

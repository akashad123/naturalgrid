/* Natural Grid — savings calculator page: inputs, results and the Calculate
   button. Presentation only; all math lives in js/calculator.js. */
(function () {
  "use strict";

  const unitsInput = document.getElementById("calc-units");
  const unitsRange = document.getElementById("calc-units-range");
  const unitsHint = document.querySelector("[data-units-hint]");
  const typeButtons = document.querySelectorAll(".calc-type-group .filter-btn");

  const resultEls = {};
  document.querySelectorAll("[data-result]").forEach((el) => {
    resultEls[el.dataset.result] = el;
  });

  const inr = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  });
  const plain = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });

  function activeType() {
    return document.querySelector(".calc-type-group .filter-btn.active").dataset.type;
  }

  // Residential bills cover 60 days, commercial 30 — say so, since the
  // same units figure means different consumption either way
  function syncUnitsHint() {
    const days = NaturalGridCalculator.BILLING_DAYS[activeType()] || 60;
    unitsHint.textContent =
      "Take the units figure straight off your latest KSEB bill — " +
      "we read it as " + days + " days of consumption.";
  }

  function setResult(key, text) {
    const el = resultEls[key];
    if (!el || el.textContent === text) return;
    el.textContent = text;
    // Pop the value briefly so changes catch the eye
    const value = el.closest(".calc-value") || el;
    value.classList.remove("value-pop");
    void value.offsetWidth; // restart the animation
    value.classList.add("value-pop");
  }

  function render() {
    const r = NaturalGridCalculator.calculate(unitsInput.value, activeType());

    setResult("size", r.solarSizeKw.toFixed(1));
    setResult("annual", inr.format(Math.round(r.annualSavings)));
  }

  const calcRun = document.getElementById("calc-run");
  const calcResults = document.querySelector(".calc-results");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const stackedLayout = window.matchMedia("(max-width: 1024px)");

  // Inputs changed since the last calculation → dim results until recalculated
  function markStale() {
    if (!calcResults.classList.contains("is-idle")) {
      calcResults.classList.add("is-stale");
    }
  }

  unitsInput.addEventListener("input", () => {
    unitsRange.value = Math.min(Number(unitsInput.value) || 0, Number(unitsRange.max));
    markStale();
  });

  unitsInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      calcRun.click();
    }
  });

  unitsRange.addEventListener("input", () => {
    unitsInput.value = unitsRange.value;
    markStale();
  });

  typeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      typeButtons.forEach((b) => {
        b.classList.toggle("active", b === btn);
        b.setAttribute("aria-pressed", String(b === btn));
      });
      syncUnitsHint();
      markStale();
    });
  });

  syncUnitsHint();

  calcRun.addEventListener("click", () => {
    render();

    calcResults.classList.remove("is-idle", "is-stale", "results-in");
    void calcResults.offsetWidth; // restart the reveal animation
    calcResults.classList.add("results-in");

    if (stackedLayout.matches) {
      calcResults.scrollIntoView({
        behavior: reducedMotion.matches ? "auto" : "smooth",
        block: "start"
      });
    }
  });
})();

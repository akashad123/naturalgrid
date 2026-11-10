/* Natural Grid — solar savings calculator logic.
   Pure calculation module: no DOM access, so it can be reused anywhere
   (page UI, future quote tools, server-side estimates, tests). */
(function (global) {
  "use strict";

  /* Assumptions */
  var TARIFF_PER_UNIT = 8;         /* ₹ per unit (kWh) */
  var UNITS_PER_KW_PER_DAY = 3.5;  /* units generated per kW installed, per day */

  /* Days the customer's "average units" reading covers. KSEB bills
     domestic consumers every two months and commercial consumers every
     month, so the same units figure means different daily consumption
     depending on who is reading it off their bill. */
  var BILLING_DAYS = {
    residential: 60,
    commercial: 30
  };

  var MONTH_DAYS = 30;

  /**
   * System size follows the field formula:
   *
   *   kW = average units / (billing days × units per kW per day)
   *
   * i.e. daily consumption divided by what one kW produces in a day.
   *
   * @param {number|string} averageUnits  Units (kWh) on the customer's bill
   * @param {string} propertyType         "residential" | "commercial"
   * @returns {object} Billing days used, system size in kW and yearly savings in ₹ (unrounded)
   */
  function calculate(averageUnits, propertyType) {
    var units = Math.max(0, Number(averageUnits) || 0);
    var days = BILLING_DAYS[propertyType] || BILLING_DAYS.residential;

    var dailyUnits = units / days;
    var solarSizeKw = dailyUnits / UNITS_PER_KW_PER_DAY;
    var monthlySavings = dailyUnits * MONTH_DAYS * TARIFF_PER_UNIT;

    return {
      billingDays: days,
      solarSizeKw: solarSizeKw,
      annualSavings: monthlySavings * 12
    };
  }

  global.NaturalGridCalculator = {
    calculate: calculate,
    BILLING_DAYS: BILLING_DAYS
  };
})(window);

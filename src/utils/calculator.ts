/**
 * Natural Grid — Solar savings calculator logic.
 * Pure calculation module: no DOM access, reusable in UI, API, or tests.
 */

export interface CalculatorResult {
  billingDays: number;
  solarSizeKw: number;
  annualSavings: number;
}

export type PropertyType = "residential" | "commercial";

/* Assumptions */
export const TARIFF_PER_UNIT = 8; // ₹ per unit (kWh)
export const UNITS_PER_KW_PER_DAY = 3.5; // units generated per kW installed, per day

/* Billing days based on KSEB consumer tariff structure */
export const BILLING_DAYS: Record<PropertyType, number> = {
  residential: 60,
  commercial: 30,
};

export const MONTH_DAYS = 30;

/**
 * System size follows the field formula:
 *   kW = average units / (billing days × units per kW per day)
 * i.e. daily consumption divided by what one kW produces in a day.
 */
export function calculateSolar(
  averageUnits: number | string,
  propertyType: PropertyType | string = "residential"
): CalculatorResult {
  const units = Math.max(0, Number(averageUnits) || 0);
  const days =
    BILLING_DAYS[propertyType as PropertyType] || BILLING_DAYS.residential;

  const dailyUnits = units / days;
  const solarSizeKw = dailyUnits / UNITS_PER_KW_PER_DAY;
  const monthlySavings = dailyUnits * MONTH_DAYS * TARIFF_PER_UNIT;

  return {
    billingDays: days,
    solarSizeKw: solarSizeKw,
    annualSavings: monthlySavings * 12,
  };
}

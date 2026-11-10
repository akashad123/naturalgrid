/**
 * Natural Grid — number and currency formatting utilities.
 */

export const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export const plainNumberFormatter = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 0,
});

export function formatINR(val: number): string {
  return inrFormatter.format(Math.round(val));
}

export function formatKw(val: number): string {
  return val.toFixed(1);
}

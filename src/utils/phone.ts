/**
 * Natural Grid — phone number clean-up for the contact form.
 * Pure module: normalizes input (with +91, 0 prefix, spaces, dashes) to clean 10-digit Indian mobile.
 */

export function normalizePhone(value: string | null | undefined): string | null {
  const raw = String(value || "").trim();
  if (/[^\d\s+()-]/.test(raw)) return null; /* letters or other symbols */

  let digits = raw.replace(/\D/g, "");
  if (digits.length === 12 && digits.indexOf("91") === 0) {
    digits = digits.slice(2); /* +91 country code */
  } else if (digits.length === 11 && digits.charAt(0) === "0") {
    digits = digits.slice(1); /* 0 trunk prefix */
  }
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}

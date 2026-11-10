/* Natural Grid — phone number clean-up for the contact form.
   Pure module: no DOM access, so it can be tested on its own. People paste
   numbers the way they appear on cards and WhatsApp ("+91 90726 34443",
   "09072634443"); this turns any of those into the 10-digit mobile number. */
(function (global) {
  "use strict";

  /**
   * @param {string} value  Whatever the visitor typed or pasted
   * @returns {string|null} 10-digit Indian mobile number, or null if it isn't one
   */
  function normalize(value) {
    var raw = String(value || "").trim();
    if (/[^\d\s+()-]/.test(raw)) return null; /* letters or other symbols */

    var digits = raw.replace(/\D/g, "");
    if (digits.length === 12 && digits.indexOf("91") === 0) {
      digits = digits.slice(2); /* +91 country code */
    } else if (digits.length === 11 && digits.charAt(0) === "0") {
      digits = digits.slice(1); /* 0 trunk prefix */
    }
    return /^[6-9]\d{9}$/.test(digits) ? digits : null;
  }

  global.NaturalGridPhone = { normalize: normalize };
})(window);

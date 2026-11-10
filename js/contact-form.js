/* Natural Grid — contact form: inline validation and Web3Forms submission. */
(function () {
  "use strict";

  const contactForm = document.querySelector(".contact-form");
  const formStatus = contactForm.querySelector(".form-status");
  const submitBtn = contactForm.querySelector(".submit-btn");

  // Field rules — checked on submit, cleared as the user types
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validators = [
    { id: "first-name", test: (v) => v.trim().length > 0, msg: "Please enter your first name." },
    { id: "email", test: (v) => emailRe.test(v.trim()), msg: "Please enter a valid email address." },
    { id: "phone", test: (v) => NaturalGridPhone.normalize(v) !== null, msg: "Please enter a valid 10-digit mobile number." },
    { id: "message", test: (v) => v.trim().length > 0, msg: "Please enter a short message." }
  ];

  function setFieldError(input, msg) {
    const field = input.closest(".form-field");
    field.classList.add("has-error");
    const err = field.querySelector(".field-error");
    if (err) err.textContent = msg;
    input.setAttribute("aria-invalid", "true");
  }

  function clearFieldError(input) {
    const field = input.closest(".form-field");
    field.classList.remove("has-error");
    const err = field.querySelector(".field-error");
    if (err) err.textContent = "";
    input.removeAttribute("aria-invalid");
  }

  function validateForm() {
    let firstInvalid = null;
    validators.forEach(({ id, test, msg }) => {
      const input = document.getElementById(id);
      if (!input) return;
      if (test(input.value)) {
        clearFieldError(input);
      } else {
        setFieldError(input, msg);
        if (!firstInvalid) firstInvalid = input;
      }
    });
    if (firstInvalid) firstInvalid.focus();
    return !firstInvalid;
  }

  // Clear a field's error as soon as the user edits it
  validators.forEach(({ id }) => {
    const input = document.getElementById(id);
    if (input) input.addEventListener("input", () => clearFieldError(input));
  });

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const label = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";
    formStatus.textContent = "";
    formStatus.className = "form-status";

    // Send the cleaned 10-digit number, whatever format it was typed in
    const body = new FormData(contactForm);
    body.set("phone", NaturalGridPhone.normalize(body.get("phone")));

    try {
      const res = await fetch(contactForm.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body
      });
      const data = await res.json();
      if (res.ok && data.success) {
        formStatus.textContent =
          "Thanks! Your message has been sent — we'll get back to you within 24 hours.";
        formStatus.classList.add("is-success");
        contactForm.reset();
      } else {
        formStatus.textContent =
          (data && data.message) ||
          "Sorry, that didn't go through. Please call or WhatsApp us at +91 90726 34443.";
        formStatus.classList.add("is-error");
      }
    } catch (err) {
      formStatus.textContent =
        "Network error — please call or WhatsApp us at +91 90726 34443.";
      formStatus.classList.add("is-error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = label;
    }
  });
})();

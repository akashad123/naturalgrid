import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { normalizePhone } from "@/utils/phone";

interface FormErrors {
  firstName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    botcheck: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Please enter your first name.";
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    const normalizedPhone = normalizePhone(formData.phone);
    if (!normalizedPhone) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a short message.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const val =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({ ...prev, [name]: val }));

    // Clear error for the edited field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.botcheck) return; // bot detection

    if (!validate()) return;

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const normalizedPhone = normalizePhone(formData.phone) || formData.phone;

    const payload = new FormData();
    payload.append("access_key", siteConfig.web3FormsAccessKey);
    payload.append("subject", "New enquiry from Natural Grid website");
    payload.append("from_name", "Natural Grid Website");
    payload.append("firstName", formData.firstName);
    payload.append("lastName", formData.lastName);
    payload.append("email", formData.email);
    payload.append("phone", normalizedPhone);
    payload.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message:
            "Thanks! Your message has been sent — we'll get back to you within 24 hours.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          botcheck: false,
        });
        setErrors({});
      } else {
        setStatus({
          type: "error",
          message:
            (data && data.message) ||
            `Sorry, that didn't go through. Please call or WhatsApp us at ${siteConfig.phoneDisplay}.`,
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: `Network error — please call or WhatsApp us at ${siteConfig.phoneDisplay}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot field */}
      <input
        type="checkbox"
        name="botcheck"
        className="hp-field hidden"
        tabIndex={-1}
        autoComplete="off"
        checked={formData.botcheck}
        onChange={handleChange}
        aria-hidden="true"
      />

      <div className={`form-field ${errors.firstName ? "has-error" : ""}`}>
        <label htmlFor="first-name">First Name</label>
        <input
          id="first-name"
          name="firstName"
          type="text"
          autoComplete="given-name"
          placeholder="Type here..."
          value={formData.firstName}
          onChange={handleChange}
          aria-invalid={!!errors.firstName}
          aria-describedby="first-name-error"
          required
        />
        {errors.firstName && (
          <span id="first-name-error" className="field-error" aria-live="polite">
            {errors.firstName}
          </span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="last-name">Last Name</label>
        <input
          id="last-name"
          name="lastName"
          type="text"
          autoComplete="family-name"
          placeholder="Type here..."
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      <div className={`form-field ${errors.email ? "has-error" : ""}`}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Type here..."
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby="email-error"
          required
        />
        {errors.email && (
          <span id="email-error" className="field-error" aria-live="polite">
            {errors.email}
          </span>
        )}
      </div>

      <div className={`form-field ${errors.phone ? "has-error" : ""}`}>
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="10-digit mobile number"
          value={formData.phone}
          onChange={handleChange}
          aria-invalid={!!errors.phone}
          aria-describedby="phone-error"
          required
        />
        {errors.phone && (
          <span id="phone-error" className="field-error" aria-live="polite">
            {errors.phone}
          </span>
        )}
      </div>

      <div
        className={`form-field form-field--full ${
          errors.message ? "has-error" : ""
        }`}
      >
        <label htmlFor="message">Your message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Type here..."
          value={formData.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby="message-error"
          required
        />
        {errors.message && (
          <span id="message-error" className="field-error" aria-live="polite">
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className="submit-btn" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>

      {status.type !== "idle" && (
        <p
          className={`form-status ${
            status.type === "success" ? "is-success" : "is-error"
          }`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </p>
      )}

      <p className="form-note">
        We use these details only to reply to your enquiry. The form is
        delivered to our inbox by Web3Forms, our form service.
      </p>
    </form>
  );
};

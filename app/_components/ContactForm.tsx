"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      console.log("=== EMAILJS DEBUG START ===");
      console.log("Form data:", formData);

      // Initialize EmailJS
      emailjs.init("hGlduk1SPUMoZwnpz");
      console.log("EmailJS initialized");

      // EmailJS configuration - trying multiple variable name formats
      const templateParams = {
        // Standard EmailJS variables
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "RasailyBk Saifers",

        // Alternative variable names that might be used in your template
        name: formData.name,
        email: formData.email,
        user_name: formData.name,
        user_email: formData.email,
        contact_name: formData.name,
        contact_email: formData.email,
        contact_message: formData.message,
      };

      console.log("Template params:", templateParams);
      console.log("Service ID: service_i59fysn");
      console.log("Template ID: template_mscsmme");

      const result = await emailjs.send(
        "service_i59fysn",
        "template_mscsmme",
        templateParams,
        "hGlduk1SPUMoZwnpz"
      );

      console.log("EmailJS result:", result);
      console.log("=== EMAILJS DEBUG END ===");

      if (result.status === 200) {
        console.log("SUCCESS: Email sent!");
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          onClose();
          setSubmitStatus("idle");
        }, 3000);
      } else {
        console.error("FAILED: Non-200 status:", result.status);
        setSubmitStatus("error");
      }
    } catch (error: any) {
      console.error("=== EMAILJS ERROR ===");
      console.error("Error type:", typeof error);
      console.error("Error message:", error.message);
      console.error("Error details:", error);

      // Try to get more details about the error
      if (error.text) {
        console.error("Error text:", error.text);
      }
      if (error.status) {
        console.error("Error status:", error.status);
      }
      if (error.response) {
        console.error("Error response:", error.response);
      }

      console.error("=== END ERROR ===");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <h2>Contact Me</h2>

        {submitStatus === "success" && (
          <div className={styles.successMessage}>
            ✅ Message sent successfully! I&apos;ll get back to you soon.
          </div>
        )}

        {submitStatus === "error" && (
          <div className={styles.errorMessage}>
            ❌ There was an error sending your message. Please try again.
            <br />
            <small>
              Check browser console (F12) for detailed error information.
            </small>
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              disabled={isSubmitting}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              disabled={isSubmitting}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              disabled={isSubmitting}
              rows={5}
            />
          </div>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import styles from "./Page.module.css";
import ContactForm from "../ContactForm";

const ContactSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  return (
    <section id="contact" className={styles.main}>
      <div className={styles.content}>
        <div className={styles.contactText}>Contact</div>
        <h1 className={styles.heading}>
          Let&apos;s Get in <span className={styles.highlight}>Touch</span>
        </h1>
        <p className={styles.subheading}>
          Let&apos;s connect and start with your project ASAP.
        </p>
        <button
          onClick={() => setIsContactFormOpen(true)}
          className={styles.bookBtn}
        >
          Email me <span className={styles.arrow}>↗</span>
        </button>
        <div className={styles.emailText}>
          Or Make a call <a href="tel:09068653422">+91 9068600000</a>
        </div>
        <div className={styles.socialSection}>
          <h3 className={styles.socialHeading}>Follow me on social media!</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Facebook"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill="#fff" />
                <path
                  d="M20.5 18H22V20.5H20.5V28H17.5V20.5H16V18H17.5V16.5C17.5 15.1193 18.6193 14 20 14H22V16.5H20.5V18Z"
                  fill="#111"
                />
              </svg>
            </a>
            <a
              href="https://x.com/Saifers_27"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Twitter"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill="#fff" />
                <path
                  d="M27 13.5C26.3 13.8 25.6 14 24.8 14.1C25.6 13.6 26.2 12.8 26.5 12C25.8 12.5 25 12.8 24.1 13C23.5 12.3 22.6 12 21.7 12C19.7 12 18.1 13.6 18.1 15.6C18.1 15.9 18.1 16.2 18.2 16.5C15.2 16.3 12.6 14.9 10.8 12.8C10.5 13.3 10.4 13.8 10.4 14.4C10.4 15.5 11 16.5 11.9 17.1C11.3 17.1 10.7 16.9 10.2 16.6V16.7C10.2 18.3 11.4 19.7 13 20C12.7 20.1 12.4 20.2 12.1 20.2C11.9 20.2 11.7 20.2 11.5 20.1C11.9 21.5 13.2 22.5 14.7 22.5C13.5 23.4 12 24 10.4 24C10.1 24 9.8 24 9.5 23.9C11 24.9 12.8 25.5 14.7 25.5C21.7 25.5 25.7 20.2 25.7 15.9C25.7 15.7 25.7 15.5 25.7 15.3C26.4 14.8 27 14.2 27 13.5Z"
                  fill="#111"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/saifersrsl?igsh=ZDh5bGxtdzBvd3Y1&utm_source=qr"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Instagram"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill="#fff" />
                <rect
                  x="12"
                  y="12"
                  width="12"
                  height="12"
                  rx="4"
                  fill="none"
                  stroke="#111"
                  strokeWidth="2"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="3"
                  fill="none"
                  stroke="#111"
                  strokeWidth="2"
                />
                <circle cx="23" cy="13" r="1" fill="#111" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </section>
  );
};

export default ContactSection;

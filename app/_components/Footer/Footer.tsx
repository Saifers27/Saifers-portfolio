import React from "react";
import styles from "./Footer.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#profile", label: "Profile" },
  { href: "#work", label: "Work" },
  { href: "#skill", label: "Skill" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();

      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div>
            <div className={styles.desc}>
              DESIGNED &amp; DEVELOPED BY
              <br />
              SAIFERS RASAILY BK
            </div>
            <div className={styles.email}>w24013@osfl.ac.jp</div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.linksGrid}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.bottom}>
        <span className={styles.copyright}>© 2025 SAIFERS Portfolio</span>
        <span className={styles.bgName}>SAIFERS RASAILY</span>
      </div>
    </footer>
  );
};

export default Footer;

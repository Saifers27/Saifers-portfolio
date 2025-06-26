"use client";

/// <reference types="react" />
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import About from "./_components/About/Page";
import Profile from "./_components/Profile/Page";
import Work from "./_components/Work/Page";
import Skill from "./_components/Skill/Page";
import Contact from "./_components/Contact/Page";
import Footer from "./_components/Footer/Footer";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#profile", label: "Profile" },
  { href: "#work", label: "Work" },
  { href: "#skill", label: "Skill" },
  { href: "#contact", label: "Contact" },
];

const HomePage: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  // Close menu on navigation
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className={styles.background}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/images/logo.jpg"
          alt="SAIFERS Logo"
          width={72}
          height={72}
          className={styles.logoImg}
        />
        <span className={styles.logoText}>SAIFERS</span>
      </Link>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <button
            className={styles.hamburger}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.hamburgerBox}>
              <span className={styles.hamburgerInner}></span>
            </span>
          </button>
          <ul className={styles.navLinksDesktop}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {menuOpen && (
          <div className={styles.menuOverlay}>
            <button
              className={styles.closeButton}
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.closeIcon}>&times;</span>
            </button>
            <ul className={styles.menuLinks}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
      <main>
        {/* Hero Section */}
        <section className={styles.heroSection} id="hero">
          <div className={styles.introBadge}>
            <span style={{ position: "relative", zIndex: 1 }}>
              Hello, I&apos;m SAIFERS ✌️
            </span>
          </div>
          <h1 className={styles.heroTitle}>
            <span className={styles.bold}>Looking For New</span> CHALLENGES
            <br />
            <span className={styles.faded}>
              In my life to improve my skills
            </span>
            <br />
            <span className={styles.faded}>
              {" "}
              &amp; MYself.With knowledge &amp;
            </span>
            <br />
            <span className={styles.faded}>
              ability,I&apos;m prepared to do my best.
            </span>
            <br />
            <span className={styles.faded}>
              I believe I could potray my passion through my work.
            </span>
          </h1>
          <div ref={imageRef} className={styles.heroImageWrapper}>
            <Image
              src="/images/3d.png"
              alt="Abstract 3D Visual"
              width={600}
              height={450}
              className={styles.heroImage}
              priority
            />
          </div>
        </section>
        {/* About Section */}
        <About />
        {/* Profile Section */}
        <Profile />
        {/* Work Section */}
        <Work />
        {/* Skill Section */}
        <Skill />
        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

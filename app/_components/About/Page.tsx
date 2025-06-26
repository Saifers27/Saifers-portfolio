"use client";

import React from "react";
import Image from "next/image";
import styles from "./Page.module.css";

const AboutSection = () => (
  <section id="about" className={styles.main}>
    <div className={styles.aboutSection}>
      <div className={styles.aboutGrid}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/main-visual.jpg"
            alt="SAIFERS"
            width={500}
            height={600}
            className={styles.aboutImage}
            priority
          />
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.introBadge}>
            <span style={{ position: "relative", zIndex: 1 }}>About Me</span>
          </div>
          <h1 className={styles.aboutTitle}>My Journey</h1>
          <p className={styles.aboutText}>
            I&apos;m a passionate web programmer from Nepal who finds joy in the
            perfect balance between clean code and creative expression. My
            journey is unique- By day, I used to teach mathematics, sharing the
            beauty of numbers and logic, while by night, I used to express
            myself through music, playing guitar in a band.
          </p>
          <p className={styles.aboutText}>
            This blend of analytical thinking and artistic expression shapes my
            approach to web development. I believe in creating meaningful
            digital experiences that not only function flawlessly but also
            engage and inspire. When I&apos;m not coding, you&apos;ll find me
            immersed in books, strumming my guitar, or exploring new ideas that
            fuel my passion for lifelong learning.
          </p>
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>∞</span>
              <span className={styles.statLabel}>Curiosity</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Dedication</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

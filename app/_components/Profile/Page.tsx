import React from "react";
import styles from "./Page.module.css";

const ProfileSection = () => (
  <section id="profile" className={styles.main}>
    <div className={styles.titleContainer}>
      <div className={styles.introBadge}>
        <span style={{ position: "relative", zIndex: 1 }}>Profile</span>
      </div>
      <h1 className={styles.aboutTitle}>My Profile</h1>
    </div>

    <div className={styles.profileContainer}>
      {/* Left Side - Photo */}
      <div className={styles.photoSection}>
        <div className={styles.photoContainer}>
          <img
            src="/images/profile-photo.jpg"
            alt="My Profile Photo"
            className={styles.profilePhoto}
          />
          <div className={styles.photoOverlay}></div>
        </div>
        <div className={styles.quickInfo}>
          <h3>RasailyBk Saifers</h3>
          <p>Web Developer & Creative Coder</p>
          <div className={styles.location}>
            <span>📍 Japan</span>
          </div>
        </div>
      </div>

      {/* Right Side - Information */}
      <div className={styles.infoSection}>
        <div className={styles.infoCard}>
          <h2>About Me</h2>
          <p>
            Hello! I&apos;m a passionate web developer who loves creating
            beautiful and functional digital experiences. I specialize in modern
            web technologies and enjoy bringing creative ideas to life through
            code.
          </p>
        </div>

        <div className={styles.infoCard}>
          <h2>Background</h2>
          <p>
            Currently studying at a specialized business foreign language school
            in Japan, I&apos;m combining my love for technology with
            international business perspectives. My journey in web development
            started with curiosity and has evolved into a passion for creating
            innovative solutions.
          </p>
        </div>

        <div className={styles.infoCard}>
          <h2>Hobbies & Interests</h2>
          <div className={styles.hobbiesList}>
            <div className={styles.hobbyItem}>
              <span className={styles.hobbyIcon}>🎵</span>
              <span>Playing Music</span>
            </div>
            <div className={styles.hobbyItem}>
              <span className={styles.hobbyIcon}>🎹</span>
              <span>Producing Music</span>
            </div>
            <div className={styles.hobbyItem}>
              <span className={styles.hobbyIcon}>📚</span>
              <span>Reading Books</span>
            </div>
            <div className={styles.hobbyItem}>
              <span className={styles.hobbyIcon}>🎮</span>
              <span>Gaming (Sometimes)</span>
            </div>
            <div className={styles.hobbyItem}>
              <span className={styles.hobbyIcon}>🏃‍♂️</span>
              <span>Fitness & Running</span>
            </div>
            <div className={styles.hobbyItem}>
              <span className={styles.hobbyIcon}>🌍</span>
              <span>Travel & Culture</span>
            </div>
          </div>
        </div>

        <div className={styles.infoCard}>
          <h2>Fun Facts</h2>
          <ul className={styles.funFacts}>
            <li>I&apos;m good at playing the guitar</li>
            <li>I&apos;m learning to play drums and piano</li>
            <li>I love trying new cuisines from around the world</li>
            <li>I&apos;m a night owl who codes best after midnight</li>
            <li>I can speak multiple languages</li>
            <li>I can solve complex math problems in my head</li>
            <li>I have a playlist for every mood</li>
            <li>I&apos;m obsessed with finding the perfect coffee</li>
          </ul>
        </div>

        <div className={styles.infoCard}>
          <h2>Goals & Aspirations</h2>
          <p>
            I&apos;m passionate about creating innovative web applications that
            make a difference. My goal is to become a full-stack developer who
            can build complete, scalable solutions and contribute to open-source
            projects that help the developer community.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ProfileSection;

import React from "react";
import styles from "./Page.module.css";

const WorkSection = () => {
  const projects = [
    {
      id: 1,
      title: "EVENTHUB",
      description:
        "A modern event management website built with HTML and CSS. Features responsive design, event listings, and user-friendly interface for managing and discovering events.",
      technologies: ["HTML", "CSS", "Responsive Design"],
      image: "/images/project1.jpg",
      liveUrl:
        "https://college-project-4pk7yejff-saifers-rasaily-bks-projects.vercel.app",
      githubUrl: "https://github.com/Saifers27/college-project", //  GitHub repo
      category: "Web Design",
    },
    {
      id: 2,
      title: "Personal Website",
      description:
        "My first personal website showcasing my introduction, skills, education, and contact information. A simple and clean design that represents my early web development journey.",
      technologies: ["HTML", "CSS"],
      image: "/images/project2.jpg",
      liveUrl: "https://my-web-site-ashen.vercel.app/",
      githubUrl: "https://github.com/Saifers27/My-WEB-SITEl", // Add GitHub repo if available
      category: "Personal Project",
    },
    // Add more projects here
  ];

  return (
    <section id="work" className={styles.main}>
      <div className={styles.titleContainer}>
        <div className={styles.introBadge}>
          <span style={{ position: "relative", zIndex: 1 }}>Work</span>
        </div>
        <h1 className={styles.aboutTitle}>My Projects</h1>
        <p className={styles.subtitle}>
          Here are some of my recent projects showcasing my skills in web
          development and design.
        </p>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img
                src={project.image || "/images/project-placeholder.jpg"}
                alt={project.title}
              />
              <div className={styles.projectOverlay}>
                <div className={styles.projectLinks}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.liveButton}
                  >
                    🌐 Live Demo
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.githubButton}
                    >
                      📁 Code
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.projectInfo}>
              <div className={styles.projectCategory}>{project.category}</div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.projectTechnologies}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;

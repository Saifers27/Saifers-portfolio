// app/skills/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "microcms-js-sdk";
import styles from "./Page.module.css";

interface SkillItem {
  id: string;
  name: string;
  position: string;
  profile: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
}

const SkillSection = () => {
  const [skills, setSkills] = useState<SkillItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if environment variables are available
        if (
          !process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN ||
          !process.env.NEXT_PUBLIC_MICROCMS_API_KEY
        ) {
          console.warn("microCMS environment variables not configured");
          setError("microCMS configuration not available");
          return;
        }

        // Create client inside the component
        const client = createClient({
          serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
          apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
        });

        console.log("Fetching from endpoint: skills");
        const data = await client.get({ endpoint: "skills" });
        console.log("Data received:", data);
        setSkills(data.contents);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(`Error: ${error}`);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="skill" className={styles.main}>
      <div className={styles.titleContainer}>
        <div className={styles.introBadge}>
          <span style={{ position: "relative", zIndex: 1 }}>Skills</span>
        </div>
        <h1 className={styles.aboutTitle}>My Skills</h1>
      </div>
      <p>Skill information goes here.</p>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              textAlign: "center",
            }}
          >
            {skill.image && (
              <img
                src={skill.image.url}
                alt={skill.name}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "4px",
                  marginBottom: "10px",
                }}
              />
            )}
            <h3 style={{ margin: "10px 0 5px 0" }}>{skill.name}</h3>
            <p style={{ margin: "5px 0", color: "#666" }}>{skill.position}</p>
            <p style={{ margin: "5px 0", fontSize: "14px" }}>{skill.profile}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;

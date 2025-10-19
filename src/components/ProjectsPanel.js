import React from "react";
import "./ProjectsPanel.css";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";

export default function ProjectsPanel() {
  const projects = [
    {
      title: "Meltix Home Automation Backend",
      dates: "Mar 2025 - Present",
      description:
        "Designed and deployed the backend infrastructure for a home automation system, powering real-time communication between the iOS app, Raspberry Pi bridge, and ESP32-based devices for sprinkler and garage-door control. Implemented persistent WebSocket connections for reliable bidirectional messaging, RESTful routes for authentication and scheduling, and a Prisma-PostgreSQL database for structured, scalable device management.",
      tech: ["Python", "C++", "Node.js", "Express", "PostgreSQL", "Prisma", "Raspberry Pi", "ESP32"],
      image: project1,
      github: "https://github.com/tomSadowy7/MeltixOfficialBackend",
    },
    {
      title: "Meltix Home Automation iOS Frontend",
      dates: "Mar 2025 - Present",
      description:
        "Developed the iOS frontend for a home automation system, providing a unified mobile interface for controlling and monitoring smart devices connected through the Meltix ecosystem. Implemented Bluetooth provisioning for secure Wi-Fi setup, real-time sprinkler zone control, scheduling automation, and user authentication flows with SwiftUI. Designed a responsive UI that syncs with the Raspberry Pi HomeBase and backend via REST and WebSocket APIs for seamless device updates.",
      tech: ["Swift", "BLE"],
      image: project2,
      github: "https://github.com/tomSadowy7/MeltixSwiftPublic",
    },
    {
      title: "TigerMarket",
      dates: "Dec 2024 - Present",
      description:
        "Developed a full-stack university marketplace with real-time buyer-seller chat, semantic product search via vector embeddings, and AI-powered image classification that auto-categorizes listings to streamline post creation (official release still pending)",
      tech: ["Microsoft Azure", "React", "Node.js", "Express", "JavaScript", "PostgreSQL", "Prisma"],
      image: project3,
      link: "https://tigermarket-f7555a069d76.herokuapp.com/",
    },
    {
      title: "MedLife",
      dates: "Mar 2025 - April 2025",
      description:
        "Collaborated on MedLife, an AI-powered medication safety platform that detects and explains potential drug–drug interactions in natural language. Built during HackPrinceton Spring 2025, the system analyzes user-entered medications and generates transparent, educational feedback to help patients understand possible side effects. Further work will look into finishing our custom ML model trained on the CDC drug dataset to avoid AI hallucinations.",
      tech: ["React", "Node.js", "Express", "Python"],
      image: project4,
      github: "https://github.com/TheHarrySun/hackprinceton_spring2025",
    },
    {
      title: "Offscreen Public Documentation",
      dates: "June 2025 - Aug 2025",
      description:
        "Authored a comprehensive 10-page internal tutorial on large-scale ML system design, distributed training architecture, and optimization strategy for my summer 2025 internship. This public repository features an approved excerpt summarizing foundational principles of machine learning training workflows derived from that original document.",
      tech: ["Google Cloud", "Python", "Pytorch", "DeepSpeed", "Flask"],
      image: project5,
      github: "https://github.com/tomSadowy7/OffscreenPublicDoc",
    },

  ];

  return (
    <section className="projects-panel">
      <h2>Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <img src={p.image} alt={p.title} className="project-image" />

            <div className="project-content">
              <h3>{p.title}</h3>
              <p className="project-dates">{p.dates}</p>
              <p className="project-description">{p.description}</p>

              <div className="project-tech">
                <span className="tech-label">Tech Stack:</span>
                <div className="tech-tags">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-buttons">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn github"
                  >
                    GitHub
                  </a>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn learn"
                  >
                    Website Link
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

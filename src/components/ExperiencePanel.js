import React, { useState } from "react";
import "./ExperiencePanel.css";

export default function ExperiencePanel() {
  const [openOffscreen, setOpenOffscreen] = useState(false);
  const [openTA, setOpenTA] = useState(false);

  return (
    <section className="experience-panel">
      <h2>Experience</h2>

      
      <div
        className={`experience-card ${openOffscreen ? "open" : ""}`}
        onClick={() => setOpenOffscreen(!openOffscreen)}
      >
        <div className="experience-card-header">
          <div className="experience-title">
            <h3>Offscreen, Inc</h3>
            <div className="experience-meta">
              <span className="meta-left">
                Google Cloud • Python • PyTorch • DeepSpeed • Flask
              </span>
              <span className="meta-right">
                NYC, NY | June 2025 – Aug 2025
              </span>
            </div>
            <p className="experience-role">
              Machine Learning / Software Engineering Intern
            </p>
          </div>
          <span className="expand-icon">{openOffscreen ? "▲" : "▼"}</span>
        </div>

        {openOffscreen && (
          <ul className="experience-points">
            <li>
              Cleaned 250&nbsp;GB+ of data and trained numerous large language
              models (up to 70B parameters) using LoRA adapters and
              task-specific decoder heads, leveraging data parallelism and
              parameter sharding across multi-GPU nodes.
            </li>
            <li>
              Benchmarked text-conditioned sprite prediction quality, latency,
              and cost per fine-tuned model.
            </li>
            <li>
              Redesigned distributed inference backend with continuous
              per-token batching and priority scheduling, improving throughput
              by ~10× and reducing mean latency by ~80% under load.
            </li>
            <li>
              Authored a 10-page LaTeX tutorial documenting system architecture,
              ML training rationale, and workflow design to enable rapid
              onboarding and continuity for future interns.
            </li>
          </ul>
        )}
      </div>

     
      <div
        className={`experience-card ${openTA ? "open" : ""}`}
        onClick={() => setOpenTA(!openTA)}
      >
        <div className="experience-card-header">
          <div className="experience-title">
            <h3>Princeton COS Department</h3>
            <div className="experience-meta">
              <span className="meta-left">C • Java</span>
              <span className="meta-right">
                Princeton, NJ | Jan 2025 – Present
              </span>
            </div>
            <p className="experience-role">
              Data Structures & Algorithms / Systems Programming Lab TA
            </p>
          </div>
          <span className="expand-icon">{openTA ? "▲" : "▼"}</span>
        </div>

        {openTA && (
          <ul className="experience-points">
            <li>
              Lead weekly lab sessions to help students debug assignments and
              reinforce key computer science concepts.
            </li>
          </ul>
        )}
      </div>
    </section>
  );
}

import React, { useState } from "react";
import "./ResearchPanel.css";

export default function ResearchPanel() {
  const [openPVL, setOpenPVL] = useState(false);
  const [openGS, setOpenGS] = useState(false);

  return (
    <section className="research-panel">
      <h2>Research</h2>

      <div
        className={`research-card ${openPVL ? "open" : ""}`}
        onClick={() => setOpenPVL(!openPVL)}
      >
        <div className="research-card-header">
          <div className="research-title">
            <h3>Princeton Vision & Learning Lab</h3>
            <div className="research-meta">
              <span className="meta-left">Undergraduate Researcher</span>
              <span className="meta-right">Oct 2024 – Present</span>
            </div>
          </div>
          <span className={`expand-icon ${openPVL ? "rotated" : ""}`}>▼</span>
        </div>

        {openPVL && (
          <ul className="research-points">
            <li>
              Developing software to improve domain randomization for reinforcement
              learning training in robotics via controlled scene generation
            </li>
            <li>
              Targeting <strong>CVPR 2026</strong> publication (submission Fall
              2025).
            </li>
          </ul>
        )}
      </div>

      <div
        className={`research-card ${openGS ? "open" : ""}`}
        onClick={() => setOpenGS(!openGS)}
      >
        <div className="research-card-header">
          <div className="research-title">
            <h3>Governor’s School of NJ in Engineering & Technology</h3>
            <div className="research-meta">
                <span className="meta-left">Researcher</span>
                <span className="meta-right">June 2022 – July 2022</span>
            </div>
          </div>
          <span className={`expand-icon ${openGS ? "rotated" : ""}`}>▼</span>
        </div>

        {openGS && (
          <div className="research-content">
            <ul className="research-points">
              <li>
                Engineered a browser extension to assess web page readability,
                suggest follow-up resources, and enable discussion
              </li>
              <li>
                First author shared publication in <em>Rutgers 2022 Governor's School of New Jersey Program in Engineering & Technology Research Journal</em>.
              </li>
            </ul>
            <a
              href="https://drive.google.com/file/d/1k7eS4plSDknbytQThMiWV9NfrviO8_Ob/view"
              className="research-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Publication →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

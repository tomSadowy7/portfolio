import React from "react";
import "./CourseworkPanel.css";

export default function CourseworkPanel() {
  return (
    <section className="coursework-panel">
      <h2>Coursework</h2>
      <div className="course-row">
        <div className="course-section">
          <h3>Current Coursework</h3>
          <ul>
            <li>Computer Vision (COS 429)</li>
            <li>Robot Planning Meets Machine Learning (ECE 531)*</li>
            <li>Distributed Systems (COS 418)</li>
            <li>Computer Networks (COS 461)</li>
            <li>Financial Investments (ECO 362)</li>
          </ul>
        </div>

        

        <div className="course-section">
          <h3>Computer Science</h3>
          <ul>
            <li>Introduction to CS (COS 126)</li>
            <li>Systems Programming (COS 217)</li>
            <li>Data Structures & Algorithms (COS 226)</li>
            <li>Contemporary Logic Design (COS 306)</li>
            <li>Machine Learning (COS 324)</li>
            <li>Advanced Programming Techniques (COS 333)</li>
          </ul>
        </div>


        <div className="course-section">
          <h3>Mathematics</h3>
          <ul>
            <li>Multivariable Calculus (MAT 201)</li>
            <li>Linear Algebra (MAT 202)</li>
            <li>Discrete Mathematics (COS 240)</li>
            <li>Differential Equations (MAT 322)</li>
            <li>Probability & Stochastic Systems (MAT 380)</li>
          </ul>
        </div>
        
      </div>
      <p className="legend">* denotes graduate-level course</p>
    </section>
  );
}

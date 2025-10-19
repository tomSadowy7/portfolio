import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; 
import photo from "../assets/images/photo_website.PNG";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <img src={photo} alt="Tomasz headshot" className="headshot" />
      <h1 className="title">
        Hi, I'm <span className="name">Tomasz</span>
      </h1>

      <div className="hero-buttons">
        <a
          href="mailto:tsadowy@princeton.edu.com"
          className="hero-btn"
          aria-label="Email Tomasz"
        >
          <FaEnvelope className="icon" /> Email
        </a>
        <a
          href="https://github.com/tomSadowy7"
          className="hero-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="icon" /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/tomasz-sadowy"
          className="hero-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="icon" /> LinkedIn
        </a>
      </div>
    </div>
  );
}

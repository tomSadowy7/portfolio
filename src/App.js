import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Panel from "./components/Panel";
import CourseworkPanel from "./components/CourseworkPanel";
import ExperiencePanel from "./components/ExperiencePanel";
import ResearchPanel from "./components/ResearchPanel"
import ProjectsPanel from "./components/ProjectsPanel"

export default function App() {
  return (
    <div className="app">
      <Hero />
      <Panel />
      <CourseworkPanel />
      <ExperiencePanel />
      <ResearchPanel />
      <ProjectsPanel />
    </div>
  );
}

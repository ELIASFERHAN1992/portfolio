import { useState } from "react";
import "./Projects.css";
import ProjectData from "../../assets/project_data";
import { FaExternalLinkAlt } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";

const CATEGORIES = ["All", "React / Next.js", "Spring Boot", "Node.js"];

const ProjectCard = ({ project }) => (
  <article className="project-card">
    <div className="project-card-header">
      <h3 className="project-card-title">{project.name}</h3>
    </div>

    <p className="project-card-desc">{project.description}</p>

    <div className="project-tech-list">
      {project.tech.map((t) => (
        <span key={t} className="project-tech-badge">{t}</span>
      ))}
    </div>

    <ul className="project-features">
      {project.features.map((f) => (
        <li key={f}>
          <HiCheckCircle className="feature-icon" />
          {f}
        </li>
      ))}
    </ul>

    <div className="project-actions">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn project-btn--primary"
        >
          <FaExternalLinkAlt size={12} /> Live Demo
        </a>
      )}
    </div>
  </article>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = ProjectData.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "React / Next.js") {
      return project.tech.some((t) => ["React.js", "Next.js"].includes(t));
    }
    if (activeFilter === "Spring Boot") {
      return project.tech.some((t) => ["Spring Boot", "Java"].includes(t));
    }
    if (activeFilter === "Node.js") {
      return project.tech.some((t) => ["Node.js", "Express.js"].includes(t));
    }
    return true;
  });

  return (
    <div className="sec projects-sec">
      <div className="sec-header">
        <h2>My Projects</h2>
        <span className="underline" />
      </div>

      <div className="projects-filter-bar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

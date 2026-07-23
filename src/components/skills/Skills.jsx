import { useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact,
  FaNodeJs, FaGithub, FaFigma
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiPostman, SiExpress,
  SiNextdotjs, SiPostgresql, SiSpringboot,
} from 'react-icons/si';
import './Skills.css';

const ALL_SKILLS = [
  // Frontend
  { icon: <FaHtml5 className="si html" />,           name: "HTML5",        category: "Frontend",  level: "Advanced",    color: "#e34c26" },
  { icon: <FaCss3Alt className="si css" />,          name: "CSS3",         category: "Frontend",  level: "Advanced",    color: "#264de4" },
  { icon: <SiTailwindcss className="si tailwind" />, name: "Tailwind CSS", category: "Frontend",  level: "Experienced", color: "#06b6d4" },
  { icon: <FaJsSquare className="si js" />,          name: "JavaScript",   category: "Frontend",  level: "Advanced",    color: "#f0db4f" },
  { icon: <FaReact className="si react" />,          name: "React.js",     category: "Frontend",  level: "Advanced",    color: "#61dafb" },
  { icon: <SiNextdotjs className="si nextjs" />,     name: "Next.js",      category: "Frontend",  level: "Proficient",  color: "#ececec" },

  // Backend
  { icon: <FaNodeJs className="si node" />,           name: "Node.js",     category: "Backend",   level: "Advanced",    color: "#68a063" },
  { icon: <SiExpress className="si express" />,       name: "Express.js",  category: "Backend",   level: "Advanced",    color: "#999999" },
  { icon: <SiSpringboot className="si springboot" />, name: "Spring Boot", category: "Backend",   level: "Experienced", color: "#6db33f" },

  // Databases
  { icon: <SiMongodb className="si mongo" />,       name: "MongoDB",    category: "Databases", level: "Proficient",  color: "#4db33d" },
  { icon: <SiPostgresql className="si postgres" />, name: "PostgreSQL", category: "Databases", level: "Advanced",    color: "#336791" },

  // Tools
  { icon: <FaGithub className="si github" />,   name: "Git & GitHub", category: "Tools",     level: "Advanced",    color: "#ececec" },
  { icon: <FaFigma className="si figma" />,     name: "Figma",        category: "Tools",     level: "Proficient",  color: "#a259ff" },
  { icon: <SiPostman className="si postman" />, name: "Postman",      category: "Tools",     level: "Advanced",    color: "#ff6c37" },
];

const CATEGORIES = ["All", "Frontend", "Backend", "Databases", "Tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All"
    ? ALL_SKILLS
    : ALL_SKILLS.filter((s) => s.category === activeCategory);

  return (
    <div className="skills-sec sec" id="skills">
      <div className="sec-header">
        <h2>My Skills &amp; Tech Stack</h2>
        <span className="underline" />
        <p className="sec-subtitle">Technologies and tools I use to craft performant web applications</p>
      </div>

      <div className="skills-filter-bar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`skill-filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="skills-compact-grid">
        {filteredSkills.map(({ name, icon, level, color }) => (
          <div
            className="compact-skill-card"
            key={name}
            style={{ "--brand-color": color }}
          >
            <div className="compact-skill-icon">{icon}</div>
            <div className="compact-skill-info">
              <span className="compact-skill-name">{name}</span>
              <span className="compact-skill-level">{level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

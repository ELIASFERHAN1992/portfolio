import "./Services.css";
import { FaCode, FaServer, FaMobileAlt, FaArrowRight } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const SERVICES = [
  {
    icon: <FaCode />,
    title: "Full-Stack Web Apps",
    description:
      "End-to-end web applications with clean architecture, robust backends, and responsive frontends.",
    tags: ["React", "Node.js", "Spring Boot", "REST APIs"],
  },
  {
    icon: <FaMobileAlt />,
    title: "Frontend Development",
    description:
      "Fast, responsive, and accessible user interfaces built with React.js and Next.js.",
    tags: ["React.js", "Next.js", "Tailwind CSS", "UI/UX"],
  },
  {
    icon: <FaServer />,
    title: "Backend & APIs",
    description:
      "Secure, scalable server systems, REST APIs, and database architecture using Node & Spring Boot.",
    tags: ["REST API", "Spring Boot", "PostgreSQL", "JWT"],
  },
  {
    icon: <MdDashboard />,
    title: "Dashboards & Admin Panels",
    description:
      "Data-rich management systems with real-time analytics and role-based access control.",
    tags: ["Admin UI", "Role Access", "Real-Time Data", "MongoDB"],
  },
];

const Services = () => (
  <div className="sec services-sec" id="services">
    <div className="sec-header">
      <h2>Services I Offer</h2>
      <span className="underline" />
      <p className="sec-subtitle">High-quality development solutions tailored for startups and businesses</p>
    </div>

    <div className="services-grid">
      {SERVICES.map(({ icon, title, description, tags }) => (
        <article className="svc-card" key={title}>
          <div className="svc-icon-box">
            {icon}
          </div>
          <h3 className="svc-card-title">{title}</h3>
          <p className="svc-card-desc">{description}</p>
          <div className="svc-tags">
            {tags.map((tag) => (
              <span key={tag} className="svc-tag">{tag}</span>
            ))}
          </div>
          <a href="#contact" className="svc-cta">
            Request Service <FaArrowRight />
          </a>
        </article>
      ))}
    </div>
  </div>
);

export default Services;

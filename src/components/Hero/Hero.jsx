import profile from "../../assets/kiya2.jpg";
import "./Hero.css";
import { FaMapMarkerAlt, FaBriefcase, FaRocket, FaTelegram, FaDownload } from "react-icons/fa";

const Hero = () => (
  <div className="hero">
    <div className="hero-inner">
      <div className="hero-copy">
        <div className="hero-status-badge">
          <span className="status-dot" /> Open to Freelance &amp; New Projects
        </div>
        <span className="greeting">Hello, I'm</span>
        <h1>
          <span className="name">Elias</span> Ferhan
        </h1>
        <p className="hero-title-label">Full-Stack Web Developer and Freelancer</p>
        <p className="hero-value">
          I build modern, scalable web applications that help businesses grow,
          automate workflows, and deliver exceptional user experiences.
        </p>

        <div className="hero-meta">
          <span><FaMapMarkerAlt className="hero-meta-icon" /> Addis Ababa, Ethiopia</span>
          <span><FaBriefcase className="hero-meta-icon" /> Available for Freelance</span>
          <span><FaRocket className="hero-meta-icon" /> 2+ Years Experience</span>
        </div>

        <div className="hero-cta">
          <a href="#contact" className="hero-btn hero-btn--primary">Hire Me</a>
          <a
            href="https://t.me/Painkiller_2312"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn hero-btn--telegram"
          >
            <FaTelegram /> Telegram
          </a>
          <a href="#projects" className="hero-btn hero-btn--outline">View Projects</a>
          <a
            href="/ELIAS_FERHAN_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn hero-btn--resume"
          >
            <FaDownload className="btn-icon" /> Resume
          </a>
        </div>
      </div>

      <div className="hero-img-wrapper">
        <img
          src={profile}
          alt="Elias Ferhan"
          className="hero-img"
          fetchpriority="high"
        />
        <div className="hero-img-glow" />
      </div>
    </div>
  </div>
);

export default Hero;

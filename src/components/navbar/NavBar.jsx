import { useEffect, useState } from 'react';
import './NavBar.css';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));    const visibilityMap = new Map(sections.map((s) => [s.id, 0]));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });

        let maxRatio = 0;
        let mostVisible = activeSection.replace('#', '');
        visibilityMap.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisible = id;
          }
        });

        if (maxRatio > 0) {
          setActiveSection(`#${mostVisible}`);
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="navbar">
      <a href="#home" className="navbar-brand" aria-label="Home">
        <span className="navbar-logo-text">EF</span>
      </a>
      <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
        {[
          ['#home', 'Home'],
          ['#about', 'About'],
          ['#services', 'Services'],
          ['#skills', 'Skills'],
          ['#experience', 'Experience'],
          ['#education', 'Education'],
          ['#projects', 'Projects'],
          ['#contact', 'Contact'],
        ].map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              className={`link ${activeSection === href ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="navbar-right">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
          {theme === 'dark' ? <FaSun size={17} /> : <FaMoon size={17} />}
        </button>
        <div className="hamburger" onClick={() => setMenuOpen((o) => !o)}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

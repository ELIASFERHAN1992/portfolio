import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaTelegram } from 'react-icons/fa';

const NAV = [
  { href: '#home',       label: 'Home'       },
  { href: '#about',      label: 'About'      },
  { href: '#skills',     label: 'Skills'     },
  { href: '#services',   label: 'Services'     },
  { href: '#education',  label: 'Education'  },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects'   },
  { href: '#contact',    label: 'Contact'    },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">

      <div className="footer-brand">
        <span className="footer-name">Elias Ferhan</span>
        <p className="footer-tagline">
          Full-Stack Web Developer &amp; Freelancer based in Addis Ababa, Ethiopia.
          Building performant, accessible web experiences.
        </p>
        <div className="footer-socials">
        
          <a href="https://github.com/ELIASFERHAN1992" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://t.me/Painkiller_2312" target="_blank" rel="noreferrer" aria-label="Telegram">
            <FaTelegram />
          </a>
          <a href="mailto:eliasferhan1992@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="footer-col">
        <h4 className="footer-col-title">Quick Links</h4>
        <nav className="footer-nav">
          {NAV.map(({ href, label }) => (
            <a key={href} href={href} className="footer-nav-link">{label}</a>
          ))}
        </nav>
      </div>

      <div className="footer-col">
        <h4 className="footer-col-title">Contact</h4>
        <div className="footer-contact-list">
          <a href="mailto:eliasferhan1992@gmail.com" className="footer-contact-row">
            <FaEnvelope className="footer-contact-icon" />
            <span>eliasferhan1992@gmail.com</span>
          </a>
          <a href="https://t.me/Painkiller_2312" target="_blank" rel="noreferrer" className="footer-contact-row">
            <FaTelegram className="footer-contact-icon" />
            <span>@Painkiller_2312 (Telegram)</span>
          </a>
          <div className="footer-contact-row">
            <FaMapMarkerAlt className="footer-contact-icon" />
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>

    </div>

    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} Tilahun Tareke. All rights reserved.</span>
      <span className="footer-made">Built with React and vite</span>
    </div>
  </footer>
);

export default Footer;

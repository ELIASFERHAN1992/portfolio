import "./Education.css";
import { HiBadgeCheck, HiExternalLink } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";

const ITEMS = [
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "Udacity Nanodegree",
    period: "January 2026",
    verifyUrl: "https://confirm.udacity.com/P9V2J54A",
    credentialId: "P9V2J54A",
  },
  {
    title: "Programming Fundamentals",
    issuer: "Udacity Nanodegree",
    period: "January 2026",
    verifyUrl: "https://confirm.udacity.com/D3YKL4W2",
    credentialId: "D3YKL4W2",
  },
  {
    title: "Android Developer Fundamentals",
    issuer: "Udacity Nanodegree",
    period: "January 2026",
    verifyUrl: "https://confirm.udacity.com/P9V2J54A",
    credentialId: "P9V2J54A",
  },
  {
    title: "Data Analysis Fundamentals",
    issuer: "Udacity Nanodegree",
    period: "January 2026",
    verifyUrl: "https://confirm.udacity.com/RM4UEZ6W",
    credentialId: "RM4UEZ6W",
  },
];

const Education = () => (
  <div className="sec education-sec" id="education">
    <div className="sec-header">
      <h2>Education &amp; Certifications</h2>
      <span className="underline" />
      <p className="sec-subtitle">Verified professional Nanodegrees and specialized training</p>
    </div>

    <div className="edu-compact-grid">
      {ITEMS.map(({ title, issuer, period, verifyUrl, credentialId }) => (
        <article className="edu-compact-card" key={title}>
          <div className="edu-card-top">
            <div className="edu-icon-badge">
              <HiBadgeCheck className="edu-cert-icon" />
            </div>
            <span className="edu-period-badge">{period}</span>
          </div>

          <h3 className="edu-card-title">{title}</h3>
          <p className="edu-issuer">{issuer}</p>
          <span className="edu-credential-id">Credential ID: {credentialId}</span>

          <div className="edu-card-footer">
            <a
              href={verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="edu-verify-btn"
            >
              Verify Certificate <HiExternalLink className="btn-icon-link" />
            </a>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default Education;

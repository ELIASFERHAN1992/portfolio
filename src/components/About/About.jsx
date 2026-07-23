import "./About.css";
import profile from "../../assets/kiya3.jpg";

const HIGHLIGHTS = [
  { label: "Specialization", value: "Full-Stack Web Development (React, Next.js, Spring Boot, Node.js)" },
  { label: "Experience", value: "3+ years building production web applications" },
  { label: "Industries", value: "Education, Healthcare, Government, Startups" },
  { label: "Philosophy", value: "Clean code, intuitive UX, and solutions that solve real business problems" },
];

const About = () => (
  <div className="about sec" id="about">
    <div className="sec-header">
      <h2>About Me</h2>
      <span className="underline" />
    </div>

    <div className="about-body">
      <div className="about-left">
        <img src={profile} alt="Elias Ferhan" loading="lazy" />
      </div>

      <div className="about-right">
        <p className="about-para">
          I'm a Full-Stack Web Developer specialising in modern JavaScript and Java technologies 
          including React, Next.js, Node.js, Spring Boot, and PostgreSQL.
        </p>
        <p className="about-para">
          I help startups, businesses, and entrepreneurs build fast, scalable, and user-friendly
          web applications. My focus is writing clean, maintainable code and creating intuitive
          user experiences that deliver real business value.
        </p>

        <div className="about-highlights">
          {HIGHLIGHTS.map(({ label, value }) => (
            <div className="about-highlight-row" key={label}>
              <span className="about-highlight-label">{label}</span>
              <span className="about-highlight-value">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="about-stats">
      {[
        { num: "3+",   label: "Projects Completed" },
        { num: "2+",   label: "Years Experience"    },
        { num: "100%", label: "Remote Friendly"     },
      ].map(({ num, label }, i, arr) => (
        <>
          <div className="stat" key={label}>
            <strong>{num}</strong>
            <span>{label}</span>
          </div>
          {i < arr.length - 1 && <div className="stat-divider" key={`d${i}`} />}
        </>
      ))}
    </div>
  </div>
);

export default About;

import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTelegram, FaCopy, FaCheck } from "react-icons/fa";

const CONTACT_DETAILS = [
  { icon: <FaEnvelope />, label: "Email",    text: "eliasferhan@gmail.com", href: "mailto:eliasferhan@gmail.com", copyText: "eliasferhan@gmail.com" },
  { icon: <FaPhone />,    label: "Phone",    text: "+251 967290180",         href: "tel:+251967290180", copyText: "+251967290180" },
  { icon: <FaTelegram />, label: "Telegram", text: "@Painkiller_2312",       href: "https://t.me/Painkiller_2312", copyText: "https://t.me/Painkiller_2312" },
  { icon: <FaMapMarkerAlt />, label: "Location", text: "Addis Ababa, Ethiopia" },
];

const Contact = () => {
  const [status, setStatus] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [copiedItem, setCopiedItem] = React.useState("");

  const handleCopy = (e, textToCopy, label) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(textToCopy);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(""), 2000);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("");

    // 1. Tries to read from your .env file first
    // 2. FALLBACK: Replace "PASTE_YOUR_WEB3FORMS_KEY_HERE" with your actual UUID key if .env fails
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "357e10b9-994e-4d65-b75e-8592e9038029";

    // Safety check to verify a key exists before hitting the endpoint
    if (!accessKey || accessKey === "PASTE_YOUR_WEB3FORMS_KEY_HERE") {
      setStatus("Error: Please provide a valid Web3Forms access key in the code or environment setup.");
      return;
    }

    setLoading(true);
    const formData = new FormData(event.target);

    // Honeypot check for bots
    if (formData.get("website")) {
      setStatus("Spam detected. Submission blocked.");
      setLoading(false);
      return;
    }

    formData.append("access_key", accessKey);
    const json = JSON.stringify(Object.fromEntries(formData));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json,
      }).then((r) => r.json());

      if (res.success) {
        setStatus("Thank you! Your message has been sent.");
        event.target.reset();
      } else {
        setStatus(res.message || "Something went wrong. Please try again later.");
      }
    } catch {
      setStatus("Network error. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="sec contact-sec">
      <div className="sec-header">
        <h2>Get in Touch</h2>
        <span className="underline" />
      </div>

      <div className="contact-body">
        {/* ── Left info ── */}
        <div className="contact-info">
          <h3 className="contact-subhead">Let's talk</h3>
          <p className="contact-blurb">
            I'm currently available for new projects and collaborations.
          </p>
          <div className="contact-details">
            {CONTACT_DETAILS.map(({ icon, label, text, href, copyText }) => (
              <div className="contact-row-wrapper" key={label}>
                {href ? (
                  <a href={href} target="_blank" rel="noreferrer" className="contact-row contact-row--link">
                    <span className="contact-icon">{icon}</span>
                    <span>{text}</span>
                  </a>
                ) : (
                  <div className="contact-row">
                    <span className="contact-icon">{icon}</span>
                    <span>{text}</span>
                  </div>
                )}
                {copyText && (
                  <button
                    type="button"
                    className="contact-copy-btn"
                    onClick={(e) => handleCopy(e, copyText, label)}
                    title={`Copy ${label}`}
                  >
                    {copiedItem === label ? <FaCheck className="copied-icon" /> : <FaCopy />}
                    {copiedItem === label && <span className="copy-toast">Copied!</span>}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Form ── */}
        <form onSubmit={onSubmit} className="contact-form" autoComplete="off">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" placeholder="Enter your name" name="name" autoComplete="off" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email" name="email" autoComplete="off" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Write your message…" rows={5} required />
          </div>

          {/* Honeypot Field */}
          <input type="text" name="website" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

          <button type="submit" disabled={loading}>
            {loading ? "Sending…" : "Send Message"}
          </button>

          {status && (
            <p className={`form-status ${status.includes("Thank you") ? "success" : "error"}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
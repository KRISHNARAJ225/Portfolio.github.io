// components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaHeart, FaEnvelope, FaPhone } from "react-icons/fa";

function Footer() {
  return (
   <footer className="footer">
  <p>© {new Date().getFullYear()} Krishna Raj R • Built with <FaHeart style={{color:'#ff4d4d'}} /> using React</p>
  
  <div className="social-links">
    <a href="https://github.com/KRISHNARAJ225" target="_blank" rel="noopener noreferrer" title="GitHub">
      <FaGithub className="social-icon" />
    </a>
    <a href="https://www.linkedin.com/in/krishna-raj-r-0706b2255" target="_blank" rel="noopener noreferrer" title="LinkedIn">
      <FaLinkedin className="social-icon" />
    </a>
  </div>

  {/* Professional contact details below social icons */}
  <div className="contact-info">
    <p className="contact-label">Get in touch:</p>
    <div className="contact-items">
      <a href="mailto:krishnaraj2004r@gmail.com" className="contact-link">
        <FaEnvelope /> krishnaraj2004r@gmail.com
      </a>
      <a href="tel:+919843688399" className="contact-link">
        <FaPhone /> +91 9843688399
      </a>
    </div>
  </div>
</footer>
  );
}

export default Footer;
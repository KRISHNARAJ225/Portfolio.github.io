// components/Header.jsx
import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaTools, FaBriefcase, FaCertificate, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

function Header() {
  const [visible, setVisible] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(prevScroll > current || current < 100);
      setPrevScroll(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);


  return (
    <header className={`header ${visible ? "" : "hidden"}`}>
      <nav className="navbar">
        <ul>
          <li><a href="#home"><FaHome /> Home</a></li>
          <li><a href="#about"><FaUser /> About</a></li>
          <li><a href="#skills"><FaTools /> Skills</a></li>
          <li><a href="#experience"><FaBriefcase /> Experience</a></li>
          <li><a href="#projects"><FaProjectDiagram /> Projects</a></li>
          <li><a href="#contact"><FaEnvelope /> Contact</a></li>
        </ul>
      </nav>
 {/*  <div className="profile-photo-wrapper">
  <img
    src="/assets/KRISHNARAJ.jpg"
    alt="Krishna Raj R"
    className="profile-photo"
  />
</div> */}
    </header>
  );
  
}


export default Header;
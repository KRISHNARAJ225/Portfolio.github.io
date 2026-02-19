import React from "react";
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="intro">Hi, I am Krishna Raj R</h1>
        <nav className="navbar">
          <ul>
            <li><a href="#home"><FaHome /> Home</a></li>
            <li><a href="#about"><FaUser /> About</a></li>
            <li><a href="#skills"><FaTools /> Skills</a></li>
            <li><a href="#projects"><FaProjectDiagram /> Projects</a></li>
            <li><a href="#contact"><FaEnvelope /> Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
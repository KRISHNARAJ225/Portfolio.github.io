import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaTools, FaBriefcase, FaProjectDiagram, FaEnvelope, FaMoon, FaSun, FaExpand, FaCompress } from "react-icons/fa";

function Header() {
  const [visible, setVisible] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

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
      <div className="logo">KR</div>
      <nav className="navbar">
        <ul>
          <li><a href="#home"><FaHome /> Home</a></li>
          <li><a href="#about"><FaUser /> About</a></li>
          <li><a href="#skills"><FaTools /> Skills</a></li>
          <li><a href="#experience"><FaBriefcase /> Experience</a></li>
          <li><a href="#projects"><FaProjectDiagram /> Projects</a></li>
          <li><a href="#contact"><FaEnvelope /> Contact</a></li>
          <li>
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </li>
          <li>
            <button onClick={toggleFullScreen} className="fullscreen-toggle" aria-label="Toggle Fullscreen">
              {isFullscreen ? <FaCompress /> : <FaExpand />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
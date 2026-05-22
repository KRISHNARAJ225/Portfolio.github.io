// components/Sections.jsx

import React, { useState, useEffect } from 'react';
import {
  FaDownload, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaBootstrap, FaJava, FaGithub, FaExternalLinkAlt, FaEnvelope, FaPhone, FaLayerGroup, FaMicrochip,
} from 'react-icons/fa';
import {
  // ... your existing imports ...
  FaBookOpen, FaNetworkWired, FaUsers, FaCode, FaPuzzlePiece,
  FaBrain, FaPaintBrush, FaLink, FaFileAlt, FaEye
} from 'react-icons/fa';
import SkillsCarousel from './SkillsCarousel';

function Sections() {
  const name = "Krishna Raj R";
  const nameLetters = name.split("");
  const [visibleCount, setVisibleCount] = useState(0);
  const [activeLetterIndex, setActiveLetterIndex] = useState(-1);

  const getNextFocusIndex = (fromIndex) => {
    if (nameLetters.length === 0) return 0;
    let next = (fromIndex + 1) % nameLetters.length;
    let guard = 0;
    while (nameLetters[next] === ' ' && guard < nameLetters.length) {
      next = (next + 1) % nameLetters.length;
      guard += 1;
    }
    return next;
  };

  useEffect(() => {
    if (visibleCount < nameLetters.length) {
      const revealTimer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
        setActiveLetterIndex(visibleCount);
      }, 550);
      return () => clearTimeout(revealTimer);
    }

    const focusTimer = setInterval(() => {
      setActiveLetterIndex((prev) => getNextFocusIndex(prev < 0 ? -1 : prev));
    }, 1000);

    return () => clearInterval(focusTimer);
  }, [visibleCount, nameLetters.length]);

  useEffect(() => {
    const img = document.querySelector('.profile-img');
    if (!img) return;

    const fadeOutIn = () => {
      img.classList.remove('fade-active');
      setTimeout(() => {
        img.classList.add('fade-active');
      }, 1500); // fade duration 1.5s
    };

    // start visible
    img.classList.add('fade-active');

    const interval = setInterval(fadeOutIn, 7000); // every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const [status, setStatus] = useState('');

  return (
    <>

      {/* Hero - Professional style */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm{' '}
            <span className="highlight name-animated" aria-label={name}>
              {nameLetters.map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  className={`name-letter${index < visibleCount ? ' visible' : ''}${index === activeLetterIndex && letter !== ' ' ? ' active' : ''}`}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </span>
          </h1>
          <p className="hero-subtitle">
            Software Developer | MERN Specialist | Java Enthusiast
          </p>
          <p className="hero-description">
            Building scalable, user-focused web applications with clean code and modern technologies
          </p>
          <div className="hero-buttons">
            <a
              href="/assets/resume.pdf"
              download="Krishna_Raj_R_Resume.pdf"
              className="resume-btn"
            >
              <FaDownload /> Download Resume
            </a>
            <a href="#contact" className="contact-btn">
              <FaEnvelope /> Get in Touch
            </a>
          </div>
        </div>
      </section>
      {/* Centered profile photo with fade effect */}
      <div className="centered-profile-photo">
        <img
          src="/assets/KRISHNARAJ.jpg"
          alt="Krishna Raj R"
          className="profile-img fade-active"
        />
      </div>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p style={{ maxWidth: '820px', margin: '0 auto', fontSize: '1.25rem', lineHeight: 1.8, textAlign: 'center' }}>
          I'm Krishna Raj, a passionate <strong >Software Developer</strong> specializing in the <strong>MERN stack</strong> , with a strong focus on building scalable, user-centric web applications that deliver real business value.
          With expertise in React for dynamic front-end experiences, Node.js + Express for robust APIs, and MongoDB for flexible data management, I create end-to-end solutions — from responsive UIs to secure, high-performance backends and also
          enjoy solving real-world problems with clean architecture, performance optimization, and intuitive user interfaces.
          Whether it's building responsive single-page applications.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>My Skills</h2>
        <SkillsCarousel />
      </section>

      {/* Experience */}
      {/* Experience */}
      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="exp-carousel-container">
          <div className="exp-carousel-track">
            {/* Duplicating items for seamless loop */}
            {[1, 2].map((loop) => (
              <React.Fragment key={loop}>
                <div className="exp-card-modern">
                  <div className="exp-header-main">
                    <h3>MERN Stack Developer</h3>
                    <span className="exp-date">2025 – Present</span>
                  </div>
                  <p>Building full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js), developing responsive React components, and building RESTful APIs.</p>
                </div>

                <div className="exp-card-modern">
                  <div className="exp-header-main">
                    <h3>Web Developer (Intern)</h3>
                    <span className="exp-date">2024 – 2025</span>
                  </div>
                  <p>Developed and maintained responsive web applications using the MERN stack, collaborated on RESTful API integration, and contributed to UI enhancements.</p>
                </div>

                <div className="exp-card-modern">
                  <div className="exp-header-main">
                    <h3>Java Developer (Freelance)</h3>
                    <span className="exp-date">2023 – 2024</span>
                  </div>
                  <p>Contributed to the development and maintenance of Java-based applications, writing clean code, debugging issues, and implementing features using Core Java.</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      {/* Certifications - Add this RIGHT AFTER the Experience section closing </section> */}
      <section id="certifications" className="section certifications-section">
        <h2>My Certifications</h2>
        <div className="certifications-grid">

          <div className="cert-card">
            <div className="cert-icon"><FaJava /></div> {/* Icon for learning/course */}
            <div className="cert-info">
              <h3>Java Programming</h3>
              <p className="cert-provider">HackerRank</p>
              <a href="https://www.hackerrank.com/certificates/c3a8d9a75d89" target="_blank" rel="noopener noreferrer" className="view-btn">
                <FaEye /> View Certificate
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-icon"><FaNetworkWired /></div> {/* Icon for IoT */}
            <div className="cert-info">
              <h3>Introduction to Internet Of Things</h3>
              <p className="cert-provider">Nptel</p>
              <a href="/assets/Introduction To Internet Of Things.jpg" target="_blank" rel="noopener noreferrer" className="view-btn">
                <FaEye /> View Certificate
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-icon"><FaUsers /></div> {/* Icon for soft skills */}
            <div className="cert-info">
              <h3>Introduction to Operating Systems</h3>
              <p className="cert-provider">Nptel</p>
              <a href="/assets/Introduction to Operating Systems.pdf" target="_blank" rel="noopener noreferrer" className="view-btn">
                <FaEye /> View Certificate
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-icon"><FaJs /></div> {/* Icon for programming */}
            <div className="cert-info">
              <h3>JavaScript</h3>
              <p className="cert-provider">HackerRank</p>
              <a href="https://www.hackerrank.com/certificates/3b716037921d" target="_blank" rel="noopener noreferrer" className="view-btn">
                <FaEye /> View Certificate
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-icon"><FaReact /></div> {/* Icon for Java */}
            <div className="cert-info">
              <h3>React</h3>
              <p className="cert-provider">HackerRank</p>
              <a href="https://www.hackerrank.com/certificates/2ec77335a119" target="_blank" rel="noopener noreferrer" className="view-btn">
                <FaEye /> View Certificate
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-icon">< FaNodeJs /></div> {/* Icon for problem solving */}
            <div className="cert-info">
              <h3>NodeJS</h3>
              <p className="cert-provider">HackerRank</p>
              <a href="https://www.hackerrank.com/certificates/4d3e00fa0a9d" target="_blank" rel="noopener noreferrer" className="view-btn">
                <FaEye /> View Certificate
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-icon"><FaBrain /></div> {/* Icon for deep learning */}
            <div className="cert-info">
              <h3>AI For Geodata Analysis</h3>
              <p className="cert-provider">ISRO</p>
              <a href="Ai For GeoData Analysis.pdf" target="_blank" rel="noopener noreferrer" className="view-btn">
                <FaEye /> View Certificate
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-icon"><FaLayerGroup /> </div> {/* Icon for UI/UX */}
            <div className="cert-info">
              <h3>FULL STACK Development</h3>
              <p className="cert-provider">CUBIKSOFT TECHNOLOGIES</p>
              <a href="/assets/CUBIKSOFT TECHNOLOGIES.pdf" target="_blank" rel="noopener noreferrer" className="view-btn">
                <FaEye /> View Certificate
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-icon"><FaPuzzlePiece /></div> {/* Icon for blockchain */}
            <div className="cert-info">
              <h3>Web Development</h3>
              <p className="cert-provider">CORIZO</p>
              <a href="/assets/CORIZO.jpg" target="_blank" rel="noopener noreferrer" className="view-btn">
                <FaEye /> View Certificate
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-icon"><FaDatabase /></div> {/* Icon for MongoDB */}
            <div className="cert-info">
              <h3>MongoDB </h3>
              <p className="cert-provider">ICT Academy</p>
              <a href="/assets/ICT Academy.pdf" target="_blank" rel="noopener noreferrer" className="view-btn">
                <FaEye /> View Certificate
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-icon"><FaReact /></div> {/* Icon for document model */}
            <div className="cert-info">
              <h3>ReactJs Developer</h3>
              <p className="cert-provider">CodSoft</p>
              <a href="/assets/CODSOFT.pdf" target="_blank" rel="noopener noreferrer" className="view-btn">
                <FaEye /> View Certificate
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-icon"><FaMicrochip /></div> {/* Icon for SQL */}
            <div className="cert-info">
              <h3>EMBEDDED SYSTEMS AND IOT</h3>
              <p className="cert-provider">TESSOLVE</p>
              <a href="/assets/EMBEDDED SYSTEMS AND IOT.pdf" target="_blank" rel="noopener noreferrer" className="view-btn">
                <FaEye /> View Certificate
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Experience - Timeline */}
      <section id="experience" className="section experience-section">
        <h2>Professional Experience</h2>
        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">OCT 2024 – MAY 2025</div>
              <h3>Full Stack Developer</h3>
              <h4>CUBIKSOFT TECHNOLOGIES</h4>
              <ul>
                <li>Developed and maintained web applications, improving performance and UX</li>
                <li>Collaborated with teams to deliver projects on time</li>
                <li>Contributed innovative solutions supporting company growth</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">Feb 2024 – May 2024</div>
              <h3>ReactJs Developer</h3>
              <h4>CodSoft</h4>
              <ul>
                <li>Built apps using HTML, CSS, JS & modern frameworks</li>
                <li>Improved load times and performance → higher satisfaction</li>
                <li>Streamlined processes with innovative solutions</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">OCT 2023 –  Feb 2024</div>
              <h3>Web Developer</h3>
              <h4>Corizo</h4>
              <ul>
                <li>Developed & optimized Java applications</li>
                <li>Resolved client issues, improved reliability</li>
                <li>Participated in code reviews & process improvements</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-date">JUL 2023 – OCT 2023</div>
            <h3>Java Developer</h3>
            <h4>InternPe</h4>
            <ul>
              <li>Built and maintained Java-based applications using OOP principles.</li>
              <li>Developed backend modules with JDBC and MySQL integration.</li>
              <li>Developed backend applications using Core Java.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      {/* Projects */}
      {/* Projects */}
      {/* Projects */}
      <section id="projects" className="section premium-projects">
        <h2>My Featured Projects</h2>
        <div className="projects-grid-modern">
          {/* Group 1 Carousel */}
          <div className="project-group carousel-group">
            <div className="carousel-track">
              <div className="project-main-card carousel-item">
                <div className="project-icon-bg agro"></div>
                <div className="project-content">
                  <h3>Agro-Shopping</h3>
                  <p>A sleek MERN stack e-commerce platform for farmers and buyers.</p>
                  <div className="project-links">
                    <a href="https://github.com/KRISHNARAJ225/Freshdart.github.io" target="_blank" rel="noopener noreferrer" className="btn-project btn-github btn-view-code"><FaGithub /> View Code</a>
                    <a href="https://github.com/KRISHNARAJ225" className="btn-project btn-demo"><FaExternalLinkAlt /> Demo</a>
                  </div>
                </div>
              </div>
              <div className="project-main-card carousel-item">
                <div className="project-icon-bg finance"></div>
                <div className="project-content">
                  <h3>Expense Tracker</h3>
                  <p>Responsive MERN app for financial insights and budgeting.</p>
                  <div className="project-links">
                    <a href="https://github.com/KRISHNARAJ225" target="_blank" rel="noopener noreferrer" className="btn-project btn-github btn-view-code"><FaGithub /> View Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Group 2 Carousel */}
          <div className="project-group carousel-group">
            <div className="carousel-track track-delay-1">
              <div className="project-main-card carousel-item">
                <div className="project-icon-bg nexus"></div>
                <div className="project-content">
                  <h3>Nexus-Inventory</h3>
                  <p>Full stack management system with real-time analytics.</p>
                  <div className="project-links">
                    <a href="https://github.com/KRISHNARAJ225/Nexus.github.io" target="_blank" rel="noopener noreferrer" className="btn-project btn-github btn-view-code"><FaGithub /> View Code</a>
                    <a href="https://github.com/KRISHNARAJ225" className="btn-project btn-demo"><FaExternalLinkAlt /> Demo</a>
                  </div>
                </div>
              </div>
              <div className="project-main-card carousel-item">
                <div className="project-icon-bg velvet"></div>
                <div className="project-content">
                  <h3>Velvet Venture</h3>
                  <p>Intelligent event planning platform with predictive analytics.</p>
                  <div className="project-links">
                    <a href="https://github.com/KRISHNARAJ225/Velvet_Venue.github.io" target="_blank" rel="noopener noreferrer" className="btn-project btn-github btn-view-code"><FaGithub /> View Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Group 3 Carousel */}
          <div className="project-group carousel-group">
            <div className="carousel-track track-delay-2">
              <div className="project-main-card carousel-item">
                <div className="project-icon-bg flowly"></div>
                <div className="project-content">
                  <h3>Flowly Ticket</h3>
                  <p>Intelligent ticket management system for businesses.</p>
                  <div className="project-links">
                    <a href="https://github.com/KRISHNARAJ225/Flowly.github.io" target="_blank" rel="noopener noreferrer" className="btn-project btn-github btn-view-code"><FaGithub /> View Code</a>
                    <a href="https://github.com/KRISHNARAJ225" className="btn-project btn-demo"><FaExternalLinkAlt /> Demo</a>
                  </div>
                </div>
              </div>
              <div className="project-main-card carousel-item">
                <div className="project-icon-bg lumen"></div>
                <div className="project-content">
                  <h3>Lumen AI Pro</h3>
                  <p>Advanced AI platform for next-gen intelligent solutions.</p>
                  <div className="project-links">
                    <a href="https://github.com/KRISHNARAJ225/Lumen_AI" target="_blank" rel="noopener noreferrer" className="btn-project btn-github btn-view-code"><FaGithub /> View Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Contact */}
      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>

        <div className="contact-welcome">
          <p>Feel free to reach out! I'm always open to new opportunities, collaborations, or just a friendly chat.</p>
          <p className="positive-note">Let's create something amazing together. 😊</p>
        </div>

        <form
          className="contact-form"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          {/* Required hidden field with your Access Key */}
          <input
            type="hidden"
            name="access_key"
            value="ec176b4b-2f5f-4d2f-9fdb-31b9564d9ca7"   // ← PASTE YOUR REAL KEY HERE
          />

          {/* Optional: customize what you receive in email */}
          <input type="hidden" name="subject" value="New Message from Portfolio" />
          <input type="hidden" name="from_name" value="Portfolio Contact Form" />

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Your Full Name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Your Email Address" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Description</label>
            <textarea id="message" name="message" placeholder="Write your message here..." rows="6" required></textarea>
          </div>

          {/* Simple spam protection (invisible field) */}
          <input type="checkbox" name="botcheck" id="botcheck" style={{ display: "none" }} />

          <button type="submit">
            <FaEnvelope /> Send Message
          </button>
        </form>
      </section>
    </>
  );
}



export default Sections;
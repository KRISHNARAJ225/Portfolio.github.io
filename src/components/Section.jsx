import React from 'react';
// Importing specific icons for Skills and Projects
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaDatabase, FaGithub, FaBootstrap, FaExternalLinkAlt } from 'react-icons/fa';

function Section() {
  return (
    <main className="main">
      {/* HOME SECTION */}
      <section id="home" className="section home-section">
        <div className="container">
          <h2>Welcome to My Portfolio</h2>
          <p>I'm a passionate MERN Stack Developer with experience in building full-stack web applications.</p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2>About Me</h2>
          <p>With an engineering background and a deep interest in software development,<br /> I focus on building reliable, high-performance applications using modern technologies.</p>
        </div>
      </section>

      {/* SKILLS SECTION - INTERACTIVE ICONS ADDED */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2>Technical Skills</h2>
          <div className="skills-container">
            
            <div className="skill-card">
              <FaReact size={30} />
              <h3>React.js</h3>
              <p>Hooks, Redux, Context API</p>
            </div>

            <div className="skill-card">
              <FaNodeJs size={30} />
              <h3>Node.js</h3>
              <p>Express, REST APIs</p>
            </div>

            <div className="skill-card">
              <FaDatabase size={30} />
              <h3>MongoDB</h3>
              <p>Mongoose, SQL</p>
            </div>

            <div className="skill-card">
              <FaHtml5 size={30} />
              <h3>HTML5</h3>
              <p>Semantic HTML</p>
            </div>

            <div className="skill-card">
              <FaCss3 size={30} />
              <h3>CSS3</h3>
              <p>Flexbox, Grid, Animations</p>
            </div>
            
             <div className="skill-card">
              <FaJs size={30} />
              <h3>JavaScript</h3>
              <p>ES6+, TypeScript</p>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS SECTION - INTERACTIVE BUTTONS ADDED */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-container">
            
            {/* Project 1 */}
            <div className="project-card">
              <h3>E-commerce Platform</h3>
              <p>Built with MERN stack, featuring user authentication, product catalog, and payment integration.</p>
              <div className="project-links">
                <a href="#" className="btn">View Code <FaGithub /></a>
                <a href="#" className="btn">Live Demo <FaExternalLinkAlt /></a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <h3>Blog Application</h3>
              <p>Full-stack app with CRUD operations, user comments, and real-time updates using Socket.io.</p>
              <div className="project-links">
                <a href="#" className="btn">View Code <FaGithub /></a>
                <a href="#" className="btn">Live Demo <FaExternalLinkAlt /></a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <h3>Task Manager</h3>
              <p>React-based frontend with Node.js backend and MongoDB for data persistence.</p>
              <div className="project-links">
                <a href="#" className="btn">View Code <FaGithub /></a>
                <a href="#" className="btn">Live Demo <FaExternalLinkAlt /></a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2>Contact Me</h2>
          <p>Email: john.doe@example.com</p>
          <p>LinkedIn: linkedin.com/in/johndoe</p>
          <p>GitHub: github.com/johndoe</p>
        </div>
      </section>
    </main>
  );
}

export default Section;
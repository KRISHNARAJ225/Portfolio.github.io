import React, { useState, useEffect, useCallback } from 'react';
import {
  SiC,
  SiOpenjdk,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from 'react-icons/si';
import './SkillsCarousel.css';

const SKILLS = [
  {
    name: 'C',
    tagline: 'Low-level logic, memory management & algorithmic foundations.',
    icon: SiC,
    accent: '#a855f7',
  },
  {
    name: 'Java',
    tagline: 'Object-oriented design for scalable enterprise applications.',
    icon: SiOpenjdk,
    accent: '#f97316',
  },
  {
    name: 'HTML5',
    tagline: 'Semantic structure and accessible, SEO-friendly markup.',
    icon: SiHtml5,
    accent: '#e34f26',
  },
  {
    name: 'CSS3',
    tagline: 'Responsive layouts, animations & modern visual styling.',
    icon: SiCss3,
    accent: '#2563eb',
  },
  {
    name: 'JavaScript (ES6+)',
    tagline: 'Dynamic logic, async flows & interactive web experiences.',
    icon: SiJavascript,
    accent: '#facc15',
  },
  {
    name: 'Bootstrap',
    tagline: 'Rapid UI prototyping with responsive grid systems.',
    icon: SiBootstrap,
    accent: '#7952b3',
  },
  {
    name: 'React.js',
    tagline: 'Component-driven SPAs with hooks & efficient rendering.',
    icon: SiReact,
    accent: '#61dafb',
  },
  {
    name: 'Node.js',
    tagline: 'Server-side JavaScript for APIs and real-time backends.',
    icon: SiNodedotjs,
    accent: '#22c55e',
  },
  {
    name: 'Express.js',
    tagline: 'RESTful routing, middleware & secure API architecture.',
    icon: SiExpress,
    accent: '#ffffff',
  },
  {
    name: 'MongoDB',
    tagline: 'Flexible NoSQL data modeling for modern applications.',
    icon: SiMongodb,
    accent: '#10b981',
  },
];

const ROTATE_MS = 3800;

function getCardPosition(index, activeIndex, total) {
  const offset = (index - activeIndex + total) % total;
  if (offset === 0) return 'active';
  if (offset === 1) return 'next';
  if (offset === total - 1) return 'prev';
  return 'hidden';
}

function SkillsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SKILLS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = setInterval(goNext, ROTATE_MS);
    return () => clearInterval(timer);
  }, [isPaused, goNext]);

  return (
    <div
      className="skills-premium-stage"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="skills-premium-grid" aria-hidden="true" />
      <div className="skills-premium-glow-center" aria-hidden="true" />

      <div className="skills-premium-carousel">
        {SKILLS.map((skill, index) => {
          const position = getCardPosition(index, activeIndex, SKILLS.length);
          const Icon = skill.icon;

          return (
            <article
              key={skill.name}
              className={`skill-premium-card skill-premium-card--${position}`}
              style={{ '--skill-accent': skill.accent }}
              aria-hidden={position === 'hidden'}
            >
              <div className="skill-premium-card-panel">
                <div className="skill-premium-dots-pattern" aria-hidden="true" />
                <div className="skill-premium-icon-glow" aria-hidden="true" />
                <div className="skill-premium-icon-wrap">
                  <Icon className="skill-premium-icon" aria-hidden="true" />
                </div>
              </div>
              <h3 className="skill-premium-title">{skill.name}</h3>
              <p className="skill-premium-tagline">{skill.tagline}</p>
            </article>
          );
        })}
      </div>

      <div className="skills-premium-nav" role="tablist" aria-label="Skill carousel">
        {SKILLS.map((skill, index) => (
          <button
            key={skill.name}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Show ${skill.name}`}
            className={`skills-premium-dot${index === activeIndex ? ' active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillsCarousel;

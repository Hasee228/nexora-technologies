import React from 'react';
import '../styles/tech-stack.css';

const technologies = [
  'React.js',
  'Next.js',
  'Node.js',
  'Python',
  'MongoDB',
  'PostgreSQL',
  'AWS Cloud',
  'Docker'
];

const TechStack = () => {
  return (
    <section className="tech-stack">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technology Stack</span>
          <h2 className="section-title">Powered by Modern Technologies</h2>
          <p className="section-description">
            We utilize robust, industry-standard tools to build secure and high-performance applications.
          </p>
        </div>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div className="tech-badge" key={index}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
import React, { useState } from 'react';
import '../styles/projects.css';

const projectsData = [
  {
    id: 1,
    title: 'PulsePay Global FinTech Platform',
    category: 'FinTech',
    industry: 'Financial Services',
    description: 'A high-speed multi-currency payment gateway processing over 50,000 daily transactions with real-time fraud detection.',
    tags: ['React', 'Node.js', 'Python', 'AWS']
  },
  {
    id: 2,
    title: 'MedFlow Patient Care System',
    category: 'Healthcare',
    industry: 'HealthTech',
    description: 'HIPAA-compliant hospital management dashboard streamlining telemedicine consultations and electronic health records.',
    tags: ['React', 'Python', 'PostgreSQL', 'Docker']
  },
  {
    id: 3,
    title: 'OmniLogistics Supply Chain AI',
    category: 'Logistics',
    industry: 'Supply Chain',
    description: 'Predictive fleet tracking and route optimization web portal reducing fuel overhead by 22% for enterprise fleets.',
    tags: ['Next.js', 'Python', 'MongoDB', 'Docker']
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Featured Portfolio</span>
          <h2 className="section-title">Proven Track Record of Innovation</h2>
          <p className="section-description">
            Explore a selection of our recent enterprise projects built across diverse industries.
          </p>
        </div>

        <div className="project-filters">
          {['All', 'FinTech', 'Healthcare', 'Logistics'].map((cat) => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-preview">
                <div className="project-preview-overlay"></div>
                <div className="project-badge-tag">{project.category}</div>
                <svg className="project-bg-icon" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </div>
              <div className="project-info">
                <span className="project-category">{project.industry}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span className="tag" key={idx}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta-wrap">
          <a href="#contact" className="btn-secondary">View All Projects & Case Studies</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import '../styles/process.css';

const steps = [
  {
    number: '01',
    title: 'Discover & Plan',
    description: 'We analyze your requirements, define project scope, and map out technical architecture.'
  },
  {
    number: '02',
    title: 'Design & Prototype',
    description: 'We create interactive wireframes and UI/UX prototypes to validate user flows and branding.'
  },
  {
    number: '03',
    title: 'Develop & Test',
    description: 'Our engineers write clean, modular code backed by rigorous automated and manual testing.'
  },
  {
    number: '04',
    title: 'Launch & Optimize',
    description: 'We deploy your application securely to production and provide continuous performance monitoring.'
  }
];

const Process = () => {
  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Development Process</span>
          <h2 className="section-title">How We Bring Your Vision to Life</h2>
          <p className="section-description">
            A structured, transparent methodology designed to guarantee on-time delivery and premium quality.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div className="process-step" key={index}>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
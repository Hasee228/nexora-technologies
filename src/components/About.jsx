import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Us</span>
          <h2 className="section-title">Your Trusted Technology Partner</h2>
          <p className="section-description">
            We combine engineering precision with creative vision to deliver robust digital transformation.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <h3>Engineering Excellence for Modern Enterprises</h3>
            <p>
              Nexora Technologies is an elite software development agency dedicated to building practical, high-impact digital solutions. We partner with ambitious startups and established enterprises to turn complex technical challenges into competitive advantages.
            </p>
            <p>
              Our culture revolves around uncompromising quality, transparent collaboration, and scalable architecture. Every line of code we write is optimized for performance, security, and long-term maintainability.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-box">
              <h4>150+</h4>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-box">
              <h4>98%</h4>
              <p>Client Partnerships</p>
            </div>
            <div className="stat-box">
              <h4>8+</h4>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
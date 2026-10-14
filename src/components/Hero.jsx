import React from 'react';
import '../styles/hero.css';
import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-glow"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            <span>Enterprise Software Engineering</span>
          </div>
          <h1 className="hero-title">
            We Build <span className="gradient-text">Digital Solutions</span> That Move Business Forward.
          </h1>
          <p className="hero-description">
            Nexora Technologies crafts scalable custom software, modern high-performance web applications, and intelligent digital products designed to accelerate business growth.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Start a Project</a>
            <a href="#services" className="btn-secondary">Explore Our Services</a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            className="hero-image"
            src={heroImage}
            alt="Layered abstract Nexora technology icon"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
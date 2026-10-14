import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="logo" style={{marginBottom: '12px'}}>
              <div className="logo-icon">N</div>
              <span>Nexora Technologies</span>
            </div>
            <p>
              We build scalable digital solutions, modern websites, and high-performance software products that move businesses forward.
            </p>
            <div className="social-links">
              <a href="#github" className="social-link" aria-label="GitHub">Gh</a>
              <a href="#linkedin" className="social-link" aria-label="LinkedIn">In</a>
              <a href="#twitter" className="social-link" aria-label="Twitter">Tw</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Custom Software</a></li>
              <li><a href="#services">Web Apps</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">Mobile Development</a></li>
              <li><a href="#services">AI Integration</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal & Policy</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#security">Security Overview</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Nexora Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
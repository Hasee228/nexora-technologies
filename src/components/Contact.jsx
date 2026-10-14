import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    details: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.details.trim()) newErrors.details = 'Project details are required.';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', details: '' });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-tag">Get in Touch</span>
            <h3>Have an Idea? Let’s Build Something Great.</h3>
            <p>
              Ready to accelerate your next software project? Get in touch with our engineering team for a consultation and project estimation.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span>✉️</span>
                <span>contact@nexoratech.example</span>
              </div>
              <div className="contact-item">
                <span>📍</span>
                <span>San Francisco, CA / Global Remote</span>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted && (
              <div className="success-message">
                Thank you! Your message has been sent successfully. We will get back to you shortly.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
                {errors.name && <span className="error-msg">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                />
                {errors.email && <span className="error-msg">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Custom Software Development"
                />
                {errors.subject && <span className="error-msg">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="details">Project Details</label>
                <textarea 
                  id="details" 
                  name="details" 
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell us about your goals, timeline, and tech stack requirements..."
                ></textarea>
                {errors.details && <span className="error-msg">{errors.details}</span>}
              </div>

              <button type="submit" className="btn-primary" style={{width: '100%', marginTop: '8px'}}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
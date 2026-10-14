import React from 'react';
import '../styles/testimonials.css';

const testimonialsData = [
  {
    quote: "Nexora Technologies transformed our legacy system into a lightning-fast modern web platform. Their engineering discipline and communication throughout the project were phenomenal.",
    author: "Marcus Vance",
    company: "CTO, PulsePay Global"
  },
  {
    quote: "The team’s expertise in both UI/UX design and scalable backend development allowed us to launch our product two months ahead of schedule. Highly recommended!",
    author: "Sarah Jenkins",
    company: "VP of Product, MedFlow Systems"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-description">
            Read what our partners have to say about working with Nexora Technologies.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div>
                <div className="quote-icon">“</div>
                <p className="testimonial-text">{item.quote}</p>
              </div>
              <div className="testimonial-author">
                <h4>{item.author}</h4>
                <p>{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
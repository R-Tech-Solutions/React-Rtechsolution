import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
         <b>Cutting-Edge Mobile</b> <br />
         <b>Web Development, and POS</b><br />
         <b> Solutions in <span className="sri-lanka-text">Sri Lanka</span></b>
        </h1>
        <p className="hero-description">
          Enhance your online presence with our professional services, offering budget-friendly custom-made apps,
          responsive web designs, and POS systems designed to meet your business requirements.
        </p>
        <button className="get-started-hero">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
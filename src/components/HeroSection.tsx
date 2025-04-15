import React from 'react';
import '../styles/MainContent.css';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-text">
        <h1>VINTAGE TORO</h1>
        <p>Experience timeless style with our signature animated shirt</p>
        <button className="cta-button">Explore Collection</button>
      </div>
    </section>
  );
};

export default HeroSection; 
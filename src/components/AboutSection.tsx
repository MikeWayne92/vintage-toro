import React from 'react';
import '../styles/MainContent.css';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Our Brand</h2>
      <div className="about-content">
        <div className="about-text">
          <p>Vintage Toro represents the perfect blend of classic style and modern innovation. Our signature animated shirt showcases the future of fashion while maintaining timeless appeal.</p>
          <p>Each piece is crafted with attention to detail and a commitment to quality that sets us apart in the world of contemporary fashion.</p>
        </div>
        <video className="about-video" autoPlay loop muted playsInline>
          <source src="/VintageToro.walker.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default AboutSection; 
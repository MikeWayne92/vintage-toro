import React from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-brand">VINTAGE TORO</div>
      <div className="navbar-links">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#collection">Collection</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar; 
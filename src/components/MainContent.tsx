import React, { useState } from 'react';
import '../styles/MainContent.css';
import Modal from './Modal';

const COLLECTION_ITEMS = [
  {
    id: 1,
    name: 'Classic Tee',
    description: 'Our signature design in classic form, featuring premium cotton blend fabric and a timeless cut. The perfect balance of comfort and style for everyday wear.',
    price: '$49.99',
    image: '/VintageToroTee.png'
  },
  {
    id: 2,
    name: 'Premium Black Edition',
    description: 'Luxurious black variant with golden accents, crafted from high-end materials. Each detail is carefully considered to create a sophisticated look.',
    price: '$59.99',
    image: '/VintageToroTee.png'
  },
  {
    id: 3,
    name: 'Limited Gold Series',
    description: 'Exclusive golden edition with premium finish. Part of our limited collection, featuring unique design elements and superior craftsmanship.',
    price: '$79.99',
    image: '/VintageToroTee.png'
  },
  {
    id: 4,
    name: 'Vintage Collection',
    description: 'Classic design with a retro twist, inspired by timeless fashion. A perfect blend of old-school charm and modern comfort.',
    price: '$54.99',
    image: '/VintageToroTee.png'
  }
];

const MainContent: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<typeof COLLECTION_ITEMS[0] | null>(null);

  return (
    <div className="main-content">
      <section id="home" className="hero-section">
        <div className="hero-text">
          <h1>VINTAGE TORO</h1>
          <p>Experience timeless style with our signature animated shirt</p>
          <button className="cta-button">Explore Collection</button>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Our Brand</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Vintage Toro represents the perfect blend of classic style and modern innovation. Our signature animated shirt showcases the future of fashion while maintaining timeless appeal.</p>
            <p>Each piece is crafted with attention to detail and a commitment to quality that sets us apart in the world of contemporary fashion.</p>
          </div>
          <video className="about-video" autoPlay loop muted playsInline>
            <source src={`${process.env.PUBLIC_URL}/VintageToro.walker.mp4`} type="video/mp4" />
          </video>
        </div>
      </section>

      <section id="collection" className="collection-section">
        <h2>Our Collection</h2>
        <div className="collection-grid">
          {COLLECTION_ITEMS.map((item) => (
            <div key={item.id} className="collection-item">
              <div className="image-container">
                <img src={item.image} alt={item.name} />
                <div className="hover-overlay">
                  <button 
                    className="view-details"
                    onClick={() => setSelectedItem(item)}
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <Modal 
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        item={selectedItem || COLLECTION_ITEMS[0]}
      />
    </div>
  );
};

export default MainContent; 
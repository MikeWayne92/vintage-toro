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

const CollectionSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<typeof COLLECTION_ITEMS[0] | null>(null);

  return (
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

      <Modal 
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        item={selectedItem || COLLECTION_ITEMS[0]}
      />
    </section>
  );
};

export default CollectionSection; 
import React, { useEffect, useRef } from 'react';
import '../styles/Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    name: string;
    description: string;
    price: string;
    image: string;
  };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, item }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Focus the modal when it opens
      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        tabIndex={-1}
        ref={modalRef}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>
        <div className="modal-image-container">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="modal-details">
          <h2 id="modal-title">{item.name}</h2>
          <p id="modal-description" className="modal-description">{item.description}</p>
          <span className="modal-price">{item.price}</span>
          <button className="modal-buy-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Modal; 
import React from 'react';
import './Navbar.css'; 
const Hamburger = ({ isOpen, onClick }) => {
  return (
    <div 
      className={`hamburger ${isOpen ? 'is-active' : ''}`} 
      onClick={onClick}
      aria-label="Menú"
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
};

export default Hamburger;
import React from 'react';
import '../../../styles/adminMenu.css'; // Fichier CSS pour les styles

const MenuComponent = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span><i class="fa-solid fa-headset"></i></span>
      </div>
      <div className="navbar-search">
        <input type="text" className='border bg-white text-black' placeholder="Search for resources, services, and documentation" />
      </div>
      <div className="navbar-region">
        <select>
          <option value="canada-southeast">Canada Southeast (Toronto)</option>
          {/* Ajoute d'autres options si nécessaire */}
        </select>
      </div>
      <div className="navbar-icons">
        <span className="icon">🔔</span>
        <span className="icon">👤</span>
        <span className="icon">🌐</span>
      </div>
    </nav>
  );
};

export default MenuComponent;
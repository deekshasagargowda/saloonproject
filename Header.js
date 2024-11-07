// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="salon-name">Salon Name</div>
      <div className="auth-options">
        <span className="login">Login</span>
        <span className="register">Register</span>
      </div>
    </header>
  );
}

export default Header;

import React, { useState } from 'react';

export default function Navbar() {
  return (
    <div className="navbar-container">
      <p className="navbar-name">Brett Tanonaka</p>
      <div className="navbar-base">
        <div className="navbar-sections">
          <p className="navbar-text">Home</p>
          <p className="navbar-text">Projects</p>
          <p className="navbar-text">About</p>
          <p className="navbar-text">Contact</p>
        </div>
      </div>
    </div>
  );
}

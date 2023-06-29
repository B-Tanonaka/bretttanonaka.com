import React, { useState } from 'react';

export default function Navbar() {
  type Toggle = number;
  const [navbarToggle, setNavbarToggle] = useState<Toggle>(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, page: number) => {
    e.preventDefault();
    setNavbarToggle(page);
    console.log(navbarToggle);
  };

  return (
    <div className="navbar-container">
      <p className="navbar-name">Brett Tanonaka</p>
      <div className="navbar-base">
        <div className="navbar-sections">
          <p className="navbar-text" onClick={handleClick}>Home</p>
          <p className="navbar-text" onClick={handleClick}>Projects</p>
          <p className="navbar-text">About</p>
          <p className="navbar-text">Contact</p>
        </div>
        <label className="navbar-switch">
          <input type="navbar-checkbox" />
          <span className="navbar-slider" />
        </label>
      </div>
    </div>
  );
}

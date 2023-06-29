import React, { useState } from 'react';

export default function Navbar() {
  type Toggle = number;
  type Event = React.MouseEvent;
  const [navbarToggle, setNavbarToggle] = useState<Toggle>(0);

  const handleClick = (e: Event, page: number) => {
    e.preventDefault();
    setNavbarToggle(page);
    console.log('navbarToggleInside: ', navbarToggle);
  };

  console.log('navbarToggleOutside: ', navbarToggle);

  return (
    <div className="navbar-container">
      <p className="navbar-name">Brett Tanonaka</p>
      <div className="navbar-base">
        <div className="navbar-sections">
          <input type="button" value="Home" className="navbar-text" onClick={(e: Event) => handleClick(e, 0)} />
          <p className="navbar-text">Projects</p>
          <p className="navbar-text">About</p>
          <p className="navbar-text">Contact</p>
        </div>
        <label className="navbar-switch">
          <span className="navbar-slider" />
        </label>
      </div>
    </div>
  );
}

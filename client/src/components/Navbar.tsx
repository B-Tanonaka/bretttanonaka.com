import React, { useState } from 'react';

export default function Navbar() {
  type Toggle = number;
  type Event = React.MouseEvent;
  const [navbarToggle, setNavbarToggle] = useState<Toggle>(0);

  // const handleClick = (e: Event, page: number) => {
  //   e.preventDefault();
  //   setNavbarToggle(page);
  //   console.log('navbarToggleInside: ', navbarToggle);
  // };

  return (
    <div className="navbar-border">
      <div className="navbar-container">
        <a href="/" className="navbar-name">Brett Tanonaka</a>
        <nav className="navbar-base">
          <ul className="navbar-sections">
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

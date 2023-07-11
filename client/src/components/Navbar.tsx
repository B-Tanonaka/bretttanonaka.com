import React, { useState } from 'react';
import { Link } from 'react-scroll';

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
            <li>
              <Link to="home" smooth offset={50} duration={500}>Home</Link>
            </li>
            <li>
              <Link to="projects" smooth offset={50} duration={500}>Projects</Link>
            </li>
            <li>
              <Link to="about" smooth offset={50} duration={500}>About</Link>
            </li>
            <li>
              <Link to="contact" smooth offset={50} duration={500}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

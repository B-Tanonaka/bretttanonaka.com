import React, { useState } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <div className="navbar-border">
      <div className="navbar-container">
        <a href="/" className="navbar-name">Brett Tanonaka</a>
        <nav className="navbar-base">
          <ul className="navbar-sections">
            <li>
              <Link to="home" smooth spy duration={400}>Home</Link>
            </li>
            <li>
              <Link to="projects" smooth spy duration={400}>Projects</Link>
            </li>
            <li>
              <Link to="about" smooth spy duration={400}>About</Link>
            </li>
            <li>
              <Link to="contact" smooth spy duration={400}>Contact</Link>
            </li>
          </ul>
        </nav>
        <i className="fa-solid fa-bars hamburger" />
      </div>
    </div>
  );
}

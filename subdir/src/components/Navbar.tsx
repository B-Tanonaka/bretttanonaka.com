import { useState } from 'react';
import { Link } from 'react-scroll';
import '../css/Navbar.css';

export default function Navbar() {
  const [hamOpen, setHamOpen] = useState<boolean>(false);
  const handleHamClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setHamOpen(!hamOpen);
  };

  return (
    <div className="navbar-border">
      <div className="navbar-container">
        <a href="/" className="navbar-name">Brett Tanonaka</a>
        <nav
          className="navbar-base"
          style={hamOpen
            ? { transform: 'translateX(-100%)', transition: 'all 0.3s ease-in-out' }
            : { transform: 'rotate(0)' }}
        >
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
        {hamOpen
        && (
          <i
            className="fa-solid fa-xmark navbar-xmark"
            onClick={handleHamClick}
            role="presentation"
          />
        )}
        <i
          className="fa-solid fa-bars navbar-hamburger"
          onClick={handleHamClick}
          role="presentation"
        />
      </div>
    </div>
  );
}

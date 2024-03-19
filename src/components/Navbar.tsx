import { useState, useEffect } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-scroll';
import '../css/Navbar.css';

export default function Navbar() {
  // Declared first to have currentSection be the same as what is selected in Landing
  const { category } = useParams();
  const navigate = useNavigate();

  const [hamOpen, setHamOpen] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<string>(category!);

  const handleHamClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setHamOpen(!hamOpen);
  };

  const handleSectionChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setCurrentSection(e.target.value);
  };

  // Navigates between categories
  useEffect(() => {
    navigate(`/${currentSection}`);
  }, [currentSection, navigate]);

  return (
    <div className="navbar-border">
      <div className="navbar-container">
        <a href="/" className="navbar-name">Brett Tanonaka</a>
        <div className="navbar-right-side">
          <select className="navbar-dropdown" value={currentSection} onChange={handleSectionChange}>
            <option value="engineer">Engineering</option>
            <option value="video">Video Production</option>
          </select>
          <nav
            className="navbar-base"
            style={hamOpen
              ? { transform: 'translateX(-100%)', transition: 'all 0.3s ease-in-out' }
              : { transform: 'translateX(100%)', transition: 'all 0.3s ease-in-out' }}
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
          <FaXmark
            className="navbar-xmark navbar-icon"
            onClick={handleHamClick}
            role="presentation"
            style={hamOpen
              ? { transform: 'translateX(-100%)', transition: 'all 0.3s ease-in-out' }
              : { transform: 'translateX(100%)', transition: 'all 0.3s ease-in-out' }}
          />
          <FaBars
            className="navbar-hamburger navbar-icon"
            onClick={handleHamClick}
            role="presentation"
          />
        </div>
      </div>
    </div>
  );
}

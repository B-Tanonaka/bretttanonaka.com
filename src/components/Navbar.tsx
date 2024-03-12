import {
  useState, Dispatch, SetStateAction,
} from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import '../css/Navbar.css';

export default function Navbar(
  { setActiveCategory }:
  { setActiveCategory: Dispatch<SetStateAction<string>> },
) {
  const [hamOpen, setHamOpen] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<string>('Engineering');
  const handleHamClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setHamOpen(!hamOpen);
  };

  const handleSectionChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    await setCurrentSection(e.target.value);
    await setActiveCategory(currentSection);
  };

  return (
    <div className="navbar-border">
      <div className="navbar-container">
        <a href="/" className="navbar-name">Brett Tanonaka</a>
        <div className="navbar-right-side">
          <select className="navbar-dropdown" value={currentSection} onChange={handleSectionChange}>
            <option value="Engineering">Engineering</option>
            <option value="Video Production">Video Production</option>
          </select>
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
            <FaXmark
              className="navbar-xmark navbar-icon"
              onClick={handleHamClick}
              role="presentation"
            />
          )}
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

import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="home-container" id="home">
      <div className="home-wrapper">
        <p>
          <span className="home-main-text">I am the landing</span>
        </p>
        <Link
          to="/engineer"
          className="project-title"
        >
          Engineering
        </Link>
        <Link
          to="/video"
          className="project-title"
        >
          Video Production
        </Link>
      </div>
    </div>
  );
}

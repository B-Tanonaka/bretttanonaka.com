import { Link } from 'react-router-dom';
import '../css/Landing.css';

export default function Landing() {
  return (
    <div className="landing-container" id="landing">
      <div className="landing-wrapper">
        <h1>Hello, my name is Brett</h1>
        <h2>Please select a path</h2>
        <div className="landing-buttons">
          <button type="button" className="button-engineer">
            <Link
              to="/engineer"
            >
              Engineering
            </Link>
          </button>
          <button type="button" className="button-video">
            <Link
              to="/video"
            >
              Video Production
            </Link>
          </button>
        </div>
      </div>
      <div className="landing-background" />
    </div>
  );
}

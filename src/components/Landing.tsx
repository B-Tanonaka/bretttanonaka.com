import {
  Dispatch, SetStateAction,
} from 'react';
import { Link } from 'react-router-dom';

export default function Landing(
  { setActiveCategory }:
  { setActiveCategory: Dispatch<SetStateAction<string>> },
) {
  return (
    <div className="home-container" id="home">
      <div className="home-wrapper">
        <p>
          <span className="home-main-text">I am the landing</span>
        </p>
        <Link
          to="/engineer"
          className="project-title"
          onClick={() => setActiveCategory('engineer')}
        >
          Engineering
        </Link>
        <Link
          to="/video"
          className="project-title"
          onClick={() => setActiveCategory('video')}
        >
          Video Production
        </Link>
      </div>
    </div>
  );
}

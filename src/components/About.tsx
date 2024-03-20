import {
  FaCheckDouble,
  FaLinkedinIn,
  FaGithub,
  FaVimeoV,
} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
// import Resume from '../assets/resume-bretttanonaka.pdf';
import type { AboutInfo } from '../../interfaces';
import '../css/About.css';

export default function About({ data }: { data: AboutInfo }) {
  const { category } = useParams();
  const validCategory: string = category!;

  return (
    <div className="about" id="about">
      <div className="about-wrapper">
        <h1>About</h1>
        <hr style={{
          border: '0.03em dashed black',
          boxShadow: '5px 2px 5px 0.5px hsl(0deg 0% 0% / 22%)',
        }}
        />
        { data[validCategory]
          && (
            <>
              <p>{data[validCategory].about.part1}</p>
              <br />
              <p>{data[validCategory].about.part2}</p>
              <a href={data[validCategory].resume} target="_blank" rel="noopener noreferrer" className="resume">
                <FaCheckDouble />
                <span> resume</span>
              </a>
            </>
          )}
      </div>
      <div className="about-icon-container">
        <a
          href="https://www.linkedin.com/in/bretttanonaka"
          aria-label="LinkedIn profile"
        >
          <FaLinkedinIn className="about-icon" />
        </a>
        <a
          href="https://github.com/B-Tanonaka"
          aria-label="GitHub profile"
        >
          <FaGithub className="about-icon" />
        </a>
        <a
          href="https://vimeo.com/bretttanonaka"
          aria-label="Vimeo profile"
        >
          <FaVimeoV className="about-icon" />
        </a>
      </div>
    </div>
  );
}

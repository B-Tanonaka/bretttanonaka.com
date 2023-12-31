import React from 'react';
import Resume from '../documents/resume-bretttanonaka.pdf';

export default function About() {
  const description = 'Hello, my name is Brett Tanonaka and I am a full stack developer. Prior to engineering, I was a video producer for almost 10 years. When I was exploring motion design, I discovered After Effects Expressions, a JavaScript based animation language, and saw what is possible with code. Today, I use my experience with design to build end-to-end applications that are user-focused, intuitive, and scalable.';
  return (
    <div className="about" id="about">
      <div className="about-wrapper">
        <h1>About</h1>
        <hr style={{
          border: '0.03em dashed black',
          boxShadow: '5px 2px 5px 0.5px hsl(0deg 0% 0% / 22%)',
        }}
        />
        <p>{description}</p>
        <a href={Resume} target="_blank" rel="noopener noreferrer" className="resume">
          <i className="fa-solid fa-check-double" />
          <span> resume</span>
        </a>
      </div>
      <div className="about-icon-container">
        <a
          href="https://www.linkedin.com/in/bretttanonaka"
          aria-label="LinkedIn profile"
        >
          <i className="fa-brands fa-linkedin-in about-icon" />
        </a>
        <a
          href="https://github.com/B-Tanonaka"
          aria-label="GitHub profile"
        >
          <i className="fa-brands fa-github about-icon" />
        </a>
        <a
          href="https://vimeo.com/bretttanonaka"
          aria-label="Vimeo profile"
        >
          <i className="fa-brands fa-vimeo-v about-icon" />
        </a>
      </div>
    </div>
  );
}

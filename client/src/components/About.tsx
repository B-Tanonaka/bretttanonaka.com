import React from 'react';
import data from '../projectData';

export default function About() {
  return (
    <div className="about">
      <div className="about-wrapper">
        <h1>About</h1>
        <hr style={{
          border: '0.03em dashed black',
          boxShadow: '5px 2px 5px 0.5px hsl(0deg 0% 0% / 22%)',
        }}
        />
        <span>
          <p>{data.description}</p>
        </span>
      </div>
    </div>
  );
}

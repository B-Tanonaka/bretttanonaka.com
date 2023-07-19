import React from 'react';

export default function About() {
  const description = 'Hello, my name is Brett Tanonaka and I am a full stack developer. Prior to engineering, I was a video producer for almost 10 years. When I was exploring motion design, I discovered After Effects Expressions, a JavaScript based animation language and saw what was possible with code. Today, I use my experience with design to build end-to-end applications that are user-focused, intuitive, and scalable.';
  return (
    <div className="about" id="about">
      <div className="about-wrapper">
        <h1>About</h1>
        <hr style={{
          border: '0.03em dashed black',
          boxShadow: '5px 2px 5px 0.5px hsl(0deg 0% 0% / 22%)',
        }}
        />
        <span>
          <p>{description}</p>
        </span>
      </div>
    </div>
  );
}

import React from 'react';
import ProjectDetails from '../ProjectDetails';

export default function Portfolio() {
  return (
    <div className="portfolio-details">
      <ProjectDetails id="portfolio" />
      <h3>Original Design in Figma</h3>
      <div className="image-wrapper">
        <img
          src="https://live.staticflickr.com/65535/53090099930_1882462e7e_b.jpg"
          alt="Home"
          className="large-image"
        />
        <img
          src="https://live.staticflickr.com/65535/53089877694_b4f3066837_b.jpg"
          alt="Projects"
          className="large-image"
        />
        <img
          src="https://live.staticflickr.com/65535/53090186778_bc79570d30_b.jpg"
          alt="Project - individual"
          className="large-image"
        />
        <img
          src="https://live.staticflickr.com/65535/53089126262_2f4b1cf53f_b.jpg"
          alt="About"
          className="large-image"
        />
        <img
          src="https://live.staticflickr.com/65535/53089877699_978d8ef62f_b.jpg"
          alt="Contact"
          className="large-image"
        />
        <img
          src="https://live.staticflickr.com/65535/53090186768_d7aea90608_b.jpg"
          alt="Nav bar"
          className="large-image"
        />
      </div>
    </div>
  );
}

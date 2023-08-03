import React from 'react';
import type { Project } from '../../../../interfaces';
import ProjectDetails from '../ProjectDetails';

export default function Fitbook({ data }: { data: Project }) {
  const renderList = (img: { src: string, alt: string }, key: number) => (
    <img
      src={img.src}
      alt={img.alt}
      key={key}
      className="phone-image"
    />
  );
  return (
    <div className="image-details">
      <ProjectDetails id="fitbook" />
      <h3>Login</h3>
      <div className="image-wrapper-phone login">
        { data.images.login.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
    </div>
  );
}

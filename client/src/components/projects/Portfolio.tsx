import React, { useState, useEffect } from 'react';
import axios from 'axios';
import type { Project } from '../../../../interfaces';
import { BlankProject } from '../../../../interfaces';
import ProjectDetails from '../ProjectDetails';

export default function Portfolio() {
  const [project, setProject] = useState<Project>(BlankProject);
  useEffect(() => {
    axios.get<Project>('/project-data/portfolio')
      .then((response) => { setProject(response.data); })
      .catch((err) => { throw err; });
  }, []);

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
      <ProjectDetails project={project} />
      <h3>Original Design in Figma</h3>
      <div className="image-wrapper">
        { project.images.figma.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
    </div>
  );
}

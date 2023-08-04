import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { Project } from '../../../../interfaces';
import { BlankProject } from '../../../../interfaces';
import ProjectDetails from '../ProjectDetails';

export default function WiredWardrobe() {
  const [project, setProject] = useState<Project>(BlankProject);

  useEffect(() => {
    axios.get<Project>('/project-data/wired-wardrobe')
      .then((response) => { setProject(response.data); })
      .catch((err) => { throw err; });
  }, []);

  const renderList = (img: { src: string, alt: string }, key: number) => (
    <img
      src={img.src}
      alt={img.alt}
      key={key}
      className="image-wrapper"
    />
  );
  return (
    <div className="image-details">
      <ProjectDetails project={project} />
      <h3>Product overview</h3>
      <div className="image-wrapper overview">
        { project.images.overview.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
      <h3>Related Items and My Outfit</h3>
      <div className="image-wrapper related-items">
        { project.images.related.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
      <h3>Questions and Answers</h3>
      <div className="image-wrapper qna">
        { project.images.qna.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
      <h3>Ratings and Reviews</h3>
      <div className="image-wrapper rnr">
        { project.images.rnr.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
    </div>
  );
}

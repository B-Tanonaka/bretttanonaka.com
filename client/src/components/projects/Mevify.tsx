import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { Project } from '../../../../interfaces';
import { BlankProject } from '../../../../interfaces';
import ProjectDetails from '../ProjectDetails';

export default function Mevify() {
  const [project, setProject] = useState<Project>(BlankProject);

  useEffect(() => {
    axios.get<Project>('/project-data/mevify')
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
      <h3>Schema</h3>
      <div className="image-wrapper schema">
        { project.images.schema.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
      <h3>Loader.io post optimization testing</h3>
      <p className="subtitle">Testing 5,000 and 7,500 requests per second on five deployed AWS:EC2 instances</p>
      <div className="image-wrapper loader">
        { project.images.loader.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
      <h3>K6 pre optimization local testing</h3>
      <div className="image-wrapper k6">
        { project.images.k6.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
    </div>
  );
}

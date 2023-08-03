import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { Project } from '../../../../interfaces';
import { BlankProject } from '../../../../interfaces';
import ProjectDetails from '../ProjectDetails';

export default function Fitbook() {
  const [project, setProject] = useState<Project>(BlankProject);

  useEffect(() => {
    axios.get<Project>('/project-data/fitbook')
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
      <h3>Login</h3>
      <div className="image-wrapper-phone login">
        { project.images.login.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
      <h3>Home feed</h3>
      <div className="image-wrapper-phone login">
        { project.images.home.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
    </div>
  );
}

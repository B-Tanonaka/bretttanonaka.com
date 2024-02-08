import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Project, DataProp } from '../../interfaces';

export default function Projects({ data }: DataProp) {
  const [activeImage, setActiveImage] = useState<number>(-1);
  const [showImage, setShowImage] = useState<boolean>(false);
  const renderList = (project: Project, index: number) => (
    <div
      className="project-single"
      key={index}
      onMouseEnter={() => { setShowImage(true); setActiveImage(index); }}
      onMouseLeave={() => { setShowImage(false); }}
    >
      <hr style={{
        border: '0.03em dashed black',
        boxShadow: '5px 2px 5px 0.5px hsl(0deg 0% 0% / 22%)',
      }}
      />
      <Link to={`/projects/${project.ref}`} className="project-title" key={index}>
        <span className="project-text">
          <h2 className="project-name">{project.name}</h2>
          <h4 className="project-role">{project.role.join(' & ')}</h4>
        </span>
      </Link>
    </div>
  );

  const renderImages = (project: Project, index: number) => (
    <img
      className="project-image"
      key={index}
      src={project.img}
      alt="placeholder"
      style={{ opacity: activeImage === index && showImage ? 1 : 0 }}
    />
  );

  return (
    <div className="projects" id="projects">
      <div className="project-left-side">
        <h1>Projects</h1>
        <div className="project-list">
          {data.map((project: Project, index: number) => renderList(project, index))}
        </div>
      </div>
      <div className="image-container">
        {data.map((project: Project, index: number) => renderImages(project, index))}
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import type { Project, DataProp } from '../../../interfaces';

export default function Projects({ data }: DataProp) {
  const renderList = (project: Project, index: number) => (
    <div className="project-single" key={index}>
      <hr style={{
        border: '0.03em dashed black',
        boxShadow: '5px 2px 5px 0.5px hsl(0deg 0% 0% / 22%)',
      }}
      />
      <Link to={`/projects/${project.ref}`} className="project-title" key={index}>
        <span className="project-text">
          <h2>{project.name}</h2>
          <h4 className="project-role">{project.role.join(' & ')}</h4>
        </span>
      </Link>
    </div>
  );

  return (
    <div className="projects" id="projects">
      <div className="project-left-side">
        <h1>Projects</h1>
        <div className="project-list">
          { data.map((project: Project, index: number) => renderList(project, index))}
        </div>
      </div>
      <div className="image-container">
        <img className="project-image" src="https://picsum.photos/200" alt="placeholder" />
      </div>
    </div>
  );
}

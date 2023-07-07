import React from 'react';
import projectData from '../projectData';
import type { Project } from '../../../interfaces';

export default function Projects() {
  const renderList = (project: Project, index: number) => (
    <div className="project-single">
      <hr style={{
        border: '0.03em dashed black',
        boxShadow: '5px 2px 5px 0.5px hsl(0deg 0% 0% / 22%)',
      }}
      />
      <a href={project.ref} className="project-title" key={index}>
        <span className="project-text">
          <p className="project-name">{project.name}</p>
          <p className="project-role">{project.role.join(' & ')}</p>
        </span>
      </a>
    </div>
  );

  return (
    <div className="projects">
      <div>
        <h1>Projects</h1>
        <div className="project-list">
          { projectData.map((project: Project, index: number) => renderList(project, index))}
        </div>
      </div>
      <div className="image-container">
        <img className="project-image" src="https://picsum.photos/200" alt="placeholder" />
      </div>
    </div>
  );
}

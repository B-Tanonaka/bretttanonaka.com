import React from 'react';
import data from '../projectData';
import type { Project } from '../../../interfaces';

export default function Projects() {
  const renderList = (project: Project, index: number) => (
    <div className="project-single" key={index}>
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
    <div className="projects" id="projects">
      <div className="project-left-side">
        <h1>Projects</h1>
        <div className="project-list">
          { data.projectData.map((project, index) => renderList(project, index))}
        </div>
      </div>
      <div className="image-container">
        <img className="project-image" src="https://picsum.photos/200" alt="placeholder" />
      </div>
    </div>
  );
}

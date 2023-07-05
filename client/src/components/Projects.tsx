import React from 'react';
import projectData from '../projectData';

export default function Projects() {
  interface Project {
    name: string;
    role: string[];
    year: number;
    description: string;
    techStack: string[];
    ref: string;
  }
  const renderList = (project: Project, index: number) => (
    <div className="project-single">
      <hr style={{ border: '1px dashed black' }} />
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
      <h1>Projects</h1>
      <div className="project-list">
        { projectData.map((project: Project, index: number) => renderList(project, index))}
      </div>
      <img className="project-image" src="https://picsum.photos/200" alt="placeholder" />
    </div>
  );
}

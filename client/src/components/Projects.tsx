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
    <div>
      <a href={project.ref} className="project-single" key={index}>
        <span>
          <p className="project-name">{project.name}</p>
          <p className="project-role">{project.role.join(' & ')}</p>
        </span>
      </a>
    </div>
  );

  return (
    <div className="project-active">
      <div className="project-list">
        <h1>Projects</h1>
        { projectData.map((project: Project, index: number) => renderList(project, index))}
      </div>
      <img className="project-image" src="https://picsum.photos/200" alt="placeholder" />
    </div>
  );
}

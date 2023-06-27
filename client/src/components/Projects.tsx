import React from 'react';
import projectData from '../projectData';

export default function Projects() {
  interface Project {
    name: string;
    role: string[];
    year: number;
    description: string;
    techStack: string[];
  }
  const renderList = (project: Project, index: number) => (
    <div key={index}>
      <span>
        <p>{project.name}</p>
        <p>{project.role.join(' & ')}</p>
      </span>
    </div>
  );

  return (
    <div>
      { projectData.map((project: Project, index: number) => renderList(project, index))}
    </div>
  );
}

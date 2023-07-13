import React from 'react';
import type { Project, DataProp } from '../../../interfaces';

export default function ProjectDetails({ data }: DataProp) {
  const dividerLine = (
    <hr style={{
      border: '0.03em dashed black',
      boxShadow: '5px 2px 5px 0.5px hsl(0deg 0% 0% / 22%)',
      margin: '7% auto',
    }}
    />
  );
  const renderList = (text: string, index: number) => (
    <div className="list-items" key={index}>{text}</div>
  );

  const renderPage = (project: Project, index: number) => (
    <div className="project-details" key={index}>
      <p>{project.description}</p>
      <div className="right-side">
        <h2>{project.name}</h2>
        <div>{project.year}</div>
        { dividerLine }
        { project.role.map((role, key) => renderList(role, key))}
        { dividerLine }
        { project.techStack.map((framework, key) => renderList(framework, key))}
      </div>
    </div>
  );

  return (
    <div>
      { data.map((project: Project, index: number) => renderPage(project, index)) }
    </div>
  );
}

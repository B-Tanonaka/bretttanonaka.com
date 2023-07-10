import React from 'react';
import type { Project } from '../../../interfaces';
import data from '../projectData';

export default function ProjectDetails() {
  return (
    <div className="project-details">
      <p>{data.projectData[0].description}</p>
      <div className="right-side">
        <h2>{data.projectData[0].name}</h2>
        <p>{data.projectData[0].year}</p>
        <hr style={{
          border: '0.03em dashed black',
          boxShadow: '5px 2px 5px 0.5px hsl(0deg 0% 0% / 22%)',
        }}
        />
        { data.projectData[0].role.map((role: string) => (<div>{role}</div>))}
        <hr style={{
          border: '0.03em dashed black',
          boxShadow: '5px 2px 5px 0.5px hsl(0deg 0% 0% / 22%)',
        }}
        />
        { data.projectData[0].techStack.map((framework: string) => (<div>{framework}</div>))}
      </div>
    </div>
  );
}
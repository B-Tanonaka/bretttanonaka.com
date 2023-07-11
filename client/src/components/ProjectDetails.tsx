import React from 'react';
import type { Project } from '../../../interfaces';
import data from '../projectData';

export default function ProjectDetails() {
  const renderList = (text: string, index: number) => (
    <div className="list-items" key={index}>{text}</div>
  );

  return (
    <div className="project-details">
      <p>{data.projectData[0].description}</p>
      <div className="right-side">
        <h2>{data.projectData[0].name}</h2>
        <div>{data.projectData[0].year}</div>
        <hr style={{
          border: '0.03em dashed black',
          boxShadow: '5px 2px 5px 0.5px hsl(0deg 0% 0% / 22%)',
          margin: '7% auto',
        }}
        />
        { data.projectData[0].role.map((role, index) => renderList(role, index))}
        <hr style={{
          border: '0.03em dashed black',
          boxShadow: '5px 2px 5px 0.5px hsl(0deg 0% 0% / 22%)',
          margin: '7% auto',
        }}
        />
        { data.projectData[0].techStack.map((framework, index) => renderList(framework, index))}
      </div>
    </div>
  );
}

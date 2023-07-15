import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import type { Project } from '../../../interfaces';

export default function ProjectDetails() {
  const [project, setProject] = useState<Project>({
    _id: '',
    name: '',
    role: [],
    year: 0,
    description: '',
    techStack: [],
    ref: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get<Project>(`/project-data/${id}`)
      .then((response) => { setProject(response.data); })
      .catch((err) => { throw err; });
  }, []);

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

  return (
    <>
      <input type="button" value="Back" className="back" onClick={() => { navigate(-1); }} />
      <div className="project-details">
        <p>{project.description}</p>
        <div className="right-side">
          <h2>{project.name}</h2>
          <div className="project-year">{project.year}</div>
          { dividerLine }
          { project.role.map((role: string, key: number) => renderList(role, key))}
          { dividerLine }
          { project.techStack.map((framework: string, key: number) => renderList(framework, key))}
        </div>
      </div>
    </>
  );
}

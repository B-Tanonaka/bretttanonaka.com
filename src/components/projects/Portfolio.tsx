import { useState, useEffect } from 'react';
import fetchProjectData from '../../utils/fetchData';
import type { Project } from '../../../interfaces';
import { BlankProject } from '../../../interfaces';
import ProjectDetails from '../ProjectDetails';

export default function Portfolio() {
  const [project, setProject] = useState<Project>(BlankProject);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProjectData('portfolio');
      setProject(response);
    };
    fetchData();
  }, []);

  const renderList = (img: { src: string, alt: string }, key: number) => (
    <img
      src={img.src}
      alt={img.alt}
      key={key}
      className="image-wrapper"
    />
  );

  return (
    <div className="image-details">
      <ProjectDetails project={project} />
      <h3>Original Design in Figma</h3>
      <div className="image-wrapper">
        { project.images.figma.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import fetchProjectData from '../../utils/fetchData';
import type { Project } from '../../../interfaces';
import { BlankProject } from '../../../interfaces';
import ProjectDetails from '../ProjectDetails';

export default function Mevify() {
  const [project, setProject] = useState<Project>(BlankProject);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProjectData('mevify');
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
      <h3>Schema</h3>
      <div className="image-wrapper schema">
        { project.images.schema.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
      <h3>Loader.io post optimization testing</h3>
      <p className="subtitle">Testing 5,000 and 7,500 requests per second on five deployed AWS:EC2 instances</p>
      <div className="image-wrapper loader">
        { project.images.loader.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
      <h3>K6 pre optimization local testing</h3>
      <div className="image-wrapper k6">
        { project.images.k6.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
    </div>
  );
}

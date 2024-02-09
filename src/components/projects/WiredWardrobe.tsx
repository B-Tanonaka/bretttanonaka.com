import { useEffect, useState } from 'react';
import fetchProjectData from '../../utils/fetchData';
import type { Project } from '../../../interfaces';
import { BlankProject } from '../../../interfaces';
import ProjectDetails from '../ProjectDetails';

export default function WiredWardrobe() {
  const [project, setProject] = useState<Project>(BlankProject);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProjectData('wired-wardrobe');
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
      <h3>Product Overview</h3>
      <div className="image-wrapper overview">
        { project.images.overview.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
      <h3>Related Items and My Outfit</h3>
      <div className="image-wrapper related-items">
        { project.images.related.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
      <h3>Questions and Answers</h3>
      <div className="image-wrapper qna">
        { project.images.qna.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
      <h3>Ratings and Reviews</h3>
      <div className="image-wrapper rnr">
        { project.images.rnr.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
    </div>
  );
}

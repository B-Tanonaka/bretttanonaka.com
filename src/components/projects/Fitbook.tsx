import { useEffect, useState } from 'react';
import fetchProjectData from '../../utils/fetchData';
import type { Project } from '../../../interfaces';
import { BlankProject } from '../../../interfaces';
import ProjectDetails from '../ProjectDetails';

export default function Fitbook() {
  const [project, setProject] = useState<Project>(BlankProject);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProjectData('fitbook');
      setProject(response);
    };
    fetchData();
  }, []);

  const renderList = (img: { src: string, alt: string }, key: number) => (
    <img
      src={img.src}
      alt={img.alt}
      key={key}
      className="phone-image"
    />
  );
  return (
    <div className="image-details">
      <ProjectDetails project={project} />
      <h3>Login</h3>
      <div className="image-wrapper-phone login">
        { project.images.login.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
      <h3>Home feed</h3>
      <div className="image-wrapper-phone home">
        { project.images.home.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
      <h3>Comments</h3>
      <div className="image-wrapper-phone comments">
        { project.images.comments.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
      <h3>Profile</h3>
      <div className="image-wrapper-phone profile">
        { project.images.profile.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
      <h3>Communities</h3>
      <div className="image-wrapper-phone profile">
        { project.images.communities.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
      <h3>Messages</h3>
      <div className="image-wrapper-phone profile">
        { project.images.messages.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
      <h3>Create an event</h3>
      <div className="image-wrapper-phone create-event">
        { project.images.create.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
    </div>
  );
}

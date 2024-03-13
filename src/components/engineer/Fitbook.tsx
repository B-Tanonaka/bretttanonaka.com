import { useEffect } from 'react';
import type { EngineerProject, RenderPhotoList } from '../../../interfaces';

export default function Fitbook(
  { projectData, renderProjectImages } :
  { projectData: EngineerProject | null, renderProjectImages: RenderPhotoList },
) {
  // Scroll to top of page upon load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="image-details-container">
      <h3>Login</h3>
      <div className="image-wrapper-phone login">
        { projectData!.images.login.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key),
        ) }
      </div>
      <h3>Home feed</h3>
      <div className="image-wrapper-phone home">
        { projectData!.images.home.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key),
        ) }
      </div>
      <h3>Comments</h3>
      <div className="image-wrapper-phone comments">
        { projectData!.images.comments.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key),
        ) }
      </div>
      <h3>Profile</h3>
      <div className="image-wrapper-phone profile">
        { projectData!.images.profile.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key),
        ) }
      </div>
      <h3>Communities</h3>
      <div className="image-wrapper-phone profile">
        { projectData!.images.communities.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key),
        ) }
      </div>
      <h3>Messages</h3>
      <div className="image-wrapper-phone profile">
        { projectData!.images.messages.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key),
        ) }
      </div>
      <h3>Create an event</h3>
      <div className="image-wrapper-phone create-event">
        { projectData!.images.create.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key),
        ) }
      </div>
    </div>
  );
}

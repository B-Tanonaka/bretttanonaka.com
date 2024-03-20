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
    <div className="details-container">
      <div className="details-container-h3-solo">
        <h3>{projectData!.text.contribution}</h3>
      </div>
      { /* Communities */ }
      <h1>Communities</h1>
      <div className="portrait-1-text-container fb-communities">
        <img
          className="portrait-1-text-col phone-image"
          src={projectData!.images.communities[0].src}
          alt={projectData!.images.communities[0].alt}
        />
        <h5 className="portrait-1-text-col">
          <span>{projectData!.text.community}</span>
        </h5>
      </div>
      { /* Login */ }
      <h1>Login</h1>
      <div className="image-wrapper-phone fb-login">
        { projectData!.images.login.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'fitbook-image phone-image'),
        ) }
      </div>
      { /* Home feed */ }
      <h1>Home feed</h1>
      <div className="image-wrapper-phone fb-home">
        { projectData!.images.home.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'fitbook-image phone-image'),
        ) }
      </div>
      { /* Comments */ }
      <h1>Comments</h1>
      <div className="image-wrapper-phone fb-comments">
        { projectData!.images.comments.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'fitbook-image phone-image'),
        ) }
      </div>
      <h1>Profile</h1>
      <div className="image-wrapper-phone fb-profile">
        { projectData!.images.profile.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'fitbook-image phone-image'),
        ) }
      </div>
      { /* Messages */ }
      <h1>Messages</h1>
      <div className="image-wrapper-phone fb-messages">
        { projectData!.images.messages.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'fitbook-image phone-image'),
        ) }
      </div>
      { /* Create an event */ }
      <h1>Create an event</h1>
      <div className="image-wrapper-phone fb-create-event">
        { projectData!.images.create.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'fitbook-image phone-image'),
        ) }
      </div>
    </div>
  );
}

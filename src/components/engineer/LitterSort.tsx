import { useEffect } from 'react';
import type { EngineerProject, RenderPhotoList } from '../../../interfaces';

export default function LitterSort(
  { projectData, renderProjectImages } :
  { projectData: EngineerProject | null, renderProjectImages: RenderPhotoList },
) {
  // Scroll to top of page upon load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="details-container">
      <h1>Home</h1>
      <div className="image-wrapper-phone ls-home">
        { projectData!.images.home.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'phone-image'),
        ) }
      </div>
      <h1>Register/Login</h1>
      <div className="image-wrapper-phone ls-login">
        { projectData!.images.login.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'phone-image'),
        ) }
      </div>
      <h1>Camera</h1>
      <div className="image-wrapper-phone ls-camera">
        { projectData!.images.camera.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'phone-image'),
        ) }
      </div>
      <h1>Leaderboard</h1>
      <div className="image-wrapper-phone ls-leaderboard">
        { projectData!.images.leaderboard.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'phone-image'),
        ) }
      </div>
      <h1>Profile</h1>
      <div className="image-wrapper-phone ls-profile">
        { projectData!.images.profile.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'phone-image'),
        ) }
      </div>
      <h1>More information</h1>
      <div className="image-wrapper-phone ls-success">
        { projectData!.images.success.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'phone-image'),
        ) }
      </div>
    </div>
  );
}

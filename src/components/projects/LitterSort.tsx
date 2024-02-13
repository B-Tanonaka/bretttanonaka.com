import type { Project, RenderPhotoList } from '../../../interfaces';

export default function LitterSort(
  { projectData, renderProjectImages } :
  { projectData: Project, renderProjectImages: RenderPhotoList },
) {
  return (
    <div className="image-details-container">
      <h3>Home</h3>
      <div className="image-wrapper-phone ls-home">
        { projectData.images.home.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key),
        ) }
      </div>
      <h3>Register/Login</h3>
      <div className="image-wrapper-phone ls-login">
        { projectData.images.login.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key),
        ) }
      </div>
      <h3>Camera</h3>
      <div className="image-wrapper-phone ls-camera">
        { projectData.images.camera.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key),
        ) }
      </div>
      <h3>Leaderboard</h3>
      <div className="image-wrapper-phone ls-leaderboard">
        { projectData.images.leaderboard.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key),
        ) }
      </div>
      <h3>Profile</h3>
      <div className="image-wrapper-phone ls-profile">
        { projectData.images.profile.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key),
        ) }
      </div>
      <h3>More information</h3>
      <div className="image-wrapper-phone ls-success">
        { projectData.images.success.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key),
        ) }
      </div>
    </div>
  );
}

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
      <div className="details-container-h3-solo">
        <h3>{projectData!.text.blurb.part1}</h3>
      </div>
      <h1>Camera</h1>
      <div className="portrait-3-text-container ls-camera">
        <div className="portrait-3-text-images-container">
          { projectData!.images.camera.map(
            (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'portrait-3-text-image-col phone-image'),
          ) }
        </div>
        <h5 className="portrait-3-text-col">
          <span>{projectData!.text.camera.part1}</span>
          <br />
          <br />
          <span>{projectData!.text.camera.part2}</span>
        </h5>
      </div>
      <h1>More information</h1>
      <div className="portrait-2-text-container ls-success">
        <h5 className="portrait-2-text-col">
          <span>{projectData!.text.camera.part1}</span>
          <br />
          <br />
          <span>{projectData!.text.camera.part2}</span>
        </h5>
        <div className="portrait-2-text-images-container">
          { projectData!.images.success.map(
            (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'portrait-2-text-image-col phone-image'),
          ) }
        </div>
      </div>
      <div className="image-2-container">
        <div className="image-2-text image-2-col">
          <h5>{projectData!.text.blurb.part2}</h5>
        </div>
        <img
          className="image-2-col"
          src={projectData!.images.logo.src}
          alt={projectData!.images.logo.alt}
        />
      </div>
      <h1>Profile</h1>
      <div className="portrait-2-text-container ls-profile">
        { projectData!.images.profile.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'portrait-2-text-col phone-image'),
        ) }
        <h5 className="portrait-2-text-col">
          <span>{projectData!.text.profile}</span>
        </h5>
      </div>
      <h1>Leaderboard</h1>
      <div className="portrait-2-text-container ls-leaderboard">
        <h5 className="portrait-2-text-col">
          <span>{projectData!.text.leaderboard.part1}</span>
        </h5>
        { projectData!.images.leaderboard.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'portrait-2-image-1-col phone-image'),
        ) }
        <h5 className="portrait-2-text-col">
          <span>{projectData!.text.leaderboard.part2}</span>
        </h5>
      </div>
      <h1>Register/Login</h1>
      <div className="portrait-images-only-container ls-login">
        { projectData!.images.login.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'portrait-images-only-col phone-image'),
        ) }
      </div>
      <div className="details-container-h3-solo">
        <h3>{projectData!.text.blurb.part3}</h3>
      </div>
      <h1>Home</h1>
      <div className="portrait-images-only-container ls-home">
        { projectData!.images.home.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'portrait-images-only-col phone-image'),
        ) }
      </div>
    </div>
  );
}

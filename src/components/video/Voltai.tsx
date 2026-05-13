import { useEffect } from 'react';
import VideoWithBlurb from '../VideoWithBlurb';
import type { VideoProject, RenderPhotoList, Image } from '../../../interfaces';

export default function Voltai(
  { projectData, renderProjectImages }:
    { projectData: VideoProject | null, renderProjectImages: RenderPhotoList },
) {
  // Scroll to top of page upon load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="details-container">
      {/* Main video */}
      <h1>What is Voltai</h1>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.booth}
          contClassName=""
          className="single-video"
        />
      </div>
      {/* Booth */}
      <h1>CadenceLIVE 2026 Booth</h1>
      <div className="booth-layout-container">
        <div className="booth-left-col">
          {renderProjectImages(projectData!.images.booth[0], 0, 'booth-left-img')}
        </div>
        <div className="booth-right-col">
          {renderProjectImages(projectData!.images.booth[1], 1, 'booth-right-img')}
          <div className="booth-right-video">
            <VideoWithBlurb
              info={projectData!.videos.boothLine}
              contClassName=""
              className="single-video"
            />
          </div>
        </div>
      </div>
      {/* Interface Design */}
      <h1>Interface Design</h1>
      <div className="image-2-container">
        {renderProjectImages(projectData!.images.parametric, 0, 'image-2-col', [projectData!.images.parametric, projectData!.images.datasheets])}
        {renderProjectImages(projectData!.images.datasheets, 1, 'image-2-col', [projectData!.images.parametric, projectData!.images.datasheets])}
      </div>
      <div className="details-container-h5-solo">
        <h5>{projectData!.images.datasheets.desc}</h5>
      </div>
      {/* Background */}
      <h1>Background Design</h1>
      <div className="image-2-container">
        <h5 className="image-2-col-text">
          <span>{projectData!.images.background.desc1}</span>
          <span>{projectData!.images.background.desc2}</span>
        </h5>
        {renderProjectImages(projectData!.images.background, 0, 'image-2-col')}
      </div>
      <div className="image-3-cover-container">
        {projectData!.images.backgroundInspo.filter((img: Image) => img && typeof img === 'object' && img.src).map(
          (img: Image, key: number) => renderProjectImages(img, key, 'image-3-cover-col', projectData!.images.backgroundInspo),
        )}
      </div>
      {/* Previous titles */}
      <h1>Previous versions of title design</h1>
      <div className="image-3-container">
        {projectData!.images.titles.filter((img: Image) => img && typeof img === 'object' && img.src).map(
          (img: Image, key: number) => renderProjectImages(img, key, 'image-3-col', projectData!.images.titles),
        )}
      </div>
    </div>
  );
}

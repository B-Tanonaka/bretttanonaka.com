import { useEffect } from 'react';
import VideoWithBlurb from '../VideoWithBlurb';
import type { VideoProject, RenderPhotoList } from '../../../interfaces';

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
        <img
          className="image-2-col"
          src={projectData!.images.parametric.src}
          alt={projectData!.images.parametric.alt}
        />
        <img
          className="image-2-col"
          src={projectData!.images.datasheets.src}
          alt={projectData!.images.datasheets.alt}
        />
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
        <img
          className="image-2-col"
          src={projectData!.images.background.src}
          alt={projectData!.images.background.alt}
        />
      </div>
      <div className="image-3-cover-container">
        {projectData!.images.backgroundInspo.map(
          (img, key) => renderProjectImages(img, key, 'image-3-cover-col'),
        )}
      </div>
      {/* Previous titles */}
      <h1>Previous versions of title design</h1>
      <div className="image-3-container">
        {projectData!.images.titles.map(
          (img, key) => renderProjectImages(img, key, 'image-3-col'),
        )}
      </div>
    </div>
  );
}

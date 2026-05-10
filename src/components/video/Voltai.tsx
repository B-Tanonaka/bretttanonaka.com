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
      {/* Background */}
      <div className="image-2-container">
        <h5 className="image-2-col">
          {projectData!.videos.booth.desc}
          <br />
          <br />
          {projectData!.videos.booth.desc2}
        </h5>
        <img
          className="image-2-col"
          src={projectData!.images.background.src}
          alt={projectData!.images.background.alt}
        />
      </div>
      <div className="image-3-container">
        {projectData!.images.backgroundInspo.map(
          (img, key) => renderProjectImages(img, key, 'image-3-col'),
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

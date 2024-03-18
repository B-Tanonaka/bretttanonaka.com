import { useEffect } from 'react';
import VideoWithBlurb from '../VideoWithBlurb';
import type { VideoProject, RenderPhotoList } from '../../../interfaces';

export default function JeffsJacket(
  { projectData, renderProjectImages } :
  { projectData: VideoProject | null, renderProjectImages: RenderPhotoList },
) {
  // Scroll to top of page upon load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="details-container">
      {/* Briaen */}
      <h1>Briaen</h1>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.briaen}
          contClassName=""
          className="single-video-jeffsjacket"
        />
      </div>
      <div className="details-container-h5-solo">
        <h5>{projectData!.videos.briaen.desc}</h5>
      </div>
      {/* Julia */}
      <h1>Julia</h1>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.julia}
          contClassName=""
          className="single-video-jeffsjacket"
        />
      </div>
      <div className="details-container-h5-solo">
        <h5>{projectData!.videos.julia.desc}</h5>
      </div>
      <div className="image-3-container">
        { projectData!.images.julia.map(
          (img, key) => renderProjectImages(img, key, 'image-3-col'),
        )}
      </div>
      <div className="image-3-quarter-container">
        <img
          className="image-3-quarter-col"
          src={projectData!.images.jacket.src}
          alt={projectData!.images.jacket.alt}
        />
        <h5>
          {projectData!.images.jacket.desc}
        </h5>
      </div>
      {/* GME covid */}
      <h1>Anastasia</h1>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.anastasia}
          contClassName=""
          className="single-video-jeffsjacket"
        />
      </div>
      <div className="image-2-container">
        <h5 className="image-2-col">
          {projectData!.images.anastasia.desc}
        </h5>
        <img
          className="image-2-col"
          src={projectData!.images.anastasia.src}
          alt={projectData!.images.anastasia.alt}
        />
      </div>
    </div>
  );
}

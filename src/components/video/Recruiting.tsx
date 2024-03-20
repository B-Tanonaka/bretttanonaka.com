import { useEffect } from 'react';
import VideoWithBlurb from '../VideoWithBlurb';
import type { VideoProject, RenderPhotoList } from '../../../interfaces';

export default function ENJY(
  { projectData, renderProjectImages } :
  { projectData: VideoProject | null, renderProjectImages: RenderPhotoList },
) {
  // Scroll to top of page upon load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="details-container">
      {/* Main video */}
      <h1>Engineering at Enjoy</h1>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.engineering}
          contClassName=""
          className="single-video"
        />
      </div>
      {/* What brings you joy images */}
      <div className="image-2-container">
        <img
          className="image-2-col-wide"
          src={projectData!.images.quotes[0].src}
          alt={projectData!.images.quotes[0].alt}
        />
        <div className="image-2-col-text-wrapper">
          <img
            className="image-2-col-text"
            src={projectData!.images.quotes[1].src}
            alt={projectData!.images.quotes[1].alt}
          />
          <h5 className="recruiting-quote-text">{projectData!.images.quotes[1].desc}</h5>
        </div>
      </div>
      {/* Go Get Great campaign */}
      <h1>Go Get Great</h1>
      <div className="image-2-container">
        { projectData!.images.gifs.map(
          (img, key) => renderProjectImages(img, key, 'image-2-col recruiting-gifs'),
        )}
      </div>
      <div className="video-2-container">
        <h5>
          {projectData!.images.gifs[1].desc}
        </h5>
        <VideoWithBlurb
          info={projectData!.videos.premiumdrive}
          contClassName="video-2-col video-2-col-right"
          className="single-video"
        />
      </div>
    </div>
  );
}

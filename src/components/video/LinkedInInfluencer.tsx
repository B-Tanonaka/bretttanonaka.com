import { useEffect } from 'react';
import VideoWithBlurb from '../VideoWithBlurb';
import Carousel from '../Carousel';
import type { VideoProject, RenderPhotoList } from '../../../interfaces';
import '../../css/ProjectImages.css';

export default function LinkedInInfluencer(
  { projectData, renderProjectImages } :
  { projectData: VideoProject | null, renderProjectImages: RenderPhotoList },
) {
  // Scroll to top of page upon load
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="details-container">
      {/* Main video */}
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.kindness}
          className=""
        />
      </div>
      {/* LinkedIn posts */}
      <div className="image-3-container">
        { projectData!.images.linkedin.map(
          (img, key) => renderProjectImages(img, key, 'image-3-col'),
        )}
      </div>
      {/* Main video */}
      <div className="video-2-container">
        <VideoWithBlurb
          info={projectData!.videos.future}
          className="video-2-col video-2-col-left"
        />
        <VideoWithBlurb
          info={projectData!.videos.stanford}
          className="video-2-col video-2-col-right"
        />
      </div>
      {/* Company image carousel */}
      <div className="carousel-wrapper carousel-li-companies">
        <Carousel images={projectData!.images.company} />
      </div>
      <div className="image-2-container">
        <img
          className="image-2-col"
          src={projectData!.images.gifs[0].src}
          alt={projectData!.images.gifs[0].alt}
        />
        <img
          className="image-2-col"
          src={projectData!.images.gifs[1].src}
          alt={projectData!.images.gifs[1].alt}
        />
      </div>
    </div>
  );
}

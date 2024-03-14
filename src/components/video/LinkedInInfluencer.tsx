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
  console.log('images: ', projectData!.images.company);

  return (
    <div className="details-container">
      {/* Main video */}
      <div className="one-video-container">
        <VideoWithBlurb
          info={projectData!.videos.kindness}
          className=""
        />
      </div>
      {/* LinkedIn posts */}
      <div className="li-image-posts">
        { projectData!.images.linkedin.map(
          (img, key) => renderProjectImages(img, key, 'li-post'),
        )}
      </div>
      {/* Main video */}
      <div className="two-video-container">
        <VideoWithBlurb
          info={projectData!.videos.future}
          className="video-2-col"
        />
        <VideoWithBlurb
          info={projectData!.videos.stanford}
          className="video-2-col"
        />
      </div>
      <div className="carousel-wrapper carousel-li-companies">
        <Carousel images={projectData!.images.company} />
      </div>
    </div>
  );
}

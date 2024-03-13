import { useEffect } from 'react';
import ReactPlayer from 'react-player/lazy'
import type { VideoProject, RenderPhotoList } from '../../../interfaces';
import '../../css/ProjectVideos.css';
import '../../css/ProjectImages.css';

export default function LinkedInInfluencer(
  { projectData, renderProjectImages } :
  { projectData: VideoProject | null, renderProjectImages: RenderPhotoList },
) {
  // Scroll to top of page upon load
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const config = {
    vimeo: {
      playerOptions: {
        autoplay: false,
        loop: false,
        controls: true,
      },
    },
  };

  return (
    <div className="details-container">
      <div className="full-video">
        <ReactPlayer
          url={projectData!.videos.kindness.link}
          width="100%"
          height="100%"
          config={config}
        />
        <h4>Episode 4 - Kindness is a Choice | Role: Editor & Producer</h4>
      </div>
      <div className="li-image-posts">
        { projectData!.images.linkedin.map(
          (img, key) => renderProjectImages(img, key, 'li-post'),
        )}
      </div>
    </div>
  );
}

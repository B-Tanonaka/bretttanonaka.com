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
      {/* Main video */}
      <div className="video-container">
        <div className="single-video">
          <ReactPlayer
            url={projectData!.videos.kindness.link}
            className="react-player"
            width="100%"
            height="100%"
            config={config}
          />
        </div>
        <h4>{projectData!.videos.kindness.blurb}</h4>
      </div>
      {/* LinkedIn posts */}
      <div className="li-image-posts">
        { projectData!.images.linkedin.map(
          (img, key) => renderProjectImages(img, key, 'li-post'),
        )}
      </div>
      {/* Main video */}
      <div className="two-video">
        <div className="video-with-blurb">
          <div className="single-video">
            <ReactPlayer
              url={projectData!.videos.future.link}
              className="react-player"
              width="100%"
              height="100%"
              config={config}
            />
          </div>
          <h4>{projectData!.videos.future.blurb}</h4>
        </div>
        <div className="video-with-blurb">
          <div className="single-video stanford-video">
            <ReactPlayer
              url={projectData!.videos.stanford.link}
              className="react-player"
              width="100%"
              height="100%"
              config={config}
            />
          </div>
          <h4>{projectData!.videos.stanford.blurb}</h4>
        </div>
      </div>
    </div>
  );
}

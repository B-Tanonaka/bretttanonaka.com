import { useEffect } from 'react';
import VideoWithBlurb from '../VideoWithBlurb';
import type { VideoProject, RenderPhotoList } from '../../../interfaces';

export default function GoogleDeepmind(
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
      <h1>Launch Video</h1>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.launch}
          contClassName=""
          className="single-video"
        />
      </div>
      {/* What brings you joy images */}
      <div className="image-2-container">
        <img
          className="image-2-col-wide"
          src={projectData!.images.interface.src}
          alt={projectData!.images.interface.alt}
        />
        <div className="image-2-col-text-wrapper">
          <img
            className="image-2-col-text"
            src={projectData!.images.speaker.src}
            alt={projectData!.images.speaker.alt}
          />
          <h5 className="recruiting-quote-text">{projectData!.images.interface.desc}</h5>
        </div>
      </div>
      {/* Agent Skills */}
      <h1>Agent Skills</h1>
      <div className="video-2-container motion-graphics-million-container">
        <h5>
          {projectData!.videos.skills.desc}
        </h5>
        <VideoWithBlurb
          info={projectData!.videos.skills}
          contClassName="video-2-col video-2-col-right"
          className="single-video"
        />
      </div>
    </div>
  );
}

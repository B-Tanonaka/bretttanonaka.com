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
    </div>
  );
}

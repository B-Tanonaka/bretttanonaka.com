import { useEffect } from 'react';
import VideoWithBlurb from '../VideoWithBlurb';
import type { VideoProject } from '../../../interfaces';

export default function DemoReel(
  { projectData } :
  { projectData: VideoProject | null },
) {
  // Scroll to top of page upon load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="details-container">
      {/* Main video */}
      <h1>Demo Reels</h1>
      <div className="video-2-container">
        <VideoWithBlurb
          info={projectData!.videos.editing_reel}
          contClassName="video-2-col video-2-col-left"
          className="single-video"
        />
        <VideoWithBlurb
          info={projectData!.videos.motion_reel}
          contClassName="video-2-col video-2-col-right"
          className="single-video"
        />
      </div>
    </div>
  );
}

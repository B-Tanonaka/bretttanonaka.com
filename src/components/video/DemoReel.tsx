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
      <h1>Demo Reel</h1>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.reel}
          contClassName=""
          className="single-video"
        />
      </div>
    </div>
  );
}

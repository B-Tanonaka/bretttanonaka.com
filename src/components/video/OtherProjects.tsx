import { useEffect } from 'react';
import VideoWithBlurb from '../VideoWithBlurb';
import type { VideoProject } from '../../../interfaces';

export default function OtherProjects(
  { projectData } :
  { projectData: VideoProject | null },
) {
  // Scroll to top of page upon load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="details-container">
      <div className="details-container-small">
        {/* In the Groove */}
        <h1>Dance Production: In the Groove</h1>
        <div className="video-1-container-small">
          <VideoWithBlurb
            info={projectData!.videos.groove}
            contClassName=""
            className="single-video"
          />
        </div>
        {/* School of Motion */}
        <h1>Animation: School of Motion</h1>
        <div className="video-1-container-small">
          <VideoWithBlurb
            info={projectData!.videos.sculptor}
            contClassName=""
            className="single-video"
          />
        </div>
        <div className="video-1-container-small">
          <VideoWithBlurb
            info={projectData!.videos.ministryofeye}
            contClassName=""
            className="single-video"
          />
        </div>
        {/* Tang Center Berkeley */}
        <h1>PSA: Tang Center Berkeley</h1>
        <div className="video-1-container-small">
          <VideoWithBlurb
            info={projectData!.videos.tang}
            contClassName=""
            className="single-video"
          />
        </div>
        {/* Identity X */}
        <h1>Dance Production: Identity X</h1>
        <div className="video-1-container-small">
          <VideoWithBlurb
            info={projectData!.videos.identityx}
            contClassName=""
            className="single-video"
          />
        </div>
        {/* Hyundai */}
        <h1>Commercial: Hyundai</h1>
        <div className="video-1-container-small">
          <VideoWithBlurb
            info={projectData!.videos.hyundai}
            contClassName=""
            className="single-video"
          />
        </div>
        {/* Keystone XL Pipeline */}
        <h1>Documentary: Keystone XL Pipeline</h1>
        <div className="video-1-container-small">
          <VideoWithBlurb
            info={projectData!.videos.keystone}
            contClassName=""
            className="single-video"
          />
        </div>
        {/* My Body Issue */}
        <h1>Short Story: My Body Issue</h1>
        <div className="video-1-container-small">
          <VideoWithBlurb
            info={projectData!.videos.body}
            contClassName=""
            className="single-video"
          />
        </div>
        {/* Chiune Sugihara */}
        <h1>Documentary: Chiune Sugihara</h1>
        <div className="video-1-container-small">
          <VideoWithBlurb
            info={projectData!.videos.sugihara}
            contClassName=""
            className="single-video-sugihara"
          />
        </div>
      </div>
    </div>
  );
}

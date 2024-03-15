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
      <h1>Technology that Powers the Mobile Store</h1>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.visit}
          contClassName=""
          className="single-video"
        />
      </div>
      <div className="image-2-container">
        { projectData!.images.experience.slice(0, 2).map(
          (img, key) => renderProjectImages(img, key, 'image-2-col'),
        )}
      </div>
      <div className="image-3-col-2-row-container">
        { projectData!.images.experience.slice(2).map(
          (img, key) => renderProjectImages(img, key, 'image-3-col-2-row'),
        )}
      </div>
      {/* Nasdaq tower images */}
      <h1>Nasdaq Tower</h1>
      <div className="nasdaq-image-container">
        <img
          className="nasdaq-framework"
          src={projectData!.images.nasdaq[1].src}
          alt={projectData!.images.nasdaq[1].alt}
        />
        <div className="nasdaq-image-wrapper">
          <h2>{projectData!.images.nasdaq[0].desc}</h2>
          <img
            className="nasdaq-board"
            src={projectData!.images.nasdaq[0].src}
            alt={projectData!.images.nasdaq[0].alt}
          />
        </div>
      </div>
      {/* Nasdaq tower video */}
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.nasdaq}
          contClassName=""
          className="single-video"
        />
      </div>
      {/* Nasdaq marquee video */}
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.marquee}
          contClassName=""
          className="single-video-wide"
        />
      </div>
      {/* The Enjoy Experience video */}
      <h1>The Enjoy Experience</h1>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.experience}
          contClassName=""
          className="single-video"
        />
      </div>
      {/* Customer reviews video */}
      <h1>Customer Reviews</h1>
      <div className="video-2-container">
        <h2>
          {projectData!.videos.reviews.desc}
        </h2>
        <VideoWithBlurb
          info={projectData!.videos.reviews}
          contClassName="video-2-col video-2-col-right"
          className="single-video"
        />
      </div>
    </div>
  );
}

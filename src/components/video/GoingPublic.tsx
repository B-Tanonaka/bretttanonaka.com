import { useEffect } from 'react';
import VideoWithBlurb from '../VideoWithBlurb';
import type { VideoProject, RenderPhotoList } from '../../../interfaces';
import '../../css/ProjectImages.css';

export default function GoingPublic(
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
        <h1>Technology that Powers the Mobile Store</h1>
        <VideoWithBlurb
          info={projectData!.videos.visit}
          className=""
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
          className=""
        />
      </div>
      {/* Nasdaq marquee video */}
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.marquee}
          className=""
        />
      </div>
      {/* The Enjoy Experience video */}
      <div className="video-1-container">
        <h1>The Enjoy Experience </h1>
        <VideoWithBlurb
          info={projectData!.videos.experience}
          className=""
        />
      </div>
      {/* Customer reviews video */}
      <div className="image-3-quarter-container">
        <h2>
          {projectData!.videos.reviews.desc}
        </h2>
      </div>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.reviews}
          className=""
        />
      </div>
    </div>
  );
}

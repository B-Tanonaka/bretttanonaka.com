import { useEffect } from 'react';
import VideoWithBlurb from '../VideoWithBlurb';
import type { VideoProject, RenderPhotoList } from '../../../interfaces';

export default function InternalComms(
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
      <h1>Good Morning Enjoy</h1>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.gmefull}
          contClassName=""
          className="single-video"
        />
      </div>
      <h5>{projectData!.images.gme[0].desc}</h5>
      <div className="image-10-container">
        { projectData!.images.gme.map(
          (img, key) => renderProjectImages(img, key, 'image-10-col'),
        )}
      </div>
      {/* GME short clips */}
      <div className="video-2-container">
        <VideoWithBlurb
          info={projectData!.videos.gmehosts}
          contClassName="video-2-col video-2-col-left"
          className="single-video"
        />
        <VideoWithBlurb
          info={projectData!.videos.gmequote}
          contClassName="video-2-col video-2-col-right"
          className="single-video"
        />
      </div>
      {/* GME covid */}
      <div className="video-2-text-container">
        <VideoWithBlurb
          info={projectData!.videos.gmedigital}
          contClassName="video-2-text-col"
          className="single-video"
        />
      </div>
      <img
        className="video-2-text-col"
        src={projectData!.images.covid.src}
        alt={projectData!.images.covid.alt}
      />
      <h5>
        {projectData!.images.covid.desc}
      </h5>
      {/* The Enjoy Way */}
      <h1>The Enjoy Way</h1>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.enjoyway}
          contClassName=""
          className="single-video"
        />
      </div>
      <div className="video-2-container">
        <h5>
          {projectData!.images.enjoyway[0].desc}
        </h5>
        <img
          className="video-2-text-col"
          src={projectData!.images.enjoyway[0].src}
          alt={projectData!.images.enjoyway[0].alt}
        />
      </div>
      <div className="image-3-container">
        { projectData!.images.enjoyway.slice(1).map(
          (img, key) => renderProjectImages(img, key, 'image-3-col'),
        )}
      </div>
      {/* The Why */}
      <h1>The Why</h1>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.thewhy}
          contClassName=""
          className="single-video"
        />
      </div>
      <h5>{projectData!.videos.thewhy.desc}</h5>
    </div>
  );
}

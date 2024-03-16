import { useEffect } from 'react';
import VideoWithBlurb from '../VideoWithBlurb';
import Carousel from '../Carousel';
import type { VideoProject, RenderPhotoList } from '../../../interfaces';

export default function MotionGraphics(
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
      <h1>Technology that Powers Enjoy</h1>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.store}
          contClassName=""
          className="single-video"
        />
      </div>
      <div className="image-2-container">
        <div className="image-2-text image-2-col">
          <span>
            <h2>{projectData!.images.truckMap.title}</h2>
          </span>
          <h5>{projectData!.images.truckMap.desc}</h5>
        </div>
        <img
          className="image-2-col"
          src={projectData!.images.truckMap.src}
          alt={projectData!.images.truckMap.alt}
        />
      </div>
      <div className="image-4-container">
        { projectData!.images.delivery.map(
          (img, key) => renderProjectImages(img, key, 'image-4-col'),
        )}
      </div>
      {/* One million visits */}
      <h1>One Million Visits</h1>
      <div className="video-2-container">
        <h5>
          {projectData!.videos.millionVisits.desc}
        </h5>
        <VideoWithBlurb
          info={projectData!.videos.millionVisits}
          contClassName="video-2-col video-2-col-right"
          className="single-video"
        />
      </div>
      {/* Social Media */}
      <h1>Social Media</h1>
      <div className="video-1-portrait-carousel-text-container">
        <VideoWithBlurb
          info={projectData!.videos.city}
          contClassName="video-1-portrait-carousel-text-left"
          className="single-video-portrait"
        />
        <div className="video-1-portrait-carousel-text-right">
          <div className="carousel-wrapper carousel-motion-graphics">
            <Carousel
              images={projectData!.images.social}
              type="center-portrait"
            />
          </div>
          <h5>
            {projectData!.videos.city.desc}
          </h5>
        </div>
      </div>
      <div className="portrait-2-text-container">
        <h5 className="portrait-2-text-col">{projectData!.videos.speaker.desc}</h5>
        <VideoWithBlurb
          info={projectData!.videos.speaker}
          contClassName=""
          className="single-video-portrait-short"
        />
        <img
          className="portrait-2-text"
          src={projectData!.images.sharon.src}
          alt={projectData!.images.sharon.alt}
        />
      </div>
      {/* Enjoy.com graphics */}
      <h1>Enjoy.com Graphics</h1>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.website}
          contClassName=""
          className="single-video-enjoy-website"
        />
      </div>
    </div>
  );
}

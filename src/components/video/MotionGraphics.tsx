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
          <h2>{projectData!.images.truckMap.title}</h2>
          <h5>{projectData!.images.truckMap.desc}</h5>
        </div>
        {renderProjectImages(projectData!.images.truckMap, 0, 'image-2-col')}
      </div>
      <div className="image-4-container">
        { projectData!.images.delivery.map(
          (img, key) => renderProjectImages(img, key, 'image-4-col', projectData!.images.delivery),
        )}
      </div>
      {/* One million visits */}
      <h1>One Million Visits</h1>
      <div className="video-2-container motion-graphics-million-container">
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
              renderProjectImages={renderProjectImages}
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
          contClassName="portrait-2-text-col"
          className="single-video-portrait-short"
        />
        {renderProjectImages(projectData!.images.sharon, 0, 'portrait-2-text-col portrait-2-text-sharon')}
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

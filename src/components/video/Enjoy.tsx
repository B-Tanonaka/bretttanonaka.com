import { useEffect } from 'react';
import VideoWithBlurb from '../VideoWithBlurb';
import type { VideoProject, RenderPhotoList, Image } from '../../../interfaces';
import Carousel from '../Carousel';

export default function Enjoy(
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
      <h1>Technology that Powers the Mobile Store</h1>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.motiongraphics.store}
          contClassName=""
          className="single-video"
        />
      </div>
      <div className="image-2-container">
        <div className="image-2-text image-2-col">
          <h2>{projectData!.images.motiongraphics.truckMap.title}</h2>
          <h5>{projectData!.images.motiongraphics.truckMap.desc}</h5>
        </div>
        <img
          className="image-2-col"
          src={projectData!.images.motiongraphics.truckMap.src}
          alt={projectData!.images.motiongraphics.truckMap.alt}
        />
      </div>
      <div className="image-4-container">
        {projectData!.images.motiongraphics.delivery.map(
          (img: Image, key: number) => renderProjectImages(img, key, 'image-4-col'),
        )}
      </div>
      {/* LinkedIn Influencer */}
      <h1>LinkedIn Influencer</h1>
      <div className="video-2-container">
        <h5 className="image-2-col-text">
          <span>{projectData!.videos.linkedin.kindness.desc1}</span>
          <span>{projectData!.videos.linkedin.kindness.desc2}</span>
        </h5>
        <VideoWithBlurb
          info={projectData!.videos.linkedin.kindness}
          contClassName="video-2-col video-2-col-right"
          className="single-video"
        />
      </div>
      {/* LinkedIn posts */}
      <div className="image-3-container">
        {projectData!.images.linkedin.profile.map(
          (img: Image, key: number) => renderProjectImages(img, key, 'image-3-col'),
        )}
      </div>
      {/* Two episodes */}
      <div className="video-2-container">
        <VideoWithBlurb
          info={projectData!.videos.linkedin.future}
          contClassName="video-2-col video-2-col-left"
          className="single-video"
        />
        <VideoWithBlurb
          info={projectData!.videos.linkedin.stanford}
          contClassName="video-2-col video-2-col-right"
          className="single-video"
        />
      </div>
      {/* Recruiting */}
      <h1>Recruiting</h1>
      <div className="video-1-portrait-carousel-text-container">
        <VideoWithBlurb
          info={projectData!.videos.motiongraphics.city}
          contClassName="video-1-portrait-carousel-text-left"
          className="single-video-portrait"
        />
        <div className="video-1-portrait-carousel-text-right">
          <div className="carousel-wrapper carousel-motion-graphics">
            <Carousel
              images={projectData!.images.motiongraphics.social}
              type="center-portrait"
            />
          </div>
          <h5>
            {projectData!.videos.motiongraphics.city.desc}
          </h5>
        </div>
      </div>
    </div>
  );
}

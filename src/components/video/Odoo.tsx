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
      {/* Lunch App */}
      <h1>Lunch App</h1>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.lunch}
          contClassName=""
          className="single-video"
        />
      </div>
      <div className="details-container-h5-solo">
        <h5>
          <span>{projectData!.videos.lunch.desc1}</span>
        </h5>
      </div>
      <div className="image-3-container">
        {projectData!.images.lunch.gifs.map(
          (img: Image, key: number) => renderProjectImages(img, key, 'image-3-col'),
        )}
      </div>
      <div className="image-2-container">
        <h5 className="image-2-col">
          {projectData!.videos.lunch.desc2}
        </h5>
        <img
          className="image-2-col"
          src={projectData!.images.lunch.mood.src}
          alt={projectData!.images.lunch.mood.alt}
        />
      </div>
      {/* Appointments App */}
      <h1>Appointments App</h1>
      <div className="video-2-container">
        <VideoWithBlurb
          info={projectData!.videos.appointments}
          contClassName="video-2-col video-2-col-right"
          className="single-video"
        />
        <h5 className="image-2-col-text">
          <span>{projectData!.videos.appointments.desc1}</span>
          <span>{projectData!.videos.appointments.desc2}</span>
        </h5>
      </div>
      <div className="image-3-container">
        {projectData!.images.appointments.gifs.map(
          (img: Image, key: number) => renderProjectImages(img, key, 'image-3-col'),
        )}
      </div>
      {/* Customer Stories */}
      <h1>Customer Stories</h1>
      <div className="video-2-container">
        <VideoWithBlurb
          info={projectData!.videos.becker}
          contClassName="video-2-col video-2-col-left"
          className="single-video"
        />
        <VideoWithBlurb
          info={projectData!.videos.vending}
          contClassName="video-2-col video-2-col-right"
          className="single-video"
        />
      </div>
      <div className="details-container-h5-solo">
        <h5>{projectData!.videos.vending.desc}</h5>
      </div>
    </div>
  );
}

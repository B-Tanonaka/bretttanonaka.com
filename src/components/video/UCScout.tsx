import { useEffect } from 'react';
import Carousel from '../Carousel';
import VideoWithBlurb from '../VideoWithBlurb';
import type { VideoProject, RenderPhotoList, Image } from '../../../interfaces';

export default function UCScout(
  { projectData, renderProjectImages } :
  { projectData: VideoProject | null, renderProjectImages: RenderPhotoList },
) {
  // Scroll to top of page upon load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="details-container">
      {/* AP Government and Politics */}
      <h1>AP U.S. Government and Politics</h1>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.gov}
          contClassName=""
          className="single-video"
        />
      </div>
      <div className="video-3-container">
        <VideoWithBlurb
          info={projectData!.videos.publius}
          contClassName="video-3-col"
          className="single-video"
        />
        <VideoWithBlurb
          info={projectData!.videos.presidents}
          contClassName="video-3-col"
          className="single-video"
        />
        <VideoWithBlurb
          info={projectData!.videos.brutus}
          contClassName="video-3-col"
          className="single-video"
        />
      </div>
      <div className="carousel-wrapper carousel-scout">
        <Carousel
          images={projectData!.images.carousel}
          type="single-landscape"
        />
      </div>
      <div className="image-3-container">
        { projectData!.images.gifs.map(
          (img: Image, key: number) => renderProjectImages(img, key, 'image-3-col', projectData!.images.gifs),
        )}
      </div>
      <div className="details-container-h5-solo">
        <h5>{projectData!.images.gifs[0].desc}</h5>
      </div>
      {/* Physics */}
      <h1>AP U.S. Government and Politics</h1>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.physics}
          contClassName=""
          className="single-video"
        />
      </div>
      <div className="video-3-container">
        <VideoWithBlurb
          info={projectData!.videos.momentum}
          contClassName="video-3-col"
          className="single-video"
        />
        <VideoWithBlurb
          info={projectData!.videos.equation}
          contClassName="video-3-col"
          className="single-video"
        />
        <VideoWithBlurb
          info={projectData!.videos.galaxy}
          contClassName="video-3-col"
          className="single-video"
        />
      </div>
      <div className="image-2-container">
        {renderProjectImages(projectData!.images.physics[0], 0, 'image-2-col image-2-col-left', projectData!.images.physics)}
        {renderProjectImages(projectData!.images.physics[1], 1, 'image-2-col image-2-col-right', projectData!.images.physics)}
      </div>
      {/* Law and Society */}
      <h1>Law and Society</h1>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.lawandsociety}
          contClassName=""
          className="single-video"
        />
      </div>
      {/* French */}
      <h1>French 4</h1>
      <div className="video-1-container">
        <VideoWithBlurb
          info={projectData!.videos.french}
          contClassName=""
          className="single-video"
        />
      </div>
    </div>
  );
}

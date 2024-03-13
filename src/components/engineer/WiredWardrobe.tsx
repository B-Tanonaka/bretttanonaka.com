import { useEffect } from 'react';
import type { EngineerProject, RenderPhotoList } from '../../../interfaces';

export default function WiredWardrobe(
  { projectData, renderProjectImages } :
  { projectData: EngineerProject | null, renderProjectImages: RenderPhotoList },
) {
  // Scroll to top of page upon load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="image-details-container">
      <h3>Product Overview</h3>
      <div className="image-wrapper overview">
        { projectData!.images.overview.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key),
        )}
      </div>
      <h3>Related Items and My Outfit</h3>
      <div className="image-wrapper related-items">
        { projectData!.images.related.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key),
        ) }
      </div>
      <h3>Questions and Answers</h3>
      <div className="image-wrapper qna">
        { projectData!.images.qna.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key),
        ) }
      </div>
      <h3>Ratings and Reviews</h3>
      <div className="image-wrapper rnr">
        { projectData!.images.rnr.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key),
        ) }
      </div>
    </div>
  );
}

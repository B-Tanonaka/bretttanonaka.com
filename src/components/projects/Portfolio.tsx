import { useEffect } from 'react';
import type { Project, RenderPhotoList } from '../../../interfaces';

export default function Portfolio(
  { projectData, renderProjectImages } :
  { projectData: Project, renderProjectImages: RenderPhotoList },
) {
  // Scroll to top of page upon load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="image-details-container">
      <h3>Original Design in Figma</h3>
      <div className="image-wrapper">
        { projectData.images.figma.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key),
        ) }
      </div>
    </div>
  );
}

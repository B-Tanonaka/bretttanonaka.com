import { useEffect } from 'react';
import type { EngineerProject, RenderPhotoList } from '../../../interfaces';

export default function Portfolio(
  { projectData, renderProjectImages } :
  { projectData: EngineerProject | null, renderProjectImages: RenderPhotoList },
) {
  // Scroll to top of page upon load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="details-container">
      <h1>Original Design in Figma</h1>
      <div className="image-wrapper">
        { projectData!.images.figma.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'desktop-image'),
        ) }
      </div>
    </div>
  );
}

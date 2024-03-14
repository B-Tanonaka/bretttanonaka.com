import { useEffect } from 'react';
import type { EngineerProject, RenderPhotoList } from '../../../interfaces';

export default function Mevify(
  { projectData, renderProjectImages } :
  { projectData: EngineerProject | null, renderProjectImages: RenderPhotoList },
) {
  // Scroll to top of page upon load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="image-details-container">
      <h3>Schema</h3>
      <div className="image-wrapper m-schema">
        { projectData!.images.schema.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'desktop-image'),
        ) }
      </div>
      <h3>Loader.io post optimization testing</h3>
      <p className="subtitle">Testing 5,000 and 7,500 requests per second on five deployed AWS:EC2 instances</p>
      <div className="image-wrapper m-loader">
        { projectData!.images.loader.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'desktop-image'),
        ) }
      </div>
      <h3>K6 pre optimization local testing</h3>
      <div className="image-wrapper m-k6">
        { projectData!.images.k6.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'desktop-image'),
        ) }
      </div>
    </div>
  );
}

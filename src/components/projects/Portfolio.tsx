import type { Project, RenderPhotoList } from '../../../interfaces';

export default function Portfolio(
  { projectData, renderList } :
  { projectData: Project, renderList: RenderPhotoList },
) {
  return (
    <div className="image-details">
      <h3>Original Design in Figma</h3>
      <div className="image-wrapper">
        { projectData.images.figma.map(
          (img: { src: string, alt: string }, key: number) => renderList(img, key),
        ) }
      </div>
    </div>
  );
}

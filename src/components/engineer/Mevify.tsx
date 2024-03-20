import { useEffect } from 'react';
import type { EngineerProject, RenderPhotoList } from '../../../interfaces';

export default function Mevify(
  { projectData, renderProjectImages } :
  { projectData: EngineerProject | null, renderProjectImages: RenderPhotoList },
) {
  // Scroll to top of page upon load
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="details-container">
      <div className="details-container-h3-solo">
        <h3>{projectData!.text.blurb}</h3>
      </div>
      <div className="image-2-container">
        <div className="image-2-text image-2-col">
          <h2>{projectData!.text.metricGoals.title}</h2>
          <h5>{projectData!.text.metricGoals.part1}</h5>
          <h5>{projectData!.text.metricGoals.part2}</h5>
          <h5>{projectData!.text.metricGoals.part3}</h5>
        </div>
        <div className="image-2-text image-2-text-black image-2-col">
          <h5>{projectData!.text.database}</h5>
        </div>
      </div>
      { /* Schema */ }
      <h1>Schema</h1>
      <div className="image-2-container">
        <img
          className="image-2-col"
          src={projectData!.images.schema[0].src}
          alt={projectData!.images.schema[0].alt}
        />
        <h5 className="image-2-col">
          <span>{projectData!.text.schema}</span>
        </h5>
      </div>
      <div className="details-container-h3-solo">
        <h3>
          <span>{projectData!.text.data.part1}</span>
          <br />
          <br />
          <span>{projectData!.text.data.part2}</span>
        </h3>
      </div>
      { /* K6 testing */ }
      <h1>K6 pre optimization local testing</h1>
      <div className="image-1-text-wide-container">
        <h5 className="image-1-text-wide-col">
          <span>{projectData!.text.queries.part1}</span>
        </h5>
        <img
          className="image-1-text-wide-image-col"
          src={projectData!.images.k6[0].src}
          alt={projectData!.images.k6[0].alt}
        />
      </div>
      <div className="image-1-text-wide-container">
        <img
          className="image-1-text-wide-image-col"
          src={projectData!.images.k6[1].src}
          alt={projectData!.images.k6[1].alt}
        />
        <h5 className="image-1-text-wide-col">
          <span>{projectData!.text.queries.part2}</span>
        </h5>
      </div>
      <div className="details-container-h3-solo">
        <h3>
          <span>{projectData!.text.deploy.part1}</span>
          <br />
          <br />
          <span>{projectData!.text.deploy.part2}</span>
        </h3>
      </div>
      { /* Loader.io */ }
      <h1>Loader.io post optimization testing</h1>
      <div className="image-2-container m-loader">
        { projectData!.images.loader.map(
          (img: { src: string, alt: string }, key: number) => renderProjectImages(img, key, 'image-2-col'),
        ) }
      </div>
      <div className="details-container-h5-solo">
        <h5>{projectData!.text.snippets.part3}</h5>
      </div>
      <div className="image-2-container">
        <div className="image-2-text image-2-col">
          <h2>{projectData!.text.results.title}</h2>
          <h5>{projectData!.text.results.part1}</h5>
          <h5>{projectData!.text.results.part2}</h5>
          <h5>{projectData!.text.results.part3}</h5>
        </div>
        <div className="image-2-text image-2-text-black  image-2-col">
          <h5>{projectData!.text.results.takeaway}</h5>
        </div>
      </div>
    </div>
  );
}

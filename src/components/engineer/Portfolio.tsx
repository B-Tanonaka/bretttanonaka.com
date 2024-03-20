import { useEffect } from 'react';
import Carousel from '../Carousel';
import type { EngineerProject } from '../../../interfaces';

export default function Portfolio(
  { projectData } :
  { projectData: EngineerProject | null },
) {
  // Scroll to top of page upon load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="details-container">
      <div className="details-container-h3-solo">
        <h3>{projectData!.text.goal.part1}</h3>
      </div>
      { /* Design in Fimga */ }
      <h1>Original Design in Figma</h1>
      <div className="carousel-wrapper carousel-portfolio">
        <Carousel
          images={projectData!.images.figma.slice(0, -1)}
          type="single-landscape"
        />
      </div>
      { /* Background */ }
      <h1>Background</h1>
      <div className="image-2-container">
        <h5 className="image-2-col">
          <span>{projectData!.text.background.part1}</span>
          <br />
          <br />
          <span>{projectData!.text.background.part2}</span>
        </h5>
        <img
          className="image-2-col"
          src={projectData!.images.gifs.background.src}
          alt={projectData!.images.gifs.background.alt}
        />
      </div>
      { /* Project Details */ }
      <h1>Project Details</h1>
      <div className="image-2-container">
        <img
          className="image-2-col"
          src={projectData!.images.gifs.projectDetails.src}
          alt={projectData!.images.gifs.projectDetails.alt}
        />
        <h5 className="image-2-col">
          <span>{projectData!.text.projectDetails.part1}</span>
        </h5>
      </div>
      { /* Contact */ }
      <h1>Contact</h1>
      <div className="image-2-container">
        <h5 className="image-2-col">
          <span>{projectData!.text.contact.part1}</span>
        </h5>
        <img
          className="image-2-col"
          src={projectData!.images.gifs.contact.src}
          alt={projectData!.images.gifs.contact.alt}
        />
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { FaArrowsTurnRight } from 'react-icons/fa6';
import { FaExternalLinkAlt } from 'react-icons/fa';
import type {
  Project, RenderList, RenderPhotoList,
} from '../../../interfaces';
import dividerLine from '../../utils/dividerLine';
import LitterSort from '../engineer/LitterSort';
import Portfolio from '../engineer/Portfolio';
import Fitbook from '../engineer/Fitbook';
import Mevify from '../engineer/Mevify';
import WiredWardrobe from '../engineer/WiredWardrobe';
import '../../css/ProjectImages.css';

export default function EngProjectDetails({
  projectName,
  projectData,
  renderList,
  renderProjectImages,
}: {
  projectName: string
  projectData: Project | null,
  renderList: RenderList,
  renderProjectImages: RenderPhotoList
}) {
  if (projectData && 'repo' in projectData!) {
    return (
      <>
        <Link to="/engineer">
          <input type="button" value="Home" className="back" />
        </Link>
        { projectData && (
        <div className="project-details">
          <div className="left-side">
            <p>{projectData.description}</p>
            <a href={projectData.repo} target="_blank" rel="noopener noreferrer">
              <span className="repo-link">repo  </span>
              <FaArrowsTurnRight />
            </a>
            { projectData.link && (
            <a href={projectData.link} target="_blank" rel="noopener noreferrer">
              <span className="repo-link">live link  </span>
              <FaExternalLinkAlt />
            </a>
            )}
          </div>
          <div className="right-side">
            <h2>{projectData.name}</h2>
            <div className="project-year">{projectData.year}</div>
            { dividerLine }
            { projectData.role.map((role: string, key: number) => renderList(role, key)) }
            { dividerLine }
            { projectData.techStack.map(
              (framework: string, key: number) => renderList(framework, key),
            ) }
          </div>
          <div className="project-background" />
        </div>
        )}
        {/* Render only the selected project */}
        { projectName === 'littersort'
          && (
          <LitterSort projectData={projectData} renderProjectImages={renderProjectImages} />
          )}
        { projectName === 'portfolio'
          && (
          <Portfolio projectData={projectData} renderProjectImages={renderProjectImages} />
          )}
        { projectName === 'fitbook'
          && (
          <Fitbook projectData={projectData} renderProjectImages={renderProjectImages} />
          )}
        { projectName === 'mevify'
          && (
          <Mevify projectData={projectData} renderProjectImages={renderProjectImages} />
          )}
        { projectName === 'wired-wardrobe'
          && (
          <WiredWardrobe projectData={projectData} renderProjectImages={renderProjectImages} />
          )}
      </>
    );
  }
}

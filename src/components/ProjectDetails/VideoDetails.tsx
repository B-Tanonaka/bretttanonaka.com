import { Link } from 'react-router-dom';
import type {
  RenderList, RenderPhotoList, Project,
} from '../../../interfaces';
import dividerLine from '../../utils/dividerLine';
import LinkedInInfluencer from '../video/LinkedInInfluencer';
import GoingPublic from '../video/GoingPublic';

export default function VideoProjectDetails({
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
  if (projectData && 'videos' in projectData!) {
    return (
      <>
        <Link to="/video">
          <input type="button" value="Home" className="back" />
        </Link>
        { projectData && (
        <div className="project-details">
          <div className="left-side">
            <p>{projectData!.description.partOne}</p>
            {/* If description needs a line break */}
            { projectData!.description.partTwo
            && (
              <>
                <br />
                <p>{projectData!.description.partTwo}</p>
              </>
            )}
          </div>
          <div className="right-side">
            <h2>{projectData!.name}</h2>
            {/* If project is for a company */}
            { projectData!.company && <h3>{projectData!.company}</h3>}
            <div className="project-year">{projectData!.year}</div>
            { dividerLine }
            { projectData!.role.map((role: string, key: number) => renderList(role, key)) }
            { dividerLine }
            { projectData!.techStack.map(
              (framework: string, key: number) => renderList(framework, key),
            ) }
          </div>
          <div className="project-background" />
        </div>
        )}
        {/* Render only the selected project */}
        { projectName === 'linkedininfluencer'
          && (
          <LinkedInInfluencer projectData={projectData} renderProjectImages={renderProjectImages} />
          )}
        { projectName === 'goingpublic'
          && (
          <GoingPublic projectData={projectData} renderProjectImages={renderProjectImages} />
          )}
      </>
    );
  }
}

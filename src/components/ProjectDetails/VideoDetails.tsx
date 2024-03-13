import { Link } from 'react-router-dom';
import type {
  RenderList, RenderPhotoList, Project,
} from '../../../interfaces';
import dividerLine from '../../utils/dividerLine';
import '../../css/ProjectDetails.css';
import '../../css/ProjectImages.css';

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
  if ('videos' in projectData!) {
    return (
      <>
        <Link to="/video">
          <input type="button" value="Home" className="back" />
        </Link>
        { projectData && (
        <div className="project-details">
          <div className="left-side">
            <p>{projectData!.description}</p>
          </div>
          <div className="right-side">
            <h2>{projectData!.name}</h2>
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
      </>
    );
  }
}

import { Link } from 'react-router-dom';
import type {
  RenderList, RenderPhotoList, Project,
} from '../../../interfaces';
import dividerLine from '../../utils/dividerLine';
import LinkedInInfluencer from '../video/LinkedInInfluencer';
import ENJY from '../video/ENJY';
import Recruiting from '../video/Recruiting';
import MotionGraphics from '../video/MotionGraphics';
import InternalComms from '../video/InternalComms';
import DemoReel from '../video/DemoReel';
import JeffsJacket from '../video/JeffsJacket';
import UCScout from '../video/UCScout';
import OtherProjects from '../video/OtherProjects';
import GoogleDeepmind from '../video/GoogleDeepmind';
import Voltai from '../video/Voltai';
import Enjoy from '../video/Enjoy';
import Odoo from '../video/Odoo';

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
  if (projectData && 'company' in projectData) {
    return (
      <>
        <Link to="/video">
          <input type="button" value="Back" className="back" />
        </Link>
        {projectData && (
          <div className="project-details">
            <div className="left-side">
              <p>{projectData!.description.partOne}</p>
              {/* If description needs a line break */}
              {projectData!.description.partTwo
                && (
                  <p style={{ marginTop: '1.5rem' }}>{projectData!.description.partTwo}</p>
                )}
            </div>
            <div className="right-side">
              <h2>{projectData!.name}</h2>
              {/* If project is for a company */}
              {projectData!.company && <h3>{projectData!.company}</h3>}
              <div className="project-year">{projectData!.year}</div>
              {dividerLine}
              {projectData!.role.map((role: string, key: number) => renderList(role, key))}
              {dividerLine}
              {projectData!.techStack.map(
                (framework: string, key: number) => renderList(framework, key),
              )}
            </div>
            <div className="project-background-video" />
          </div>
        )}
        {/* Render only the selected project */}
        {projectName === 'demoreel'
          && (
            <DemoReel projectData={projectData} />
          )}
        {projectName === 'google'
          && (
            <GoogleDeepmind projectData={projectData} renderProjectImages={renderProjectImages} />
          )}
        {projectName === 'voltai'
          && (
            <Voltai projectData={projectData} renderProjectImages={renderProjectImages} />
          )}
        {projectName === 'odoo'
          && (
            <Odoo projectData={projectData} renderProjectImages={renderProjectImages} />
          )}
        {projectName === 'enjoy'
          && (
            <Enjoy projectData={projectData} renderProjectImages={renderProjectImages} />
          )}
        {projectName === 'linkedininfluencer'
          && (
            <LinkedInInfluencer projectData={projectData} renderProjectImages={renderProjectImages} />
          )}
        {projectName === 'enjy'
          && (
            <ENJY projectData={projectData} renderProjectImages={renderProjectImages} />
          )}
        {projectName === 'recruiting'
          && (
            <Recruiting projectData={projectData} renderProjectImages={renderProjectImages} />
          )}
        {projectName === 'motiongraphics'
          && (
            <MotionGraphics projectData={projectData} renderProjectImages={renderProjectImages} />
          )}
        {projectName === 'internalcomms'
          && (
            <InternalComms projectData={projectData} renderProjectImages={renderProjectImages} />
          )}
        {projectName === 'jeffsjacket'
          && (
            <JeffsJacket projectData={projectData} renderProjectImages={renderProjectImages} />
          )}
        {projectName === 'ucscout'
          && (
            <UCScout projectData={projectData} renderProjectImages={renderProjectImages} />
          )}
        {projectName === 'other'
          && (
            <OtherProjects projectData={projectData} />
          )}
      </>
    );
  }
}

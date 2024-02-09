import {
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { useNavigate, useMatch } from 'react-router-dom';
import type { Project } from '../../interfaces';
import fetchProjectData from '../utils/fetchData';
// import Portfolio from './projects/Portfolio';
// import Fitbook from './projects/Fitbook';
import Mevify from './projects/Mevify';
import WiredWardrobe from './projects/WiredWardrobe';

export default function ProjectDetails({
  projectData,
  setProjectData,
}: {
  projectData: Project,
  setProjectData: Dispatch<SetStateAction<Project>>
}) {
  const navigate = useNavigate();
  const match = useMatch('/projects/:projectLink');
  // Exclamation point is used to indicate match is non-null
  const { projectLink } = match!.params;
  const [projectName, setProjectName] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProjectData(projectLink!);
      setProjectData(response);
      setProjectName(projectLink!);
    };
    fetchData();
  }, [projectName, setProjectData, projectLink]);

  const dividerLine = (
    <hr style={{
      border: '0.03em dashed black',
      boxShadow: '5px 2px 5px 0.5px hsl(0deg 0% 0% / 22%)',
      margin: '7% auto',
    }}
    />
  );
  const renderList = (text: string, index: number) => (
    <div className="list-items" key={index}>{text}</div>
  );

  const renderProjectImages = (img: { src: string, alt: string }, key: number) => (
    <img
      src={img.src}
      alt={img.alt}
      key={key}
      className="image-wrapper"
    />
  );

  return (
    <div>
      <input type="button" value="Back" className="back" onClick={() => { navigate(-1); }} />
      <div className="project-details">
        <div className="left-side">
          <p>{projectData.description}</p>
          <a href={projectData.repo} target="_blank" rel="noopener noreferrer">
            <span className="repo-link">repo  </span>
            <i className="fa-solid fa-arrows-turn-right" />
          </a>
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
      { projectName === 'wired-wardrobe'
        && (
        <WiredWardrobe projectData={projectData} renderList={renderProjectImages} />
        )}
      { projectName === 'mevify' && <Mevify projectData={projectData} />}
    </div>
  );
}

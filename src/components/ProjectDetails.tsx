import {
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import type { Project } from '../../interfaces';
import { fetchProjectData } from '../utils/fetchData';
import LitterSort from './projects/LitterSort';
import Portfolio from './projects/Portfolio';
import Fitbook from './projects/Fitbook';
import Mevify from './projects/Mevify';
import WiredWardrobe from './projects/WiredWardrobe';
import '../css/ProjectDetails.css';
import '../css/ProjectImages.css';

export default function ProjectDetails({
  projectData,
  setProjectData,
}: {
  projectData: Project,
  setProjectData: Dispatch<SetStateAction<Project>>
}) {
  const [projectName, setProjectName] = useState<string>('');

  const navigate = useNavigate();
  const match = useMatch('/projects/:projectLink');
  // Exclamation point is used to indicate match is non-null
  const { projectLink } = match!.params;

  // API call for data of the selected project
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProjectData(projectLink!);
        if (response.ref) {
          setProjectData(response);
          setProjectName(projectLink!);
        } else {
          throw new Error('Failed to receive data');
        }
      } catch (err) {
        navigate('/404', { replace: true });
      }
    };
    fetchData();
  }, [projectName, setProjectData, projectLink, navigate]);

  const dividerLine = (
    <hr style={{
      border: '0.03em dashed black',
      boxShadow: '5px 2px 5px 0.5px hsl(0deg 0% 0% / 22%)',
      margin: '7% auto',
    }}
    />
  );

  // Render list of tech stack
  const renderList = (text: string, index: number) => (
    <div className="list-items" key={index}>{text}</div>
  );

  // Child component function to render each of the images
  const renderProjectImages = (img: { src: string, alt: string }, key: number) => (
    <img
      src={img.src}
      alt={img.alt}
      key={key}
      className="image-wrapper"
    />
  );

  return (
    <>
      <Link to="/">
        <input type="button" value="Home" className="back" />
      </Link>
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
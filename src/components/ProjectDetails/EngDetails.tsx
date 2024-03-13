import {
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { FaArrowsTurnRight } from 'react-icons/fa6';
import { FaExternalLinkAlt } from 'react-icons/fa';
import type { EngineerProject } from '../../../interfaces';
import { fetchProjectData } from '../../utils/fetchData';
import dividerLine from '../../utils/dividerLine';
import LitterSort from '../engineer/LitterSort';
import Portfolio from '../engineer/Portfolio';
import Fitbook from '../engineer/Fitbook';
import Mevify from '../engineer/Mevify';
import WiredWardrobe from '../engineer/WiredWardrobe';
import '../../css/ProjectDetails.css';
import '../../css/ProjectImages.css';

export default function EngProjectDetails({
  projectData,
  setProjectData,
}: {
  projectData: EngineerProject | null,
  setProjectData: Dispatch<SetStateAction<EngineerProject | null>>
}) {
  const [projectName, setProjectName] = useState<string>('');

  const navigate = useNavigate();
  const match = useMatch('engineer/projects/:projectLink');
  // Exclamation point is used to indicate match is non-null
  const { projectLink } = match!.params;

  // API call for data of the selected project
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProjectData('engineer', projectLink!);
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

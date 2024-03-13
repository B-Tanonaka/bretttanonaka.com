import {
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import type { VideoProject } from '../../../interfaces';
import { fetchProjectData } from '../../utils/fetchData';
import dividerLine from '../../utils/dividerLine';
import '../../css/ProjectDetails.css';
import '../../css/ProjectImages.css';

export default function VideoProjectDetails({
  projectData,
  setProjectData,
}: {
  projectData: VideoProject | null,
  setProjectData: Dispatch<SetStateAction<VideoProject | null>>
}) {
  const [projectName, setProjectName] = useState<string>('');

  const navigate = useNavigate();
  const match = useMatch(':video/projects/:projectLink');
  // Exclamation point is used to indicate match is non-null
  const { projectLink } = match!.params;

  // API call for data of the selected project
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProjectData('video', projectLink!);
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

import {
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { useMatch, useNavigate, useParams } from 'react-router-dom';
import type { EngineerProject, VideoProject } from '../../../interfaces';
import { fetchProjectData } from '../../utils/fetchData';
import EngProjectDetails from './EngDetails';
import VideoProjectDetails from './VideoDetails';
import '../../css/ProjectDetails.css';

export default function ProjectDetails({
  projectData,
  setProjectData,
}: {
  projectData: EngineerProject | VideoProject | null,
  setProjectData: Dispatch<SetStateAction<EngineerProject | VideoProject | null>>
}) {
  const [projectName, setProjectName] = useState<string>('');

  const navigate = useNavigate();
  const { category } = useParams();
  const match = useMatch(':category/projects/:projectLink');
  // Exclamation point is used to indicate match is non-null
  const { projectLink } = match!.params;

  // API call for data of the selected project
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProjectData(`${category}`, projectLink!);
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
  }, [projectName, setProjectData, projectLink, navigate, category]);

  // Render list of tech stack
  const renderList = (text: string, index: number) => (
    <div className="list-items" key={index}>{text}</div>
  );

  // Child component function to render each of the images
  const renderProjectImages = (img: {
    src: string, alt: string,
  }, key: number, className: string) => (
    <img
      src={img.src}
      alt={img.alt}
      key={key}
      className={className}
    />
  );

  return (
    <div>
      { category === 'engineer' ? (
        <EngProjectDetails
          projectName={projectName}
          projectData={projectData}
          renderList={renderList}
          renderProjectImages={renderProjectImages}
        />
      )
        : (
          <VideoProjectDetails
            projectName={projectName}
            projectData={projectData}
            renderList={renderList}
            renderProjectImages={renderProjectImages}
          />
        )}
    </div>
  );
}

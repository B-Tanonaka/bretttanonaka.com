import {
  useState, useEffect,
} from 'react';
import { useParams } from 'react-router-dom';
import type { EngineerProject } from '../../interfaces';
import Intro from './Intro';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Modal from './ContactModal';
import Background from './Background';
import { fetchProjectData, fetchAboutData } from '../utils/fetchData';
import '../css/Home.css';

export default function Home() {
  const [projectData, setProjectData] = useState<EngineerProject[]>([]);
  const [aboutData, setAboutData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalState, setModalState] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectResponse = await fetchProjectData(category!);
        projectResponse.sort((a: EngineerProject, b: EngineerProject) => b.order - a.order);
        setProjectData(projectResponse);

        const aboutResponse = await fetchAboutData();
        setAboutData(aboutResponse);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [category]);

  return (
    <>
      <Background />
      { modalOpen
        && (
          <div className="submit-overlay">
            {modalState
              ? <Modal success setModalOpen={setModalOpen} />
              : <Modal success={false} setModalOpen={setModalOpen} />}
          </div>
        )}
      <Navbar />
      <Intro data={aboutData} />
      <Projects data={projectData} />
      <About data={aboutData} />
      <Contact
        setModalOpen={setModalOpen}
        setModalState={setModalState}
      />
    </>
  );
}

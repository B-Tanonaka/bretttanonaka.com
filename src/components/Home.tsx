import {
  useState, useEffect, Dispatch, SetStateAction,
} from 'react';
import type { EngineerProject } from '../../interfaces';
import Intro from './Intro';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Modal from './ContactModal';
import Background from './Background';
import { fetchProjectData } from '../utils/fetchData';
import '../css/Home.css';

export default function Home(
  { activeCategory, setActiveCategory }:
  { activeCategory: string, setActiveCategory: Dispatch<SetStateAction<string>> },
) {
  const [data, setData] = useState<EngineerProject[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalState, setModalState] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProjectData();
        response.sort((a: EngineerProject, b: EngineerProject) => b.order - a.order);
        setData(response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

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
      <Navbar setActiveCategory={setActiveCategory} />
      <Intro />
      <Projects data={data} />
      <About />
      <Contact
        setModalOpen={setModalOpen}
        setModalState={setModalState}
      />
    </>
  );
}

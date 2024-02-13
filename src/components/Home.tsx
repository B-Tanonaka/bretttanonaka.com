import { useState, useEffect } from 'react';
import type { Project } from '../../interfaces';
import Landing from './Landing';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Modal from './ContactModal';
import Background from './Background';
import '../css/Home.css';

export default function Home() {
  const [data, setData] = useState<Project[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalState, setModalState] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3131/project-data');
        const response = await res.json();
        response.sort((a: Project, b: Project) => b.order - a.order);
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
      <Navbar />
      <Landing />
      <Projects data={data} />
      <About />
      <Contact
        setModalOpen={setModalOpen}
        setModalState={setModalState}
      />
    </>
  );
}

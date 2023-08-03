import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Portfolio from './projects/Portfolio';
import Fitbook from './projects/Fitbook';
import Modal from './ContactModal';
import Background from './Background';
import type { Project } from '../../../interfaces';

export default function App() {
  const [data, setData] = useState<Project[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalState, setModalState] = useState(true);

  useEffect(() => {
    axios.get<Project[]>('/project-data')
      .then((response) => { setData(response.data); })
      .catch((err) => { throw err; });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Background />
              {modalOpen
                && (
                  <div className="submit-overlay">
                    {modalState
                      ? <Modal success setModalOpen={setModalOpen} />
                      : <Modal success={false} setModalOpen={setModalOpen} />}
                  </div>
                )}
              <Navbar />
              <Home />
              <Projects data={data} />
              <About />
              <Contact
                setModalOpen={setModalOpen}
                setModalState={setModalState}
              />
            </>
            )}
        />
        <Route path="/projects/portfolio" element={<Portfolio />} />
        <Route path="/projects/fitbook" element={<Fitbook />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

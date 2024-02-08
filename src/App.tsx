import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Portfolio from './components/projects/Portfolio';
import Fitbook from './components/projects/Fitbook';
import Mevify from './components/projects/Mevify';
import WiredWardrobe from './components/projects/WiredWardrobe';
import Modal from './components/ContactModal';
import Background from './components/Background';
import type { Project } from '../interfaces';
import './App.css'

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
      <Router>
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
          <Route path="/projects/mevify" element={<Mevify />} />
          <Route path="/projects/wired-wardrobe" element={<WiredWardrobe />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

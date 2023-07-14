import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import ProjectDetails from './ProjectDetails';
import type { Project } from '../../../interfaces';

export default function App() {
  const [data, setData] = useState<Project[]>([]);

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
            <div>
              <Navbar />
              <Home />
              <Projects data={data} />
              <About />
              <Contact />
            </div>
            )}
        />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

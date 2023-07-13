import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import ProjectDetails from './ProjectDetails';
import type { Project } from '../../../interfaces';

export default function App() {
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    axios.get<Project[]>('/projects')
      .then((response) => { setData(response.data); })
      .catch((err) => { throw err; });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetails data={data} />} />
      </Routes>
      <Projects data={data} />
      <About />
      <Contact />
    </div>
  );
}

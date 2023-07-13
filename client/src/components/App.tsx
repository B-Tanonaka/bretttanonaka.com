import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import ProjectDetails from './ProjectDetails';

export default function App() {
  const [data, setData] = useState<AxiosResponse | null | void>(null);

  useEffect(() => {
    axios.get('/projects')
      .then((response) => { setData(response); })
      .catch((err) => { throw err; });
  }, []);

  return (
    <div className="app">
      <ProjectDetails />
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

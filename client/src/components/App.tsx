import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import ProjectDetails from './ProjectDetails';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <ProjectDetails />
      <Home />
      <Projects />
      <About />
    </div>
  );
}

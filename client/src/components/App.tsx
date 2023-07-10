import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import SingleProject from './SingleProject';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <SingleProject />
      <Home />
      <Projects />
      <About />
    </div>
  );
}

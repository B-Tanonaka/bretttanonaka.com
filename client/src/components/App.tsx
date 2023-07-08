import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Projects />
      <About />
    </div>
  );
}

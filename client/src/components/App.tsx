import React, { useState } from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';

export default function App() {
  type Text = string;

  const [text, setText] = useState<Text>('hello');
  return (
    <div className="app">
      <Navbar />
      <Home text={text} />
      <Projects />
    </div>
  );
}

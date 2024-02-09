import { useState } from 'react';
import {
  Navigate,
  BrowserRouter as
  Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './Home';
import Error from './Error';
import type { Project } from '../../interfaces';
import { BlankProject } from '../../interfaces';
import ProjectDetails from './ProjectDetails';
import '../css/App.css';

export default function App() {
  const [projectData, setProjectData] = useState<Project>(BlankProject);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={(<Home />)} />
          <Route
            path="/projects/:project-name"
            element={(
              <ProjectDetails
                projectData={projectData}
                setProjectData={setProjectData}
              />
            )}
          />
          {/* <Route path="/projects/portfolio" element={<Portfolio />} />
          <Route path="/projects/fitbook" element={<Fitbook />} />
          <Route path="/projects/mevify" element={<Mevify />} />
          <Route path="/projects/wired-wardrobe" element={<WiredWardrobe />} /> */}
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

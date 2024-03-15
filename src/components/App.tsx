import { useState } from 'react';
import {
  Navigate,
  BrowserRouter as
  Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './Home';
import Landing from './Landing';
import Error from './Error';
import type { Project } from '../../interfaces';
import '../css/App.css';
import ProjectDetails from './ProjectDetails/ProjectDetails';

export default function App() {
  const [projectData, setProjectData] = useState<Project | null>(null);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={(<Landing />)}
          />
          <Route
            path="/:category"
            element={(
              <Home />
            )}
          />
          <Route
            path="/:category/projects/:project-name"
            element={(
              <ProjectDetails
                projectData={projectData}
                setProjectData={setProjectData}
              />
            )}
          />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

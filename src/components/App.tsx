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
import type { EngineerProject } from '../../interfaces';
import { BlankProject } from '../../interfaces';
import EngProjectDetails from './ProjectDetails/Engineering';
import '../css/App.css';

export default function App() {
  const [engProjectData, setEngProjectData] = useState<EngineerProject>(BlankProject);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={(<Home />)} />
          <Route
            path="/projects/:project-name"
            element={(
              <EngProjectDetails
                projectData={engProjectData}
                setProjectData={setEngProjectData}
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

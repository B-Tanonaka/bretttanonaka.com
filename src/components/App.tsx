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
import type { EngineerProject, VideoProject } from '../../interfaces';
// import { BlankEngProject } from '../../interfaces';
import EngProjectDetails from './ProjectDetails/EngDetails';
import VideoProjectDetails from './ProjectDetails/VideoDetails';
import '../css/App.css';

export default function App() {
  const [engProjectData, setEngProjectData] = useState<EngineerProject | null>(null);
  const [videoProjectData, setVideoProjectData] = useState<VideoProject | null>(null);

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
            path="/engineer/projects/:project-name"
            element={(
              <EngProjectDetails
                projectData={engProjectData}
                setProjectData={setEngProjectData}
              />
            )}
          />
          <Route
            path="/video/projects/:project-name"
            element={(
              <VideoProjectDetails
                projectData={videoProjectData}
                setProjectData={setVideoProjectData}
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

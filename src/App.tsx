import {
  Navigate,
  BrowserRouter as
  Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import Portfolio from './components/projects/Portfolio';
import Fitbook from './components/projects/Fitbook';
import Mevify from './components/projects/Mevify';
import WiredWardrobe from './components/projects/WiredWardrobe';
import './css/App.css';

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={(<Home />)} />
          <Route path="/projects/portfolio" element={<Portfolio />} />
          <Route path="/projects/fitbook" element={<Fitbook />} />
          <Route path="/projects/mevify" element={<Mevify />} />
          <Route path="/projects/wired-wardrobe" element={<WiredWardrobe />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

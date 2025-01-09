import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResumeMaker from './pages/ResumeMaker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume-maker" element={<ResumeMaker />} />
      </Routes>
    </Router>
  );
}

export default App;
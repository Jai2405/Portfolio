import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Library from './pages/Library';
import Musings from './pages/Musings';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/library" element={<Library />} />
        <Route path="/musings" element={<Musings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

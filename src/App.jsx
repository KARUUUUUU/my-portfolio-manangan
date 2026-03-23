import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import Archive from './components/Archive';
import './App.css';
import './index.css';

// Helper component to ensure page starts at the top when navigating
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-purple-600 selection:text-white">
        <Routes>
          {/* Main Portfolio Route */}
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </main>
          } />

          {/* Archive Page Route */}
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
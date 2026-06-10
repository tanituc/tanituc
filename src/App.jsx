import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';
import WalkingCat from './components/WalkingCat';

function App() {
  const [isDark, setIsDark] = useState(() => {
    // Check local storage or default to dark mode
    return localStorage.getItem('theme') !== 'light';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  // Walking cats state
  const [cats, setCats] = useState([]);
  const spawnCat = useCallback(() => {
    const id = Date.now() + Math.random();
    setCats((prev) => [...prev, id]);
  }, []);
  const removeCat = useCallback((id) => {
    setCats((prev) => prev.filter((c) => c !== id));
  }, []);

  // Reusable Handdrawn Sparkle Star Path
  const starPath = "M12,3 Q12,12 3,12 Q12,12 12,21 Q12,12 21,12 Q12,12 12,3 Z";

  return (
    <div>
      {/* Background Twinkling Stars */}
      <div className="stars-container" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
          <svg key={i} className="bg-star" viewBox="0 0 24 24">
            <path d={starPath} />
          </svg>
        ))}
      </div>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Walking cats — rendered at top level so they roam over everything */}
      {cats.map((id) => (
        <WalkingCat key={id} onRemove={() => removeCat(id)} />
      ))}

      <main>
        <Hero isDark={isDark} onSpawnCat={spawnCat} catCount={cats.length} />
        <About isDark={isDark} />
        <Experience isDark={isDark} />
        <Skills isDark={isDark} />
        <Education isDark={isDark} />
        <DownloadCTA isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;

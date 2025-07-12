import './App.css';
import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import SectionDivider from './components/SectionDivider';
import BackToTop from './components/BackToTop';

function App() {
  // Show back-to-top button on scroll
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact />
      <BackToTop show={showTop} />
    </div>
  );
}

export default App;

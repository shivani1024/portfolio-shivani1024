import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import profileImg from '../assets/portfolio.jpg';
import { useEffect, useState } from 'react';

// SVG mesh background as a React component
function MeshBackground() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 600"
      fill="none"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.3,
      }}
    >
      {/* Darker mesh lines */}
      <polyline
        points="0,400 200,300 400,350 600,250 800,300 1000,200 1200,250 1440,180"
        stroke="#4c1d95"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <polyline
        points="0,300 200,200 400,250 600,150 800,200 1000,100 1200,150 1440,80"
        stroke="#581c87"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      {/* Abstract geometric shapes */}
      <polygon
        points="100,100 150,150 100,200 50,150"
        fill="#7c3aed"
        opacity="0.1"
      />
      <polygon
        points="1200,300 1250,350 1200,400 1150,350"
        fill="#8b5cf6"
        opacity="0.1"
      />
      {/* Glowing nodes */}
      {[200, 400, 600, 800, 1000, 1200].map((x, i) => (
        <circle
          key={x}
          cx={x}
          cy={i % 2 === 0 ? 300 : 250}
          r="6"
          fill="#a855f7"
          filter="url(#glow)"
        />
      ))}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}

// Add a floating particles background
function ParticlesBackground() {
  return (
    <svg style={{position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none'}} width="100%" height="100%" viewBox="0 0 1440 600">
      {[...Array(18)].map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 1440}
          cy={Math.random() * 600}
          r={Math.random() * 8 + 3}
          fill="url(#particleGradient)"
          opacity={0.18 + Math.random() * 0.18}
        />
      ))}
      <defs>
        <radialGradient id="particleGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#6366f1" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// Abstract floating text component
function FloatingText({ text, delay = 0 }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        fontSize: '1.5rem',
        fontWeight: 300,
        color: '#a855f7',
        opacity: 0.3,
        zIndex: 1,
        pointerEvents: 'none',
      }}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      {text}
    </motion.div>
  );
}

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Oracle Consultant",
      "Data Engineer",
      "Automation Expert",
      "Technical Leader"
    ],
    loop: true,
    delaySpeed: 700,
  });

  // Responsive state for mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section
      className="hero-bg section glass"
      id="hero"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: isMobile ? 'auto' : '70vh',
        padding: isMobile ? '60px 0.5rem' : '120px 0',
        overflow: 'hidden',
        background: '#161618',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }}
    >
      {/* Remove mesh/particles for now for clean look */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ 
          flex: 1, 
          paddingLeft: isMobile ? 0 : '8vw', 
          zIndex: 2,
          textAlign: isMobile ? 'center' : 'left',
          marginBottom: isMobile ? '2rem' : 0
        }}
      >
        <h1 className="hero-title" style={{
          fontSize: isMobile ? '2.2rem' : '3rem',
          fontWeight: 800,
          color: '#fff',
          fontFamily: 'Inter, Segoe UI, sans-serif',
          letterSpacing: '-0.02em',
          marginBottom: 12,
          marginTop: 0,
          lineHeight: 1.1,
          animation: 'fadeInUp 0.8s ease-out',
        }}>
          Oracle Solutions Architect & Automation Expert
        </h1>
        <div style={{
          color: '#a0a0a0',
          fontSize: isMobile ? 18 : 22,
          fontWeight: 400,
          lineHeight: 1.6,
          marginBottom: 18,
          fontFamily: 'Inter, Segoe UI, sans-serif',
        }}>
          Specialized in Oracle Cloud applications, business intelligence, and automated workflows. Proven track record of delivering enterprise solutions that drive operational efficiency.
        </div>
        <div style={{ fontSize: isMobile ? 20 : 26, fontWeight: 600, color: '#fff', minHeight: 40, marginBottom: 32 }}>
          <span>{text}</span>
        </div>
        <button
          className="cta-button"
          onClick={() => scrollToSection('get-in-touch')}
          style={{
            background: '#6366f1',
            border: 'none',
            padding: '12px 24px',
            borderRadius: 8,
            fontWeight: 500,
            color: '#fff',
            fontSize: isMobile ? 16 : 18,
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
            marginTop: 8,
            marginBottom: 8,
            cursor: 'pointer',
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = '#5855eb';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.4)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = '#6366f1';
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
          }}
        >
          Let's Connect
        </button>
      </motion.div>
      <motion.div
        className="hero-photo"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        style={{ 
          flex: 1, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: isMobile ? 180 : 320, 
          zIndex: 2,
          marginTop: isMobile ? '1.5rem' : 0
        }}
      >
        <img
          src={profileImg}
          alt="Shivani Sawant"
          style={{
            width: isMobile ? 140 : 220,
            height: isMobile ? 140 : 220,
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
            border: '3px solid rgba(255,255,255,0.1)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            background: '#1e1b4b',
            filter: 'drop-shadow(0 0 8px #6366f1)',
          }}
        />
      </motion.div>
    </section>
  );
} 
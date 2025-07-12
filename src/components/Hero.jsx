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
      "I'm Shivani Sawant.",
      "Engineering Management Master's Student.",
      "Oracle Consultant.",
      "Automation Expert.",
      "Data Engineer."
    ],
    loop: true,
    delaySpeed: 700,
  });

  // Responsive state for mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
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
      className="section glass"
      id="hero"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: isMobile ? 'flex-start' : 'center',
        minHeight: isMobile ? 'auto' : '70vh',
        padding: isMobile ? '2.5rem 0.5rem 2rem 0.5rem' : '0 4vw',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 60% 40%, #0f0f23 0%, #1e1b4b 50%, #312e81 100%)',
        width: '100vw',
        boxSizing: 'border-box',
        maxWidth: '100vw',
      }}
    >
      {/* Darker mesh SVG background */}
      <MeshBackground />
      {/* Abstract floating text elements (hidden on mobile for clarity) */}
      {!isMobile && <FloatingText text="DATA" style={{ top: '15%', left: '10%' }} delay={0} />}
      {!isMobile && <FloatingText text="AUTOMATION" style={{ top: '25%', right: '15%' }} delay={2} />}
      {!isMobile && <FloatingText text="ENGINEERING" style={{ bottom: '30%', left: '5%' }} delay={4} />}
      {!isMobile && <FloatingText text="STRATEGY" style={{ bottom: '20%', right: '10%' }} delay={6} />}
      {/* Profile image left on desktop, top on mobile */}
      <div style={{ width: isMobile ? '100%' : 320, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: isMobile ? 18 : 0 }}>
        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, y: isMobile ? -30 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            flex: isMobile ? 'none' : 1, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: isMobile ? 120 : 320, 
            zIndex: 2,
            margin: 0
          }}
        >
          <motion.img
            src={profileImg}
            alt="Shivani Sawant"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              width: isMobile ? 110 : 240,
              height: isMobile ? 110 : 240,
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center 30%',
              boxShadow: '0 4px 32px rgba(168, 85, 247, 0.2)',
              border: '4px solid #a855f7',
              background: '#1e1b4b',
              filter: 'drop-shadow(0 0 16px rgba(168, 85, 247, 0.3))',
            }}
          />
        </motion.div>
      </div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: isMobile ? 0 : -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ 
          flex: 1, 
          paddingLeft: isMobile ? 0 : 48, 
          zIndex: 2,
          textAlign: isMobile ? 'center' : 'left',
          marginBottom: isMobile ? '1.5rem' : 0,
          width: isMobile ? '100%' : 'auto',
          maxWidth: 600,
          marginLeft: isMobile ? 'auto' : 0,
          marginRight: isMobile ? 'auto' : 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <motion.h1 
          style={{ 
            fontSize: isMobile ? '1.3rem' : '2.8rem', 
            fontWeight: 800, 
            color: '#d1d5db', 
            marginBottom: isMobile ? '0.7rem' : '1.2rem', 
            lineHeight: 1.15,
            textShadow: '0 0 15px rgba(168, 85, 247, 0.3)',
            position: 'relative',
            wordBreak: 'break-word',
            maxWidth: isMobile ? 420 : 600,
            whiteSpace: 'normal',
          }}
          animate={{
            textShadow: [
              '0 0 15px rgba(168, 85, 247, 0.3)',
              '0 0 20px rgba(168, 85, 247, 0.5)',
              '0 0 15px rgba(168, 85, 247, 0.3)'
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span style={{ position: 'relative' }}>
            {text}
            {/* Glitch effect overlay */}
            <motion.span
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                color: '#ef4444',
                opacity: 0,
                clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
              }}
              animate={{
                opacity: [0, 1, 0],
                x: [-2, 2, -2],
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeInOut"
              }}
            >
              {text}
            </motion.span>
          </span>
          <span className="typewriter-cursor" style={{ color: '#a855f7', fontWeight: 400 }}>|</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ 
            fontSize: isMobile ? '0.95rem' : '1.2rem', 
            color: '#d1d5db', 
            marginBottom: isMobile ? '1.2rem' : '2.2rem', 
            maxWidth: 520,
            textShadow: '0 0 10px rgba(168, 85, 247, 0.3)',
            fontWeight: 300,
            letterSpacing: '0.5px',
            marginLeft: isMobile ? 'auto' : 0,
            marginRight: isMobile ? 'auto' : 0,
            lineHeight: 1.5,
            whiteSpace: 'normal',
          }}
        >
          Bridging Data, Automation & Strategy — One Solution at a Time.
        </motion.div>
        {/* CTA Buttons always below text */}
        <motion.div
          style={{
            display: 'flex',
            gap: isMobile ? '0.7rem' : '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginTop: isMobile ? '0.5rem' : '1.5rem',
            justifyContent: isMobile ? 'center' : 'flex-start',
            flexDirection: isMobile ? 'column' : 'row',
            width: isMobile ? '100%' : 'auto',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ 
              scale: 1.08, 
              background: '#a855f7', 
              color: '#fff', 
              boxShadow: '0 4px 24px rgba(168, 85, 247, 0.4)',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{ 
              fontWeight: 700, 
              fontSize: isMobile ? 16 : 18, 
              padding: isMobile ? '0.7rem 1.5rem' : '0.9rem 2.4rem', 
              borderRadius: 32, 
              background: 'linear-gradient(135deg, #7c3aed, #a855f7)', 
              color: '#fff', 
              border: 'none', 
              outline: 'none', 
              cursor: 'pointer', 
              boxShadow: '0 2px 16px rgba(168, 85, 247, 0.3)', 
              position: 'relative',
              overflow: 'hidden',
              width: isMobile ? '90%' : 'auto',
              margin: isMobile ? '0.25rem 0' : 0
            }}
          >
            <motion.span
              style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              }}
              whileHover={{
                left: '100%',
              }}
              transition={{
                duration: 0.6,
              }}
            />
            Let's Connect
          </motion.button>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.08, 
              background: 'transparent', 
              color: '#a855f7', 
              boxShadow: '0 4px 24px rgba(168, 85, 247, 0.3)',
              borderColor: '#a855f7'
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{ 
              fontWeight: 700, 
              fontSize: isMobile ? 16 : 18, 
              padding: isMobile ? '0.7rem 1.5rem' : '0.9rem 2.4rem', 
              borderRadius: 32, 
              background: 'transparent', 
              color: '#d1d5db', 
              border: '2px solid #a855f7', 
              outline: 'none', 
              cursor: 'pointer', 
              boxShadow: '0 2px 16px rgba(168, 85, 247, 0.2)', 
              textDecoration: 'none', 
              display: 'inline-block',
              position: 'relative',
              overflow: 'hidden',
              width: isMobile ? '90%' : 'auto',
              margin: isMobile ? '0.25rem 0' : 0
            }}
          >
            <motion.span
              style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.1), transparent)',
              }}
              whileHover={{
                left: '100%',
              }}
              transition={{
                duration: 0.6,
              }}
            />
            View Resume
          </motion.a>
          {/* Email Icon Button */}
          <motion.a
            href="mailto:shivani41641@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.15, 
              color: '#a855f7',
              boxShadow: '0 4px 24px rgba(168, 85, 247, 0.3)',
              borderColor: '#a855f7',
              background: 'rgba(168, 85, 247, 0.08)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: isMobile ? 48 : 56,
              height: isMobile ? 48 : 56,
              borderRadius: '50%',
              background: 'rgba(168, 85, 247, 0.12)',
              border: '2px solid #a855f7',
              color: '#a855f7',
              fontSize: isMobile ? 22 : 26,
              margin: isMobile ? '0.25rem 0' : 0,
              boxShadow: '0 2px 16px rgba(168, 85, 247, 0.15)',
              textDecoration: 'none',
              outline: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            aria-label="Email"
          >
            <svg width={isMobile ? 22 : 26} height={isMobile ? 22 : 26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
          </motion.a>
          {/* LinkedIn Icon Button */}
          <motion.a
            href="https://www.linkedin.com/in/shivani-sawant-79a823151/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.15, 
              color: '#a855f7',
              boxShadow: '0 4px 24px rgba(168, 85, 247, 0.3)',
              borderColor: '#a855f7',
              background: 'rgba(168, 85, 247, 0.08)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: isMobile ? 48 : 56,
              height: isMobile ? 48 : 56,
              borderRadius: '50%',
              background: 'rgba(168, 85, 247, 0.12)',
              border: '2px solid #a855f7',
              color: '#a855f7',
              fontSize: isMobile ? 22 : 26,
              margin: isMobile ? '0.25rem 0' : 0,
              boxShadow: '0 2px 16px rgba(168, 85, 247, 0.15)',
              textDecoration: 'none',
              outline: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            aria-label="LinkedIn"
          >
            <svg width={isMobile ? 22 : 26} height={isMobile ? 22 : 26} viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="4"/><path d="M8 11v5" stroke="#fff" strokeWidth="2"/><circle cx="8" cy="8" r="1.5" fill="#fff"/><path d="M12 11v5m0-5h2.5a2.5 2.5 0 0 1 2.5 2.5V16" stroke="#fff" strokeWidth="2"/></svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
} 
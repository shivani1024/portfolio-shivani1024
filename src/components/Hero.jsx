import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import profileImg from '../assets/portfolio.jpg';

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
    delaySpeed: 700, // Reduced lag after each word
  });

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
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '70vh',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 60% 40%, #0f0f23 0%, #1e1b4b 50%, #312e81 100%)',
      }}
    >
      {/* Darker mesh SVG background */}
      <MeshBackground />
      {/* Abstract floating text elements */}
      <FloatingText text="DATA" style={{ top: '15%', left: '10%' }} delay={0} />
      <FloatingText text="AUTOMATION" style={{ top: '25%', right: '15%' }} delay={2} />
      <FloatingText text="ENGINEERING" style={{ bottom: '30%', left: '5%' }} delay={4} />
      <FloatingText text="STRATEGY" style={{ bottom: '20%', right: '10%' }} delay={6} />
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ flex: 1, paddingLeft: '8vw', zIndex: 2 }}
      >
        <motion.h1 
          style={{ 
            fontSize: '2.8rem', 
            fontWeight: 800, 
            color: '#d1d5db', 
            marginBottom: '1.2rem', 
            lineHeight: 1.1,
            textShadow: '0 0 15px rgba(168, 85, 247, 0.3)',
            position: 'relative'
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
            fontSize: '1.2rem', 
            color: '#d1d5db', 
            marginBottom: '2.2rem', 
            maxWidth: 520,
            textShadow: '0 0 10px rgba(168, 85, 247, 0.3)',
            fontWeight: 300,
            letterSpacing: '0.5px'
          }}
        >
          Bridging Data, Automation & Strategy — One Solution at a Time.
        </motion.div>
        {/* CTA Buttons */}
        <motion.div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginTop: '1.5rem'
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
              fontSize: 18, 
              padding: '0.9rem 2.4rem', 
              borderRadius: 32, 
              background: 'linear-gradient(135deg, #7c3aed, #a855f7)', 
              color: '#fff', 
              border: 'none', 
              outline: 'none', 
              cursor: 'pointer', 
              boxShadow: '0 2px 16px rgba(168, 85, 247, 0.3)', 
              position: 'relative',
              overflow: 'hidden'
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
              fontSize: 18, 
              padding: '0.9rem 2.4rem', 
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
              overflow: 'hidden'
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
          <motion.a
            href="mailto:shivani41641@gmail.com"
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
              fontSize: 18, 
              padding: '0.9rem 2.4rem', 
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
              overflow: 'hidden'
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
            Email
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shivani-sawant-79a823151/"
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
              fontSize: 18, 
              padding: '0.9rem 2.4rem', 
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
              overflow: 'hidden'
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
            LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        className="hero-photo"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 320, zIndex: 2 }}
      >
        <motion.img
          src={profileImg}
          alt="Shivani Sawant"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            width: 240,
            height: 240,
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
    </section>
  );
} 
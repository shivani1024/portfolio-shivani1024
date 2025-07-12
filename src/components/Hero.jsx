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
        opacity: 0.7,
      }}
    >
      {/* Mesh lines */}
      <polyline
        points="0,400 200,300 400,350 600,250 800,300 1000,200 1200,250 1440,180"
        stroke="#a78bfa"
        strokeWidth="2"
        fill="none"
        opacity="0.4"
      />
      <polyline
        points="0,300 200,200 400,250 600,150 800,200 1000,100 1200,150 1440,80"
        stroke="#a78bfa"
        strokeWidth="2"
        fill="none"
        opacity="0.2"
      />
      {/* Glowing nodes */}
      {[200, 400, 600, 800, 1000, 1200].map((x, i) => (
        <circle
          key={x}
          cx={x}
          cy={i % 2 === 0 ? 300 : 250}
          r="8"
          fill="#c084fc"
          filter="url(#glow)"
        />
      ))}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
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
    delaySpeed: 2000,
  });
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
        background: 'radial-gradient(ellipse at 60% 40%, #23243a 0%, #a78bfa 100%)',
      }}
    >
      {/* Purple mesh SVG background */}
      <MeshBackground />
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ flex: 1, paddingLeft: '8vw', zIndex: 2 }}
      >
        <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '1.2rem', lineHeight: 1.1 }}>
          <span>{text}</span>
          <span className="typewriter-cursor" style={{ color: 'var(--accent-alt)', fontWeight: 400 }}>|</span>
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '2.2rem', maxWidth: 520 }}
        >
          Bridging Data, Automation & Strategy — One Solution at a Time.
        </motion.div>
        <motion.a
          href="#contact"
          className="cta-btn"
          whileHover={{ scale: 1.08, background: 'var(--accent-alt)', color: '#fff', boxShadow: '0 4px 24px #e6000044' }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{ fontWeight: 700, fontSize: 18, padding: '0.9rem 2.4rem', borderRadius: 32, background: 'var(--accent)', color: '#fff', border: 'none', outline: 'none', cursor: 'pointer', boxShadow: '0 2px 16px #e6000033', textDecoration: 'none', display: 'inline-block' }}
        >
          Let's Connect
        </motion.a>
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
            boxShadow: '0 4px 32px #e6000044',
            border: '4px solid var(--accent)',
            background: '#23243a',
            filter: 'drop-shadow(0 0 24px var(--accent-alt))',
          }}
        />
      </motion.div>
    </section>
  );
} 
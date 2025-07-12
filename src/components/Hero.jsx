import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import profileImg from '../assets/portfolio.jpg';

const particles = Array.from({ length: 18 }, (_, i) => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: 10 + Math.random() * 18,
  delay: Math.random() * 2,
}));

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
    <section className="section glass" id="hero" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '70vh', overflow: 'hidden' }}>
      {/* Subtle animated background particles */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.18, scale: 1 }}
            transition={{ delay: p.delay, duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
            style={{
              position: 'absolute',
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent), var(--accent-alt))',
              filter: 'blur(2px)',
            }}
          />
        ))}
      </div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ flex: 1, paddingLeft: '8vw', zIndex: 1 }}
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
        style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 320, zIndex: 1 }}
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
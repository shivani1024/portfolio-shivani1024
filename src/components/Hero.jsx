import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import profileImg from '../assets/portfolio.jpg';

function MeshBackground() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 600"
      fill="none"
      className="absolute inset-0 z-0 pointer-events-none opacity-30"
    >
      <polyline points="0,400 200,300 400,350 600,250 800,300 1000,200 1200,250 1440,180" stroke="#4c1d95" strokeWidth="1.5" fill="none" opacity="0.6" />
      <polyline points="0,300 200,200 400,250 600,150 800,200 1000,100 1200,150 1440,80" stroke="#581c87" strokeWidth="1.5" fill="none" opacity="0.4" />
      <polygon points="100,100 150,150 100,200 50,150" fill="#7c3aed" opacity="0.1" />
      <polygon points="1200,300 1250,350 1200,400 1150,350" fill="#8b5cf6" opacity="0.1" />
      {[200, 400, 600, 800, 1000, 1200].map((x, i) => (
        <circle key={x} cx={x} cy={i % 2 === 0 ? 300 : 250} r="6" fill="#a855f7" filter="url(#glow)" />
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

function FloatingText({ text, delay = 0 }) {
  return (
    <motion.div
      className="hidden md:block absolute text-xl font-light text-purple-400 opacity-30 z-10 pointer-events-none"
      animate={{ y: [-20, 20, -20], x: [-10, 10, -10], rotate: [-2, 2, -2] }}
      transition={{ duration: 8, repeat: Infinity, delay, ease: "easeInOut" }}
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col-reverse md:flex-row-reverse items-center justify-center min-h-[70vh] w-full px-4 md:px-16 py-8 md:py-0 overflow-hidden bg-gradient-to-br from-[#0f0f23] via-[#1e1b4b] to-[#312e81]"
    >
      <MeshBackground />
      <FloatingText text="DATA" delay={0} />
      <FloatingText text="AUTOMATION" delay={2} />
      <FloatingText text="ENGINEERING" delay={4} />
      <FloatingText text="STRATEGY" delay={6} />
      {/* Image right on desktop, below on mobile */}
      <div className="flex justify-center items-center w-full md:w-auto md:ml-12 mb-8 md:mb-0 z-10">
        <motion.img
          src={profileImg}
          alt="Shivani Sawant"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-28 h-28 md:w-60 md:h-60 rounded-full object-cover object-[center_30%] border-4 border-purple-400 bg-[#1e1b4b] shadow-lg"
          style={{ filter: 'drop-shadow(0 0 16px rgba(168, 85, 247, 0.3))' }}
        />
      </div>
      {/* Text and buttons left on desktop, above on mobile */}
      <div className="flex flex-col items-center md:items-start justify-center w-full md:w-[32rem] z-10">
        <motion.h1
          className="text-2xl md:text-4xl font-extrabold text-gray-200 mb-3 md:mb-6 leading-tight md:leading-tight max-w-xl"
          animate={{
            textShadow: [
              '0 0 15px rgba(168, 85, 247, 0.3)',
              '0 0 20px rgba(168, 85, 247, 0.5)',
              '0 0 15px rgba(168, 85, 247, 0.3)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="relative">
            {text}
            <motion.span
              className="absolute top-0 left-0 text-red-400 opacity-0"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
              animate={{ opacity: [0, 1, 0], x: [-2, 2, -2] }}
              transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
            >
              {text}
            </motion.span>
          </span>
          <span className="text-purple-400 font-normal">|</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-lg text-center md:text-left font-light tracking-wide"
        >
          Bridging Data, Automation & Strategy — One Solution at a Time.
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row gap-3 md:gap-5 w-full md:w-auto items-center md:items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.08, background: '#a855f7', color: '#fff', boxShadow: '0 4px 24px rgba(168, 85, 247, 0.4)', textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="font-bold text-base md:text-lg px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 text-white shadow-md relative overflow-hidden w-full md:w-auto"
          >
            Let's Connect
          </motion.button>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, color: '#a855f7', boxShadow: '0 4px 24px rgba(168, 85, 247, 0.3)', borderColor: '#a855f7' }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="font-bold text-base md:text-lg px-6 py-3 rounded-full border-2 border-purple-400 text-gray-200 bg-transparent shadow-md w-full md:w-auto text-center"
          >
            View Resume
          </motion.a>
          <motion.a
            href="mailto:shivani41641@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, color: '#a855f7', boxShadow: '0 4px 24px rgba(168, 85, 247, 0.3)', borderColor: '#a855f7', background: 'rgba(168, 85, 247, 0.08)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-purple-400 bg-purple-400/20 text-purple-400 shadow-md"
            aria-label="Email"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shivani-sawant-79a823151/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, color: '#a855f7', boxShadow: '0 4px 24px rgba(168, 85, 247, 0.3)', borderColor: '#a855f7', background: 'rgba(168, 85, 247, 0.08)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-purple-400 bg-purple-400/20 text-purple-400 shadow-md"
            aria-label="LinkedIn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="4"/><path d="M8 11v5" stroke="#fff" strokeWidth="2"/><circle cx="8" cy="8" r="1.5" fill="#fff"/><path d="M12 11v5m0-5h2.5a2.5 2.5 0 0 1 2.5 2.5V16" stroke="#fff" strokeWidth="2"/></svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 
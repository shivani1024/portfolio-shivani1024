import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import profileImg from '../assets/portfolio.jpg';

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

  return (
    <section className="relative z-10 overflow-hidden px-4 py-12 md:px-16 lg:px-24 bg-gradient-to-br from-[#0f0f23] via-[#1e1b4b] to-[#312e81] min-h-[70vh] flex flex-col-reverse md:flex-row items-center md:justify-center gap-y-8 md:gap-x-12">
      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-xl">
        <motion.h1 
          className="text-2xl md:text-4xl font-bold text-gray-100 mb-4 break-words"
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
          <span className="relative">
            {text}
            {/* Glitch effect overlay */}
            <motion.span
              className="absolute top-0 left-0 text-red-400 opacity-0"
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
          <span className="text-purple-400 font-normal">|</span>
        </motion.h1>
        <motion.p
          className="text-sm md:text-lg text-gray-300 mb-4 max-w-lg mx-auto md:mx-0 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Bridging Data, Automation & Strategy — One Solution at a Time.
        </motion.p>
        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 items-center md:items-start mt-6 w-full md:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="font-bold text-base md:text-lg px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-400 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all w-full md:w-auto"
          >
            Let's Connect
          </motion.button>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="font-bold text-base md:text-lg px-6 py-3 rounded-2xl border-2 border-purple-400 text-purple-200 bg-transparent shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all w-full md:w-auto text-center"
          >
            View Resume
          </motion.a>
          <motion.a
            href="mailto:shivani41641@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-purple-400 text-purple-400 bg-transparent shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
            aria-label="Email"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shivani-sawant-79a823151/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-purple-400 text-purple-400 bg-transparent shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
            aria-label="LinkedIn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="4"/><path d="M8 11v5" stroke="#fff" strokeWidth="2"/><circle cx="8" cy="8" r="1.5" fill="#fff"/><path d="M12 11v5m0-5h2.5a2.5 2.5 0 0 1 2.5 2.5V16" stroke="#fff" strokeWidth="2"/></svg>
          </motion.a>
        </motion.div>
      </div>
      {/* Profile Image */}
      <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
        <motion.img
          src={profileImg}
          alt="Shivani Sawant"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover border-4 border-purple-500 shadow-lg bg-[#1e1b4b]"
        />
      </div>
    </section>
  );
} 
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');
  const [hidden, setHidden] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('dark-mode', dark);
  }, [dark]);
  useEffect(() => {
    let lastScroll = window.scrollY;
    const onScroll = () => {
      // Hide on scroll down, show on scroll up
      const curr = window.scrollY;
      setHidden(curr > 80 && curr > lastScroll);
      lastScroll = curr;
      // Scrollspy
      const offsets = navLinks.map(link => {
        const el = document.getElementById(link.id);
        return el ? el.offsetTop - 120 : 0;
      });
      const idx = offsets.findIndex((off, i) =>
        window.scrollY < (offsets[i + 1] || Infinity)
      );
      setActive(navLinks[Math.max(0, idx)].id);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="sticky-navbar glass desktop-navbar" style={{ top: hidden ? -80 : 0, zIndex: 100 }}>
      <nav className="navbar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.8rem 4vw' }}>
        <div className="nav-logo" style={{ fontWeight: 800, fontSize: 22, letterSpacing: 1, color: 'var(--accent)' }}>Shivani Sawant</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div className="nav-links" style={{ display: 'flex', gap: 24 }}>
            {navLinks.map(link => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link${active === link.id ? ' active' : ''}`}
                whileHover={{ scale: 1.08, color: 'var(--accent)' }}
                style={{
                  position: 'relative',
                  color: active === link.id ? 'var(--accent)' : '#fff',
                  fontWeight: 600,
                  fontSize: 18,
                  textDecoration: 'none',
                  padding: '0.4rem 1.1rem',
                  borderRadius: 8,
                  transition: 'color 0.2s, background 0.2s',
                  overflow: 'hidden',
                }}
              >
                {link.label}
                <motion.span
                  layoutId="underline"
                  style={{
                    display: active === link.id ? 'block' : 'none',
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    height: 3,
                    background: 'linear-gradient(90deg, var(--accent), var(--accent-alt))',
                    borderRadius: 2,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              </motion.a>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 16, marginLeft: 24 }}>
            <motion.a whileHover={{ scale: 1.2, color: 'var(--accent)' }} href="https://www.linkedin.com/in/shivani-sawant-79a823151/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-alt)', fontSize: 22 }}><FaLinkedin /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: 'var(--accent)' }} href="https://github.com/shivani1024" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-alt)', fontSize: 22 }}><FaGithub /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: 'var(--accent)' }} href="mailto:shivani41641@gmail.com" style={{ color: 'var(--accent-alt)', fontSize: 22 }}><FaEnvelope /></motion.a>
          </div>
        </div>
      </nav>
    </div>
  );
} 
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const projects = [
  {
    title: 'Project One',
    desc: 'Short description of project one. Modern, scalable, and fast.',
    img: '[Screenshot]',
    github: '#',
    demo: '#',
    details: 'Detailed info about Project One. Technologies, features, and more.'
  },
  {
    title: 'Project Two',
    desc: 'Short description of project two. Automation and analytics.',
    img: '[Screenshot]',
    github: '#',
    demo: '#',
    details: 'Detailed info about Project Two. Technologies, features, and more.'
  },
  {
    title: 'Project Three',
    desc: 'Short description of project three. Cloud and integration.',
    img: '[Screenshot]',
    github: '#',
    demo: '#',
    details: 'Detailed info about Project Three. Technologies, features, and more.'
  },
];

export default function Projects() {
  const [modal, setModal] = useState(null);
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      <motion.div
        className="projects-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, padding: '0 8vw' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            className="project-card"
            style={{ background: '#f8f8ff', borderRadius: 16, boxShadow: '0 2px 16px #a084f522', padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 320, cursor: 'pointer' }}
            whileHover={{ scale: 1.03, boxShadow: '0 6px 32px #a084f555' }}
            transition={{ type: 'spring', stiffness: 200 }}
            onClick={() => setModal(proj)}
          >
            <div style={{ width: 220, height: 120, background: '#e9e6f7', borderRadius: 12, marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a084f5', fontWeight: 600 }}>
              {proj.img}
            </div>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>{proj.title}</div>
            <div style={{ color: '#23243a', fontSize: 16, marginBottom: 18, textAlign: 'center' }}>{proj.desc}</div>
            <div style={{ display: 'flex', gap: 16 }}>
              <a href={proj.github} className="button" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}><FaGithub /> GitHub</a>
              <a href={proj.demo} className="button" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}><FaExternalLinkAlt /> Demo</a>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* Modal popup for project details */}
      <AnimatePresence>
        {modal && (
          <motion.div
            className="modal-overlay"
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(30,30,40,0.7)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
          >
            <motion.div
              className="modal-content"
              style={{ background: '#fff', borderRadius: 18, padding: 32, minWidth: 320, maxWidth: 420, boxShadow: '0 8px 48px #a084f555', position: 'relative' }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setModal(null)} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: 22, color: '#a084f5', cursor: 'pointer' }} aria-label="Close"><FaTimes /></button>
              <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 12 }}>{modal.title}</div>
              <div style={{ color: '#23243a', fontSize: 16, marginBottom: 18 }}>{modal.details}</div>
              <div style={{ display: 'flex', gap: 16 }}>
                <a href={modal.github} className="button" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
                <a href={modal.demo} className="button" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Demo</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 
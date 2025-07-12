import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <h2 className="section-title">Contact</h2>
      <motion.div
        className="contact-content"
        style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start', padding: '0 8vw' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <form style={{ flex: 1, minWidth: 260, maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 18, background: '#f8f8ff', borderRadius: 16, padding: 24, boxShadow: '0 2px 16px #a084f522' }}>
          <input type="text" placeholder="Name" style={{ padding: 12, borderRadius: 8, border: '1px solid #e0e0e0', fontSize: 16 }} />
          <input type="email" placeholder="Email" style={{ padding: 12, borderRadius: 8, border: '1px solid #e0e0e0', fontSize: 16 }} />
          <textarea placeholder="Message" rows={4} style={{ padding: 12, borderRadius: 8, border: '1px solid #e0e0e0', fontSize: 16 }} />
          <button className="cta-btn" type="submit">Send Message</button>
        </form>
        <div style={{ flex: 1, minWidth: 220 }}>
          <div style={{ marginBottom: 24, display: 'flex', gap: 18 }}>
            <motion.a whileHover={{ scale: 1.2, color: '#a084f5' }} href="https://www.linkedin.com/in/shivani-sawant-79a823151/" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', fontSize: 28 }}><FaLinkedin /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: '#a084f5' }} href="https://github.com/shivani1024" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', fontSize: 28 }}><FaGithub /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: '#a084f5' }} href="mailto:shivani41641@gmail.com" style={{ color: '#7c3aed', fontSize: 28 }}><FaEnvelope /></motion.a>
          </div>
          <div style={{ color: '#fff', fontSize: 16, marginBottom: 8 }}><FaMapMarkerAlt style={{ color: '#a084f5', marginRight: 8 }} /> Amherst, MA, USA</div>
          <div style={{ color: '#a084f5', fontWeight: 600 }}>Open to new opportunities & collaborations!</div>
        </div>
      </motion.div>
    </section>
  );
} 
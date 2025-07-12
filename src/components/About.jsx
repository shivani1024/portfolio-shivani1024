import { motion } from 'framer-motion';
import { FaJava, FaPython, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';
import profileImg from '../assets/portfolio.jpg';
import aboutImg from '../assets/1.jpeg';

const skills = [
  { icon: <FaJava />, label: 'Java', level: 90 },
  { icon: <FaPython />, label: 'Python', level: 85 },
  { icon: <FaDatabase />, label: 'SQL', level: 80 },
  { icon: <FaCloud />, label: 'Oracle Cloud', level: 75 },
  { icon: <FaRobot />, label: 'Automation', level: 80 },
];

export default function About() {
  return (
    <section className="section" id="about" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--section-bg)'}}>
      <motion.div
        className="about-text"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ flex: 1, paddingLeft: '8vw' }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="section-content" style={{ marginBottom: 32 }}>
          Engineering Management Master's student and former Oracle Consultant at PwC, specialized in BI reports, OIC integrations, and automated workflows. Proficient in Java, Python, SQL, and cloud systems.
          <div className="location" style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16, color: '#fff' }}>
            <svg width="22" height="22" fill="currentColor" style={{ color: 'var(--accent)' }} viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            Amherst, MA, USA
          </div>
        </div>
        <div className="skills-row">
          {skills.map(skill => (
            <div key={skill.label} style={{ minWidth: 90, textAlign: 'center' }}>
              <div style={{ fontSize: 32, color: 'var(--accent)' }}>{skill.icon}</div>
              <div style={{ fontWeight: 600, marginTop: 8, color: '#fff' }}>{skill.label}</div>
              <motion.div style={{ background: '#23243a', borderRadius: 8, height: 8, marginTop: 8 }}>
                <motion.div
                  style={{ background: 'var(--accent)', height: 8, borderRadius: 8 }}
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level + '%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="about-photo"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 240 }}
      >
        <img src={aboutImg} alt="Shivani Sawant" style={{ width: 180, height: 180, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 32px #00e0d655', border: '3px solid var(--accent)' }} />
      </motion.div>
    </section>
  );
} 
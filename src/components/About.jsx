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
    <section className="section" id="about" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#23243a',
      borderRadius: 24,
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
      padding: '3rem 2rem',
      margin: '2rem auto',
      maxWidth: 1400,
      color: '#e0e0e0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <motion.div
        className="about-text"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ flex: 1, paddingLeft: '4vw', textAlign: 'left' }}
      >
        <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#a855f7', marginBottom: 24 }}>About Me</h2>
        <div style={{ fontSize: '1.25rem', marginBottom: 32, color: '#e0e0e0', fontWeight: 400 }}>
          Engineering Management Master's student and former Oracle Consultant at PwC, specialized in BI reports, OIC integrations, and automated workflows.<br/>
          Proficient in <b>Java, Python, SQL, and cloud systems</b>.<br/>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16, color: '#c084fc', fontWeight: 500 }}>
            <svg width="22" height="22" fill="currentColor" style={{ color: '#a855f7' }} viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            Amherst, MA, USA
          </div>
        </div>
        <div style={{ display: 'flex', gap: 32, marginTop: 32, justifyContent: 'flex-start', flexWrap: 'wrap' }}>
          {skills.map(skill => (
            <div key={skill.label} style={{ minWidth: 110, textAlign: 'center' }}>
              <div style={{ fontSize: 36, color: '#a855f7', marginBottom: 8 }}>{skill.icon}</div>
              <div style={{ fontWeight: 700, color: '#fff', marginBottom: 6 }}>{skill.label}</div>
              <motion.div style={{ background: '#23243a', borderRadius: 8, height: 8, marginTop: 0 }}>
                <motion.div
                  style={{ background: 'linear-gradient(90deg, #a855f7 0%, #c084fc 100%)', height: 8, borderRadius: 8 }}
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
        <img src={aboutImg} alt="Shivani Sawant" style={{ width: 220, height: 220, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 0 32px #a855f7', border: '4px solid #a855f7', background: '#1e1b4b' }} />
      </motion.div>
    </section>
  );
} 
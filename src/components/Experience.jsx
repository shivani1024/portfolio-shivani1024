import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCloud, FaRobot } from 'react-icons/fa';

const timeline = [
  {
    icon: <FaBriefcase />,
    title: 'Oracle Technical Associate at PwC',
    date: 'Jul 2023 - Dec 2023',
    desc: 'Led FBDI GL and Projects conversion, upgraded OIC integrations, and reduced migration time by 20%.',
  },
  {
    icon: <FaBriefcase />,
    title: 'Oracle Technical Associate at PwC',
    date: 'Aug 2021 – Jul 2023',
    desc: 'Led a team building 15+ Oracle BI reports, developed UiPath automation, and created technical documentation suite.',
  },
  {
    icon: <FaBriefcase />,
    title: 'Oracle Technical Intern at PwC',
    date: 'Mar 2021 - Jul 2021',
    desc: 'Engineered Java automation tool, earned PwC Achievers’ Award, and developed FRS reports for Fortune 500 clients.',
  },
  {
    icon: <FaGraduationCap />,
    title: 'M.S. Engineering Management, UMass Amherst',
    date: '2023 - 2025',
    desc: 'GPA: 3.8',
  },
  {
    icon: <FaGraduationCap />,
    title: 'B.E. Computer Science, KLS Gogte Institute',
    date: '2017 - 2021',
    desc: 'GPA: 3.6',
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience & Education</h2>
      <motion.div
        className="timeline"
        style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: '0 8vw', position: 'relative' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {timeline.map((item, i) => (
          <motion.div
            key={item.title + i}
            className="timeline-item"
            style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div style={{ fontSize: 32, color: 'var(--accent-dark)', minWidth: 40 }}>{item.icon}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, color: 'var(--accent-dark)' }}>{item.title}</div>
              <div style={{ fontSize: 15, color: '#a084f5', marginBottom: 4 }}>{item.date}</div>
              <div style={{ color: '#23243a', fontSize: 15 }}>{item.desc}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 
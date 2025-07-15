import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import React, { useState } from 'react';

const experienceData = [
  {
    title: 'Oracle Technical Associate at PricewaterhouseCoopers (PwC)',
    date: 'Aug 2021 – Dec 2023',
    details: [
      {
        subtitle: 'Client – MGM Resorts International, USA',
        date: 'Jul 2023 - Dec 2023',
        bullets: [
          'Led comprehensive FBDI GL and Projects conversion, migrating 10,000+ accounting entries while maintaining data integrity',
          'Designed and upgraded OIC integrations, processing 1000+ weekly flat files, achieving 99.8% processing accuracy',
          'Reduced system migration time by 20% through strategic UAT planning and efficient Production Instance deployment',
        ],
      },
      {
        subtitle: 'Client – Hilton Grand Vacations, USA',
        date: 'Aug 2021 – Jul 2023',
        bullets: [
          'Spearheaded a four-member technical team building 15+ custom Oracle BI reports across financial modules, delivering 100% of requirements on time while reducing stakeholder review cycles by 30%',
          'Developed UiPath automation, reducing manual configuration in SIT and UAT by 40%, accelerating deployment timelines by 25%',
          'Designed Global/Local Chart of Account structures for HGV entities, enabling financial consolidation across international markets',
          'Led the critical upgrade of financial components across financial modules, reducing month-end close processing time by 35%',
          'Automated invoice processing workflow using IDR, reducing processing time by 60% and achieving 80% accuracy',
          'Designed and implemented 12+ RTF payment templates, processing monthly transactions across multiple banking institutions (Bank of America, Wells Fargo), cutting check generation time by 40% and eliminating processing errors',
          'Created a comprehensive technical documentation suite, including 10+ SOPs that reduced support escalations by 45%',
        ],
      },
    ],
  },
  {
    title: 'Oracle Technical Intern at PricewaterhouseCoopers (PwC)',
    date: 'Mar 2021 – Jul 2021',
    details: [
      {
        bullets: [
          'Engineered Java automation tool reducing report generation by 70%, saving 15 hours weekly across 50+ monthly reports',
          "Earned PwC Achievers' Award (top 5% of associates) for automation proposal that saved operational costs",
          'Developed and updated Financial Reporting Studio (FRS) reports for Fortune 500 clients, streamlining financial analysis processes and enabling data-driven decision-making',
        ],
      },
    ],
  },
];

export default function Experience() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience</h2>
      <motion.div
        className="timeline"
        style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: '0 8vw', position: 'relative' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {experienceData.map((item, i) => (
          <motion.div
            key={item.title + i}
            className="timeline-item"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, cursor: 'pointer', background: '#f3e8ff', borderRadius: 12, padding: 20, boxShadow: openIdx === i ? '0 4px 24px #a855f755' : 'none' }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ fontSize: 32, color: 'var(--accent-dark)', minWidth: 40 }}><FaBriefcase /></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18, color: 'var(--accent-dark)' }}>{item.title}</div>
                <div style={{ fontSize: 15, color: '#a084f5', marginBottom: 4 }}>{item.date}</div>
              </div>
            </div>
            {openIdx === i && (
              <div style={{ marginTop: 12, marginLeft: 56 }}>
                {item.details.map((detail, j) => (
                  <div key={j} style={{ marginBottom: 16 }}>
                    {detail.subtitle && <div style={{ fontWeight: 600, color: '#a855f7', fontSize: 16 }}>{detail.subtitle} <span style={{ color: '#a084f5', fontWeight: 400, fontSize: 14, marginLeft: 8 }}>{detail.date}</span></div>}
                    <ul style={{ margin: '8px 0 0 18px', color: '#23243a', fontSize: 15 }}>
                      {detail.bullets.map((b, k) => <li key={k} style={{ marginBottom: 4 }}>{b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 
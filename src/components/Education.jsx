import React, { useState } from 'react';

const educationData = [
  {
    school: 'University of Massachusetts Amherst',
    degree: 'Master of Science in Engineering Management',
    gpa: '3.8',
    grad: 'Dec 2025',
    coursework: [
      'Project Budgeting and Finance',
      'Predictive Analysis and Statistical Learning',
      'Engineering Leadership and Entrepreneurship',
      'Descriptive Analytics',
      'Technical Project Management',
      'Data Mining in Business',
    ],
  },
  {
    school: 'KLS Gogte Institute of Technology',
    degree: 'Bachelor of Engineering in Computer Science Engineering',
    gpa: '3.6',
    grad: 'Aug 2021',
    coursework: [
      'Cloud Computing',
      'Artificial Intelligence',
      'Data Science',
      'Embedded Systems and IoT',
      'Mobile Computing and Apps',
      'Software Testing',
      'Design and Analysis of Algorithms',
      'Database Management System',
      'Object Oriented Programming',
    ],
  },
];

export default function Education() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section id="education" style={{
      padding: '4rem 2rem',
      background: 'rgba(30, 27, 75, 0.35)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(168, 85, 247, 0.12)',
      borderRadius: 24,
      maxWidth: 1200,
      margin: '2rem auto',
      color: '#e0e0e0',
      textAlign: 'center',
    }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem', color: '#a855f7' }}>
        Education
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
        {educationData.map((item, i) => (
          <div
            key={item.school}
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            style={{
              background: 'rgba(168, 85, 247, 0.10)',
              border: '1px solid rgba(168, 85, 247, 0.18)',
              borderRadius: 16,
              boxShadow: openIdx === i ? '0 4px 24px #a855f755' : 'none',
              padding: '1.5rem 2rem',
              minWidth: 340,
              maxWidth: 600,
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'box-shadow 0.2s',
            }}
          >
            <div style={{ fontWeight: 700, fontSize: 20, color: '#c084fc' }}>{item.degree}</div>
            <div style={{ fontWeight: 600, fontSize: 17, color: '#e0e0e0', marginBottom: 4 }}>{item.school}</div>
            <div style={{ color: '#a855f7', fontWeight: 600, fontSize: 15 }}>{item.grad} | GPA: {item.gpa}</div>
            {openIdx === i && (
              <div style={{ marginTop: 12 }}>
                <div style={{ color: '#c084fc', fontWeight: 600, marginBottom: 6 }}>Relevant Coursework:</div>
                <ul style={{ margin: 0, paddingLeft: 18, color: '#e0e0e0', fontSize: 15 }}>
                  {item.coursework.map((c, j) => <li key={j}>{c}</li>)}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 
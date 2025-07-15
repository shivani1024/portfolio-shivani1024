import React from 'react';

export default function Education() {
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
      <div style={{ fontSize: '1.3rem', color: '#e0e0e0', marginBottom: 16, fontWeight: 500 }}>
        <span style={{ color: '#c084fc', fontWeight: 700 }}>M.S. in Engineering Management</span><br/>
        University of Massachusetts Amherst<br/>
        <span style={{ color: '#a855f7', fontWeight: 600 }}>2023 - 2025 (Expected)</span>
      </div>
      <div style={{ fontSize: '1.1rem', color: '#e0e0e0', marginBottom: 8 }}>
        <span style={{ color: '#c084fc', fontWeight: 700 }}>B.E. in Computer Engineering</span><br/>
        University of Mumbai<br/>
        <span style={{ color: '#a855f7', fontWeight: 600 }}>2017 - 2021</span>
      </div>
    </section>
  );
} 
import React from 'react';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#e0e0e0',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        background: 'rgba(36, 18, 60, 0.35)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(168, 85, 247, 0.12)'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 800,
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #a855f7, #c084fc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Shivani Sawant
        </h1>
        <p style={{
          fontSize: '1.5rem',
          marginBottom: '2rem',
          color: '#c084fc',
          fontWeight: 500
        }}>
          Engineering Management Master's Student | Former Oracle Technical Associate at PwC
        </p>
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '600px',
          lineHeight: '1.6',
          color: '#e0e0e0'
        }}>
          Passionate about technology consulting and data engineering. 
          Seeking opportunities to leverage technical expertise and leadership skills 
          in dynamic consulting environments.
        </p>
      </section>

      {/* Skills Section */}
      <section style={{
        padding: '4rem 2rem',
        background: 'rgba(30, 27, 75, 0.35)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(168, 85, 247, 0.12)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#a855f7'
          }}>
            Technical Skills
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'rgba(168, 85, 247, 0.1)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
              <h3 style={{ color: '#c084fc', marginBottom: '1rem' }}>Programming</h3>
              <p>Java, Python, SQL, JavaScript, React</p>
            </div>
            <div style={{
              background: 'rgba(168, 85, 247, 0.1)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
              <h3 style={{ color: '#c084fc', marginBottom: '1rem' }}>Tools & Platforms</h3>
              <p>Oracle, AWS, Git, Docker, Kubernetes</p>
            </div>
            <div style={{
              background: 'rgba(168, 85, 247, 0.1)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
              <h3 style={{ color: '#c084fc', marginBottom: '1rem' }}>Leadership</h3>
              <p>Project Management, Team Leadership, Strategic Planning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section style={{
        padding: '4rem 2rem',
        background: 'rgba(36, 18, 60, 0.35)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(168, 85, 247, 0.12)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#a855f7'
          }}>
            Experience
          </h2>
          <div style={{
            background: 'rgba(168, 85, 247, 0.1)',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid rgba(168, 85, 247, 0.2)',
            marginBottom: '2rem'
          }}>
            <h3 style={{ color: '#c084fc', marginBottom: '0.5rem' }}>
              Oracle Technical Associate - PwC
            </h3>
            <p style={{ color: '#e0e0e0', marginBottom: '1rem' }}>
              Led technical implementations and provided consulting services for enterprise clients.
            </p>
          </div>
          <div style={{
            background: 'rgba(168, 85, 247, 0.1)',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid rgba(168, 85, 247, 0.2)'
          }}>
            <h3 style={{ color: '#c084fc', marginBottom: '0.5rem' }}>
              Engineering Management Master's Student - UMass
            </h3>
            <p style={{ color: '#e0e0e0' }}>
              Currently pursuing advanced studies in engineering management and leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section style={{
        padding: '4rem 2rem',
        background: 'rgba(30, 27, 75, 0.35)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(168, 85, 247, 0.12)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#a855f7'
          }}>
            Projects
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'rgba(168, 85, 247, 0.1)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
              <h3 style={{ color: '#c084fc', marginBottom: '1rem' }}>Portfolio Website</h3>
              <p style={{ color: '#e0e0e0', marginBottom: '1rem' }}>
                Modern React portfolio with dark theme, animations, and responsive design.
              </p>
              <p style={{ color: '#a855f7', fontSize: '0.9rem' }}>React • TypeScript • CSS3</p>
            </div>
            <div style={{
              background: 'rgba(168, 85, 247, 0.1)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
              <h3 style={{ color: '#c084fc', marginBottom: '1rem' }}>Travel Blog</h3>
              <p style={{ color: '#e0e0e0', marginBottom: '1rem' }}>
                Personal travel and food blog documenting adventures across the U.S.
              </p>
              <p style={{ color: '#a855f7', fontSize: '0.9rem' }}>WordPress • Content Creation • Photography</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section - Positioned right above contact info */}
      <About />

      {/* Contact Section - Bottom most */}
      <section style={{
        padding: '3rem 2rem',
        background: 'rgba(36, 18, 60, 0.35)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(168, 85, 247, 0.12)'
      }}>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          textAlign: 'center' 
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: '2rem',
            color: '#a855f7'
          }}>
            Get In Touch
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center'
          }}>
            <p style={{
              fontSize: '1.2rem',
              color: '#e0e0e0',
              marginBottom: '1rem'
            }}>
              I'm always open to discussing new opportunities and collaborations.
            </p>
            <div style={{
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <a 
                href="mailto:shivani41641@gmail.com"
                style={{
                  color: '#c084fc',
                  textDecoration: 'none',
                  padding: '0.75rem 1.5rem',
                  border: '2px solid #a855f7',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  background: 'rgba(168, 85, 247, 0.1)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(168, 85, 247, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(168, 85, 247, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                📧 Email Me
              </a>
              <a 
                href="https://linkedin.com/in/shivani-sawant"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#c084fc',
                  textDecoration: 'none',
                  padding: '0.75rem 1.5rem',
                  border: '2px solid #a855f7',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  background: 'rgba(168, 85, 247, 0.1)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(168, 85, 247, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(168, 85, 247, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                💼 LinkedIn
              </a>
              <a 
                href="https://github.com/shivani1024"
          target="_blank"
          rel="noopener noreferrer"
                style={{
                  color: '#c084fc',
                  textDecoration: 'none',
                  padding: '0.75rem 1.5rem',
                  border: '2px solid #a855f7',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  background: 'rgba(168, 85, 247, 0.1)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(168, 85, 247, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(168, 85, 247, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                🐙 GitHub
              </a>
            </div>
            <p style={{
              fontSize: '1rem',
              color: '#c084fc',
              marginTop: '2rem',
              fontStyle: 'italic'
            }}>
              Based in Massachusetts, open to remote and relocation opportunities
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

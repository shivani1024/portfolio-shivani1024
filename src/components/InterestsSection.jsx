import React, { useEffect, useState } from 'react';

const BLOG_API = 'https://public-api.wordpress.com/rest/v1.1/sites/travelingepicure.wordpress.com/posts/?number=2';

export default function InterestsSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(BLOG_API)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts || []);
        setLoading(false);
      })
      .catch((err) => {
        setError('Could not load blog posts.');
        setLoading(false);
      });
  }, []);

  return (
    <section id="interests-blog" style={{
      padding: '4rem 2rem',
      background: 'rgba(36, 18, 60, 0.35)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(168, 85, 247, 0.12)',
      borderRadius: 24,
      maxWidth: 1200,
      margin: '3rem auto',
      color: '#e0e0e0',
      textAlign: 'center',
    }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem', color: '#a855f7' }}>
        My Interests: Travel & Food Blog
      </h2>
      <p style={{ color: '#c084fc', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
        Exploring the world, one adventure at a time. Read my latest stories from <a href="https://travelingepicure.wordpress.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#a855f7', textDecoration: 'underline' }}>travelingepicure.wordpress.com</a>
      </p>
      {loading && <div style={{ color: '#a855f7', fontSize: 20 }}>Loading blog posts...</div>}
      {error && <div style={{ color: 'salmon', fontSize: 18 }}>{error}</div>}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem',
        marginTop: '2rem',
      }}>
        {posts.map((post) => {
          // Try to get a featured image from attachments or content
          let imageUrl = '';
          if (post.featured_image) {
            imageUrl = post.featured_image;
          } else if (post.attachments && Object.values(post.attachments).length > 0) {
            const firstImg = Object.values(post.attachments)[0];
            imageUrl = firstImg.URL;
          }
          return (
            <div key={post.ID} style={{
              background: 'rgba(168, 85, 247, 0.10)',
              border: '1px solid rgba(168, 85, 247, 0.18)',
              borderRadius: 18,
              boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.12)',
              padding: '2rem',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 340,
              position: 'relative',
              overflow: 'hidden',
            }}>
              {imageUrl && (
                <img src={imageUrl} alt={post.title} style={{
                  width: '100%',
                  maxHeight: 180,
                  objectFit: 'cover',
                  borderRadius: 12,
                  marginBottom: 18,
                  boxShadow: '0 2px 12px #a855f755',
                  background: '#1e1b4b',
                }} />
              )}
              <h3 style={{ color: '#c084fc', fontWeight: 700, fontSize: 24, marginBottom: 10 }}>{post.title}</h3>
              <div style={{ color: '#e0e0e0', fontSize: 16, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              <a href={post.URL} target="_blank" rel="noopener noreferrer" style={{
                color: '#a855f7',
                fontWeight: 600,
                textDecoration: 'underline',
                marginTop: 'auto',
                fontSize: 16,
              }}>
                Read Full Story →
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
} 
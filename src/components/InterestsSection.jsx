import React, { useState, useEffect } from 'react';

const cityData = [
  {
    name: 'New York City',
    images: [
      'https://i.imgur.com/gjMuj9B.jpg',
      'https://i.imgur.com/Saa5ytm.jpg',
      'https://i.imgur.com/514MUkN.jpg',
    ],
    description: 'New York City',
  },
  {
    name: 'Boston',
    images: [
      'https://i.imgur.com/YqJnGBK.jpg',
      'https://i.imgur.com/ma6OigG.jpg',
      'https://i.imgur.com/eKT7exr.jpg',
    ],
    description: 'Boston',
  },
  {
    name: 'Miami',
    images: [
      'https://i.imgur.com/wir3RIG.jpg',
      'https://i.imgur.com/HKhXe3E.jpg',
      'https://i.imgur.com/8TYkn5y.jpg',
    ],
    description: 'Miami',
  },
  {
    name: 'Washington DC',
    images: [
      'https://i.imgur.com/QxI4EWW.jpg',
      'https://i.imgur.com/OyQIOC8.jpg',
      'https://i.imgur.com/mZIOIsy.jpg',
    ],
    description: 'Washington DC',
  },
  {
    name: 'Niagara Falls',
    images: [
      'https://i.imgur.com/ZcVIgZr.jpg',
      'https://i.imgur.com/CMMxzFw.jpg',
      'https://i.imgur.com/C5flBdd.jpg',
    ],
    description: 'Niagara Falls',
  },
];

function ImageWithFallback({ src, alt, ...props }) {
  const [error, setError] = useState(false);
  return error ? (
    <div style={{
      width: 180,
      height: 120,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#1e1b4b',
      color: '#a855f7',
      borderRadius: 12,
      border: '1.5px solid #a855f7',
      fontSize: 14,
      boxShadow: '0 2px 12px #a855f755',
    }}>
      Image unavailable
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      style={{
        width: 180,
        height: 120,
        objectFit: 'cover',
        borderRadius: 12,
        border: '1.5px solid #a855f7',
        background: '#1e1b4b',
        boxShadow: '0 2px 12px #a855f755',
        transition: 'opacity 0.8s',
        opacity: 1,
      }}
      {...props}
    />
  );
}

// Add a function to decode HTML entities
function decodeHtml(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

export default function InterestsSection() {
  const [current, setCurrent] = useState(0);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const slides = cityData;
  const total = slides.length;

  useEffect(() => {
    async function fetchBlogPosts() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          'https://public-api.wordpress.com/rest/v1.1/sites/travelingepicure.wordpress.com/posts/?number=2'
        );
        if (!res.ok) throw new Error('Failed to fetch blog posts');
        const data = await res.json();
        const posts = data.posts.map(post => ({
          title: decodeHtml(post.title),
          excerpt: decodeHtml(post.excerpt.replace(/<[^>]+>/g, '').slice(0, 180) + '...'),
          image: post.featured_image || '',
          url: post.URL
        }));
        setBlogPosts(posts);
      } catch (err) {
        setError('Could not load blog posts.');
      } finally {
        setLoading(false);
      }
    }
    fetchBlogPosts();
  }, []);

  const goLeft = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goRight = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  const slide = slides[current];

  return (
    <section id="interests-blog" style={{
      padding: '4rem 2rem',
      background: 'rgba(36, 18, 60, 0.35)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(168, 85, 247, 0.12)',
      borderRadius: 24,
      maxWidth: 1100,
      margin: '3rem auto',
      color: '#e0e0e0',
      textAlign: 'center',
      position: 'relative',
    }}>
      {/* Blog Section */}
      <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem', color: '#a855f7' }}>
        My Interests: Travel & Food Blog
      </h2>
      <p style={{ color: '#c084fc', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
        Exploring the world, one adventure at a time. Read my latest stories from <a href="https://travelingepicure.wordpress.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#a855f7', textDecoration: 'underline' }}>travelingepicure.wordpress.com</a>
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem',
        marginTop: '2rem',
        marginBottom: '3.5rem',
      }}>
        {loading ? (
          <div style={{ color: '#a855f7', fontSize: 20 }}>Loading blog posts...</div>
        ) : error ? (
          <div style={{ color: '#f87171', fontSize: 18 }}>{error}</div>
        ) : blogPosts.length === 0 ? (
          <div style={{ color: '#a855f7', fontSize: 18 }}>No blog posts found.</div>
        ) : (
          blogPosts.map((post, idx) => (
            <div key={idx} style={{
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
              {post.image && (
                <img src={post.image} alt={post.title} style={{
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
              <div style={{ color: '#e0e0e0', fontSize: 16, marginBottom: 16 }}>{post.excerpt}</div>
              <a href={post.url} target="_blank" rel="noopener noreferrer" style={{
                color: '#a855f7',
                fontWeight: 600,
                textDecoration: 'underline',
                marginTop: 'auto',
                fontSize: 16,
              }}>
                Read Full Story →
              </a>
            </div>
          ))
        )}
      </div>
      {/* City Slider Section */}
      <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#a855f7', marginTop: '2.5rem' }}>
        My Travel Experiences
      </h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32 }}>
        <button onClick={goLeft} aria-label="Previous slide" style={{
          background: 'none',
          border: 'none',
          color: '#a855f7',
          fontSize: 36,
          cursor: 'pointer',
          padding: 8,
          borderRadius: '50%',
          transition: 'background 0.2s',
        }}>&#8592;</button>
        <div style={{
          background: 'rgba(80, 36, 120, 0.18)',
          borderRadius: 32,
          boxShadow: '0 4px 32px 0 rgba(168, 85, 247, 0.10)',
          padding: '2.5rem 2rem',
          minWidth: 400,
          maxWidth: 700,
          flex: 1,
        }}>
          {slide ? (
            <>
              <h3 style={{ color: '#c084fc', fontWeight: 700, fontSize: 28, marginBottom: 18 }}>{slide.name}</h3>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 18, flexWrap: 'wrap' }}>
                {slide.images && slide.images.length > 0 ? (
                  slide.images.map((img, idx) => (
                    <ImageWithFallback
                      key={img}
                      src={img}
                      alt={`${slide.name} travel ${idx + 1}`}
                    />
                  ))
                ) : (
                  <div style={{ color: '#a855f7', fontSize: 16, margin: '1rem auto' }}>No images found for this city.<br/>Upload your images to <b>public/images/</b> and update the code if needed.</div>
                )}
              </div>
              <div style={{ fontSize: 18, color: '#e0e0e0', marginBottom: 8 }}>{slide.description}</div>
            </>
          ) : (
            <div style={{ color: '#a855f7', fontSize: 18 }}>No slides to display.</div>
          )}
        </div>
        <button onClick={goRight} aria-label="Next slide" style={{
          background: 'none',
          border: 'none',
          color: '#a855f7',
          fontSize: 36,
          cursor: 'pointer',
          padding: 8,
          borderRadius: '50%',
          transition: 'background 0.2s',
        }}>&#8594;</button>
      </div>
      <div style={{ marginTop: 24, color: '#c084fc', fontSize: 16 }}>
        {slides.map((s, idx) => (
          <span key={s.name} style={{
            display: 'inline-block',
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: idx === current ? '#a855f7' : '#c084fc55',
            margin: '0 6px',
            transition: 'background 0.2s',
          }} />
        ))}
      </div>
    </section>
  );
} 
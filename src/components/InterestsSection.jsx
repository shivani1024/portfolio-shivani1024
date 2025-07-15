import React, { useState, useEffect } from 'react';

const cityData = [
  // Replace the URLs below with your own hosted images (e.g., /images/washington1.jpg if using GitHub/public)
  // Make sure to upload your images to the public/images/ folder and use the correct filenames here.
  {
    name: 'Washington DC',
    images: [
      '/images/washington1.jpg',
      '/images/washington2.jpg',
    ],
    description: `Exploring the capital was a blend of history and modern vibrance. The National Mall, monuments, and cherry blossoms made for unforgettable walks. I loved the museums and the sense of significance everywhere.`
  },
  {
    name: 'Miami',
    images: [
      '/images/miami1.jpg',
      '/images/miami2.jpg',
    ],
    description: `Miami was all about sun, sand, and vibrant culture. The beaches were stunning, and the food scene was a delicious adventure. I enjoyed the art deco architecture and the lively nightlife.`
  },
  {
    name: 'Niagara Falls',
    images: [
      '/images/niagara1.jpg',
      '/images/niagara2.jpg',
    ],
    description: `Witnessing the power of Niagara Falls was awe-inspiring. The mist, the roar, and the rainbows made it magical. The boat ride close to the falls was a thrilling highlight of my travels.`
  },
  {
    name: 'New York City',
    images: [
      '/images/nyc1.jpg',
      '/images/nyc2.jpg',
    ],
    description: `NYC is a city that never sleeps! From Times Square to Central Park, every corner buzzed with energy. I loved the diversity, the food, and the endless things to see and do.`
  },
  {
    name: 'Boston',
    images: [
      '/images/boston1.jpg',
      '/images/boston2.jpg',
    ],
    description: `Boston felt like a perfect blend of history and academia. Walking the Freedom Trail and visiting Harvard were highlights. The city’s charm and intellectual vibe made it special.`
  },
];

const BLOG_API = 'https://public-api.wordpress.com/rest/v1.1/sites/travelingepicure.wordpress.com/posts/?number=2';

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

export default function InterestsSection() {
  const [current, setCurrent] = useState(0);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(BLOG_API)
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data.posts || []);
        setLoading(false);
      })
      .catch((err) => {
        setError('Could not load blog posts.');
        setLoading(false);
      });
  }, []);

  // Blog posts first, then city slides
  const slides = [
    ...blogPosts.map(post => ({ type: 'blog', ...post })),
    ...cityData.map(city => ({ type: 'city', ...city })),
  ];
  const total = slides.length;

  const goLeft = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goRight = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  const slide = slides[current];

  // Fallback if no slides at all
  if (!loading && slides.length === 0) {
    return (
      <section id="interests-blog" style={{
        padding: '4rem 2rem',
        background: 'rgba(36, 18, 60, 0.35)',
        borderRadius: 24,
        maxWidth: 900,
        margin: '3rem auto',
        color: '#e0e0e0',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem', color: '#a855f7' }}>
          My Travel Experiences
        </h2>
        <div style={{ color: '#c084fc', fontSize: 20, margin: '2rem 0' }}>
          No travel experiences or blog posts found.<br/>
          <span style={{ fontSize: 16 }}>If you see this, make sure you have uploaded your images to <b>public/images/</b> and your blog is accessible.</span>
        </div>
      </section>
    );
  }

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
      <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem', color: '#a855f7' }}>
        My Travel Experiences
      </h2>
      {loading ? (
        <div style={{ color: '#a855f7', fontSize: 20, margin: '2rem 0' }}>Loading blog posts...</div>
      ) : (
        <>
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
                slide.type === 'city' ? (
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
                ) : slide.type === 'blog' ? (
                  <>
                    <h3 style={{ color: '#c084fc', fontWeight: 700, fontSize: 24, marginBottom: 10 }}>{slide.title}</h3>
                    {slide.featured_image && (
                      <img src={slide.featured_image} alt={slide.title} style={{
                        width: '100%',
                        maxHeight: 220,
                        objectFit: 'cover',
                        borderRadius: 12,
                        marginBottom: 18,
                        boxShadow: '0 2px 12px #a855f755',
                        background: '#1e1b4b',
                      }} />
                    )}
                    <div style={{ color: '#e0e0e0', fontSize: 16, marginBottom: 16 }}
                      dangerouslySetInnerHTML={{ __html: slide.excerpt }} />
                    <a href={slide.URL} target="_blank" rel="noopener noreferrer" style={{
                      color: '#a855f7',
                      fontWeight: 600,
                      textDecoration: 'underline',
                      marginTop: 'auto',
                      fontSize: 16,
                    }}>
                      Read Full Story →
                    </a>
                  </>
                ) : null
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
              <span key={s.type === 'city' ? s.name : s.ID} style={{
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
        </>
      )}
      {error && <div style={{ color: 'salmon', fontSize: 18, marginTop: 16 }}>{error}</div>}
    </section>
  );
} 
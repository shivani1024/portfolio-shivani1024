import React, { useState } from 'react';

const cityData = [
  {
    name: 'Washington DC',
    images: [
      'https://i.imgur.com/826EB443F8AA40878AE1C15C460E195A_1_105_c.jpeg',
      'https://i.imgur.com/41D31EF85B7B4EE3AE744B847FFD80D3_1_105_c.jpeg',
    ],
    description: `Exploring the capital was a blend of history and modern vibrance. The National Mall, monuments, and cherry blossoms made for unforgettable walks. I loved the museums and the sense of significance everywhere.`
  },
  {
    name: 'Miami',
    images: [
      'https://i.imgur.com/7716647553184FA0934B8CD32833D5C7_1_105_c.jpeg',
      'https://i.imgur.com/898F902D96EF4A4A86865D37D8BD52DF_1_105_c.jpeg',
    ],
    description: `Miami was all about sun, sand, and vibrant culture. The beaches were stunning, and the food scene was a delicious adventure. I enjoyed the art deco architecture and the lively nightlife.`
  },
  {
    name: 'Niagara Falls',
    images: [
      'https://i.imgur.com/E377696D6F924D4889D6DA975C0369C8_1_105_c.jpeg',
      'https://i.imgur.com/C5E968B017A142148D9C065660D104BD_1_105_c.jpeg',
    ],
    description: `Witnessing the power of Niagara Falls was awe-inspiring. The mist, the roar, and the rainbows made it magical. The boat ride close to the falls was a thrilling highlight of my travels.`
  },
  {
    name: 'New York City',
    images: [
      'https://i.imgur.com/551F91B8D59E4384AC2D7C987080687D.jpeg',
      'https://i.imgur.com/826EB443F8AA40878AE1C15C460E195A_1_105_c.jpeg',
    ],
    description: `NYC is a city that never sleeps! From Times Square to Central Park, every corner buzzed with energy. I loved the diversity, the food, and the endless things to see and do.`
  },
  {
    name: 'Boston',
    images: [
      'https://i.imgur.com/826EB443F8AA40878AE1C15C460E195A_1_105_c.jpeg',
      'https://i.imgur.com/41D31EF85B7B4EE3AE744B847FFD80D3_1_105_c.jpeg',
    ],
    description: `Boston felt like a perfect blend of history and academia. Walking the Freedom Trail and visiting Harvard were highlights. The city’s charm and intellectual vibe made it special.`
  },
];

export default function InterestsSection() {
  const [current, setCurrent] = useState(0);
  const total = cityData.length;

  const goLeft = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goRight = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  const city = cityData[current];

  return (
    <section id="interests-blog" style={{
      padding: '4rem 2rem',
      background: 'rgba(36, 18, 60, 0.35)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(168, 85, 247, 0.12)',
      borderRadius: 24,
      maxWidth: 900,
      margin: '3rem auto',
      color: '#e0e0e0',
      textAlign: 'center',
      position: 'relative',
    }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem', color: '#a855f7' }}>
        My Travel Experiences
      </h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
        <button onClick={goLeft} aria-label="Previous city" style={{
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
          minWidth: 320,
          maxWidth: 500,
          flex: 1,
        }}>
          <h3 style={{ color: '#c084fc', fontWeight: 700, fontSize: 28, marginBottom: 18 }}>{city.name}</h3>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 18, flexWrap: 'wrap' }}>
            {city.images.map((img, idx) => (
              <img
                key={img}
                src={img}
                alt={`${city.name} travel ${idx + 1}`}
                style={{
                  width: 140,
                  height: 100,
                  objectFit: 'cover',
                  borderRadius: 12,
                  boxShadow: '0 2px 12px #a855f755',
                  border: '1.5px solid #a855f7',
                  background: '#1e1b4b',
                  transition: 'opacity 0.8s',
                  opacity: 1,
                }}
              />
            ))}
          </div>
          <div style={{ fontSize: 18, color: '#e0e0e0', marginBottom: 8 }}>{city.description}</div>
        </div>
        <button onClick={goRight} aria-label="Next city" style={{
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
        {cityData.map((c, idx) => (
          <span key={c.name} style={{
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
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import profileImg from '../assets/portfolio.jpg';
import React, { useEffect, useRef, useState } from 'react';

// Dot matrix animated background
function DotMatrixBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const observerRef = useRef();
  const isPaused = useRef(false);
  const [canvasReady, setCanvasReady] = React.useState(false);

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    setCanvasReady(true);
    let dpr = window.devicePixelRatio || 1;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    if (!width || !height) return;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Responsive dot count
    const isMobile = window.innerWidth < 700;
    const cols = isMobile ? 8 : 14;
    const rows = isMobile ? 5 : 8;
    const dotSize = isMobile ? 3 : 4;
    const dotGapX = width / (cols + 1);
    const dotGapY = height / (rows + 1);
    // Dot state
    const dots = [];
    for (let y = 1; y <= rows; y++) {
      for (let x = 1; x <= cols; x++) {
        dots.push({
          x: x * dotGapX,
          y: y * dotGapY,
          baseSize: dotSize,
          size: dotSize,
          opacity: 0.18 + Math.random() * 0.25,
          pulseTime: Math.random() * 2 + 2, // 2-4s
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
    }
    // Animation
    function animate(now) {
      if (isPaused.current) return;
      ctx.clearRect(0, 0, width, height);
      // Animate dots
      dots.forEach(dot => {
        // Pulsing
        const t = (now / 1000 + dot.pulseOffset) % dot.pulseTime;
        const scale = 0.85 + 0.25 * Math.sin((t / dot.pulseTime) * Math.PI * 2);
        const size = dot.baseSize * scale;
        ctx.globalAlpha = dot.opacity;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = 'rgba(139, 92, 246, 0.35)'; // #8b5cf6
        ctx.shadowColor = 'rgba(139, 92, 246, 0.18)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      // Occasionally draw connection lines
      if (Math.random() < 0.02) {
        const a = dots[Math.floor(Math.random() * dots.length)];
        const b = dots[Math.floor(Math.random() * dots.length)];
        if (a !== b && Math.abs(a.x - b.x) < dotGapX * 2 && Math.abs(a.y - b.y) < dotGapY * 2) {
          ctx.save();
          ctx.globalAlpha = 0.18;
          ctx.strokeStyle = 'rgba(139, 92, 246, 0.25)';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
          ctx.restore();
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    // Accessibility: pause if prefers-reduced-motion
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      animationRef.current = requestAnimationFrame(animate);
    }
    // Pause on tab not visible
    const handleVisibility = () => {
      isPaused.current = document.hidden;
      if (!isPaused.current && !prefersReducedMotion) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    // Pause if not in view
    observerRef.current = new window.IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        isPaused.current = false;
        if (!prefersReducedMotion) animationRef.current = requestAnimationFrame(animate);
      } else {
        isPaused.current = true;
      }
    });
    observerRef.current.observe(canvas);
    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      document.removeEventListener('visibilitychange', handleVisibility);
      observerRef.current.disconnect();
    };
  }, []);
  // Fallback: if canvas fails, show a static background
  return (
    <>
      <canvas
        ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
          width: '100%',
          height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
          background: '#1a1a2e',
          display: canvasReady ? 'block' : 'none',
        }}
        aria-hidden="true"
        tabIndex={-1}
      />
      {!canvasReady && (
        <div style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          background: '#1a1a2e',
          zIndex: 0,
        }} />
      )}
    </>
  );
}

// Abstract floating text component
function FloatingText({ text, delay = 0 }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        fontSize: '1.5rem',
        fontWeight: 300,
        color: '#a855f7',
        opacity: 0.3,
        zIndex: 1,
        pointerEvents: 'none',
      }}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      {text}
    </motion.div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const [text] = useTypewriter({
    words: [
      "Oracle Consultant",
      "Data Engineer",
      "Automation Expert",
      "Technical Leader"
    ],
    loop: true,
    delaySpeed: 700,
  });
  return (
    <section
      className="hero-bg section glass"
      id="hero"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '70vh',
        padding: '120px 0',
        overflow: 'hidden',
        background: '#1a1a2e',
      }}
    >
      {/* Animated Background */}
      <DotMatrixBackground />
      
      {/* Floating Elements */}
      <FloatingText text="Oracle" delay={0} style={{ top: '20%', left: '10%' }}/>
      <FloatingText text="Cloud" delay={2} style={{ top: '30%', right: '15%' }}/>
      <FloatingText text="Data" delay={4} style={{ bottom: '25%', left: '8%' }}/>
      <FloatingText text="Automation" delay={6} style={{ bottom: '35%', right: '12%' }} />

      <div
        className="hero-content"
        style={{ 
          flex: 1, 
          paddingLeft: '8vw', 
          zIndex: 2,
          textAlign: 'left',
        }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontSize: '3rem',
            fontWeight: 800,
            color: '#fff',
            fontFamily: 'Inter, Segoe UI, sans-serif',
            letterSpacing: '-0.02em',
            marginBottom: 12,
            marginTop: 0,
            lineHeight: 1.1,
          }}
        >
          Oracle Solutions Architect & Automation Expert
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
            color: '#a0a0a0',
            fontSize: 22,
            fontWeight: 400,
            lineHeight: 1.6,
            marginBottom: 18,
            fontFamily: 'Inter, Segoe UI, sans-serif',
          }}
        >
          Specialized in Oracle Cloud applications, business intelligence, and automated workflows. Proven track record of delivering enterprise solutions that drive operational efficiency.
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{ 
            fontSize: 26, 
            fontWeight: 600,
            color: '#fff', 
            minHeight: 40, 
            marginBottom: 32,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {mounted ? (
            <>
              <span>{text}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ color: '#6366f1', fontSize: '24px' }}
              >
                |
              </motion.span>
            </>
          ) : (
            <span>&nbsp;</span>
          )}
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 8px 25px rgba(99, 102, 241, 0.4)',
          }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            border: 'none',
            padding: '16px 32px',
            borderRadius: 12,
            fontWeight: 600,
            color: '#fff',
            fontSize: 18,
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
            marginTop: 8,
            marginBottom: 8,
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span style={{ position: 'relative', zIndex: 1}}>Lets Connect</span>
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="hero-photo"
        style={{ 
          flex: 1, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: 320, 
          zIndex: 2,
          marginTop: 0
        }}
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={profileImg}
          alt="Shivani Sawant"
          style={{
            width: 220,
            height: 220,
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
            border: '3px solid rgba(255,255,255,0.1)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            background: '#1e1b4b',
            filter: 'drop-shadow(0 0 8px #6366f1)',
          }}
        />
      </motion.div>
    </section>
  );
} 
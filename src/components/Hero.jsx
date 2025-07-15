import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import profileImg from '../assets/portfolio.jpg';
import React, { useEffect, useRef } from 'react';

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
  return <div style={{color: '#fff', fontSize: 32, padding: 40}}>Hello World</div>;
} 
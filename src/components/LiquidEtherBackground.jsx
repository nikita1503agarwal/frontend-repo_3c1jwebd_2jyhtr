import React, { useRef, useEffect } from 'react';

// Liquid Ether animated background using canvas + simplex-like noise
// Inspired by liquid line backgrounds. Optimized for performance.
export default function LiquidEtherBackground({ className = '' }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    let time = 0;

    // Simple pseudo noise based on sin composition
    const noise = (x, t) => {
      return (
        Math.sin(x * 0.9 + t * 0.9) * 0.6 +
        Math.sin(x * 1.7 - t * 0.6) * 0.3 +
        Math.sin(x * 2.3 + t * 0.3) * 0.1
      );
    };

    const lines = 10; // number of flowing lines
    const spacing = height / (lines + 1);

    function draw() {
      time += 0.012; // speed

      // background fade for trail effect
      ctx.fillStyle = 'rgba(6, 8, 12, 0.25)';
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < lines; i++) {
        const yBase = spacing * (i + 1);
        ctx.beginPath();
        const grad = ctx.createLinearGradient(0, yBase - 40, width, yBase + 40);
        grad.addColorStop(0, `rgba(56, 189, 248, 0.0)`); // sky-400
        grad.addColorStop(0.2, `rgba(56, 189, 248, 0.6)`);
        grad.addColorStop(0.5, `rgba(244, 63, 94, 0.8)`); // rose-500
        grad.addColorStop(0.8, `rgba(59, 130, 246, 0.6)`); // blue-500
        grad.addColorStop(1, `rgba(59, 130, 246, 0.0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;

        const segments = 160;
        for (let x = 0; x <= segments; x++) {
          const px = (x / segments) * width;
          const n = noise((x + i * 10) * 0.08, time + i * 0.3);
          const py = yBase + n * 28 + Math.sin(time + i) * 6;
          if (x === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // glow overlay
        ctx.lineWidth = 6;
        ctx.globalAlpha = 0.08;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    function handleResize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      const dprN = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dprN;
      canvas.height = height * dprN;
      ctx.scale(dprN, dprN);
    }

    // prime clear background
    ctx.fillStyle = 'rgba(6, 8, 12, 1)';
    ctx.fillRect(0, 0, width, height);

    draw();
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(800px_400px_at_70%_120%,rgba(244,63,94,0.18),transparent_60%)]" />
    </div>
  );
}

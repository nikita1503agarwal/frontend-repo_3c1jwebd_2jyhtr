import React, { useEffect, useRef } from 'react';

// Text Pressure effect: characters scale and shift with mouse pressure
export default function TextPressure({ text = 'About Brunocode', className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = text.split('');
    el.innerHTML = '';
    const spans = chars.map((ch, i) => {
      const s = document.createElement('span');
      s.textContent = ch;
      s.style.display = 'inline-block';
      s.style.transition = 'transform 120ms ease, color 120ms ease';
      s.style.willChange = 'transform';
      s.style.color = 'white';
      el.appendChild(s);
      return s;
    });

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      spans.forEach((s, i) => {
        const r = s.getBoundingClientRect();
        const cx = r.left - rect.left + r.width / 2;
        const cy = r.top - rect.top + r.height / 2;
        const dx = mx - cx;
        const dy = my - cy;
        const d = Math.hypot(dx, dy);
        const pressure = Math.max(0, 1 - d / 240);
        const scale = 1 + pressure * 0.6;
        const tx = -dx * 0.02 * pressure;
        const ty = -dy * 0.02 * pressure;
        s.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
        s.style.color = `hsl(${200 + pressure * 120} 90% ${70 - pressure * 30}%)`;
      });
    }

    function onLeave() {
      spans.forEach((s) => {
        s.style.transform = 'translate(0px,0px) scale(1)';
        s.style.color = 'white';
      });
    }

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [text]);

  return <h2 ref={ref} className={`text-3xl md:text-5xl font-bold leading-tight ${className}`}>{text}</h2>;
}

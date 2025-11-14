import React, { useEffect, useRef, useState } from 'react';

export default function CountUp({ end = 100, duration = 2000, prefix = '', suffix = '', className = '' }) {
  const [value, setValue] = useState(0);
  const startTimeRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    function animate(ts) {
      if (!startTimeRef.current) startTimeRef.current = ts;
      const progress = Math.min((ts - startTimeRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.floor(eased * end));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [end, duration]);

  return <span className={className}>{prefix}{value.toLocaleString()}{suffix}</span>;
}

import React from 'react';

export default function BrunocodeLogo({ size = 36 }) {
  const s = size;
  return (
    <div className="inline-flex items-center gap-2 select-none">
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60A5FA"/>
            <stop offset="50%" stopColor="#22D3EE"/>
            <stop offset="100%" stopColor="#F43F5E"/>
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#g1)" opacity="0.15"/>
        <path d="M16 18h20c6 0 10 4 10 9 0 4-3 7-7 8 4 1 7 4 7 9 0 6-5 10-11 10H16V18zm11 14h9c2 0 4-2 4-4s-2-4-4-4h-9v8zm0 20h10c3 0 5-2 5-5s-2-5-5-5H27v10z" fill="url(#g1)"/>
      </svg>
      <span className="text-white/90 font-semibold tracking-wide">Brunocode</span>
    </div>
  );
}

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { id: 1, title: 'AI SaaS Dashboard', tag: 'Web', img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Finance Mobile App', tag: 'App', img: 'https://images.unsplash.com/photo-1551650992-ee4fd47df436?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Ecommerce UI Kit', tag: 'Design', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Automation Platform', tag: 'Web', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: 'Health Tracker', tag: 'App', img: 'https://images.unsplash.com/photo-1557825835-b4527f552785?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, title: 'Brand Design System', tag: 'Design', img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop' },
];

const filters = ['All', 'Web', 'App', 'Design'];

export default function PortfolioGrid() {
  const [filter, setFilter] = useState('All');
  const filtered = useMemo(() => (
    filter === 'All' ? items : items.filter(i => i.tag === filter)
  ), [filter]);

  return (
    <div>
      <div className="flex gap-2 mb-6">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-full border text-sm transition ${filter===f? 'border-sky-400/60 bg-white/10 text-white' : 'border-white/10 text-white/70 hover:text-white'}`}
          >{f}</button>
        ))}
      </div>
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <AnimatePresence>
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition">
                <div className="text-white font-semibold">{item.title}</div>
                <div className="text-white/70 text-sm">{item.tag}</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

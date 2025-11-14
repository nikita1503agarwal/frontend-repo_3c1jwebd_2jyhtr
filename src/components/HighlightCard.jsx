import React from 'react';
import { motion } from 'framer-motion';

export default function HighlightCard({ icon: Icon, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="group relative rounded-xl border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur-sm shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.25)] hover:border-sky-400/40 transition"
    >
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 shrink-0 rounded-lg bg-gradient-to-br from-sky-500/30 to-rose-500/30 grid place-items-center">
          <Icon size={22} className="text-white" />
        </div>
        <div>
          <div className="text-white/90 font-semibold">{title}</div>
          <div className="text-white/60 text-sm mt-1">{subtitle}</div>
        </div>
      </div>
    </motion.div>
  );
}

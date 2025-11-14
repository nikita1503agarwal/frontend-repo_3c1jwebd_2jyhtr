import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ icon: Icon, title }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ y: -2 }}
      className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition shadow-sm hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.25)]"
    >
      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-sky-500/30 to-rose-500/30 grid place-items-center mb-4 transition-transform group-hover:-translate-y-1">
        <Icon size={22} className="text-white" />
      </div>
      <div className="text-white/90 font-semibold">{title}</div>
      <div className="absolute inset-0 rounded-xl ring-1 ring-sky-400/0 group-hover:ring-sky-400/60 transition"></div>
    </motion.div>
  );
}

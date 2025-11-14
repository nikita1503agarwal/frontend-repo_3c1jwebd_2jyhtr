import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Zap, Database, Cog } from 'lucide-react';

const Node = ({ icon: Icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 backdrop-blur-sm hover:bg-white/7 transition"
  >
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500/30 to-rose-500/30 flex items-center justify-center">
        <Icon className="text-white" size={20} />
      </div>
      <div>
        <div className="text-white/90 font-semibold">{title}</div>
        <div className="text-white/60 text-sm">{desc}</div>
      </div>
    </div>
  </motion.div>
);

export default function ServicesFlow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      <Node icon={Workflow} title="n8n Workflows" desc="Design, build, and monitor robust automations." />
      <Node icon={Zap} title="Triggers" desc="Webhooks, schedules, and app events to kick off flows." />
      <Node icon={Database} title="Data Ops" desc="Enrich, transform, and sync data across systems." />
      <Node icon={Cog} title="Integrations" desc="Connect CRMs, email, Slack, Notion, Sheets, and more." />
    </div>
  );
}

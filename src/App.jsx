import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LiquidEtherBackground from './components/LiquidEtherBackground';
import BrunocodeLogo from './components/BrunocodeLogo';
import CountUp from './components/CountUp';
import TextPressure from './components/TextPressure';
import ServicesFlow from './components/ServicesFlow';
import HighlightCard from './components/HighlightCard';
import ServiceCard from './components/ServiceCard';
import PortfolioGrid from './components/PortfolioGrid';
import {
  Star,
  Clock3,
  Trophy,
  Code2,
  Smartphone,
  Cloud,
  Palette,
  Github,
  Linkedin,
  Dribbble,
  ArrowUp,
} from 'lucide-react';

function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">{children}</div>
    </section>
  );
}

function GlowButton({ children, href = '#contact' }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-white/5 border border-white/10 text-white/90 hover:text-white transition relative overflow-hidden group"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/20 to-rose-500/0 opacity-0 group-hover:opacity-100 transition blur"></span>
      <span className="relative">{children}</span>
    </a>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-white/10 border border-white/10 text-white grid place-items-center hover:bg-white/15 hover:shadow-[0_0_30px_-6px_rgba(56,189,248,0.35)]"
          aria-label="Scroll to top"
        >
          <ArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      el.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-[1] h-[300px] w-[300px] rounded-full opacity-30 blur-3xl"
      style={{
        background:
          'radial-gradient(closest-side, rgba(56,189,248,0.18), rgba(244,63,94,0.10), transparent)'
      }}
    />
  );
}

export default function App() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  }

  return (
    <div className="min-h-screen bg-[#07090f] text-white relative overflow-hidden">
      {/* Ambient Backgrounds */}
      <LiquidEtherBackground />
      <CursorGlow />

      {/* Top Navigation */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-[#07090f]/50 bg-[#07090f]/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="focus:outline-none">
            <BrunocodeLogo size={28} />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative z-10 pt-16">
        <div className="relative h-[74vh] flex items-center">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.18),transparent_60%)]" />
          <div className="max-w-6xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
              <div className="mb-5">
                <BrunocodeLogo size={44} />
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">Automation. Innovation. Acceleration.</h1>
              <p className="text-white/70 mt-4 md:text-lg max-w-2xl">We craft scalable, future-proof digital experiences and automation systems for startups and enterprises.</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <GlowButton>Get Started</GlowButton>
              </div>
              <div className="mt-10 grid grid-cols-3 max-w-md gap-6">
                <div>
                  <div className="text-3xl font-bold"><CountUp end={50} duration={2000} suffix="+" /></div>
                  <div className="text-white/60 text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold"><CountUp end={5} duration={2200} suffix="+" /></div>
                  <div className="text-white/60 text-sm">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold"><CountUp end={100} duration={2400} suffix="%" /></div>
                  <div className="text-white/60 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about">
        <div className="max-w-3xl">
          <TextPressure text="Who We Are" />
          <p className="mt-6 text-white/70">
            We’re a team of creative developers and designers passionate about building scalable, future-proof digital
            experiences for startups and enterprises.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <HighlightCard icon={Star} title="50+ Projects Delivered" subtitle="End-to-end builds shipped and supported." />
          <HighlightCard icon={Clock3} title="5+ Years of Experience" subtitle="Seasoned team with modern stacks." />
          <HighlightCard icon={Trophy} title="100% Client Satisfaction" subtitle="We optimize for real outcomes." />
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold">Our Expertise</motion.h2>
        <p className="text-white/70 mt-3 max-w-2xl">We provide end-to-end digital solutions tailored to your business.</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <ServiceCard icon={Code2} title="Web Development" />
          <ServiceCard icon={Smartphone} title="Mobile Applications" />
          <ServiceCard icon={Cloud} title="Cloud Solutions" />
          <ServiceCard icon={Palette} title="UI/UX Design" />
        </div>
        <div className="mt-12">
          <ServicesFlow />
        </div>
      </Section>

      {/* Portfolio */}
      <Section id="work">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold">Our Work</motion.h2>
        <p className="text-white/70 mt-3">A glimpse into our latest creations.</p>
        <div className="mt-8">
          <PortfolioGrid />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold">Let’s Work Together</motion.h2>
        <p className="text-white/70 mt-3">Got an idea? Let’s turn it into reality.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-6">
          <form onSubmit={handleSubmit} className="md:col-span-3 grid grid-cols-1 gap-4">
            <input className="bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-sky-400/60 transition" placeholder="Name" required />
            <input className="bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-sky-400/60 transition" placeholder="Email" type="email" required />
            <textarea rows="6" className="bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-sky-400/60 transition" placeholder="Message" required />
            <button className="mt-2 inline-flex items-center justify-center bg-gradient-to-r from-sky-500 to-rose-500 text-white font-semibold rounded-lg py-3 hover:opacity-90 transition">
              Send Message
            </button>
            <AnimatePresence>
              {sent && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="flex items-center gap-2 text-emerald-400">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" /> Sent! We’ll be in touch shortly.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
          <div className="md:col-span-2">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="text-white/70 text-sm">Contact Info</div>
              <div className="mt-3 space-y-2">
                <div className="text-white/90">📧 developer@brunocode.in</div>
                <div className="text-white/90">📞 +91 1234567890</div>
                <div className="text-white/90">🌐 brunocode.tech</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Email CTA */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xl md:text-2xl font-semibold">Prefer email?</div>
              <div className="text-white/70">Reach us at <a href="mailto:developer@brunocode.in" className="text-sky-400 hover:underline">developer@brunocode.in</a></div>
            </div>
            <a href="mailto:developer@brunocode.in" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg py-2.5 px-4">Compose Email</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BrunocodeLogo size={26} />
            <div className="text-white/60">© 2025 Brunocode.tech — All rights reserved.</div>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <a href="https://github.com" target="_blank" className="hover:text-white transition" rel="noreferrer"><Github /></a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-white transition" rel="noreferrer"><Linkedin /></a>
            <a href="https://dribbble.com" target="_blank" className="hover:text-white transition" rel="noreferrer"><Dribbble /></a>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}

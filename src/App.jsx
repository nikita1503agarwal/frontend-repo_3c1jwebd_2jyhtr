import React from 'react';
import Spline from '@splinetool/react-spline';
import LiquidEtherBackground from './components/LiquidEtherBackground';
import BrunocodeLogo from './components/BrunocodeLogo';
import CountUp from './components/CountUp';
import TextPressure from './components/TextPressure';
import ServicesFlow from './components/ServicesFlow';

function Section({ id, title, children }) {
  return (
    <section id={id} className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">{children}</div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090f] text-white relative overflow-hidden">
      {/* Liquid Ether Background */}
      <LiquidEtherBackground />

      {/* Navigation */}
      <header className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
          <BrunocodeLogo size={28} />
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <section id="home" className="relative z-10 pt-10">
        <div className="absolute inset-0 h-[70vh]">
          <Spline scene="https://prod.spline.design/rvFZ5oikmZSIbmGQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative h-[70vh] flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Automation, AI, and Engineering for Modern Teams</h1>
              <p className="text-white/70 mt-4 md:text-lg">We design n8n automations, integrate your tools, and ship production-grade software fast.</p>
              <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
                <div>
                  <div className="text-3xl font-bold"><CountUp end={120} duration={2000} /></div>
                  <div className="text-white/60 text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold"><CountUp end={85} duration={2200} /></div>
                  <div className="text-white/60 text-sm">Automations Built</div>
                </div>
                <div>
                  <div className="text-3xl font-bold"><CountUp end={42} duration={2400} /></div>
                  <div className="text-white/60 text-sm">Domains Managed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About with Text Pressure */}
      <Section id="about" title="About">
        <TextPressure text="About Brunocode" className="z-10" />
        <p className="mt-6 text-white/70 max-w-3xl">
          We build reliable automation systems using n8n and modern cloud stacks. Our focus is on stability, security,
          and measurable business outcomes. From lead routing to data enrichment and AI copilots, we deliver.
        </p>
      </Section>

      {/* Services with animated nodes */}
      <Section id="services" title="Services">
        <h2 className="text-3xl md:text-5xl font-bold">Services</h2>
        <p className="text-white/70 mt-3 max-w-2xl">Visual n8n-style workflows, clean integrations, and data pipelines.</p>
        <div className="mt-10">
          <ServicesFlow />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <h2 className="text-3xl md:text-5xl font-bold">Contact</h2>
        <p className="text-white/70 mt-3">Tell us about your project. We usually reply within 24 hours.</p>
        <form onSubmit={(e)=>e.preventDefault()} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-sky-400" placeholder="Your name" />
          <input className="bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-sky-400" placeholder="Email" type="email" />
          <input className="md:col-span-2 bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-sky-400" placeholder="Subject" />
          <textarea rows="5" className="md:col-span-2 bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-sky-400" placeholder="Your message" />
          <button className="mt-2 md:col-span-2 inline-flex items-center justify-center bg-gradient-to-r from-sky-500 to-rose-500 text-white font-semibold rounded-lg py-3 hover:opacity-90 transition">Send</button>
        </form>
      </Section>

      {/* Email section */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xl md:text-2xl font-semibold">Prefer email?</div>
              <div className="text-white/70">Reach us at <a href="mailto:hello@brunocode.com" className="text-sky-400 hover:underline">hello@brunocode.com</a></div>
            </div>
            <a href="mailto:hello@brunocode.com" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg py-2.5 px-4">Compose Email</a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-10 text-center text-white/60">© {new Date().getFullYear()} Brunocode. All rights reserved.</footer>
    </div>
  );
}

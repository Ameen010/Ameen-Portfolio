'use client';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

const principles = [
  { id: '01', title: 'Systems Thinking', icon: '⬡', desc: 'Every ERP is a living system — model the business before writing a single line.' },
  { id: '02', title: 'Technical Precision', icon: '◈', desc: 'Clean Python, clean XML, clean servers. Precision at every layer of the stack.' },
  { id: '03', title: 'Evolving Intelligence', icon: '◎', desc: 'AI isn\'t a tool here — it\'s a force multiplier woven into every workflow.' },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    const els = textRef.current?.querySelectorAll('.about-reveal');
    els?.forEach((el) => {
      gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
    });
  }, []);

  return (
    <section id="philosophy" ref={containerRef} className="snap-section relative w-full bg-bg-surface z-20 flex items-center" style={{ minHeight: '100svh' }}>

      {/* ── MOBILE ── */}
      <div className="md:hidden w-full px-5 py-12 flex flex-col gap-8 overflow-y-auto max-h-[100svh]">
        <span className="section-caption">Philosophy</span>
        <p className="heading-display text-4xl text-text-100 leading-tight">
          Bridging business logic <br /><span className="text-text-400">with technical precision.</span>
        </p>
        <div className="flex flex-col gap-3">
          {principles.map((p) => (
            <div key={p.id} className="flex gap-4 p-4 border border-border-light bg-bg-elevated/40">
              <span className="text-accent-cyan text-xl mt-[2px] flex-shrink-0">{p.icon}</span>
              <div>
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-text-400 mb-1">{p.id} — {p.title}</p>
                <p className="text-text-300 text-sm leading-relaxed font-light">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {['Odoo 15–19','ERP Automations','Server Infra','Docker','LLM Integration','Flutter','Web Dev'].map((s) => (
            <span key={s} className="px-3 py-1 border border-border-light text-text-400 text-[9px] tracking-widest uppercase font-mono">{s}</span>
          ))}
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block w-full py-48">
        <div className="max-w-[1600px] mx-auto px-12 w-full grid grid-cols-12 gap-8 items-start">
          <div className="col-span-2"><span className="section-caption about-reveal">Philosophy</span></div>
          <div ref={textRef} className="col-span-6 flex flex-col gap-12">
            <h2 className="heading-display text-5xl lg:text-6xl text-text-100 about-reveal leading-tight">
              Bridging business logic <br /><span className="text-text-400">with technical precision.</span>
            </h2>
            <div className="text-lg text-text-300 font-light leading-relaxed space-y-8 max-w-2xl">
              <p className="about-reveal">With <strong className="text-text-100 font-normal">2+ years as an Odoo Techno-Functional Developer</strong>, I operate across the full ERP spectrum — from <strong className="text-text-100 font-normal">Tiny ERP to modern Odoo 19</strong> — bridging functional configuration with deep technical customization and server-level infrastructure.</p>
              <p className="about-reveal">On the technical side, I work hands-on with <strong className="text-text-100 font-normal">Ubuntu, Docker, Nginx, PostgreSQL</strong>, and <strong className="text-text-100 font-normal">Digital Ocean</strong> — managing DNS, deployments, data migrations and CI/CD workflows.</p>
              <p className="about-reveal">Beyond ERP, I leverage <strong className="text-text-100 font-normal">local LLMs</strong> (Ollama, LLaMA) and major AI platforms, combined with cross-platform expertise in <strong className="text-text-100 font-normal">Flutter</strong> and modern web stacks.</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4 about-reveal">
              {['Tiny ERP to Odoo 19','ERP Automations','Server Infrastructure','Data Migration','Docker & Ubuntu','LLM Integration','Networking','Flutter Apps','Web Development','Digital Ocean'].map((s) => (
                <div key={s} className="px-6 py-3 border border-border-light text-text-300 text-xs tracking-widest uppercase font-mono">{s}</div>
              ))}
            </div>
          </div>
          <div className="col-span-4 relative mt-16 about-reveal">
            <div className="aspect-[3/4] overflow-hidden relative border border-border-light bg-bg-base p-2">
              <motion.div className="w-full h-[130%] absolute -top-[15%] left-0" style={{ y: imgY }}>
                <Image src="/images/about.jpg" alt="Ameen Noushad" fill sizes="33vw" className="object-cover filter grayscale contrast-125 brightness-90" />
              </motion.div>
              <div className="absolute inset-0 bg-bg-surface mix-blend-color opacity-20" />
            </div>
            <div className="absolute -bottom-6 -left-6 text-[10px] font-mono text-text-400 tracking-widest uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>Est. 2026 — Kerala, IN</div>
          </div>
        </div>
      </div>

    </section>
  );
}

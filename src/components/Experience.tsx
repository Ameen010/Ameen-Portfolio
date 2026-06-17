'use client';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const experiences = [
  { id: 'LVL_01', role: 'Web Foundation', company: 'Python Full-Stack Developer', period: '2023 — 2024', status: 'ACHIEVED', points: ['Built production-grade websites from scratch with Python, Django, and REST APIs.','Learned how a professional web product comes together — PostgreSQL schemas, frontend-backend architecture.','Skills: Python, Django, PostgreSQL, REST APIs, HTML5, CSS3, JavaScript'] },
  { id: 'LVL_02', role: 'AI & Intelligence Layer', company: 'AI Integration Specialist', period: '2024 — Present', status: 'ACHIEVED', points: ['Integrated LLMs into real workflows — prompt engineering for actual production outputs.','Running local models (Ollama, LLaMA, OpenClaw) and every major AI platform.','Skills: LLM Integration, Prompt Engineering, AI Workflows, Ollama, Claude, Gemini, GPT-4'] },
  { id: 'LVL_03', role: 'ERP Mastery', company: 'Odoo Techno-Functional Executive', period: '2024 — Present', status: 'ACHIEVED', points: ['Odoo from Tiny ERP to current version — fully customized, configured, deployed.','Sales, CRM, Inventory, Accounting, Manufacturing, HR — all modules built for real businesses.','Skills: Odoo 15–19, Module Customization, ERP Automations, Python, XML, PostgreSQL, Data Migration'] },
  { id: 'LVL_04', role: 'Server Infrastructure', company: 'Server & Infrastructure Engineer', period: '2024 — Present', status: 'ACHIEVED', points: ['Ubuntu environments, Docker containers, Nginx configs, Digital Ocean, DNS, GitHub CI/CD.','Full server ops from SSH access to cron automation.','Skills: Ubuntu, Docker, Nginx, Digital Ocean, DNS, GitHub CI/CD, SSH, Jenkins, Git'] },
  { id: 'LVL_05', role: 'Cross-Platform Dev', company: 'Flutter & Full-Stack Developer', period: '2024 — 2025', status: 'ACHIEVED', points: ['Android and iPhone apps — fluid, clean, production-grade with Flutter and Dart.','Responsive UIs, state management, REST integrations.','Skills: Flutter, Dart, Next.js, React, Django, TypeScript, Tailwind CSS, Supabase, MongoDB'] },
  { id: 'LVL_06', role: 'IT Administration', company: 'IT Administrator / IT Manager Track', period: 'Target 2026', status: 'ACTIVE_LEARNING', points: ['Growing into the IT Consultant identity — networking, hardware, VPN, server rack management.','The goal: the person any company calls for any IT consulting need.','Skills: IP Testing, Router Config, Biometric Integration, Server Rack Mgmt, VPN & Tunneling'] },
  { id: 'LVL_07', role: 'Cybersecurity', company: 'Cybersecurity & Ethical Hacking', period: 'Planning Phase', status: 'QUEUED', points: ['Ethical hacking focused on the IT and ERP field — protecting the systems I build.','The seventh level completes the full-stack IT consultant vision.','Skills: Ethical Hacking, Penetration Testing, Network Security, ERP Security'] },
];

const statusStyle: Record<string, string> = {
  ACHIEVED:       'text-accent-cyan border-accent-cyan/30 bg-accent-cyan/10',
  ACTIVE_LEARNING:'text-text-200 border-text-200/30 bg-text-200/10',
  QUEUED:         'text-text-400 border-text-400/30 bg-text-400/10',
};

export default function Experience() {
  const listRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    const items = listRef.current?.querySelectorAll('.exp-item');
    items?.forEach((item) => {
      gsap.fromTo(item, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: item, start: "top 85%" } });
    });
  }, []);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="experience" className="snap-section relative w-full bg-bg-base z-20 border-t border-border-light flex flex-col" style={{ minHeight: '100svh' }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] hidden md:block"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      {/* ── MOBILE accordion ── */}
      <div className="md:hidden flex flex-col w-full h-full overflow-y-auto">
        <div className="px-5 pt-8 pb-4 flex items-center justify-between">
          <span className="section-caption">Experience</span>
          <span className="font-mono text-[9px] text-text-400 tracking-widest">TAP TO EXPAND</span>
        </div>
        <div className="flex flex-col divide-y divide-border-light">
          {experiences.map((exp) => {
            const isOpen = openId === exp.id;
            return (
              <div key={exp.id} className="flex flex-col">
                <button
                  onClick={() => toggle(exp.id)}
                  className="flex items-center justify-between px-5 py-4 text-left w-full group"
                >
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[9px] text-text-400 tracking-[0.2em]">{exp.id}</span>
                      <span className={`font-mono text-[8px] tracking-widest uppercase px-2 py-0.5 border ${statusStyle[exp.status]}`}>{exp.status}</span>
                    </div>
                    <span className="text-text-100 text-sm font-light heading-display truncate">{exp.role}</span>
                  </div>
                  <span className="font-mono text-accent-cyan text-xs ml-3 flex-shrink-0 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                </button>

                {/* Expandable content */}
                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="px-5 pb-6 flex flex-col gap-3 border-l-2 border-accent-cyan/30 ml-5">
                    <p className="font-mono text-[10px] text-text-400 tracking-widest uppercase">{exp.company} · {exp.period}</p>
                    {exp.points.map((pt, i) => (
                      <p key={i} className="text-text-300 text-xs leading-relaxed font-light">{pt}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── DESKTOP list ── */}
      <div className="hidden md:block w-full py-48 relative z-10">
        <div className="max-w-[1600px] mx-auto px-12 w-full grid grid-cols-12 gap-8 items-start">
          <div className="col-span-3">
            <span className="section-caption sticky top-32">Experience</span>
          </div>
          <div ref={listRef} className="col-span-9 flex flex-col border-l border-border-light pl-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`exp-item group flex flex-col lg:flex-row justify-between py-16 relative ${index !== 0 ? 'border-t border-border-light' : ''}`}>
                <div className="absolute -left-[53px] top-20 w-3 h-3 border border-border-light bg-bg-base group-hover:bg-text-100 transition-colors duration-500 hidden md:block" />
                <div className="flex-1 pr-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-[10px] text-text-400 tracking-[0.2em]">{exp.id}</span>
                    <div className="h-[1px] w-12 bg-border-light" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-normal text-text-100 mb-2 heading-display group-hover:translate-x-4 transition-transform duration-500">{exp.role}</h3>
                  <div className="text-xl text-text-300 font-light mb-8 flex items-center gap-4">
                    {exp.company}<span className="inline-block w-2 h-2 rounded-full bg-accent-cyan opacity-50" />
                  </div>
                  <div className="space-y-4 border-l border-border-light pl-6 relative">
                    <div className="absolute top-0 left-0 w-[2px] h-0 bg-text-400 group-hover:h-full transition-all duration-700" />
                    {exp.points.map((pt, i) => (
                      <p key={i} className="text-text-300 text-sm font-light max-w-xl leading-relaxed">{pt}</p>
                    ))}
                  </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:text-right flex flex-col items-start lg:items-end justify-start">
                  <span className="font-mono text-xs text-text-400 tracking-widest uppercase border border-border-light px-4 py-2">{exp.period}</span>
                  <span className={`mt-4 font-mono text-[10px] tracking-widest uppercase px-3 py-1 border ${statusStyle[exp.status]}`}>STATUS: {exp.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

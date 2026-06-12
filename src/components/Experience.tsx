'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const experiences = [
  {
    role: "Level 01 / Web Foundation",
    company: "Python Full-Stack Developer",
    period: "2023 — 2024",
    id: "LVL_01",
    status: "STATUS: ACHIEVED",
    points: [
      "Started with the core of coding — Python as the first serious language. Built real, production-grade websites from scratch with hands-on manual coding.",
      "Learned how a professional web product actually comes together — REST APIs, PostgreSQL schemas, frontend-backend architecture.",
      "This small portfolio itself? A live demo of Level 01 power. The big-bucket data websites? That confidence is built right here.",
      "Skills: Python, Django, PostgreSQL, REST APIs, HTML5, CSS3, JavaScript"
    ]
  },
  {
    role: "Level 02 / AI & Intelligence Layer",
    company: "AI Integration Specialist",
    period: "2024 — Present",
    id: "LVL_02",
    status: "STATUS: ACHIEVED",
    points: [
      "This is where everything accelerated. Learned how to use AI not just as a tool but as a skill multiplier — integrating LLMs into workflows, automating intelligent processes, prompt engineering for real outputs.",
      "Running local models on servers (Ollama, LLaMA, OpenClaw) and working with every major AI platform (Claude, Gemini, GPT-4, Grok, Perplexity, NotebookLM).",
      "AI isn't the future here — it's the present workflow.",
      "Skills: LLM Integration, Prompt Engineering, AI Workflows, Ollama, LLaMA, OpenClaw, Claude, Gemini, GPT-4, Grok, Perplexity, NotebookLM"
    ]
  },
  {
    role: "Level 03 / ERP Mastery",
    company: "Odoo Techno-Functional Executive",
    period: "2024 — Present",
    id: "LVL_03",
    status: "STATUS: ACHIEVED",
    points: [
      "Odoo from Tiny ERP to the current version — fully customized, configured, and deployed. This isn't just using ERP software; it's building ERP ecosystems from scratch for real businesses.",
      "Sales, CRM, Inventory, Accounting, Manufacturing, HR — all modules, simple to complex. Built complete ERPs for multiple companies.",
      "With AI assistance and the right workflows, a full community-friendly ERP takes maximum 4 months. That's the Level 03 power.",
      "Skills: Odoo 15–19, Module Customization, ERP Automations, Python, XML, PostgreSQL, Data Migration, Frappe"
    ]
  },
  {
    role: "Level 04 / Server Infrastructure",
    company: "Server & Infrastructure Engineer",
    period: "2024 — Present",
    id: "LVL_04",
    status: "STATUS: ACHIEVED",
    points: [
      "ERPs need homes. Servers need maintenance. This level is about owning the infrastructure layer — Ubuntu environments, Docker containers, Nginx configs, Digital Ocean deployments, DNS platforms, GitHub CI/CD pipelines.",
      "Full server ops from SSH access to cron automation. Built for clients who need their ERP handed over clean and running.",
      "With AI adaptation, server handover becomes smooth and straightforward.",
      "Skills: Ubuntu, Docker, Nginx, Digital Ocean, DNS Platforms, GitHub CI/CD, SSH & Server Ops, Jenkins, Git & Version Control, Cron & Automation"
    ]
  },
  {
    role: "Level 05 / Cross-Platform Development",
    company: "Flutter & Full-Stack Developer",
    period: "2024 — 2025",
    id: "LVL_05",
    status: "STATUS: ACHIEVED",
    points: [
      "Apps for Android and iPhone — fluid, clean, production-grade. Flutter and Dart for cross-platform mobile, plus the full modern web stack.",
      "This level is about building user-facing products that actually work in the real world — responsive UIs, state management, REST integrations, modern frameworks.",
      "Skills: Flutter, Dart, Next.js, React, Django, Node.js, TypeScript, JavaScript, Tailwind CSS, Supabase, MongoDB, Blender (basics)"
    ]
  },
  {
    role: "Level 06 / IT Administration",
    company: "IT Administrator / IT Manager Track",
    period: "Currently Studying — Target 2026",
    id: "LVL_06",
    status: "STATUS: ACTIVE_LEARNING",
    points: [
      "Growing into the IT Consultant identity. This level covers the full IT Admin and IT Manager skill set — networking, hardware, VPN, server rack management.",
      "The goal isn't just a job title; it's becoming the person any company or entrepreneur calls when they need an IT consultant for any field.",
      "7 months to completion — 7 is the achievement number.",
      "Skills: IP Testing, Router Config, Biometric Integration, Server Rack Mgmt, Network Debugging, VPN & Tunneling"
    ]
  },
  {
    role: "Level 07 / Cybersecurity",
    company: "Cybersecurity & Ethical Hacking",
    period: "Planning Phase",
    id: "LVL_07",
    status: "STATUS: QUEUED",
    points: [
      "The seventh level. Cybersecurity and ethical hacking — specifically focused on the IT and ERP field. Protecting the systems I build.",
      "The number 7 is significant — born 07/05/2005, and the seventh achievement is already in the plan. This level completes the full-stack IT consultant vision.",
      "Skills: Ethical Hacking, Penetration Testing, Network Security, ERP Security, Vulnerability Assessment"
    ]
  }
];

export default function Experience() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const items = listRef.current?.querySelectorAll('.exp-item');
    if (items) {
      items.forEach((item) => {
        gsap.fromTo(item,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );
      });
    }
  }, []);

  return (
    <section id="experience" className="w-full py-48 bg-bg-base relative z-20 border-t border-border-light">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start relative z-10">
        
        <div className="col-span-1 md:col-span-3">
          <span className="section-caption sticky top-32">Experience</span>
          <div className="hidden md:block w-[1px] h-32 bg-border-light absolute left-[12%] top-48" />
        </div>

        <div ref={listRef} className="col-span-1 md:col-span-9 flex flex-col border-l border-border-light pl-0 md:pl-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`exp-item group flex flex-col lg:flex-row justify-between py-16 relative ${index !== 0 ? 'border-t border-border-light' : ''}`}
            >
              {/* Technical Marker */}
              <div className="absolute -left-[53px] top-20 w-3 h-3 border border-border-light bg-bg-base hidden md:block group-hover:bg-text-100 transition-colors duration-500" />
              
              <div className="flex-1 pr-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-[10px] text-text-400 tracking-[0.2em]">{exp.id}</span>
                  <div className="h-[1px] w-12 bg-border-light" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-normal text-text-100 mb-2 heading-display group-hover:translate-x-4 transition-transform duration-500">
                  {exp.role}
                </h3>
                <div className="text-xl text-text-300 font-light mb-8 flex items-center gap-4">
                  {exp.company}
                  <span className="inline-block w-2 h-2 rounded-full bg-accent-cyan opacity-50" />
                </div>
                
                <div className="space-y-4 border-l border-border-light pl-6 relative">
                  <div className="absolute top-0 left-0 w-[2px] h-0 bg-text-400 group-hover:h-full transition-all duration-700" />
                  {exp.points.map((point, i) => (
                    <p key={i} className="text-text-300 text-sm font-light max-w-xl leading-relaxed">
                      {point}
                    </p>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 lg:mt-0 lg:text-right flex flex-col items-start lg:items-end justify-start">
                <span className="font-mono text-xs text-text-400 tracking-widest uppercase border border-border-light px-4 py-2">
                  {exp.period}
                </span>
                {exp.status && (
                  <span className={`mt-4 font-mono text-[10px] tracking-widest uppercase px-3 py-1 ${
                    exp.status.includes('ACHIEVED') ? 'text-accent-cyan border border-accent-cyan/30 bg-accent-cyan/10' :
                    exp.status.includes('ACTIVE_LEARNING') ? 'text-text-200 border border-text-200/30 bg-text-200/10' :
                    'text-text-400 border border-text-400/30 bg-text-400/10'
                  }`}>
                    {exp.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

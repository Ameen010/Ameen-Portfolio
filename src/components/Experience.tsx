'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const experiences = [
  {
    role: "Odoo Techno-Functional Executive",
    company: "Orgvein Pvt Ltd",
    period: "2024 — Present",
    id: "EXP_01",
    points: [
      "Functional mastery across Odoo 15–19: Configured and optimized all core modules (Sales, CRM, Inventory, Accounting, Manufacturing, HR, Purchase, Website) for company operations and client deployments.",
      "Technical infrastructure: Managed Ubuntu-based server environments with Docker, Nginx, and PostgreSQL — handling DNS platforms, Digital Ocean deployments, and GitHub-based CI/CD pipelines.",
      "Data migrations & database operations: Executed complex data migrations between Odoo versions and external systems using PostgreSQL, CSV/Excel imports, and custom Python scripts.",
      "Networking & integrations: Configured IP testing, router setups, biometric device integrations, and server-level connectivity for enterprise clients.",
      "AI & LLM integration: Applied local LLMs (Ollama, LLaMA, OpenClaw) and public AI platforms (Gemini, Claude, GPT-4) for workflow automation and intelligent process optimization.",
      "Backend customization: Developed custom Odoo modules, server actions, automated workflows, and scheduled cron jobs to streamline business operations across Community and Enterprise editions."
    ]
  },
  {
    role: "Cross-Platform Flutter Developer",
    company: "Freelance & App Consulting",
    period: "2024 — 2025",
    id: "EXP_02",
    points: [
      "Designed and engineered fluid cross-platform mobile applications for Android and iOS using Flutter and Dart.",
      "Implemented highly responsive UIs, clean state management (BLoC/Provider), and robust REST API integrations."
    ]
  },
  {
    role: "Odoo Developer",
    company: "Akira Software and Solutions",
    period: "2024 — 2025",
    id: "EXP_03",
    points: [
      "Developed custom Odoo modules and tailored existing modules to build client-specific ERP automations across Odoo Community and Enterprise workflows.",
      "Handled full-cycle client implementations including data migration pipelines, PostgreSQL database management, import/export operations, and server performance optimization."
    ]
  },
  {
    role: "Python Full Stack Developer",
    company: "Networks System Technology",
    period: "2023 — 2024",
    id: "EXP_04",
    points: [
      "Built and deployed scalable web applications using Python web frameworks and modern frontend JavaScript architectures.",
      "Designed secure, performant RESTful APIs and optimized complex PostgreSQL database schemas."
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
    <section className="w-full py-48 bg-bg-base relative z-20 border-t border-border-light">
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
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

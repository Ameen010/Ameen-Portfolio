'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
  { title: "Enterprise ERP", category: "ERP Automations & Architecture", year: "2026", id: "PRJ_ERP_01" },
  { title: "Flutter Mobile Suite", category: "Cross-Platform Apps Building", year: "2025", id: "PRJ_FLT_02" },
  { title: "Web Applications", category: "Modern Full-Stack Development", year: "2025", id: "PRJ_WEB_03" },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="snap-section relative w-full bg-bg-surface z-20 border-t border-border-light flex items-center" style={{ minHeight: '100svh' }}>

      {/* ── MOBILE ── */}
      <div className="md:hidden w-full px-5 py-8 flex flex-col gap-6 overflow-y-auto max-h-[100svh]">
        <span className="section-caption">Case Studies</span>
        <div className="flex flex-col divide-y divide-border-light">
          {projects.map((project, index) => (
            <div key={index} className="py-6 flex flex-col gap-2">
              <div className="flex items-center gap-3 font-mono text-[9px] text-text-400 tracking-[0.2em] uppercase">
                <span>INDEX: {String(index + 1).padStart(2, '0')}</span>
                <span className="w-6 h-[1px] bg-border-light" />
                <span>{project.id}</span>
              </div>
              <p className="heading-display text-3xl text-text-200">{project.title}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="font-mono text-[10px] text-text-400 tracking-widest uppercase">{project.category}</span>
                <span className="border border-border-light px-2 py-1 font-mono text-[10px] text-text-400">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 border border-border-light/50 bg-bg-elevated/30">
          <p className="font-mono text-[10px] text-text-400 tracking-widest uppercase leading-relaxed">
            {"// More detailed case studies & project documentation available on request."}
          </p>
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block w-full py-48 relative z-10">
        <div className="max-w-[1600px] mx-auto px-12 w-full grid grid-cols-12 gap-8 items-start">
          <div className="col-span-3">
            <span className="section-caption sticky top-32">Case Studies</span>
          </div>
          <div className="col-span-9 flex flex-col">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer py-12 border-b border-border-light last:border-b-0 relative">
                <div className="absolute -left-6 md:-left-12 top-0 bottom-0 w-[1px] bg-border-light" />
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end relative transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-4">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-4 mb-4 font-mono text-[10px] text-text-400 tracking-[0.2em] uppercase">
                      <span>INDEX: {String(index + 1).padStart(2, '0')}</span>
                      <span className="w-8 h-[1px] bg-border-light" />
                      <span>{project.id}</span>
                    </div>
                    <h3 className="heading-display text-4xl md:text-5xl lg:text-6xl text-text-200 group-hover:text-text-100 transition-colors duration-500">{project.title}</h3>
                  </div>
                  <div className="flex flex-col items-start md:items-end mt-6 md:mt-0 font-mono text-xs tracking-widest uppercase text-text-400 gap-2">
                    <span className="border border-border-light px-3 py-1 group-hover:bg-text-100 group-hover:text-bg-base transition-colors duration-300">{project.year}</span>
                    <span className="group-hover:text-text-200 transition-colors duration-500">{project.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

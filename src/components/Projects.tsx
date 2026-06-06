'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
  {
    title: "Enterprise ERP",
    category: "ERP Automations & Architecture",
    year: "2026",
    id: "PRJ_ERP_01"
  },
  {
    title: "Flutter Mobile Suite",
    category: "Cross-Platform Apps Building",
    year: "2025",
    id: "PRJ_FLT_02"
  },
  {
    title: "Web Applications",
    category: "Modern Full-Stack Development",
    year: "2025",
    id: "PRJ_WEB_03"
  }
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="group cursor-pointer py-12 border-b border-border-light last:border-b-0 relative">
      {/* Background tracking lines */}
      <div className="absolute -left-6 md:-left-12 top-0 bottom-0 w-[1px] bg-border-light" />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end relative transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-4 font-mono text-[10px] text-text-400 tracking-[0.2em] uppercase">
            <span>INDEX: {String(index + 1).padStart(2, '0')}</span>
            <span className="w-8 h-[1px] bg-border-light" />
            <span>{project.id}</span>
          </div>
          <h3 className="heading-display text-4xl md:text-5xl lg:text-6xl text-text-200 group-hover:text-text-100 transition-colors duration-500">
            {project.title}
          </h3>
        </div>
        
        <div className="flex flex-col items-start md:items-end mt-6 md:mt-0 font-mono text-xs tracking-widest uppercase text-text-400 gap-2">
          <span className="border border-border-light px-3 py-1 group-hover:bg-text-100 group-hover:text-bg-base transition-colors duration-300">
            {project.year}
          </span>
          <span className="group-hover:text-text-200 transition-colors duration-500">{project.category}</span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-48 bg-bg-surface relative z-20 border-t border-border-light">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start relative z-10">
        
        <div className="col-span-1 md:col-span-3">
          <span className="section-caption sticky top-32">Case Studies</span>
        </div>

        <div className="col-span-1 md:col-span-9 flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

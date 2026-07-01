'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const skillCategories = [
  { title: "ERP & Automation", skills: ["Odoo 15–19","Odoo Community & Enterprise","Module Customization","ERP Automations","Frappe","Python","XML","PostgreSQL","Data Migration","Import/Export Ops"] },
  { title: "Server & Infrastructure", skills: ["Ubuntu","Docker","Nginx","Digital Ocean","DNS Platforms","GitHub CI/CD","SSH & Server Ops","Jenkins","Git & Version Control","Cron & Automation"] },
  { title: "Web & Cross-Platform", skills: ["Flutter","Dart","Next.js","React","Django","Node.js","TypeScript","JavaScript","HTML5","CSS3","Tailwind CSS","Supabase","MongoDB","Postman","Blender (basics)"] },
  { title: "Networking & Hardware", skills: ["IP Testing","Router Config","Biometric Integration","Server Rack Mgmt","Network Debugging","VPN & Tunneling"] },
  { title: "AI & Intelligence", skills: ["LLM Integration","Prompt Engineering","AI Workflows","Ollama","LLaMA","OpenClaw","Claude","Gemini","GPT-4","Grok","Perplexity","NotebookLM"] },
  { title: "Data Science & ML", skills: ["Python (Data)","Pandas","NumPy","Matplotlib","ML Fundamentals","Data Analysis","Jupyter Notebook"] },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    const items = containerRef.current?.querySelectorAll('.skill-reveal');
    items?.forEach((item) => {
      gsap.fromTo(item, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: item, start: "top 95%" } });
    });
  }, []);

  return (
    <section id="capabilities" ref={containerRef} className="snap-section relative w-full bg-bg-surface z-20 border-t border-border-light flex flex-col" style={{ minHeight: '100svh' }}>

      {/* ── MOBILE: compact pill grid ── */}
      <div className="md:hidden flex flex-col w-full h-full overflow-y-auto px-5 py-8 gap-8">
        <span className="section-caption">Capabilities</span>
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-text-400">{"// "}{cat.title}</p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((sk) => (
                <span key={sk} className="px-3 py-1 border border-border-light text-text-300 text-[10px] font-mono tracking-wide">{sk}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── DESKTOP: large text cloud ── */}
      <div className="hidden md:block w-full py-48">
        <div className="max-w-[1600px] mx-auto px-12 w-full grid grid-cols-12 gap-8 items-start">
          <div className="col-span-3">
            <span className="section-caption sticky top-32 skill-reveal">Capabilities</span>
          </div>
          <div className="col-span-9 flex flex-col gap-24">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="flex flex-col gap-8">
                <p className="text-sm font-mono text-text-400 tracking-widest uppercase skill-reveal">{"// "}{category.title}</p>
                <div className="flex flex-wrap gap-x-12 gap-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill} className="skill-reveal text-4xl md:text-5xl lg:text-6xl font-light text-text-300 hover:text-text-100 transition-colors duration-500 cursor-default heading-display">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

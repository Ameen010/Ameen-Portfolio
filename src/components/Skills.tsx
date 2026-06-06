'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const skillCategories = [
  {
    title: "ERP & Automation",
    skills: [
      "Odoo 15–19",
      "Odoo Community & Enterprise",
      "Module Customization",
      "ERP Automations",
      "Frappe",
      "Python",
      "XML",
      "PostgreSQL",
      "Data Migration",
      "Import/Export Ops"
    ]
  },
  {
    title: "Server & Infrastructure",
    skills: [
      "Ubuntu",
      "Docker",
      "Nginx",
      "Digital Ocean",
      "DNS Platforms",
      "GitHub CI/CD",
      "SSH & Server Ops",
      "Jenkins",
      "Git & Version Control",
      "Cron & Automation"
    ]
  },
  {
    title: "Web & Cross-Platform",
    skills: [
      "Flutter",
      "Dart",
      "Next.js",
      "React",
      "Django",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Supabase",
      "MongoDB",
      "Postman"
    ]
  },
  {
    title: "Networking & Hardware",
    skills: [
      "IP Testing",
      "Router Config",
      "Biometric Integration",
      "Server Rack Mgmt",
      "Network Debugging",
      "VPN & Tunneling"
    ]
  },
  {
    title: "AI & Intelligence",
    skills: [
      "LLM Integration",
      "Prompt Engineering",
      "AI Workflows",
      "Ollama",
      "LLaMA",
      "OpenClaw",
      "Claude",
      "Gemini",
      "GPT-4",
      "Grok",
      "Perplexity",
      "NotebookLM"
    ]
  }
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = containerRef.current?.querySelectorAll('.skill-reveal');
    if (items) {
      items.forEach((item) => {
        gsap.fromTo(item,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 95%",
            }
          }
        );
      });
    }
  }, []);

  return (
    <section ref={containerRef} className="w-full py-48 bg-bg-surface relative z-20 border-t border-border-light">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
        
        <div className="col-span-1 md:col-span-3">
          <span className="section-caption sticky top-32 skill-reveal">Capabilities</span>
        </div>

        <div className="col-span-1 md:col-span-9 flex flex-col gap-24">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="flex flex-col gap-8">
              <h3 className="text-sm font-mono text-text-400 tracking-widest uppercase skill-reveal">
                // {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-x-12 gap-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="skill-reveal text-4xl md:text-5xl lg:text-6xl font-light text-text-300 hover:text-text-100 transition-colors duration-500 cursor-default heading-display"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

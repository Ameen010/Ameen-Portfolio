'use client';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = textRef.current?.querySelectorAll('.about-reveal');
    
    if (textElements) {
      textElements.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            }
          }
        );
      });
    }
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-48 bg-bg-surface z-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
        
        {/* Left Side: Empty space / minimal layout element for strict grid adherence */}
        <div className="col-span-1 md:col-span-2">
          <span className="section-caption about-reveal">Philosophy</span>
        </div>

        {/* Center/Right: Text Content */}
        <div ref={textRef} className="col-span-1 md:col-span-6 flex flex-col gap-12">
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-text-100 about-reveal leading-tight">
            Bridging business logic <br/>
            <span className="text-text-400">with technical precision.</span>
          </h2>

          <div className="text-lg text-text-300 font-light leading-relaxed space-y-8 max-w-2xl">
            <p className="about-reveal">
              With <strong className="text-text-100 font-normal">2+ years as an Odoo Techno-Functional Developer</strong>, I operate across the full spectrum of ERP — from functional module configuration with knowledge spanning from the legacy <strong className="text-text-100 font-normal">Tiny ERP to modern Odoo 19</strong> (Sales, Inventory, Accounting, Manufacturing, HR, and more) to deep technical customization, backend development, and server-level infrastructure management.
            </p>
            <p className="about-reveal">
              On the technical side, I work hands-on with <strong className="text-text-100 font-normal">Ubuntu, Docker, Nginx, PostgreSQL</strong>, and cloud platforms like <strong className="text-text-100 font-normal">Digital Ocean</strong> — handling DNS configurations, server deployments, data migrations, and GitHub-based CI/CD workflows. My toolkit extends to <strong className="text-text-100 font-normal">networking fundamentals</strong> including IP testing, router configuration, and biometric integrations.
            </p>
            <p className="about-reveal">
              Beyond ERP, I bring working knowledge of <strong className="text-text-100 font-normal">local LLMs</strong> (Ollama, LLaMA, OpenClaw) and <strong className="text-text-100 font-normal">public AI platforms</strong> (Gemini, Claude, GPT-4), combined with cross-platform development expertise in <strong className="text-text-100 font-normal">Flutter</strong> and modern <strong className="text-text-100 font-normal">Web Applications</strong> — constructing ecosystems that are intelligent, resilient, and production-ready.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 about-reveal">
            {['Tiny ERP to Odoo 19', 'ERP Automations', 'Server Infrastructure', 'Data Migration', 'Docker & Ubuntu', 'LLM Integration', 'Networking', 'Flutter Apps', 'Web Development', 'Digital Ocean'].map((skill) => (
              <div key={skill} className="px-6 py-3 border border-border-light text-text-300 text-xs tracking-widest uppercase font-mono">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Photo */}
        <div className="col-span-1 md:col-span-4 relative mt-16 md:mt-0 about-reveal">
          <div className="aspect-[3/4] overflow-hidden relative border border-border-light bg-bg-base p-2">
            <motion.div 
              className="w-full h-[130%] absolute -top-[15%] left-0"
              style={{ y: imgY }}
            >
              <Image 
                src="/images/about.jpg" 
                alt="Ameen Noushad" 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover filter grayscale contrast-125 brightness-90"
              />
            </motion.div>
            
            {/* Subtle overlay for blending */}
            <div className="absolute inset-0 bg-bg-surface mix-blend-color opacity-20" />
          </div>
          
          <div className="absolute -bottom-6 -left-6 text-[10px] font-mono text-text-400 tracking-widest uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>
            Est. 2026 — Kerala, IN
          </div>
        </div>

      </div>
    </section>
  );
}

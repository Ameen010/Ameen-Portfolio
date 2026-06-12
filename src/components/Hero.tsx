'use client';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Magnetic from './Magnetic';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const revealChars = textRef.current?.querySelectorAll('.reveal-char');
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.fromTo(".tech-line", 
      { scaleX: 0 },
      { scaleX: 1, duration: 1.5, stagger: 0.1, transformOrigin: "left" }
    );

    if (revealChars && revealChars.length > 0) {
      tl.fromTo(revealChars, 
        { y: 120, opacity: 0, rotateX: -45 },
        { y: 0, opacity: 1, rotateX: 0, duration: 2, stagger: 0.04 },
        "-=1"
      );
    }

    tl.fromTo(".hero-meta", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5 }, 
      "-=1.2"
    )
    .fromTo(".hero-img-container",
      { clipPath: 'inset(100% 0 0 0)', scale: 1.1 },
      { clipPath: 'inset(0% 0 0 0)', scale: 1, duration: 2, ease: "power4.inOut" },
      "-=1.5"
    )
    .fromTo(".progress-fill",
      { scaleX: 0 },
      { scaleX: 0.5, duration: 2, ease: "power2.out", transformOrigin: "left" },
      "-=1"
    );

  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-bg-base border-b border-border-light">
      
      {/* Engineered Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      
      {/* Technical Crosshairs */}
      <div className="absolute top-12 left-12 w-4 h-4 border-t border-l border-text-400 opacity-50" />
      <div className="absolute top-12 right-12 w-4 h-4 border-t border-r border-text-400 opacity-50" />
      <div className="absolute bottom-12 left-12 w-4 h-4 border-b border-l border-text-400 opacity-50" />
      
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 max-w-[1600px] w-full mx-auto" style={{ height: '100%' }}>
        <motion.div 
          className="relative z-20 flex flex-col w-full"
          style={{ y: yText, opacity }}
        >
          {/* Top Technical Metadata */}
          <div className="flex justify-between items-center w-full mb-12 font-mono text-[10px] text-text-400 uppercase tracking-[0.3em] hero-meta">
            <span>SYS.STATUS: <span className="text-accent-cyan">ONLINE</span></span>
            <span>COORD: 10.8505° N, 76.2711° E</span>
          </div>

          <div ref={textRef} className="w-full perspective-[1200px]">
            <h1 className="heading-display text-[15vw] md:text-[12vw] font-bold uppercase text-text-100 flex flex-col">
              <div className="overflow-hidden leading-none pb-2 -mb-2 flex items-center gap-8">
                <span className="hidden md:block w-32 h-[2px] bg-text-400 tech-line"></span>
                <div>
                  {"AMEENN".split('').map((char, i) => (
                    <span key={`f-${i}`} className="reveal-char inline-block origin-bottom">{char}</span>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden leading-none text-text-300 pb-2 -mb-2 md:ml-[15vw]">
                {"NOUSHAD".split('').map((char, i) => (
                  <span key={`l-${i}`} className="reveal-char inline-block origin-bottom">{char}</span>
                ))}
              </div>
            </h1>
          </div>

          <div className="hero-meta mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-8 relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-border-light tech-line origin-left" />
            
            <div className="max-w-lg">
              <h2 className="font-mono text-xs text-text-400 mb-4 tracking-widest uppercase">Odoo Techno-Functional Developer</h2>
              <p className="text-text-200 font-light leading-relaxed text-sm md:text-base">
                Odoo Techno-Functional Developer with 2+ years of hands-on experience, with knowledge spanning from the legacy Tiny ERP to modern Odoo 19, bridging functional ERP operations with deep technical execution — from server infrastructure &amp; data migrations to LLM integration &amp; cross-platform development.
              </p>
              
              {/* Progress Bar Animation */}
              <div className="mt-8 flex flex-col gap-2 font-mono text-[10px] text-text-400 tracking-[0.2em] uppercase hero-meta max-w-[240px]">
                <div className="flex justify-between items-center">
                  <span>GROWTH_INDEX</span>
                  <span>LVL 3.5 OF 7 LEVELS</span>
                </div>
                <div className="w-full h-[2px] bg-border-light relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-full bg-text-200 progress-fill origin-left" />
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Magnetic>
                <a 
                  href="mailto:ameenkido5412@gmail.com"
                  className="btn-premium hover-target bg-text-100 text-bg-base border-transparent hover:text-text-100 hover:bg-transparent hover:border-text-100"
                >
                  <span className="relative z-10">Contact</span>
                </a>
              </Magnetic>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Image - perfectly aligned and scaled */}
      <motion.div 
        className="absolute top-0 right-0 w-[80vw] md:w-[50vw] h-full z-0 pointer-events-none origin-top-right hero-img-container"
        style={{ y: yImage }}
      >
        <div className="relative w-full h-full border-l border-border-light">
          <Image 
            src="/images/hero.jpg" 
            alt="Ameen Noushad" 
            fill
            sizes="(max-width: 768px) 80vw, 50vw"
            priority
            className="object-cover grayscale mix-blend-luminosity opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-base via-bg-base/50 to-transparent w-[50%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-transparent to-transparent h-full" />
        </div>
      </motion.div>

    </section>
  );
}

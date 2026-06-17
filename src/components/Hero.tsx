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

  const yText  = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Skip heavy GSAP animations on mobile
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;

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
    <section
      id="hero"
      ref={containerRef}
      className="snap-section relative w-full flex items-end justify-center bg-bg-base border-b border-border-light overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] hidden sm:block"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      {/* Crosshairs — desktop only */}
      <div className="absolute top-12 left-12 w-4 h-4 border-t border-l border-text-400 opacity-50 hidden md:block" />
      <div className="absolute top-12 right-12 w-4 h-4 border-t border-r border-text-400 opacity-50 hidden md:block" />
      <div className="absolute bottom-12 left-12 w-4 h-4 border-b border-l border-text-400 opacity-50 hidden md:block" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-20 md:pb-32 px-5 md:px-12 max-w-[1600px] w-full mx-auto" style={{ height: '100%' }}>
        <motion.div
          className="relative z-20 flex flex-col w-full"
          style={{ y: yText, opacity }}
        >
          {/* Status line */}
          <div className="flex justify-between items-center w-full mb-4 md:mb-12 font-mono text-[9px] md:text-[10px] text-text-400 uppercase tracking-[0.3em] hero-meta">
            <span>SYS.STATUS: <span className="text-accent-cyan">ONLINE</span></span>
            <span className="hidden sm:inline">COORD: 10.8505° N, 76.2711° E</span>
          </div>

          {/* Name */}
          <div ref={textRef} className="w-full">
            <h1 className="heading-display text-[18vw] sm:text-[14vw] md:text-[12vw] font-bold uppercase text-text-100 flex flex-col leading-[0.88]">
              <div className="overflow-visible flex items-center gap-4 md:gap-8">
                <span className="hidden md:block w-32 h-[2px] bg-text-400 tech-line" />
                <div>
                  {"AMEENN".split('').map((char, i) => (
                    <span key={`f-${i}`} className="reveal-char inline-block origin-bottom">{char}</span>
                  ))}
                </div>
              </div>
              <div className="overflow-visible text-text-300 md:ml-[15vw]">
                {"NOUSHAD".split('').map((char, i) => (
                  <span key={`l-${i}`} className="reveal-char inline-block origin-bottom">{char}</span>
                ))}
              </div>
            </h1>
          </div>

          {/* Meta + Buttons */}
          <div className="hero-meta mt-4 md:mt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8 pt-4 md:pt-8 relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-border-light tech-line origin-left" />

            <div className="max-w-lg">
              <h2 className="font-mono text-[10px] md:text-xs text-text-400 mb-2 md:mb-4 tracking-widest uppercase">Odoo Techno-Functional Developer</h2>
              <p className="text-text-200 font-light leading-relaxed text-xs md:text-sm hidden md:block">
                Odoo Techno-Functional Developer with 2+ years of hands-on experience, spanning from Tiny ERP to modern Odoo 19 — bridging functional ERP with deep technical execution.
              </p>

              {/* Progress bar */}
              <div className="mt-4 md:mt-8 flex flex-col gap-2 font-mono text-[9px] md:text-[10px] text-text-400 tracking-[0.2em] uppercase hero-meta max-w-[200px] md:max-w-[240px]">
                <div className="flex justify-between items-center">
                  <span>GROWTH_INDEX</span>
                  <span>LVL 3.5/7</span>
                </div>
                <div className="w-full h-[2px] bg-border-light relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-full bg-text-200 progress-fill origin-left" style={{ transform: 'scaleX(0.5)' }} />
                </div>
              </div>
            </div>

            {/* Nav buttons — 3-col on mobile, wrap on desktop */}
            <div className="grid grid-cols-3 md:flex md:flex-wrap gap-2 w-full md:max-w-[600px] z-50">
              {[
                { label: 'Philosophy',  href: '#philosophy' },
                { label: 'Experience',  href: '#experience' },
                { label: 'Capabilities', href: '#capabilities' },
                { label: 'Case Studies', href: '#projects' },
                { label: 'Transmission', href: '#transmission' },
                { label: 'Contact',     href: 'mailto:ameenkido5412@gmail.com' },
              ].map(({ label, href }) => (
                <Magnetic key={label}>
                  <a
                    href={href}
                    className="btn-premium hover-target bg-text-100 text-bg-base border-transparent hover:text-text-100 hover:bg-transparent hover:border-text-100 flex items-center justify-center text-[9px] md:text-xs px-2 md:px-4 py-2 w-full"
                  >
                    <span className="relative z-10 truncate">{label}</span>
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Image */}
      <motion.div
        className="absolute top-0 right-0 w-[85vw] md:w-[50vw] h-full z-0 pointer-events-none origin-top-right hero-img-container"
        style={{ y: yImage }}
      >
        <div className="relative w-full h-full border-l border-border-light">
          <Image
            src="/images/hero.jpg"
            alt="Ameen Noushad"
            fill
            sizes="(max-width: 768px) 85vw, 50vw"
            loading="lazy"
            className="object-cover grayscale mix-blend-luminosity opacity-30 md:opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-base via-bg-base/70 to-transparent w-[60%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-transparent to-transparent h-full" />
        </div>
      </motion.div>
    </section>
  );
}

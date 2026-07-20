'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Cursor from '@/components/Cursor';
import Particles from '@/components/Particles';
import Magnetic from '@/components/Magnetic';

export default function NotFound() {
  const [path, setPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPath(window.location.pathname);
    }
  }, []);

  return (
    <div className="relative min-h-[100svh] w-full flex items-center justify-center bg-bg-base overflow-hidden px-5 py-12 select-none">
      {/* Background elements */}
      <Cursor />
      <Particles />

      {/* Grid Background overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] hidden sm:block"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', 
          backgroundSize: '100px 100px' 
        }} 
      />

      {/* Sci-fi Crosshairs decoration */}
      <div className="absolute top-12 left-12 w-4 h-4 border-t border-l border-text-400 opacity-35 hidden md:block" />
      <div className="absolute top-12 right-12 w-4 h-4 border-t border-r border-text-400 opacity-35 hidden md:block" />
      <div className="absolute bottom-12 left-12 w-4 h-4 border-b border-l border-text-400 opacity-35 hidden md:block" />
      <div className="absolute bottom-12 right-12 w-4 h-4 border-b border-r border-text-400 opacity-35 hidden md:block" />

      {/* Main glass card */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-panel max-w-2xl w-full p-8 md:p-12 relative overflow-hidden flex flex-col items-center text-center z-10 border border-border-light bg-bg-elevated/40"
      >
        {/* Glow effect */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-accent-cyan/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-accent-purple/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Cyber Header */}
        <div className="w-full flex justify-between items-center mb-10 font-mono text-[9px] md:text-[10px] text-text-400 uppercase tracking-[0.25em]">
          <span>ERR.CODE: <span className="text-accent-cyan">404_NOT_FOUND</span></span>
          <span>SYS.SECTOR: OUT_OF_BOUNDS</span>
        </div>

        {/* Big error numbers */}
        <div className="relative mb-6">
          <h1 className="heading-display text-8xl md:text-9xl font-bold uppercase text-text-100 tracking-tighter leading-none opacity-90 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[12vw] font-mono opacity-[0.02] text-white">VOID</span>
          </div>
        </div>

        {/* Error Detail Box */}
        <div className="w-full bg-bg-base/60 border border-border-light p-4 font-mono text-left mb-8 relative">
          <div className="absolute top-0 left-0 w-2 h-[1px] bg-accent-cyan" />
          <div className="absolute top-0 left-0 w-[1px] h-2 bg-accent-cyan" />
          <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-accent-cyan" />
          <div className="absolute bottom-0 right-0 w-[1px] h-2 bg-accent-cyan" />
          
          <div className="text-[10px] md:text-xs text-text-400 mb-2 uppercase tracking-wider">
            &gt; RESOLVING PATH LOCATION:
          </div>
          <div className="text-xs md:text-sm text-text-200 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
            <span className="text-accent-purple font-semibold">&gt;</span> <span className="text-text-100">{path || '/unknown-sector'}</span>
          </div>
          <div className="text-[10px] md:text-xs text-text-300 mt-3 border-t border-border-light/50 pt-2 leading-relaxed">
            The requested destination could not be located in the database. The sector may have been relocated, purged, or never existed in the matrix.
          </div>
        </div>

        {/* Navigation Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full mt-4">
          <Magnetic>
            <Link
              href="/"
              className="btn-premium hover-target bg-text-100 text-bg-base border-transparent hover:text-text-100 hover:bg-transparent hover:border-text-100 flex items-center justify-center text-xs px-6 py-3 w-full sm:w-auto"
            >
              <span className="relative z-10 font-mono tracking-widest uppercase">INITIATE RE-ROUTING</span>
            </Link>
          </Magnetic>

          <Magnetic>
            <a
              href="mailto:ameenkido5412@gmail.com"
              className="btn-premium hover-target bg-transparent text-text-200 border-border-light hover:border-text-100 flex items-center justify-center text-xs px-6 py-3 w-full sm:w-auto"
            >
              <span className="relative z-10 font-mono tracking-widest uppercase">TRANSMIT BUG REPORT</span>
            </a>
          </Magnetic>
        </div>

        {/* Footer info */}
        <div className="mt-12 text-[8px] md:text-[9px] font-mono text-text-400 uppercase tracking-widest">
          SYS.DIAGNOSTICS — ALL SYSTEM CORES RUNNING STABLE
        </div>
      </motion.div>
    </div>
  );
}

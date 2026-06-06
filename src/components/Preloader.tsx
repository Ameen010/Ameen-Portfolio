'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) { clearInterval(interval); setTimeout(() => setDone(true), 400); return 100; }
        return prev + Math.floor(Math.random() * 8) + 3;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Grid background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'linear-gradient(rgba(0,245,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,1) 1px, transparent 1px)', backgroundSize:'60px 60px'}} />

          {/* Glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full" style={{background:'radial-gradient(circle, rgba(0,245,255,0.06) 0%, transparent 70%)'}} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full" style={{background:'radial-gradient(circle, rgba(123,47,255,0.06) 0%, transparent 70%)'}} />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-6xl font-black tracking-tighter gradient-text" style={{fontFamily:'Space Grotesk, sans-serif'}}>
                AMEENN
              </div>
              <div className="section-label mt-2 opacity-60">Loading Portfolio</div>
            </motion.div>

            {/* Progress bar */}
            <div className="w-64 h-[1px] bg-white/5 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{background:'linear-gradient(90deg, var(--cyan), var(--purple))', width:`${Math.min(count,100)}%`, boxShadow:'0 0 10px rgba(0,245,255,0.6)'}}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Counter */}
            <motion.div
              className="font-mono text-2xl font-light"
              style={{color:'var(--cyan)', textShadow:'0 0 20px rgba(0,245,255,0.5)'}}
            >
              {String(Math.min(count, 100)).padStart(3, '0')}
            </motion.div>

            {/* Rotating ring */}
            <div className="absolute" style={{width:200, height:200, border:'1px solid rgba(0,245,255,0.08)', borderRadius:'50%', borderTopColor:'rgba(0,245,255,0.4)', animation:'rotate-slow 3s linear infinite'}} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

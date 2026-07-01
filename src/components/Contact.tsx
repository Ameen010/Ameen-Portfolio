'use client';
import { useMobile } from '@/hooks/useMobile';

const socials = [
  { name: 'Instagram', url: 'https://www.instagram.com/ame_nhd.m',         id: 'NODE_01' },
  { name: 'LinkedIn',  url: 'https://www.linkedin.com/in/ameen-noushad',   id: 'NODE_02' },
  { name: 'GitHub',    url: 'https://github.com/Ameen010',                 id: 'NODE_03' },
  { name: 'Reddit',    url: 'https://www.reddit.com/u/Ameen_kido',         id: 'NODE_04' },
];

export default function Contact() {
  const isMobile = useMobile();
  return (
    <section id="transmission" className="snap-section relative w-full bg-bg-base z-20 border-t border-border-light flex flex-col overflow-hidden" style={{ minHeight: '100svh' }}>

      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] hidden sm:block"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      {isMobile ? (
        /* ── MOBILE ── */
        <div className="md:hidden flex flex-col flex-1 overflow-y-auto px-5 py-8 gap-8 relative z-10">
          <span className="section-caption">Transmission</span>

          <p className="heading-display text-5xl text-text-100 uppercase leading-[0.9]">
            Initiate <br /><span className="text-text-400">Sequence.</span>
          </p>

          {/* Primary contact */}
          <div className="flex flex-col gap-4 pt-4 border-t border-border-light">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[9px] text-text-400 tracking-[0.2em] uppercase">// Primary Comms</span>
              <a href="mailto:ameenkido5412@gmail.com"
                className="text-xl font-light text-text-200 hover:text-text-100 transition-colors">
                ameenkido5412@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[9px] text-text-400 tracking-[0.2em] uppercase">// Secure Line (WhatsApp)</span>
              <a href="https://wa.me/919544915412" target="_blank" rel="noopener noreferrer"
                className="text-xl font-light text-text-200 hover:text-text-100 transition-colors">
                +91 9544 915 412
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[9px] text-text-400 tracking-[0.2em] uppercase">// Data Nodes</span>
            <div className="grid grid-cols-2 gap-2">
              {socials.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between border border-border-light px-4 py-3 text-sm font-light text-text-300 hover:text-text-100 hover:border-border-hover transition-all">
                  <span>{link.name}</span>
                  <span className="font-mono text-[8px] text-text-400">{link.id}</span>
                </a>
              ))}
            </div>
          </div>

          <p className="font-mono text-[9px] text-text-400 tracking-widest uppercase">SYS.VER: 1.0.0 · LOC: KERALA, IN</p>
        </div>
      ) : (
        /* ── DESKTOP (unchanged) ── */
        <div className="hidden md:flex flex-col flex-1 justify-between pt-48 relative z-10">
          <div className="max-w-[1600px] mx-auto px-12 w-full grid grid-cols-12 gap-8 items-start">
            <div className="col-span-3"><span className="section-caption">Transmission</span></div>
            <div className="col-span-9 flex flex-col gap-16">
              <div className="relative">
                <div className="absolute -left-8 top-0 w-[2px] h-full bg-border-light" />
                <h2 className="heading-display text-6xl md:text-8xl lg:text-[11vw] leading-[0.85] text-text-100 uppercase">
                  Initiate <br /><span className="text-text-400">Sequence.</span>
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-12 pt-16 border-t border-border-light relative">
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-border-light" />
                <div className="flex flex-col gap-12 pr-12">
                  <div className="group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-2 h-2 bg-text-400 group-hover:bg-accent-cyan transition-colors" />
                      <p className="text-[10px] font-mono text-text-400 uppercase tracking-[0.2em]">Primary Comms</p>
                    </div>
                    <a href="mailto:ameenkido5412@gmail.com" className="text-2xl md:text-3xl font-light text-text-200 hover:text-text-100 transition-colors block hover-target">
                      Hi Get in Touch Mail Mee.... <span className="inline-block transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1"><span className="group-hover:hidden">🙂</span><span className="hidden group-hover:inline">😁</span></span>
                    </a>
                  </div>
                  <div className="group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-2 h-2 bg-text-400 group-hover:bg-accent-blue transition-colors" />
                      <p className="text-[10px] font-mono text-text-400 uppercase tracking-[0.2em]">Secure Line (WhatsApp)</p>
                    </div>
                    <a href="https://wa.me/919544915412" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl font-light text-text-200 hover:text-text-100 transition-colors block hover-target">
                      Get in Direct
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-8 pl-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-2 h-2 bg-text-400" />
                    <p className="text-[10px] font-mono text-text-400 uppercase tracking-[0.2em]">Data Nodes</p>
                  </div>
                  <div className="flex flex-col gap-6">
                    {socials.map((link) => (
                      <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                        className="group flex items-center justify-between text-lg font-light text-text-300 hover:text-text-100 transition-colors w-full border-b border-border-light pb-4 hover-target">
                        <span>{link.name}</span>
                        <span className="text-[10px] font-mono tracking-widest text-text-400 opacity-0 group-hover:opacity-100 transition-opacity">{link.id}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="w-full mt-32 relative flex flex-col items-center border-t border-border-light pt-8">
            <div className="heading-display text-[15vw] md:text-[22vw] leading-[0.72] text-text-100 opacity-[0.03] select-none pointer-events-none text-center tracking-tighter">AMEENN</div>
            <div className="absolute bottom-8 w-full px-12 flex justify-between items-center text-[10px] font-mono text-text-400 tracking-[0.2em] uppercase">
              <div className="flex gap-8">
                <span>SYS.VER: 1.0.0</span>
                <span className="hidden md:inline">LOC: KERALA, IN</span>
              </div>
              <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
            </div>
          </footer>
        </div>
      )}

    </section>
  );
}

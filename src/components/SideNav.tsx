'use client';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero',         label: 'HERO',    code: '01' },
  { id: 'philosophy',   label: 'PHILOS',  code: '02' },
  { id: 'experience',   label: 'EXP',     code: '03' },
  { id: 'capabilities', label: 'CAPS',    code: '04' },
  { id: 'projects',     label: 'WORKS',   code: '05' },
  { id: 'transmission', label: 'SIGNAL',  code: '06' },
];

/**
 * SideNav — desktop/tablet only (hidden on mobile).
 * Fixed right-side vertical nav with pill buttons.
 * Active section detected via IntersectionObserver.
 */
export default function SideNav() {
  const [activeId, setActiveId] = useState('hero');
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            setActiveId(id);
          }
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-[9980] flex-col items-end gap-3"
      aria-label="Section navigation"
    >
      {sections.map(({ id, label, code }) => {
        const isActive = activeId === id;
        const isHovered = hovered === id;

        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            aria-label={`Go to ${label} section`}
            className="group relative flex items-center gap-3"
          >
            {/* Label — slides in on hover/active */}
            <span
              className="font-mono text-[9px] tracking-[0.25em] uppercase transition-all duration-300"
              style={{
                opacity: isActive || isHovered ? 1 : 0,
                transform: isActive || isHovered ? 'translateX(0)' : 'translateX(8px)',
                color: isActive ? '#33e1ed' : 'rgba(148,163,184,0.8)',
              }}
            >
              {label}
            </span>

            {/* Pill indicator */}
            <span
              className="relative flex items-center justify-center transition-all duration-400"
              style={{
                width: isActive ? '36px' : isHovered ? '28px' : '20px',
                height: isActive ? '36px' : isHovered ? '28px' : '20px',
                borderRadius: '50%',
                border: isActive
                  ? '1px solid rgba(51,225,237,0.6)'
                  : '1px solid rgba(255,255,255,0.12)',
                background: isActive
                  ? 'rgba(51,225,237,0.12)'
                  : 'rgba(10,10,14,0.85)',
                boxShadow: isActive
                  ? '0 0 14px rgba(51,225,237,0.35), inset 0 0 8px rgba(51,225,237,0.1)'
                  : 'none',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span
                className="font-mono transition-all duration-300"
                style={{
                  fontSize: isActive ? '9px' : '8px',
                  color: isActive ? '#33e1ed' : 'rgba(71,85,105,1)',
                  letterSpacing: '0.1em',
                }}
              >
                {code}
              </span>

              {/* Active pulse ring */}
              {isActive && (
                <span
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{
                    border: '1px solid rgba(51,225,237,0.3)',
                    animationDuration: '2s',
                  }}
                />
              )}
            </span>
          </button>
        );
      })}

      {/* Vertical connector line */}
      <div
        className="absolute right-[10px] top-0 bottom-0 w-[1px] -z-10"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.04), transparent)' }}
      />
    </nav>
  );
}

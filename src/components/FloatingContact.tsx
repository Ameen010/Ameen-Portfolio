'use client';
import { useState } from 'react';

/**
 * FloatingContact — always-visible fixed contact button.
 * Tapping opens a small popup with Email + WhatsApp links.
 */
export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Popup */}
      {open && (
        <div
          className="fixed bottom-20 right-4 md:bottom-20 md:right-8 z-[9995] flex flex-col gap-2"
          style={{ animation: 'fadeUp 0.2s ease forwards' }}
        >
          <a
            href="mailto:ameenkido5412@gmail.com"
            className="flex items-center gap-3 px-4 py-3 font-mono text-[10px] tracking-widest uppercase text-bg-base bg-accent-cyan border border-accent-cyan/50 hover:bg-accent-cyan/80 transition-colors"
          >
            <span>✉</span> EMAIL
          </a>
          <a
            href="https://wa.me/919544915412"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 font-mono text-[10px] tracking-widest uppercase text-text-100 bg-bg-elevated border border-border-hover hover:border-text-300 transition-colors"
          >
            <span>💬</span> WHATSAPP
          </a>
        </div>
      )}

      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open contact options"
        className="fixed bottom-[72px] right-4 md:bottom-8 md:right-8 z-[9994] flex items-center gap-2 px-4 py-2 font-mono text-[10px] tracking-[0.2em] uppercase border transition-all duration-300"
        style={{
          background: open ? 'rgba(51,225,237,0.15)' : 'rgba(1,1,3,0.9)',
          borderColor: open ? 'rgba(51,225,237,0.5)' : 'rgba(255,255,255,0.1)',
          color: open ? '#33e1ed' : '#94a3b8',
          backdropFilter: 'blur(12px)',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            transition: 'transform 0.3s',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          {open ? '✕' : '⊕'}
        </span>
        <span className="hidden sm:inline">{open ? 'CLOSE' : 'CONNECT'}</span>
      </button>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

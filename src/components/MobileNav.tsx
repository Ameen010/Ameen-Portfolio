'use client';
import Link from 'next/link';

const navItems = [
  { label: 'HERO',    href: '#hero',         id: 'NAV_01' },
  { label: 'PHILOS',  href: '#philosophy',   id: 'NAV_02' },
  { label: 'EXP',     href: '#experience',   id: 'NAV_03' },
  { label: 'CAPS',    href: '#capabilities', id: 'NAV_04' },
  { label: 'WORKS',   href: '#projects',     id: 'NAV_05' },
  { label: 'SIGNAL',  href: '#transmission', id: 'NAV_06' },
];

/**
 * MobileNav — fixed bottom navigation bar, visible only on mobile (md:hidden).
 * 2-row × 3-col grid of section links.
 */
export default function MobileNav() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-[9990] border-t border-white/10"
      style={{ background: 'rgba(1,1,3,0.96)', backdropFilter: 'blur(16px)' }}
    >
      {/* Grid: 3 cols × 2 rows */}
      <div className="grid grid-cols-3 grid-rows-2">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className="flex flex-col items-center justify-center py-2 gap-[2px] border-r border-white/5 last:border-r-0 group active:bg-white/5 transition-colors"
          >
            <span
              className="font-mono text-[9px] tracking-[0.2em] text-text-400 group-active:text-accent-cyan transition-colors"
              style={{ textShadow: 'none' }}
            >
              {item.label}
            </span>
            <span className="w-4 h-[1px] bg-white/10 group-active:bg-accent-cyan transition-colors" />
          </a>
        ))}
      </div>
    </nav>
  );
}

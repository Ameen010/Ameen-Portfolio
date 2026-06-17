'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * LenisScroll — only initializes Lenis smooth scroll on desktop (>=768px).
 * On mobile we rely on native CSS scroll-snap for page-snapping.
 */
export default function LenisScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Skip Lenis on mobile — CSS scroll-snap handles touch navigation
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

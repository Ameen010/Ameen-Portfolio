'use client';
import { useState, useEffect } from 'react';

/**
 * Returns true when window width is below 768px (mobile breakpoint).
 * Falls back to false during SSR.
 */
export function useMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return isMobile;
}

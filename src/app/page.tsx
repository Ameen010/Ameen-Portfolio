'use client';
import { useMobile } from '@/hooks/useMobile';
import Cursor from '@/components/Cursor';
import LenisScroll from '@/components/LenisScroll';
import Particles from '@/components/Particles';
import Preloader from '@/components/Preloader';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import MobileNav from '@/components/MobileNav';
import FloatingContact from '@/components/FloatingContact';

export default function Home() {
  const isMobile = useMobile();

  return (
    <LenisScroll>
      <Preloader />
      <Cursor />
      <Particles />

      <main
        className="flex flex-col"
        style={isMobile ? {
          height: '100svh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          overscrollBehavior: 'none',
        } : {}}
      >
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <MobileNav />
      <FloatingContact />
    </LenisScroll>
  );
}

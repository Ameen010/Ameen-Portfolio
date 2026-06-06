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

export default function Home() {
  return (
    <LenisScroll>
      <Preloader />
      <Cursor />
      <Particles />
      
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </LenisScroll>
  );
}

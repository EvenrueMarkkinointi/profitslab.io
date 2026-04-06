import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import WhatYouGetSection from './sections/WhatYouGetSection';
import CategoriesSection from './sections/CategoriesSection';
import InsideStackSection from './sections/InsideStackSection';
import ProofSection from './sections/ProofSection';
import UseItAnywhereSection from './sections/UseItAnywhereSection';
import MadeForSection from './sections/MadeForSection';
import GuaranteeSection from './sections/GuaranteeSection';
import FinalCTASection from './sections/FinalCTASection';
import FooterSection from './sections/FooterSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for all sections to mount before setting up snap
    const timer = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
            if (!inPinned) return value;
            
            const target = pinnedRanges.reduce((closest, r) =>
              Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: "power2.out"
        }
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="relative">
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Grid Dots Pattern */}
      <div className="fixed inset-0 grid-dots pointer-events-none z-0 opacity-50" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Sections */}
      <main className="relative z-10">
        <HeroSection className="z-10" />
        <WhatYouGetSection className="z-20" />
        <CategoriesSection className="z-30" />
        <InsideStackSection className="z-40" />
        <ProofSection className="z-50" />
        <UseItAnywhereSection className="z-60" />
        <MadeForSection className="z-70" />
        <GuaranteeSection className="z-80" />
        <FinalCTASection className="z-90" />
        <FooterSection className="z-100" />
      </main>
    </div>
  );
}

export default App;

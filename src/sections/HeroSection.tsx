import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, Star, Circle, Triangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  className?: string;
}

export default function HeroSection({ className = '' }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const starburstRef = useRef<HTMLDivElement>(null);
  const donutRef = useRef<HTMLDivElement>(null);
  const triangleRef = useRef<HTMLDivElement>(null);

  // Auto-play entrance animation on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Cards slide in
      tl.fromTo(leftCardRef.current,
        { x: '-60vw', opacity: 0, scale: 0.96 },
        { x: 0, opacity: 1, scale: 1, duration: 1 },
        0
      );

      tl.fromTo(rightCardRef.current,
        { x: '60vw', opacity: 0, scale: 0.96 },
        { x: 0, opacity: 1, scale: 1, duration: 1 },
        0
      );

      // Headline words stagger
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        tl.fromTo(words,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.03 },
          0.3
        );
      }

      // Stamps pop in
      tl.fromTo(starburstRef.current,
        { scale: 0, rotate: -20 },
        { scale: 1, rotate: 0, duration: 0.5, ease: 'back.out(2.2)' },
        0.5
      );

      tl.fromTo(donutRef.current,
        { scale: 0, rotate: 20 },
        { scale: 1, rotate: 0, duration: 0.5, ease: 'back.out(2.2)' },
        0.6
      );

      tl.fromTo(triangleRef.current,
        { scale: 0, rotate: -15 },
        { scale: 1, rotate: -12, duration: 0.5, ease: 'back.out(2.2)' },
        0.7
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven exit animation
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements when scrolling back to top
            gsap.set([leftCardRef.current, rightCardRef.current], { 
              opacity: 1, x: 0, y: 0, scale: 1 
            });
            gsap.set([starburstRef.current, donutRef.current, triangleRef.current], { 
              opacity: 1, scale: 1 
            });
          }
        }
      });

      // EXIT phase (70% - 100%)
      scrollTl.fromTo(leftCardRef.current,
        { x: 0, opacity: 1, scale: 1 },
        { x: '-40vw', y: '10vh', opacity: 0, scale: 0.98, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(rightCardRef.current,
        { x: 0, opacity: 1, scale: 1 },
        { x: '40vw', y: '-10vh', opacity: 0, scale: 0.98, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(starburstRef.current,
        { opacity: 1, scale: 1 },
        { opacity: 0, scale: 0.7, ease: 'power2.in' },
        0.75
      );

      scrollTl.fromTo(donutRef.current,
        { opacity: 1, scale: 1 },
        { opacity: 0, scale: 0.7, ease: 'power2.in' },
        0.78
      );

      scrollTl.fromTo(triangleRef.current,
        { opacity: 1, scale: 1 },
        { opacity: 0, scale: 0.7, ease: 'power2.in' },
        0.8
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="hero"
      className={`relative w-full h-screen bg-[#6B62B8] overflow-hidden ${className}`}
    >
      {/* Decorative Stamps */}
      <div 
        ref={starburstRef}
        className="absolute left-[44vw] top-[14vh] w-[9vw] max-w-[120px] z-20 stamp-rotate"
      >
        <div className="bg-[#E46B67] rounded-full p-4 aspect-square flex items-center justify-center">
          <Star className="w-full h-full text-[#F6F3EA] fill-[#F6F3EA]" />
        </div>
      </div>

      <div 
        ref={donutRef}
        className="absolute left-[46vw] top-[68vh] w-[7vw] max-w-[90px] z-20 stamp-rotate"
        style={{ animationDelay: '-2s' }}
      >
        <div className="border-4 border-[#E46B67] rounded-full p-3 aspect-square flex items-center justify-center">
          <Circle className="w-full h-full text-[#E46B67]" />
        </div>
      </div>

      <div 
        ref={triangleRef}
        className="absolute left-[48vw] top-[72vh] w-[5vw] max-w-[70px] z-20"
      >
        <Triangle className="w-full h-full text-[#F6F3EA] fill-[#F6F3EA]" />
      </div>

      {/* Left Card - Photo */}
      <div 
        ref={leftCardRef}
        className="absolute left-[6vw] top-[18vh] w-[40vw] h-[64vh] section-card card-shadow z-10"
      >
        <img 
          src="/hero_team.jpg" 
          alt="Team collaborating"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Card - Text */}
      <div 
        ref={rightCardRef}
        className="absolute left-[52vw] top-[18vh] w-[42vw] h-[64vh] section-card border-3 border-[#E46B67] bg-[#6B62B8] z-10 flex flex-col justify-between p-[6%]"
      >
        <div>
          <h1 
            ref={headlineRef}
            className="font-display text-[clamp(32px,4vw,56px)] text-[#F6F3EA] uppercase leading-[0.92] mb-6"
          >
            <span className="word inline-block">80</span>{' '}
            <span className="word inline-block">PROMPTS.</span>{' '}
            <span className="word inline-block">10</span>{' '}
            <span className="word inline-block">MINUTES.</span>{' '}
            <span className="word inline-block">ONE</span>{' '}
            <span className="word inline-block">SYSTEM.</span>
          </h1>
          
          <p className="text-[#D7D2F0] text-[clamp(14px,1.2vw,18px)] leading-relaxed max-w-[90%]">
            A simple AI playbook for small business owners who want faster output—without hiring another person.
          </p>
        </div>

        <div>
          <a 
            href="https://buy.stripe.com/your-link-here"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-coral mb-3"
          >
            <Download className="w-4 h-4" />
            Get the Stack — €19
          </a>
          
          <p className="font-mono-label text-[10px] text-[#D7D2F0]">
            PDF + Notion template • Instant download
          </p>
        </div>
      </div>
    </section>
  );
}

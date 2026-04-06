import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Circle, Triangle, Download } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  className?: string;
}

export default function InsideStackSection({ className = '' }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const donutRef = useRef<HTMLDivElement>(null);
  const triangleRef = useRef<HTMLDivElement>(null);

  const features = [
    '5 pro tips for better AI output',
    'Copy-paste ready',
    'Real business tasks only'
  ];

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
        }
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(leftCardRef.current,
        { x: '-60vw', opacity: 0, scale: 0.96 },
        { x: 0, opacity: 1, scale: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(rightCardRef.current,
        { x: '60vw', opacity: 0, scale: 0.96 },
        { x: 0, opacity: 1, scale: 1, ease: 'none' },
        0.05
      );

      scrollTl.fromTo(donutRef.current,
        { scale: 0, rotate: -25 },
        { scale: 1, rotate: 0, ease: 'back.out(2)' },
        0.1
      );

      scrollTl.fromTo(triangleRef.current,
        { scale: 0, rotate: 25 },
        { scale: 1, rotate: -10, ease: 'back.out(2)' },
        0.15
      );

      // EXIT (70% - 100%)
      scrollTl.fromTo(leftCardRef.current,
        { x: 0, opacity: 1 },
        { x: '-35vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(rightCardRef.current,
        { x: 0, opacity: 1 },
        { x: '35vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo([donutRef.current, triangleRef.current],
        { opacity: 1, scale: 1 },
        { opacity: 0, scale: 0.7, ease: 'power2.in' },
        0.75
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="inside-stack"
      className={`relative w-full h-screen bg-[#6B62B8] overflow-hidden ${className}`}
    >
      {/* Decorative Stamps */}
      <div 
        ref={donutRef}
        className="absolute left-[44vw] top-[18vh] w-[8vw] max-w-[100px] z-20 stamp-rotate"
      >
        <div className="border-4 border-[#E46B67] rounded-full p-3 aspect-square flex items-center justify-center">
          <Circle className="w-full h-full text-[#E46B67]" />
        </div>
      </div>

      <div 
        ref={triangleRef}
        className="absolute left-[46vw] top-[72vh] w-[5vw] max-w-[70px] z-20"
      >
        <Triangle className="w-full h-full text-[#F6F3EA] fill-[#F6F3EA] rotate-[-10deg]" />
      </div>

      {/* Left Card - Text */}
      <div 
        ref={leftCardRef}
        className="absolute left-[6vw] top-[18vh] w-[40vw] h-[64vh] section-card border-3 border-[#E46B67] bg-[#6B62B8] z-10 flex flex-col justify-between p-[5%]"
      >
        <div>
          <h2 className="font-display text-[clamp(28px,3.5vw,48px)] text-[#F6F3EA] uppercase leading-[0.95] mb-6">
            PROMPTS + PLAYBOOK.
          </h2>
          
          <p className="text-[#D7D2F0] text-[clamp(14px,1.1vw,17px)] leading-relaxed mb-8">
            Each prompt includes bracketed placeholders, a 'when to use' note, and the best model for the job.
          </p>

          <ul className="space-y-4">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E46B67]/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-[#E46B67]" />
                </div>
                <span className="font-mono-label text-[11px] text-[#D7D2F0]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <a 
          href="https://buy.stripe.com/your-link-here"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-coral w-fit"
        >
          <Download className="w-4 h-4" />
          Get the Stack — €19
        </a>
      </div>

      {/* Right Card - Photo */}
      <div 
        ref={rightCardRef}
        className="absolute left-[52vw] top-[18vh] w-[42vw] h-[64vh] section-card card-shadow z-10"
      >
        <img 
          src="/inside_presentation.jpg" 
          alt="Team presentation"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

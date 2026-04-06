import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Star, Circle, Bot, MessageSquare, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  className?: string;
}

export default function UseItAnywhereSection({ className = '' }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const starburstRef = useRef<HTMLDivElement>(null);
  const donutRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  const features = [
    'No integrations to configure',
    'No API keys needed',
    'Use on desktop, tablet, or phone'
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

      // Icons stagger
      if (iconsRef.current) {
        const icons = iconsRef.current.querySelectorAll('.tool-icon');
        scrollTl.fromTo(icons,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.03, ease: 'none' },
          0.15
        );
      }

      scrollTl.fromTo(starburstRef.current,
        { scale: 0, rotate: -20 },
        { scale: 1, rotate: 0, ease: 'back.out(2)' },
        0.1
      );

      scrollTl.fromTo(donutRef.current,
        { scale: 0, rotate: 20 },
        { scale: 1, rotate: 0, ease: 'back.out(2)' },
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

      scrollTl.fromTo([starburstRef.current, donutRef.current],
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
      id="use-it-anywhere"
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
        className="absolute left-[46vw] top-[70vh] w-[7vw] max-w-[90px] z-20 stamp-rotate"
        style={{ animationDelay: '-2s' }}
      >
        <div className="border-4 border-[#E46B67] rounded-full p-3 aspect-square flex items-center justify-center">
          <Circle className="w-full h-full text-[#E46B67]" />
        </div>
      </div>

      {/* Left Card - Photo */}
      <div 
        ref={leftCardRef}
        className="absolute left-[6vw] top-[18vh] w-[40vw] h-[64vh] section-card card-shadow z-10"
      >
        <img 
          src="/anywhere_couch.jpg" 
          alt="Working on couch"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Card - Text */}
      <div 
        ref={rightCardRef}
        className="absolute left-[52vw] top-[18vh] w-[42vw] h-[64vh] section-card border-3 border-[#E46B67] bg-[#6B62B8] z-10 flex flex-col justify-between p-[5%]"
      >
        <div>
          <h2 className="font-display text-[clamp(28px,3.5vw,48px)] text-[#F6F3EA] uppercase leading-[0.95] mb-6">
            YOUR STACK. YOUR TOOLS.
          </h2>
          
          <p className="text-[#D7D2F0] text-[clamp(14px,1.1vw,17px)] leading-relaxed mb-8">
            Works with ChatGPT, Claude, Gemini, and any LLM that accepts text prompts.
          </p>

          {/* Tool Icons */}
          <div ref={iconsRef} className="flex items-center gap-4 mb-8">
            <div className="tool-icon w-12 h-12 rounded-xl bg-[#F6F3EA]/10 flex items-center justify-center float-animation">
              <Bot className="w-6 h-6 text-[#F6F3EA]" />
            </div>
            <div className="tool-icon w-12 h-12 rounded-xl bg-[#F6F3EA]/10 flex items-center justify-center float-animation" style={{ animationDelay: '-0.5s' }}>
              <MessageSquare className="w-6 h-6 text-[#F6F3EA]" />
            </div>
            <div className="tool-icon w-12 h-12 rounded-xl bg-[#F6F3EA]/10 flex items-center justify-center float-animation" style={{ animationDelay: '-1s' }}>
              <Sparkles className="w-6 h-6 text-[#F6F3EA]" />
            </div>
          </div>

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
      </div>
    </section>
  );
}

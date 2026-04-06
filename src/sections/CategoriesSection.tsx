import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Circle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  className?: string;
}

export default function CategoriesSection({ className = '' }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const starburstRef = useRef<HTMLDivElement>(null);
  const donutRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  const categories = [
    'SALES & OUTREACH',
    'MARKETING & CONTENT',
    'CUSTOMER SERVICE',
    'HR & HIRING',
    'OPERATIONS & SOPs',
    'FINANCE & ADMIN',
    'STRATEGY & PLANNING',
    'PRODUCT & ECOMMERCE',
    'EMAIL MARKETING',
    'SOCIAL MEDIA'
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.7,
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

      // Chips stagger
      if (chipsRef.current) {
        const chips = chipsRef.current.querySelectorAll('.category-chip');
        scrollTl.fromTo(chips,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.02, ease: 'none' },
          0.12
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
      id="categories"
      className={`relative w-full h-screen bg-[#6B62B8] overflow-hidden ${className}`}
    >
      {/* Decorative Stamps */}
      <div 
        ref={starburstRef}
        className="absolute left-[44vw] top-[12vh] w-[9vw] max-w-[120px] z-20 stamp-rotate"
      >
        <div className="bg-[#E46B67] rounded-full p-4 aspect-square flex items-center justify-center">
          <Star className="w-full h-full text-[#F6F3EA] fill-[#F6F3EA]" />
        </div>
      </div>

      <div 
        ref={donutRef}
        className="absolute left-[46vw] top-[74vh] w-[7vw] max-w-[90px] z-20 stamp-rotate"
        style={{ animationDelay: '-3s' }}
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
          src="/categories_writing.jpg" 
          alt="Writing notes"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Card - Categories Grid */}
      <div 
        ref={rightCardRef}
        className="absolute left-[52vw] top-[18vh] w-[42vw] h-[64vh] section-card border-3 border-[#E46B67] bg-[#6B62B8] z-10 flex flex-col p-[5%]"
      >
        <div className="mb-6">
          <h2 className="font-display text-[clamp(28px,3.5vw,48px)] text-[#F6F3EA] uppercase leading-[0.95] mb-3">
            EVERY JOB. ONE PAGE.
          </h2>
          <p className="text-[#D7D2F0] text-[clamp(13px,1vw,16px)]">
            Pick a category. Copy the prompt. Move on with your day.
          </p>
        </div>

        <div ref={chipsRef} className="grid grid-cols-2 gap-3 flex-1">
          {categories.map((category, i) => (
            <div 
              key={i}
              className="category-chip flex items-center gap-2 px-3 py-2.5 rounded-lg border border-[#F6F3EA]/20 bg-[#F6F3EA]/5 hover:bg-[#F6F3EA]/10 hover:border-[#E46B67]/40 transition-all cursor-default"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#E46B67] flex-shrink-0" />
              <span className="font-mono-label text-[10px] text-[#D7D2F0] truncate">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

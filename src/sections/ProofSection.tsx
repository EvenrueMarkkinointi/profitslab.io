import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  className?: string;
}

export default function ProofSection({ className = '' }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  
  const [ratingCount, setRatingCount] = useState(0);
  const [downloadCount, setDownloadCount] = useState(0);
  const [setupCount, setSetupCount] = useState(0);

  const testimonials = [
    {
      quote: "I stopped staring at blank ChatGPT windows.",
      author: "Mina R.",
      role: "Studio Owner",
      image: "/testimonial_01.jpg"
    },
    {
      quote: "We cut content time by half in the first week.",
      author: "Jonas K.",
      role: "Agency Lead",
      image: "/testimonial_02.jpg"
    },
    {
      quote: "Finally, AI that sounds like us.",
      author: "Leah T.",
      role: "Shop Founder",
      image: "/testimonial_03.jpg"
    }
  ];

  const metrics = [
    { value: 4.9, suffix: '/5', label: 'average rating', setter: setRatingCount },
    { value: 2000, suffix: '+', label: 'stacks downloaded', setter: setDownloadCount },
    { value: 12, suffix: ' min', label: 'average setup', setter: setSetupCount }
  ];

  // Header and cards animation
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(headerRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Cards stagger
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.testimonial-card');
        gsap.fromTo(cards,
          { y: 40, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.12,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Metrics counter animation
      gsap.fromTo(metricsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: metricsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              // Animate counters
              metrics.forEach((metric, i) => {
                const obj = { val: 0 };
                gsap.to(obj, {
                  val: metric.value,
                  duration: 1.2,
                  delay: i * 0.1,
                  ease: 'power2.out',
                  onUpdate: () => {
                    metric.setter(Math.round(obj.val * 10) / 10);
                  }
                });
              });
            }
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="proof"
      className={`relative w-full min-h-screen bg-[#F6F3EA] py-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <h2 className="font-display text-[clamp(36px,5vw,64px)] text-[#2A2A2A] uppercase leading-[0.92] max-w-[70vw]">
            SMALL TEAMS.{' '}
            <span className="relative inline-block">
              REAL RESULTS.
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E46B67]" />
            </span>
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <div 
              key={i}
              className="testimonial-card bg-white rounded-3xl p-6 card-shadow hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-[#E46B67] fill-[#E46B67]" />
                ))}
              </div>
              
              <p className="text-[#2A2A2A] text-lg font-medium leading-relaxed mb-6">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-3">
                <img 
                  src={t.image} 
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-[#2A2A2A] font-semibold text-sm">{t.author}</p>
                  <p className="text-[#6B6B6B] text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div ref={metricsRef} className="flex flex-wrap justify-center gap-12 md:gap-20">
          <div className="text-center">
            <p className="font-display text-[clamp(40px,5vw,72px)] text-[#6B62B8] leading-none">
              {ratingCount.toFixed(1)}{metrics[0].suffix}
            </p>
            <p className="font-mono-label text-[11px] text-[#6B6B6B] mt-2">{metrics[0].label}</p>
          </div>
          <div className="text-center">
            <p className="font-display text-[clamp(40px,5vw,72px)] text-[#6B62B8] leading-none">
              {Math.round(downloadCount).toLocaleString()}{metrics[1].suffix}
            </p>
            <p className="font-mono-label text-[11px] text-[#6B6B6B] mt-2">{metrics[2].label}</p>
          </div>
          <div className="text-center">
            <p className="font-display text-[clamp(40px,5vw,72px)] text-[#6B62B8] leading-none">
              {Math.round(setupCount)}{metrics[2].suffix}
            </p>
            <p className="font-mono-label text-[11px] text-[#6B6B6B] mt-2">{metrics[2].label}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

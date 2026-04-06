import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Mail, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  className?: string;
}

export default function FooterSection({ className = '' }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What format is this?",
      a: "PDF + Notion template. You get instant access to both formats after purchase."
    },
    {
      q: "Do I need ChatGPT Plus?",
      a: "No. Works with free and paid accounts of ChatGPT, Claude, Gemini, or any LLM that accepts text prompts."
    },
    {
      q: "Can I share this with my team?",
      a: "Yes—up to 5 people per purchase. For larger teams, contact us for a team license."
    },
    {
      q: "Updates included?",
      a: "Yes, 12 months of updates. As AI models improve, we refine the prompts for better results."
    },
    {
      q: "Refund policy?",
      a: "14-day money-back guarantee. Not satisfied? Email us for a full refund, no questions asked."
    },
    {
      q: "Need support?",
      a: "Email hello@aishortcutstack.com and we'll get back to you within 24 hours."
    }
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // FAQ items stagger
      if (faqRef.current) {
        const items = faqRef.current.querySelectorAll('.faq-item');
        gsap.fromTo(items,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.08,
            scrollTrigger: {
              trigger: faqRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Contact card
      gsap.fromTo(contactRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={sectionRef}
      id="footer"
      className={`relative w-full bg-[#6B62B8] pt-20 pb-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* FAQ */}
          <div ref={faqRef}>
            <h3 className="font-display text-2xl text-[#F6F3EA] uppercase mb-8">
              Questions? We've got answers.
            </h3>
            
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div 
                  key={i}
                  className="faq-item border border-[#F6F3EA]/20 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-[#F6F3EA]/5 transition-colors"
                  >
                    <span className="text-[#F6F3EA] font-medium text-sm">{faq.q}</span>
                    <ChevronDown 
                      className={`w-4 h-4 text-[#D7D2F0] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  {openFaq === i && (
                    <div className="px-4 pb-4">
                      <p className="text-[#D7D2F0] text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div ref={contactRef} className="md:pl-8">
            <div className="bg-[#F6F3EA]/5 border border-[#F6F3EA]/20 rounded-3xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#E46B67]/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#E46B67]" />
                </div>
                <div>
                  <p className="text-[#F6F3EA] font-semibold">Get in touch</p>
                  <p className="text-[#D7D2F0] text-sm">We reply within 24 hours</p>
                </div>
              </div>
              
              <a 
                href="mailto:hello@aishortcutstack.com"
                className="text-[#E46B67] hover:text-[#F6F3EA] transition-colors text-lg"
              >
                hello@aishortcutstack.com
              </a>
            </div>

            {/* Mini Nav */}
            <div className="flex flex-wrap gap-4">
              <a href="#" className="font-mono-label text-[11px] text-[#D7D2F0] hover:text-[#F6F3EA] transition-colors">
                Privacy
              </a>
              <a href="#" className="font-mono-label text-[11px] text-[#D7D2F0] hover:text-[#F6F3EA] transition-colors">
                Terms
              </a>
              <a href="#" className="font-mono-label text-[11px] text-[#D7D2F0] hover:text-[#F6F3EA] transition-colors">
                Affiliates
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F6F3EA]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#E46B67]" />
            <span className="font-display text-sm tracking-wider text-[#F6F3EA]">
              AI SHORTCUT STACK
            </span>
          </div>
          
          <p className="text-[#D7D2F0] text-xs">
            © {new Date().getFullYear()} AI Shortcut Stack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

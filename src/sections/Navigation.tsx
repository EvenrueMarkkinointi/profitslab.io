import { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled 
          ? 'bg-[#6B62B8]/90 backdrop-blur-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-[#E46B67]" />
          <span className="font-display text-sm tracking-wider text-[#F6F3EA]">
            AI SHORTCUT STACK
          </span>
        </div>
        
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollTo('inside-stack')}
            className="font-mono-label text-[11px] text-[#D7D2F0] hover:text-[#F6F3EA] transition-colors"
          >
            What's Inside
          </button>
          <button 
            onClick={() => scrollTo('proof')}
            className="font-mono-label text-[11px] text-[#D7D2F0] hover:text-[#F6F3EA] transition-colors"
          >
            Reviews
          </button>
          <button 
            onClick={() => scrollTo('footer')}
            className="font-mono-label text-[11px] text-[#D7D2F0] hover:text-[#F6F3EA] transition-colors"
          >
            FAQ
          </button>
        </div>
        
        {/* CTA */}
        <a 
          href="https://buy.stripe.com/your-link-here"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-coral text-sm py-2.5 px-5"
        >
          Get the Stack
        </a>
      </div>
    </nav>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Toggle scenery scrolled state
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section based on current viewport coordinates
      const sections = ['home', 'about', 'services', 'gallery'];
      let currentSection = 'home';
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section top is above/near the offset (140px) and bottom is below it
          if (rect.top <= 140 && rect.bottom >= 140) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Galeri', href: '#gallery' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Height of the fixed modern navbar (80px)
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      // Trigger smooth scroll after a brief animation frame to avoid transition layout shifts
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 80);
    }
  };

  // Dynamic editorial styling variables based on scroll state
  const navBgClass = isScrolled 
    ? 'bg-[#FCFAF7] border-b border-[#DCCDBD]/40 shadow-sm' 
    : 'bg-[#36271C] border-b border-[#E8DCC4]/15';

  const textPrimaryClass = isScrolled 
    ? 'text-[#4A3A30]' 
    : 'text-[#FCFAF7]';

  const textSecondaryClass = isScrolled 
    ? 'text-[#7B6F66]' 
    : 'text-[#EAD6B3]';

  const linkClass = isScrolled
    ? 'text-[#7B6F66] hover:text-[#A25D3B]'
    : 'text-[#FCFAF7]/90 hover:text-[#EAD6B3]';

  const buttonClass = isScrolled
    ? 'bg-[#4A3A30] text-[#FCFAF7] hover:bg-[#A25D3B]'
    : 'bg-[#A25D3B] text-[#FCFAF7] hover:bg-[#EAD6B3] hover:text-[#36271C]';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className={`font-serif text-xl font-bold tracking-tight transition-colors ${textPrimaryClass}`}>
            Griya Selaras
          </span>
          <span className={`text-[9px] uppercase tracking-[0.25em] font-bold -mt-0.5 transition-colors ${textSecondaryClass}`}>
            by Syuhada
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, i) => {
            const active = activeSection === link.href.replace('#', '');
            const activeLinkClass = active 
              ? (isScrolled ? 'text-[#A25D3B]' : 'text-[#EAD6B3]')
              : linkClass;
              
            return (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`text-xs uppercase tracking-widest font-bold transition-all duration-300 relative py-1.5 ${activeLinkClass}`}
              >
                {link.name}
                {active && (
                  <motion.span 
                    layoutId="activeIndicator"
                    className={`absolute bottom-0 left-0 right-0 h-[2px] ${isScrolled ? 'bg-[#A25D3B]' : 'bg-[#EAD6B3]'} rounded-full`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
          <motion.a
            href="https://wa.me/6285227202129"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${buttonClass}`}
          >
            Hubungi Kami
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors ${textPrimaryClass}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 animate-pulse" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className={`md:hidden overflow-hidden transition-all duration-300 ${isScrolled ? 'bg-[#FCFAF7] border-b border-[#DCCDBD]/40 shadow-lg' : 'bg-[#36271C] border-b border-[#E8DCC4]/15 shadow-lg'}`}
      >
        <div className="px-6 py-8 flex flex-col space-y-5">
          {navLinks.map((link) => {
            const active = activeSection === link.href.replace('#', '');
            const activeMobileClass = active
              ? (isScrolled ? 'text-[#A25D3B] bg-[#A25D3B]/5 pl-3 border-l-2 border-[#A25D3B]' : 'text-[#EAD6B3] bg-[#E8DCC4]/5 pl-3 border-l-2 border-[#EAD6B3]')
              : `${linkClass} pl-3 border-l-2 border-transparent`;
            
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-sm uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-between py-2.5 rounded-md ${activeMobileClass}`}
              >
                <span>{link.name}</span>
                {active ? (
                  <span className={`w-1.5 h-1.5 rounded-full mr-3 ${isScrolled ? 'bg-[#A25D3B]' : 'bg-[#EAD6B3]'}`} />
                ) : null}
              </a>
            );
          })}
          <a
            href="https://wa.me/6285227202129"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className={`w-full py-4 text-center rounded-full font-bold uppercase tracking-wider text-xs transition-all duration-300 ${buttonClass}`}
          >
            Hubungi Kami (WhatsApp)
          </a>
        </div>
      </motion.div>
    </nav>
  );
}

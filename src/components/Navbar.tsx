import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Galeri', href: '#gallery' },
  ];

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
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`text-xs uppercase tracking-widest font-bold transition-all duration-300 ${linkClass}`}
            >
              {link.name}
            </motion.a>
          ))}
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
        className={`md:hidden overflow-hidden transition-colors ${isScrolled ? 'bg-[#FCFAF7] border-b border-[#DCCDBD]/40' : 'bg-[#36271C] border-b border-[#E8DCC4]/15'}`}
      >
        <div className="px-6 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm uppercase tracking-widest font-bold transition-colors ${linkClass}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/6285227202129"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-3.5 text-center rounded-full font-bold uppercase tracking-wider text-xs transition-colors ${buttonClass}`}
          >
            Hubungi Kami (WhatsApp)
          </a>
        </div>
      </motion.div>
    </nav>
  );
}

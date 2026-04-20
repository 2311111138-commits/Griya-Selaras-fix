import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Digitalisasi', href: '#digital' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-accent/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="font-serif text-xl font-bold tracking-tight text-brand-primary">Griya Selaras</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-secondary font-medium -mt-1">by Syuhada</span>
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
              className="text-sm font-medium hover:text-brand-accent transition-colors duration-300"
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
            className="px-6 py-2 bg-brand-primary text-brand-bg rounded-full text-sm font-medium hover:bg-brand-secondary transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Hubungi Kami
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-brand-bg border-b border-brand-accent/20"
      >
        <div className="px-6 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-serif italic hover:text-brand-accent"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/6285227202129"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-brand-primary text-brand-bg text-center rounded-lg font-medium"
          >
            Hubungi Kami (WhatsApp)
          </a>
        </div>
      </motion.div>
    </nav>
  );
}

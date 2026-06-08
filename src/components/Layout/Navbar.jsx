import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '/public/RajnishKumar_resume.pdf' },
  { name: 'GitHub', href: 'https://github.com/rajnish12-git', isExternal: true },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rajnish-kumar-100558249', isExternal: true },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="font-serif text-xl font-bold tracking-tight text-warm-charcoal group flex items-center gap-1.5">
          <span className="bg-accent-gold w-3 h-3 rounded-full inline-block group-hover:scale-125 transition-transform duration-300"></span>
          Rajnish Kumar
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="text-xs xl:text-sm font-semibold text-warm-charcoal/85 hover:text-accent-gold transition-colors duration-200 flex items-center gap-0.5"
            >
              {link.name}
              {link.isExternal && <ArrowUpRight size={12} className="opacity-60" />}
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs font-bold uppercase tracking-wider text-warm-charcoal bg-warm-beige hover:bg-accent-gold py-2.5 px-4 rounded-xl border border-warm-taupe/20 transition-all duration-300 flex items-center gap-1"
          >
            Let's Talk <ArrowUpRight size={14} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-1.5 rounded-xl text-warm-charcoal hover:bg-warm-beige/50 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 glass-nav border-b border-warm-taupe/15 py-5 px-6 flex flex-col gap-4 shadow-xl lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className="text-base font-semibold text-warm-charcoal/90 hover:text-accent-gold py-2 border-b border-warm-beige/30 transition-colors flex items-center justify-between"
              >
                {link.name}
                {link.isExternal && <ArrowUpRight size={16} className="opacity-60" />}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-center text-warm-charcoal bg-warm-beige hover:bg-accent-gold py-3 rounded-2xl border border-warm-taupe/20 transition-all duration-300 mt-2"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

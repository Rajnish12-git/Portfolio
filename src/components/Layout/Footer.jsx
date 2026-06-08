import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-beige/30 border-t border-warm-beige/80 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif text-lg font-bold text-warm-charcoal">Rajnish Kumar</p>
          <p className="text-xs text-warm-taupe mt-1">AI & ML Student | Software Developer</p>
        </div>

        <p className="text-sm text-warm-taupe text-center md:text-left order-3 md:order-2">
          &copy; {currentYear} Rajnish Kumar. Handcrafted with care &amp; curiosity.
        </p>

        <div className="flex items-center gap-4 order-2 md:order-3">
          <a
            href="mailto:rajnish.kumar@example.com"
            className="p-2.5 rounded-xl bg-warm-light hover:bg-accent-gold text-warm-charcoal border border-warm-beige/60 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/rajnish-kumar-100558249"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-warm-light hover:bg-accent-gold text-warm-charcoal border border-warm-beige/60 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/Rajnish12-git"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-warm-light hover:bg-accent-gold text-warm-charcoal border border-warm-beige/60 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for glass effect and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking for sticky navbar active state
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect border-b border-[#3A2F0B] py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center w-full">
        {/* Logo / Brand Name */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2.5 focus:outline-none group text-base sm:text-lg"
        >
          <img
            src="/profile.png"
            alt="SK Profile"
            className="w-7 h-7 rounded-full object-cover border border-[#3A2F0B] group-hover:border-[#FFD700] transition-all duration-300 flex-shrink-0"
          />
          <span className="font-poppins tracking-normal font-extrabold text-[#F5F5F5] group-hover:text-[#FFD700] transition-colors duration-300">
            SABARINATHAN <span className="text-[#D4AF37]">K</span>
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-[#FFD700] relative py-1.5 ${
                    activeSection === section.id ? 'text-[#D4AF37] font-bold' : 'text-[#B8B8B8]'
                  }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="/Sabarinathan_Resume.pdf"
            download="Sabarinathan_Resume.pdf"
            className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-md bg-[#D4AF37] text-[#0A0A0A] hover:bg-[#FFD700] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <Download size={13} />
            Resume
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="/Sabarinathan_Resume.pdf"
            download="Sabarinathan_Resume.pdf"
            className="flex items-center gap-1 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider rounded-md bg-[#D4AF37] text-[#0A0A0A] hover:bg-[#FFD700]"
          >
            <Download size={11} />
            Resume
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#B8B8B8] hover:text-[#FFD700] focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden w-full glass-effect border-b border-[#3A2F0B] overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left w-full py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                      activeSection === section.id ? 'text-[#FFD700] font-bold' : 'text-[#B8B8B8] hover:text-[#FFD700]'
                    }`}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import React, { useState, useEffect } from 'react';
import { Download, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { summary, github, linkedin } = portfolioData.personalInfo;

  // Typewriter effect state
  const words = [
    "AI Agents & Chatbots",
    "Software Engineering Solutions",
    "Front-End Web Apps",
    "Python Solutions"
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');

  const currentWord = words[wordIndex] || '';
  const isWaiting = (!isDeleting && charIndex === currentWord.length) || (isDeleting && charIndex === 0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer;

    if (!isDeleting) {
      // Typing state
      if (charIndex < currentWord.length) {
        timer = setTimeout(() => {
          setTypewriterText(currentWord.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        }, 70);
      } else {
        // Full word typed! Pause for exactly 2 seconds before starting to delete
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting state
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setTypewriterText(currentWord.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        }, 30);
      } else {
        // Word deleted! Pause for 500ms before starting the next word
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex(prev => (prev + 1) % words.length);
        }, 500);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 18 }
    }
  };

  return (
    <section id="hero" className="min-h-[80vh] lg:min-h-[75vh] relative flex items-center pt-24 pb-12 overflow-hidden bg-transparent border-b border-[#3A2F0B]">
      {/* Subtle background black overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#121212] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10 w-full relative">
        
        {/* Left Column: Balanced Profile Image (order 1 on mobile and desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="lg:col-span-5 flex justify-center lg:justify-start order-1"
        >
          <div className="relative group cursor-pointer">
            {/* Glowing Backdrop (Pure Gold) */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#FFD700] opacity-15 blur-2xl group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
            
            {/* Soft Glowing Ring/Outline (Pure Gold) */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#3A2F0B] via-[#D4AF37] to-[#FFD700] opacity-40 group-hover:opacity-90 blur-[3px] transition-all duration-500 pointer-events-none"></div>
            
            {/* Profile Image container (Circle Profile) */}
            <div className="w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] lg:w-[310px] lg:h-[310px] rounded-full overflow-hidden bg-[#121212] relative z-10 p-1.5 flex items-center justify-center border border-[#3A2F0B] shadow-[0_0_30px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_50px_rgba(212,175,55,0.45)] group-hover:border-[#D4AF37]/55 transition-all duration-500">
              <img
                src="/profile.png"
                alt="Sabarinathan K"
                className="w-full h-full object-cover rounded-full filter brightness-95 group-hover:brightness-100 transition-all duration-500"
              />
            </div>
            
            {/* Thin Decorative Border (Outer) */}
            <div className="absolute inset-0 rounded-full border border-white/5 group-hover:border-[#FFD700]/30 scale-[1.03] transition-all duration-500 pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Right Column: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start order-2"
        >
          {/* Professional Status Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FFD700] bg-[#FFD700]/5 border border-[#3A2F0B] rounded-md mb-4">
              <span className="text-[#FFD700] animate-pulse text-[11px]">✦</span>
              Available for Internships & IT Roles
            </span>
          </motion.div>

          {/* Name - Metallic Gold Gradient */}
          <motion.h1
            variants={itemVariants}
            className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-none text-[#F5F5F5]"
          >
            Hi, I'm <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">Sabarinathan</span>
          </motion.h1>

          {/* Subtitle - Professional Gold Weight */}
          <motion.h2
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl font-semibold text-[#D4AF37] mb-4 font-poppins flex flex-wrap items-center justify-center lg:justify-start gap-2"
          >
            <span>Aspiring Software Engineer</span>
            <span className="text-[#FFD700] opacity-80 font-normal">✦</span>
            <span>Python Enthusiast</span>
          </motion.h2>

          {/* Tagline - Dynamic Typewriter Layout */}
          <motion.h3
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl font-bold font-poppins text-[#F5F5F5] mb-6 flex items-center justify-center lg:justify-start gap-2 h-8"
          >
            <span className="text-[#B8B8B8]">I build</span>
            <span className="text-[#FFD700] bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">{typewriterText}</span>
            <span 
              className="text-[#FFD700] animate-star-cursor ml-1.5 select-none text-base sm:text-lg lg:text-xl"
              style={{ animationPlayState: isWaiting ? 'paused' : 'running' }}
            >
              ✦
            </span>
          </motion.h3>

          {/* Summary */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-[#B8B8B8] max-w-3xl mb-8 leading-relaxed font-normal"
          >
            {summary}
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center w-full sm:w-auto mb-8"
          >
            <button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#D4AF37] text-[#0A0A0A] hover:bg-[#FFD700] hover:shadow-[0_0_20px_rgba(212,175,55,0.45)] font-bold text-xs sm:text-sm uppercase tracking-wider hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              View Projects
              <ArrowRight size={15} />
            </button>
            <a
              href="/Sabarinathan_Resume.pdf"
              download="Sabarinathan_Resume.pdf"
              className="flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#121212] border border-[#D4AF37]/45 text-[#F5F5F5] hover:bg-[#D4AF37]/5 hover:border-[#FFD700] hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] font-bold text-xs sm:text-sm uppercase tracking-wider hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Download size={15} className="text-[#FFD700]" />
              Download Resume
            </a>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-7 py-3.5 rounded-md bg-transparent border border-[#3A2F0B] hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 text-[#B8B8B8] hover:text-[#F5F5F5] font-bold text-xs sm:text-sm uppercase tracking-wider hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Socials Row (With Stat Chips Removed) */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 items-center justify-center lg:justify-start w-full border-t border-[#3A2F0B] pt-5"
          >
            <span className="text-[#B8B8B8]/60 text-xs font-semibold uppercase tracking-wider mr-1">Follow Me:</span>
            <div className="flex gap-3">
              <a
                href="https://github.com/sabarinathan1310"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B8B8B8] hover:text-[#FFD700] p-2 rounded bg-[#121212] border border-[#3A2F0B] hover:border-[#D4AF37]/40 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sabariengineer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B8B8B8] hover:text-[#FFD700] p-2 rounded bg-[#121212] border border-[#3A2F0B] hover:border-[#D4AF37]/40 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="text-[#B8B8B8] hover:text-[#FFD700] p-2 rounded bg-[#121212] border border-[#3A2F0B] hover:border-[#D4AF37]/40 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={16} />
              </button>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

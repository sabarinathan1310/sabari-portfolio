import React from 'react';
import { Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const GithubIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const { name, github, linkedin, email } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#3A2F0B] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left: Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-poppins text-lg font-bold tracking-tight text-[#F5F5F5] flex items-center gap-2 focus:outline-none group"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFD700] shadow-[0_0_6px_rgba(255,215,0,0.5)] group-hover:bg-[#D4AF37] transition-colors"></span>
            SABARINATHAN <span className="text-[#D4AF37]">K</span>
          </button>
          <p className="text-[#B8B8B8]/70 text-xs mt-1.5 font-medium">
            Computer Science Engineering Student
          </p>
        </div>

        {/* Middle: Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-[#B8B8B8]/80">
          <li>
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('skills')} className="hover:text-white transition-colors">Skills</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors">Projects</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('education')} className="hover:text-white transition-colors">Education</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('certifications')} className="hover:text-white transition-colors">Certifications</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button>
          </li>
        </ul>

        {/* Right: Socials & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3.5">
          <div className="flex gap-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B8B8B8] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B8B8B8] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${email}`}
              className="text-[#B8B8B8] hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
          <p className="text-[#B8B8B8]/40 text-[10px]">
            &copy; {currentYear} {name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

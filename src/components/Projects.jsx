import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const GithubIcon = ({ size = 15, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Map project IDs to visual illustrations
const projectImages = {
  1: "/projects/missing_person_ai.png",
  2: "/projects/garage_crm.png",
  3: "/projects/fraud_detection.png",
  4: "/projects/transit_analysis.png"
};

// Map card index to gold/bronze gradient accent line classes
const accentColors = [
  "bg-gradient-to-r from-[#D4AF37] to-[#FFD700]", // Light Metallic Gold
  "bg-gradient-to-r from-[#3A2F0B] to-[#D4AF37]", // Dark Bronze to Gold
  "bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#3A2F0B]", // Gold to Bronze
  "bg-gradient-to-r from-[#E5A93B] to-[#FFD700]"  // Warm Orange Gold
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [toastMsg, setToastMsg] = useState(null);
  const projects = portfolioData.projects;

  const categories = ["All", "AI & ML", "Software Development", "Data Analytics"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const handleDemoClick = (e, url, title) => {
    if (url === "#" || !url) {
      e.preventDefault();
      setToastMsg(`✨ Live demo for "${title}" is arriving soon. Please explore the Git repository code in the meantime!`);
      setTimeout(() => setToastMsg(null), 4500);
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-transparent border-b border-[#3A2F0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5F5] mb-4">
            Featured <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          <p className="text-[#B8B8B8] mt-4 text-xs sm:text-sm max-w-lg mx-auto">
            A selection of software development, artificial intelligence, and data engineering projects from my academic career.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-16">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(category)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-[#D4AF37] text-[#0A0A0A] font-bold shadow-lg'
                  : 'bg-[#121212]/60 border border-[#3A2F0B] text-[#B8B8B8] hover:text-[#F5F5F5] hover:border-[#D4AF37]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const accentColorClass = accentColors[idx % accentColors.length];
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -6, borderColor: 'rgba(212, 175, 55, 0.4)', boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)' }}
                  transition={{ duration: 0.35 }}
                  key={project.id}
                  className="flex flex-col h-full rounded-2xl glass-card overflow-hidden group shadow-lg transition-all duration-300 relative"
                >
                  {/* Colored top accent line */}
                  <div className={`h-[3px] w-full absolute top-0 left-0 ${accentColorClass} z-25`} />

                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-[#0A0A0A] z-10 border-b border-[#3A2F0B]">
                    <img
                      src={projectImages[project.id]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    {/* Category overlay */}
                    <span className="absolute top-4 right-4 px-2.5 py-1 text-[9px] font-bold tracking-wider text-[#FFD700] uppercase bg-[#0A0A0A]/90 rounded-md border border-[#3A2F0B]">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 flex flex-col flex-grow relative z-10">
                    <h3 className="font-poppins text-lg sm:text-xl font-bold text-[#F5F5F5] mb-2.5 group-hover:text-[#D4AF37] transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="text-[#B8B8B8] text-xs sm:text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Bullet features list */}
                    <ul className="space-y-2 mb-6 text-[#B8B8B8] text-[11px] sm:text-xs pl-0.5 flex-grow leading-relaxed">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <CheckCircle size={13} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack badges at bottom */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#B8B8B8] bg-[#0A0A0A]/85 rounded-md border border-[#3A2F0B]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex justify-between items-center pt-4 border-t border-[#3A2F0B] gap-4 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#3A2F0B] text-xs text-[#B8B8B8] hover:text-white hover:border-[#D4AF37] font-bold uppercase tracking-wider transition-all duration-200 group/btn"
                      >
                        <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:text-[#D4AF37] transition-colors">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        Repository
                      </a>
                      
                      <a
                        href={project.demo}
                        onClick={(e) => handleDemoClick(e, project.demo, project.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3.5 py-1.5 rounded-md bg-[#D4AF37]/10 text-[#FFD700] hover:bg-[#D4AF37] hover:text-[#0A0A0A] text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border border-[#3A2F0B] hover:border-[#FFD700] hover:shadow-[0_0_12px_rgba(212,175,55,0.3)]"
                      >
                        <span>Demo</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Dynamic Glass Toast Popup */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 p-4.5 rounded-2xl glass-card border border-[#D4AF37]/30 text-white text-xs sm:text-sm font-semibold max-w-sm flex items-center gap-3.5 shadow-2xl"
          >
            <div className="p-1 rounded bg-[#D4AF37]/20 text-[#D4AF37] flex-shrink-0">
              <Layers size={16} />
            </div>
            <span>{toastMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

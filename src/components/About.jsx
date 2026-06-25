import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Brain, Globe, Heart, GraduationCap, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { summary, careerObjective } = portfolioData.personalInfo;
  const education = portfolioData.education;
  
  // Soft skills mapping with corresponding icons for visual appeal
  const softSkills = [
    { name: "Problem Solving", icon: Brain, desc: "Analyzing complex logic and structuring efficient software data flows." },
    { name: "Strategic Planning", icon: Compass, desc: "Setting clear milestones and architectural stages for software systems." },
    { name: "Adaptability to Change", icon: Award, desc: "Eagerly picking up new tools, frameworks, and programming patterns." }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent border-b border-[#3A2F0B]">
      {/* Background glow spot */}
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5F5] mb-4">
            About <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        {/* Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Intro & Summary */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] font-poppins">
                My Journey & Ambitions
              </h3>
              <p className="text-[#B8B8B8] leading-relaxed text-sm sm:text-base font-normal">
                {summary}
              </p>
            </div>

            {/* Career Objective (Glassmorphism Card) */}
            <div className="p-6 rounded-2xl glass-card relative overflow-hidden group border-l-4 border-l-[#D4AF37]">
              <h4 className="font-semibold text-[#F5F5F5] mb-2.5 text-base sm:text-lg font-poppins flex items-center gap-2">
                <span className="text-[#D4AF37]">✦</span> Career Objective
              </h4>
              <p className="text-[#B8B8B8] text-xs sm:text-sm leading-relaxed">
                {careerObjective}
              </p>
            </div>

            {/* Languages & Hobbies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Languages Card */}
              <div className="p-5 rounded-2xl glass-card relative overflow-hidden group">
                <h4 className="font-bold text-[#F5F5F5] mb-3 text-sm sm:text-base font-poppins flex items-center gap-2">
                  <Globe className="text-[#D4AF37]" size={16} /> Languages
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#B8B8B8] font-normal">
                  {portfolioData.personalInfo.languages.map((lang, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="text-[#FFD700] text-[10px] animate-pulse">✦</span>
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hobbies Card */}
              <div className="p-5 rounded-2xl glass-card relative overflow-hidden group">
                <h4 className="font-bold text-[#F5F5F5] mb-3 text-sm sm:text-base font-poppins flex items-center gap-2">
                  <Heart className="text-[#D4AF37]" size={16} /> Hobbies & Interests
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#B8B8B8] font-normal">
                  {portfolioData.personalInfo.hobbies.map((hobby, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="text-[#FFD700] text-[10px] animate-pulse">✦</span>
                      {hobby}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Strengths */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-poppins text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-2">
              Core Strengths
            </h3>

            <div className="space-y-4">
              {softSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4, borderColor: 'rgba(212, 175, 55, 0.4)' }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 100, damping: 15, delay: index * 0.1 }}
                    className="p-5 rounded-2xl glass-card flex gap-4 transition-all duration-300 relative overflow-hidden group"
                  >
                    {/* Corner gradient glow on hover */}
                    <div className="absolute -right-8 -bottom-8 w-20 h-20 bg-[#D4AF37]/5 rounded-full blur-lg group-hover:bg-[#D4AF37]/10 transition-all duration-300"></div>
                    
                    <div className="p-3.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] h-fit w-fit flex-shrink-0 group-hover:bg-[#D4AF37] group-hover:text-[#0A0A0A] transition-all duration-300">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#F5F5F5] mb-1.5 text-sm sm:text-base font-poppins">{skill.name}</h4>
                      <p className="text-[#B8B8B8] text-xs leading-relaxed">{skill.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

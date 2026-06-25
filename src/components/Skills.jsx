import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Sliders } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const allSkills = portfolioData.skills.filter(cat => cat.category !== "Soft Skills");

  // Helper to map levels to percentages
  const getLevelPercentage = (level) => {
    switch (level?.toLowerCase()) {
      case 'expert': return 95;
      case 'advanced': return 85;
      case 'intermediate': return 65;
      case 'basic': return 45;
      default: return 50;
    }
  };

  // Helper to map category names to icons
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Programming Languages": return Code;
      case "Web Technologies": return Layout;
      case "Database": return Database;
      case "Tools & CRM": return Sliders;
      default: return Code;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent border-b border-[#3A2F0B]">
      {/* Background glow spot */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5F5] mb-4">
            My <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#3A2F0B] to-[#FFD700] mx-auto rounded-full"></div>
          <p className="text-[#B8B8B8] mt-4 text-xs sm:text-sm max-w-lg mx-auto">
            A comprehensive overview of my technical capabilities, structured like interactive bar charts representing proficiency levels.
          </p>
        </div>

        {/* Skills Category Cards Grid (2-columns on large screens) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {allSkills.map((cat, idx) => {
            const CategoryIcon = getCategoryIcon(cat.category);
            return (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={cat.category}
                className="p-6 md:p-8 rounded-2xl glass-card relative overflow-hidden group border border-[#3A2F0B]"
              >
                {/* Background Subtle Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/2 to-[#FFD700]/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-8 border-b border-[#3A2F0B]/40 pb-4 relative z-10">
                  <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-gradient-to-r group-hover:from-[#3A2F0B] group-hover:to-[#D4AF37] group-hover:text-[#F5F5F5] transition-all duration-500 shadow-[0_0_10px_rgba(212,175,55,0.05)] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.25)]">
                    <CategoryIcon size={20} />
                  </div>
                  <h3 className="font-poppins text-lg sm:text-xl font-bold text-[#F5F5F5] group-hover:text-white transition-colors duration-300">
                    {cat.category}
                  </h3>
                </div>

                {/* Skills Stack */}
                <div className="space-y-6 relative z-10">
                  {cat.items.map((skill) => {
                    const percentage = getLevelPercentage(skill.level);
                    return (
                      <div key={skill.name} className="group/skill">
                        {/* Name and Level Row */}
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] sm:text-xs font-bold font-mono text-[#D4AF37] group-hover/skill:text-[#FFD700] transition-colors">
                            {skill.level}
                          </span>
                        </div>

                        {/* Progress Bar Track */}
                        <div className="h-2 w-full bg-[#0A0A0A] border border-[#3A2F0B]/30 rounded-full overflow-hidden relative">
                          {/* Animated Progress Fill */}
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                            className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#E5A93B] relative"
                          >
                            {/* Glowing Tip */}
                            <div className="absolute right-0 top-0 h-full w-2 bg-[#FFD700]/30 blur-[1px] rounded-full" />
                          </motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

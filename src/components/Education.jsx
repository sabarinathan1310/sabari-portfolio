import React from 'react';
import { Calendar, GraduationCap, MapPin, Award, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const educationList = portfolioData.education;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-transparent border-b border-[#3A2F0B]">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5F5] mb-4">
            My <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-[#3A2F0B] ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          
          {educationList.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Star */}
              <div className="absolute left-[-43px] md:left-[-51px] top-6 w-6 h-6 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 z-10">
                <div className="relative flex items-center justify-center">
                  <Star size={20} className="text-[#D4AF37] fill-[#0A0A0A] stroke-[2.5] drop-shadow-[0_0_6px_rgba(212,175,55,0.3)]" />
                  <Star size={8} className="absolute text-[#FFD700] fill-[#FFD700] stroke-none" />
                </div>
              </div>

              {/* Glassmorphism Education Card */}
              <div className="p-6 sm:p-8 rounded-2xl glass-card hover:border-[#D4AF37]/50 transition-all duration-300 relative overflow-hidden">
                {/* Accent glow on hover */}
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-xl group-hover:bg-[#D4AF37]/10 transition-all duration-300"></div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div className="space-y-1.5">
                    <h3 className="font-poppins text-lg sm:text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-200">
                      {edu.degree}
                    </h3>
                    <p className="text-[#B8B8B8] font-semibold text-xs sm:text-sm">
                      {edu.institution}
                    </p>
                  </div>
                  
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8B8B8] bg-[#0A0A0A] border border-[#3A2F0B] px-3 py-1.5 rounded-md flex items-center gap-1.5 self-start whitespace-nowrap">
                    <Calendar size={12} className="text-[#FFD700]" />
                    {edu.period}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 items-center pt-4 border-t border-[#3A2F0B] mt-4 text-xs">
                  <span className="text-[#B8B8B8] flex items-center gap-1">
                    <MapPin size={13} className="text-[#D4AF37]" />
                    Ariyalur, Tamilnadu
                  </span>
                  
                  <span className="text-[#B8B8B8] flex items-center gap-1 ml-auto sm:ml-0">
                    <Award size={13} className="text-[#FFD700]" />
                    {edu.status}
                  </span>

                  {edu.grade && (
                    <span className="inline-block text-[10px] font-bold text-[#FFD700] bg-[#FFD700]/5 px-2.5 py-1 rounded border border-[#3A2F0B] shadow-[0_0_8px_rgba(212,175,55,0.05)]">
                      {edu.grade}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

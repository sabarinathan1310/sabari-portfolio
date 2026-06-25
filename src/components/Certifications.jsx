import React from 'react';
import { Award, ShieldCheck, ArrowUpRight, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Color mappings based on certification issuer
const issuerColors = {
  "DonBosco Tech, Accenture": "text-[#D4AF37]",
  "Edunet Foundation": "text-[#FFD700]",
  "UiPath": "text-[#FFD700]",
  "IBM": "text-[#D4AF37]"
};

const badgeColors = {
  "DonBosco Tech, Accenture": "text-[#D4AF37] bg-[#D4AF37]/5 border-[#3A2F0B]",
  "Edunet Foundation": "text-[#FFD700] bg-[#FFD700]/5 border-[#3A2F0B]",
  "UiPath": "text-[#FFD700] bg-[#FFD700]/5 border-[#3A2F0B]",
  "IBM": "text-[#D4AF37] bg-[#D4AF37]/5 border-[#3A2F0B]"
};

const ribbonColors = {
  "DonBosco Tech, Accenture": "from-[#D4AF37] to-[#FFD700]",
  "Edunet Foundation": "from-[#3A2F0B] to-[#FFD700]",
  "UiPath": "from-[#FFD700] to-[#E5A93B]",
  "IBM": "from-[#D4AF37] to-[#FFD700]"
};

export default function Certifications() {
  const certifications = portfolioData.certifications;

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-transparent border-b border-[#3A2F0B]">
      {/* Background glow blob */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5F5] mb-4">
            Licenses & <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          <p className="text-[#B8B8B8] mt-4 text-xs sm:text-sm max-w-lg mx-auto">
            Professional qualifications and specialized course completions that expand my engineering knowledge.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => {
            const issuerColor = issuerColors[cert.issuer] || "text-[#FFD700]";
            const ribbonColor = ribbonColors[cert.issuer] || "from-[#D4AF37] to-[#FFD700]";

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card flex flex-col sm:flex-row gap-6 shadow-lg group hover:border-[#D4AF37]/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Certificate Preview Container */}
                <div className="w-full sm:w-36 h-36 rounded-xl bg-slate-950/80 border border-[#3A2F0B] flex flex-col justify-center items-center relative overflow-hidden flex-shrink-0 group-hover:border-[#D4AF37]/30 transition-colors duration-300">
                  {/* Decorative ribbon */}
                  <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${ribbonColor} translate-x-4 -translate-y-4 rotate-45`}></div>
                  
                   {/* Visual Icon */}
                  <Award size={40} className="text-[#D4AF37] group-hover:text-[#FFD700] group-hover:scale-105 transition-all duration-300" />
                  
                  {/* Label Mockup text */}
                  <span className="text-[8px] font-bold uppercase tracking-widest text-[#B8B8B8]/50 mt-3 block">
                    Verified
                  </span>
                  
                  {/* Tiny Badge */}
                  <ShieldCheck size={14} className="text-[#FFD700] absolute bottom-3 right-3" />
                </div>

                {/* Text details */}
                <div className="flex-grow flex flex-col">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <div>
                      <h3 className="font-poppins text-base sm:text-lg font-bold text-[#F5F5F5] group-hover:text-[#D4AF37] transition-colors duration-200">
                        {cert.title}
                      </h3>
                      {/* Issuer Name in Accent Color */}
                      <p className={`text-xs font-bold mt-0.5 ${issuerColor}`}>
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-[9px] font-bold text-[#B8B8B8] bg-[#0A0A0A] border border-[#3A2F0B] px-2 py-1 rounded-md flex-shrink-0 flex items-center gap-1">
                      <Calendar size={10} className="text-[#FFD700]" />
                      {cert.duration}
                    </span>
                  </div>

                  <p className="text-[#B8B8B8] text-xs sm:text-sm mt-2 leading-relaxed flex-grow">
                    {cert.description}
                  </p>

                  <a
                    href={cert.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center gap-1.5 text-xs text-[#FFD700] hover:text-[#D4AF37] font-bold uppercase tracking-wider w-fit transition-colors duration-200"
                  >
                    View Certificate
                    <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

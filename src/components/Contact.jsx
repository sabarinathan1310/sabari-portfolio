import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, Send, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const { email, phone, location, github, linkedin } = portfolioData.personalInfo;
  
  // States for form handling
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Input validation
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required";
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) formErrors.subject = "Subject is required";
    if (!formData.message.trim()) formErrors.message = "Message is required";
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError(null);
      
      try {
        const response = await fetch("https://formspree.io/f/xbdevgkl", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setIsSubmitted(false), 5000);
        } else {
          const data = await response.json();
          setIsSubmitting(false);
          setSubmitError(data.error || "Form submission failed. Please try again.");
        }
      } catch (err) {
        setIsSubmitting(false);
        setSubmitError("Network error. Please check your connection and try again.");
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFD700]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5F5] mb-4">
            Let's Build <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">Something Together</span>
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          <p className="text-[#B8B8B8] mt-4 text-xs sm:text-sm max-w-lg mx-auto font-normal">
            Have an open role or internship? Drop a message or contact me directly through the details below.
          </p>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <h3 className="font-poppins text-xl sm:text-2xl font-bold text-white">
                Contact Coordinates
              </h3>
              <p className="text-[#B8B8B8] text-xs sm:text-sm leading-relaxed">
                Connect with me instantly through the glowing buttons below, or use the form to drop me a line.
              </p>

              {/* Glowing buttons for Email, LinkedIn, GitHub */}
              <div className="flex flex-col gap-4">
                
                {/* Email Button */}
                <div className="relative group">
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center justify-between p-4 rounded-xl border border-[#3A2F0B] bg-[#D4AF37]/5 hover:bg-[#D4AF37] hover:text-[#0A0A0A] font-bold uppercase tracking-wider text-xs transition-all duration-300 w-full"
                  >
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-[#D4AF37] group-hover:text-[#0A0A0A] transition-colors" />
                      <span>Email Me</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-semibold group-hover:text-[#0A0A0A] transition-colors truncate max-w-[140px] sm:max-w-none">
                      {email}
                    </span>
                  </a>
                </div>

                {/* LinkedIn Button (Gold highlight) */}
                <div className="relative group">
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl border border-[#3A2F0B] bg-[#FFD700]/5 hover:bg-[#FFD700] hover:text-[#0A0A0A] font-bold uppercase tracking-wider text-xs transition-all duration-300 w-full"
                  >
                    <div className="flex items-center gap-3">
                      <LinkedinIcon size={16} className="text-[#FFD700] group-hover:text-[#0A0A0A] transition-colors" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-semibold group-hover:text-[#0A0A0A] transition-colors">
                      sabariengineer
                    </span>
                  </a>
                </div>

                {/* GitHub Button */}
                <div className="relative group">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl border border-[#3A2F0B] bg-[#D4AF37]/5 hover:bg-[#FFD700] hover:text-[#0A0A0A] font-bold uppercase tracking-wider text-xs transition-all duration-300 w-full"
                  >
                    <div className="flex items-center gap-3">
                      <GithubIcon size={16} className="text-[#D4AF37] group-hover:text-[#0A0A0A] transition-colors" />
                      <span>GitHub Code</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-semibold group-hover:text-[#0A0A0A] transition-colors">
                      sabarinathan1310
                    </span>
                  </a>
                </div>

              </div>

              {/* Phone & Location Metadata */}
              <div className="pt-6 border-t border-[#3A2F0B] space-y-3 text-xs text-[#B8B8B8]">
                <p className="flex items-center gap-2.5">
                  <Phone size={14} className="text-[#34d399]" />
                  <span>Phone: <a href={`tel:${phone}`} className="hover:text-white font-semibold transition-colors">{phone}</a></span>
                </p>
                <p className="flex items-center gap-2.5">
                  <MapPin size={14} className="text-[#D4AF37]" />
                  <span>Location: <span className="font-semibold text-[#F5F5F5]">{location}</span></span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-card relative overflow-hidden">
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#0A0A0A]/95 z-20 flex flex-col justify-center items-center p-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-16 h-16 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-4 border border-[#3A2F0B]"
                    >
                      <Check size={28} className="text-[#D4AF37]" />
                    </motion.div>
                    <h4 className="font-poppins text-xl sm:text-2xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-[#B8B8B8] text-xs sm:text-sm max-w-sm">
                      Thank you for reaching out. Your message has been successfully received, and I will get back to you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-bold text-[#B8B8B8] uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-md bg-[#0A0A0A]/50 border text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] transition-colors ${
                        errors.name ? 'border-red-500/50' : 'border-[#3A2F0B]'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <span className="text-[10px] font-bold text-red-400 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-bold text-[#B8B8B8] uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-md bg-[#0A0A0A]/50 border text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] transition-colors ${
                        errors.email ? 'border-red-500/50' : 'border-[#3A2F0B]'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <span className="text-[10px] font-bold text-red-400 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-[10px] font-bold text-[#B8B8B8] uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-md bg-[#0A0A0A]/50 border text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] transition-colors ${
                      errors.subject ? 'border-red-500/50' : 'border-[#3A2F0B]'
                    }`}
                    placeholder="Project Inquiry / Job Opportunity"
                  />
                  {errors.subject && (
                    <span className="text-[10px] font-bold text-red-400 flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-bold text-[#B8B8B8] uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-md bg-[#0A0A0A]/50 border text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] transition-colors resize-none ${
                      errors.message ? 'border-red-500/50' : 'border-[#3A2F0B]'
                    }`}
                    placeholder="Hi Sabarinathan, I'd like to discuss a project..."
                  />
                  {errors.message && (
                    <span className="text-[10px] font-bold text-red-400 flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit response error alert */}
                {submitError && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle size={14} className="flex-shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#D4AF37] hover:bg-[#FFD700] text-[#0A0A0A] font-bold text-xs uppercase tracking-wider shadow-lg transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#0A0A0A] border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={13} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import NeuralBackground from './components/NeuralBackground';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial portfolio page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A] flex flex-col justify-center items-center"
          >
            {/* Spinning gradient ring */}
            <div className="relative w-20 h-20 mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-[#3A2F0B]/30"></div>
              <div className="absolute inset-0 rounded-full border-4 border-t-[#FFD700] border-r-[#D4AF37] animate-spin"></div>
            </div>

            {/* Glowing load text */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="font-poppins text-xl font-bold tracking-widest text-[#F5F5F5] uppercase flex items-center gap-2"
            >
              Sabarinathan
              <span className="text-[#FFD700] text-[15px] font-bold select-none drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] animate-pulse leading-none ml-1">✦</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-[#B8B8B8] text-xs mt-2 uppercase tracking-wider font-semibold"
            >
              Portfolio Loading
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col min-h-screen relative"
          >
            {/* Background Particle Network */}
            <NeuralBackground />

            {/* Main Application Shell */}
            <Navigation />
            
            <main className="flex-grow relative z-10">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Certifications />
              <Contact />
            </main>

            <Footer />
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import GadgetsSection from '@/components/sections/GadgetsSection';
import VillainsSection from '@/components/sections/VillainsSection';
import TimelineSection from '@/components/sections/TimelineSection';
import FinalCTA from '@/components/sections/FinalCTA';
import SoundToggle from '@/components/layout/SoundToggle';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    // Initial loading simulation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
    // Smooth scroll to About section
    const about = document.getElementById('about');
    about?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen bg-transparent">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <motion.div
               animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-32 h-16 md:w-48 md:h-24 text-yellow-400 fill-current"
            >
               <svg viewBox="0 0 100 50" className="w-full h-full">
                 <path d="M 50 10 C 40 10 35 2 30 2 C 25 2 20 15 5 15 C 0 15 0 25 5 30 C 10 35 25 35 30 35 C 35 35 40 25 50 25 C 60 25 65 35 70 35 C 75 35 90 35 95 30 C 100 25 100 15 95 15 C 80 15 75 2 70 2 C 65 2 60 10 50 10 Z" />
               </svg>
            </motion.div>
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1 }}
               className="mt-8 text-white/40 font-mono text-xs uppercase tracking-[0.5em] animate-pulse"
            >
              Initializing Gotham Interface...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SoundToggle />

      <HeroSection onEnter={handleEnter} />
      
      <div id="about">
        <AboutSection />
      </div>

      <GadgetsSection />
      
      <VillainsSection />
      
      <TimelineSection />
      
      <FinalCTA />

      {/* GSAP ScrollTrigger could be added here or within sections for 3D camera control */}
      
      <style jsx global>{`
        /* Global transitions for hover states */
        .interactive:hover {
           filter: drop-shadow(0 0 10px rgba(253, 224, 71, 0.6));
        }
      `}</style>
    </main>
  );
}

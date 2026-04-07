'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FinalCTA() {
  const triggerEasterEgg = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#000000', '#fde047', '#ffffff']
    });
  };

  return (
    <footer className="relative py-32 bg-transparent border-t border-white/5 overflow-hidden backdrop-blur-lg">
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-8 glow-yellow">
            BECOME THE DARK KNIGHT
          </h2>
          <p className="text-white/60 mb-12 text-xl max-w-2xl mx-auto">
            The night is calling. The symbol is ready. Are you?
          </p>
          
          <button
            onClick={triggerEasterEgg}
            className="group relative px-12 py-5 bg-white text-black font-black text-2xl uppercase tracking-widest hover:bg-yellow-400 transition-colors duration-500 rounded-full"
          >
            JOIN THE LEGACY
            <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity" />
          </button>
        </motion.div>
        
        {/* Social Icons */}
        <div className="mt-24 flex justify-center gap-10">
          {[Shield, Zap, Globe].map((Icon, i) => (
             <motion.a
               key={i}
               href="#"
               className="text-white/40 hover:text-yellow-400 transition-colors duration-300"
               whileHover={{ scale: 1.2, y: -5 }}
             >
               <Icon className="w-8 h-8" />
             </motion.a>
          ))}
        </div>
        
        <div className="mt-20">
          <motion.div
             className="cursor-pointer inline-block"
             onClick={triggerEasterEgg}
             whileHover={{ scale: 1.1 }}
          >
            <div className="w-16 h-8 bg-current text-white/20 hover:text-yellow-400 transition-colors duration-500 flex items-center justify-center">
              {/* Simple Bat Symbol representation */}
               <svg viewBox="0 0 100 50" className="w-full h-full fill-current">
                 <path d="M 50 10 C 40 10 35 2 30 2 C 25 2 20 15 5 15 C 0 15 0 25 5 30 C 10 35 25 35 30 35 C 35 35 40 25 50 25 C 60 25 65 35 70 35 C 75 35 90 35 95 30 C 100 25 100 15 95 15 C 80 15 75 2 70 2 C 65 2 60 10 50 10 Z" />
               </svg>
            </div>
          </motion.div>
          
          <p className="mt-10 text-white/20 font-mono text-xs uppercase tracking-[0.5em]">
            © 2026 Wayne Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

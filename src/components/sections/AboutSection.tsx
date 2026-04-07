'use client';

import React from 'react';
import { motion } from 'framer-motion';

const textLines = [
  "Gotham City is a place of shadows.",
  "Where corruption runs deep and hope is a scarce commodity.",
  "But in the darkest nights, a symbol of vengeance arises.",
  "Training. Discipline. Will.",
  "Bruce Wayne became something else.",
  "He became the Batman."
];

export default function AboutSection() {
  return (
    <section className="relative min-h-[70vh] w-full flex items-center justify-center py-20 px-4 bg-gradient-to-b from-black to-blue-950/20 overflow-hidden">
      {/* Background Fog (CSS Animation) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-full h-1/2 bg-white/5 blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-full h-1/2 bg-blue-500/5 blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-2xl text-center space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {textLines.map((line, i) => (
            <motion.p
              key={i}
              className="text-xl md:text-2xl font-light text-white/70 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.5, duration: 1 }}
            >
              <span className="font-mono text-yellow-400 mr-2">{'>'}</span>
              {line}
            </motion.p>
          ))}
        </motion.div>
        
        <motion.div
           className="pt-10"
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ delay: 3, duration: 1 }}
        >
          <div className="w-24 h-1 bg-yellow-400 mx-auto glow-yellow shadow-lg shadow-yellow-400/20" />
        </motion.div>
      </div>
    </section>
  );
}

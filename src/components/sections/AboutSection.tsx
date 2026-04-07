'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
    <section className="relative min-h-[70vh] w-full flex items-center justify-center py-32 px-4 bg-gradient-to-b from-transparent via-black/40 to-black/70 backdrop-blur-sm overflow-hidden">
      {/* Background Fog (CSS Animation) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-1/2 bg-white/5 blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-full h-1/2 bg-blue-500/5 blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Cinematic Image */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="w-full md:w-1/2 relative group"
        >
          <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-sm border border-white/5">
            <Image 
              src="/batman_cinematic.png" 
              alt="Batman Cinematic Portrait" 
              fill
              className="object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105"
            />
            {/* Overlay Gradient that blends into dark bg */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
          </div>
          {/* Subtle glow behind image */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/20 blur-3xl -z-10 group-hover:bg-yellow-400/10 transition-colors duration-1000" />
        </motion.div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2 space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {textLines.map((line, i) => (
              <motion.p
                key={i}
                className="text-lg md:text-xl xl:text-2xl font-light text-white/70 mb-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.4, duration: 1 }}
              >
                <span className="font-mono text-yellow-400 mr-3">{'>'}</span>
                {line}
              </motion.p>
            ))}
          </motion.div>
          
          <motion.div
             className="pt-8"
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 2.5, duration: 1 }}
          >
            <div className="w-24 h-1 bg-yellow-400 glow-yellow shadow-lg shadow-yellow-400/20" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

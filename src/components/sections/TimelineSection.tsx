'use client';

import React from 'react';
import { motion } from 'framer-motion';

const events = [
  { year: "YEAR ONE", title: "THE AWAKENING", desc: "Bruce Wayne returns to Gotham. A bat crashes through his study window. The symbol is chosen." },
  { year: "YEAR THREE", title: "THE LONG HALLOWEEN", desc: "A series of murders forces Batman to team up with Harvey Dent and James Gordon." },
  { year: "YEAR SEVEN", title: "THE DARK KNIGHT RETURNS", desc: "After years of retirement, Bruce Wayne returns to a Gotham City overrun by mutants." },
  { year: "THE END", title: "BEYOND THE NIGHT", desc: "A new successor takes the mantle. The legend of the Batman becomes immortal." }
];

export default function TimelineSection() {
  return (
    <section className="relative py-24 px-4 bg-black overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic text-white text-center mb-24">The Legend's Arc</h2>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-20 py-10 space-y-24">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative"
            >
              <div className="absolute top-0 -left-[2.75rem] md:-left-[5.25rem] w-6 h-6 rounded-full bg-yellow-400 border-4 border-black glow-yellow" />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-8">
                <span className="text-yellow-400 font-mono text-xl tracking-widest font-black uppercase mb-2 md:mb-0">{event.year}</span>
                <div>
                  <h3 className="text-3xl font-black uppercase text-white mb-4 italic tracking-tight">{event.title}</h3>
                  <p className="text-white/60 text-lg leading-relaxed max-w-2xl">{event.desc}</p>
                </div>
              </div>
              
              {/* Connector line for the dot */}
              <div className="absolute top-3 -left-4 w-4 h-[1px] bg-white/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const villains = [
  {
    name: "The Joker",
    alias: "Prince of Crime",
    desc: "A homicidal artist who seeks to reveal the meaninglessness of existence through chaos.",
    color: "border-purple-500",
    glow: "shadow-purple-500/50",
    bg: "bg-purple-900/20"
  },
  {
    name: "Harley Quinn",
    alias: "Maiden of Mischief",
    desc: "Bubbling with excitement and danger, she is as unpredictable as she is lethal.",
    color: "border-red-500",
    glow: "shadow-red-500/50",
    bg: "bg-red-900/20"
  },
  {
    name: "Bane",
    alias: "The Man Who Broke the Bat",
    desc: "A tactical genius with superhuman strength fueled by the drug Venom.",
    color: "border-green-800",
    glow: "shadow-green-900/50",
    bg: "bg-green-950/20"
  }
];

function VillainCard({ villain }: { villain: typeof villains[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full aspect-[2/3] cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative transition-all duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl border-2 ${villain.color} ${villain.bg} shadow-2xl flex flex-col justify-end p-8 overflow-hidden`}>
           {/* Abstract Pattern background placeholder */}
           <div className={`absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]`} />
           
           <motion.div
             className="relative z-10"
             animate={{ y: isFlipped ? 20 : 0, opacity: isFlipped ? 0 : 1 }}
           >
              <h3 className={`text-4xl font-black uppercase italic mb-1 ${villain.color.replace('border-', 'text-')}`}>{villain.name}</h3>
              <p className="text-white/40 font-mono text-sm tracking-widest">{villain.alias}</p>
           </motion.div>
        </div>

        {/* Back Side */}
        <div 
          className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl border-2 ${villain.color} ${villain.bg} bg-black/90 p-8 flex flex-col justify-center items-center text-center`}
          style={{ transform: "rotateY(180) translateZ(10px)" }}
        >
          <div className="relative z-10">
            <h3 className={`text-2xl font-black uppercase mb-4 ${villain.color.replace('border-', 'text-')}`}>{villain.name}</h3>
            <p className="text-white/80 leading-relaxed text-lg">{villain.desc}</p>
            <div className={`mt-8 w-12 h-1 bg-current mx-auto ${villain.color.replace('border-', 'text-')}`} />
          </div>
        </div>
      </motion.div>
      
      {/* External Glow */}
      <div className={`absolute inset-0 rounded-2xl blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-700 pointer-events-none -z-10 ${villain.glow}`} />
    </div>
  );
}

export default function VillainsSection() {
  return (
    <section className="relative py-24 px-4 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-red-600 font-mono text-sm tracking-widest uppercase mb-2"
          >
            The Rogues Gallery
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black uppercase italic text-white"
          >
            Gotham's Worst
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          {villains.map((v, i) => (
            <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.3 }}
            >
              <VillainCard villain={v} />
            </motion.div>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}

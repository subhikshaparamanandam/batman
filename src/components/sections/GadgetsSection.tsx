'use client';

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Shield, Car, Construction, Sword } from 'lucide-react';

const gadgets = [
  {
    name: "Batsuit",
    icon: Shield,
    desc: "Advanced tri-weave armor with high-impact resistance and integrated HUD.",
    color: "from-gray-800 to-black"
  },
  {
    name: "Batmobile",
    icon: Car,
    desc: "Urban assault vehicle with stealth mode and non-lethal deterrents.",
    color: "from-blue-900/40 to-black"
  },
  {
    name: "Grappling Gun",
    icon: Construction,
    desc: "High-tensile monofilament line with rapid retraction capability.",
    color: "from-yellow-900/20 to-black"
  },
  {
    name: "Batarang",
    icon: Sword,
    desc: "Custom-balanced throwing weapon with sonic and explosive variants.",
    color: "from-gray-900 to-black"
  }
];

function GadgetCard({ gadget }: { gadget: typeof gadgets[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative p-8 rounded-xl bg-gradient-to-br ${gadget.color} border border-white/10 hover:border-yellow-400/50 transition-colors duration-500 cursor-pointer overflow-hidden aspect-square flex flex-col items-center justify-center text-center`}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl pointer-events-none" />
      
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10 flex flex-col items-center">
        <gadget.icon className="w-16 h-16 text-yellow-400 mb-6 drop-shadow-[0_0_10px_rgba(253,224,71,0.5)]" />
        <h3 className="text-2xl font-black uppercase text-white mb-2">{gadget.name}</h3>
        <p className="text-sm text-white/50 px-4 leading-relaxed">{gadget.desc}</p>
      </div>
      
      {/* Interactive hover line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-700" />
    </motion.div>
  );
}

export default function GadgetsSection() {
  return (
    <section className="relative py-24 px-4 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-yellow-400 font-mono text-sm tracking-widest uppercase mb-2"
          >
            Technical Arsenal
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black uppercase italic text-white"
          >
            The Bat-Tech
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gadgets.map((g, i) => (
            <motion.div
               key={i}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.2 }}
            >
              <GadgetCard gadget={g} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

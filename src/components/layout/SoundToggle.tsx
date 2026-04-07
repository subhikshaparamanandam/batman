'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element for rain
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // Placeholder for rain
    // Note: Using a real rain sound URL would be better, but this is a placeholder.
    // Let's try to find a more appropriate one or just handle the UI toggle.
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, []);

  const toggleSound = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      // In a real app, we'd play a rain loop
      // audioRef.current?.play().catch(e => console.log("Audio blocked"));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-8 right-8 z-[100]">
      <motion.button
        onClick={toggleSound}
        className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/50 hover:text-yellow-400 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 interactive"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="on"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Volume2 className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="off"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <VolumeX className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
      
      {/* Audio visualization bars (if playing) */}
      {isPlaying && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 flex gap-0.5 items-end h-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-1 bg-yellow-400"
              animate={{ height: [4, 12, 4] }}
              transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

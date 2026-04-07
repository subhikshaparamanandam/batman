'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create native audio element for dark cinematic theme
    const audio = new Audio('https://cdn.pixabay.com/audio/2022/10/25/audio_243ffdf0cd.mp3'); 
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
      audioRef.current?.play().catch(e => console.error("Audio playback failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-8 right-8 z-[100]">
      <motion.button
        onClick={toggleSound}
        className="w-14 h-14 rounded-full glass flex items-center justify-center text-white/70 hover:text-yellow-400 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 interactive backdrop-blur-md bg-black/40 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
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
        <div className="absolute top-16 left-1/2 -translate-x-1/2 flex gap-1 items-end h-4 mt-2">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-1 bg-yellow-400 shadow-[0_0_5px_rgba(253,224,71,0.5)]"
              animate={{ height: [4, 12, 4] }}
              transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

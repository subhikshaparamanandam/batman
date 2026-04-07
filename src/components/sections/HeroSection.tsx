'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import GothamSkyline from '@/components/3d/GothamSkyline';
import BatSignal from '@/components/3d/BatSignal';
import BatmanSilhouette from '@/components/3d/BatmanSilhouette';
import CameraHandler from '@/components/3d/CameraHandler';
import { motion } from 'framer-motion';

export default function HeroSection({ onEnter }: { onEnter: () => void }) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 5, 20], fov: 45 }}>
          <color attach="background" args={['#000']} />
          <Suspense fallback={null}>
            <GothamSkyline />
            <BatSignal />
            <CameraHandler />
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <BatmanSilhouette />
            </Float>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          </Suspense>
          <OrbitControls 
            enableZoom={false} 
            maxPolarAngle={Math.PI / 2} 
            minPolarAngle={Math.PI / 3} 
            makeDefault 
          />
        </Canvas>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter glow-yellow mb-4 uppercase italic">
            I AM VENGEANCE.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white/80 mb-12 uppercase">
            I AM THE NIGHT. I AM BATMAN.
          </h2>
          
          <button
            onClick={onEnter}
            className="group relative px-12 py-4 bg-yellow-400 text-black font-bold text-xl uppercase tracking-widest hover:bg-white transition-colors duration-500 rounded-sm"
          >
            Enter Gotham
            {/* Glow effect */}
            <div className="absolute inset-0 bg-yellow-400 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
          </button>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}

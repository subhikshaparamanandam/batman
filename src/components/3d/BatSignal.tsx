'use client';

import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { SpotLight, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

export default function BatSignal() {
  const lightRef = useRef<THREE.SpotLight>(null);
  const targetRef = useRef<THREE.Object3D>(null);

  useFrame((state) => {
    if (!lightRef.current || !targetRef.current) return;
    
    // Subtle movement for the signal
    const t = state.clock.getElapsedTime();
    targetRef.current.position.x = Math.sin(t * 0.5) * 5;
    targetRef.current.position.y = 15 + Math.cos(t * 0.3) * 3;
    
    // Occasionally flash the light like lightning
    if (Math.random() > 0.98) {
      lightRef.current.intensity = 5 + Math.random() * 10;
    } else {
      lightRef.current.intensity = 2;
    }
  });

  return (
    <>
      <object3D ref={targetRef} position={[0, 15, -30]} />
      <SpotLight
        ref={lightRef}
        position={[0, -5, -10]}
        target={targetRef.current as any}
        angle={0.15}
        penumbra={0.5}
        distance={100}
        intensity={2}
        color="#fde047"
        castShadow
        volumetric
      />
    </>
  );
}

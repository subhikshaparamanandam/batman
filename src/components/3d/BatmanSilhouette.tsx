'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Capsule, Cylinder, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export default function BatmanSilhouette() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Breathing/Idle animation
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = -2 + Math.sin(t * 1.5) * 0.05;
    groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.1;
  });

  return (
    <group ref={groupRef} position={[0, -2, -5]} scale={[1, 1, 1]}>
      {/* Body Silhouette */}
      <Capsule args={[0.4, 1, 4, 16]} position={[0, 1.2, 0]}>
        <meshStandardMaterial color="#020202" roughness={0.1} metalness={0.9} />
      </Capsule>
      
      {/* Cape (Simplified) */}
      <mesh position={[0, 1, -0.2]}>
        <coneGeometry args={[1, 3, 4]} />
        <meshStandardMaterial color="#010101" />
      </mesh>
      
      {/* Head */}
      <Sphere args={[0.3, 16, 16]} position={[0, 2, 0]}>
        <meshStandardMaterial color="#000" />
      </Sphere>
      
      {/* Ears */}
      <Cylinder args={[0.02, 0.02, 0.3]} position={[-0.1, 2.3, 0]} rotation={[0, 0, 0.1]}>
        <meshStandardMaterial color="#000" />
      </Cylinder>
      <Cylinder args={[0.02, 0.02, 0.3]} position={[0.1, 2.3, 0]} rotation={[0, 0, -0.1]}>
        <meshStandardMaterial color="#000" />
      </Cylinder>
      
      {/* Glowing Eyes */}
      <group position={[0, 2.1, 0.25]}>
        <mesh position={[-0.1, 0, 0]}>
          <planeGeometry args={[0.05, 0.02]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
        </mesh>
        <mesh position={[0.1, 0, 0]}>
          <planeGeometry args={[0.05, 0.02]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
        </mesh>
      </group>
    </group>
  );
}

'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function GothamSkyline() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 400; // Total buildings

  const { viewport } = useThree();

  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // Create random building data
  const buildings = useMemo(() => {
    const data = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 100;
      const h = Math.random() * 15 + 5;
      const w = Math.random() * 2 + 1;
      const d = Math.random() * 2 + 1;
      data.push({ x, z, h, w, d });
    }
    return data;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    buildings.forEach((b, i) => {
      dummy.position.set(b.x, b.h / 2 - 10, b.z);
      dummy.scale.set(b.w, b.h, b.d);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group position={[0, -2, -20]}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#0a0a0a" 
          roughness={0.1} 
          metalness={0.8}
          emissive="#1a1a1a"
        />
      </instancedMesh>
      
      {/* Fog effect */}
      <fog attach="fog" args={['#000', 10, 50]} />
      
      {/* City glow (ambient light) */}
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 20, 0]} intensity={0.5} color="#1e3a8a" />
    </group>
  );
}

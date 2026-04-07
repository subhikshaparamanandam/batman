'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CameraHandler() {
  const { camera } = useThree();
  
  useEffect(() => {
    // GSAP ScrollTrigger for camera movement
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    // Zoom the camera in as we scroll
    tl.to(camera.position, {
      z: 5,
      y: 2,
      duration: 1,
      ease: "power2.inOut"
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [camera]);

  return null;
}

import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Particles() {
  const particlesRef = useRef();
  const particles = new Array(100).fill().map(() => [Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5]);

  useFrame(() => {
    particlesRef.current.rotation.x += 0.001;
    particlesRef.current.rotation.y += 0.001;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={particles.length}
          array={new Float32Array(particles.flat())}
          itemSize={5}
        />
      </bufferGeometry>
      <pointsMaterial attach="material" size={0.5} color="black" />
    </points>
  );
};


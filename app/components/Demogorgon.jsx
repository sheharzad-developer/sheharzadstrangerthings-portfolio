'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Procedural Demogorgon-like creature (since we don't have a model file)
function DemogorgonCreature({ mousePosition, breathing }) {
  const groupRef = useRef();
  const tentaclesRef = useRef([]);
  const headRef = useRef();
  const petalsRef = useRef([]);

  // Create tentacles
  const tentacleCount = 8;
  const tentacles = useMemo(() => {
    return Array.from({ length: tentacleCount }, (_, i) => ({
      angle: (i / tentacleCount) * Math.PI * 2,
      length: 2 + Math.random() * 1,
      segments: 12,
    }));
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Breathing animation
    const breathScale = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.05 * breathing;
    if (headRef.current) {
      headRef.current.scale.setScalar(breathScale);
    }

    // Cursor parallax effect
    if (typeof window !== 'undefined' && mousePosition && window.innerWidth && window.innerHeight) {
      const parallaxX = ((mousePosition.x / window.innerWidth) - 0.5) * 0.3;
      const parallaxY = -((mousePosition.y / window.innerHeight) - 0.5) * 0.3;
      groupRef.current.rotation.y = parallaxX;
      groupRef.current.rotation.x = parallaxY * 0.5;
    }

    // Animate tentacles
    tentaclesRef.current.forEach((tentacle, i) => {
      if (tentacle) {
        const time = state.clock.elapsedTime;
        const baseAngle = (i / tentacleCount) * Math.PI * 2;
        tentacle.rotation.z = Math.sin(time * 0.5 + i) * 0.2;
        tentacle.rotation.y = baseAngle + Math.sin(time * 0.3 + i) * 0.1;
      }
    });

    // Animate petals (head segments)
    petalsRef.current.forEach((petal, i) => {
      if (petal) {
        const time = state.clock.elapsedTime;
        const angle = (i / 5) * Math.PI * 2;
        petal.rotation.z = Math.sin(time * 0.6 + i) * 0.15;
        petal.position.y = Math.sin(time * 0.4 + i) * 0.1;
      }
    });
  });

  return (
    <group ref={groupRef} position={[0, 0, -3]}>
      {/* Main head/core */}
      <mesh ref={headRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshStandardMaterial
          color="#1a0000"
          emissive="#b01121"
          emissiveIntensity={0.3}
          roughness={0.7}
          metalness={0.3}
        />
      </mesh>

      {/* Petals/segments around head */}
      {Array.from({ length: 5 }).map((_, i) => {
        const angle = (i / 5) * Math.PI * 2;
        return (
          <mesh
            key={`petal-${i}`}
            ref={(el) => (petalsRef.current[i] = el)}
            position={[
              Math.cos(angle) * 1.2,
              Math.sin(angle) * 0.3,
              Math.sin(angle) * 0.2,
            ]}
            rotation={[0, angle, 0]}
          >
            <coneGeometry args={[0.4, 1.2, 6]} />
            <meshStandardMaterial
              color="#2a0000"
              emissive="#b01121"
              emissiveIntensity={0.2}
              roughness={0.8}
            />
          </mesh>
        );
      })}

      {/* Tentacles */}
      {tentacles.map((tentacle, i) => {
        const segments = tentacle.segments;
        return (
          <group
            key={`tentacle-${i}`}
            ref={(el) => (tentaclesRef.current[i] = el)}
            rotation={[0, tentacle.angle, 0]}
          >
            {Array.from({ length: segments }).map((_, j) => {
              const t = j / segments;
              const y = -tentacle.length * t;
              const radius = 0.15 * (1 - t * 0.5);
              return (
                <mesh
                  key={`segment-${j}`}
                  position={[0, y, 0]}
                  scale={[1, 1, 1 - t * 0.1]}
                >
                  <sphereGeometry args={[radius, 6, 6]} />
                  <meshStandardMaterial
                    color="#1a0000"
                    emissive="#b01121"
                    emissiveIntensity={0.2 * (1 - t)}
                    roughness={0.9}
                  />
                </mesh>
              );
            })}
          </group>
        );
      })}

      {/* Glowing core */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 12, 12]} />
        <meshStandardMaterial
          color="#b01121"
          emissive="#ff0000"
          emissiveIntensity={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

export default function Demogorgon({ isVisible, mousePosition }) {
  const breathingRef = useRef(1);

  // Breathing intensity based on visibility - only animate when visible
  useFrame(() => {
    if (isVisible) {
      breathingRef.current = 1;
    }
  });

  if (!isVisible) return null;

  return (
    <>
      {/* Red fog */}
      <fog attach="fog" args={[new THREE.Color('#b01121'), 5, 15]} />
      
      {/* Volumetric lighting */}
      <ambientLight intensity={0.2} color="#b01121" />
      
      <pointLight
        position={[0, 2, 0]}
        intensity={2}
        color="#b01121"
        distance={10}
        decay={2}
      />
      
      <spotLight
        position={[0, 5, 5]}
        angle={0.5}
        penumbra={0.5}
        intensity={3}
        color="#ff0000"
        castShadow
      />

      {/* Main creature */}
      <DemogorgonCreature
        mousePosition={mousePosition}
        breathing={breathingRef.current}
      />

      {/* Additional atmospheric particles - optimized */}
      {Array.from({ length: 3 }).map((_, i) => {
        const angle = (i / 3) * Math.PI * 2;
        return (
          <mesh key={`particle-${i}`} position={[Math.cos(angle) * 2, Math.sin(angle) * 0.5, -2]}>
            <sphereGeometry args={[0.08, 6, 6]} />
            <meshStandardMaterial
              color="#b01121"
              emissive="#ff0000"
              emissiveIntensity={0.8}
              transparent
              opacity={0.4}
            />
          </mesh>
        );
      })}
    </>
  );
}


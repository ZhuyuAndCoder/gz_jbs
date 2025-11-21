import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Planet() {
  const planetRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  
  // Create planet texture
  const planetTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    
    // Create gradient for planet surface
    const gradient = ctx.createLinearGradient(0, 0, 512, 256);
    gradient.addColorStop(0, '#1a1a2e');
    gradient.addColorStop(0.3, '#16213e');
    gradient.addColorStop(0.6, '#0f3460');
    gradient.addColorStop(1, '#6b46c1');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 256);
    
    // Add some surface details
    ctx.fillStyle = '#2d3748';
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 256;
      const radius = Math.random() * 15 + 5;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    
    return new THREE.CanvasTexture(canvas);
  }, []);
  
  useFrame((state) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.005;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += 0.003;
    }
  });
  
  return (
    <>
      {/* Main Planet */}
      <Sphere ref={planetRef} args={[2, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          map={planetTexture}
          roughness={0.8}
          metalness={0.2}
        />
      </Sphere>
      
      {/* Atmosphere */}
      <Sphere ref={atmosphereRef} args={[2.1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#6b46c1"
          transparent
          opacity={0.2}
          side={THREE.BackSide}
        />
      </Sphere>
      
      {/* Glow effect */}
      <Sphere args={[2.3, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#ff1493"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
    </>
  );
}

function Asteroid({ position, size, speed }: { position: [number, number, number], size: number, speed: number }) {
  const asteroidRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (asteroidRef.current) {
      asteroidRef.current.rotation.x += speed * 0.01;
      asteroidRef.current.rotation.y += speed * 0.015;
    }
  });
  
  return (
    <Sphere ref={asteroidRef} args={[size, 8, 8]} position={position}>
      <meshStandardMaterial color="#4a5568" roughness={0.9} />
    </Sphere>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const circleTexture = useMemo(() => {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, size, size);
    const gradient = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2
    );
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.4, 'rgba(255,255,255,0.8)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fill();
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;
    return texture;
  }, []);
  
  const particleCount = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0005;
      particlesRef.current.rotation.y += 0.0005;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.15}
        sizeAttenuation
        transparent
        opacity={0.9}
        map={circleTexture}
        alphaTest={0.2}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Planet3D() {
  const asteroids = useMemo(() => [
    { position: [5, 2, -3] as [number, number, number], size: 0.2, speed: 1 },
    { position: [-4, -1, 4] as [number, number, number], size: 0.15, speed: 1.5 },
    { position: [3, -3, 2] as [number, number, number], size: 0.25, speed: 0.8 },
    { position: [-6, 1, -2] as [number, number, number], size: 0.18, speed: 1.2 },
    { position: [2, 4, -4] as [number, number, number], size: 0.22, speed: 0.9 },
  ], []);
  
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6b46c1" />
        
        <Planet />
        
        {asteroids.map((asteroid, index) => (
          <Asteroid
            key={index}
            position={asteroid.position}
            size={asteroid.size}
            speed={asteroid.speed}
          />
        ))}
        
        <ParticleField />
        
        {/* Custom round star field replaces default square points */}
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={3 * Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { Mesh } from 'three';
import { Room } from './Room';


import HeroLights from "./HeroLights";
import Particles from "./Particles.tsx";


const AnimatedModel = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.10;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.10;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial 
        color="#4B9CD3"
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  );
};

const Scene = () => {
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  
  return (
     <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />
      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={true} // Disables zoom on tablets
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={100} />
        <group
          // scale={0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
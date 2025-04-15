import React, { type FC, Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree, type RootState } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Group, AnimationClip, Vector2 } from 'three';

interface GLTFResult {
  scene: Group;
  animations: AnimationClip[];
}

const Model: FC = () => {
  const group = useRef<Group>(null);
  const result = useGLTF('/animated.shirt.glb') as unknown as GLTFResult;
  const { scene } = result; // We don't need animations anymore
  const mousePosition = useRef<Vector2>(new Vector2());
  const scrollPosition = useRef(0);
  const { viewport } = useThree();

  // Track mouse position and scroll
  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const updateScrollPosition = () => {
      scrollPosition.current = window.scrollY;
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('scroll', updateScrollPosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  useFrame((state: RootState, delta: number) => {
    if (group.current) {
      // Smooth rotation based on mouse position
      const targetRotationY = -Math.PI / 10 + mousePosition.current.x * 0.5;
      const targetRotationX = mousePosition.current.y * 0.2;
      
      group.current.rotation.y += (targetRotationY - group.current.rotation.y) * 0.1;
      group.current.rotation.x += (targetRotationX - group.current.rotation.x) * 0.1;

      // Update Y position based on scroll
      const scrollOffset = scrollPosition.current * 0.01;
      const targetY = 6 - scrollOffset;
      group.current.position.y += (targetY - group.current.position.y) * 0.1;
    }
  });

  return (
    <primitive 
      ref={group}
      object={scene} 
      scale={1.8} 
      position={[0, 6, -2]} 
    />
  );
};

const ThreeDViewer: FC = () => {
  return (
    <div style={{ 
      height: '100vh', 
      width: '50%', 
      position: 'fixed',
      right: 0,
      top: 0,
      zIndex: 1,
      background: '#000000'
    }}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1.2} 
            color="#f0a500" 
          />
          <directionalLight 
            position={[-10, 10, -5]} 
            intensity={0.8} 
            color="#ffffff" 
          />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
};

// Add custom styles for the canvas container
const style = document.createElement('style');
style.textContent = `
  canvas {
    transition: all 0.3s ease;
  }
  canvas:hover {
    cursor: default;
  }
`;
document.head.appendChild(style);

export default ThreeDViewer; 
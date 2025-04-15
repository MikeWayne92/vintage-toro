declare module '@react-three/fiber' {
  import { ReactNode } from 'react';
  import { Scene, Camera } from 'three';
  
  export interface CanvasProps {
    children?: ReactNode;
    style?: React.CSSProperties;
  }

  export interface RootState {
    scene: Scene;
    camera: Camera;
    clock: THREE.Clock;
    gl: THREE.WebGLRenderer;
    viewport: {
      width: number;
      height: number;
      factor: number;
    };
  }
  
  export const Canvas: React.FC<CanvasProps>;
  export function useFrame(callback: (state: RootState, delta: number) => void): void;
  export function useThree(): RootState;
}

declare module '@react-three/drei' {
  import { Object3D } from 'three';
  
  export function useGLTF(path: string): { scene: Object3D };
  export const OrbitControls: React.FC;
} 
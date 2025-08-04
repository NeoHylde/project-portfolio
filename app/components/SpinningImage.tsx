'use client'
import { Canvas, useFrame } from "@react-three/fiber"
import { CameraControls, Environment, RoundedBox, useTexture } from "@react-three/drei"
import React, { Suspense, useRef, useState } from "react"
import { assets } from "../../public/assets";

type Props = {
  onSpin?: () => void;
};

export function InteractiveImage({ onSpin }: Props) {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Canvas 
                camera={{ position: [0, 0, 0.6], fov: 30 }}
            >
                <Suspense fallback={null} >
                    <Scene onSpin={onSpin}/>
                </Suspense>
            </Canvas>
        </div>
    );
}


function Scene({ onSpin }: { onSpin?: () => void }){
    return(
        <group>
            <CameraControls 
            enabled={true}
            dollySpeed={0}
            truck={false}
            azimuthRotateSpeed={1}
            polarRotateSpeed={0}
            />
            <Environment preset="apartment" />
            <TexturedBox onSpin={onSpin}/>
        </group>
    );
}

function TexturedBox({ onSpin }: { onSpin?: () => void }) {
  const meshRef = useRef(null);
  const texture = useTexture(assets.logo);
  const [lastAngle, setLastAngle] = useState(0)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;

      const currentAngle = meshRef.current.rotation.y;
      const delta = Math.abs(currentAngle - lastAngle);

      if(delta > 0.003) {
        onSpin?.();
      }

      setLastAngle(currentAngle);
    }
  });

  
  texture.flipY = true;

  const image = texture.image;
  if (!image) return null;

  const aspectRatio = image.width / image.height;
  const baseHeight = 1;
  const width = (baseHeight * aspectRatio)/4;
  const height = baseHeight/4;

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[width, height, 0.01]}/>
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}


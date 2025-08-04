'use client'
import { Canvas, useFrame } from "@react-three/fiber"
import { CameraControls, Environment, RoundedBox, useTexture } from "@react-three/drei"
import React, { Suspense, useRef } from "react"
import { assets } from "../../public/assets";

type Props = {};

export function InteractiveImage({}: Props) {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Canvas 
                camera={{ position: [0, 0, 0.6], fov: 30 }}
            >
                <Suspense fallback={null} >
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
}


function Scene(){
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
            <TexturedBox/>
        </group>
    );
}

function TexturedBox() {
  const meshRef = useRef(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  const texture = useTexture(assets.logo);
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


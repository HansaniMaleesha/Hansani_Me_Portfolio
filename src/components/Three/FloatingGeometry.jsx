import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function WireframeIcosahedron() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.1;
      ref.current.rotation.y += delta * 0.15;
    }
  });
  return (
    <mesh ref={ref} position={[-1.5, 0, 0]}>
      <icosahedronGeometry args={[1.8, 1]} />
      <meshBasicMaterial
        wireframe
        color="#00d4ff"
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

function TorusKnot() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.08;
      ref.current.rotation.z += delta * 0.12;
    }
  });
  return (
    <mesh ref={ref} position={[2, -0.5, -1]}>
      <torusKnotGeometry args={[0.8, 0.25, 100, 16]} />
      <meshBasicMaterial
        wireframe
        color="#7b2ff7"
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}

function GlowSphere() {
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh position={[0, 0.5, 0.5]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <MeshDistortMaterial
          color="#7b2ff7"
          transparent
          opacity={0.08}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingGeometry() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <WireframeIcosahedron />
        <TorusKnot />
        <GlowSphere />
      </Canvas>
    </div>
  );
}

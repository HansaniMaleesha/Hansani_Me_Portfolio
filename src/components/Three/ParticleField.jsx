import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 180;
const CONNECTION_DISTANCE = 2.2;

function Particles() {
  const meshRef = useRef();
  const linesRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  // Generate initial positions & velocities
  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const vel = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      vel[i * 3] = (Math.random() - 0.5) * 0.004;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.004;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }
    return { positions: pos, velocities: vel };
  }, []);

  // Color per particle (cyan → violet gradient)
  const colors = useMemo(() => {
    const c = new Float32Array(PARTICLE_COUNT * 3);
    const cyan = new THREE.Color("#00d4ff");
    const violet = new THREE.Color("#7b2ff7");
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const t = Math.random();
      const col = cyan.clone().lerp(violet, t);
      c[i * 3] = col.r;
      c[i * 3 + 1] = col.g;
      c[i * 3 + 2] = col.b;
    }
    return c;
  }, []);

  // Line geometry buffer (pre-allocate max possible lines)
  const maxLines = PARTICLE_COUNT * 6;
  const linePositions = useMemo(() => new Float32Array(maxLines * 6), []);
  const lineColors = useMemo(() => new Float32Array(maxLines * 6), []);

  // Track mouse
  useMemo(() => {
    const handler = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;
    const posArray = meshRef.current.geometry.attributes.position.array;

    // Move particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ix = i * 3, iy = i * 3 + 1, iz = i * 3 + 2;
      posArray[ix] += velocities[ix] + mouse.current.x * 0.001;
      posArray[iy] += velocities[iy] + mouse.current.y * 0.001;
      posArray[iz] += velocities[iz];

      // Wrap edges
      if (posArray[ix] > 8) posArray[ix] = -8;
      if (posArray[ix] < -8) posArray[ix] = 8;
      if (posArray[iy] > 6) posArray[iy] = -6;
      if (posArray[iy] < -6) posArray[iy] = 6;
      if (posArray[iz] > 4) posArray[iz] = -4;
      if (posArray[iz] < -4) posArray[iz] = 4;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;

    // Build connections
    let lineIdx = 0;
    const cyan = new THREE.Color("#00d4ff");
    const violet = new THREE.Color("#7b2ff7");

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = posArray[i * 3] - posArray[j * 3];
        const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
        const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_DISTANCE && lineIdx < maxLines) {
          const alpha = 1 - dist / CONNECTION_DISTANCE;
          const col = cyan.clone().lerp(violet, alpha);

          const li = lineIdx * 6;
          linePositions[li] = posArray[i * 3];
          linePositions[li + 1] = posArray[i * 3 + 1];
          linePositions[li + 2] = posArray[i * 3 + 2];
          linePositions[li + 3] = posArray[j * 3];
          linePositions[li + 4] = posArray[j * 3 + 1];
          linePositions[li + 5] = posArray[j * 3 + 2];

          lineColors[li] = col.r * alpha;
          lineColors[li + 1] = col.g * alpha;
          lineColors[li + 2] = col.b * alpha;
          lineColors[li + 3] = col.r * alpha;
          lineColors[li + 4] = col.g * alpha;
          lineColors[li + 5] = col.b * alpha;

          lineIdx++;
        }
      }
    }

    if (linesRef.current) {
      linesRef.current.geometry.setDrawRange(0, lineIdx * 2);
      linesRef.current.geometry.attributes.position.needsUpdate = true;
      linesRef.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  return (
    <>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={PARTICLE_COUNT}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={PARTICLE_COUNT}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={maxLines * 2}
            array={linePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={maxLines * 2}
            array={lineColors}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.4}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 -z-10 transition-opacity duration-500" style={{ opacity: "var(--particle-opacity)" }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}

"use client";
// react-three-fiber + drei: a floating 3D object. Swap <Icosahedron> for a GLB via drei's useGLTF.
import { Canvas } from "@react-three/fiber";
import { Float, Environment, Lightformer, OrbitControls } from "@react-three/drei";

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]} style={{ position: "absolute", inset: 0 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 4, 5]} intensity={2.5} />
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[0, 0.9, 0]}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshPhysicalMaterial color="#a58bff" metalness={0.35} roughness={0.2} clearcoat={1} clearcoatRoughness={0.1} />
        </mesh>
      </Float>
      {/* Built in code, so nothing is downloaded (a preset would fetch an .hdr file and crash if blocked). */}
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={4} position={[0, 4, -3]} scale={[10, 2, 1]} />
        <Lightformer form="rect" intensity={2} color="#7c5cff" position={[-5, 0, 2]} scale={[2, 6, 1]} />
        <Lightformer form="rect" intensity={2} color="#ff5fa2" position={[5, 0, 2]} scale={[2, 6, 1]} />
      </Environment>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import NexMascot from "./NexMascot";

const NexScene = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 42,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={1.4} />

      <directionalLight
        position={[3, 5, 5]}
        intensity={2}
      />

      <pointLight
        position={[-3, 2, 4]}
        intensity={1.2}
      />

      <pointLight
        position={[2, -1, 3]}
        intensity={0.7}
        color="#b8ff3d"
      />

      {/* STATIC NEX */}
      <NexMascot mood="idle" />

      <Environment preset="city" />
    </Canvas>
  );
};

export default NexScene;
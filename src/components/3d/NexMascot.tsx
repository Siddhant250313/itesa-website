import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

const MODEL_PATH = "/models/nex.glb";

type NexMascotProps = {
  mood?: "idle" | "greeting" | "curious" | "excited" | "thinking";
};

const NexMascot = ({ mood = "idle" }: NexMascotProps) => {
  const { scene } = useGLTF(MODEL_PATH);

  useEffect(() => {
    if (!scene) return;

    // Find model dimensions
    const box = new THREE.Box3().setFromObject(scene);

    const size = new THREE.Vector3();
    box.getSize(size);

    const maxDimension = Math.max(
      size.x,
      size.y,
      size.z
    );

    // Normalize model size
    if (maxDimension > 0) {
      const targetSize = 1.8;
      const scale = targetSize / maxDimension;

      scene.scale.setScalar(scale);
    }

    // Center model
    const centeredBox = new THREE.Box3().setFromObject(scene);

    const center = new THREE.Vector3();
    centeredBox.getCenter(center);

    scene.position.sub(center);
  }, [scene]);

  return (
    <group>
      <primitive
        object={scene}
        scale={0.48}
      />
    </group>
  );
};

useGLTF.preload(MODEL_PATH);

export default NexMascot;
import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

/* =========================================================
   CYBER CORE
   ========================================================= */

const CyberCore = () => {
  const groupRef = useRef<THREE.Group>(null);
  const shellRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    /* =====================================================
       MOUSE INTERACTION
       ===================================================== */

    const targetRotationY = state.pointer.x * 0.18;
    const targetRotationX = state.pointer.y * 0.12;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotationY + time * 0.08,
      0.035
    );

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -targetRotationX,
      0.035
    );

    /* =====================================================
       SMOOTH TRANSLATION
       -----------------------------------------------------
       Slow elliptical movement.
       ===================================================== */

    const movementX = Math.sin(time * 0.35) * 0.35;
    const movementY = Math.cos(time * 0.35) * 0.20;

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      movementX,
      0.025
    );

    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      movementY,
      0.025
    );

    /* =====================================================
       OUTER WIREFRAME ROTATION
       ===================================================== */

    if (shellRef.current) {
      shellRef.current.rotation.z = time * 0.10;
      shellRef.current.rotation.x = time * 0.04;
    }

    /* =====================================================
       INNER WIREFRAME ROTATION
       ===================================================== */

    if (innerRef.current) {
      innerRef.current.rotation.y = -time * 0.16;
      innerRef.current.rotation.z = time * 0.06;
    }
  });

  return (
    <group ref={groupRef}>

      {/* =================================================
          MAIN DARK CORE
          ================================================= */}

      <mesh>
        <icosahedronGeometry args={[1.05, 2]} />

        <meshStandardMaterial
          color="#020802"
          metalness={0.95}
          roughness={0.25}
          transparent
          opacity={0.35}
        />
      </mesh>


      {/* =================================================
          OUTER NEON GREEN WIREFRAME
          ================================================= */}

      <mesh
        ref={shellRef}
        scale={1.05}
      >
        <icosahedronGeometry args={[1.1, 2]} />

        <meshBasicMaterial
          color="#39FF14"
          wireframe
          transparent
          opacity={0.55}
        />
      </mesh>


      {/* =================================================
          INNER NEON GREEN STRUCTURE
          ================================================= */}

      <mesh
        ref={innerRef}
        scale={0.58}
      >
        <icosahedronGeometry args={[1, 1]} />

        <meshBasicMaterial
          color="#39FF14"
          wireframe
          transparent
          opacity={0.45}
        />
      </mesh>


      {/* =================================================
          ENERGY NODES
          ================================================= */}

      <mesh position={[0.75, 0.38, 0.65]}>
        <sphereGeometry args={[0.035, 16, 16]} />

        <meshBasicMaterial
          color="#39FF14"
          transparent
          opacity={0.8}
        />
      </mesh>


      <mesh position={[-0.72, -0.28, 0.7]}>
        <sphereGeometry args={[0.03, 16, 16]} />

        <meshBasicMaterial
          color="#39FF14"
          transparent
          opacity={0.8}
        />
      </mesh>


      <mesh position={[0.25, -0.72, -0.45]}>
        <sphereGeometry args={[0.025, 16, 16]} />

        <meshBasicMaterial
          color="#39FF14"
          transparent
          opacity={0.8}
        />
      </mesh>


      <mesh position={[-0.3, 0.75, -0.5]}>
        <sphereGeometry args={[0.025, 16, 16]} />

        <meshBasicMaterial
          color="#39FF14"
          transparent
          opacity={0.8}
        />
      </mesh>

    </group>
  );
};


/* =========================================================
   THREE.JS SCENE
   ========================================================= */

const Scene = () => {
  return (
    <>
      {/* =================================================
          AMBIENT LIGHT
          ================================================= */}

      <ambientLight intensity={0.25} />


      {/* =================================================
          NEON GREEN LIGHT
          ================================================= */}

      <pointLight
        position={[3, 2, 4]}
        intensity={5}
        color="#39FF14"
      />


      {/* =================================================
          SECOND GREEN LIGHT
          ================================================= */}

      <pointLight
        position={[-3, -2, 2]}
        intensity={2.5}
        color="#39FF14"
      />


      {/* =================================================
          CYBER CORE
          ================================================= */}

      <CyberCore />
    </>
  );
};


/* =========================================================
   MAIN COMPONENT
   ========================================================= */

const ThreeDTest = () => {
  return (
    <div
      className="
        pointer-events-none
        absolute

        /* =================================================
           POSITION
           ================================================= */

        left-1/2
        top-[42%]

        -translate-x-1/2
        -translate-y-1/2

        /* =================================================
           IMPORTANT:
           Sphere stays behind hero content
           ================================================= */

        z-0

        /* =================================================
           SIZE
           ================================================= */

        h-[520px]
        w-[520px]

        /* =================================================
           DESKTOP ONLY
           ================================================= */

        hidden
        lg:block
      "
    >

      {/* =================================================
          3D CANVAS
          ================================================= */}

      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 42,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <Scene />
      </Canvas>


      {/* =================================================
          SOFT NEON GREEN GLOW
          ================================================= */}

      <div
        className="
          pointer-events-none
          absolute

          left-1/2
          top-1/2

          -z-10

          h-[280px]
          w-[280px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#39FF14]/10

          blur-[100px]
        "
      />

    </div>
  );
};

export default ThreeDTest;
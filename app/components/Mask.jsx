import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";


const SCALE = .3
export default function MaskModel(props) {
  const { nodes, materials } = useGLTF("/models/surgical-mask.gltf");
  return (
    <group {...props} dispose={null} scale={[ SCALE, SCALE, SCALE ]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MASK__lambert2_0.geometry}
            material={materials.lambert2}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/surgical-mask.gltf");
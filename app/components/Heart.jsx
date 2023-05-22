import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";



const SCALE = 5
export default function HeartModel(props) {
  const { nodes, materials } = useGLTF("/models/heart.gltf");
  return (
    <group {...props} dispose={null} scale={[ SCALE, SCALE, SCALE]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.heart_teamRed.geometry}
        material={materials["Red.015"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/heart.gltf");

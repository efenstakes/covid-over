
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function GiftModel(props) {
  const { nodes, materials } = useGLTF("/models/gift.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.013"]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCircle.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.017"]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/gift.gltf");

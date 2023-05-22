"use client"
import React, { useRef } from "react";
import { useGLTF, useFrame } from "@react-three/drei";


const SCALE = 2.5
export default function CovidModel(props) {
    const ref = useRef()
  const { nodes, materials } = useGLTF("/models/covid.gltf");

//   useFrame((state, delta)=> {
//     ref.rotation.y += .001
//   })

  return (
    <group ref={ref} {...props} dispose={null} scale={[ SCALE, SCALE, SCALE ]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.core.geometry}
        material={materials["core.001"]}
        position={[0, 1.01, 0]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.core_3.geometry}
          material={materials["core_3.001"]}
          position={[0.3, -0.38, -0.46]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.core_2.geometry}
          material={materials["core_2.001"]}
          position={[0.43, -0.33, -0.36]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.corona.geometry}
          material={materials["corona.001"]}
          position={[0.43, -0.34, -0.36]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/covid.gltf");


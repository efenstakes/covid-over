
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";


const SCALE = 0.3
export default function EarthModel(props) {
  const { nodes, materials } = useGLTF("/models/earth_globe.glb");
  return (
    <group {...props} dispose={null}>
      <group
        // position={[-5.18, -20.68, 0]}
        position-x={-2}
        rotation={[Math.PI / 2, -0.46, Math.PI]}
        scale={[SCALE, SCALE, SCALE]}
      >
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.meshNode_Material_u1_v2_0.geometry}
            material={materials.Material_u1_v2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.meshNode_Material_u2_v1_0.geometry}
            material={materials.Material_u2_v1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.meshNode_Material_u1_v1_0.geometry}
            material={materials.Material_u1_v1}
          />
        </group>
      </group>
    </group>
  );
}


useGLTF.preload("/models/earth_globe.glb");
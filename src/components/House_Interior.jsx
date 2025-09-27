import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

import * as THREE from "three";

export function HouseInterior(props) {
  const { nodes, materials } = useGLTF("models/house.gltf");

  const exteriorWallsTexture = useTexture(
    "textures/Exterior_Walls_LightMap.png"
  );
  exteriorWallsTexture.flipY = false;
  exteriorWallsTexture.encoding = THREE.sRGBEncoding;

  const ExteriorWallTextureMaterial = new THREE.MeshStandardMaterial({
    map: exteriorWallsTexture,
  });

  return (
    <group {...props} dispose={null}>
      <group name="SecondFloor" position={[0.067, 2.904, -4.025]}>
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials.Wall}
        />
        <mesh
          name="Cube003_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials["piso "]}
        />
      </group>
      <mesh
        name="FalseCeiling"
        castShadow
        receiveShadow
        geometry={nodes.FalseCeiling.geometry}
        material={materials.Wall}
        position={[0.337, 2.713, -4.988]}
      />
      <mesh
        name="SecondFloorRailing"
        castShadow
        receiveShadow
        geometry={nodes.SecondFloorRailing.geometry}
        material={materials.metal}
        position={[0.181, 3.786, -3.533]}
      />
      <mesh
        name="CeilingLight"
        castShadow
        receiveShadow
        geometry={nodes.CeilingLight.geometry}
        material={materials.luz}
        position={[0.775, 2.298, -5.441]}
        scale={[0.02, 0.002, 1]}
      />
      <group name="CeilingLight2" position={[-2.3, 2.696, -5]}>
        <mesh
          name="Cube046"
          castShadow
          receiveShadow
          geometry={nodes.Cube046.geometry}
          material={materials.Wall}
        />
        <mesh
          name="Cube046_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube046_1.geometry}
          material={materials.luz}
        />
      </group>
      <mesh
        name="ExteriorWall1"
        castShadow
        receiveShadow
        geometry={nodes.ExteriorWall1.geometry}
        material={ExteriorWallTextureMaterial}
        position={[-0.021, 1.5, -3.969]}
      />
      <mesh
        name="ExteriorWall2"
        castShadow
        receiveShadow
        geometry={nodes.ExteriorWall2.geometry}
        material={ExteriorWallTextureMaterial}
        position={[-0.021, 1.5, -3.969]}
      />
      <mesh
        name="ExteriorWall3"
        castShadow
        receiveShadow
        geometry={nodes.ExteriorWall3.geometry}
        material={ExteriorWallTextureMaterial}
        position={[-5.1, 1.175, -3.507]}
      />
      <group name="ExteriorWall4" position={[-4.767, 0.05, -4.438]}>
        <mesh
          name="Cube077"
          castShadow
          receiveShadow
          geometry={nodes.Cube077.geometry}
          material={ExteriorWallTextureMaterial}
        />
        <mesh
          name="Cube077_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube077_1.geometry}
          material={ExteriorWallTextureMaterial}
        />
      </group>
      <mesh
        name="ExteriorWall5"
        castShadow
        receiveShadow
        geometry={nodes.ExteriorWall5.geometry}
        material={ExteriorWallTextureMaterial}
        position={[-4.606, 0.15, -4.497]}
      />
      <mesh
        name="ExteriorWall6"
        castShadow
        receiveShadow
        geometry={nodes.ExteriorWall6.geometry}
        material={ExteriorWallTextureMaterial}
        position={[3.1, 1.5, -0.014]}
      />
      <mesh
        name="ExteriorWall7"
        castShadow
        receiveShadow
        geometry={nodes.ExteriorWall7.geometry}
        material={ExteriorWallTextureMaterial}
        position={[3.1, 4.075, -0.014]}
      />
      <group
        name="Door"
        position={[3.065, 1.492, 0.351]}
        rotation={[0, 0.044, 0]}
        scale={[1, 0.998, 0.992]}
      >
        <mesh
          name="Cube096"
          castShadow
          receiveShadow
          geometry={nodes.Cube096.geometry}
          material={ExteriorWallTextureMaterial}
        />
        <mesh
          name="Cube096_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube096_1.geometry}
          material={ExteriorWallTextureMaterial}
        />
      </group>
      <group name="Window" position={[-2.999, 2.81, -2.55]}>
        <mesh
          name="Cube025_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube025_1.geometry}
          material={materials.Wall}
        />
        <mesh
          name="Cube025_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube025_2.geometry}
          material={materials.vidro}
        />
      </group>
      <mesh
        name="ExterioirWall8"
        castShadow
        receiveShadow
        geometry={nodes.ExterioirWall8.geometry}
        material={ExteriorWallTextureMaterial}
        position={[-0.248, 4.438, -3.86]}
      />
      <mesh
        name="ExterioirWall9"
        castShadow
        receiveShadow
        geometry={nodes.ExterioirWall9.geometry}
        material={ExteriorWallTextureMaterial}
        position={[0.173, 5.618, -3.779]}
      />
      <mesh
        name="Cube"
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["piso "]}
        position={[-0.186, 0.075, -3.966]}
      />
      <mesh
        name="Cube005"
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["pedra 1"]}
        position={[-1.489, 1.056, -5.886]}
      />
      <mesh
        name="Cube007"
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["pedra 1"]}
        position={[-0.969, 0.738, -4.1]}
      />
      <mesh
        name="Cube008"
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
        position={[0.4, 1.095, -5.825]}
      />
      <group name="Cube010" position={[-1.177, 2.125, -5.788]}>
        <mesh
          name="Cube014_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube014_1.geometry}
          material={nodes.Cube014_1.material}
        />
        <mesh
          name="Cube014_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube014_2.geometry}
          material={materials.luz}
        />
        <mesh
          name="Cube014_3"
          castShadow
          receiveShadow
          geometry={nodes.Cube014_3.geometry}
          material={nodes.Cube014_3.material}
        />
      </group>
      <mesh
        name="Cube018"
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials.madeira}
        position={[-0.451, 0.6, -4.531]}
        rotation={[0, -0.087, 0]}
      />
      <mesh
        name="Cube020"
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials["tecido 1"]}
        position={[-0.451, 0.623, -4.519]}
        rotation={[0, -0.087, 0]}
      />
      <mesh
        name="Cube023"
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials.madeira}
        position={[-1.304, 0.6, -3.521]}
        rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
      />
      <mesh
        name="Cube024"
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={materials["tecido 1"]}
        position={[-1.297, 0.623, -3.53]}
        rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
      />
      <mesh
        name="Cube026"
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={materials.madeira}
        position={[-0.45, 0.6, -3.669]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        name="Cube027"
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={materials["tecido 1"]}
        position={[-0.451, 0.623, -3.681]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        name="Cube028"
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={materials["mdf cinza"]}
        position={[-1.475, 0.587, -5.646]}
      />
      <mesh
        name="Cube012"
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials["metal 1"]}
        position={[0.4, 1.055, -4.223]}
      />
      <mesh
        name="Cube021"
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials.madeira}
        position={[-1.147, 0.6, -4.531]}
      />
      <mesh
        name="Cube022"
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials["tecido 1 var"]}
        position={[-1.146, 0.623, -4.519]}
      />
      <mesh
        name="Sphere002"
        castShadow
        receiveShadow
        geometry={nodes.Sphere002.geometry}
        material={materials.metal}
        position={[-0.769, 0.95, -4.03]}
      />
      <group name="Cube033" position={[-0.652, 1.614, -4.1]}>
        <mesh
          name="Cube007_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials["metal 1"]}
        />
        <mesh
          name="Cube007_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube007_2.geometry}
          material={materials.luz}
        />
      </group>
      <mesh
        name="Cylinder003"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.metal}
        position={[-2.638, 1.139, -6.046]}
      />
      <group name="Cube011" position={[0.235, 1.223, -5.594]}>
        <mesh
          name="Cube042"
          castShadow
          receiveShadow
          geometry={nodes.Cube042.geometry}
          material={materials.metal}
        />
        <mesh
          name="Cube042_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube042_1.geometry}
          material={materials["metal 1"]}
        />
        <mesh
          name="Cube042_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube042_2.geometry}
          material={materials["metal 2"]}
        />
        <mesh
          name="Cube042_3"
          castShadow
          receiveShadow
          geometry={nodes.Cube042_3.geometry}
          material={materials.luz}
        />
      </group>
      <mesh
        name="Cube032"
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials.metal}
        position={[-1.47, 1.332, -5.965]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        name="Cylinder"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.metal}
        position={[0.398, 1.87, -4.225]}
      />
      <mesh
        name="Cube073"
        castShadow
        receiveShadow
        geometry={nodes.Cube073.geometry}
        material={materials["mdf cinza"]}
        position={[0.4, 0.58, -4.1]}
      />
      <group name="Cube074" position={[0.4, 0.797, -4.481]}>
        <mesh
          name="Cube100"
          castShadow
          receiveShadow
          geometry={nodes.Cube100.geometry}
          material={materials.metal}
        />
        <mesh
          name="Cube100_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube100_1.geometry}
          material={materials["metal 1"]}
        />
        <mesh
          name="Cube100_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube100_2.geometry}
          material={materials["metal 2"]}
        />
        <mesh
          name="Cube100_3"
          castShadow
          receiveShadow
          geometry={nodes.Cube100_3.geometry}
          material={materials.luz}
        />
      </group>
      <mesh
        name="Cube006"
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["piso "]}
        position={[2.5, 1.551, -2.982]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <group name="Cube014" position={[2.278, 1.164, -4.259]}>
        <mesh
          name="Cube034_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube034_1.geometry}
          material={nodes.Cube034_1.material}
        />
        <mesh
          name="Cube034_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube034_2.geometry}
          material={materials.luz}
        />
        <mesh
          name="Cube034_3"
          castShadow
          receiveShadow
          geometry={nodes.Cube034_3.geometry}
          material={materials["mdf cinza"]}
        />
      </group>
      <mesh
        name="Cube031"
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials["piso "]}
        position={[2.99, 1.599, -2.932]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        name="Cube047"
        castShadow
        receiveShadow
        geometry={nodes.Cube047.geometry}
        material={materials.metal}
        position={[2.925, 2.466, -2.979]}
      />
      <mesh
        name="Cube025"
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={materials["tecido 1"]}
        position={[-0.886, 0.442, -2.241]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        name="Cube013"
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials.madeira}
        position={[-1.23, 0.2, -2.055]}
      />
      <group
        name="Cube051"
        position={[-2.125, 0.467, -0.36]}
        rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
      >
        <mesh
          name="Cube071"
          castShadow
          receiveShadow
          geometry={nodes.Cube071.geometry}
          material={materials["tecido 1"]}
        />
        <mesh
          name="Cube071_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube071_1.geometry}
          material={materials.madeira}
        />
      </group>
      <mesh
        name="Cube034"
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        material={materials.madeira}
        position={[0.75, 0.209, -0.614]}
      />
      <mesh
        name="Cube035"
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={materials["tecido 1"]}
        position={[0.75, 0.209, -0.614]}
      />
      <mesh
        name="Cube036"
        castShadow
        receiveShadow
        geometry={nodes.Cube036.geometry}
        material={materials["tecido 2"]}
        position={[-0.75, 0.153, -0.664]}
      />
      <group name="Cube037" position={[-0.45, 0.305, -0.714]}>
        <mesh
          name="Cube019"
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials.madeira}
        />
        <mesh
          name="Cube019_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube019_1.geometry}
          material={materials["pedra 1"]}
        />
      </group>
      <group
        name="Cube049"
        position={[-1.364, 0.724, -2.281]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          name="Cube065"
          castShadow
          receiveShadow
          geometry={nodes.Cube065.geometry}
          material={materials["tecido 3"]}
        />
        <mesh
          name="Cube065_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube065_1.geometry}
          material={materials["tecido 2"]}
        />
      </group>
      <mesh
        name="3DGeom~1_Defintion"
        castShadow
        receiveShadow
        geometry={nodes["3DGeom~1_Defintion"].geometry}
        material={materials.porcelana}
        position={[-2.826, 3.056, -0.145]}
        rotation={[0, 1.551, 0]}
        scale={[0.039, 0.113, 0.066]}
      />
      <mesh
        name="3DGeom~1_Defintion001"
        castShadow
        receiveShadow
        geometry={nodes["3DGeom~1_Defintion001"].geometry}
        material={materials.porcelana}
        position={[-2.826, 3.056, -1.874]}
        rotation={[0, 1.551, 0]}
        scale={[0.047, 0.113, 0.066]}
      />
      <mesh
        name="3DGeom~1_Defintion004"
        castShadow
        receiveShadow
        geometry={nodes["3DGeom~1_Defintion004"].geometry}
        material={materials.porcelana}
        position={[-2.819, 1.7, -4.933]}
        rotation={[0, 1.551, 0]}
        scale={[0.03, 0.113, 0.066]}
      />
      <group
        name="3DGeom~36_Defintion"
        position={[-0.229, 1.344, -5.942]}
        rotation={[-0.002, -1.496, -0.045]}
        scale={[0.008, 0.013, 0.008]}
      >
        <mesh
          name="3DGeom~36_Defintion_1"
          castShadow
          receiveShadow
          geometry={nodes["3DGeom~36_Defintion_1"].geometry}
          material={materials["planta 1"]}
        />
        <mesh
          name="3DGeom~36_Defintion_2"
          castShadow
          receiveShadow
          geometry={nodes["3DGeom~36_Defintion_2"].geometry}
          material={materials["planta 2"]}
        />
      </group>
      <group
        name="3DGeom~42_Defintion"
        position={[-0.816, 0.678, -0.438]}
        rotation={[-1.801, 1.046, -0.952]}
        scale={[-0.01, -0.011, -0.012]}
      >
        <mesh
          name="3DGeom~42_Defintion_1"
          castShadow
          receiveShadow
          geometry={nodes["3DGeom~42_Defintion_1"].geometry}
          material={materials["planta 3"]}
        />
        <mesh
          name="3DGeom~42_Defintion_2"
          castShadow
          receiveShadow
          geometry={nodes["3DGeom~42_Defintion_2"].geometry}
          material={materials["planta 2"]}
        />
      </group>
      <group
        name="Cylinder005"
        position={[-0.802, 0.404, -0.437]}
        scale={[1, 1.5, 1]}
      >
        <mesh
          name="Cylinder011"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={materials.agua}
        />
        <mesh
          name="Cylinder011_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_1.geometry}
          material={materials["vidro 2"]}
        />
      </group>
      <group
        name="Cylinder006"
        position={[-0.231, 0.908, -5.939]}
        rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
        scale={[1, 1.5, 1]}
      >
        <mesh
          name="Cylinder013"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013.geometry}
          material={materials.agua}
        />
        <mesh
          name="Cylinder013_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_1.geometry}
          material={materials["vidro 2"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/house.gltf");

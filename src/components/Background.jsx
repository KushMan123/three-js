import { Environment, Sphere } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Gradient, LayerMaterial } from "lamina";
import { useRef, useEffect } from "react";
import { DirectionalLightHelper } from "three";

import * as THREE from "three";

const SunLight = () => {
  const lightRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    // Optional: visualize the light direction
    const helper = new DirectionalLightHelper(lightRef.current, 2);
    scene.add(helper);
    return () => scene.remove(helper);
  }, [scene]);

  return (
    <directionalLight
      ref={lightRef}
      position={[10, 20, 10]}
      intensity={2}
      color={"#fff5e1"}
      castShadow
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
    />
  );
};

export const Background = ({ hdrPath }) => {
  // const start = 0.2;
  // const end = -0.5;

  // const gradientRef = useRef();
  // const gradientEnvRef = useRef();

  // useFrame(() => {
  //   gradientRef.current.colorA = new THREE.Color(
  //     backgroundColors.current.colorA
  //   );
  //   gradientRef.current.colorB = new THREE.Color(
  //     backgroundColors.current.colorB
  //   );
  //   gradientEnvRef.current.colorA = new THREE.Color(
  //     backgroundColors.current.colorA
  //   );
  //   gradientEnvRef.current.colorB = new THREE.Color(
  //     backgroundColors.current.colorB
  //   );
  // });

  return (
    <>
      {/* <Sphere scale={[500, 500, 500]} rotation-y={Math.PI / 2}>
        <LayerMaterial color={"#ffffff"} side={THREE.BackSide}>
          <Gradient ref={gradientRef} axes={"y"} start={start} end={end} />
        </LayerMaterial>
      </Sphere>
      <Environment resolution={256} frames={Infinity}>
        <Sphere
          scale={[100, 100, 100]}
          rotation-y={Math.PI / 2}
          rotation-x={Math.PI}
        >
          <LayerMaterial color={"#ffffff"} side={THREE.BackSide}>
            <Gradient ref={gradientEnvRef} axes={"y"} start={start} end={end} />
          </LayerMaterial>
        </Sphere>
      </Environment> */}
      <ambientLight intensity={1} />
      <SunLight />
      <Environment files={hdrPath} background />
    </>
  );
};

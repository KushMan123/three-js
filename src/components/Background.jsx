import { Environment } from "@react-three/drei";
import { useRef } from "react";

import * as THREE from "three";

const SunLight = () => {
  const lightRef = useRef();
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
  return (
    <>
      <ambientLight intensity={1} />
      <SunLight />
      <Environment files={hdrPath} background />
    </>
  );
};

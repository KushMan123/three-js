import { Environment } from "@react-three/drei";

import * as THREE from "three";

const SunLight = () => {
  return (
    <>
      <directionalLight
        position={[10, 20, 10]}
        intensity={2}
        color={"#fff5e1"}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight
        position={[-20, 0, -10]}
        intensity={1}
        color={"#fff5e1"}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </>
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

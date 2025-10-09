import { OrbitControls } from "@react-three/drei";
import { Spaceship } from "./Spaceship";
import { Background } from "./Background";
import { useRef } from "react";

import * as THREE from "three";

export const Experience = () => {
  const backgroundColors = useRef({
    colorA: "#7ea1da",
    colorB: "#abaadd",
  });

  return (
    <>
      {/* <OrbitControls /> */}
      <group>
        <Background hdrPath="./hdr/HDR_blue_nebulae-1.hdr" />
      </group>
      <Spaceship />
    </>
  );
};

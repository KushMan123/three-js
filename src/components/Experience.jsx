import { OrbitControls, useScroll, Html } from "@react-three/drei";
import { Spaceship } from "./Spaceship";
import { Background } from "./Background";
import { useRef } from "react";

import * as THREE from "three";
import { useScrollStore } from "../store/scrollStore";

export const Experience = () => {
  const backgroundColors = useRef({
    colorA: "#7ea1da",
    colorB: "#abaadd",
  });

  // const scroll = useScroll();

  return (
    <>
      {/* <OrbitControls
        enabled={!isScrolling}
        enablePan={false}
        enableZoom={false}
        makeDefault
      /> */}
      <group>
        <Background hdrPath="./hdr/HDR_blue_nebulae-1.hdr" />
      </group>
      {/* <Html>Scroll Offset: {scroll.offset}</Html> */}
      <Spaceship />
    </>
  );
};

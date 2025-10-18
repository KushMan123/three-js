import { Spaceship } from "./Spaceship";
import { Background } from "./Background";

import * as THREE from "three";

export const Experience = () => {
  return (
    <>
      <group>
        <Background hdrPath="./hdr/HDR_blue_nebulae-1.hdr" />
      </group>
      <Spaceship />
    </>
  );
};

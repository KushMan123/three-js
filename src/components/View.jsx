import { OrbitControls, PerspectiveCamera, useScroll } from "@react-three/drei";
import { Spaceship } from "./Spaceship";
import { Background } from "./Background";
import { useRef } from "react";
import * as THREE from "three";

export const ViewExperience = () => {
  /** -------------------------------------------------------------------------------*/
  const backgroundColors = useRef({
    colorA: "#7ea1da",
    colorB: "#abaadd",
  });

  return (
    <>
      <Background backgroundColors={backgroundColors} />
      <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault />
      <Float floatIntensity={2} speed={2}>
        <Spaceship
          rotation-y={Math.PI / 2}
          scale={[0.2, 0.2, 0.2]}
          position-y={0.1}
        />
      </Float>
    </>
  );
};

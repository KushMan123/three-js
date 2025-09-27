import { Float, Line, OrbitControls } from "@react-three/drei";
import { Spaceship } from "./Spaceship";
import { Background } from "./Background";
import { useMemo, useRef } from "react";

import * as THREE from "three";

export const Experience = () => {
  const LINE_NO_POINTS = 42;

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -10),
        new THREE.Vector3(-2, 0, -20),
        new THREE.Vector3(-3, 0, -30),
        new THREE.Vector3(0, 0, -40),
        new THREE.Vector3(5, 0, -50),
        new THREE.Vector3(7, 0, -60),
        new THREE.Vector3(5, 0, -70),
        new THREE.Vector3(0, 0, -80),
        new THREE.Vector3(0, 0, -90),
        new THREE.Vector3(0, 0, -100),
      ],
      false,
      "catmullrom",
      0.5
    );
  }, []);

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NO_POINTS);
  }, [curve]);

  const backgroundColors = useRef({
    colorA: "#7ea1da",
    colorB: "#abaadd",
  });

  return (
    <>
      <OrbitControls />
      <Background backgroundColors={backgroundColors} />
      <Float floatIntensity={2} speed={2}>
        <Spaceship
          rotation-y={Math.PI / 2}
          scale={[0.2, 0.2, 0.2]}
          position-y={0.1}
        />
      </Float>

      <Line
        points={linePoints}
        color={"white"}
        opacity={0.7}
        transparent
        lineWidth={16}
      />
    </>
  );
};

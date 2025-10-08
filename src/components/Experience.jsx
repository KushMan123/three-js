import {
  Float,
  Line,
  OrbitControls,
  PerspectiveCamera,
  useScroll,
} from "@react-three/drei";
import { Spaceship } from "./Spaceship";
import { Background } from "./Background";
import { useMemo, useRef } from "react";

import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export const Experience = () => {
  const LINE_NO_POINTS = 2000;

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

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.2);
    shape.lineTo(0, 0.2);

    return shape;
  }, [curve]);

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NO_POINTS);
  }, [curve]);

  /** --------------------------Scroll Animations-------------------------------------*/
  const cameraGroup = useRef();
  const scroll = useScroll();

  useFrame((_state, delta) => {
    const curPointIndex = Math.min(
      Math.round(scroll.offset * linePoints.length),
      linePoints.length - 1
    );
    const curPoint = linePoints[curPointIndex];
    const pointAhead =
      linePoints[(Math.min(curPointIndex + 1), linePoints.length - 1)];

    cameraGroup.current.position.lerp(curPoint, delta * 24);
  });

  /** -------------------------------------------------------------------------------*/
  const backgroundColors = useRef({
    colorA: "#7ea1da",
    colorB: "#abaadd",
  });

  return (
    <>
      {/* <OrbitControls enableZoom={false} /> */}
      <group ref={cameraGroup}>
        <Background backgroundColors={backgroundColors} />
        <PerspectiveCamera position={[0, 0, 50]} fov={30} makeDefault />
      </group>
      <Float floatIntensity={2} speed={2}>
        <Spaceship
          rotation-y={Math.PI / 2}
          scale={[0.2, 0.2, 0.2]}
          position-y={0.1}
        />
      </Float>
      /*LINE*/
      <group position-y={-10}>
        {/* <Line
          points={linePoints}
          color={"white"}
          opacity={0.7}
          transparent
          lineWidth={16}
        /> */}
        <mesh>
          <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_NO_POINTS,
                bevelEnabled: false,
                extrudePath: curve,
              },
            ]}
          />
          <meshStandardMaterial color={"white"} />
        </mesh>
      </group>
    </>
  );
};

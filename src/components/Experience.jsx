import {
  Float,
  Line,
  OrbitControls,
  PerspectiveCamera,
  useScroll,
} from "@react-three/drei";
import { Spaceship } from "./Spaceship";
import { Background } from "./Background";
import { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { button, folder, useControls } from "leva";
import { useGLTF } from "@react-three/drei";

export const Experience = () => {
  const LINE_NO_POINTS = 2000;
  const [curvePoints, setCurvePoints] = useState([
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
  ]);

  // State for point editor
  const [selectedPointIndex, setSelectedPointIndex] = useState(0);
  const [pointX, setPointX] = useState(0);
  const [pointY, setPointY] = useState(0);
  const [pointZ, setPointZ] = useState(0);

  // Update point editor when selected point changes or curve points change
  useEffect(() => {
    if (curvePoints[selectedPointIndex]) {
      const point = curvePoints[selectedPointIndex];
      setPointX(point.x);
      setPointY(point.y);
      setPointZ(point.z);
    }
  }, [selectedPointIndex, curvePoints]);

  // Debug controls - separated to avoid recreation on every render
  const debugControls = useControls({
    Debug: folder({
      debugMode: { value: false, label: "Enable Debug Mode" },
      showCurve: { value: true, label: "Show Curve" },
      showPoints: { value: true, label: "Show Control Points" },
      showSpaceship: { value: true, label: "Show Spaceship" },
    }),
    "Curve Settings": folder({
      tension: {
        value: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
        label: "Curve Tension",
      },
      curveType: {
        value: "catmullrom",
        options: ["catmullrom", "centripetal", "chordal"],
        label: "Curve Type",
      },
    }),
    "Camera Settings": folder({
      fov: { value: 30, min: 10, max: 120, step: 1, label: "FOV" },
      cameraSpeed: {
        value: 24,
        min: 1,
        max: 100,
        step: 1,
        label: "Camera Speed",
      },
      lookAhead: {
        value: 1,
        min: 0,
        max: 10,
        step: 1,
        label: "Look Ahead Distance",
      },
    }),
  });

  // Point editor controls - using a separate hook to manage point state
  const [_, setPointControls] = useControls(() => ({
    "Point Editor": folder({
      selectedPoint: {
        value: selectedPointIndex,
        min: 0,
        max: Math.max(0, curvePoints.length - 1),
        step: 1,
        label: "Selected Point",
        onChange: (value) => {
          setSelectedPointIndex(value);
        },
      },
      pointX: {
        value: pointX,
        min: -50,
        max: 50,
        step: 0.1,
        label: "Point X",
        onChange: (value) => {
          setPointX(value);
          updatePointPosition(selectedPointIndex, value, pointY, pointZ);
        },
      },
      pointY: {
        value: pointY,
        min: -50,
        max: 50,
        step: 0.1,
        label: "Point Y",
        onChange: (value) => {
          setPointY(value);
          updatePointPosition(selectedPointIndex, pointX, value, pointZ);
        },
      },
      pointZ: {
        value: pointZ,
        min: -100,
        max: 100,
        step: 0.1,
        label: "Point Z",
        onChange: (value) => {
          setPointZ(value);
          updatePointPosition(selectedPointIndex, pointX, pointY, value);
        },
      },
      addPoint: button(() => {
        addNewPoint();
      }),
      removeLastPoint: button(() => {
        removePoint();
      }),
      exportPoints: button(() => {
        exportPointsData();
      }),
    }),
  }));

  // Function to update point position
  const updatePointPosition = (index, x, y, z) => {
    const newPoints = [...curvePoints];
    newPoints[index] = new THREE.Vector3(x, y, z);
    setCurvePoints(newPoints);
  };

  // Function to add a new point
  const addNewPoint = () => {
    const lastPoint = curvePoints[curvePoints.length - 1];
    const newPoint = new THREE.Vector3(
      lastPoint.x,
      lastPoint.y,
      lastPoint.z - 10
    );
    const newPoints = [...curvePoints, newPoint];
    setCurvePoints(newPoints);
    setSelectedPointIndex(newPoints.length - 1);
  };

  // Function to remove the last point
  const removePoint = () => {
    if (curvePoints.length > 2) {
      const newPoints = curvePoints.slice(0, -1);
      setCurvePoints(newPoints);
      setSelectedPointIndex(Math.min(selectedPointIndex, newPoints.length - 1));
    }
  };

  // Function to export points data
  const exportPointsData = () => {
    const pointsData = curvePoints.map((p) => ({
      x: parseFloat(p.x.toFixed(2)),
      y: parseFloat(p.y.toFixed(2)),
      z: parseFloat(p.z.toFixed(2)),
    }));
    console.log("Curve Points:", JSON.stringify(pointsData, null, 2));
    console.log("\nCopy this code:");
    const codeString = `[\n${pointsData
      .map((p) => `  new THREE.Vector3(${p.x}, ${p.y}, ${p.z})`)
      .join(",\n")}\n]`;
    console.log(codeString);

    // Copy to clipboard
    navigator.clipboard.writeText(codeString).then(() => {
      console.log("Points copied to clipboard!");
    });
  };

  // Update point controls when curve points change
  useEffect(() => {
    setPointControls({
      selectedPoint: {
        value: selectedPointIndex,
        min: 0,
        max: Math.max(0, curvePoints.length - 1),
      },
    });
  }, [curvePoints.length, selectedPointIndex, setPointControls]);

  /** --------------------------Curve-------------------------------------*/
  const { nodes, materials, scene } = useGLTF(
    "./models/spaceship/CameraCurve2.glb"
  );
  const curve = useMemo(() => {
    console.log(nodes.Curve.geometry.attributes.position.array);
    // Extract curve points from the GLTF geometry
    const curveGeometry = nodes.Curve.geometry;
    const positions = curveGeometry.attributes.position.array;
    const points = [];

    for (let i = 0; i < positions.length; i += 3) {
      points.push(
        new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2])
      );
    }

    return new THREE.CatmullRomCurve3(points);
  }, [nodes]);
  // const curve = useMemo(() => {
  //   return new THREE.CatmullRomCurve3(
  //     curvePoints,
  //     false,
  //     debugControls.curveType,
  //     debugControls.tension
  //   );
  // }, [curvePoints, debugControls.curveType, debugControls.tension]);

  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, -0.2);
    s.lineTo(0, 0.2);
    return s;
  }, []);

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NO_POINTS);
  }, [curve]);

  /** --------------------------Scroll Animations-------------------------------------*/
  const cameraGroup = useRef();
  const scroll = useScroll();

  useFrame((_state, delta) => {
    if (!debugControls.debugMode && cameraGroup.current) {
      const curPointIndex = Math.min(
        Math.round(scroll.offset * linePoints.length),
        linePoints.length - 1
      );
      const curPoint = linePoints[curPointIndex];
      const pointAheadIndex = Math.min(
        curPointIndex + debugControls.lookAhead,
        linePoints.length - 1
      );
      const pointAhead = linePoints[pointAheadIndex];

      if (curPoint) {
        cameraGroup.current.position.lerp(
          curPoint,
          delta * debugControls.cameraSpeed
        );

        // Look at the point ahead for better camera orientation
        if (pointAhead) {
          cameraGroup.current.lookAt(pointAhead);
        }
      }
    }
  });

  /** -------------------------------------------------------------------------------*/
  const backgroundColors = useRef({
    colorA: "#7ea1da",
    colorB: "#abaadd",
  });

  return (
    <>
      {debugControls.debugMode && <OrbitControls enableZoom={true} />}
      <group ref={cameraGroup}>
        <Background backgroundColors={backgroundColors} />
        <PerspectiveCamera
          position={[0, 0, 5]}
          fov={debugControls.fov}
          makeDefault={!debugControls.debugMode}
        />
      </group>
      {debugControls.showSpaceship && (
        <Float floatIntensity={2} speed={2}>
          <Spaceship
            rotation-y={Math.PI / 2}
            scale={[0.2, 0.2, 0.2]}
            position-y={0.1}
          />
        </Float>
      )}

      <group position-y={-2}>
        {debugControls.showCurve && (
          <>
            <Line
              points={linePoints}
              color="white"
              opacity={0.7}
              transparent
              lineWidth={2}
            />
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
              <meshStandardMaterial color="white" opacity={0.3} transparent />
            </mesh>
          </>
        )}

        {debugControls.showPoints &&
          curvePoints.map((point, index) => (
            <mesh key={index} position={[point.x, point.y, point.z]}>
              <sphereGeometry args={[0.3, 16, 16]} />
              <meshStandardMaterial
                color={index === selectedPointIndex ? "#ff0000" : "#00ff00"}
                emissive={index === selectedPointIndex ? "#ff0000" : "#00ff00"}
                emissiveIntensity={0.5}
              />
            </mesh>
          ))}
      </group>
    </>
  );
};

import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Loader, ScrollControls } from "@react-three/drei";
import { AnimatedCamera } from "./components/AnimatedCamera";
import { TextSections } from "./components/TextSection";
import { ScrollLogger } from "./logger/ScrollLooger";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Canvas>
        <color attach="background" args={["#000000"]} />
        <ScrollControls pages={60} damping={0.1}>
          <Suspense fallback={null}>
            <Experience />
            <AnimatedCamera />
          </Suspense>
        </ScrollControls>
      </Canvas>
      <TextSections />
      <Loader />
      {/* <ScrollLogger /> */}
    </>
  );
}

export default App;

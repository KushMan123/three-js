import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls } from "@react-three/drei";
import { AnimatedCamera } from "./components/AnimatedCamera";
import { TextSections } from "./components/TextSection";
import { ScrollLogger } from "./logger/ScrollLooger";

function App() {
  return (
    <>
      <Canvas>
        <color attach="background" args={["#000000"]} />
        <ScrollControls pages={60} damping={0.1}>
          <Experience />
          <AnimatedCamera />
        </ScrollControls>
      </Canvas>
      <TextSections />
      {/* <ScrollLogger /> */}
    </>
  );
}

export default App;

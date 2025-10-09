import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls } from "@react-three/drei";
import { AnimatedCamera } from "./components/AnimatedCamera";
import { EnhancedTextOverlay } from "./components/EnhancedTextOverlay";

function App() {
  return (
    <>
      <Canvas>
        <color attach="background" args={["#000000"]} />
        <ScrollControls pages={60} damping={0.1}>
          <EnhancedTextOverlay />
          <Experience />
          <AnimatedCamera />
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;

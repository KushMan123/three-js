import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Loader, ScrollControls } from "@react-three/drei";
import { AnimatedCamera } from "./components/AnimatedCamera";
import { TextSections } from "./components/TextSection";
import { ScrollLogger } from "./logger/ScrollLooger";
import { Suspense } from "react";
import {
  EffectComposer,
  Selection,
  Outline,
} from "@react-three/postprocessing";
import { DescriptionCard } from "./components/DescriptionCard";
import { TVScreen } from "./components/TVScreen";

function App() {
  return (
    <>
      <Canvas camera={{fov: 50,near: 0.1,far: 100000}}>
        <color attach="background" args={["#000000"]} />
        <ScrollControls pages={60} damping={0.1}>
          <Suspense fallback={null}>
            <Selection>
              <EffectComposer multisampling={8} autoClear={false}>
                <Outline blur visibleEdgeColor="white" edgeStrength={100} />
              </EffectComposer>
              <Experience />
              <AnimatedCamera />
            </Selection>
          </Suspense>
        </ScrollControls>
      </Canvas>
      <DescriptionCard />
      <TextSections />
      <TVScreen />
      <Loader />
      <ScrollLogger />
    </>
  );
}

export default App;

import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";
import { useScrollStore } from "../store/scrollStore";

export const AnimatedCamera = () => {
  const { scene, animations, cameras } = useGLTF(
    "./models/spaceship/CameraAnimation.glb"
  );
  const { actions } = useAnimations(animations, scene);
  const scroll = useScroll();

  const { camera } = useThree();

  const setDreiScroll = useScrollStore((s) => s.setDreiScroll);

  const action = actions["CameraAction.018"];

  useEffect(() => {
    if (action) {
      action.play();
      action.paused = true;
    }
  }, [action]);

  useFrame((_, delta) => {
    setDreiScroll(scroll.offset);

    // if (scroll.delta > 0 || scroll.delta < 0) {
    //   if (!isScrolling) {
    //     setIsScrolling(true);
    //   }
    // } else {
    //   if (isScrolling) {
    //     setIsScrolling(false);
    //   }
    // }

    if (!action) return;
    const duration = action.getClip().duration;
    const targetTime = duration * scroll.offset;
    action.time = THREE.MathUtils.damp(action.time, targetTime, 4, delta);

    if (cameras.length > 0) {
      const camGLTF = cameras[0];
      camera.position.lerp(camGLTF.position, 0.1);
      camera.quaternion.slerp(camGLTF.quaternion, 0.1);
    }
  });

  return null;
};

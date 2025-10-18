import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
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
  const [isScrolling, setIsScrolling] = useState(false);

  // Orbital drag state
  const isDragging = useRef(false);
  const startDrag = useRef(new THREE.Vector2());
  const spherical = useRef(new THREE.Spherical());
  const target = useRef(new THREE.Vector3()); // orbit target

  // Initialize camera to start position of animation
  useEffect(() => {
    if (cameras.length > 0) {
      const camGLTF = cameras[0];
      camera.position.copy(camGLTF.position);
      camera.quaternion.copy(camGLTF.quaternion);
    }

    if (action) {
      action.play();
      action.paused = true;
    }
  }, [action, cameras, camera]);

  // Pointer events
  useEffect(() => {
    const onPointerDown = (e) => {
      isDragging.current = true;
      startDrag.current.set(e.clientX, e.clientY);

      // Target is current camera position (you can adjust distance if needed)
      target.current
        .copy(camera.position)
        .add(camera.getWorldDirection(new THREE.Vector3()).multiplyScalar(5));

      const offset = camera.position.clone().sub(target.current);
      spherical.current.setFromVector3(offset);
    };

    const onPointerUp = () => {
      isDragging.current = false;
    };

    const onPointerMove = (e) => {
      if (!isDragging.current) return;

      const deltaX = (e.clientX - startDrag.current.x) * 0.005;
      const deltaY = (e.clientY - startDrag.current.y) * 0.005;

      spherical.current.theta -= deltaX;
      spherical.current.phi = THREE.MathUtils.clamp(
        spherical.current.phi - deltaY,
        0.01,
        Math.PI - 0.01
      );

      startDrag.current.set(e.clientX, e.clientY);
    };

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointermove", onPointerMove);

    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [camera]);

  useFrame((_, delta) => {
    setDreiScroll(scroll.offset);

    if (scroll.delta > 0 || scroll.delta < 0) {
      if (!isScrolling) setIsScrolling(true);
    } else {
      if (isScrolling) setIsScrolling(false);
    }

    if (!action || cameras.length === 0) return;

    const camGLTF = cameras[0];
    const duration = action.getClip().duration;
    const targetTime = duration * scroll.offset;
    action.time = THREE.MathUtils.damp(action.time, targetTime, 4, delta);

    if (isScrolling) {
      // Scroll-driven animation
      camera.position.lerp(camGLTF.position, 0.1);
      camera.quaternion.slerp(camGLTF.quaternion, 0.1);
    } else if (isDragging.current) {
      // Orbital drag
      const newPos = new THREE.Vector3()
        .setFromSpherical(spherical.current)
        .add(target.current);
      camera.position.copy(newPos);
      camera.lookAt(target.current);
    }
  });

  return null;
};

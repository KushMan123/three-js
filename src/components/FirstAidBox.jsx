import { useGLTF } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
import { useRef, useState } from "react";
import { useProductStore } from "../store/useProductsStore";

export function FirstAidBox(props) {
  const { nodes, materials } = useGLTF("./models/spaceship/FirstAidBox.glb");
  const ref = useRef();
  const [hovered, setHover] = useState(null);
  const setActiveProduct = useProductStore((s) => s.setActiveProduct);
  const setProductHovered = useProductStore((s) => s.setProductHovered);

  const productInfo = {
    title: "Medical Trolley",
    description:
      "The Medical Trolley is a sturdy, wheeled cart designed for nurses to safely store and administer medications to hospitalized patients. With multiple compartments and secure drawers, it keeps medicines organized and easily accessible, ensuring efficient and safe patient care. Its smooth-rolling wheels allow effortless mobility throughout the hospital or ward.",
    priceWas: "$299",
    priceNow: "$199",
    category: "Medical Equipments",
    image: "./images/first-aid-kit.jpg",
  };

  return (
    <Select enabled={hovered}>
      <group
        {...props}
        ref={ref}
        onPointerOver={() => {
          setHover(true);
          setActiveProduct(productInfo);
          setProductHovered(true);
        }}
        onPointerOut={() => {
          setHover(false);
          setProductHovered(false);
        }}
      >
        <mesh
          geometry={nodes.FirstAidBox.geometry}
          material={materials.FirstAidBox_Mat}
          position={[0, -0.336, 0]}
        />
      </group>
    </Select>
  );
}

useGLTF.preload("./models/spaceship/FirstAidBox.glb");

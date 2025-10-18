import { Select } from "@react-three/postprocessing";
import React, { useRef, useState } from "react";
import { DescriptionCard } from "./DescriptionCard";

export const SelectableModel = ({ children }) => {
  const ref = useRef();
  const [hovered, setHover] = useState(null);

  const childWithProps = React.cloneElement(children, {
    ref,
    onPointerOver: (e) => {
      e.stopPropagation();
      setHover(true);
    },
    onPointerOut: (e) => {
      e.stopPropagation();
      setHover(false);
    },
  });

  return (
    <>
      <Select enabled={hovered}>{childWithProps}</Select>
    </>
  );
};

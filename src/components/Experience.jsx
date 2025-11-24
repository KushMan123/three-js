import { Spaceship } from "./Spaceship";
import { Background } from "./Background";

import * as THREE from "three";
import { SpaceShipMedicalEquipmet } from "./Spaceship_withEquipment";
import { FirstAidBox } from "./FirstAidBox";
import { SelectableModel } from "./SelectableModel";
import { MedicalBox } from "./MedicalBox";
import { MedicalMonitor } from "./Monitor";
import { Stethoscope } from "./Stethoscope";
import { SpaceshipDoor1 } from "./SpaceshipDoor1";
import { CommandCenter } from "./Cockpit";
import { Earth } from "./Earth";
import { EarthAtmosphere } from "./EarthAtmosphere";
import { ExtraSpaceShipTemp } from "./ExtraSpaceShipTemp";
import { useRef } from "react";

export const Experience = () => {
  const effectRef = useRef();

  return (
    <>
      <group>
        <Background hdrPath="./hdr/HDR_blue_nebulae-1.hdr" />
      </group>
      <Spaceship />
      <CommandCenter />
      <SpaceshipDoor1 />
      <FirstAidBox />
      <MedicalBox />
      <MedicalMonitor />
      <Stethoscope />
      <ExtraSpaceShipTemp />
      <Earth position={[-2749.84, 0,0]} scale={1} />
      <EarthAtmosphere position={[-2002.78, -0.000001, 0]} scale={1.01} />
    </>
  );
};

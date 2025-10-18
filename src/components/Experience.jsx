import { Spaceship } from "./Spaceship";
import { Background } from "./Background";

import * as THREE from "three";
import { SpaceShipMedicalEquipmet } from "./Spaceship_withEquipment";
import { FirstAidBox } from "./FirstAidBox";
import { SelectableModel } from "./SelectableModel";
import { MedicalBox } from "./MedicalBox";
import { MedicalMonitor } from "./Monitor";
import { Stethoscope } from "./Stethoscope";

export const Experience = () => {
  return (
    <>
      <group>
        <Background hdrPath="./hdr/HDR_blue_nebulae-1.hdr" />
      </group>
      <Spaceship />
      <FirstAidBox />
      <MedicalBox />
      <MedicalMonitor />
      <Stethoscope />
    </>
  );
};

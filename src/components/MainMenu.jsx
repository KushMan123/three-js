import { useEffect, useState } from "react";
import { useScrollStore } from "../store/scrollStore";
import { MainmenuBlob } from "./MainmenuBlob";
import { MainmenuText } from "./MainmenuText";

// Define multiple scroll ranges where TV screen should be visible
const TV_SCROLL_RANGES = [
  { start: 0.3, end: 0.362 }, // Cockpit section
  // Add more ranges as needed
];

export const Mainmenu = () => {
  const dreiScroll = useScrollStore((s) => s.dreiScroll);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const shouldBEVisible = TV_SCROLL_RANGES.some(
      (range) => dreiScroll >= range.start && dreiScroll < range.end
    );

    setIsVisible(shouldBEVisible);
  }, [dreiScroll]);

  return (
    <div className={`mainmenu ${isVisible ? "visible" : " "}`}>
      <MainmenuText text="spaceship" />
      <MainmenuBlob />
    </div>
  );
};

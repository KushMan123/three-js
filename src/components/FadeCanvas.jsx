import { useEffect, useState } from "react";
import { useScrollStore } from "../store/scrollStore";

// Define multiple scroll ranges where TV screen should be visible
const FADE_IN_RANGES = [
  { start: 0.0, end: 0.002 },
  { start: 0.269, end: 0.362 }, // Earth section
];

export const FadeCanvas = () => {
  const dreiScroll = useScrollStore((s) => s.dreiScroll);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const shouldBEVisible = FADE_IN_RANGES.some(
      (range) => dreiScroll >= range.start && dreiScroll < range.end
    );

    setIsVisible(shouldBEVisible);
  }, [dreiScroll]);

  return <div className={`fade-canvas ${isVisible ? "fade-in" : " "}`}></div>;
};

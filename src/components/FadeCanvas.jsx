import { useEffect, useState } from "react";
import { useScrollStore } from "../store/scrollStore";

// Define multiple scroll ranges where TV screen should be visible
const FADE_IN_RANGES = [
  { start: 0.02468422376936817, end: 0.03468422376936817, opacity: 0.9 },
  { start: 0.04221778874504036, end: 0.05, opacity: 0.9 }, // Earth section - fully opaque
];

export const FadeCanvas = () => {
  const dreiScroll = useScrollStore((s) => s.dreiScroll);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const activeRange = FADE_IN_RANGES.find(
      (range) => dreiScroll >= range.start && dreiScroll < range.end
    );
    
    setOpacity(activeRange ? activeRange.opacity : 0);
  }, [dreiScroll]);

  return (
    <div 
      className="fade-canvas" 
      style={{ opacity, transition: 'opacity 0.5s ease-in' }}
    />
  );
};

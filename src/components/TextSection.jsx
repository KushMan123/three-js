import { useEffect, useState } from "react";
import { useScrollStore } from "../store/scrollStore";
import { motion, AnimatePresence } from "framer-motion";

// Define your sections with scroll ranges
const sections = [
  {
    title: "Spaceship",
    text: "The spaceship emerges from the nebula.",
    start: 0.001,
    end: 0.171,
  },
  {
    title: "Resting Room",
    text: "Ancient ruins drift through cosmic light.",
    start: 0.185,
    end: 0.2306,
  },
  {
    title: "Cockpit",
    text: "The stars align as destiny unfolds.",
    start: 0.294,
    end: 0.61,
  },
  {
    title: "Device Room",
    text: "Mysteries of the device room unfold.",
    start: 0.697,
    end: 0.85,
  },
  {
    title: "Equipment Room",
    text: "All equipment is ready for action.",
    start: 0.9,
    end: 1,
  },
];

export const TextSections = () => {
  const dreiScroll = useScrollStore((s) => s.dreiScroll);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    // Find the section that matches the current scroll
    const sectionIndex = sections.findIndex(
      (s) => dreiScroll >= s.start && dreiScroll < s.end
    );

    // If no section matches, set activeIndex to -1
    setActiveIndex(sectionIndex !== -1 ? sectionIndex : -1);
  }, [dreiScroll]);

  // Get the active section (or null if none)
  const activeSection = activeIndex !== -1 ? sections[activeIndex] : null;

  return (
    <div className="story-container">
      <AnimatePresence mode="wait">
        {activeSection && (
          <motion.div
            key={activeSection.title}
            className="story-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{activeSection.title}</h1>
            {/* <p>{activeSection.text}</p> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

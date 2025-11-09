import { useEffect, useState } from "react";
import { useScrollStore } from "../store/scrollStore";
import { motion, AnimatePresence } from "framer-motion";

// Define your sections with scroll ranges
const sections = [
  {
    title: "Year: 2137",
    text: "Thirteen years ago, the interstellar medical vessel STRS-234 departed from Earth's orbit. Its mission: to travel across the void to Kepler-67, humanity's first off-world colony — a shining testament to human ambition. But with ambition came unforeseen cost.",
    start: 0.001,
    end: 0.08,
  },
  {
    title: "The Biological Shift",
    text: "As the settlers of Kepler-67 thrived in their artificial biospheres, subtle biological shifts began to emerge — weakened immune systems, mineral imbalances, emotional desynchronization. Living away from Earth's biosphere had begun to change the very chemistry of human life.",
    start: 0.082,
    end: 0.14,
  },
  {
    title: "Earth's Response",
    text: "When the first distress signals arrived, Earth responded not with weapons or warships… but with healing.",
    start: 0.142,
    end: 0.18,
  },
  {
    title: "The Vessel of Preventive Hope",
    text: "Built by Oxygen Healthcare Systems, STRS-234 wasn't an ordinary spacecraft. It was a mobile ecosystem of wellness — a living embodiment of Earth's evolution from reactive medicine to preventive care.",
    start: 0.182,
    end: 0.23,
  },
  {
    title: "Resting Room",
    text: "A sanctuary of healing and restoration, where the crew finds solace amidst the stars.",
    start: 0.232,
    end: 0.28,
  },
  {
    title: "Cockpit",
    text: "The command center where hope navigates through the void, guiding the vessel toward its mission of healing.",
    start: 0.282,
    end: 0.45,
  },
  {
    title: "Device Room",
    text: "Advanced medical technology pulses with life, monitoring and preserving the health of those aboard.",
    start: 0.452,
    end: 0.65, 
  },
  {
    title: "Equipment Room",
    text: "Every instrument, every tool, every piece of equipment stands ready — a testament to humanity's commitment to healing across the stars.",
    start: 0.652,
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
            {<p>{activeSection.text}</p> }
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

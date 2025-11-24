import { useEffect, useState } from "react";
import { useScrollStore } from "../store/scrollStore";
import { motion, AnimatePresence } from "framer-motion";

// Define your sections with scroll ranges
const sections = [
  
  {
    title: "Earth 2137",
    text: "The humans evoled too fast for their own good",
    start: 0.02468422376936817,
    end: 0.035,
    position: "center",
  },
  {
    title: "",
    text: "The Earth could no longer support the human population, humans had to find a new home.",
    start: 0.04221778874504036,
    end: 0.05,
    position: "center",
  },
  // {
  //   title: "Earth's Response",
  //   text: "When the first distress signals arrived, Earth responded not with weapons or warships… but with healing.",
  //   start: 0.05,
  //   end: 0.1,
  //   position: "center",
  // },
  // {
  //   title: "The Vessel of Preventive Hope",
  //   text: "Built by Oxygen Healthcare Systems, STRS-234 wasn't an ordinary spacecraft. It was a mobile ecosystem of wellness — a living embodiment of Earth's evolution from reactive medicine to preventive care.",
  //   start: 0.1,
  //   end: 0.185,
  //   position: "center",
  // },
  // {
  //   title: "Resting Room",
  //   text: "A sanctuary of healing and restoration, where the crew finds solace amidst the stars.",
  //   start: 0.392,
  //   end: 0.424,
  //   position: "bottom",
  // },
  // {
  //   title: "Cockpit",
  //   text: "The command center where hope navigates through the void, guiding the vessel toward its mission of healing.",
  //   start: 0.476,
  //   end: 0.557,
  //   position: "bottom",
  // },
  // {
  //   title: "Device Room",
  //   text: "Advanced medical technology pulses with life, monitoring and preserving the health of those aboard.",
  //   start: 0.742,
  //   end: 0.878,
  //   position: "bottom",
  // },
  // {
  //   title: "Equipment Room",
  //   text: "Every instrument, every tool, every piece of equipment stands ready — a testament to humanity's commitment to healing across the stars.",
  //   start: 0.92,
  //   end: 1,
  //   position: "bottom",
  // },
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
            className={`story-section ${activeSection.position}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{activeSection.title}</h1>
            {<p>{activeSection.text}</p>}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

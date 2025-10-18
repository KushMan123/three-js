import { useEffect, useRef, useState } from "react";
import { useScrollStore } from "../store/scrollStore";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    title: "Awakening",
    text: "The spaceship emerges from the nebula.",
    start: 0.0,
    end: 0.2,
  },
  {
    title: "Discovery",
    text: "Ancient ruins drift through cosmic light.",
    start: 0.2,
    end: 0.4,
  },
  {
    title: "Ascension",
    text: "The stars align as destiny unfolds.",
    start: 0.4,
    end: 0.6,
  },
];

export const TextSections = () => {
  const container = useRef(null);
  const dreiScroll = useScrollStore((s) => s.dreiScroll);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const sectionIndex = sections.findIndex(
      (s) => dreiScroll >= s.start && dreiScroll < s.end
    );
    if (sectionIndex != -1) setActiveIndex(sectionIndex);
  }, [dreiScroll]);

  return (
    <div className="story-container" ref={container}>
      <AnimatePresence mode="wait">
        {sections.map(
          (section, index) =>
            index == activeIndex && (
              <motion.div
                key={section.title}
                className="story-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 1 }}
              >
                <h1>{section.title}</h1>
                <p>{section.text}</p>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
    // <div className="story-container" ref={container}>
    //   <section className="story-section">
    //     <h1>Awakening</h1>
    //     <p>The spaceship emerges from the nebula.</p>
    //   </section>

    //   <section className="story-section">
    //     <h1>Discovery</h1>
    //     <p>Ancient ruins drift through cosmic light.</p>
    //   </section>

    //   <section className="story-section">
    //     <h1>Ascension</h1>
    //     <p>The stars align as destiny unfolds.</p>
    //   </section>
    // </div>
  );
};

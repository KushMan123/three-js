// EnhancedTextOverlay.jsx
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import "../styles/TextOverlay.css";

const TextSection = ({ children, start, end }) => {
  const ref = useRef();
  const scroll = useScroll();

  useFrame(() => {
    if (!ref.current) return;

    const offset = scroll.offset;
    let opacity = 0;

    // Calculate opacity based on scroll position
    if (offset >= start && offset <= end) {
      const fadeRange = 0.05; // 5% fade in/out
      const fadeInEnd = start + fadeRange;
      const fadeOutStart = end - fadeRange;

      // Fade in
      if (offset < fadeInEnd) {
        opacity = (offset - start) / fadeRange;
      }
      // Fade out
      else if (offset > fadeOutStart) {
        opacity = (end - offset) / fadeRange;
      }
      // Fully visible
      else {
        opacity = 1;
      }
    }

    ref.current.style.opacity = opacity;
  });

  return (
    <div ref={ref} className="text-section">
      {children}
    </div>
  );
};

export const EnhancedTextOverlay = () => {
  const textSections = [
    {
      id: 1,
      start: 0.05,
      end: 0.15,
      content: (
        <div className="text-content">
          <h1>Welcome Aboard</h1>
          <p>This is the beginning of our journey through the cosmos.</p>
        </div>
      ),
    },
    {
      id: 2,
      start: 0.25,
      end: 0.35,
      content: (
        <div className="text-content">
          <h2>Exploring the Cockpit</h2>
          <p>
            State-of-the-art navigation systems guide our path through the
            stars.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      start: 0.45,
      end: 0.55,
      content: (
        <div className="text-content">
          <h2>Engine Room</h2>
          <p>The heart of the ship, powered by revolutionary technology.</p>
        </div>
      ),
    },
    {
      id: 4,
      start: 0.65,
      end: 0.75,
      content: (
        <div className="text-content">
          <h2>Living Quarters</h2>
          <p>
            Comfort and functionality merge in our advanced habitat modules.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      start: 0.85,
      end: 0.95,
      content: (
        <div className="text-content">
          <h1>Mission Complete</h1>
          <p>Thank you for joining this interstellar expedition.</p>
        </div>
      ),
    },
  ];

  return (
    <Scroll html>
      {/* Main scrollable content - empty sections to match your 60 pages */}
      <div className="scroll-content">
        {Array.from({ length: 60 }).map((_, index) => (
          <section key={index} className="h-screen" />
        ))}
      </div>

      {/* Fixed overlay for text */}
      <div className="text-overlay-container">
        {textSections.map((section) => (
          <TextSection key={section.id} start={section.start} end={section.end}>
            {section.content}
          </TextSection>
        ))}
      </div>
    </Scroll>
  );
};

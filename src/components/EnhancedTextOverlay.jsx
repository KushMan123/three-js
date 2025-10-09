// EnhancedTextOverlay.jsx
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import "../styles/TextOverlay.css";

export const EnhancedTextOverlay = () => {
  const scroll = useScroll();
  const debugRef = useRef();

  useFrame(() => {
    if (debugRef.current && scroll) {
      debugRef.current.textContent = `Scroll: ${scroll.offset.toFixed(3)}`;
    }
  });

  const textSections = [
    {
      id: 1,
      start: 0.05,
      end: 0.15,
      content: "Section 1 - Welcome",
    },
    {
      id: 2,
      start: 0.25,
      end: 0.35,
      content: "Section 2 - Cockpit",
    },
  ];

  return (
    <Scroll html>
      <div className="text-overlay-container">
        {/* Debug element to see if scroll is working */}
        <div
          ref={debugRef}
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            color: "white",
            background: "black",
            padding: "10px",
            zIndex: 10000,
          }}
        >
          Scroll: 0.000
        </div>

        {/* Simple text sections */}
        {textSections.map((section) => (
          <section
            key={section.id}
            className="h-screen"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "2rem",
            }}
          >
            {section.content}
          </section>
        ))}
      </div>
    </Scroll>
  );
};

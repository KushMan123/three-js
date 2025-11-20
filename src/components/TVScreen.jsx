import { useEffect, useState } from "react";
import { useScrollStore } from "../store/scrollStore";

// Define multiple scroll ranges where TV screen should be visible
const TV_SCROLL_RANGES = [
  { start: 0.57, end: 0.611 }, // Cockpit section
  // Add more ranges as needed
];

export const TVScreen = () => {
  const dreiScroll = useScrollStore((s) => s.dreiScroll);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const shouldBEVisible = TV_SCROLL_RANGES.some(
      (range) => dreiScroll >= range.start && dreiScroll < range.end
    );

    setIsVisible(shouldBEVisible);
  }, [dreiScroll]);

  return (
    <div className={`tv-screen-container ${isVisible ? "visible" : " "}`}>
      <div class="tv-content-container">
        <div class="tv-content">
          <h1>Video Title</h1>
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
          <button>
            <a>Watch Video</a>
          </button>
        </div>
        '
        <div class="tv-content-image">
          <img src="/textures/command_center_screen.jpg" />
        </div>
      </div>
    </div>
  );
};

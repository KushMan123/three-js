import { useRef } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const MainmenuText = ({ text, onButtonClick }) => {
  const textRef = useRef(null);
  const intervalRef = useRef(null);

  const handleMouseOver = () => {
    const element = textRef.current;
    const finalText = text;
    let iteration = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      element.innerText = finalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return finalText[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= finalText.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  };

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div className="mainmenu-content">
      <h1 ref={textRef} onMouseOver={handleMouseOver} data-value={text}>
        {text}
      </h1>
      <div className="btn" onClick={handleButtonClick} style={{ cursor: 'pointer' }}>
        <span className="btn__circle"></span>
        <span className="btn__white-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="icon-arrow-right"
            viewBox="0 0 21 12"
          >
            <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
          </svg>
        </span>
        <span className="btn__text">Discover the project</span>
      </div>
    </div>
  );
};

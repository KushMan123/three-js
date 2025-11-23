import { useEffect, useRef } from "react";

export const MainmenuBlob = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        {
          duration: 3000,
          fill: "forwards",
        }
      );
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <div className="blob" ref={blobRef}></div>
      <div className="blur"></div>
    </>
  );
};
